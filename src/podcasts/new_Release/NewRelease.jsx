import BhartiTvOuter from "./bhartiTv/BhartiTvOuter";
import NewReleaseSliderFile from "./new_Release_Carousel/NewReleaseCarousel";
import RajShamani from "./rajShamani/RajShamaniOuter";
import RanveerAllahbadiaOUTER from "./ranveerallahbadia/RanveerallahbadiaOuter";
import ReLivingSingleOUTER from "./reLivingSingleOuter/ReLivingSingleOuter";


const NewRelease = () => {
    return (
        <div className="new-release-main-container">
            <div className="new-release-div1-h1-div">
                <h1>New Release</h1> 
            </div>

            <div>
                <NewReleaseSliderFile />
                <RajShamani />
                <BhartiTvOuter />
                <RanveerAllahbadiaOUTER />
                <ReLivingSingleOUTER />
            </div>

        </div>
    )
}

export default NewRelease;