import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  background: #3d4c53;
  margin-left: 880px;
  margin-top: -120px;
  /* display: flex; */
  width: 200px;
  height: 100px;
  overflow: hidden;
  /* align-items: center; */
  /* justify-content: center; */
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.5),
    0px 1px 3px rgba(0, 0, 0, 0.3);

  &:hover .BtnTwo {
    left: 0px;
  }

  &:active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  }
`;

const DButton = styled(Button)`
  .BtnTwo {
    background-color: red;
  }
`;

const AButton = styled(Button)`
  .BtnTwo {
    background-color: #26a69a;
  }
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// const BtnTwo = styled.div`
//   position: relative;
//   width: 200px;
//   height: 100px;
//   margin-top: -21px;
//   padding-top: 2px;
//   background: #26a69a;
//   left: -200px;
//   transition: 0.3s;
// `;

const BtnText = styled.div`
  font-size: 30px;
  color: white;
  transition: 0.3s;
`;

const BtnText2 = styled.div`
  /* margin-top: 58px; */
  color: #fff;
`;
function UnderBottombar({ paynow }) {
  return <div className="actions text-center"></div>;
}
export default UnderBottombar;
