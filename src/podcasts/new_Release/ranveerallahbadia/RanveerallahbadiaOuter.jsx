import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import '../commonCss.css';
import Modal from "../../../component/modal/Modal";
import YouTube from "react-youtube";
import Button from "../../../component/Button";

const RanveerAllahbadiaOUTER = () => {
    const { ranveerAllahbadiaOUTER, showModal, setShowModal } = useContext(AppContext);
    const [videoId, setVideoId] = useState([]);

    const handleOpenModal = (podcast) => {
        setVideoId(podcast.videoUrlId);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }


    return (
        <div className="section-container">
            <div className="section-header">
                <h2 className="section-title">Ranveer Allahbadia</h2>
                <a href="#seeAll" className="section-seeall-link">
                    <span>See All</span>
                    <span className="section-seeall-icon">→</span>
                </a>
            </div>

            <div className="card-grid">
                {ranveerAllahbadiaOUTER.map((podcast) => (
                    <div className="card" key={podcast.id} onClick={() => handleModalOpen(podcast)}>
                        <img src={podcast.image} alt={podcast.title} className="card-img" />
                        <h3 className="card-title">{podcast.title}</h3>
                        <p className="card-subtitle">{podcast.content}</p>
                    </div>
                ))}
            </div>

            {showModal && (
                <Modal isOpen={showModal}>
                    <div style={{ textAlign: 'right' }}>
                        <Button onClick={handleCloseModal}>X</Button>
                    </div>
                    <YouTube
                        videoId={videoId}
                        opts={{
                            height: '390',
                            width: '640',
                            playerVars: {
                                autoplay: 1,
                            },
                        }}
                    />
                </Modal>
            )}
        </div>
    );
};

export default RanveerAllahbadiaOUTER;
