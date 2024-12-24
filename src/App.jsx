import { useEffect, useState } from "react";
import Header from "./main_components/Header";
import Itemlist from "./main_components/Itemlist";
import Topbar from "./main_components/TopBar";
import Underbar from "./main_components/Underbar";
import UnderMidbar from "./main_components/UnderMidbar";
import UnderBottombar from "./main_components/UnderBottombar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    margin: auto;
    width: 1140px;
    color: rgba(255, 255, 255, 0.589);
    background: linear-gradient(
      to right,
      black,
      grey,
      rgb(173, 173, 173),
      grey,
      black
    );
    ::after,
    ::before {
      box-sizing: border-box;
    }
  `;

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
    <Container className="container mt-5">
      <Header />
      <Topbar />
      <Itemlist items={itemList} />
      <Underbar />
      <UnderMidbar />
      <UnderBottombar />
    </Container>
  );
}

export default App;
