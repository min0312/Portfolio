import skill from '../data/Info.json';

export default function Skillset() {
  return (
    <>
      <p className="text-xl mt-[3vh]">SKILL SET</p>
      <div >
        <div className="mt-[2vh] mb-[1vh] flex flex-wrap text-center place-content-around">
          {skill.map((item) =>
            item.skill.map((skillName) => (
              <p className="p-[3px] m-[3px] bg-white bg-opacity-30 rounded-md text-xs">
                {skillName}
              </p>
            ))
          )}
        </div>
      </div>
    </>
  );
}
