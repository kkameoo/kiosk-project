import { useState } from "react";
import styled from "styled-components";

const MenuItemList = styled.div`
  margin-top: 20px;
  color: black;
  border: 2px #cacaca solid;
  border-radius: 5px;
`;

const H4 = styled.h4`
  color: #333;
  text-align: left;
`;

const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  text-align: right;
  color: #333;
  margin-bottom: 8px;
  margin-right: 8px;
`;

const SlectedMenu = styled.div`
  margin: 8px;
  border: 1px #cacaca solid;
  border-radius: 5px;
`;

function PaymentMenu({ cartItem, totalPrice }) {
  return (
    <>
      <H4>선택한 메뉴</H4>
      <MenuItemList>
        <div>
          {cartItem.map((item, index) => (
            <SlectedMenu id="selectedMenuList" key={index}>
              {index + 1}. 상품명 : {item.name} &nbsp;&nbsp; 가격 : {item.price}{" "}
              &nbsp;&nbsp;&nbsp;수량 : {item.count}
            </SlectedMenu>
          ))}
        </div>
        <TotalPrice id="total">총 금액 : {totalPrice}</TotalPrice>
      </MenuItemList>
    </>
  );
}
export default PaymentMenu;
