import React from "react";
import "./WorksCard.css";

const WorksCard = (props) => {
  return (
    <div className="wrapper">
      <div className="card">
        <img src={props.image} alt={props.name} />
        <div className="descriptions">
          <h1>{props.name}</h1>
          <p>{props.description}</p>

          {props.url !== undefined ? (
            <button>
              <i className="fab fa-youtube"></i>
              Play trailer on YouTube
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
