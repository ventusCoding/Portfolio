import React, { useEffect, useState } from "react";
import classes from "./WorksSection.module.css";
import Divider from "../../UI/Divider/Divider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../../../utils/Settings";
import CategoriesItems from "../../UI/CategoriesItems/CategoriesItems";
import WorksCard from "../../WorksSectionComponent/WorksCard/WorksCard";

const WorksSection = () => {
  const list = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/download.jpg?alt=media&token=6403af6d-8b59-42d0-aa49-6a45b61c8642",
      name: "Work Example",
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      category: "Mobile",
      url: "https://play.google.com/store/apps/details?id=com.facebook.katana",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/download.jpg?alt=media&token=6403af6d-8b59-42d0-aa49-6a45b61c8642",
      name: "Work Example",
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      category: "Mobile",
      url: "https://www.jumia.com.tn/",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/download.jpg?alt=media&token=6403af6d-8b59-42d0-aa49-6a45b61c8642",
      name: "Work Example",
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      category: "Mobile",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/download.jpg?alt=media&token=6403af6d-8b59-42d0-aa49-6a45b61c8642",
      name: "Work Example",
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      category: "Mobile",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/download.jpg?alt=media&token=6403af6d-8b59-42d0-aa49-6a45b61c8642",
      name: "Work Example",
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      category: "Mobile",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/decori-38bc0.appspot.com/o/download.jpg?alt=media&token=6403af6d-8b59-42d0-aa49-6a45b61c8642",
      name: "Work Example",
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
      category: "Mobile",
    },
  ];

  const [category, setCategory] = useState("All");
  const [filteredList, setFiltredList] = useState([]);

  useEffect(() => {
    category === "All"
      ? setFiltredList(list)
      : setFiltredList(list.filter((item) => item.category === category));
  }, [category]);

  const rendredComponent =
    filteredList.length === 0 ? (
      <h3 style={{ textAlign: "center" }}>No DATA!</h3>
    ) : (
      <div>
        <Slider {...settings}>
          {filteredList.map((item, index) => {
            return (
              <div key={index}>
                <WorksCard name={item.name} image={item.image} description={item.description}  />
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
