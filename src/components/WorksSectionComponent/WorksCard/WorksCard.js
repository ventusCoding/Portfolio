import React from "react";
import "./WorksCard.css";

const WorksCard = (props) => {
  return (
    <div class="wrapper">
      <div class="card">
        <img src={props.image} alt={props.name} />
        <div class="descriptions">
          <h1>{props.name}</h1>
          <p>
            {props.description}
          </p>
          <button>
            <i class="fab fa-youtube"></i>
            Play trailer on YouTube
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
