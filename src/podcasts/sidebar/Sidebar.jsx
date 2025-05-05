import { useContext } from 'react';
import { AppContext } from '../../contextApi/AppContext';
import './Sidebar.css';
import { FiSearch, FiZap, FiClock, FiStar, FiBookmark, FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const iconMap = {
    FiSearch: < FiSearch />,
    FiZap: <FiZap />,
    FiClock: <FiClock />,
    FiStar: <FiStar />,
    FiBookmark: <FiBookmark />,
    FiHistory: <FiActivity />
};

const Sidebar = () => {
    const { sidebar } = useContext(AppContext);

    return (
        <div className="sidebar-container">
            <div className="sidebar-menu">
                {sidebar.map((item, index) => (
                        <Link to={item.path} className="sidebar-item" key={index} >
                            <span className="sidebar-icon">{iconMap[item.icon]}</span>
                            <span className="sidebar-label">{item.label}</span>
                        </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
