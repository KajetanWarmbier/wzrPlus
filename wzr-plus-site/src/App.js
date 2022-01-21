import WzrText from "./components/WzrText";
import PanelsBox from "./components/PanelsBox";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen bg-bgcolor bg-[url('./assets/BackgroundImg/wzrBackground.svg')]">
      <div>
        <WzrText />
        <PanelsBox />
        <Footer />
      </div>
    </div>
  );
}

export default App;
