// 무한스크롤
// yarn add react-infinite-scroller
// 07-02 파일 사용

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS); // fetchMore 추가적으로 10개를 더 페치한다

  // 📌 무한스크롤 함수
  const onLoadMore = () => {
    if (!data) return; // 만약에 데이터가 없다면 스크롤 실행 안됨

    // Q. refetch 와 fetchmore 차이는 ?
    // refetch : 기존에 했던 것을 다시 패치하는 것
    // fetchmore: 기존에 n개가 있었는데 추가로 더 fetch를 한다.
    fetchMore({
      variables: {
        // 현재까지 받은 페이지 fetchBoards 의 수 구하기
        // 기존에 받았던 데이터 갯수의 길이 / 10  = 현재까지 받은 페이지 수
        // + 1 = 다음페이지
        page: Math.ceil(data.fetchBoards.length / 10) + 1,
      },
      // updateQuery: 기존에 저장되어있던 쿼리를 업데이트
      // prev: 이전 데이터 1 ~ 10 (기존 페이지)
      // fetchMoreResult: 11 ~ 20 번 (추가로 요청한 페이지)
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] }; // 다음 표출될 데이터 없을 경우 기존 페치보드만 넣어주기

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards], // 기존의 10개를 뿌리고, 추가로 받은 10개를 뿌리기 (이전 데이터와 다음 데이터 함께 표출 > 스프레드 연산자)
        };
      },
    });
  };

  return (
    // infiniteScroll 컴포넌트 형식 사용
    // hasMore: 데이터 더 있는지 없는지 check
    // loadMore: 데이터가 더 있으면 스크롤 내렸을 때 실행시켜줄 함수

    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </InfiniteScroll>
  );
}

//useWindow = {false}
// 스크롤을 감싸는 태그에 높이를 지정하고(지정한 것보다 커지면 작동) overflow:auto 를 준다.
// 위 두개가 빠지면 바디스크롤이 작동을 함
