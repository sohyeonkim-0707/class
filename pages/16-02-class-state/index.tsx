// class형 컴포넌트 (counter 실습)
// this 에 대한 작동이론에 알 필요 있음

import { Component } from "react";

// function 대신 class 써줌;
// state 사용은? > 이 개념이 없지만 이것을 쓰고 싶으면 extens 라는 것을 쓴다.
// Componenet 기능을 가진 것으로 확장을 한다는 뜻
// 컴포넌트 기능을 가진 클래스

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // 컴포넌트에서 제공하는 것이라 이름 바꾸면 안됨
  state = {
    count: 99,
  };

  onClickCounter = () => {
    // console.log("카운트 클릭");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    })); // 자동으로 컴포넌트 안에 setState 내장되어 있음
  };

  // this 는 클래스 자체를 의미
  render() {
    return (
      <div>
        <div> 현재카운드: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!</button>
      </div>
    );
  }
}
