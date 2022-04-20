// 1. any 타입(그냥 자바스크립트랑 같음)
const getAny = (args: any) => {
  return args + 2;
};
const result1 = getAny("철수");

// any는 기존의 자바스크립트랑 별 차이가 없음
// 여기서 한 단계 더 발전한 것이 있는데
// 그것은 unknown

// 2. unknown 타입 (개발자에게 안전하게 코딩하도록 유도 !!! )
// 애니랑 비슷
// 어? 나 이거 뭔지 모르겠어
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요";
  }
};
const result2 = getUnknown("철수");

// 동일한 코드인데 2번은 에러가 있음
// 아무거나 들어올 수 있는데 상황별로 들어오는 것에 대한 내용이 구체적으로 들어가야함
// 모르는 데이터가 있으면 unknown을 써라
// 더 안전한 코드
// 타입스크립트를 적용하면 결과에 대한 예측도 가능해진다
// any에 마우스 올리면 any가 나오듯이///
