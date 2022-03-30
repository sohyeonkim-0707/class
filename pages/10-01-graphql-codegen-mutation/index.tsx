// 게시글등록
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

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
  const [myWriter, setMywriter] = useState("");
  const [myTitle, setMytitle] = useState("");
  const [myContents, setMycontents] = useState("");

  const [data, setData] = useState("");
  const [creatBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await creatBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });

    console.log(result);
    console.log(result.data?.createBoard?.message);
    if (result.data?.createBoard?.message)
      setData(result.data?.createBoard?.message);
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
      {/* <div>{data}</div> */}
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
