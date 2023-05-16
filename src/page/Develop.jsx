import { useState } from "react";
import DevelopInfo from "../component/DevelopInfo";
import Search from "../component/Search";
import Data from '../data/Develop.json';

export default function Develop() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleResultSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="pt-[12vh] pl-[10vw] pr-[10vw] flex flex-col md:flex-row">
      <Search data={Data} onResultSelect={handleResultSelect} />
      <DevelopInfo selectedItem={selectedItem} />
    </div>
  )
}