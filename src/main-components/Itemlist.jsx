import styled from "styled-components";
import Modal from "../modal-components/modal";

const BMenu = styled.div`
  /* background: linear-gradient(135deg, rgb(71, 70, 70), rgb(173, 171, 171)); */
  border: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  margin: 10px;

  /* flex-direction: column; */
  transition: transform 0.2s;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 400;
  /* height: 2200px; */
  /* justify-content: center; */
  line-height: 24px;
  /* text-align: center; */
  text-size-adjust: 100%;
  unicode-bidi: isolate;
  /* width: 1110px; */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const Menuitem = styled.div`
  background: linear-gradient(135deg, rgb(71, 70, 70), rgb(173, 171, 171));
  border: black;
  unicode-bidi: isolate;
  width: 270px;
  height: 334px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* justify-content: space-between; */

  .selected-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    flex-direction: column;
    transition: transform 0.2s;
  }
  .card-img-top {
    vertical-align: middle;
    border-style: none;
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 270px;
    height: 250px;
    &:hover {
      transform: scale(1.05);
    }
  }
  .card-body {
    margin-top: 30px;
    text-align: center;
    font-size: 20px;
  }
`;

function Itemlist({ items, openModal }) {
  return (
    <BMenu
      className="button d-flex flex-wrap justify-content-center"
      id="cafe-list"
    >
      {items &&
        items.map((item) => (
          <Menuitem
            key={item.id}
            className="menu-item card"
            onClick={() => openModal(item.id)}
          >
            <img src={item.image} alt={item.name} className="card-img-top" />
            <div className="card-body">
              <span className="card-title">{item.name}</span>
              <span className="card-text">{item.price}원</span>
            </div>
          </Menuitem>
        ))}
    </BMenu>
  );
}

export default Itemlist;
