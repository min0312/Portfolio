import { TbCertificate, TbMedal, TbRun } from 'react-icons/tb';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelinedata from "../data/Timelinedata";

export default function Timeline() {
  const getCategoryStyle = (category) => {
    switch (category) {
      case '활동':
        return {
          iconStyle: { background: '#727272', color: '#fff' },
          icon: <TbRun />,
          contentStyle: { background: '#727272', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #727272' }
        }
      case '자격증':
        return {
          iconStyle: { background: '#B7A1BC', color: '#fff' },
          icon: <TbCertificate />,
          contentStyle: { background: '#B7A1BC', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #B7A1BC' }
        }
      case '수상내역':
        return {
          iconStyle: { background: '#B48581', color: '#fff' },
          icon: <TbMedal />,
          contentStyle: { background: '#B48581', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #B48581' }
        }
      default:
        return {
          icon: null,
          contentStyle: null
        }
    }
  }

  const sortedData = timelinedata.sort((a, b) => {
    const dateA = a.date.includes('-') ? new Date(a.date) : new Date(`${a.date}-01`);
    const dateB = b.date.includes('-') ? new Date(b.date) : new Date(`${b.date}-01`);
    return dateB - dateA;
  });
  

  return(
    <div className="mt-[3vh]">
      <p className="text-xl mb-[2vh]">TIMELINE</p>
      <div className="h-[80vh] overflow-auto">
        <VerticalTimeline >
          {sortedData.map((item) => (
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
