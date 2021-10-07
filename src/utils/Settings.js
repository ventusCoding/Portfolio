import classes from './Settings.module.css'
import { NextArrow, PrevArrow } from "../components/UI/Arrows/Arrows";


const settings = {
    className: classes.settings,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  export default settings;