import { useContext , useState} from "react";
import { AppContext } from "../../../contextApi/AppContext";
import './Under20Min.css';
import Image from "../../../component/Image";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";


const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    }, 
};


const Under20MinFIle = () => {
    const { under20MinData , showData, setShowData  } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUnderMin = (podcast) => {
        setIsModalOpen(true);
        setShowData([podcast]);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="under20MinData-container">
            <div className="trending-div1">
                <h2 className="trending-title">Under 20 Minutes</h2>
                <Link to={'/discover/under20Min'} className="see-all-link">
                    <span>See All</span>
                    <span><FaLongArrowAltRight /></span>
                </Link>
            </div>

            <div className="webbyaward-grid">
                {under20MinData.map((podcast) => (
                    <div className="webbyaward-card" key={podcast.id}>
                        <Image src={podcast.image} alt={podcast.title} className="webbyaward-img"
                            onClick={() => handleUnderMin(podcast)}
                        />
                        <h3 className="webbyaward-name">{podcast.title}</h3>
                        <p className="webbyaward-author">{podcast.publisher}</p>
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

export default Under20MinFIle;
