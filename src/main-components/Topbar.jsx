import { useState } from "react";
import styled, { css } from "styled-components";
const Btnwrqp = styled.div`
  /* margin-bottom: 30px; */
  display: flex;
  gap: 25px;
  padding-left: 45px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 190px;
  padding: 15px;
  font-size: 23px;
  font-weight: 600;
  border-radius: 5px 5px 0 0;
  background-color: #c6f0ee;
  border: #f3e6ed;
  color: #121809;
  ${(props) =>
    props.isActive &&
    css`
      background-color: #6ebdba;
    `};
`;
function Topbar({
  allButton,
  dessertButton,
  coffeeButton,
  beverageButton,
  etcButton,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const handleClick = () => {
  //   setSelectedIndex((bool) => !bool); // 같은 인덱스를 다시 클릭하면 해제
  // };
  return (
    <Btnwrqp>
      <Button
        id="btnCallmenu0"
        onClick={() => {
          allButton();
          setSelectedIndex(0);
        }}
        isActive={selectedIndex === 0}
      >
        전체 메뉴
      </Button>
      <Button
        id="btnCallmenu3"
        onClick={() => {
          coffeeButton();
          setSelectedIndex(1);
        }}
        isActive={selectedIndex === 1}
      >
        커피
      </Button>
      <Button
        id="btnCallmenu4"
        onClick={() => {
          beverageButton();
          setSelectedIndex(2);
        }}
        isActive={selectedIndex === 2}
      >
        논커피 (음료)
      </Button>
      <Button
        id="btnCallmenu2"
        onClick={() => {
          dessertButton();
          setSelectedIndex(3);
        }}
        isActive={selectedIndex === 3}
      >
        디저트
      </Button>
      <Button
        id="btnCallmenu5"
        onClick={() => {
          etcButton();
          setSelectedIndex(4);
        }}
        isActive={selectedIndex === 4}
      >
        기타
      </Button>
    </Btnwrqp>
  );
}
export default Topbar;
