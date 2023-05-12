import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import AboutMe from "./page/AboutMe";
import Contact from "./page/Contact";
import Design from "./page/Design";
import Develop from "./page/Develop";
import Main from "./page/Main";
import Menu from "./page/Menu";

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <div className="bg-[#000000] h-[100vh] text-[#F5F0F6]">
      <BrowserRouter>
        <Header handleMenuToggle={handleMenuToggle}/>
        {showMenu && <Menu handleMenuToggle={handleMenuToggle} />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Develop' element={<Develop />} />
          <Route path='/Design' element={<Design />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <div className="fixed bottom-0 right-0">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
