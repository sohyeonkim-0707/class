// 유틸리티 타입은 개조해서 쓰는 것

export default function TypescriptPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }
  // 1. Pick 타입/ 특정 name, age를 픽
  type Mytype1 = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입 /school 이 빠짐
  type Mytype2 = Omit<IProfile, "school">;

  // 3. Partial 타입/ 물음표가 붙음
  type Mytype3 = Partial<IProfile>;

  // 4. Required 타입
  type Mytype4 = Required<IProfile>;

  // 5. Record 타입
  type ZZZ = "aaa" | "qqq" | "rrr"; // union 타입, 합집합
  // let apple: ZZZ
  // apple ="qqq"
  type Mytype5 = Record<ZZZ, IProfile>;

  // === 추가(선언병합) -type vs interface 차이점===
  // 인터페이스와 타입의 차이는 무엇인가요?
  // 타입은 한 번 만들면 끝이고 인터페이스 경우 같은 이름으로 똑같은 얘를 또 만들 수 있다.

  interface IProfile {
    candy: number;
  }

  let profile: IProfile;
  profile = {
    candy: 3,
    age: 10,
    hobby: "취침",
  };

  return <div>타입스크립트 연습하기</div>;
}
