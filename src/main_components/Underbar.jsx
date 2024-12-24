function Underbar({ page }) {
  return (
    <div className="selected-items mt-4">
      <button
        onClick={() => {
          page(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          page(2);
        }}
      >
        2
      </button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <h3 className="text-center">선택한 상품</h3>
      <div id="selectedItemsList" className="list-group"></div>
    </div>
  );
}
export default Underbar;
