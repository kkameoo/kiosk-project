import styled from "styled-components";

const Box = styled.div`
  background-color: #ffc400;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 5rem;
  border-radius: 10px 10px 0 0;
`;

function Header() {
  return <Box>결제수단 선택</Box>;
}
export default Header;
