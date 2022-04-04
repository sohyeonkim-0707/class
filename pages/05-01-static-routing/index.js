// 정적라우팅

// 라우터 객체는 next/Router 모듈에서 useRouter 훅을 불러와 사용할 수 있다.
import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  // Page 컴포넌트 내에 useRouter를 통해 생생된 router object (라우터객체)를 이용하여 push의 정보를 얻는다
  const router = useRouter();

  const onClickMove = () => {
    // router.push 현재 페이지에서 다른 페이지로 이동 > 가장 기본적인 transition
    router.push("/05-02-static-routed");
  };

  return <button onClick={onClickMove}>페이지 이동하기 !!! </button>;
}
