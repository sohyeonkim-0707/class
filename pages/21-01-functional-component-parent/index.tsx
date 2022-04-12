// 힘수형 컴포넌트
// 부모컴포넌트
// 자식이 부모에 임폴트 되게끔
// 부모는 자식에게 props

import FunctionalComponenetChildPage from "../21-02-functional-component-child";

export default function FunctionalComponenetParentPage() {
  // return <FunctionalComponenetChildPage count={123} />;
  return <>{FunctionalComponenetChildPage({ count: 123 })};</>;
}

// 함수형컴포넌트는 함수구나
// p가 함수의 매게변수이니까 궅이p를 쓰지 않고 aaa 해도 됨
