// 웹 에디터 실습
// react hook form 이랑 같이 사용해보자 !!!!!!!!
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // css 최신방식
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditerPage() {
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
    setValue("Contents", value === "<p><br></p>" ? "" : value);
    // onChange 됐다고 react-hook-form 에 알려주는 기능 !!!
    trigger("contents");
  };
  return (
    <div>
      작성자: <input type="text" {...register("writer")}></input>
      <br />
      비밀번호: <input type="password" {...register("password")}></input>
      <br />
      제목: <input type="text" {...register("title")}></input>
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
