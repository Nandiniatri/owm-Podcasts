// import { useContext, useState } from "react";
// import '../commonCss.css';
// import YouTube from "react-youtube";
// import { AppContext } from "../../../contextApi/AppContext";

// const opts = {
//     width: '100%',
//     height: '100%',
//     playerVars: {
//         autoplay: 1,
//     },
// };

// const RanveerAllabadiaInnerFile = () => {
//     const { ranveerAllabadiaInnerData, showData, setShowData } = useContext(AppContext);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleOpenModal = (podcast) => {
//         setIsModalOpen(true);
//         setShowData([podcast]);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="media-section-container">
//             <div className="media-section-header">
//                 <h2 className="media-section-title">Raj Shamani</h2>
//             </div>

//             <div className="media-card-grid">
//                 {ranveerAllabadiaInnerData.map((podcast) => (
//                     <div className="media-card" key={podcast.id} onClick={() => handleOpenModal(podcast)}>
//                         <img src={podcast.image} alt={podcast.title} className="media-card-img" />
//                         <h3 className="media-card-title">{podcast.title}</h3>
//                         <p className="media-card-subtitle">{podcast.content}</p>
//                     </div>
//                 ))}
//             </div>

//             {isModalOpen && (
//                 <div className="modal-overlay">
//                     <div className="custom-modal">
//                         <button onClick={handleCloseModal} className="modal-close-button">✕</button>
//                         {showData.map((item) => (
//                             <div className="youtube-video" key={item.id}>
//                                 <YouTube videoId={item.videoUrlId} className="youtube-y" opts={opts} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div >
//     );
// };

// export default RanveerAllabadiaInnerFile;




import { useContext, useState } from "react";
import YouTube from "react-youtube";
import { AppContext } from "../../../contextApi/AppContext";
import Image from "../../../component/Image";


const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
}; 

const WebByAwardInner = () => {
    const { ranveerAllabadiaInnerData, showData, setShowData } = useContext(AppContext);
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
        <div className="webbyaward-container-inner">
            <div className="trending-div1">
                <h2 className="trending-title">Ranveer Allahbadia</h2>
            </div>

            <div className="webbyaward-grid-inner">
                {ranveerAllabadiaInnerData.map((podcast) => (
                    <div className="webbyaward-card-inner" key={podcast.id}>
                        <Image src={podcast.image} alt={podcast.title} className="webbyaward-img-inner" onClick={() => handleOpenModal(podcast)} />
                        <h3 className="webbyaward-name-inner">{podcast.title}</h3>
                        <p className="webbyaward-author-inner">{podcast.publisher}</p>
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

export default WebByAwardInner;

