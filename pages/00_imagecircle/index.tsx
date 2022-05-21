import styled from "@emotion/styled";

const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 24px;
`;

const One = styled.img`
  width: 48px;
  height: 48px;
  background-color: brown;
  position: relative;
  z-index: 1;
  border-radius: 50%;
  border: 4px solid white;
`;

const Two = styled.img`
  width: 48px;
  height: 48px;
  background-color: green;
  position: relative;
  z-index: 2;
  left: -20px;
  border-radius: 50%;
  border: 4px solid white;
`;

const Three = styled.img`
  width: 48px;
  height: 48px;
  background-color: blue;
  position: relative;
  z-index: 3;
  left: -40px;
  border-radius: 50%;
  border: 4px solid white;
`;

const Four = styled.img`
  width: 48px;
  height: 48px;
  background-color: orange;
  position: relative;
  z-index: 4;
  left: -60px;
  border-radius: 50%;
  border: 4px solid white;
`;

const Five = styled.img`
  width: 48px;
  height: 48px;
  background-color: black;
  position: relative;
  z-index: 5;
  left: -80px;
  border-radius: 50%;
  border: 4px solid white;
  color: white;
`;

export default function ImageCircle() {
  return (
    <ImageBox>
      <One></One>
      <Two></Two>
      <Three></Three>
      <Four></Four>
      <Five></Five>
    </ImageBox>
  );
}
