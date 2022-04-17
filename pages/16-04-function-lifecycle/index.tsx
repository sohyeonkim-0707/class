// function-lifecycle 실습 // 4주차
// 함수형 컴포넌트 useEffect 사용해서 생명주기 !!!
// 생명주기 메서드, 훅은 기본적으로 화면이 render 된 후에 실행횐다.

import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
// useRef 사용해서 input 태그 선택하고, focus() 기능 활용하여 커서를 깜빡이도록 한다.

interface IState {
  count: number;
}
export default function CounterPage() {
  const router = useRouter();

  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(99);

  // 1. DidMount
  // 1)
  // componentDidMount() {
  //   console.log("마운트됨!!!");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }

  // 2)
  // useEffect(() => {
  //   console.log("마운트됨!!!");
  //   inputRef.current?.focus();
  // }, []);
  // 의존성 배열[]에 아무것도 넣지 않으면 Mount시에만 렌더해주고 끝나게 됨

  // 2. DidUpdate
  //
  // 1) componentDidUpdate() {
  //   console.log("수정되고 다시그려짐!!!");
  // }

  // 2)
  // useEffect(() => {
  //   console.log("수정되고 다시그려짐!!!");
  // });
  // 의존성 배열이 없기 때문에 뭐 하나라도 바뀌면 무조건 다시 실행

  useEffect(() => {
    console.log("수정되고 다시그려짐!!!");
  }, [count]);
  // count가 수정될때만 리렌더

  // 3. WillUnmount
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!");
  //   // 채팅방 나가기
  //   // api 요청!!!
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!");
  //   };
  // }, []);

  // 4. DidMount와 WillUnmount를 합치기!!
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();

    return () => {
      // 나갈때
      console.log("컴포넌트 사라짐!!!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예(1. 추가렌더링, 2. 무한루프)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    // console.log(this);
    // console.log("카운터 클릭!!!");
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게?!!");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
