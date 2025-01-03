import styled from "styled-components";
import PropTypes from "prop-types";

const BMenu = styled.div`
  background-color: #6ebdba;
  width: 1050px;
  margin-left: 45px;
  display: flex;
  flex-wrap: wrap;
  /* padding: 30px; */
  /* gap: 30px; */

  /* justify-content: center; */
  /* justify-content: space-between; */
  /* align-items: center; */
  align-content: flex-start;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
  height: 1200px;
  border-radius: 0 0 5px 5px;
`;

const Menuitem = styled.div`
  background-color: #f3e6ed;
  width: 300px;
  height: 350px;
  border-radius: 5px;
  margin: 25px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  .selected-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    flex-direction: column;
  }
  .card-img-top {
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 300px;
    height: 250px;
    border-radius: 5px 5px 0px 0px;
  }
  .card-body {
    color: #121809;
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
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
              <br />
              <span className="card-text">{item.price.toLocaleString()}원</span>
            </div>
          </Menuitem>
        ))}
    </BMenu>
  );
}
Itemlist.propTypes = {
  items: PropTypes.array,
  openModal: PropTypes.func,
};
export default Itemlist;
