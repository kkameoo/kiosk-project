function Underbar({ cartItem }) {
  return (
    <div className="selected-items mt-4">
      <h3 className="text-center">
        선택한 상품 :
        {cartItem.map((item, index) => (
          <div key={index}>
            {item.name} , 개수 : {item.count} , 가격 : {item.price}
          </div>
        ))}
      </h3>
      <div id="selectedItemsList" className="list-group"></div>
    </div>
  );
}
export default Underbar;
