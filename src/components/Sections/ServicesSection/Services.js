import React, {  useEffect } from 'react';
import classes from './Services.module.css';
import '../grid.css';
import Divider from '../../UI/Divider/Divider';
import ServicesCard from '../../ServicesSectionComponent/Card/ServicesCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../../UI/Arrows/Arrows';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = ({ responseData }) => {

  useEffect(() => {
    Aos.init({
      duration : 1000
    })

  }, []);

  const settings = {
    className: classes.settings,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
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
  }


  return (
    <section id="services">
      <Divider title="Services" />
      <div data-aos="zoom-in" className={classes.servicesList}>
        <Slider {...settings}>
          {responseData.map((item, index) => {
            return (
              <div style={{ color: 'red' }} key={item.name}>
                <ServicesCard name={item.name} image={item.image} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
