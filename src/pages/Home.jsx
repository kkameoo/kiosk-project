import styled from "styled-components";
import main11 from "../images/main11.mp4";
import Header from "../home-components/Header";
import Main from "../home-components/Main";
import Footer from "../home-components/Footer";
const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
function Home() {
  const imgUrl = new URL("../images/main11.mp4", import.meta.url).href;
  return (
    <div>
      <Header />
      <Video muted autoPlay loop>
        <source src={main11} type="video/mp4" />
      </Video>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
export default Home;
