// 07-02 가지고 실습

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) }); // event.target.id; 텍스트라 숫자로 바꿔줘
    // event.target.id 우리가 어떤것을 클릭했는지 알 수 있는 부분
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
      {/* // index + 1 로 바꾼 이유는 뭐였지  */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
      {/* {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <span key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </span>
      ))} */}
      {/* <span onClick={onClickPage} id="1">
        1
      </span>
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span> */}
    </div>
  );
}

// 이 목록에 대한 1페이지 2페이지 즉 다시 가져오는거 리패치
