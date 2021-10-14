import React, { useEffect, useState } from "react";
import classes from "./WorksSection.module.css";
import Divider from "../../UI/Divider/Divider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesItems from "../../UI/CategoriesItems/CategoriesItems";
import WorksCard from "../../WorksSectionComponent/WorksCard/WorksCard";
import { NextArrow, PrevArrow } from "../../UI/Arrows/Arrows";
import Aos from "aos";
import "aos/dist/aos.css";

const WorksSection = ({ responseData }) => {

  const [category, setCategory] = useState("All");
  const [filteredList, setFiltredList] = useState([]);
  
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });

    setSettings({
      className: classes.settings,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: Math.min(filteredList.length, 3),
      autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(filteredList.length, 2),
            slidesToScroll: Math.min(filteredList.length, 2),
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
  }, [filteredList]);



  useEffect(() => {
    category === "All"
      ? setFiltredList(responseData)
      : setFiltredList(
          responseData.filter((item) => {
            for (const key in item.category) {
              if (item.category[key] === category) {
                return item.category[key] === category;
              }
            }
            return null;
          })
        );
  }, [category, responseData]);

  const rendredComponent =
    filteredList.length === 0 ? (
      <h3 style={{ textAlign: "center" }}>No DATA!</h3>
    ) : (
      <div>
        <div data-aos="zoom-in-up">
          <Slider {...settings}>
            {filteredList.map((item, index) => {
              return (
                <div className={classes.dd} key={item.id}>
                    <WorksCard
                      name={item.name}
                      image={item.image}
                      description={item.description}
                      urlList={item.urlList}
                      videoLink={item.videoLink}
                    />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );

  return (
    <section id="works">
      <Divider title="Works" />
      <div className={classes.worksItems}>
        <CategoriesItems
          type="worksCategories"
          handleSetTag={setCategory}
          category={category}
        />
      </div>

      <div>{rendredComponent}</div>
    </section>
  );
};

export default WorksSection;
