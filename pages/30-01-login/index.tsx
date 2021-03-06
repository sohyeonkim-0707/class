import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import ConfirmModal from "../00_Modal/ConfirmModal";

// ๐ ํ ํฐ ๋ง๋ฃ์๊ฐ 5์ด
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    setAccessToken(accessToken);
    console.log(accessToken);
    // ConfirmModal;
    alert("๋ก๊ทธ์ธ์ ์ฑ๊ณตํ์์ต๋๋ค!!");
    router.push("/30-02-login-success");
  };

  return (
    <div>
      ์ด๋ฉ์ผ: <input type="text" onChange={onChangeEmail} />
      <br />
      ๋น๋ฐ๋ฒํธ: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>๋ก๊ทธ์ธํ๊ธฐ</button>
    </div>
  );
}
