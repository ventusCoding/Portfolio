import Divider from '../../UI/Divider/Divider'
import React from 'react'
import  classes  from './TechnologiesSection.module.css'
import CategoriesItems from '../../TechnologiesSection/CategoriesItems/CategoriesItems'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../../../utils/Settings"
import TechnologiesCard from '../../TechnologiesSection/Categories/Card/TechnologiesCard';


const TechnologiesSection = () => {

    const list = [
        {
            image: "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/android-studio.png?alt=media&token=8672c92b-7784-4f05-b22a-2a3f08990bd6",
            name:"Android Studio",
            category: "Mobile"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/flutter.png?alt=media&token=be76f1dc-da0f-470a-b38b-3d097a8641e6",
            name:"Flutter",
            category: "Mobile"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/react.png?alt=media&token=d5707131-d41d-4ef8-b508-724ecd5a3e1d",
            name:"React",
            category: "Web"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/nodejs.png?alt=media&token=2b1046f4-0346-47c0-aac7-fb134f933976",
            name:"Node JS",
            category: "Web"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/unity.png?alt=media&token=bd42a412-61e6-4a48-9d3b-64a80d168b55",
            name:"Unity",
            category: "Mobile"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/google-firebase-console.png?alt=media&token=5ad2d1d9-5700-42b7-9c0a-b31e236b79c0",
            name:"Firebase",
            category: "Other"
        }
    ]

    return (
        <section>
            <Divider title="Technologies"/>
            <div className={classes.dd}>
                <CategoriesItems/>
            </div>

            <div>
        <Slider {...settings}>
          {list.map((item, index) => {
            return (
              <div  key={index}>
                <TechnologiesCard name={item.name} image={item.image} />
              </div>
            );
          })}
        </Slider>
      </div>
        </section>
    )
}

export default TechnologiesSection