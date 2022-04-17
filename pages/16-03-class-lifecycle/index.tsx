// class-lifecycle 실습 (컴포넌트 생명주기)
// 컴포넌트 생명주기는 컴포넌트가 브라우저에 나타나고 업데이트 되고, 사라지게 될 때 호출되는 메서드
// 특정 시점에 코드가 실행되도록 설정할 수 있음
import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}
export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = {
    count: 99,
  };

  // 라이플 사이클 메서드
  componentDidMount() {
    console.log("마운트됨!!!");
    this.inputRef.current?.focus();
    // 포커스 깜빡거리게 하기
  }

  componentDidUpdate() {
    console.log("수정되고 다시그려짐!!!");
  }

  componentWillUnmount() {
    console.log("컴포넌트 사라짐!!!");
    // 채팅방 나가기
    // api 요청!!!
  }

  // 카운트 올리기 함수
  onClickCounter = () => {
    console.log(this);
    // console.log("카운터 클릭!!!");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  // 현재 페이지 나가기 함수 _ componentWillUnmount를 보기위한
  onClickMove() {
    Router.push("/");
  }

  // 화면 그리는 부분
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <button onClick={this.onClickMove}>나가기!!!</button>
      </div>
    );
  }
}
