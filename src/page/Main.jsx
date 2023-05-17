import pict from "../data/img.png";

export default function Main() {

  return (
    <div className="md:pt-[27vh] pt-[12vh] md:pl-[15vw] pl-[5vw] pr-[5vw] flex flex-col md:flex-row items-center gap-[10vw]">
      <img src={pict} alt="me" className="rounded-full border-[4px] border-[#E2C044] lg:w-[15vw] w-[20vw]"/>
      <div className="">
        <div className="text-[#E2C044]">
          <p className="md:text-4xl text-2xl pb-[15px]">Full-Stack Developer,</p>
          <p className="md:text-6xl text-4xl pb-[10vh]">Min-Kyung Keum</p>
        </div>
        <div className="flex flex-col gap-2 md:text-lg text-sm">
          <li>
            '소통'의 가치를 아는 개발자
          </li>
          <li>
            '사용성과 심미성' 모두를 추구하는 프론트엔드 개발자
          </li>
          <li>
            새로움을 추구하는 '만능 재주꾼'
          </li>
        </div>
      </div>
    </div>
  );
}
