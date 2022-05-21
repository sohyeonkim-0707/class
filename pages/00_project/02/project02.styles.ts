import styled from "@emotion/styled";

export const card = styled.div`
  width: 320px;
  height: 240px;
  background-color: white;
  overflow: hidden;
  border-radius: 16px 16px 16px 16px;
  /* border: 1px solid red; */
`;

export const Container = styled.div`
  width: 320px;
  height: 240px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover {
    transform: translateY(-100%);
  }
`;

// 📌 1번 박스
export const box1 = styled.div`
  width: 320px;
  height: 24rem;
  cursor: pointer;
  overflow: hidden;
`;
export const ImgBox = styled.img`
  width: 320px;
  height: 16rem;
`;
export const TextBox = styled.div`
  width: 320px;
  height: 8rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0rem 0rem 1.6rem 1.6rem;
  padding: 1.4rem 8.7rem 1.9rem 2rem;
`;

export const MainTitle = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
`;
export const SubTitle = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #767676;
`;

// 📌 2번 박스
export const box2 = styled.div`
  width: 320px;
  height: 24rem;
  border-radius: 16px 16px 16px 16px;
  cursor: pointer;
`;
export const Title01 = styled.div`
  width: 200px;
  height: 29px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #111111;
  margin-top: 18px;
  margin-bottom: 4px;
  margin-left: 20px;
`;

export const Title02 = styled.div`
  width: 270px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #111111;
  margin-left: 20px;
  margin-bottom: 29px;
`;
export const Title03 = styled.div`
  width: 163px;
  height: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #767676;
  margin-left: 20px;
`;
