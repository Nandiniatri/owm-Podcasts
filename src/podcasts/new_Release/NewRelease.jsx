import BhartiTvOuter from "./bhartiTv/BhartiTvOuter";
import RajShamani from "./rajShamani/RajShamaniOuter";
import RanveerAllahbadiaOUTER from "./ranveerallahbadia/RanveerallahbadiaOuter";
import ReLivingSingleOUTER from "./reLivingSingleOuter/ReLivingSingleOuter";


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
                <ReLivingSingleOUTER />
            </div>

        </div>
    )
}

export default NewRelease;