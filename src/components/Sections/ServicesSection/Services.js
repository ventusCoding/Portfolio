import React from "react";
import classes from "./Services.module.css";
import "../grid.css";
import Divider from "../../UI/Divider/Divider";
import ServicesCard from "../../ServicesSectionComponent/Card/ServicesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../../../utils/Settings"

const Services = () => {

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
