import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderBox = styled.div`
  position: relative;
  height: 100px;
  margin-bottom: 50px;
  background-color: #79b0d4;
`;
const CafeName = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 100px;
  font-size: 80px;
  font-family: cursive;
  text-align: center;
  /* 깜빡이는 애니메이션 */
  animation: flicker 0.5s infinite alternate;

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Img = styled.img`
  width: 3rem;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
`;

function Header() {
  const imgUrl = new URL("../images/home-btn2.png", import.meta.url).href;
  const navigate = useNavigate();

  return (
    <HeaderBox>
      <Img
        src={imgUrl}
        onClick={() => {
          navigate("/home");
        }}
      />
      <CafeName>4jo Cafe</CafeName>
    </HeaderBox>
  );
}
export default Header;
