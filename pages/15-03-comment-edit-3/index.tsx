// 댓글 수정하기 첫번째 연습
// 댓글 목록을 불러오고 시작
// 실무에서는 3번으 쓴다.
// 3번만 다른 그림을 보여주고 싶어 > 조건을 주면 된다. (삼항연산자)

import { useQuery, gql } from "@apollo/client";

import BoardCommentItem from "../../src/components/units/board/15-board-comment";

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

export default function MapBoardPage() {
  //   const [myIndex, setMyIndex] = useState([
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //   ]);
  const { data } = useQuery(FETCH_BOARDS, {});

  //   const onClickEdit = (event) => {
  //     const aaa = myIndex;
  //     aaa[event.target.id] = true; // myindex 0번째 // 원본이 여기서 true로 바뀜
  //     console.log(aaa); // 잘 찍혔는지 확인하고 바뀐 얘를 setMyIndex에 넣어줘
  //     setMyIndex([...aaa]); // 기존값과 현재 들어온 값을 비교 하고 바뀌어야만 작동을 한다. 얕은복사해줘야해
  //   };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <BoardCommentItem key={el._id} el={el} /> // map을 통해 10개가 그려지는 중
      ))}
    </div>
  );
}
