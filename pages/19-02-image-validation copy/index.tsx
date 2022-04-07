// 이미지 검증
import { ChangeEvent, useState } from "react";
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

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      <input type="file" onChange={onChangeFile}></input>
      <img src={`https://storage.googleapis.com/${imageUrl}`}></img>
    </div>
  );
}
