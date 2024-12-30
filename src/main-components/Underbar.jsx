function Underbar({ cartItem, plusCart, minusCart }) {
  return (
    <div className="selected-items mt-4">
      <h3 className="text-center">
        선택한 상품 :
        {cartItem.map((item, index) => (
          <div key={index}>
            {item.name} , 개수 : {item.count} , 가격 : {item.price}
            <br />
            추가 옵션:
            {item && item.type2 === "coffee" && (
              <div>
                {item.option.size}, {item.option.topping}, {item.option.temp},{" "}
                {item.option.icetemp}
              </div>
            )}
            {item && item.type2 === "noneCoffee" && (
              <div>
                {item.option.size}, {item.option.icetemp}
              </div>
            )}
            {item && item.type === "dessert" && (
              <div>{item.option.addmenu}</div>
            )}
            <button onClick={() => plusCart(index)}>+</button>
            <button onClick={() => minusCart(index)}>-</button>
            <br />
          </div>
        ))}
      </h3>
      <div id="selectedItemsList" className="list-group"></div>
    </div>
  );
}
export default Underbar;
