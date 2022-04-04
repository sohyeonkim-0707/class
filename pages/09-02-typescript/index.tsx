export default function TypescriptPage() {
  // 자동으로 처음에 들어간 값으로 타입이 추론이 된다. > 타입 추론 let aaa:string ="안녕하세요" > 요렇게 안써도 되는 것
  // 타입추론
  let aaa = "안녕하세요";
  aaa = 3;

  // 직접 명시하기 > 타입명시
  let bbb: string = "반갑습니다.";

  // 문자타입
  let ccc: string;
  ccc = "반가워요";
  ccc = 3;

  // 숫자타입
  let ddd: number = 10;
  ddd = "assdv";

  //불린타압
  let eee: boolean = true;
  eee = false;
  eee = "false"; // 자바스크립트에서 "false"면 빈 문자열이 아니니까 true로 작동함 이 오류를 잡아주기 위해 타입스크립트를 쓰는 것  > 이거 다시 생각하기

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
  let ggg: string[] = ["철수", "영희", "훈이", 13];
  let hhh: (number | string)[] = ["철수", "영희", "훈이", 13];

  // 객체타입 (직접만들어주기)
  interface IProfile {
    name: string;
    age: string | number;
    school: string;
    hobby?: string; // ? 붙이면 있어도 좋고 없어도 좋다
  }

  let profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };
  profile.age = "8살";
  profile.school = 123;

  // 함수타입 데이터를 받아주는 쪽에서 타입을 정한다.
  const add = (money1: number, money2: number, unit: string): string => {
    return money1 + money2 + unit;
  };
  const result = add(1000, 2000, "원");

  return <div>타입스크립트 연습하기!!!</div>;
}
