import styled from "styled-components";

const MenuItemList = styled.div`
  margin-top: 20px;
`;

const H4 = styled.h4`
  color: #333;
  text-align: center;
`;

const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  text-align: right;
  color: #333;
`;

function PaymentMenu({ cartItem, totalPrice }) {
  return (
    <MenuItemList>
      <H4>선택한 메뉴</H4>
      {cartItem.map((item, index) => (
        <div id="selectedMenuList" key={index}>
          {item.name}, 가격 : {item.price}, 수량 : {item.count}
        </div>
      ))}
      <TotalPrice id="total">총 금액 : {totalPrice}</TotalPrice>
    </MenuItemList>
  );
}
export default PaymentMenu;
