// 01.기본세팅
// 함수형컴포넌트먼저 > function 함수이름
// 함수와 함수형 컴포넌트는 다름 html 있어야함 > return

// pages 규칙 함수형 컴포넌트를 만들고 이것을 내보내야 웹브라우저에서 볼 수 있기에 앞에 'export default ' 붙여준다.
// rest api 요청 담당자 axios 를 가져온다

import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [data, setData] = useState("");

  const callRestApi = async () => {
    // 게시물 등록 버튼을 클릭했을때 실행되는 함수에서 axios 요청을한다.
    const result = await axios.get("https://koreanjson.com/posts/1");
    // koreasond의 api 에서 정보를 가지고 겟하고 싶어! 그럼 요청 담당자 엑시오스인 내가 요청을 할게!
    // 근데 비동기라 실행 방식이라 오류가 많다. 비동기를 동기로 바꿔주는 await와 async 이 두 도구가 필요함
    // 자 그럼 await가 작성된 코드 실행이 완전히 완료되기 전까지는 하단의 코드로 넘어가지 않아.
    console.log(result);
    console.log(result.data.title);
    setData(result.data.title);
  };

  return (
    <div>
      <div>{data}</div>
      <button onClick={callRestApi}>REST-API 요청하기!!!</button>
    </div>
  );
}
