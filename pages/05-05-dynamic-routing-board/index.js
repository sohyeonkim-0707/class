import { useRouter } from "next/router";
// 게시글목록페이지 > 동적라우팅

export default function StaticRoutingPage() {
  const router = useRouter();
  // 라우터 객체는 next/Router 모듈에서 useRouter훅을 불러와 사용할 수 있다.

  const onClickMove1 = () => {
    router.push("/05-06-dynamic-routed-board/83011");
  };
  const onClickMove2 = () => {
    router.push("/05-06-dynamic-routed-board/83012");
  };
  const onClickMove3 = () => {
    router.push("/05-06-dynamic-routed-board/83013");
  };

  return (
    <div>
      <button onClick={onClickMove1}>83011번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>83012번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>83013번 게시글로 이동하기</button>
    </div>
  );
}
