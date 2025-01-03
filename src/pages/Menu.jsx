import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../main-components/Header";
import Itemlist from "../main-components/Itemlist";
import Topbar from "../main-components/TopBar";
import Underbar from "../main-components/Underbar";

import ListPage from "../main-components/ListPage";
import { useNavigate } from "react-router-dom";
import Modal from "../modal-components/modal";

function Menu() {
  useEffect(() => {
    fetchItems();
    fetchIcon();
  }, []);

  const apiUrl = "http://localhost:1337/item";
  const apiUrlIcon = "http://localhost:1337/icon";
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
  // 카운트 시간
  const [count, setCount] = useState(180);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // console.log("필터 변경");
    paging(1);
    makeNumber(filteredList);
  }, [filteredList]);

  // 데이터 받아와서 itemList에 저장
  const fetchItems = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      // 이미지 가공 + 원본, 필터 state 세팅
      // const data = data1.item;
      fetchImage(data);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  const fetchIcon = async () => {
    try {
      const response = await fetch(apiUrlIcon);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      console.log(data);
      let imgurl = "http://localhost:1337" + data[16];
      setIcon(imgurl);
    } catch (err) {
      setError(err.message);
    }
  };

  // 페이지  넘버 클릭 시 9개 분량의 콘텐츠가 나오도록 조정 + 현재 페이지 세팅
  const paging = (page) => {
    let processingData = [];
    let num = 0;
    setItemList([]);
    for (let i = (page - 1) * 9; i < page * 9; i++) {
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
      let imgUrl = "http://localhost:1337/" + data[i].imageUrl;
      //   console.log(imgUrl);
      data[i].image = imgUrl;
    }
    setOriginal(data);
    setFilteredList(data);
  };

  // 페이지 갯수 세팅
  const makeNumber = (data) => {
    // console.log(data.length);
    let pageNum = Math.ceil(data.length / 9);
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
  const addCart = (data) => {
    console.log(data);
    let processingData = [];
    // 카트에 아무것도 없음
    if (cartItem.length === 0) {
      processingData.push({ ...readItem, count: 1, option: data });
      setCartItem(processingData);
    } else {
      let flag = false;
      cartItem.map((item, index) => {
        if (
          item.id === readItem.id &&
          item.option.addmenu == data.addmenu &&
          item.option.icetemp == data.icetemp &&
          item.option.size == data.size &&
          item.option.temp == data.temp &&
          item.option.topping == data.topping
        ) {
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
        processingData.push({ ...readItem, count: 1, option: data });
        setCartItem(processingData);
      }
    }
    // calc();
    setOpen(false);
    // console.log("finish");
  };

  useMemo(() => {
    let price = 0;
    cartItem.map((item) => {
      if (item.option.addmenu === "IceCoffee") {
        price += (item.price + 1000) * item.count;
      } else if (item.option.addmenu === "HotCoffee") {
        price += (item.price + 500) * item.count;
      } else {
        price += item.price * item.count;
      }
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

  const plusCart = (num) => {
    // console.log(num);
    let processingData = [];
    cartItem.map((item) => {
      processingData.push(item);
    });
    processingData[num].count++;
    setCartItem(processingData);
  };
  const minusCart = (num) => {
    let processingData = [];

    if (cartItem[num].count === 1) {
      processingData = [];
      cartItem.map((item, index) => {
        if (index === num) {
          return;
        } else {
          processingData.push(item);
        }
      });
      setCartItem(processingData);
    } else {
      processingData = [];
      cartItem.map((item) => {
        processingData.push(item);
      });
      processingData[num].count--;
      setCartItem(processingData);
    }
  };

  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      // console.log(count);
      setCount((prev) => prev - 1);
    }, 1000);

    if (count < 1) {
      clearInterval(interval.current);
      navigate("/");
    }
    return () => clearInterval(interval.current);
  });

  useEffect(() => {
    setCount(180);
    // console.log("itemlist render");
  }, [itemList]);
  useEffect(() => {
    setCount(180);
    // console.log("cartitem render");
  }, [cartItem]);
  useEffect(() => {
    setCount(180);
    // console.log("count render");
  }, [open]);

  return (
    <div>
      <Header icon={icon} />
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
        readPage={readPage}
      />
      <Underbar
        cartItem={cartItem}
        plusCart={plusCart}
        minusCart={minusCart}
        paynow={paynow}
        count={count}
        totalPrice={totalPrice}
      />
    </div>
  );
}
export default Menu;
