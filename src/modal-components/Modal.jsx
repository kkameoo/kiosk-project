import styled from "styled-components";
import CoffeeModal from "./CoffeeModal";
import NonCoffeeModal from "./NonCoffeeModal";
import DessertModal from "./DessertModal";
import { useState } from "react";
import PropTypes from "prop-types";

//모달배경 스타일
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

//모달창 스타일
const Window = styled.div`
  position: relative;
  color: black;
  background: rgb(245, 245, 245);
  border-radius: 8px;
  box-shadow: inset;
  padding: 20px;
  width: 600px;
  height: 800px;
`;

//취소,확인 버튼
const Button = styled.div`
  position: absolute;
  width: 550px;
  height: 60px;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;

//공통 버튼 스타일
const ModalButton = styled.button`
  background: white;
  font-size: 20px;
  width: 45%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
`;

//이미지,음료이름,수량,금액 div
const ItemInfo = styled.div`
  position: relative;
  width: 600px;
  height: 150px;
  margin-top: 10px;
`;

//이미지
const ItemImg = styled.img`
  width: 160px;
  height: 150px;
  display: block;
  margin-left: 20px;
  border: 1px solid;
`;

//음료이름
const ItemName = styled.p`
  position: absolute;
  color: black;
  font-size: 30px;
  -webkit-text-stroke: 1px black;
  width: 380px;
  right: 0;
  top: -30px;
`;

//수량
const ItemCount = styled.p`
  position: absolute;
  width: 150px;
  right: 37%;
  bottom: -16px;
`;

//금액
const ItemPrice = styled.p`
  position: absolute;
  width: 150px;
  right: 0;
  bottom: -30px;
  font-size: 30px;
  text-align: right;
  padding-right: 10px;
`;

function Modal({ onClose, readItem, addCart }) {
  // 상태를 객체로 관리
  const [options, setOptions] = useState({
    temp: "none",
    size: "none",
    topping: "none",
    icetemp: "none",
    addmenu: "none",
  });

  // 옵션 변경 함수
  const handleOptionChange = (key, value) => {
    if (key === "temp") {
      setOptions(() => ({
        [key]: value,
        size: "none",
        topping: "none",
        icetemp: "none",
        addmenu: "none",
      }));
    } else {
      setOptions((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }
  };

  // 조건부 렌더링 컴포넌트
  const renderModalContent = () => {
    if (readItem) {
      if (readItem.type2 === "coffee") {
        return (
          <CoffeeModal
            product={readItem}
            tempClick={(value) => handleOptionChange("temp", value)}
            sizeClick={(value) => handleOptionChange("size", value)}
            toppingClick={(value) => handleOptionChange("topping", value)}
            iceTempClick={(value) => handleOptionChange("icetemp", value)}
            options={options}
          />
        );
      }

      if (readItem.type2 === "noneCoffee") {
        return (
          <NonCoffeeModal
            product={readItem}
            sizeClick={(value) => handleOptionChange("size", value)}
            iceTempClick={(value) => handleOptionChange("icetemp", value)}
            options={options}
          />
        );
      }

      if (readItem.type === "dessert") {
        return (
          <DessertModal
            addCoffeeClick={(value) => handleOptionChange("addmenu", value)}
            options={options}
          />
        );
      }
    }
    return null;
  };

  return (
    <Container>
      <Window>
        <Button>
          <ModalButton onClick={onClose}>취소</ModalButton>
          <ModalButton onClick={() => addCart(options)}>선택 완료</ModalButton>
        </Button>
        <ItemInfo>
          <ItemImg src={readItem.image} alt={readItem.name} />
          <ItemName>{readItem.name}</ItemName>
          <ItemCount></ItemCount>
          <ItemPrice>₩ {readItem.price.toLocaleString()}</ItemPrice>
        </ItemInfo>

        {renderModalContent()}
      </Window>
    </Container>
  );
}
Modal.propTypes = {
  onClose: PropTypes.func,
  readItem: PropTypes.object,
  addCart: PropTypes.func,
};
export default Modal;
