function UnderBottombar() {
  return (
    <div className="actions text-center">
      <button id="btn-danger">
        {/*onclick="clearItems()"*/}
        <p className="btnText">삭제하기</p>
        <div className="btnTwo">
          <p className="btnText2">X</p>
        </div>
      </button>
      <button id="btn-success">
        <p className="btnText">결제하기</p>
        <div className="btnTwo">
          <p className="btnText2">눌러!</p>
        </div>
      </button>
    </div>
  );
}
export default UnderBottombar;
