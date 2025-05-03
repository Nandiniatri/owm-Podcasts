import { useContext } from "react";
import { AppContext } from "../../../contextApi/AppContext";
// import './'

const PodcasteStatedKit = () => {
    const { podcasteStartedData } = useContext(AppContext);

    return (
        <div className="webbyaward-container">
            <div className="trending-div1">
                <h2 className="trending-title">Podcast Starter Kit</h2>
                <a href="#seeAll" className="see-all-link">
                    <span>See All</span>
                    <span className="see-all-icon">→</span>
                </a>
            </div>

            <div className="webbyaward-grid">
                {podcasteStartedData.map((podcast) => (
                    <div className="webbyaward-card" key={podcast.id}>
                        <img src={podcast.image} alt={podcast.title} className="webbyaward-img" />
                        <h3 className="webbyaward-name">{podcast.title}</h3>
                        <p className="webbyaward-author">{podcast.publisher}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PodcasteStatedKit;