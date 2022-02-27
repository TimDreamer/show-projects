import React from "react";
import WebCard from "./WebCard";
import cards from "./data";
import "./main.scss";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="title">Show Projects</h1>
      <div className="app">
        <ul className="card__list">
          {cards.map((card, idx) => (
            <WebCard key={idx} {...card} />
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
