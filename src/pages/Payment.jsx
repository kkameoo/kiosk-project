import styled from "styled-components";
import Discountbar from "../payment-components/Discountbar";
import Cardbar from "../payment-components/Cardbar";
import PaymentMenu from "../payment-components/PaymentMenu";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
`;

const PaymentContainer = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: grey;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

const H2 = styled.h2`
  color: #333;
  text-align: center;
`;

function Payment() {
  const [cartItem, setCartItem] = useState([]);
  const location = useLocation();
  const [totalPrice, setTotalPrice] = useState(0);
  // 마운트시 카트state를 세팅
  useEffect(() => {
    setCartItem(location.state.cartItem);
    setTotalPrice(location.state.totalPrice);
  }, []);

  return (
    <Container>
      <PaymentContainer>
        <H2>결제수단 선택</H2>
        <Discountbar />
        <Cardbar />
        <PaymentMenu cartItem={cartItem} totalPrice={totalPrice} />
      </PaymentContainer>
    </Container>
  );
}
export default Payment;
