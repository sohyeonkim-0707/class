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
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery(FETCH_BOARDS, {});

  const onClickEdit = (event) => {
    const aaa = myIndex;
    aaa[event.target.id] = true; // myindex 0번째 // 원본이 여기서 true로 바뀜
    console.log(aaa); // 잘 찍혔는지 확인하고 바뀐 얘를 setMyIndex에 넣어줘
    setMyIndex([...aaa]); // 기존값과 현재 들어온 값을 비교 하고 바뀌어야만 작동을 한다. 얕은복사해줘야해
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && (
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
          {myIndex[index] === true && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </div>
  );
}
