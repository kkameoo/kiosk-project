import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  width: 600px;
  height: 500px;
  margin-left: 20px;
`;
// 메뉴 추가 옵션
const AddMenuName = styled.div`
  width: 300px;
  height: 40px;
  font-size: 20px;
`;

// 버튼 그룹
const AddMenu = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  gap: 20px;
`;

// 공통 버튼 스타일
const CoffeeButton = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  ${(props) =>
    props.isActive &&
    css`
      background-color: #5bd0ff;
    `}
`;

function DessertModal({ addCoffeeClick, options }) {
  // 버튼 클릭 핸들러
  const handleClick = (coffeeType) => {
    addCoffeeClick(coffeeType);
  };

  return (
    <Container>
      <AddMenuName>메뉴 추가</AddMenuName>
      <AddMenu>
        <CoffeeButton
          onClick={() => handleClick("HotCoffee")}
          isActive={options.addmenu === "HotCoffee"}
        >
          뜨아 +500
        </CoffeeButton>
        <CoffeeButton
          onClick={() => handleClick("IceCoffee")}
          isActive={options.addmenu === "IceCoffee"}
        >
          아아 +1000
        </CoffeeButton>
      </AddMenu>
    </Container>
  );
}
DessertModal.propTypes = {
  addCoffeeClick: PropTypes.func,
  options: PropTypes.object,
};

export default DessertModal;
