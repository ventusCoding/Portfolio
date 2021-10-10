import React, { useEffect, useState } from 'react';
import classes from './WorksSection.module.css';
import Divider from '../../UI/Divider/Divider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoriesItems from '../../UI/CategoriesItems/CategoriesItems';
import WorksCard from '../../WorksSectionComponent/WorksCard/WorksCard';
import { NextArrow, PrevArrow } from '../../UI/Arrows/Arrows';

const WorksSection = ({ responseData }) => {
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
        description: responseData[key].description,
        category: responseData[key].category,
        urlList: responseData[key].urlList,
      });
    }
    setList(loadedServicesList);

    setSettings({
      className: classes.settings,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: Math.min(loadedServicesList.length, 3),
      autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(loadedServicesList.length, 2),
            slidesToScroll: Math.min(loadedServicesList.length, 2),
            centerMode: true,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });
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
      <div>
        <Slider {...settings}>
          {filteredList.map((item, index) => {
            return (
              <div className={classes.dd} key={item.id}>
                <WorksCard
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  urlList={item.urlList}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );

  return (
    <section>
      <Divider title="Works" />
      <div className={classes.worksItems}>
        <CategoriesItems handleSetTag={setCategory} category={category} />
      </div>

      <div>{rendredComponent}</div>
    </section>
  );
};

export default WorksSection;
