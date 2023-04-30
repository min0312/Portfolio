import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AboutMe from "./page/AboutMe";
import Contact from './page/Contact';
import Design from './page/Design';
import Develop from "./page/Develop";
import Header from "./page/Header";
import Main from './page/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="absolute top-0 text-white"><Header /></div>
      <div className="h-[100vh] bg-[#000000] pt-[8vh] pb-[5vh]">
      {/* <Main />   */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Develop' element={<Develop />} />
          <Route path='/Design' element={<Design />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
      {/* <div className="absolute bottom-0 text-white"><Footer /></div> */}
    </BrowserRouter>
  );
}

export default App;
