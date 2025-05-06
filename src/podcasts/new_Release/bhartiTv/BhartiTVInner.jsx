// import { useContext, useState } from "react";
// import { AppContext } from "../../../contextApi/AppContext";
// import '../commonCss.css';
// import Modal from "../../../component/modal/Modal";
// import YouTube from "react-youtube";
// import Button from "../../../component/Button";


// const opts = {
//     width: '100%',
//     height: '100%',
//     playerVars: {
//         autoplay: 1,
//     },
// };

// const BhartiTvInner = () => {
//     const { bhartiTVInnerData, showData, setShowData } = useContext(AppContext);
//     console.log(bhartiTVInnerData);

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleOpenModal = (podcast) => {
//         // console.log(podcast);
//         setIsModalOpen(true);
//         setShowData([podcast]);
//     }
//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     }


//     return (
//         <div className="section-container">
//             <div className="section-header">
//                 <h2 className="section-title">Bharti TV</h2>
//             </div>

//             <div className="card-grid">
//                 {bhartiTVInnerData.map((podcast) => (
//                     <div className="card" key={podcast.id} onClick={() => handleOpenModal(podcast)}>
//                         <img src={podcast.image} alt={podcast.title} className="card-img" />
//                         <h3 className="card-title">{podcast.title}</h3>
//                         <p className="card-subtitle">{podcast.content}</p>
//                     </div>
//                 ))}
//             </div>

//             <div>
//                 <Modal isOpen={isModalOpen} isClosed={handleCloseModal}>
//                     <div className="modal-btn-div">
//                         <Button onClick={handleCloseModal} className="modal-close-button">Close</Button>
//                     </div>
//                     <div>
//                         {showData.map((item) => (
//                             <div className="youtube-video" key={item.id}>
//                                 <YouTube videoId={item.videoUrlId} className="youtube-y" opts={opts} />
//                             </div>
//                         ))}
//                     </div>
//                 </Modal>
//             </div>

//         </div>
//     );
// };

// export default BhartiTvInner;



import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import '../commonCss.css';
import Modal from "../../../component/modal/Modal";
import YouTube from "react-youtube";
import Button from "../../../component/Button";

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
};

const BhartiTvInner = () => {
    const { bhartiTVInnerData, showData, setShowData } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (podcast) => {
        setIsModalOpen(true);
        setShowData([podcast]);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="media-section-container">
            <div className="media-section-header">
                <h2 className="media-section-title">Bharti TV</h2>
            </div>

            <div className="media-card-grid">
                {bhartiTVInnerData.map((podcast) => (
                    <div className="media-card" key={podcast.id} onClick={() => handleOpenModal(podcast)}>
                        <img src={podcast.image} alt={podcast.title} className="media-card-img" />
                        <h3 className="media-card-title">{podcast.title}</h3>
                        <p className="media-card-subtitle">{podcast.content}</p>
                    </div>
                ))}
            </div>

            {/* <div>
                <Modal isOpen={isModalOpen} isClosed={handleCloseModal}>
                    <div className="modal-btn-div">
                        <Button onClick={handleCloseModal} className="modal-close-button">Close</Button>
                    </div>
                    <div>
                        {showData.map((item) => (
                            <div className="youtube-video" key={item.id}>
                                <YouTube videoId={item.videoUrlId} className="youtube-y" opts={opts} />
                            </div>
                        ))}
                    </div>
                </Modal>
            </div> */}


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

        </div >
    );
};

export default BhartiTvInner;
