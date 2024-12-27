import styled from "styled-components";
import DessertModal from "./DessertModal";
//모달배경 스타일
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
//모달창 스타일
const Window = styled.div`
  position: relative;
  color: black;
  background: rgb(245, 245, 245);
  border-radius: 8px;
  box-shadow: inset;
  padding: 20px;
  position: relative;
  width: 600px;
  height: 800px;
`;
//취소,확인 버튼
const Button = styled.div`
  position: absolute;
  width: 550px;
  height: 60px;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;
//취소
const Nbutton = styled.button`
  background: white;
  font-size: 20px;
  width: 45%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
`;
//확인
const Ybutton = styled.button`
  background: white;
  font-size: 20px;
  width: 45%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
`;

//이미지,음료이름,수량,금액 div
const ItemInfo = styled.div`
  position: relative;
  width: 600px;
  height: 150px;
  margin-top: 10px;
`;
//이미지
const ItemImg = styled.img`
  width: 160px;
  height: 150px;
  display: block;
  margin-left: 20px;
  border: 1px solid;
`;
//음료이름
const ItemName = styled.p`
  position: absolute;
  color: black;
  font-size: 30px;
  -webkit-text-stroke: 1px black;
  width: 380px;
  right: 0;
  top: -30px;
`;
//수량
const ItemCount = styled.p`
  position: absolute;
  width: 150px;
  right: 37%;
  bottom: -16px;
`;
//금액
const ItemPrice = styled.p`
  position: absolute;
  width: 150px;
  right: 0;
  bottom: -30px;
  font-size: 30px;
  text-align: right;
  padding-right: 10px;
`;
const Img = styled.img`
  width: 100px;
`;
function Modal({ onClose, readItem, addCart }) {
  return (
    <Container>
      <Window>
        <Button>
          <Nbutton onClick={() => onClose()}>취소</Nbutton>
          <Ybutton onClick={() => addCart()}>선택 완료</Ybutton>
        </Button>
        <ItemInfo>
          <ItemImg src={readItem.image}></ItemImg>
          <ItemName>{readItem.name}</ItemName>
          <ItemCount>수량 넣는곳(해야 함)</ItemCount>
          <ItemPrice>₩ {readItem.price}</ItemPrice>
        </ItemInfo>

        <DessertModal />
        {/* <button onClick={() => addCart()}>고르기</button> */}
      </Window>
    </Container>
  );
}

export default Modal;
