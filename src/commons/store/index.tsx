// 글로벌스테이트
// 공용으로 사용할 변수

import { atom } from "recoil";

// 게시판
export const isEditState = atom({
  key: "isEditState",
  default: false,
});

// 로그인
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

// 로그인 유저 정보 (패치)
export const userInfoState = atom({
  key: "userInfoState",
  default: {
    emmail: "",
    name: "",
  },
});
