// kakao map 실습
import Head from "next/head"; // 스크립트를 내 프로젝트 안에 적용시키기 위해 Head 불러옴
import Script from "next/script";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

// 📌 카카오 맵을 호출하는 JS
export default function KakaoMapPage() {
  // document를 사용하는 시점을 document 가 생선된 시점 이후로 변경해주기
  // useEffect 이용해서 페이지가 렌더되고 document 생성된 이후에 kakaomap 호출
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(
        37.485388485241295,
        126.90143333841974
      ), // 지도의 중심좌표. (경도, 위도)
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    // 마커 표시
  }, []);

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e65045b54af369c9ffbee221ee99c7bf" // 내 어플리케이션 JavaScript 키
        ></script>
      </Head>
      {/* 카카오 맵을 담는(=출력) HTML) */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </div>
  );
}
