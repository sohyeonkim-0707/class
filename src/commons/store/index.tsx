// 글로벌스테이트
// 공용으로 사용할 변수

import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
