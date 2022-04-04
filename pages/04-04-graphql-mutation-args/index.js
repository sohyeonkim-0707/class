// 회원가입, 게시물 작성 내용 등을 서버컴퓨터에 전송하기 위해 변수에 담아둘 때 사용
import { useState } from "react";
// graphql 요청에 필요한 도구들 불러오기
import { useMutation, gql } from "@apollo/client";

// graphql 코드생성
const CREATE_BOARD = gql`
  mutation mymutation($aaa: String, $bbb: String, $ccc: String) {
    createBoard(writer: $aaa, title: $bbb, contents: $ccc) {
      _id
      number
      message
    }
  }
`;
// mymutation 이 부분 임의로 정해줄 수 있음
// $--- 여기도 임의로 정해줄 수 있음

export default function GraphqlMutationPage() {
  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);
  // 위에서 만든 gql 변수/상수 를 이용해서 useMutation을 만들어줌
  // callApi 이 부분 아무 이름 가능

  // 게시물 등록 버튼을 클릭했을때 실행되는 함수에서 mutation 코드를 실행
  const callGraphqlApi = async () => {
    // await +서버에 요청하는 코드(callApi)
    const result = await callApi({
      variables: {
        aaa: "철수",
        bbb: "ddd",
        ccc: "dd",
      },
    });

    console.log(result); // 결과물 확인하기
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  return (
    <div>
      <div>{data}</div>
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!! </button>
    </div>
  );
}
