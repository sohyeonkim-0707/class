// 댓글 수정하기 첫번째 연습
// 댓글 목록을 불러오고 시작
// 3번만 다른 그림을 보여주고 싶어 > 조건을 주면 된다. (삼항연산자)

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
  width: 25%;
`;

export default function MapBoardPage() {
  const [myIndex, setMyIndex] = useState(-1); // 초기값을 -1
  const { data } = useQuery(FETCH_BOARDS, {});

  const onClickEdit = (event) => {
    setMyIndex(Number(event.target.id)); // 몇번째를 클릭했는지 값이 나오게 됨 > 그 값을 state에 넣어줘
  };

  console.log(data);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && ( // 인덱스가 2가 아니면 밑에 정상적으로 보여주고 2면 수정하기 화면입니다를 보여줘
            <MyRow>
              <MyColumn>
                <input type="checkbox" />
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {index === myIndex && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </div>
  );
}
