// 19-03-image-ref
import { ChangeEvent, useState, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import { checkFileValidation } from "../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPag() {
  const fileRef = useRef<HTMLInputElement>(null);

  // 이미지 담는 state 생성
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files && event.target.files[0]; // 0번째 파일이 선택한 파일이다.
    const file = event.target.files?.[0]; // 0번째 파일이 선택한 파일이다.
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      // upload 파일 요청
      // result 안에 이미지 주소 담겨 있음
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click(); // Ref 에는 current 안에 click 이라는 기능이 있음 current는 fileRef에 들어온 태그를 뜻하고 그 태그를 click하겠다는 기능
  };

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      <div
        style={{ width: "150px", height: "150px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`}></img>
    </div>
  );
}
