import Infodata from "../data/School";

export default function Info() {
  return(
    <div className="p-[2vh]">
      <p className="text-xl pb-[1vh]">EDUCATION</p>
      {Infodata.map((item) => (
        <div className="pl-[1vw] pt-[1vh]">
          <p className="text-xl flex items-center">{item.title}
            <p className="text-sm">({item.date})</p>
          </p>
          <li>{item.loc}</li>
          <li>{item.memo}</li>
        </div>
      ))}
    </div>
  )
}