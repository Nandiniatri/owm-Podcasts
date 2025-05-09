import { useState, useEffect } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import './Header.css';
import Image from "../../component/Image";
import Input from "../../component/Input";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";


const UpperComponent = () => {
    const [logoData, setLogoData] = useState([]);
    const [showSearchBar, setShowSearchBar] = useState(false);

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

    return (
        <div className="header-container">

            <div className="header-left">
                {logoData.map((logoItm, index) => (
                    <Image key={index} src={logoItm.image} alt="Logo" className="logo-img" />
                ))}
            </div>


            <div className="header-center-main-Container">
                <div className="header-center">
                    <div className="header-center-div1">
                        <FaArrowLeft className="nav-icon" color="white" size={23} />
                        <FaArrowRight className="nav-icon" color="gray" size={23} />
                    </div>

                    <div className="header-center1">
                        <FaSearch className="search-icon" />
                        <Input
                            type="text"
                            placeholder="Search or enter URL"
                            className="search-input"
                        />
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
                        <div className={`header-center1 responsive-searchbar ${showSearchBar ? 'show' : ''}`}>
                            <FaSearch className="search-icon" />
                            <Input
                                type="text"
                                placeholder="Search or enter URL"
                                className="search-input"
                            />
                        </div>
                    </div>
                )}
                <div>
                    <IoMdMenu size={23} className="responsive-menu-icon" />
                </div>
            </div>

        </div>
    );
};

export default UpperComponent;
