import { useEffect, useState } from "react";
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
  /* background: #3D4C53; */
  background: transparent;
  margin: 0.5rem;
  width: 5rem;
  height: 0.8rem;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.5),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  font-size: 20px;
  ${(props) =>
    props.isActive &&
    css`
      background-color: white;
    `}
`;
const Button1 = styled(Button)`
  left: -5.5px;
  position: absolute;
  top: -500px;
  width: 2.5rem;
  height: 8rem;
  border-radius: 10px;
  font-size: 40px;
  font-weight: bold;
  color: #656565;
  /* height: 100px; */
  border: 4px solid gray;
  /* text-align: center; */
`;
const Button2 = styled(Button)`
  right: -5.5px;
  position: absolute;
  top: -500px;
  width: 2.5rem;
  height: 8rem;
  border-radius: 10px;
  font-size: 40px;
  font-weight: bold;
  color: #656565;
  /* height: 100px; */
  border: 4px solid gray;
  /* text-align: center; */
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
export default ListPage;
