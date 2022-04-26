// kakao map 실습
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 에 담겨지는 거임
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=e65045b54af369c9ffbee221ee99c7bf&autoload=false";
    document.head.appendChild(script); // head 태그에 자식을 추가해줘 appendChild

    // 스크립트가 로드가 되면 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표. // 위도 경도
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e65045b54af369c9ffbee221ee99c7bf"
        ></script>
      </Head> */}
      <Script src="" />
      <div id="map" style={{ width: 500, height: 400 }}></div>;
    </div>
  );
}
