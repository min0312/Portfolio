import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-[100vw] flex h-[8vh] p-[2vh] justify-between place-items-center">
      <Link to='/' className="w-[20vw] text-xl text-[#F0A500] text-center">Gold__99k</Link>
      <RxHamburgerMenu className="h-[6vh] w-[4vw]"/>
    </div>
  )
}