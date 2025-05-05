import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import '../commonCss.css';
import Modal from "../../../component/modal/Modal";
import YouTube from "react-youtube";
import Button from "../../../component/Button";
import { FaRegWindowClose } from "react-icons/fa";

const RajShamani = () => {
    const { rajShami, showModal, setShowModal } = useContext(AppContext);
    // console.log(rajShami);
    const [videoData, setVideoData] = useState([]);


    const handleRajShami = (podcast) => {
        // console.log(podcast.videoUrlId);
        setShowModal(true);
        setVideoData(podcast.videoUrlId);
    }

    const handleClosedModal = () => {
        setShowModal(false);
    }

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
                    <div className="card" key={podcast.id} onClick={() => handleRajShami(podcast)}>
                        <img src={podcast.image} alt={podcast.title} className="card-img" />
                        <h3 className="card-title">{podcast.title}</h3>
                        <p className="card-subtitle">{podcast.content}</p>
                    </div>
                ))}
            </div>

            {showModal && (
                <Modal isOpen={showModal} isClose={handleClosedModal}>
                    <Button onClick={handleClosedModal}><FaRegWindowClose /></Button>
                    <YouTube videoId={videoData} />
                </Modal>
            )}
        </div>
    );
};

export default RajShamani;
