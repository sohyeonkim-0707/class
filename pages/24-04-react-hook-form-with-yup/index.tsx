import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}
const Error = styled.div`
  color: red;
  font-size: 9px;
`;

const LoginButton = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "yellow" : "")};
`;

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

interface IFormValues {
  email?: string;
  password?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data); // data 결과 찍어보기
  };

  console.log("리렌더링 체크 !!! "); // rerendering 확인해보기 > 효율 좋은지

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <input type="text" {...register("email")}></input>
      <Error>{formState.errors.email?.message}</Error>
      비밀번호: <input type="password" {...register("password")}></input>
      <Error>{formState.errors.password?.message}</Error>
      <LoginButton isActive={formState.isValid}>로그인</LoginButton>
    </form>
  );
}
