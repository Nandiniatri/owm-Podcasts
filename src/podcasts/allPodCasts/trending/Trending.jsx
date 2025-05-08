import React, { useContext, useEffect, useState } from "react";
import "./Trending.css";
import { AppContext } from "../../../contextApi/AppContext";
import Image from "../../../component/Image";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
};

const Trending = () => {
    const { trending , showData, setShowData} = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTrendingImg = (item) => {
        setIsModalOpen(true);
        setShowData([item]);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="trending-container">
            <div className="trending-div1">
                <h2 className="trending-title">Trending</h2>
                <Link to={"/discover/trending"} className="see-all-link">
                    <span>See All</span>
                    <span className="see-all-icon">→</span>
                </Link>
            </div>

            <div className="trending-list">
                {trending.map((item) => (
                    <div className="trending-item" key={item.id}>
                        <span className="sr">{item.sr}</span>
                        <Image src={item.image} alt={item.title} className="podcast-image" onClick={() => handleTrendingImg(item)} />
                        <div className="podcast-info">
                            <h3 className="podcast-title">{item.title}</h3>
                            <p className="podcast-publisher">{item.publisher}</p>
                        </div>
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

export default Trending;
