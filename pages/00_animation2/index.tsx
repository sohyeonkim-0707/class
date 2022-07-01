import styled from "@emotion/styled";

const Container = styled.div`
  margin: 30px 30px;
  width: 200px; //
  height: 300px; //
  background-color: beige;
  border: 1px solid red;
`;

const item = styled.div`
  width: 100%;
  height: 200px;
  background-color: yellow;
`;

export default function Animation() {
  return (
    <Container>
      <div>
        <img></img>
      </div>
    </Container>
  );
}
