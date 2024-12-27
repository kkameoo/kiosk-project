import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  background: #3d4c53;
  margin: 20px auto;
  width: 200px;
  height: 50px;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.5),
    0px 1px 3px rgba(0, 0, 0, 0.3);

  &:hover .BtnTwo {
    left: 0px;
  }

  &:hover .BtnText {
    margin-left: 65px;
  }

  &:active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  }
`;

const DButton = styled(Button)`
  .BtnTwo {
    background-color: red;
  }
  .btnText2 {
    margin-top: 58px;
    color: #fff;
  }
`;

const AButton = styled(Button)`
  .BtnTwo {
    background-color: #26a69a;
  }
  .btnText2 {
    margin-top: 58px;
    color: #fff;
  }
`;

const BtnTwo = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  margin-top: -21px;
  padding-top: 2px;
  background: #26a69a;
  left: -200px;
  transition: 0.3s;
`;

const BtnText = styled.div`
  color: white;
  transition: 0.3s;
`;

const BtnText2 = styled.div`
  /* margin-top: 58px; */
  color: #fff;
`;
function UnderBottombar({ paynow }) {
  return (
    <div className="actions text-center">
      <DButton id="btn-danger">
        {/*onclick="clearItems()"*/}
        <BtnText className="BtnText">삭제하기</BtnText>
        <BtnTwo className="BtnTwo">
          <BtnText2 className="BtnText2">X</BtnText2>
        </BtnTwo>
      </DButton>
      <AButton id="btn-success">
        <BtnText className="BtnText">결제하기</BtnText>
        <BtnTwo className="BtnTwo" onClick={() => paynow()}>
          눌러!
        </BtnTwo>
      </AButton>
    </div>
  );
}
export default UnderBottombar;
