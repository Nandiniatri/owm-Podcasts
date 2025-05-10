import { useContext, useEffect } from "react";
import { AppContext } from "../../../contextApi/AppContext";
import { useParams } from "react-router-dom";
import Image from "../../../component/Image";

const RenderCategoryBtnData = () => {
    const { allCategoryBtnData, fetchAllCategoryBtnDataApi } = useContext(AppContext);
    const { category } = useParams();

    useEffect(() => {
        fetchAllCategoryBtnDataApi(category);
    }, [category]);


    if (allCategoryBtnData.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <>
           {allCategoryBtnData.map((item) => {
            return(
                <div>
                    <h1>{item.title}</h1>
                    <Image src={item.image}/>
                </div>
            )
           })}
        </>
    );
};

export default RenderCategoryBtnData;
