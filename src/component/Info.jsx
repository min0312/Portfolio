import Infodata from "../data/School";

export default function Info() {
  return(
    <div className="">
      <p className="text-xl pb-[1vh]">EDUCATION</p>
      {Infodata.map((item) => (
        <div className="pl-[1vw] pt-[1vh] pb-[1vh]"
        key={item.title}>
          <div className="flex items-center">{item.title}
            <p className="text-xs">({item.date})</p>
          </div>
          <li className="text-sm">{item.loc}</li>
          <li className="text-sm">{item.memo}</li>
        </div>
      ))}
    </div>
  )
}