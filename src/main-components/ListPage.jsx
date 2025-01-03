import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: blue; */
`;
const Button = styled.button`
  /* background: #3d4c53; */
  background: transparent;
  margin: 0.5rem;
  width: 5rem;
  height: 0.8rem;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  ${(props) =>
    props.isActive &&
    css`
      background-color: white;
    `}
`;
const Button1 = styled(Button)`
  position: absolute;
  left: -4.5px;
  top: -760px;
  width: 2.5rem;
  height: 20rem;
  border-radius: 10px;
  font-size: 40px;
  font-weight: bold;
  color: #7b7b7b;

  background-color: white;
  border: 1px solid #aab8d3;
`;
const Button2 = styled(Button)`
  position: absolute;
  right: -5.5px;
  top: -760px;
  width: 2.5rem;
  height: 20rem;
  border-radius: 10px;
  font-size: 40px;
  font-weight: bold;
  color: #7b7b7b;
  background-color: white;
  border: 1px solid #aab8d3;
`;
function ListPage({ pages, paging, prevButton, nextButton, readPage }) {
  return (
    <Div>
      <NavLink
        onClick={() => {
          prevButton();
        }}
      >
        <Button1 className="LeftBtn">&lt;</Button1>
      </NavLink>
      <BtnContainer>
        {pages.map((page) => (
          <NavLink
            key={page.id}
            to={page.id}
            onClick={(event) => {
              event.preventDefault();
              console.log(event.target.value);
              paging(page.id + 1);
            }}
          >
            <Button isActive={readPage - 1 === page.id}></Button>
          </NavLink>
        ))}
      </BtnContainer>
      <NavLink
        onClick={() => {
          nextButton();
        }}
      >
        <Button2 className="RightBtn">&gt;</Button2>
      </NavLink>
    </Div>
  );
}

ListPage.propTypes = {
  pages: PropTypes.array,
  paging: PropTypes.func,
  prevButton: PropTypes.func,
  nextButton: PropTypes.func,
  readPage: PropTypes.number,
};

export default ListPage;
