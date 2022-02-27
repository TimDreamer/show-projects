import React from "react";

const WebCard = ({ img, title, desp, projLink }) => {
  return (
    <a href={projLink} target="_blank" className="card__link">
      <img className="card__img" src={img} alt="project photo" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{desp}</p>
    </a>
  );
};

export default WebCard;
