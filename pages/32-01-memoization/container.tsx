// memoization
// 부모자식이 연결된 컴포넌트

import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩나다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // Math.random > 매번 새로운 값이 생성되는 것을 확인하기 위해 써봄
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 📌  useCallback
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1;
  }, []);

  // const onClickCountState = useCallback(() => {
  //   // console.log(countState + 1);
  //   // setCountState(countState + 1);
  //   setCountState((prev) => prev + 1);
  // }, []);

  // useMemo로 useCallback 만들어보기!!!
  const onClickCountState = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <div>
      <div>====================</div>
      <h1>이것은 컨테이너 입니다.</h1>
      <div>카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기 !!! </button>

      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기 !!! </button>
      <div>====================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
