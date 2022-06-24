// 파일명을 last라고 적긴했지만 시작페이지 마지막페이지 둘다 할 거임
// - page 로 안넘어가게 하기
// 마지막페이지 지정해주기
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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

// 게시글 총 개수 알기
// 객체로 받아오는 것이 아니라서 중괄호 필요 없음
const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const MyColumn = styled.div`
  /* width: 25%; */
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARD_COUNT);

  // 마지막 페이지 구하기
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    // 이전 페이지 버튼을 눌렀을 때 - 페이지로 못 넘어가게 하기
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  // 1) lastPage 마지막 페이지 계산하기 ex) 35개 게시글이 있다면 한 페이지에 10개 나오니까 총 4페이지 (올림) 총 개수 나누기 10 하고 올림
  // 총 개수는 백엔드에서 제공을 해줌 fetchBoardsCount 글 총 개수를 10으로 나누고 올림을 해주면 마지막 페이지 lastPage 가 된다.
  // 2) startPage <= lastPage : 시작페이지는 마지막페이지보다 작거나 같아야 한다.
  const onClickNextPage = () => {
    // 전체 조건에 대해서 부정
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10); // 기존 +10
    refetch({ page: startPage + 10 });
  };

  console.log(data);
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>

      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <span
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {` `}
            {index + startPage}
          </span>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
