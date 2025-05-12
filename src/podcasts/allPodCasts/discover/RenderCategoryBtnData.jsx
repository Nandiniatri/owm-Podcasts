import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import { useParams } from "react-router-dom";
import Image from "../../../component/Image";
import './RenderCategoryBtn.css'
import YouTube from "react-youtube";

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
};

const RenderCategoryBtnData = () => {
    const { allCategoryBtnData, fetchAllCategoryBtnDataApi, showData, setShowData } = useContext(AppContext);
    const { category } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (podcast) => {
        setIsModalOpen(true);
        setShowData([podcast]);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }


    useEffect(() => {
        fetchAllCategoryBtnDataApi(category);
    }, [category]);


    if (allCategoryBtnData.length === 0) {
        return <p>Loading...</p>;
    }
    
    return (
        <>
            <div className="webbyaward-container-inner">
                <div className="trending-div1">
                    <h2 className="trending-title">{allCategoryBtnData[0].category}</h2>
                </div>

                <div className="webbyaward-grid-inner">
                    {allCategoryBtnData.map((podcast) => (
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
        </>
    );
};

export default RenderCategoryBtnData;
