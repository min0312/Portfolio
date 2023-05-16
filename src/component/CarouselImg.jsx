import { React } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import data from '../data/Img.json';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "5px", top: "55%" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "5px", top: "55%", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

export default function CarouselImg() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-[20vw] h-[20vh]">
      <Slider {...settings}>
        {data[0].url.map((url, index) => (
          <div key={data[0].id[index]}
            className=''>
            <p>{data[0].info[index]}</p>
            <img src={url} alt={`item ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}