import Info from "../component/Info";
import Skillset from "../component/Skillset";
import Timeline from "../component/Timeline";

export default function AboutMe() {
  return (
    <div id="AboutMe" className="text-white overflow-auto pl-[10vw] pr-[10vw]">
      <p className="text-3xl pt-[8vh] pb-[5vh]">Front-End 개발자 금민경입니다.</p>
      <Info />
      <Skillset />
      <Timeline />
    </div>
  )
}