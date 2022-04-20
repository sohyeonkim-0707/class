// react-quill 실습
// 웹 에디터 실습
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // css 최신방식
import dynamic from "next/dynamic";
// 다이나믹 라우팅
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditerPage() {
  // 다이나믹 라우팅
  const onChangeContents = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      작성자: <input type="text"></input>
      <br />
      비밀번호: <input type="password"></input>
      <br />
      제목: <input type="text"></input>
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
