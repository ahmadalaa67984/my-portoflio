import Container from "./component/headercontainer/container";
import MainContainer from "./component/maincontainer/MainContainer";
import Skills from "./component/skills/Skills";
import "./app.css"
import OverView from "./component/overrview/OverView";
import Contact from "./component/contact/Contact";
import Signture from "./component/signture/Signture";
function App() {
  
  return (
    <>
    
        <div className="App">
          <Container />
          <OverView></OverView>
          <Skills />
          <MainContainer />
          <Contact/>
          <Signture/>
        </div>
    </>
  );
}

export default App;
