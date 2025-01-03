import styled, { css } from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  width: 600px;
  height: 400px;
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

  ${(props) =>
    props.isActive &&
    css`
      background-color: #5bd0ff;
    `}
`;

// 공통 텍스트 섹션
const Section = styled.div`
  margin-top: 20px;
  position: relative;
  width: 600px;
  height: 70px;
`;

const SectionName = styled.div`
  display: flex;
  width: 100px;
  height: 70px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const SectionDiv = styled.div`
  position: absolute;
  left: 50px;
  bottom: 5px;
  width: 400px;
  margin-left: 100px;
  display: flex;
  gap: 20px;
`;

function NonCoffeeModal({ sizeClick, iceTempClick, options }) {
  // 공통 클릭 핸들러
  const handleSizeClick = (size) => {
    sizeClick(size);
  };

  const handleIceTempClick = (iceTemp) => {
    iceTempClick(iceTemp);
  };

  return (
    <Container>
      {/* 사이즈 선택 */}
      <Section>
        <SectionName>사이즈</SectionName>
        <SectionDiv>
          <Button
            onClick={() => handleSizeClick("Large")}
            isActive={options.size === "Large"}
          >
            Large
          </Button>
          <Button
            onClick={() => handleSizeClick("Medium")}
            isActive={options.size === "Medium"}
          >
            Medium
          </Button>
          <Button
            onClick={() => handleSizeClick("Small")}
            isActive={options.size === "Small"}
          >
            Small
          </Button>
        </SectionDiv>
      </Section>

      {/* 얼음 선택 */}
      <Section>
        <SectionName>얼음 선택</SectionName>
        <SectionDiv>
          <Button
            onClick={() => handleIceTempClick("Bigice")}
            isActive={options.icetemp === "Bigice"}
          >
            얼음 많이
          </Button>
          <Button
            onClick={() => handleIceTempClick("Middleice")}
            isActive={options.icetemp === "Middleice"}
          >
            기본 얼음
          </Button>
          <Button
            onClick={() => handleIceTempClick("Smallice")}
            isActive={options.icetemp === "Smallice"}
          >
            얼음 조금
          </Button>
        </SectionDiv>
      </Section>
    </Container>
  );
}

export default NonCoffeeModal;
