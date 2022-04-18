// 로그인 한 이후에 이동되는 페이지
// 철수 프로필 보여주는 곳
// 프로필은 로그인이 된 상태에서만 들어갈 수 있음
import { useAuth } from "../../src/components/commons/hooks/useAuth";

function CustomHooksUseAuthPage() {
  useAuth();

  return <div>철수의 프로필 페이지입니다 !!!</div>;
}

export default CustomHooksUseAuthPage;
