import { useEffect, useMemo, useState } from "react";
import Header from "../main-components/Header";
import Itemlist from "../main-components/Itemlist";
import Topbar from "../main-components/TopBar";
import Underbar from "../main-components/Underbar";
import UnderBottombar from "../main-components/UnderBottombar";
import UnderMidbar from "../main-components/UnderMidbar";
import ListPage from "../main-components/ListPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Modal from "../modal-components/modal";

function Menu() {
  useEffect(() => {
    fetchItems();
  }, []);

  // 원본 아이템 리스트
  const [original, setOriginal] = useState([]);
  // 현재 아이템 리스트
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(null);

  // 총 페이지
  const [pageNumber, setPageNumber] = useState([]);
  // 보고있는 페이지
  const [readPage, setReadPage] = useState(null);
  // filter 리스트
  const [filteredList, setFilteredList] = useState([]);
  // 모달창 상태
  const [open, setOpen] = useState(false);
  // 장바구니 아이템 리스트
  const [cartItem, setCartItem] = useState([]);
  // 선택된 아이템
  const [readItem, setReadItem] = useState(null);
  // 선택된 총가격
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // console.log("필터 변경");
    paging(1);
    makeNumber(filteredList);
  }, [filteredList]);

  // 데이터 받아와서 itemList에 저장
  const fetchItems = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      // 이미지 가공 + 원본, 필터 state 세팅
      fetchImage(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // 페이지  넘버 클릭 시 6개 분량의 콘텐츠가 나오도록 조정 + 현재 페이지 세팅
  const paging = (page) => {
    let processingData = [];
    let num = 0;
    setItemList([]);
    for (let i = (page - 1) * 6; i < page * 6; i++) {
      if (filteredList[i] === undefined) {
        console.log("no contents");
      } else {
        processingData[num] = filteredList[i];
      }
      num++;
    }
    setReadPage(page);
    setItemList(processingData);
  };

  // 이미지 다시 넣기 + 원본 필터세팅
  const fetchImage = (data) => {
    for (let i = 0; i < data.length; i++) {
      let imgUrl = new URL(".." + data[i].imageUrl, import.meta.url).href;
      //   console.log(imgUrl);
      data[i].image = imgUrl;
    }
    setOriginal(data);
    setFilteredList(data);
  };

  // 페이지 갯수 세팅
  const makeNumber = (data) => {
    // console.log(data.length);
    let pageNum = Math.ceil(data.length / 6);
    // console.log(pageNum);
    let container = [];
    let j = 0;
    for (let i = 1; i <= pageNum; i++) {
      container[j] = { id: j, number: i };
      j++;
    }
    setPageNumber(container);
  };
  // 이전 버튼
  const prevButton = () => {
    if (readPage > 1) {
      paging(readPage - 1);
    }
  };
  // 다음 버튼
  const nextButton = () => {
    if (readPage > 0 && readPage < pageNumber.length) {
      paging(readPage + 1);
    }
  };
  // 전체 페이지
  const allButton = () => {
    setFilteredList(original);
  };

  // 음료 페이지
  const juiceButton = () => {
    let processingData = [];
    original.map((item) => {
      item.type === "juice" ? processingData.push(item) : item;
    });
    setFilteredList(processingData);
  };

  const dessertButton = () => {
    let processingData = [];
    original.map((item) => {
      item.type === "dessert" ? processingData.push(item) : item;
    });
    setFilteredList(processingData);
  };

  const coffeeButton = () => {
    let processingData = [];
    original.map((item) => {
      item.type2 === "coffee" ? processingData.push(item) : item;
    });
    setFilteredList(processingData);
  };

  const beverageButton = () => {
    let processingData = [];
    original.map((item) => {
      item.type2 === "noneCoffee" ? processingData.push(item) : item;
    });
    setFilteredList(processingData);
  };
  // 기타 페이지
  const etcButton = () => {
    let processingData = [];
    original.map((item) => {
      item.type === "cup" ? processingData.push(item) : item;
    });
    setFilteredList(processingData);
  };

  // 순서 주의
  const addCart = () => {
    let processingData = [];
    // 카트에 아무것도 없음
    if (cartItem.length === 0) {
      processingData.push({ ...readItem, count: 1 });
      setCartItem(processingData);
    } else {
      let flag = false;
      cartItem.map((item, index) => {
        if (item.id === readItem.id) {
          flag = true;
          cartItem.map((item) => {
            processingData.push(item);
          });
          processingData[index].count++;
          console.log(processingData);
          setCartItem(processingData);
        }
      });
      if (flag === false) {
        // processingData = cartItem;  -> 얕은 복사를 하면 state가 변화한것을 모름, 깊은 복사사용
        cartItem.map((item) => {
          processingData.push(item);
        });
        processingData.push({ ...readItem, count: 1 });
        setCartItem(processingData);
      }
    }
    // calc();
    setOpen(false);
  };

  useMemo(() => {
    let price = 0;
    cartItem.map((item) => {
      price += item.price * item.count;
    });
    setTotalPrice(price);
  }, [cartItem]);

  let content = null;

  if (open === true) {
    content = (
      <Modal
        onClose={() => {
          setOpen(false);
        }}
        readItem={readItem}
        addCart={addCart}
      ></Modal>
    );
  } else if (open === false) {
    content = null;
  }
  const openModal = (id) => {
    setOpen(true);
    let item = null;
    for (let i = 0; i < original.length; i++) {
      item = original[i].id === id ? original[i] : null;
      if (original[i].id === id) {
        break;
      }
    }
    setReadItem(item);
  };
  const navigate = useNavigate();
  const paynow = () => {
    if (cartItem.length === 0) {
      alert("음식을 고르시오");
    } else {
      navigate(
        "/payment",

        {
          state: {
            cartItem,
            totalPrice,
          },
        }
      );
    }
  };

  return (
    <div>
      <Header />
      <Topbar
        paging={paging}
        allButton={allButton}
        juiceButton={juiceButton}
        dessertButton={dessertButton}
        coffeeButton={coffeeButton}
        beverageButton={beverageButton}
        etcButton={etcButton}
      />
      <Itemlist items={itemList} openModal={openModal} />
      {content}
      <ListPage
        pages={pageNumber}
        paging={paging}
        prevButton={prevButton}
        nextButton={nextButton}
      />
      <Underbar cartItem={cartItem} />
      <UnderMidbar totalPrice={totalPrice} />
      <UnderBottombar paynow={paynow} />
    </div>
  );
}
export default Menu;
