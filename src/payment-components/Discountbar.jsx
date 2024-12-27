import styled from "styled-components";

const Buttons = styled.div`
  width: 30%;
`;

const H4 = styled.h4`
  color: #333;
  text-align: center;
`;
const AButtonList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 버튼들이 3개씩 줄바꿈 되도록 설정 */
  justify-content: space-between; /* 각 줄마다 버튼들이 균등하게 배치되도록 */
  margin-top: 20px;
`;

function Discountbar() {
  return (
    <>
      <H4>제휴 할인</H4>
      <AButtonList>
        <Buttons id="btnKT">KT</Buttons>
        <Buttons id="btnSKT">SKT</Buttons>
        <Buttons id="btnCJ">CJ ONE</Buttons>
      </AButtonList>
    </>
  );
}
export default Discountbar;
