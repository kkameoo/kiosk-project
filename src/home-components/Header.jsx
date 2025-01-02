import styled from "styled-components";

const Wrap = styled.div`
  /* display: flex; */
  position: relative;
  .Btn2 {
    background-color: red;
    color: white;
    font-size: 40px;
    font-weight: 600;
    position: absolute;
    right: 175px;
    top: 15px;
  }
  .Btn3 {
    background-color: white;
    color: black;
    font-size: 40px;
    font-weight: 600;
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
const Btn = styled.button`
  border-radius: 40px;
  width: 150px;
  height: 150px;
  background-color: red;
  color: white;
  font-size: 40px;
  font-weight: 600;
  position: absolute;
  right: 175px;
  top: 15px;
  z-index: 2;
  border: 3px solid black;
  &:active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    transform: scale(1.05);
  }
`;
const Btn2 = styled(Btn)`
  right: 15px;
  top: 15px;
  background-color: white;
  color: black;
  z-index: 3;
`;
function Header() {
  return (
    <Wrap>
      <Btn>ENG</Btn>
      <Btn2>한국어</Btn2>
    </Wrap>
  );
}
export default Header;
