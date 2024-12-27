function UnderMidbar({ totalPrice }) {
  return (
    <div className="total-price mt-3">
      <h3 className="text-center">
        총 금액: <span id="totalPrice">{totalPrice}</span>
      </h3>
    </div>
  );
}
export default UnderMidbar;
