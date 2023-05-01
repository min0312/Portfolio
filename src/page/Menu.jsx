import { AiOutlinePlus } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";

export default function Menu({ handleMenuToggle }) {
  const scrollToElement = (id) => {
    scroll.scrollTo(document.getElementById(id).offsetTop);
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-10 flex justify-center items-center">
      <div className="absolute top-0 right-0 p-[1vh]">
        <button onClick={handleMenuToggle} className="pt-[1vh]">
          <AiOutlinePlus className="w-[6vw] h-[4vh] text-black transform rotate-45" />
        </button>
      </div>
      <div className="text-black text-center text-4xl font-extrabold">
        <p className="h-[10vh]" onClick={() => scrollToElement("Home")}>Home</p>
        <p className="h-[10vh]" onClick={() => scrollToElement("AboutMe")}>AboutMe</p>
        <p className="h-[10vh]" onClick={() => scrollToElement("Develop")}>Develop Portfolio</p>
        <p className="h-[10vh]" onClick={() => scrollToElement("Design")}>Design Portfolio</p>
        <p className="h-[10vh]" onClick={() => scrollToElement("Contact")}>Contact</p>
      </div>
    </div>
  );
}
