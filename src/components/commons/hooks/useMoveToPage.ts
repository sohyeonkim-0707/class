import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  // 방문하기 전의 페이지를 담아두는 것
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path) => () => {
    router.push(path);
    setVisitedPage(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
}
