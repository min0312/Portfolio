// absolute bg-slate-300 h-[100vh] w-[5vw] right-0

import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const [hoveredId, setHoveredId] = useState(null);

  const navItems = [
    { id: 1, name: "Main", path: "/" },
    { id: 2, name: "About Me", path: "/AboutMe" },
    { id: 3, name: "Develop Project", path: "/Develop" },
    { id: 4, name: "Design Project", path: "/Design" },
    { id: 5, name: "Contact", path: "/contact" }
  ];

  return (
    <div className="flex flex-col items-center absolute h-[92vh] w-[6vw] right-0 place-content-center">
      {navItems.map((item) => (
        <Fragment key={item.id}>
          <Link to={item.path}>
            <div
              className={`relative w-4 h-4 ${
                location.pathname === item.path ? "bg-[#E2C044]" : "bg-[#F5F0F6]"
              } rounded-full`}
              onMouseEnter={() => setHoveredId(item.id)} // 해당 동그라미에 마우스가 올라갔을 때 id를 업데이트
              onMouseLeave={() => setHoveredId(null)} // 해당 동그라미에서 마우스가 벗어났을 때 id를 초기화
            >
              {hoveredId === item.id && ( // 현재 hover된 동그라미에 대해서만 네모를 보여줌
                <div className={`absolute backdrop-blur-md -top-3 right-10 w-[8vw] rounded-lg text-center p-2
                ${location.pathname === item.path ? "bg-[#E2C044] text-[#000000]" : "text-[#E2C044] border-2 border-[#E2C044] border-solid"}`}>
                  {item.name}
                </div>
              )}
            </div>
          </Link>
          {item.id < navItems.length && (
            <div
              className="w-[0.1vw] h-[10vh] bg-[#F5F0F6]"
            ></div>
          )}
        </Fragment>
      ))}
    </div>
  );  
}
