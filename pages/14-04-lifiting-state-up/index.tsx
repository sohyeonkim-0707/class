// state 끌어올리기
// count
import { useState } from "react";
import Child1 from "../../src/components/units/board/14-flifting-state-up/Child1";
import Child2 from "../../src/components/units/board/14-flifting-state-up/Child2";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);

  // 방법 -1
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <div> ================================= </div>
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </div>
  );
}
