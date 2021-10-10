import React, { useState, useEffect } from 'react';
import classes from './Services.module.css';
import '../grid.css';
import Divider from '../../UI/Divider/Divider';
import ServicesCard from '../../ServicesSectionComponent/Card/ServicesCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../../UI/Arrows/Arrows';

const Services = ({ responseData }) => {
  const [list, setList] = useState([]);
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  useEffect(() => {
    const loadedServicesList = [];
    for (const key in responseData) {
      loadedServicesList.push({
        id: key,
        name: responseData[key].name,
        image: responseData[key].image,
      });
    }
    setList(loadedServicesList);

    setSettings({
      className: classes.settings,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: Math.min(loadedServicesList.length, 5),
      autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: Math.min(loadedServicesList.length, 4),
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: Math.min(loadedServicesList.length, 3),
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: Math.min(loadedServicesList.length, 2),
            initialSlide: Math.min(loadedServicesList.length, 2),
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }, [responseData]);

  return (
    <section>
      <Divider title="Services" />
      <div className={classes.servicesList}>
        <Slider {...settings}>
          {list.map((item, index) => {
            return (
              <div style={{ color: 'red' }} key={item.id}>
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
