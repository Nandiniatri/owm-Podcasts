import { useContext } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import '../commonCss.css';

const BhartiTvOuter = () => {
    const { bhartiTvOUTERData } = useContext(AppContext);

    return (
        <div className="section-container">
            <div className="section-header">
                <h2 className="section-title">Bharti TV</h2>
                <a href="#seeAll" className="section-seeall-link">
                    <span>See All</span>
                    <span className="section-seeall-icon">→</span>
                </a>
            </div>

            <div className="card-grid">
                {bhartiTvOUTERData.map((podcast) => (
                    <div className="card" key={podcast.id}>
                        <img src={podcast.image} alt={podcast.title} className="card-img" />
                        <h3 className="card-title">{podcast.title}</h3>
                        <p className="card-subtitle">{podcast.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BhartiTvOuter;
