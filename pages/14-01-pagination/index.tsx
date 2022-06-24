// 07-02 가지고 실습

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

// Page를 받기위해 variables 로 넣어준다.
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
    // 객체 형태로 refetch 안에 바인딩해준다. event.target.id; 텍스트라 숫자 Number로 바꿔주기
    refetch({ page: Number(event.target.id) });
    // event.target.id 실재 우리가 어떤 것을 클릭했는지 알 수 있는 부분
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

      {/* 방법 3 */}
      {/* new Array(10) : 비어있는 배열 10개 생성됨*/}
      {/* new Array(10).fill(아무숫자): fill 을 해서 10에 "아무숫자"를 채워줌 */}
      {/* 1,2,3,4,5,6,7,8,9,10 을 채우고 싶다면? */}
      {/* 비어있는 배열 10개만 만들어도 index+1을 해주면 된다.*/}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}

      {/* 방법 2 */}
      {/* 자바스크립트를 작성하려면 {} 안에 써주기 */}
      {/* 방법 1과 같은 형식 다만 [] 안에 쓰는 것  */}
      {/* {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <span key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </span>
      ))} */}

      {/* 방법 1 */}
      {/* 만약 100 페이지까지 있으면 어떻게 할 것인가? 그리고 이것들을 하나하나 하드코딩 할 것인가? 아래들을 합칠 방법은? 다음 이전 페이지는? */}
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
