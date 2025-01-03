import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  z-index: 10;
`;

const Window = styled.div`
  width: 900px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const IconContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #007aff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;

const Title = styled.div`
  margin-top: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #333333;
`;

//주문번호 BOX
const OrdernumberBOx = styled.div`
  margin: 50px 20px 50px 20px;
  padding: 20px;
  background-color: #007bff;
  border-radius: 8px;
  text-align: left;
  font-size: 30px;
  color: #ffffff;
  line-height: 3;
`;
const OrderName = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 40px;
`;
const OrderNum = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
`;

//주문정보 BOX
const DetailContainer = styled.div`
  margin: 50px 20px 50px 20px;
  padding: 20px;
  background-color: #f7f8fa;
  border-radius: 8px;
  text-align: left;
  font-size: 30px;
  color: #555555;
  line-height: 3;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.div`
  color: #888888;
`;

const Value = styled.div`
  font-weight: bold;
  color: #333333;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 30px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 0 0 20px 20px; /* 버튼이 하단 모서리와 자연스럽게 연결 */
  font-size: 40px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

function PaymentModal({ totalPrice }) {
  const today = new Date();
  // 현재 날짜를 가져옵니다.
  const navigate = useNavigate();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일, ${today.getHours()}시 ${today.getMinutes()}분`;
  return (
    <Container>
      <Window>
        <IconContainer>
          <Icon>✔</Icon>
        </IconContainer>
        <Title>결제 완료!</Title>
        <OrdernumberBOx>
          <OrderName>주문번호를 확인해주세요</OrderName>
          <OrderNum>4444</OrderNum>
        </OrdernumberBOx>
        <DetailContainer>
          <DetailRow>
            <Label>가맹점</Label>
            <Value>(주) 4조카페</Value>
          </DetailRow>
          <DetailRow>
            <Label>주문금액</Label>
            <Value>{totalPrice.toLocaleString()} 원</Value>
          </DetailRow>
          <DetailRow>
            <Label>결제일시</Label>
            <Value>{formattedDate}</Value>
          </DetailRow>
          <DetailRow>
            <Label>결제카드</Label>
            <Value>체크카드</Value>
          </DetailRow>
        </DetailContainer>
        <ConfirmButton onClick={() => navigate("/")}>확인</ConfirmButton>
      </Window>
    </Container>
  );
}

export default PaymentModal;
