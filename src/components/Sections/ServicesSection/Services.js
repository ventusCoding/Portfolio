import React, { useState, useEffect } from 'react';
import classes from './Services.module.css';
import '../grid.css';
import Divider from '../../UI/Divider/Divider';
import ServicesCard from '../../ServicesSectionComponent/Card/ServicesCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from '../../../utils/TechnologiesSettings/TechnologiesSettings';

const Services = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_FIREBASE_URL}/servicesSection.json`)
      .then((response) => response.json())
      .then((responseData) => {
        const loadedServicesList = [];
        for (const key in responseData) {
          loadedServicesList.push({
            id: key,
            name: responseData[key].name,
            image: responseData[key].image,
          });
        }
        setList(loadedServicesList);
      });
  }, [list]);

  return (
    <section>
      <Divider title="Services" />
      <div className={classes.servicesList}>
        <Slider {...settings}>
          {list.map((item, index) => {
            return (
              <div style={{ color: 'red' }} key={index}>
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
