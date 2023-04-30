import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Infodata from "../data/Info.json";
import Menu from "../page/Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIsIconRotated(!isIconRotated);
  }

  return (
    <div className="w-[100vw] flex h-[8vh] p-[2vh] justify-between place-items-center">
      <Link to='/' className="w-[15vw] text-lg text-[#F0A500] text-center">Gold__99k</Link>
      <div className="text-white opacity-30 w-[40vw] flex justify-between">
        <p>{Infodata[0].tel}</p>
        <p>{Infodata[0].mail}</p>
      </div>
      <button onClick={toggleMenu} className="w-[4vw]">
        <AiOutlinePlus className={`h-[6vh] w-[4vw] transition-transform ${isIconRotated ? 'transform rotate-45' : ''}`} />
      </button>
      {isMenuOpen && <Menu handleMenuToggle={toggleMenu} />}
    </div>
  )
}
