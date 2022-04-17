// axios를 이용해 open API 이용하기
import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  // 강아지 이미지 주소를 저장해둘 state
  const [dogUrl, setDogUrl] = useState(""); // 이미지 주소의 초기값

  // 브라우저가 실행되자마자 요청을 날릭 싶어 useEffect를 사용
  // 마운트 될 때 한번만 요청할 수 있도록 의존성배열( [ ] )을 적어줌
  // open api가 대부분 rest-API 이기 때문에 대부분 axios를 이용한다.
  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random"); // open API 주소
      setDogUrl(result.data.message);
    };

    // fetchDog 함수 호출해오기
    fetchDog();
  }, []);

  return (
    <div>
      <div>오픈 API 연습 !!! </div>
      <img src={dogUrl} />
    </div>
  );
}

// 브라우저가 실행되자마자 실행하려면, useEffect를 사용하지않고 그냥 적어줘도 되지않나요?
// 가능은 합니다. 하지만, 리렌더면에서 비효율적으로 작동됩니다.
// 리렌더의 조건에는 state의 변화가 있습니다. 그렇다면 컴포넌트의 state가 변할때마다 다시 렌더하게 되겠죠?
// 불필요한 리렌더는 제거하는것이 가장 효율적입니다.
