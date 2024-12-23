import styled from "styled-components";

const Btnwrqp = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 40px;
  padding-right: 40px;
`;
const Button = styled.button`
  width: 150px;
  text-align: center;
  display: block;
  gap: 40px;
  padding: 1em 1.5em;
  font-size: 1em;
  font-weight: 400;
  font-family: "Helvetica", "Arial", sans-serif;
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  border: none;
  margin-bottom: 20px;
  white-space: nowrap;
  border-color: #111;
  color: #9c9c9c;
  background: linear-gradient(180deg, #555 0%, #222 49%, #000 51%, #222 100%);
  border-radius: 5px;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.5),
    0px 1px 3px rgba(0, 0, 0, 0.3);

  &:active {
    background: linear-gradient(
      to right,
      rgba(20, 136, 204, 0.9),
      rgba(43, 50, 178, 0.9)
    );

    &:focus {
      outline: none;
    }
  }
  #btnCallmenu0 {
    margin-left: 40px;
  }
`;

function Topbar() {
  return (
    <Btnwrqp className="menubuttonWrap">
      <Button id="btnCallmenu0">전체보기</Button>
      <Button id="btnCallmenu1">음료</Button>
      <Button id="btnCallmenu2">디저트</Button>
      <Button id="btnCallmenu3">커피</Button>
      <Button id="btnCallmenu4">베버리지</Button>
      <Button id="btnCallmenu5">기타</Button>
    </Btnwrqp>
  );
}
export default Topbar;
