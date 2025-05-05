import BhartiTvOuter from "./bhartiTv/BhartiTvOuter";
import RajShamani from "./rajShamani/RajShamaniOuter";
import RanveerAllahbadiaOUTER from "./ranveerallahbadia/RanveerallahbadiaOuter";


const NewRelease = () => {
    return (
        <div className="new-release-main-container">
            <div>
                <h1>New Release</h1>
            </div>

            <div>
                <RajShamani />
                <BhartiTvOuter />
                <RanveerAllahbadiaOUTER />
            </div>

        </div>
    )
}

export default NewRelease;