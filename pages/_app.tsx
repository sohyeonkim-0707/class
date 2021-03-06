// import "antd/dist/antd.css";
// import "../styles/globals.css"; // 모든페이지에전체적으로적용하고싶은css 나중에 emotion으로 바꿀거야
import "antd/dist/antd.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA31wXBOJC64ZYni_6Cs4ZVWq9duzLvs6U",
  authDomain: "goodluckfromher.firebaseapp.com",
  projectId: "goodluckfromher",
  storageBucket: "goodluckfromher.appspot.com",
  messagingSenderId: "746758829847",
  appId: "1:746758829847:web:711b2094a945c2b88ce952",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
