import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm();

  formState.isSubmitting;

  const onClickSubmit = (data: IFormValues) => {
    console.log(data); // data 결과 찍어보기
  };

  console.log("리렌더링 체크 !!! ");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")}></input>
      제목: <input type="text" {...register("title")}></input>
      내용: <input type="text" {...register("contents")}></input>
      <button disabled={formState.isSubmitting}>등록하기</button>
    </form>
  );
}
