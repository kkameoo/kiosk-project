function Itemlist({ items }) {
  return (
    <div
      className="button d-flex flex-wrap justify-content-center"
      id="cafe-list"
    >
      {items &&
        items.map((item) => (
          <div className="menu-item card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-img-top" />
            <div className="card-body">
              <span className="card-title">{item.name}</span>
              <span className="card-text">{item.price}원</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Itemlist;
