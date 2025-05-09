import { useContext , useState} from "react";
import { AppContext } from "../../../contextApi/AppContext";
import YouTube from "react-youtube";
import Image from "../../../component/Image";
import { Link } from "react-router-dom";

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
};

const PodcasteStatedKit = () => {
    const { podcasteStartedData, showData, setShowData } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlepodCastKitImg = (currentSlide) => {
        setIsModalOpen(true);
        setShowData([currentSlide]);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="webbyaward-container">
            <div className="trending-div1">
                <h2 className="trending-title">Podcast Starter Kit</h2>
                <Link to={'/discover/podcastKitInner'} className="see-all-link">
                    <span>See All</span>
                    <span className="see-all-icon">→</span>
                </Link>
            </div>

            <div className="webbyaward-grid">
                {podcasteStartedData.map((podcast) => (
                    <div className="webbyaward-card" key={podcast.id}>
                        <Image src={podcast.image} alt={podcast.title} className="webbyaward-img"
                            onClick={() => handlepodCastKitImg(podcast)}
                        />
                        <h3 className="webbyaward-name">{podcast.title}</h3>
                        <p className="webbyaward-author">{podcast.publisher}</p>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="custom-modal">
                        <button onClick={handleCloseModal} className="modal-close-button">✕</button>
                        {showData.map((item) => (
                            <div className="youtube-video" key={item.id}>
                                <YouTube videoId={item.videoUrlId} className="youtube-y" opts={opts} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}

export default PodcasteStatedKit;