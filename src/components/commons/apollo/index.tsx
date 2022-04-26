import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  // 1. 더이상 지원되지 않음 !!!
  // if(process.browser){
  //   // 브라우저일때

  // }else{
  //   // yarn dev 일때
  // }

  // window = browser
  // 윈도우가 없다는 것은 f서버에서 그려지고 있다는 것

  // 2. 두번째 방법 !!!
  if (typeof window !== "undefined") {
    // 브라우저라면
    console.log("여기는 브라우저다");
  } else {
    // f 서버라면
    console.log("여기는 프론트엔드 서버다 yarn dev 다 !!! ");
  }
  // 3. 세번째 방법 !!! 새로고침 하더라도 로컬에 담겨 있음 (1시간 지나면 날라가긴함)
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);
    // accessToken 재발급 받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 여기가 프리렌더링시 문제되는 코드 !!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2.해당 에러가 토큰만료 에러인지를 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken 으로 accessToken 을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken 으로 방금 실패한 쿼리(operation) 재요청하기
            operation.setContext({
              hearders: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken 만 바꿔치기
              },
            });

            // 3-2. 변경된 operation 재요청하기 !!!
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // 쿠키 포함
  });
  // 위 에러링크를 client(ApolloClient)에 연결
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
