import React from "react";
import "./WorksCard.css";

const WorksCard = (props) => {
  return (
    <div className="wrapper">
      <div className="card">
        <img className="imageCover" src={props.image} alt={props.name} />
        <div className="descriptions">
          <h1>{props.name}</h1>
          <p>{props.description}</p>

          {props.urlList !== undefined
            ? props.urlList.map((item, index) => {
                return (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    key={index}
                  >
                    <img src={item.image} alt={item.name} />
                  </a>
                );
              })
            : null}
          {props.videoLink !== undefined ? (
            <p className="youtubeLink">Click me to see project demo</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
