import { useState } from 'react';
import { TbCertificate, TbMedal, TbRun } from 'react-icons/tb';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelinedata from "../data/Timelinedata";

export default function Timeline() {
  const [category, setCategory] = useState(null);

  const getCategoryStyle = (category) => {
    switch (category) {
      case '활동':
        return {
          iconStyle: { background: '#254D4C', color: '#fff' },
          icon: <TbRun />,
          contentStyle: { background: '#254D4C', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #254D4C' }
        }
      case '자격증':
        return {
          iconStyle: { background: '#2F606E', color: '#fff' },
          icon: <TbCertificate />,
          contentStyle: { background: '#2F606E', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #2F606E' }
        }
      case '수상내역':
        return {
          iconStyle: { background: '#4F708F', color: '#fff' },
          icon: <TbMedal />,
          contentStyle: { background: '#4F708F', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #4F708F' }
        }
      default:
        return {
          icon: null,
          contentStyle: null
        }
    }
  }

  const sortedData = timelinedata.sort((a, b) => {
    const getDate = (str) => {
      if (str.includes('-')) {
        const [startDate, endDate] = str.split(' - ');
        const [startYear, startMonth] = startDate.split('.');
        const [endYear, endMonth] = endDate.split('.');
        return new Date(startYear, startMonth - 1, 1) <= new Date(endYear, endMonth - 1, 1)
          ? new Date(startYear, startMonth - 1, 1)
          : new Date(endYear, endMonth - 1, 1);
      }
      return new Date(str);
    };
  
    const dateA = getDate(a.date);
    const dateB = getDate(b.date);
    return dateB - dateA;
  });
  
  const handleButtonClick = (category) => {
    setCategory(category);
  }

  return(
    <div className="mt-[3vh] mb-[5vh]">
      <div className='flex mb-[2vh] items-baseline justify-between'>
        <p className="text-xl">TIMELINE</p>
        <div>
          <button className='bg-[#254D4C] rounded-md pl-[3px] pr-[3px] mr-[5px]'
            onClick={() => handleButtonClick('활동')}>Activation</button>
          <button className='bg-[#2F606E] rounded-md pl-[3px] pr-[3px] mr-[5px]'
            onClick={() => handleButtonClick('자격증')}>Certificate</button>
          <button className='bg-[#4F708F] rounded-md pl-[3px] pr-[3px] mr-[5px]'
            onClick={() => handleButtonClick('수상내역')}>Prize</button>
          <button className='bg-[#7E7DA7] rounded-md pl-[3px] pr-[3px] mr-[5px]'
            onClick={() => handleButtonClick(null)}>All</button>
        </div>
      </div>
      <div className="h-[60vh] overflow-auto">
        <VerticalTimeline >
          {sortedData
          .filter(item => !category || item.category === category) // category가 일치하는 경우에만 필터링
          .map((item) => (
            <VerticalTimelineElement 
              key={item.title+item.date}
              date={item.date + `  ` + item.location}
              {...getCategoryStyle(item.category)}
              className="text-xs"
            >
              <div className="text-base">{item.title}</div>
              <div className="text-sm">{item.memo}</div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}
