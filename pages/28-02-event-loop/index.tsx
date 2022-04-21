// 우리가 여태 알고 있던 setTimeout, setInterval > 사실 올바르지 않음

export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("============ 시작 =========== ");
    setTimeout(() => {
      console.log("1초 뒤에 실행될 거야 !!!");
    }, 1000);
    console.log("============ 끝 =========== ");
  };

  return <button onClick={onClickTimer}>setTimeout 실행시키기 !!! </button>;
}
