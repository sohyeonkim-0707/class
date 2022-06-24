//이전페이지 다음페이지

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

// 게시글 몇번 보여줘가 아니라 전체 보여주니까 넘버 빼도 됨
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
  /* width: 25%; */
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  // 기준을 시작페이지 '1'로 잡는다
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  // 이전페이지
  // 기준 페이지에 - 10
  const onClickPrevPage = () => {
    // 기존에 - 10
    setStartPage((prev) => prev - 10);
  };

  // 다음페이지
  // 기준 페이지에 + 10
  const onClickNextPage = () => {
    // 기존에 + 10
    setStartPage((prev) => prev + 10);
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
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          onClick={onClickPage}
          id={String(index + startPage)}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}

// 문제가 있음
// - page 가 나오게 됨
// 마지막 페이지도 끝없이 나옴
// 시작과 끝을 정해줘야한다.
