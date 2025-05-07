import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import Button from "../../../component/Button";
import Image from "../../../component/Image";

const NewReleaseSliderFile = () => {
    const { newReleseCarousel } = useContext(AppContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNewReleaseImg = () => {
        alert('hello')
    }

    useEffect(() => {
        if (!newReleseCarousel || newReleseCarousel.length === 0) return;

        const nextPage = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % newReleseCarousel.length);
        }, 3000);

        return () => clearInterval(nextPage);
    }, [newReleseCarousel]);

    if (!newReleseCarousel || newReleseCarousel.length === 0) {
        return null;
    }

    const currentSlide = newReleseCarousel[currentIndex];

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
                            onClick={handleNewReleaseImg}
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
                                (prev - 1 + newReleseCarousel.length) % newReleseCarousel.length
                        )
                    }
                >
                    {"<"}
                </Button>

                <Button
                    className="common-carousel-button right"
                    onClick={() =>
                        setCurrentIndex((prev) => (prev + 1) % newReleseCarousel.length)
                    }
                >
                    {">"}
                </Button>
            </div>

            <div className="common-carousel-index-image-div">
                {newReleseCarousel.map((item, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div
                            key={index}
                            className={`common-carousel-image-div ${
                                isActive ? "active" : ""
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
        </div>
    );
};

export default NewReleaseSliderFile;
