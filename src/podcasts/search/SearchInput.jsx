// import { useContext } from 'react';
// import { AppContext } from '../../contextApi/AppContext';
// import Image from '../../component/Image';

// const SearchResults = () => {
//     const { searchingData } = useContext(AppContext);
//     console.log(searchingData);


//     return (
//         <div className="search-results-container" style={{ padding: '20px', color: 'white' }}>
//             {searchingData.map((item) => {
//                 return (
//                     <div>
//                         <Image src={item.image} />
//                         <h2>{item.title}</h2>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// };

// export default SearchResults;



import { useContext, useState } from "react";
import YouTube from "react-youtube";
import { AppContext } from "../../contextApi/AppContext";
import Image from "../../component/Image";

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
}; 

const SearchResults = () => {
    const { searchingData, showData, setShowData } = useContext(AppContext);
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
                {/* <h2 className="trending-title">Webby Award Winners 2025</h2> */}
            </div>

            <div className="webbyaward-grid-inner">
                {searchingData.map((podcast) => (
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

export default SearchResults;

