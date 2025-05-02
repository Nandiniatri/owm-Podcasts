import { useContext } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import './WebbyAwardWinners.css';

const WebByAward = () => {
    const { webByAward } = useContext(AppContext);

    return (
        <div className="webbyaward-container">
            <div className="trending-div1">
                <h2 className="trending-title">Webby Award Winners 2025</h2>
                <a href="#seeAll" className="see-all-link">
                    <span>See All</span>
                    <span className="see-all-icon">→</span>
                </a>
            </div>

            <div className="webbyaward-grid">
                {webByAward.map((podcast) => (
                    <div className="webbyaward-card" key={podcast.id}>
                        <img src={podcast.image} alt={podcast.title} className="webbyaward-img" />
                        <h3 className="webbyaward-name">{podcast.title}</h3>
                        <p className="webbyaward-author">{podcast.publisher}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebByAward;
