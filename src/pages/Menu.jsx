import { useEffect, useState } from "react";
import Header from "../main_components/Header";
import Itemlist from "../main_components/Itemlist";
import Topbar from "../main_components/TopBar";
import Underbar from "../main_components/Underbar";
import UnderBottombar from "../main_components/UnderBottombar";
import UnderMidbar from "../main_components/UnderMidbar";
import ListPage from "../main_components/ListPage";

function Menu() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [original, setOriginal] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  // 데이터 받아와서 itemList에 저장
  const fetchItems = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      // 야생
      setItemList(data);
      // 가공
      fetchImage(data);
      // 원본 데이터 유지
    } catch (err) {
      setError(err.message);
    }
  };

  // 페이지  넘버 클릭 시 6개 분량의 콘텐츠가 나오도록 조정
  const paging = (page) => {
    let processingData = [];
    setItemList([]);
    for (let i = (page - 1) * 6; i < page * 6; i++) {
      if (original[i] === null) {
        console.log("no contents");
      } else {
        processingData[i] = original[i];
      }
    }
    setItemList(processingData);
  };

  // 이미지 다시 넣기
  const fetchImage = (data) => {
    for (let i = 0; i < data.length; i++) {
      let imgUrl = new URL(".." + data[i].imageUrl, import.meta.url).href;
      //   console.log(imgUrl);
      data[i].image = imgUrl;
    }
    setOriginal(data);
    setItemList(data);
  };

  return (
    <div>
      <Header />
      <Topbar />
      <Itemlist items={itemList} />
      <ListPage />
      <Underbar page={paging} />
      <UnderMidbar />
      <UnderBottombar />
    </div>
  );
}
export default Menu;
