// 레이아웃페이지

import styled from "@emotion/styled";
import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  height: 500px;
`;

// 사이드바는 여기에 직접 이모션 적용
const LayoutSidebar = styled.div`
  width: 100px;
  height: 500px;
  background-color: orange;
`;

const HIDDEN_HEADERS = [
  "/12-05-modal-refactoring",
  // ..
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHidden = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드바 입니다 ! </LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
