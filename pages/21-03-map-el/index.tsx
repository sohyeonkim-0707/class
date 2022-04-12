export default function MapElPage() {
  // 1. 기본방법
  // ["철수", "영희","훈이"].map((el) => (el + "어린이"))
  // forEach가 map 보다 빠름
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  // 2. 매개변수 변경한 방법
  ["철수", "영희", "훈이"].forEach((aaa, bbb) => {
    console.log("aaa:", aaa);
    console.log("bbb:", bbb);
  });

  // 3. 함수 선언식
  ["철수", "영희", "훈이"].forEach(function (aaa, bbb) {
    console.log("aaa:", aaa);
    console.log("bbb:", bbb);
  });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el:", el); // 숫자
    console.log("index:", index); // 이름
  });

  return <div>el 알아보기</div>;
}
