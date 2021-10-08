import classes from './WorksSettings.module.css'
import { NextArrow, PrevArrow } from "../../components/UI/Arrows/Arrows";


const settings = {
    className: classes.settings,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  export default settings;