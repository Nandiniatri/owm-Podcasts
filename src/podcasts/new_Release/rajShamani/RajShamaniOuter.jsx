import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import '../commonCss.css';

const RajShamani = () => {
  const { rajShami } = useContext(AppContext);

  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">Raj Shamani</h2>
        <a href="#seeAll" className="section-seeall-link">
          <span>See All</span>
          <span className="section-seeall-icon">→</span>
        </a>
      </div>

      <div className="card-grid">
        {rajShami.map((podcast) => (
          <div
            className="card"
            key={podcast.id}
          >
            <img src={podcast.image} alt={podcast.title} className="card-img" />
            <h3 className="card-title">{podcast.title}</h3>
            <p className="card-subtitle">{podcast.content}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RajShamani;

