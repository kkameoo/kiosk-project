import styled from "styled-components";
import DessertModal from "./DessertModal";

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

const Window = styled.div`
  color: black;
  background: white;
  border-radius: 8px;
  box-shadow: inset;
  padding: 20px;
  position: relative;
`;

const Cbutton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 5px;
  top: 5px;
`;

const Img = styled.img`
  width: 100px;
`;
function Modal({ onClose, readItem, addCart }) {
  return (
    <Container>
      <Window>
        <Cbutton onClick={() => onClose()}>X</Cbutton>
        {readItem.id}, {readItem.name} , {readItem.type}
        <Img src={readItem.image}></Img>
        <DessertModal />
        <button onClick={() => addCart()}>고르기</button>
      </Window>
    </Container>
  );
}

export default Modal;
