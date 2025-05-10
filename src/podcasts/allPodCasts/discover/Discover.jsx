import { useContext } from 'react';
import './Discover.css';
import { AppContext } from '../../../contextApi/AppContext';
import Button from '../../../component/Button';
import { useNavigate } from 'react-router-dom';

const Discover = () => {
    const { discoverBtn, fetchAllCategoryBtnDataApi, setBtnCategory, allCategoryBtnData } = useContext(AppContext);
    const navigate = useNavigate();

    const handleDiscoverBtn = (category) => {
        console.log(allCategoryBtnData);
        console.log(category);
        fetchAllCategoryBtnDataApi(category);
        navigate(`/discover/${category}`); 
    }

    return (
        <div className='discover-btn-main-container'>
            <div className='discover-btn-div1'>
                <h1>Discover</h1>
            </div>

            <div className='discover-btn-div2'>
                {discoverBtn.map((disBtn) => {
                    return (
                        <div key={disBtn.id}>
                            <Button onClick={() => handleDiscoverBtn(disBtn.category)}>{disBtn.title}</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Discover; 