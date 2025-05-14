import { useState, useEffect, useContext } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import './Header.css';
import Image from "../../component/Image";
import Input from "../../component/Input";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { AppContext } from "../../contextApi/AppContext";
import { Link, useNavigate } from "react-router-dom";

const UpperComponent = ({ toggleSidebar }) => {
    const [logoData, setLogoData,] = useState([]);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const navigate = useNavigate();
    const [searchInputValue, setSearchInputValue] = useState('');
    const { setSearchingData } = useContext(AppContext)

    const fetchSearchingApi = async (query) => {
        try {
            const response = await fetch(`https://podcasts-backend-j9ty.onrender.com/api/search/podcasts?q=${query}`);
            const result = await response.json();
            setSearchingData(result); 
        } catch (error) {
            console.error('Search fetch error:', error);
            setSearchingData([]);
        }
    };

    const fetchLogoApi = async () => {
        const response = await fetch('https://podcasts-backend-j9ty.onrender.com/api/logo');
        const result = await response.json();
        setLogoData(result);
    };

    useEffect(() => {
        fetchLogoApi();
    }, []);


    const handleRespSearchIcon = () => {
        setShowSearchBar(!showSearchBar);
    }

    const handleLeftIcon = () => {
        navigate('*')
    }

    const handleInputFirst = (e) => {
        const value = e.target.value;
        setSearchInputValue(value);
        if (value.trim() !== '') {
            fetchSearchingApi(value);
            navigate('/search');
        }
    }

    return (
        <div className="header-container">

            <div className="header-left">
                <Link to={"*"}>
                    {logoData.map((logoItm, index) => (
                        <Image key={index} src={logoItm.image} alt="Logo" className="logo-img" />
                    ))}
                </Link>
            </div>

            <div className="header-center-main-Container">
                <div className="header-center">
                    <div className="header-center-div1">
                        <FaArrowLeft className="nav-icon" color="white" size={23} onClick={handleLeftIcon} />
                    </div>

                    <div className="header-center1 desktop-search">
                        <FaSearch className="search-icon" />
                        <Input type="search" placeholder="Search or enter URL" className="search-input" value={searchInputValue}
                            onChange={handleInputFirst} />
                    </div>
                </div>

                <div className="header-right">
                    <FaUserCircle className="user-avatar" />
                </div>
            </div>

            <div className="responsive-div">
                {!showSearchBar ? (
                    <IoIosSearch
                        size={23}
                        className="responsive-search-icon"
                        onClick={handleRespSearchIcon}
                    />
                ) : (
                    <div className="responsive-search-container">
                        <div className="responsive-searchbar">
                            <FaSearch className="search-icon" />
                            <Input
                                type="text"
                                placeholder="Search or enter URL"
                                className="search-input"
                            />
                        </div>
                    </div>
                )}

                <IoMdMenu size={23} className="responsive-menu-icon" onClick={toggleSidebar} />
            </div>
        </div >
    );
};

export default UpperComponent;

