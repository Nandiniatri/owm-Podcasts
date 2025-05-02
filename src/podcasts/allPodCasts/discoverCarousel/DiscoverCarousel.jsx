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
        }, 3000);

        return () => clearInterval(nextPage);
    }, [discoverCaroData]);


    if (!discoverCaroData || discoverCaroData.length === 0) {
        return null;
    }

    const currentSlide = discoverCaroData[currentIndex] || {};

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

                    <button
                        className="carousel-button left"
                        onClick={() =>
                            setCurrentIndex(
                                (prev) => (prev - 1 + discoverCaroData.length) % discoverCaroData.length
                            )
                        }
                    >
                        {"<"}
                    </button>

                    <button
                        className="carousel-button right"
                        onClick={() =>
                            setCurrentIndex((prev) => (prev + 1) % discoverCaroData.length)
                        }
                    >
                        {">"}
                    </button>
                </div>

                <div className="carousel-text-content">
                    <span className="carousel-link-title">{currentSlide.linkTitle}</span>
                    <h3 className="carousel-title">{currentSlide.title}</h3>
                    <p className="carousel-subtitle">{currentSlide.subTitle}</p>
                    <p className="carousel-content">{currentSlide.content}</p>
                </div>
            </div>
        </div>
    );
};

export default DiscoverCarousel;
