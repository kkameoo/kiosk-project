import { useState } from "react";
import styled from "styled-components";
// import PaymentModal from "./PaymentModal";

const AButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between;  */
  margin-top: 20px;
`;

const BButtonList = styled(AButtonList)`
  /* display: flex;
  flex-wrap: wrap; */
  justify-content: space-between;
  /* margin-top: 20px; */
  margin-bottom: 50px;
`;

const Buttons = styled.div`
  border: 2px #cacaca solid;
  border-radius: 5%;
  width: 31.5%;
  color: black;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.bMargin};
  font-size: 2.2rem;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
`;

const AButtons = styled(Buttons)`
  display: flex;
  flex-wrap: wrap;

  margin-top: 0.85rem;
  width: 23%;
  margin-right: 0;
`;

const Span = styled.span`
  color: #333;
  text-align: left;
  font-weight: bold;
  font-size: 35px;
`;
const Img = styled.img`
  height: ${(props) => props.size};
  margin-right: 0.5rem;
`;

function Cardbar({ icon, handleModal }) {
  return (
    <>
      <Span>결제 수단을 선택해주세요</Span>
      <AButtonList>
        <Buttons id="payByCard" bMargin="0.75rem" onClick={handleModal}>
          <Img src={icon[0]} size="10rem" />
          카드결제
        </Buttons>
        <Buttons bMargin="0.75rem">
          <Img src={icon[1]} size="8.5rem" />
          앱카드
        </Buttons>
      </AButtonList>
      <BButtonList>
        <AButtons>
          <Img src={icon[2]} size="8.5rem" />
          카카오페이
        </AButtons>

        <AButtons>
          <Img src={icon[3]} size="4rem" />
          페이코
        </AButtons>
        <AButtons>
          <Img src={icon[4]} size="3.7rem" />
          네이버페이
        </AButtons>
        <AButtons>
          <Img src={icon[5]} size="4.5rem" />
          제로페이
        </AButtons>
        <AButtons>
          <Img src={icon[6]} size="8.0rem" />
          BC 페이북
        </AButtons>
        <AButtons>
          <Img src={icon[7]} size="8.5rem" />
          하나 Pay
        </AButtons>
        <AButtons>
          <Img src={icon[8]} size="7.5rem" />
          KB Pay
        </AButtons>
        <AButtons>
          <Img src={icon[9]} size="7.5rem" />
          애플페이
        </AButtons>
      </BButtonList>
      <BButtonList>
        <Buttons bMargin="0">
          <Img src={icon[13]} size="8.5rem" />
          쿠폰사용
        </Buttons>
        <Buttons bMargin="0">
          <Img src={icon[14]} size="8.5rem" /> 4조카페
          <br /> 선불카드
        </Buttons>
        <Buttons bMargin="0">
          <Img src={icon[15]} size="8.5rem" />
          cj기프트카드
        </Buttons>
      </BButtonList>
    </>
  );
}
export default Cardbar;
