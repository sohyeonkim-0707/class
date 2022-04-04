import { useState } from "react"; // 리액트에서 제공해주는 기능

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={counter}>카운트 올리기!!!</button>
    </div> /* 내보낼때 끝에 껍대기 하나 있어야함 <>fragment</> 써도 됨 */
  );
}

// ls -al 제이슨 있는 곳에서 yarn dec
