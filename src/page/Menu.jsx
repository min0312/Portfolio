import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Menu({ handleMenuToggle }) {

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-10 flex justify-center items-center">
      <div className="absolute top-0 right-0 p-[1vh]">
        <button onClick={handleMenuToggle} className="pt-[1vh]">
          <AiOutlinePlus className="w-[6vw] h-[4vh] text-black transform rotate-45" />
        </button>
      </div>
      <div className="text-black text-center text-4xl font-extrabold">
        <p className="h-[10vh]"><Link to="/" onClick={handleMenuToggle}>Home</Link></p>
        <p className="h-[10vh]"><Link to="/AboutMe" onClick={handleMenuToggle}>AboutMe</Link></p>
        <p className="h-[10vh]"><Link to="/Develop" onClick={handleMenuToggle}>Develop Portfolio</Link></p>
        <p className="h-[10vh]"><Link to="/Design" onClick={handleMenuToggle}>Design Portfolio</Link></p>
        <p className="h-[10vh]"><Link to="/Contact" onClick={handleMenuToggle}>Contact</Link></p>
      </div>
    </div>
  );
}
