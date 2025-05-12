import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './OtherComp.css'

const OtherComp = () => {
    const [podcasts, setPodcast] = useState([]);
    const { category } = useParams();
    console.log(category);


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
                {podcasts.length > 0 ? (
                    <h2>{podcasts[0].category.charAt(0).toUpperCase() + podcasts[0].category.slice(1)}</h2>
                ):""}
                {podcasts.length > 0 ? podcasts.map((itm) => (
                    <div key={itm.id} className="podcastsContainer">
                        <div className="podcastsinner">
                            <h4>{itm.title}</h4>
                            <p>{itm.description}</p>
                            <div className="btn-container">
                                {itm.options.map((item) => (
                                    <button>{item.option}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                )) : <p>No Data</p>}
            </div>
        </>
    );
};
export default OtherComp;