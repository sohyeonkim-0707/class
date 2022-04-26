import { useRouter } from "next/router";
import Link from "next/link";
// link 태그 router.push 와 같은 역할

export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };

  return (
    // <button onClick={onClickMoveToMap}> 맵으로 이동하기 </button>

    <Link href="/29-03-kakao-map-routed">
      <a>맵으로 이동하기</a>
    </Link>
  );
}

// link 태그를 하면 라우터 푸쉬로 이동햇던 것을 링크 태그로 활용할 수 있다.
