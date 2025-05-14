import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import './WebbyAwardWinners.css';
import Image from "../../../component/Image";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
};


const WebByAward = () => {
    const { webByAward, showData, setShowData } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (podcast) => {
        // console.log(podcast);
        setIsModalOpen(true);
        setShowData([podcast]);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }


    return (
        <div className="webbyaward-container">
            <div className="trending-div1">
                <h2 className="trending-title web-title">Webby Award Winners 2025</h2>
                <Link to={'/discover/webByAward'} className="web-see-all-link see-all-link">
                    <span>See All</span>
                    {/* <span className="see-all-icon"><FaLongArrowAltRight /></span> */}
                    <FaLongArrowAltRight />
                </Link>
            </div>

            <div className="webbyaward-grid">
                {webByAward.map((podcast) => (
                    <div className="webbyaward-card" key={podcast.id}>
                        <Image src={podcast.image} alt={podcast.title} className="webbyaward-img" onClick={() => handleOpenModal(podcast)} />
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
};

export default WebByAward;
