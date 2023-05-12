import { Link } from "react-router-dom";

export default function Menu({ handleMenuToggle }) {
  function closeMenu() {
    handleMenuToggle();
  }

  return (
    <div className="fixed inset-y-0 bg-white bg-opacity-80 z-10 flex justify-center items-center w-full sm:max-w-[33vw] right-0">
      <div className="text-black text-center text-xl">
        <Link to={"/"} onClick={closeMenu}><p className="h-[10vh]">Home</p></Link>
        <Link to={"/AboutMe"} onClick={closeMenu}><p className="h-[10vh]">AboutMe</p></Link>
        <Link to={"/Develop"} onClick={closeMenu}><p className="h-[10vh]">Develop Project</p></Link>
        <Link to={"/Design"} onClick={closeMenu}><p className="h-[10vh]">Design Project</p></Link>
        <Link to={"/Contact"} onClick={closeMenu}><p className="h-[10vh]">Contact</p></Link>
      </div>
    </div>
  );
}
