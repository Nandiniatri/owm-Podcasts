import { useContext, useEffect, useState } from "react";
import './OtherComp.css'
import { AppContext } from "../../contextApi/AppContext";
import Button from "../../component/Button";

const OtherComp = ({ category }) => {
    const [podcasts, setPodcast] = useState([]);
    const { setIsModalOpen } = useContext(AppContext);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch(
                    `https://podcasts-backend-j9ty.onrender.com/api/sidebaritem/category?category=${category}`
                );
                console.log("API status:", response.status);
                const result = await response.json();
                console.log("API result:", result);
                setPodcast(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
 
        if (category) {
            fetchApi();
        }

    }, [category]);

    const handleOtherBtn = (item) => {
        if(item.action === 'not_now'){
            setIsModalOpen(false)
        }
    }

    return (
        <>
            <div className="podcast-container">
                <div>
                    {/* <div className="pod-btn-div">
                        <Button onClick={() => setIsModalOpen(false)}>✖</Button>
                    </div> */}

                    <div className="podcast-title-div">
                        {podcasts.length > 0 ? (
                            <h2>{podcasts[0].category.charAt(0).toUpperCase() + podcasts[0].category.slice(1)}</h2>
                        ) : ""}
                    </div>

                    </div>
                        {podcasts.length > 0 ? podcasts.map((itm) => (
                            <>
                                <div key={itm.id} className="podcastsContainer">
                                    <div className="podcastsinner">
                                        <h4>{itm.title}</h4>
                                        <p>{itm.description}</p>
                                        <div className="btn-container">
                                            {itm.options.map((item) => (
                                                <Button key={item.id} className="btn-data"  onClick={() => 
                                                    handleOtherBtn(item)
                                                }>{item.option}</Button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )) : <p>Loading......</p>}
                    <div>
                </div>
            </div>
        </>
    );
};
export default OtherComp;