import { useContext, useState } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import Button from "../../../component/Button";
import Image from "../../../component/Image";

const DiscoverCarousel = () => {
    const { discoverCaroData } = useContext(AppContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(discoverCaroData);
    

    const currentSlide = discoverCaroData[currentIndex];
    console.log(currentSlide);

    return (
        <div>
            <div>
                <div className="carousel-slide">
                    <Image src={currentSlide.image} />
                </div>

                <div>
                    <Button>{"<"}</Button>
                    <Button>{">"}</Button>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default DiscoverCarousel;