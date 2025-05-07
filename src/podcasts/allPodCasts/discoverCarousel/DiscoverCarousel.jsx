import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import Button from "../../../component/Button";
import Image from "../../../component/Image";
import "./DiscoverCarousel.css";
 
const DiscoverCarousel = () => {
    const { discoverCaroData } = useContext(AppContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!discoverCaroData || discoverCaroData.length === 0) return;

        const nextPage = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % discoverCaroData.length);
        }, 6000);

        return () => clearInterval(nextPage);
    }, [discoverCaroData]);


    if (!discoverCaroData || discoverCaroData.length === 0) {
        return null;
    }

    const currentSlide = discoverCaroData[currentIndex];

    const handleImageIndex = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="discover-container">
            <div className="carousel-wrapper">
                <div style={{ position: "relative" }}>
                    {currentSlide.image && (
                        <Image
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            className="carousel-image"
                        />
                    )}
                </div>

                <div className="carousel-text-content">
                    <span className="carousel-link-title">
                        <a href={currentSlide.title}>{currentSlide.linkTitle}</a></span>
                    <h3 className="carousel-title">{currentSlide.title}</h3>
                    <p className="carousel-subtitle">{currentSlide.subTitle}</p>
                    <p className="carousel-content">{currentSlide.content}</p>
                </div>
            </div>

            <div className="carousel-button-container">
                <Button
                    className="carousel-button left"
                    onClick={() =>
                        setCurrentIndex(
                            (prev) => (prev - 1 + discoverCaroData.length) % discoverCaroData.length
                        )
                    }
                >
                    {"<"}
                </Button>

                <Button
                    className="carousel-button right"
                    onClick={() =>
                        setCurrentIndex((prev) => (prev + 1) % discoverCaroData.length)
                    }
                >
                    {">"}
                </Button>
            </div>

            <div className="carousel-index-image-div">
                {discoverCaroData.map((item , index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div key={index} className={`carousel-image-div ${isActive ? "active" : ""}`} 
                        >
                            <Image src={item.image} onClick={() => handleImageIndex(index)} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default DiscoverCarousel;
