// 여기는 컨테이너 컴포넌트

import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [myWriter, setMywriter] = useState("");
  const [myTitle, setMytitle] = useState("");
  const [myContents, setMycontents] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);
  const [updatedBoard] = useMutation(UPDATE_BOARD); // 업데이트하는것

  // 수정하기일때만 실행되는 함수
  const onClickUpdate = async () => {
    interface IMyVariables {
      number: number;
      writer?: string;
      title?: string;
      contents?: string;
    }
    const myVariables: IMyVariables = { number: Number(router.query.mynumber) };

    // myWriter라는 스테이트가 비어있지 않으면
    if (myWriter !== "") myVariables.writer = myWriter;
    if (myTitle !== "") myVariables.title = myTitle;
    if (myContents !== "") myVariables.contents = myContents;

    await updatedBoard({
      // 어떤 게시글을 업데이트할지 넘버가 붙음 플레이그라운드 보기
      variables: myVariables,
    });
    alert("게시글 수정에 성공하였습니다.");
    router.push(`/09-01-boards/${router.query.mynumber}`);
  };

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    // console.log(result)
    // console.log(result.data.createBoard.message)
    // setData(result.data.createBoard.message)
    alert("게시글 등록에 성공하였습니다.");
    router.push(`/09-01-boards/${result.data.createBoard.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMywriter(event.target.value);
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMytitle(event.target.value);
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMycontents(event.target.value);
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
