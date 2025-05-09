// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../../../contextApi/AppContext";
// import Button from "../../../component/Button";
// import Image from "../../../component/Image";
// import "./DiscoverCarousel.css";
// import YouTube from "react-youtube";

// const opts = {
//     width: '100%',
//     height: '100%',
//     playerVars: {
//         autoplay: 1,
//     },
// };


// const DiscoverCarousel = () => {
//     const { discoverCaroData, showData, setShowData } = useContext(AppContext);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleDiscoverCarousel = (currentSlide) => {
//         setIsModalOpen(true);
//         setShowData([currentSlide]);
//     }

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     }

//     useEffect(() => {
//         if (!discoverCaroData || discoverCaroData.length === 0) return;

//         const nextPage = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % discoverCaroData.length);
//         }, 6000);

//         return () => clearInterval(nextPage);
//     }, [discoverCaroData]);


//     if (!discoverCaroData || discoverCaroData.length === 0) {
//         return null;
//     }

//     const currentSlide = discoverCaroData[currentIndex];

//     const handleImageIndex = (index) => {
//         setCurrentIndex(index)
//     }

//     return (
//         <div className="discover-container">
//             <div className="carousel-wrapper">
//                 <div style={{ position: "relative" }}>
//                     {currentSlide.image && (
//                         <Image
//                             src={currentSlide.image}
//                             alt={currentSlide.title}
//                             className="carousel-image"
//                             onClick={() => handleDiscoverCarousel(currentSlide)}
//                         />
//                     )}
//                 </div>

//                 <div className="carousel-text-content">
//                     <span className="carousel-link-title">
//                         <a href={currentSlide.title}>{currentSlide.linkTitle}</a></span>
//                     <h3 className="carousel-title">{currentSlide.title}</h3>
//                     <p className="carousel-subtitle">{currentSlide.subTitle}</p>
//                     <p className="carousel-content">{currentSlide.content}</p>
//                 </div>
//             </div>

//             <div className="carousel-button-container">
//                 <Button
//                     className="carousel-button left"
//                     onClick={() =>
//                         setCurrentIndex(
//                             (prev) => (prev - 1 + discoverCaroData.length) % discoverCaroData.length
//                         )
//                     }
//                 >
//                     {"<"}
//                 </Button>

//                 <Button
//                     className="carousel-button right"
//                     onClick={() =>
//                         setCurrentIndex((prev) => (prev + 1) % discoverCaroData.length)
//                     }
//                 >
//                     {">"}
//                 </Button>
//             </div>

//             <div className="carousel-index-image-div">
//                 {discoverCaroData.map((item, index) => {
//                     const isActive = index === currentIndex;
//                     return (
//                         <div key={index} className={`carousel-image-div ${isActive ? "active" : ""}`}
//                         >
//                             <Image src={item.image} onClick={() => handleImageIndex(index)} />
//                         </div>
//                     )
//                 })}
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

//         </div>
//     );
// };

// export default DiscoverCarousel;



import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import Button from "../../../component/Button";
import Image from "../../../component/Image";
import YouTube from "react-youtube";

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
    },
};

const NewReleaseSliderFile = () => {
    const { discoverCaroData, showData, setShowData } = useContext(AppContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNewReleaseImg = (currentSlide) => {
        setIsModalOpen(true);
        setShowData([currentSlide]);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (!discoverCaroData || discoverCaroData.length === 0) return;

        const nextPage = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % discoverCaroData.length);
        }, 4000);

        return () => clearInterval(nextPage);
    }, [discoverCaroData]);

    if (!discoverCaroData || discoverCaroData.length === 0) {
        return null;
    }

    const currentSlide = discoverCaroData[currentIndex];

    const handleImageIndex = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="common-carousel-container">
            <div className="common-carousel-wrapper">
                <div style={{ position: "relative" }}>
                    {currentSlide.image && (
                        <Image
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            className="common-carousel-image"
                            onClick={() => handleNewReleaseImg(currentSlide)}
                        />
                    )}
                </div>

                <div className="common-carousel-text-content">
                    <span className="common-carousel-link-title">
                        <a href={currentSlide.title}>{currentSlide.linkTitle}</a>
                    </span>
                    <h3 className="common-carousel-title">{currentSlide.title}</h3>
                    <p className="common-carousel-subtitle">{currentSlide.subTitle}</p>
                    <p className="common-carousel-content">{currentSlide.content}</p>
                </div>
            </div>

            <div className="common-carousel-button-container">
                <Button
                    className="common-carousel-button left"
                    onClick={() =>
                        setCurrentIndex(
                            (prev) =>
                                (prev - 1 + discoverCaroData.length) % discoverCaroData.length
                        )
                    }
                >
                    {"<"}
                </Button>

                <Button
                    className="common-carousel-button right"
                    onClick={() =>
                        setCurrentIndex((prev) => (prev + 1) % discoverCaroData.length)
                    }
                >
                    {">"}
                </Button>
            </div>

            <div className="common-carousel-index-image-div">
                {discoverCaroData.map((item, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div
                            key={index}
                            className={`common-carousel-image-div ${isActive ? "active" : ""
                                }`}
                        >
                            <Image
                                src={item.image}
                                onClick={() => handleImageIndex(index)}
                            />
                        </div>
                    );
                })}
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

export default NewReleaseSliderFile;

