import * as Password from "./password.styles";

export default function PasswordUI() {
  return (
    <Password.Wrapper>
      <div>비밀번호 변경하기</div>
      <div>
        <div>이메일</div>
        <input type="text" placeholder="상품명을 작성해주세요."></input>
      </div>
      <div>
        <div>휴대폰 번호</div>
        <div>
          <input type="text" placeholder="01012345678"></input>
          <button>인증번호 전송</button>
        </div>
        <div>
          <input type="text" placeholder="01012345678"></input>
          <button>인증하기</button>
          <span>message</span>
        </div>
      </div>
      <div>
        <div>새로운 비밀번호</div>
        <input
          type="password"
          placeholder="변경할 비밀번호를 입력해주세요."
        ></input>
        <input
          type="password"
          placeholder="비밀번호를 다시 이력해주세요."
        ></input>
      </div>
    </Password.Wrapper>
  );
}
