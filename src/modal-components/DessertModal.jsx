import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  width: 600px;
  height: 500px;
`;
//메뉴 추가 옵션
const AddMenuName = styled.div`
  width: 300px;
  height: 40px;
  font-size: 20px;
`;
const AddMenu = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  gap: 20px;
`;
const HotCoffee = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const IceCoffee = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

function DessertModal({ addCoffeeClick }) {
  return (
    <Container>
      <AddMenuName>메뉴 추가</AddMenuName>
      <AddMenu>
        <HotCoffee
          onClick={() => {
            addCoffeeClick("HotCoffee");
          }}
        >
          뜨아 +500
        </HotCoffee>
        <IceCoffee
          onClick={() => {
            addCoffeeClick("IceCoffee");
          }}
        >
          아아 +1000
        </IceCoffee>
      </AddMenu>
    </Container>
  );
}
export default DessertModal;
