import React from "react";

const WebCard = ({ img, title, desp, projLink }) => {
  return (
    <a href={projLink} target="_blank" className="card__link" rel="noreferrer">
      <img className="card__img" src={img} alt={`project ${title}`} />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{desp}</p>
    </a>
  );
};

export default WebCard;
