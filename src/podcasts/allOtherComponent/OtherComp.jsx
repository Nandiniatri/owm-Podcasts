import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './OtherComp.css'
import Modal from "../../component/modal/Modal";
import { AppContext } from "../../contextApi/AppContext";

const OtherComp = ({ category }) => {
    const [podcasts, setPodcast] = useState([]);
    // const { category } = useParams();
    // console.log(category); 
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

    return (
        <>
            <div className="podcast-container">
                <div>
                    {podcasts.length > 0 ? (
                        <h2>{podcasts[0].category.charAt(0).toUpperCase() + podcasts[0].category.slice(1)}</h2>
                    ) : ""}
                    {podcasts.length > 0 ? podcasts.map((itm) => (
                        <div key={itm.id} className="podcastsContainer">
                            <div className="podcastsinner">
                                <h4>{itm.title}</h4>
                                <p>{itm.description}</p>
                                <div className="btn-container">
                                    {itm.options.map((item) => (
                                        <button key={item.id}>{item.option}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )) : <p>No Data</p>}
                    <button className="modal-close-button" onClick={() => setIsModalOpen(false)}>✖</button>
                </div>
            </div>
        </>
    );
};
export default OtherComp;