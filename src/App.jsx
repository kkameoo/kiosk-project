import { useEffect, useState } from "react";
import Header from "./main_components/Header";
import Itemlist from "./main_components/Itemlist";
import Topbar from "./main_components/Topbar";
import Underbar from "./main_components/Underbar";
import UnderMidbar from "./main_components/UnderMidbar";
import UnderBottombar from "./main_components/UnderBottombar";

function App() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const fetchItems = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      setItemList(data);
      fetchImage(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // 이미지 다시 넣기
  const fetchImage = (data) => {
    for (let i = 0; i < data.length; i++) {
      let imgUrl = new URL("." + data[i].imageUrl, import.meta.url).href;
      console.log(imgUrl);
      data[i].image = imgUrl;
    }
    setItemList(data);
  };

  return (
    <div className="container mt-5">
      <Header />
      <Topbar />
      <Itemlist items={itemList} />

      <Underbar />
      <UnderMidbar />
      <UnderBottombar />
    </div>
  );
}

export default App;
