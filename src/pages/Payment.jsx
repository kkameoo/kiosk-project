import styled from "styled-components";
import Discountbar from "../payment-components/Discountbar";
import Cardbar from "../payment-components/Cardbar";
import PaymentMenu from "../payment-components/PaymentMenu";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../payment-components/Header";
import PaymentModal from "../payment-components/PaymentModal";

const Contents = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
`;

const PaymentContainer = styled.div`
  /* max-width: 600px; */
  margin: 30px auto;
  /* padding: 0px 20px 20px 20px; */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

function Payment() {
  const apiUrl = "http://localhost:1337/icon";
  const [error, setError] = useState();
  const [icon, setIcon] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const location = useLocation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 마운트시 카트state를 세팅
  useEffect(() => {
    fetchIcons();
    setCartItem(location.state.cartItem);
    setTotalPrice(location.state.totalPrice);
  }, []);

  const fetchIcons = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      // 이미지 가공 + 원본, 필터 state 세팅
      // const data = data1.icon;
      console.log(data);
      fetchImage(data);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  const fetchImage = (data) => {
    let icons = [];
    for (let i = 0; i < data.length; i++) {
      let imgUrl = "http://localhost:1337/" + data[i];
      //   console.log(imgUrl);
      icons[i] = imgUrl;
    }
    setIcon(icons);
  };

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  let modalContent = null;
  if (isModalOpen === true) {
    modalContent = <PaymentModal totalPrice={totalPrice} />;
  } else if (isModalOpen === false) {
    modalContent = null;
  }

  return (
    <Container>
      <PaymentContainer>
        <Header />
        <Contents>
          {modalContent}
          <Discountbar icon={icon} />
          <Cardbar icon={icon} handleModal={handleModal} />
          <PaymentMenu cartItem={cartItem} totalPrice={totalPrice} />
        </Contents>
      </PaymentContainer>
    </Container>
  );
}
export default Payment;
