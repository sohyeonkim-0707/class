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

  const onLoadMore = () => {
    if (!data) return; // 만약에 데이터가 없다면 스크롤 실행 방지

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoards.length / 10) + 1,
      }, // 다음페이지 (현재까지 받은 페이지에서 받은 데이터에 fetchBoards 의 길이를 구해야함)

      updateQuery: (prev, { fetchMoreResult }) => {
        // 이전(현재 표출 중인)데이터 + 다음 표출 데이터
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] }; // 다음 표출될 데이터 없을 경우 표출될 상황 만약 개수가 없다면 기존 페치보드만 넣어줘

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards], // 이전의 10개를 뿌리고, 추가로 받은 10개를 붙여서 fetchBoard를 업데이트
        };
      }, // 이전 데이터와 다음 데이터 함께 표출(스프레드 연산자)
    });
  };

  return (
    // infiniteScroll 컴포넌트 형식을 사용
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          {/* <MyColumn>{el._id}</MyColumn> */}
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </InfiniteScroll>
  );
}
