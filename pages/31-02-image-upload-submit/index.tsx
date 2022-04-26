import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPlage() {
  const [file1, setFile1] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  // 암사 url 만들기
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // file 받아옴 //file 이 없을수도 있으니까 옵셔널 체이닝 (배열도 가능)
    if (!file) {
      // 이미지 검증
      alert("파일이 없습니다!");
      return;
    }
    // 내장된 기능 new FileReader
    const fileReader = new FileReader();
    // url 형태로 파일리더를 읽겟다.  file 을 임시 url 형태로 만들어줌
    fileReader.readAsDataURL(file); //  file (blab) 파일
    // 파일을 읽자 > 다 읽어진 결과물 data 가 들어옴
    fileReader.onload = (data) => {
      // string 타입시에만 실행
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result); // url 형태로 읽은 결과물 // 궁금하니까 콘솔로 찍어보자
        // 이 url을 state 에 넣어주자
        setImageUrl(data.target?.result); // 이미지 저장이 되니까  imagUrl이 만들어지겠지!! 이미지 주소
        setFile1(file); // state 에 넣음 나중에 올릴거라서
      }
    };
  };

  // 📌 게시글 등록하기
  // 이 위치에서 uploadFile, createBoard 둘 다 실행이 됨
  // createBoard를 할건데 imageUrl 을 넣을 거임
  const onClickSubmit = async () => {
    const result1 = await uploadFile({ variables: { file: file1 } });
    const imageUrl = result1.data.uploadFile.url;

    // 하드코딩
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요",
          contents: "이미지업로드입니다.",
          images: [imageUrl], // createBoard를 할건데 imageUrl 을 넣어야함
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
