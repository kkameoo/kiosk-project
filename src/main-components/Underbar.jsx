import styled from "styled-components";
const Underbox = styled.div`
  margin: 10px 0 0 45px;
  width: 1050px;
  height: 410px;
  background-color: #e3eef0;
  border-radius: 5px;
  display: flex;
`;
//선택한상품 BOX
const Container = styled.div`
  width: 800px;
  margin: 10px;
`;
const SelectName = styled.div`
  position: absolute;
  width: 1000px;
  font-size: 30px;
  font-weight: bold;
  padding: 2px 0px 2px 30px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #aab8d3;
`;
const ScrollBox = styled.div`
  margin-top: 60px;
  width: 750px;
  max-height: 330px;
  /* background-color: #b1b1b1; */
  border-radius: 5px;
  overflow-y: auto;
`;
const SelectBox = styled.div`
  position: relative;
  width: 700px;
  height: 90px;
  font-size: 20px;
  border: 5px solid #cacaca;
  border-radius: 10px;
  margin: 10px 0px 5px 5px;
`;
const MenuName = styled.div`
  display: flex;
  width: 300px;
  height: 40px;
  align-items: center;
  margin-left: 17px;
  margin-top: 15px;
  font-weight: 600;
`;
const CountButton = styled.div`
  position: absolute;
  top: 0;
  left: 350px;
  width: 130px;
  height: 40px;
  margin-top: 15px;
  button {
    /* border: 2px solid gray; */
    background-color: white;
    width: 30px;
    border: none;
    padding: 5px;
    margin: 3px 10px 0 10px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
  }
`;
const MenuPrice = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  margin: 15px 20px 10px 0;
  font-weight: 600;
`;
const Options = styled.div`
  height: 30px;
  position: relative;
  margin: 0 0 20px 0;
  div {
    position: absolute;
    top: 0;
    left: 40px;
    width: 400px;
  }
`;

//오른쪽 BOX
const Bcontainer = styled.div`
  width: 250px;
  height: 22rem;
  display: flex;
  flex-wrap: wrap;
  margin: 70px 10px 0px 10px;
`;

//타이머 BOX
const Timer = styled.div`
  width: 100%;
  height: 7.5rem;
  border-radius: 10px;
  background-color: #aab8d3;
`;
const Timename = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;
const TimeDiv = styled.div`
  display: flex;
  gap: 10px;
  font-weight: bold;
`;
const Time = styled.div`
  margin-left: 15px;
  width: 90px auto;
  font-size: 40px;
  text-align: right;
  padding: 2px 16px 2px 16px;
  background-color: #d6d6d6;
  border-radius: 25px;
`;
const Sec = styled.div`
  display: grid;
  place-items: end;
  width: 30px;
  font-size: 25px;
`;

//총금액
const Hbox = styled.div`
  width: 100%;
  height: 4rem;
  font-size: 30px;
  text-align: end;
  justify-content: center;
`;

//결제하기
const PayButton = styled.button`
  background: #929799;
  width: 100%;
  height: 6rem;
  border-radius: 5px;
  /* margin-top: 10px; */
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover .BtnTwo {
    left: 0px;
  }
`;
const BtnText = styled.div`
  font-size: 35px;
  color: black;
  font-weight: bold;
  transition: 0.3s;
`;

function Underbar({
  cartItem,
  plusCart,
  minusCart,
  paynow,
  totalPrice,
  count,
}) {
  return (
    <Underbox className="selected-items mt-4">
      <Container className="text-center">
        <SelectName>선택한 상품</SelectName>
        <ScrollBox>
          {cartItem.map((item, index) => (
            <SelectBox key={index}>
              <MenuName>
                {item.name}{" "}
                {item.option.temp !== "none" && `(` + item.option.temp + `)`}
              </MenuName>
              <CountButton>
                <button onClick={() => plusCart(index)}>+</button>
                {item.count}
                <button onClick={() => minusCart(index)}>-</button>
              </CountButton>
              <MenuPrice>{item.price.toLocaleString()}원</MenuPrice>
              <Options>
                {item && item.type2 === "coffee" && (
                  <div>
                    {item.option.size !== "none" && item.option.size + ` / `}
                    {item.option.topping !== "none" &&
                      item.option.topping + ` / `}
                    {item.option.icetemp !== "none" && item.option.icetemp}
                  </div>
                )}
                {item && item.type2 === "noneCoffee" && (
                  <div>
                    {item.option.size !== "none" && item.option.size + ` / `}
                    {item.option.icetemp !== "none" && item.option.icetemp}
                  </div>
                )}
                {item && item.type === "dessert" && (
                  <div>
                    {item.option.addmenu !== "none" && (
                      <>
                        {item.option.addmenu === "HotCoffee" &&
                          item.option.addmenu + "+ 500"}
                        {item.option.addmenu === "IceCoffee" &&
                          item.option.addmenu + "+ 1000"}
                      </>
                    )}
                  </div>
                )}
              </Options>
            </SelectBox>
          ))}
        </ScrollBox>
      </Container>
      <Bcontainer>
        <Timer>
          <Timename>남은시간</Timename>
          <TimeDiv>
            <Time>{count}</Time>
            <Sec>초</Sec>
          </TimeDiv>
        </Timer>
        <Hbox className="total-price mt-3">
          <h3 className="text-center">
            ₩ <span id="totalPrice">{totalPrice.toLocaleString()}</span>
          </h3>
        </Hbox>
        <PayButton id="btn-success" onClick={() => paynow()}>
          <BtnText className="BtnText">결제하기</BtnText>
          {/* <BtnTwo className="BtnTwo" onClick={() => paynow()}>
          눌러!
        </BtnTwo> */}
        </PayButton>
        {/* <div id="selectedItemsList" className="list-group"></div> */}
      </Bcontainer>
    </Underbox>
  );
}
export default Underbar;
