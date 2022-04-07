// axios를 이용해 open API 이용하기
import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  // 강아지 이미지 주소를 저장해둘 state
  const [dogUrl, setDogUrl] = useState(""); // 이미지 주소의 초기값

  // 첫 마운트시에만 요청을 보낼 수 있도록 의존성 배열을 같이 적어준다. []
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
