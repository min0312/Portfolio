import Skillset from "../component/Skillset";
import Timeline from "../component/Timeline";

export default function AboutMe() {
  return (
    <div id="AboutMe" className="pt-[12vh] pl-[10vw] pr-[10vw] bg-[#000000] pb-[10vh] md:pb-0">
      <h3 className="text-3xl">What can I use</h3>
      <hr/>
      <Skillset />
      <Timeline />
    </div>
  )
}