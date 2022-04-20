import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
    /* font-family: "myFont"; */
  }

  /* 나만의 폰트 만들기 font-family 이름은 내 맘대로  */
  @font-face {
    font-family: "myFont";
    src: url("/fonts/scifibit.ttf");
  }
`;
