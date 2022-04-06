// axios를 이용해 open API 이용하기
import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  // 강아지 이미지 주소를 저장해둘 state
  const [dogUrl, setDogUrl] = useState(""); // 이미지 주소의 초기값

  // axios 날리기 _ 주소는 postman에서 사용했던것과 동일합니다.
  // 마운트 될 때 한번만 요청할 수 있도록 의존성배열( [ ] )을 적어주었습니다.
  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
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
