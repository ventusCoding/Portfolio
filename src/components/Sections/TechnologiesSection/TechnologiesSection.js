import Divider from '../../UI/Divider/Divider';
import React, { useState, useEffect } from 'react';
import classes from './TechnologiesSection.module.css';
import CategoriesItems from '../../UI/CategoriesItems/CategoriesItems';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TechnologiesCard from '../../TechnologiesSection/TechnologiesCard/Card/TechnologiesCard';
import { NextArrow, PrevArrow } from '../../UI/Arrows/Arrows';

const TechnologiesSection = ({ responseData }) => {
  const [list, setList] = useState([]);
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  useEffect(() => {
    const loadedServicesList = [];
    for (const key in responseData) {
      loadedServicesList.push({
        id: key,
        name: responseData[key].name,
        image: responseData[key].image,
        category: responseData[key].category,
      });
    }
    setList(loadedServicesList);

    setSettings(
      {
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
      }
    )
  }, [responseData]);

  const [category, setCategory] = useState('All');
  const [filteredList, setFiltredList] = useState([]);

  useEffect(() => {
    category === 'All'
      ? setFiltredList(list)
      : setFiltredList(list.filter((item) => item.category === category));
  }, [category, list]);

  const rendredComponent =
    filteredList.length === 0 ? (
      <h3 style={{ textAlign: 'center' }}>No DATA!</h3>
    ) : (
      <div className={classes.techList}>
        <Slider {...settings}>
          {filteredList.map((item, index) => {
            return (
              <div key={item.id}>
                <TechnologiesCard name={item.name} image={item.image} />
              </div>
            );
          })}
        </Slider>
      </div>
    );

  return (
    <section>
      <Divider title="Technologies" />
      <div className={classes.TechnologiesItems}>
        <CategoriesItems handleSetTag={setCategory} category={category} />
      </div>

      {rendredComponent}
    </section>
  );
};

export default TechnologiesSection;
