import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIsIconRotated(!isIconRotated);
  }

  return (
    <div className="w-[100vw] flex h-[8vh] p-[2vh] justify-between place-items-center">
      <Link to='/' className="w-[20vw] text-xl text-[#F0A500] text-center">Gold__99k</Link>
      <button onClick={toggleMenu} >
        <AiOutlinePlus className={`h-[6vh] w-[4vw] transition-transform ${isIconRotated ? 'transform rotate-45' : ''}`} />
      </button>
      {isMenuOpen && <Menu handleMenuToggle={toggleMenu} />}
    </div>
  )
}
