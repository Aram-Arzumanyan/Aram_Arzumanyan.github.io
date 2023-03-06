import "./assets/style/global.scss";
import About from "./pages/about";
import Contact from "./pages/contact";
import Header from "./pages/header";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./pages/footer";
import Envelope from "./commponents/envelope";
import useLoader from "./customhooks/useLoader";
import Loading from "./commponents/loading";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let {loading}=useLoader()
  if(loading){
    return <Loading/>
  }
  return (
    <div className="G-container">
      <Header />
      <Home />
      <Envelope/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
