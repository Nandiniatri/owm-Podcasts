import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import '../commonCss.css';
import YouTube from "react-youtube";
import Button from "../../../component/Button";
import Modal from "../../../component/modal/Modal";

const RajShamani = () => {
  const { rajShami, showModal, setShowModal } = useContext(AppContext);
  const [video, setVideo] = useState(null);

  const handleOpenModal = (podcast) => {
    console.log(podcast.videoUrlId);
    setShowModal(true);
    // setVideo(podcast.videoUrlId);/
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setVideo(null)
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
          <div
            className="card"
            key={podcast.id}
            onClick={() => handleOpenModal(podcast)}
          >
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
          <div className="youtube-container">
            <YouTube videoId={video} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RajShamani;

