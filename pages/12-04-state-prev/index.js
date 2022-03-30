// modal 부분 리택토링 하기 위해 알아야할 state 요소
// 카운트 가지고 확인
import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  // const sum = () =
  const onClickCount = () => {
    // setCount(count+1)
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCount}>카운트 올리기!!! </button>
    </div>
  );
}

// 원래
