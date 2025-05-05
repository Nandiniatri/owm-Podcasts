import BhartiTvOuter from "./bhartiTv/BhartiTvOuter";
import RajShamani from "./rajShamani/RajShamaniOuter";


const NewRelease = () => {
    return (
        <div className="new-release-main-container">
            <div>
                <h1>New Release</h1>
            </div>

            <div>
                <RajShamani />
                <BhartiTvOuter />
            </div>

        </div>
    )
}

export default NewRelease;