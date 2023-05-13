import { useState } from 'react';
import { IoSchool } from 'react-icons/io5';
import { TbCertificate, TbMedal, TbRun } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import timelinedata from "../data/Timelinedata";

export default function Timeline() {

  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  const [category, setCategory] = useState(null);

  const getCategoryStyle = (category) => {
    switch (category) {
      case '교육':
        return {
          icon: <IoSchool className='text-black h-6 w-6'/>,
          name: "Education",
          logo: <IoSchool className='flex items-center align-middle'/>
        }
      case '활동':
        return {
          icon: <TbRun className='text-black h-6 w-6'/>,
          name: "Activity",
          logo: <TbRun className='flex items-center align-middle'/>
        }
      case '자격증':
        return {
          icon: <TbCertificate className='text-black h-6 w-6'/>,
          name: "Certificate",
          logo: <TbCertificate className='flex items-center align-middle'/>
        }
      case '수상내역':
        return {
          icon: <TbMedal className='text-black h-6 w-6'/>,
          name: "Prize",
          logo: <TbMedal className='flex items-center align-middle'/>
        }
      default:
        return {
          icon: null,
          name: "All",
          logo: "All"
        }
    }
  }

  const sortedData = timelinedata.sort((a, b) => {
    const getDate = (str) => {
      if (str.includes("-")) {
        const [start, end] = str.split(" - ");
        const [startYear, startMonth] = start.split(".");
        const [endYear, endMonth] = end.split(".");
        return new Date(startYear, startMonth - 1, 1) <= new Date(endYear, endMonth - 1, 1)
          ? new Date(endYear, endMonth - 1, 1)
          : new Date(startYear, startMonth - 1, 1);
      }
      const [year, month] = str.split(".");
      return new Date(year, month - 1, 1);
    };
  
    const dateA = getDate(a.date);
    const dateB = getDate(b.date);
    return dateB - dateA;
  });
  
  
  
  
  const handleButtonClick = (category) => {
    if (category === 'All') {
      setCategory(null); // all 버튼 클릭 시 category를 초기화
    } else {
      setCategory(category);
    }
  }

  const cate = ["All", "교육", "활동", "자격증", "수상내역"];

  return(
    <div className="mt-[6vh] mb-[5vh]">
      <div className='flex items-center justify-between'>
        <h3 className="text-3xl">What I did</h3>
        <div className='flex items-baseline justify-between gap-2'>
          {cate.map((item) => (
            <button 
              key={item}
              className={`border-[1px] rounded-md w-[7vw] h-[3vh]
                ${category === item ? 'bg-[#E2C044] text-[#000000] border-[#E2C044]' : 
                category === null && item === 'All' ? 
                'bg-[#E2C044] text-[#000000] border-[#E2C044]' : 
                'border-[#F5F0F6] text-[#F5F0F6]'}
                hover:border-[#E2C044] hover:text-[#E2C044]`}
              onClick={() => handleButtonClick(item)}
            >
              {isMobileOrTablet ? getCategoryStyle(item).logo : getCategoryStyle(item).name}
            </button>
          ))}
        </div>
      </div>
      <hr/>

      <div className="sm:flex overflow-auto pl-[2vw] pt-[4vh] md:h-[30vh] h-[70vh]">
          {sortedData
          .filter(item => !category || item.category === category) // category가 일치하는 경우에만 필터링
          .map((item) => (
            <div className='mb-6 sm:mb-0 text-xs lg:w-[20vw] w-[35vw]'
              key={item.title+item.date}
            >
              <div className="flex items-center">
                  <div className="flex items-center justify-center w-9 h-8 bg-[#F5F0F6] rounded-full ">
                    {getCategoryStyle(item.category).icon}
                  </div>
                  <div className="hidden sm:flex w-full bg-[#F5F0F6] h-0.5"></div>
              </div>
              <div className="-pt-1 pl-7 sm:pr-8 w-[70vw] lg:w-[17vw] md:w-[25vw]">
                  <time className="mb-2 text-sm">{item.date}</time>
                  <div className="text-sm">{item.title}</div>
                  <div className="text-sm">{item.location}</div>
                  <div className="text-xs">{item.memo}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
