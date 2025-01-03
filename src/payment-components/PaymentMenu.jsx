import { useState } from "react";
import styled from "styled-components";

const MenuItemList = styled.div`
  margin-top: 20px;
  color: black;
  border: 2px #cacaca solid;
  border-radius: 5px;
  height: 12rem;
  overflow-y: auto;
`;

const Span = styled.span`
  color: #333;
  text-align: left;
  font-weight: bold;
  font-size: 35px;
`;

const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  text-align: right;
  color: #333;
  margin-bottom: 8px;
  margin-right: 8px;
  font-weight: bold;
  font-size: 35px;
`;

const SlectedMenu = styled.div`
  margin: 8px;
  border: 1px #cacaca solid;
  border-radius: 5px;
  font-size: 35px;
  font-weight: 500;
`;

function PaymentMenu({ cartItem, totalPrice }) {
  return (
    <>
      <Span>선택한 메뉴</Span>
      <TotalPrice id="total">
        총 금액 : {totalPrice.toLocaleString()}
      </TotalPrice>
      <MenuItemList>
        <div>
          {cartItem.map((item, index) => (
            <SlectedMenu id="selectedMenuList" key={index}>
              {index + 1}. 상품명 : {item.name} &nbsp;&nbsp; 가격 :{" "}
              {item.price.toLocaleString()} &nbsp;&nbsp;&nbsp;수량 :{" "}
              {item.count}
            </SlectedMenu>
          ))}
        </div>
      </MenuItemList>
    </>
  );
}
export default PaymentMenu;
