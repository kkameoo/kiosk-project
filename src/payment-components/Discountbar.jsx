import styled from "styled-components";

const Buttons = styled.div`
  border: 2px #cacaca solid;
  border-radius: 5%;
  color: black;
  width: 31.5%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H4 = styled.h4`
  color: #333;
  text-align: left;
`;
const AButtonList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 버튼들이 3개씩 줄바꿈 되도록 설정 */
  justify-content: space-between; /* 각 줄마다 버튼들이 균등하게 배치되도록 */
  margin-top: 20px;
`;

const Img = styled.img`
  height: ${(props) => props.size};
  margin-right: 0.5rem;
`;

function Discountbar({ icon }) {
  return (
    <>
      <H4>제휴 할인을 선택해주세요</H4>

      <AButtonList>
        <Buttons id="btnKT">
          <Img src={icon[10]} size="2.5rem" />
          KT <br />
          통합 월1회
        </Buttons>
        <Buttons id="btnSKT">
          <Img src={icon[11]} size="3.5rem" />
          SKT
          <br />
          통합 월1회
        </Buttons>
        <Buttons id="btnCJ">
          <Img src={icon[12]} size="2rem" />
          CJ ONE <br />
          포인트 사용
        </Buttons>
      </AButtonList>
    </>
  );
}
export default Discountbar;
