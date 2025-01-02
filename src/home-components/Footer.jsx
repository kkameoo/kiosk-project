import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Wrap = styled.div`
  display: flex;
  position: relative;
`;
const Btn = styled.button`
  width: 320px;
  height: 400px;
  position: absolute;
  bottom: 300px;
  left: 17%;
  font-size: 50px;
  font-weight: 600;
  border-radius: 10px;
  border: 5px solid black;
  background-color: white;
  &:active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    transform: scale(1.05);
  }
`;
const Btn2 = styled(Btn)`
  left: 55%;
  /* right: 20%; */
`;
const Img = styled.img`
  width: 90%;
  height: 55%;
  margin-bottom: 20px;
`;
function Footer() {
  const imgUrl = new URL("../images/icon/take-away.png", import.meta.url).href;
  const imgUrl2 = new URL("../images/icon/coffee-cup.png", import.meta.url)
    .href;
  const navigate = useNavigate();
  return (
    <Wrap>
      <Btn onClick={() => navigate("/")}>
        <Img src={imgUrl} />
        먹고가기
      </Btn>
      <Btn2 onClick={() => navigate("/")}>
        <Img src={imgUrl2} />
        포장하기
      </Btn2>
    </Wrap>
  );
}
export default Footer;
