import Home from "./home";
import About from "./about";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Projects from "./projects";
import Footer from "./footer";
import ScrollToTopButton from "./scroll-to-top";
import ContactMe from "./contactme";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects/>} />
          <Route path="contactme" element={<ContactMe/>} />
        </Routes>
        <Footer/>
        <ScrollToTopButton/>
      </div>
    </BrowserRouter>
  );
}

export default App;
