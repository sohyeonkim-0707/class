// 등록하기
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // css 최신방식
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditerPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  // useForm 사용
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // 다이나믹 라우팅
  const onChangeContents = (value: string) => {
    console.log(value);
    // 지금 입력한 value 가 <p><br></p> 이 값이면 강제로 "" 빈값으로 만들어줘

    // register로 등록하지 않고 강제로 값을 넣어주는 기능 !!!
    // constents라는 해당 키에 value를 강제로 넣어줘
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // onChange 됐다고 react-hook-form 에 알려주는 기능 !!!
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두 입력해 주세요!");
      return;
    }

    // 등록 뮤테이션
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(
        `/27-05-web-editor-detail-hydration/${result.data.createBoard._id}`
      );
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")}></input>
      <br />
      비밀번호: <input type="password" {...register("password")}></input>
      <br />
      제목: <input type="text" {...register("title")}></input>
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
