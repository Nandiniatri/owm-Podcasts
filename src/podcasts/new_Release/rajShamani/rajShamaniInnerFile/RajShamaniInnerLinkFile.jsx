import { useNavigate } from "react-router-dom";

const RajShamaniInnerLinkFile = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/new-releases')
    }

    return (
        <>
            <button onClick={handleBack}>Back</button>
            <h1>Hello My self Ineer File</h1>
        </>
    )
}

export default RajShamaniInnerLinkFile;