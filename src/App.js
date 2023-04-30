import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./component/Footer";
import Header from "./component/Header";
import AboutMe from "./page/AboutMe";
import Contact from './page/Contact';
import Design from './page/Design';
import Develop from "./page/Develop";
import Main from './page/Main';
import Menu from "./page/Menu";

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <BrowserRouter>
      <div className="fixed bg-[#000000] top-0 z-30 text-white">
        <Header handleMenuToggle={handleMenuToggle} />
        {showMenu && <Menu handleMenuToggle={handleMenuToggle} />}
      </div>
      <div className="h-max bg-[#000000] pt-[8vh] pb-[5vh]">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Develop' element={<Develop />} />
          <Route path='/Design' element={<Design />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
      <div className="fixed bottom-0 right-0">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
