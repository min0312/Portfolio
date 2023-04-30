import { GrRun } from "react-icons/gr";
import { TbCertificate, TbMedal } from 'react-icons/tb';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelinedata from "../data/Timelinedata";

export default function Timeline() {
  const getCategoryStyle = (category) => {
    switch (category) {
      case '활동':
        return {
          iconStyle: { background: '#FFA850', color: '#fff' },
          icon: <GrRun />,
          contentStyle: { background: '#FFA850', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #FFA850' }
        }
      case '자격증':
        return {
          iconStyle: { background: '#FFA850', color: '#fff' },
          icon: <TbCertificate />,
          contentStyle: { background: '#FFA850', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #FFA850' }
        }
      case '수상내역':
        return {
          iconStyle: { background: '#FFA850', color: '#fff' },
          icon: <TbMedal />,
          contentStyle: { background: '#FFA850', color: '#fff' },
          contentArrowStyle: { borderRight: '7px solid #FFA850' }
        }
      default:
        return {
          icon: null,
          contentStyle: null
        }
    }
  }

  const sortedData = timelinedata.sort((a, b) => new Date(b.date) - new Date(a.date));

  return(
    <VerticalTimeline >
      {sortedData.map((item) => (
        <VerticalTimelineElement 
          key={item.title}
          date={item.date}
          {...getCategoryStyle(item.category)}
        >
          <div>{item.title}</div>
          <div>{item.memo}</div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}
