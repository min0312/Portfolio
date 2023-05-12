import { animateScroll as scroll } from "react-scroll";

export default function Main() {
  const scrollToElement = (id) => {
    scroll.scrollTo(document.getElementById(id).offsetTop);
  };

  return (
    <>
      <div className="">
        <div className="text-xl">
          <p>Front-End</p>
          <p>Developer</p>
        </div>
        {/* <div className="h-[60vh] text-xl flex justify-between place-items-center text-center">
          <div className="w-[15vw]" onClick={() => scrollToElement("AboutMe")}>
            AboutMe
          </div>
          <div className="w-[15vw]" onClick={() => scrollToElement("Develop")}>
            Develop Portfolio
          </div>
          <div className="w-[15vw]" onClick={() => scrollToElement("Design")}>
            Design Portfolio
          </div>
          <div className="w-[15vw]" onClick={() => scrollToElement("Contact")}>
            Contact
          </div>
        </div> */}
      </div>
      {/* <div className="pt-[5vh]">
        <div id="AboutMe"><AboutMe /></div>
        <div id="Develop"><Develop /></div>
        <div id="Design"><Design /></div>
        <div id="Contact"><Contact /></div>
      </div> */}
    </>
  );
}
