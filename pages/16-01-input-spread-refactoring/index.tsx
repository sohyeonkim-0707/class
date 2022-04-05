// 04-05 파일
// spread 연산자 이용하여 repectoring 하기

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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
  // const [myWriter, setMywriter] = useState("");
  // const [myTitle, setMytitle] = useState("");
  // const [myContents, setMycontents] = useState("");

  // repectoring 1)
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    const result = await callApi({
      // repectoring 2)
      variables: { ...inputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  // repectoring 3)
  const onChangeInputs = (event) => {
    setInputs({ ...inputs, [event.target.it]: event.target.value });
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!! </button>
    </div>
  );
}
