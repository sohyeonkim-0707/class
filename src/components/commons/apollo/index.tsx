import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";

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
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo);
  }, []);

  // 여기가 프리렌더링시 문제되는 코드 !!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
