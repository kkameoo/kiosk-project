import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  width: 600px;
  height: 500px;
`;
//HOT,ICE
const Temp = styled.div`
  width: 600px;
  height: 45px;
`;
const Hot = styled.button`
  width: 285px;
  height: 45px;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;
`;
const Ice = styled.button`
  width: 285px;
  height: 45px;
  background-color: white;
  cursor: pointer;
  margin-left: 30px;
  border-radius: 10px;
`;
//Size
const Size = styled.div`
  position: relative;
  margin-top: 20px;
  width: 600px;
  height: 70px;
`;
const Sizename = styled.div`
  display: flex;
  width: 100px;
  height: 70px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const Sizediv = styled.div`
  position: absolute;
  left: 50px;
  bottom: 5px;
  width: 400px;
  margin-left: 100px;
  display: flex;
  gap: 20px;
`;
const Large = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;
const Medium = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;
const Small = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;
//Topping
const Topping = styled.div`
  position: relative;
  width: 600px;
  height: 70px;
  margin-top: 10px;
`;
const Toppingname = styled.div`
  display: flex;
  width: 100px;
  height: 70px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const Toppingdiv = styled.div`
  position: absolute;
  left: 50px;
  bottom: 5px;
  width: 400px;
  margin-left: 100px;
  display: flex;
  gap: 20px;
`;
const Vanilla = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;
const Hazelut = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;
const Notopping = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;
//Topping
const Icetemp = styled.div`
  margin-top: 20px;
  position: relative;
  width: 600px;
  height: 70px;
`;
const Icetempname = styled.div`
  display: flex;
  width: 100px;
  height: 70px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const Icetempdiv = styled.div`
  position: absolute;
  left: 50px;
  bottom: 5px;
  width: 400px;
  margin-left: 100px;
  display: flex;
  gap: 20px;
`;
const Bigice = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;
const Middleice = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;
const Smallice = styled.button`
  display: flex;
  width: 100px;
  height: 60px;
  background-color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
`;

function CoffeeModal({ tempClick, sizeClick, toppingClick, iceTempClick }) {
  return (
    <Container>
      <Temp>
        <Hot
          onClick={() => {
            tempClick("HOT");
          }}
        >
          HOT
        </Hot>
        <Ice
          onClick={() => {
            tempClick("ICE");
          }}
        >
          ICE
        </Ice>
      </Temp>
      <Size>
        <Sizename>사이즈</Sizename>
        <Sizediv>
          <Large
            onClick={() => {
              sizeClick("Large");
            }}
          >
            Large
          </Large>
          <Medium
            onClick={() => {
              sizeClick("Medium");
            }}
          >
            Medium
          </Medium>
          <Small
            onClick={() => {
              sizeClick("Small");
            }}
          >
            Small
          </Small>
        </Sizediv>
      </Size>
      <Topping>
        <Toppingname>토핑</Toppingname>
        <Toppingdiv>
          <Vanilla
            onClick={() => {
              toppingClick("바닐라 시럽");
            }}
          >
            바닐라
          </Vanilla>
          <Hazelut
            onClick={() => {
              toppingClick("헤이즐넛 시럽");
            }}
          >
            헤이즐넛
          </Hazelut>
          {/* <Notopping
            onClick={() => {
              toppingClick("X");
            }}
          >
            X (없음)
          </Notopping> */}
        </Toppingdiv>
      </Topping>
      <Icetemp>
        <Icetempname>얼음 선택</Icetempname>
        <Icetempdiv>
          <Bigice
            onClick={() => {
              iceTempClick("얼음 많이");
            }}
          >
            얼음 많이
          </Bigice>
          <Middleice
            onClick={() => {
              iceTempClick("기본");
            }}
          >
            기본 얼음
          </Middleice>
          <Smallice
            onClick={() => {
              iceTempClick("얼음 조금");
            }}
          >
            얼음 조금
          </Smallice>
        </Icetempdiv>
      </Icetemp>
    </Container>
  );
}
export default CoffeeModal;
