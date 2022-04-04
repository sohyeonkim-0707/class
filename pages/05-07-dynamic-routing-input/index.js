import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation mymutation($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [myWriter, setMywriter] = useState("");
  const [myTitle, setMytitle] = useState("");
  const [myContents, setMycontents] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  // 게시물 등록 버튼을 클릭했을때 실행되는 함수에서 mutation 코드를 실행
  const callGraphqlApi = async () => {
    try {
      const result = await callApi({
        // await +서버에 요청하는 코드(callApi)
        variables: { writer: myWriter, title: myTitle, contents: myContents }, // 입력값
      }); // graphql-API 방식
      console.log(result);
      console.log(result.data.createBoard.message);
      setData(result.data.createBoard.message);
      alert("게시글 등록에 성공했어요!");
      alert("상세 페이지로 이동해 볼까요?");
      router.push(
        `/05-08-dynamic-routed-input/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeWriter = (event) => {
    setMywriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setMytitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setMycontents(event.target.value);
  };

  return (
    <div>
      <div>{data}</div>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!! </button>
    </div>
  );
}
