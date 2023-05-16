import { useState } from "react";
import Carousel from "../component/CarouselImg";
import DesignInfo from "../component/DesignInfo";
import Search from "../component/Search";
import Data from '../data/Design.json';

export default function Design() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleResultSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="pt-[12vh] pl-[10vw] pr-[10vw] pb-[8vh] flex flex-col md:flex-row bg-[#000000]">
      <Search data={Data} onResultSelect={handleResultSelect} />
      <div>
        <DesignInfo selectedItem={selectedItem} />
        <Carousel />
      </div>
    </div>
  )
}