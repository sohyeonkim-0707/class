//  장바구니 실습 07-02-map-board
// 게시글 목록을 fetchBoad로 불러와서
// map으로 뿌리고
// 오른쪽에 장바구니 담기 버튼 만들어줄건데
// 이 버튼 클릭하면 특정 함수 실행
// 그 함수에서 로컬스토리지에 해당 아이템 담도록

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types"; // codegen

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
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
  width: 200px;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS, {});

  const onClickBasket = (el) => () => {
    console.log(el);
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]"); // 지난번까지 담았던 장바구니

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id); // temp 임시로 담아놓는다
    if (temp.length === 1) {
      alert("이미 당신 물품입니다!!!");
      return; // 반환하면서 이 함수를 종료
    }

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </MyRow>
      ))}
    </div>
  );
}
