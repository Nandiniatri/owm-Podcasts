import { useContext } from 'react';
import { AppContext } from '../../contextApi/AppContext';
import './Sidebar.css';
import { FiSearch, FiZap, FiClock, FiStar, FiBookmark, FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Modal from '../../component/modal/Modal';
import OtherComp from '../allOtherComponent/OtherComp';

const iconMap = {
    FiSearch: < FiSearch />,
    FiZap: <FiZap />,
    FiClock: <FiClock />,
    FiStar: <FiStar />,
    FiBookmark: <FiBookmark />,
    FiHistory: <FiActivity />
};

const Sidebar = ({ setShowSidebar }) => {
    const { sidebar, setIsModalOpen, isModalOpen } = useContext(AppContext);

    const handleLinkClick = (item) => {
        console.log(item);
        if (item.label === "In Progress") {
            alert('in process');
            setIsModalOpen(true);
        }

        setShowSidebar(false);
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar-menu">
                {sidebar.map((item, index) => (
                    <Link to={item.path} className="sidebar-item" key={index} onClick={() => handleLinkClick(item)}>
                        <span className="sidebar-icon">{iconMap[item.icon]}</span>
                        <span className="sidebar-label">{item.label}</span>
                    </Link>
                ))}
            </div>


            <div>
                <Modal isOpen={isModalOpen}>
                    
                </Modal>
            </div>
        </div>
    );
};

export default Sidebar;
