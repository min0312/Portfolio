// ...

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Menu from "../page/Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [isIconBlack, setIsIconBlack] = useState(false); // 검정색 아이콘 추가

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIsIconRotated(!isIconRotated);
    setIsIconBlack(!isIconBlack); // 아이콘 색깔 변경
  }

  return (
    <div className="w-[100vw] flex h-[8vh] p-[2vh] justify-between items-center">
      <Link to='/' className="w-[15vw] text-lg text-[#F0A500] text-center">Gold__99k</Link>
      <div className="w-[4vw] flex items-center justify-center"> {/* 수정 */}
        <button onClick={toggleMenu} className="z-50">
          <AiOutlinePlus className={`h-[30px] w-[30px] transition-transform ${isIconRotated ? 'transform rotate-45' : ''}`} style={{ color: isIconBlack ? '#000000' : '#F5F0F6' }} />
        </button>
      </div>
      {isMenuOpen && <Menu handleMenuToggle={toggleMenu}/>}
    </div>
  )  
}
