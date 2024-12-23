import { useEffect } from "react";
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

  const fetchItems = async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("데이터를 받아오지 못했습니다.");
      }
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="container mt-5">
      <Header />
      <Topbar />
      <Itemlist />

      <Underbar />
      <UnderMidbar />
      <UnderBottombar />
    </div>
  );
}

export default App;
