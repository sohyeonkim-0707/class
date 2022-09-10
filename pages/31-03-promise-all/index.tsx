export default function PromiseAllPage() {
  const onClickPromise = async () => {
    console.time("promise 시작!!!");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("promise 시작!!!");
  };

  // 📌 Promise.all 메서드는 여러 개의 비동기 처리를 모두 병렬로 처리할 때 사용.
  const onClickPromiseAll = async () => {
    // 1. 하나하나씩 확인하는 방법
    // console.time("Promise.all 시작!!! ");
    // // 동시에 실행시키고 싶은 promise 를 배열 형태로 넣어라
    // // 각각을 기다리는 것이 아니라 Promise.all 에 한 번 만 기다릴 거임
    // // 최대 3초가 걸림 .. .3개가 다 받아지기 전까지 아래를 실행하지 않음
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("Promise.all 시작!!! ");

    // 2. 한방에 확인하는 방법 map 써주기
    console.time("Promise.all 시작!!! ");

    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("Promise.all 시작!!! ");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기!!!</button>
      <button onClick={onClickPromiseAll}>promise.all 연습하기!!!</button>
    </div>
  );
}
