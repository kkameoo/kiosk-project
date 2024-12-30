import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  width: 600px;
  height: 400px;
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
//Icetemp
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

function NonCoffeeModal({ sizeClick, iceTempClick }) {
  return (
    <Container>
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
      <Icetemp>
        <Icetempname>얼음 선택</Icetempname>
        <Icetempdiv>
          <Bigice
            onClick={() => {
              iceTempClick("Bigice");
            }}
          >
            얼음 많이
          </Bigice>
          <Middleice
            onClick={() => {
              iceTempClick("Middleice");
            }}
          >
            기본 얼음
          </Middleice>
          <Smallice
            onClick={() => {
              iceTempClick("Smallice");
            }}
          >
            얼음 조금
          </Smallice>
        </Icetempdiv>
      </Icetemp>
    </Container>
  );
}
export default NonCoffeeModal;
