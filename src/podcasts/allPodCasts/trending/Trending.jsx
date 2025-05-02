import React, { useContext } from "react";
import "./Trending.css";
import { AppContext } from "../../../contextApi/AppContext";

const Trending = () => {
    const { trending } = useContext(AppContext);

    return (
        <div className="trending-container">
            <div className="trending-div1">
                <h2 className="trending-title">Trending</h2>
                <a href="#seeAll" className="see-all-link">
                    <span>See All</span>
                    <span className="see-all-icon">→</span>
                </a>
            </div>

            <div className="trending-list">
                {trending.map((item) => (
                    <div className="trending-item" key={item.id}>
                        <span className="sr">{item.sr}</span>
                        <img src={item.image} alt={item.title} className="podcast-image" />
                        <div className="podcast-info">
                            <h3 className="podcast-title">{item.title}</h3>
                            <p className="podcast-publisher">{item.publisher}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
