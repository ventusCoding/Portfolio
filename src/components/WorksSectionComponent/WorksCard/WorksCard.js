import React, { useState, useEffect } from 'react';
import './WorksCard.css';

const WorksCard = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {}, [props.urlList]);

  for (const key in props.urlList) {

    list.push(props.urlList[key]);
  }

  return (
    <div className="wrapper">
      <div className="card">
        <img className="imageCover" src={props.image} alt={props.name} />
        <div className="descriptions">
          <h1>{props.name}</h1>
          <p>{props.description}</p>

          {props.urlList !== undefined
            ? list.map((item, index) => {
                return (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    key={index}
                  >
                    <img src={item.image} alt="facebook" />
                  </a>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
