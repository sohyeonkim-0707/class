// import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { userInfoState } from "../../src/commons/store";
import { useRecoilState } from "recoil";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);
  // const router = useRouter();
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용 가능합니다!!!");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return (
    <div>
      <div>{userInfo.name}님 환영합니다</div>
    </div>
  );
}

export default withAuth(LoginSuccessPage);
