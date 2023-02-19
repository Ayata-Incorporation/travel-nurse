import Benefits from "./MyComponents/Benefits";
import Services from "./MyComponents/Services";
import Veridian from "./MyComponents/Veridian";
import Home from "./MyComponents/Home";
import "./App.css"
import SuccessStory from "./MyComponents/SuccessStory";
import KnowUsBetter from "./MyComponents/KnowUsBetter";
import Destination from "./MyComponents/Destination";
import SendEmail from "./MyComponents/SendEmail";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <div className="App">
     <Home/>
     <Veridian/>
     <Services/>
     <Benefits/>
     <SuccessStory/>
     <KnowUsBetter/>
     <Destination/>
     <SendEmail/>
     <Footer/>
    </div>
  );
}

export default App;
