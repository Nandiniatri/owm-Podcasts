import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import '../commonCss.css';
import Modal from "../../../component/modal/Modal";
import YouTube from "react-youtube";
import Button from "../../../component/Button";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
};

const ReLivingSingleOUTER = () => {
    const { reLivingSingleOUTER, showData, setShowData } = useContext(AppContext);
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
        <div className="section-container">
            <div className="section-header">
                <h2 className="section-title">Re Living Single</h2>
                <Link to={'/new-releases/ReLivingSingle'} className="section-seeall-link">
                    <span>See All</span>
                    <span className="section-seeall-icon"><FaLongArrowAltRight /></span>
                </Link>
            </div>

            <div className="card-grid">
                {reLivingSingleOUTER.map((podcast) => (
                    <div className="card" key={podcast.id} onClick={() => handleOpenModal(podcast)}>
                        <img src={podcast.image} alt={podcast.title} className="card-img" />
                        <h3 className="card-title">{podcast.title}</h3>
                        <p className="card-subtitle">{podcast.content}</p>
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

export default ReLivingSingleOUTER;
