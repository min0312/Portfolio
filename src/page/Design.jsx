import { useState } from "react";
import DesignInfo from "../component/DesignInfo";
import Search from "../component/Search";
import Data from '../data/Design.json';

export default function Design() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleResultSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="pt-[12vh] pl-[10vw] pr-[10vw] flex flex-col md:flex-row">
      <Search data={Data} onResultSelect={handleResultSelect} />
      <DesignInfo selectedItem={selectedItem} />
    </div>
  )
}