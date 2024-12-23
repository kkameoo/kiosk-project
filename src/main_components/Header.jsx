import styled from "styled-components";
import logo1 from "../images/logo1.jpg";
const Img = styled.img`
  width: 100% ;
  height 300px;
`;

function Header() {
  return (
    <h2 className="text-center mb-4">
      <Img src={logo1} />
    </h2>
  );
}
export default Header;
