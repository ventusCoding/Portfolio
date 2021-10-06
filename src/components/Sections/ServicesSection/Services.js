import React from "react";
import classes from "./Services.module.css";
import "../grid.css";
import Divider from "../../UI/Divider/Divider";
import ServicesCard from "../../ServicesSectionComponent/Card/ServicesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../../UI/Arrows/Arrows";

const Services = () => {
  const settings = {
    className: classes.dd,
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

  const list = [
    {
      name: "AR Development",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/ar.svg?alt=media&token=8024cac5-7d71-4b7d-b6d8-9689241c3b7f",
    },
    {
      name: "Game Development",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/ar.svg?alt=media&token=8024cac5-7d71-4b7d-b6d8-9689241c3b7f",
    },
    {
      name: "Mobile Development",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/ar.svg?alt=media&token=8024cac5-7d71-4b7d-b6d8-9689241c3b7f",
    },
    {
      name: "Web Development",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/ar.svg?alt=media&token=8024cac5-7d71-4b7d-b6d8-9689241c3b7f",
    },
    {
      name: "Video Editing",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/ar.svg?alt=media&token=8024cac5-7d71-4b7d-b6d8-9689241c3b7f",
    },
    {
      name: "Web Design",
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/ar.svg?alt=media&token=8024cac5-7d71-4b7d-b6d8-9689241c3b7f",
    },
  ];

  return (
    <section>
      <Divider title="Services" />
      <div>
        <Slider {...settings}>
          {list.map((item, index) => {
            return (
              <div style={{ color: "red" }} key={index}>
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
