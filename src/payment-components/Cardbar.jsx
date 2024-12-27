import styled from "styled-components";

const AButtonList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 버튼들이 3개씩 줄바꿈 되도록 설정 */
  justify-content: space-between; /* 각 줄마다 버튼들이 균등하게 배치되도록 */
  margin-top: 20px;
`;

const Buttons = styled.div`
  width: 30%;
`;

const H4 = styled.h4`
  color: #333;
  text-align: center;
`;

function Cardbar() {
  return (
    <>
      <H4>결제 방법</H4>
      <AButtonList>
        <Buttons id="payByCard">카드결제</Buttons>
        <Buttons>앱카드</Buttons>
        <Buttons>카카오페이</Buttons>
        <Buttons>페이코</Buttons>
        <Buttons>네이버페이</Buttons>
        <Buttons>제로페이</Buttons>
        <Buttons>BC 페이북</Buttons>
        <Buttons>하나 Pay</Buttons>
        <Buttons>KB Pay</Buttons>
        <Buttons>애플페이</Buttons>
        <Buttons>쿠폰사용</Buttons>
        <Buttons>4조카페 선불카드</Buttons>
      </AButtonList>
    </>
  );
}
export default Cardbar;
