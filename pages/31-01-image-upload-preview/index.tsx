import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPlage() {
  const [imageUrl, setImageUrl] = useState("");

  // 📌 이미지 들어오는 함수
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // file 받아온다. file 이 없을수도 있으니까 옵셔널 체이닝 (배열도 가능)
    if (!file) {
      // 이미지 검증
      alert("파일이 없습니다!");
      return;
    }
    // 내장된 기능 new FileReader: 파일 객체를 이용해 내용을 읽고 사용자 컴퓨터에 저장하는 것을 가능하게 해주는 기능
    const fileReader = new FileReader();
    // 파일을 url 형태로 읽겠다,  file 을 읽어서 임시 URL을 형태로 만들어준다.
    fileReader.readAsDataURL(file);
    // 이미지가 성공적으로 읽힌 경우 onload 함수가 실행 > 다 읽어진 결과물 data 가 들어옴
    fileReader.onload = (data) => {
      // string 타입시에만 실행
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result); // url 형태로 읽은 결과물 // 궁금하니까 콘솔로 찍어보자
        // 이 url을 state 에 넣어주자
        setImageUrl(data.target?.result); // 이미지 저장이 되니까  imagUrl이 만들어지겠지!!
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </div>
  );
}
