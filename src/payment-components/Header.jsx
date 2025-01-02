import styled from "styled-components";

const Box = styled.div`
  background-color: #79b0d4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 100px;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
  font-size: 50px;
  color: black;
  margin-bottom: 50px;
`;

function Header() {
  return <Box>결제수단 선택</Box>;
}
export default Header;
