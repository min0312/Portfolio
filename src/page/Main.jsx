import { Link } from "react-router-dom";

export default function Main() {

  return (
    <div className="text-white pl-[10vw] pr-[10vw] pt-[5vh] pb-[5vh]">
      <div className="text-xl">
        <p>Front-End</p>
        <p>Developer</p>
      </div>
      <div className=" h-[60vh] text-xl flex justify-between place-items-center text-center">
        <Link to='/AboutMe' className="w-[15vw]">AboutMe</Link>
        <Link to='/Develop' className="w-[15vw]">Develop Portfolio</Link>
        <Link to='/Design' className="w-[15vw]">Design Portfolio</Link>
        <Link to='/Contact' className="w-[15vw]">Contact</Link>
      </div>
    </div>
  )
}