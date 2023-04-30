import Info from "../component/Info";
import Timeline from "../component/Timeline";

export default function AboutMe() {
  return (
    <div className="text-white pl-[10vw] pr-[10vw]">
      <p>Hello, I'm MinKyung Keum</p>
      <Info />
      <h1>스킬셋</h1>
      <div className="h-[55vh] overflow-auto"><Timeline /></div>
    </div>
  )
}