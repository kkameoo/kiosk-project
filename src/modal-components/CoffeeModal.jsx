import PropTypes from "prop-types";
import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  width: 600px;
  height: 500px;
`;

// HOT,ICE 버튼
const Temp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 45px;
`;
const TempButton = styled.button`
  width: 285px;
  height: 45px;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
  }
  ${(props) =>
    props.isActive &&
    css`
      background-color: #5bd0ff;
    `}
`;

// 공통 버튼 스타일
const Button = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    transform: scale(1.05);
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: #5bd0ff;
    `}
`;

// 공통 섹션 스타일
const Section = styled.div`
  position: relative;
  width: 600px;
  margin-top: ${(props) => props.marginTop || "10px"};
`;

// 항목 이름
const SectionName = styled.div`
  display: flex;
  width: 100px;
  height: 70px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

// 버튼 그룹
const ButtonGroup = styled.div`
  position: absolute;
  left: 50px;
  bottom: 5px;
  width: 400px;
  margin-left: 100px;
  display: flex;
  gap: 20px;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

function CoffeeModal({
  tempClick,
  sizeClick,
  toppingClick,
  iceTempClick,
  options,
}) {
  //Hot/Ice 상태 관리
  const [isIceDisabled, setIceDisabled] = useState(false);

  const handleTempClick = (temp) => {
    tempClick(temp);
    if (temp === "HOT") {
      setIceDisabled(true); //HOT 선택 시 비활성화
    } else {
      setIceDisabled(false); //ICE 선택 시 비활성화
    }
  };
  // 버튼 클릭 핸들러를 더 간단하게 하기 위한 공통 함수
  const handleClick = (type, value) => {
    switch (type) {
      // case "temp":
      //   tempClick(value);
      //   break;
      case "size":
        sizeClick(value);
        break;
      case "topping":
        toppingClick(value);
        break;
      case "iceTemp":
        iceTempClick(value);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      {/* 온도 선택 */}
      <Section>
        <Temp>
          <TempButton
            onClick={() => {
              handleTempClick("HOT");
            }}
            isActive={options.temp === "HOT"}
          >
            HOT
          </TempButton>
          <TempButton
            onClick={() => {
              handleTempClick("ICE");
            }}
            isActive={options.temp === "ICE"}
          >
            ICE
          </TempButton>
        </Temp>
      </Section>

      {/* 사이즈 선택 */}
      <Section marginTop="20px">
        <SectionName>사이즈</SectionName>
        <ButtonGroup>
          <Button
            onClick={() => handleClick("size", "Large")}
            isActive={options.size === "Large"}
          >
            Large
          </Button>
          <Button
            onClick={() => handleClick("size", "Medium")}
            isActive={options.size === "Medium"}
          >
            Medium
          </Button>
          <Button
            onClick={() => handleClick("size", "Small")}
            isActive={options.size === "Small"}
          >
            Small
          </Button>
        </ButtonGroup>
      </Section>

      {/* 토핑 선택 */}
      <Section marginTop="20px">
        <SectionName>토핑</SectionName>
        <ButtonGroup>
          <Button
            onClick={() => handleClick("topping", "바닐라 시럽")}
            isActive={options.topping === "바닐라 시럽"}
          >
            바닐라
          </Button>
          <Button
            onClick={() => handleClick("topping", "헤이즐넛 시럽")}
            isActive={options.topping === "헤이즐넛 시럽"}
          >
            헤이즐넛
          </Button>
        </ButtonGroup>
      </Section>

      {/* 얼음 선택 */}
      <Section marginTop="20px">
        <SectionName>얼음 선택</SectionName>
        <ButtonGroup>
          <Button
            onClick={() => handleClick("iceTemp", "얼음 많이")}
            disabled={isIceDisabled}
            isActive={options.icetemp === "얼음 많이"}
          >
            얼음 많이
          </Button>
          <Button
            onClick={() => handleClick("iceTemp", "기본")}
            disabled={isIceDisabled}
            isActive={options.icetemp === "기본"}
          >
            기본 얼음
          </Button>
          <Button
            onClick={() => handleClick("iceTemp", "얼음 조금")}
            disabled={isIceDisabled}
            isActive={options.icetemp === "얼음 조금"}
          >
            얼음 조금
          </Button>
        </ButtonGroup>
      </Section>
    </Container>
  );
}

CoffeeModal.propTypes = {
  tempClick: PropTypes.func,
  sizeClick: PropTypes.func,
  toppingClick: PropTypes.func,
  iceTempClick: PropTypes.func,
  options: PropTypes.object,
};

export default CoffeeModal;
