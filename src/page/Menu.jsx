import { Link } from "react-router-dom";

export default function Menu({handleMenuToggle}) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex justify-center items-center">
      <div className="absolute top-0 right-0 p-4">
        <button onClick={handleMenuToggle}>
          <svg className="w-6 h-6 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="text-black text-center text-4xl font-extrabold">
        <p className="h-[10vh]"><Link to='/'>Home</Link></p>
        <p className="h-[10vh]"><Link to='/AboutMe'>AboutMe</Link></p>
        <p className="h-[10vh]"><Link to='/Develop'>Develop Portfolio</Link></p>
        <p className="h-[10vh]"><Link to='/Design'>Design Portfolio</Link></p>
        <p className="h-[10vh]"><Link to='/Contact'>Contact</Link></p>
      </div>
    </div>
  )
}