import styled from "styled-components";

const Img = styled.img`
  width: 100% ;
  height 300px;
`;

function Header() {
  const imgUrl = new URL("../images/logo1.jpg", import.meta.url).href;
  console.log(imgUrl);
  return (
    <h2 className="text-center mb-4">
      <Img src={imgUrl} />
    </h2>
  );
}
export default Header;
