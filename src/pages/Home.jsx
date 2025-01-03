import Header from "../home-components/Header";
import Main from "../home-components/Main";
import Footer from "../home-components/Footer";
import { useEffect, useState } from "react";
import VideoPlay from "../home-components/VideoPlay";

function Home() {
  const apiUrl = "http://localhost:1337/homeicon";
  const [error, setError] = useState();
  const [icon, setIcon] = useState([]);

  // const imgUrl = new URL("../images/main11.mp4", import.meta.url).href;

  useEffect(() => {
    fetchIcons();
  }, []);

  const fetchIcons = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      // 이미지 가공 + 원본, 필터 state 세팅
      // const data = data1.icon;
      console.log(data);
      fetchImage(data);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  const fetchImage = (data) => {
    let icons = [];
    for (let i = 0; i < data.length; i++) {
      let imgUrl = "http://localhost:1337/" + data[i];
      //   console.log(imgUrl);
      icons[i] = imgUrl;
    }
    setIcon(icons);
  };

  return (
    <div>
      <Header />
      <VideoPlay icon={icon} />
      <Main></Main>
      <Footer icon={icon}></Footer>
    </div>
  );
}

export default Home;
