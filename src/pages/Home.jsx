import styled from "styled-components";
import main11 from "../images/main11.mp4";
import Header from "../home-components/Header";
import Main from "../home-components/Main";
import Footer from "../home-components/Footer";
const Video = styled.video`
  width: 100%;
  height: 100%;
  height: calc(100% + 120px); /* 비디오의 전체 높이를 100px 더 크게 만듬 */
  object-fit: cover; /* 비디오가 화면을 덮도록 만듬 */
  object-position: 0 -120px; /* 위 100px을 잘라내기 위해 위치를 조정 */
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
