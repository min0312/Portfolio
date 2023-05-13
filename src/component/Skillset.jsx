import skill from '../data/Info.json';

export default function Skillset() {
  return (
    <div className='mt-[2vh]'>
      <div className='flex flex-col sm:flex-row md:items-center mt-[1vh]'>
        <p className='whitespace-nowrap w-[20vw]'>Full-Stack <br/> Web Develop</p>
        <div className="mt-[1vh] mb-[1vh] flex flex-wrap w-[60vw]">
          {skill.map((item) =>
            item.Full.map((skillName) => (
              <p key={skillName}
              className={`p-[3px] m-[3px] border-[1px] pl-[5px] pr-[5px] rounded-md text-sm
              ${["JavaScript", "React", "Node.js"].includes(skillName) ? "border-[#E2C044] text-[#E2C044]" : "border-[#F5F0F6]"}`}>
                {skillName}
              </p>
            ))
          )}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row md:items-center mt-[1vh]'>
        <p className='whitespace-nowrap w-[20vw]'>Database</p>
        <div className="mt-[1vh] mb-[1vh] flex flex-wrap w-[60vw]">
          {skill.map((item) =>
            item.DB.map((skillName) => (
              <p key={skillName}
              className={`p-[3px] m-[3px] border-[1px] pl-[5px] pr-[5px] rounded-md text-sm
              border-[#E2C044] text-[#E2C044]`}>
                {skillName}
              </p>
            ))
          )}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row md:items-center mt-[1vh]'>
        <p className='whitespace-nowrap w-[20vw]'>Data Analysis<br/>/ Deep-Learning</p>
        <div className="mt-[1vh] mb-[1vh] flex flex-wrap w-[60vw]">
          {skill.map((item) =>
            item.Data.map((skillName) => (
              <p key={skillName}
              className={`p-[3px] m-[3px] border-[1px] pl-[5px] pr-[5px] rounded-md text-sm
              ${["Python", "R-Studio"].includes(skillName) ? "border-[#E2C044] text-[#E2C044]" : "border-[#F5F0F6]"}`}>
                {skillName}
              </p>
            ))
          )}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row md:items-center mt-[1vh]'>
        <p className='whitespace-nowrap w-[20vw]'>Design</p>
        <div className="mt-[1vh] mb-[1vh] flex flex-wrap w-[60vw]">
          {skill.map((item) =>
            item.Design.map((skillName) => (
              <p key={skillName}
              className={`p-[3px] m-[3px] border-[1px] pl-[5px] pr-[5px] rounded-md text-sm
              ${["Photoshop", "Premiere Pro"].includes(skillName) ? "border-[#E2C044] text-[#E2C044]" : "border-[#F5F0F6]"}`}>
                {skillName}
              </p>
            ))
          )}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row md:items-center mt-[1vh]'>
        <p className='whitespace-nowrap w-[20vw]'>Etc</p>
        <div className="mt-[1vh] mb-[1vh] flex flex-wrap w-[60vw]">
          {skill.map((item) =>
            item.Etc.map((skillName) => (
              <p key={skillName}
              className={`p-[3px] m-[3px] border-[1px] pl-[5px] pr-[5px] rounded-md text-sm
              ${["Notion"].includes(skillName) ? "border-[#E2C044] text-[#E2C044]" : "border-[#F5F0F6]"}`}>
                {skillName}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
