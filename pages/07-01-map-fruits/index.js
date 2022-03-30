// 하드코딩한 것은 상단에 두거나 밖에 따로 둔다.
// 왜? state가 바뀌면 다시 그려지는데
// 리렌더링 되어도 새로 안 만들어짐
const FRUITS = [
  { number: 1, title: "레드향" }, // <div>1 레드향</div>
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export default function MapFruitsPage() {
  // const aaa = [<div>1 레드향</div>,<div>2 샤인머스켓</div>,<div>3 산청딸기</div>]

  // const bbb =["나의 레드향", "나의 샤인머스켓","나의 산청딸기"].map((el) =>(<div>{el}</div>))

  // const ccc =FRUITS.map((el) => (<div>{el.number} {el.title}</div>))

  // 하지만 실무에서는 통쨰로 넣는 방식을 많이 쓴다. 왜냐하면 우리는 시선이 위에서아래로 내려감. 아 디아이브이 있고 이런거 열개 있겠구나라고 생각! 특히나
  // 길이가 길면 답답...

  return (
    <div>
      {FRUITS.map((el) => (
        <div>
          {el.number} {el.title}
        </div>
      ))}
    </div>
  );
}
