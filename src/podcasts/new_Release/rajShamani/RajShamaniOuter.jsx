// import { useContext, useState } from "react";
// import { AppContext } from "../../../contextApi/AppContext";
// import '../commonCss.css';
// import Modal from "../../../component/modal/Modal";
// import YouTube from "react-youtube";
// import Button from "../../../component/Button";
// import { FaRegWindowClose } from "react-icons/fa";

// const RajShamani = () => {
//     const { rajShami, showModal, setShowModal } = useContext(AppContext);
//     // console.log(rajShami);
//     const [videoData, setVideoData] = useState([]);


//     const handleRajShami = (podcast) => {
//         // console.log(podcast.videoUrlId);
//         setShowModal(true);
//         setVideoData(podcast.videoUrlId); 
//     }

//     const handleClosedModal = () => {
//         setShowModal(false);
//     }

//     return (
//         <div className="section-container">
//             <div className="section-header">
//                 <h2 className="section-title">Raj Shamani</h2>
//                 <a href="#seeAll" className="section-seeall-link">
//                     <span>See All</span>
//                     <span className="section-seeall-icon">→</span>
//                 </a>
//             </div>

//             <div className="card-grid">
//                 {rajShami.map((podcast) => (
//                     <div className="card" key={podcast.id} onClick={() => handleRajShami(podcast)}>
//                         <img src={podcast.image} alt={podcast.title} className="card-img" />
//                         <h3 className="card-title">{podcast.title}</h3>
//                         <p className="card-subtitle">{podcast.content}</p>
//                     </div>
//                 ))}
//             </div>

//             {showModal && (
//                 <Modal isOpen={showModal} isClose={handleClosedModal}>
//                     <Button onClick={handleClosedModal}><FaRegWindowClose /></Button>
//                     <YouTube videoId={videoData} />
//                 </Modal>
//             )}
//         </div>
//     );
// };

// export default RajShamani;


import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import '../commonCss.css';
import Modal from "../../../component/modal/Modal";

const RajShamani = () => {
  const { rajShami } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const handleOpenModal = (podcast) => {
    setVideoId(podcast.videoUrlId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideoId(null);
  };

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

      <Modal isOpen={showModal} videoId={videoId} onClose={handleCloseModal} />
    </div>
  );
};

export default RajShamani;

