import React, { useEffect, useState } from 'react';
import classes from './WorksSection.module.css';
import Divider from '../../UI/Divider/Divider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import settings from '../../../utils/WorksSettings/WorksSettings';
import CategoriesItems from '../../UI/CategoriesItems/CategoriesItems';
import WorksCard from '../../WorksSectionComponent/WorksCard/WorksCard';

const WorksSection = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_FIREBASE_URL}/worksSection.json`)
      .then((response) => response.json())
      .then((responseData) => {
        const loadedServicesList = [];
        for (const key in responseData) {
          loadedServicesList.push({
            id: key,
            name: responseData[key].name,
            image: responseData[key].image,
            description: responseData[key].description,
            category: responseData[key].category,
            url: responseData[key].url,
          });
        }
        setList(loadedServicesList);
      });
  }, [list]);

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
                  url={item.url}
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
