import { useContext } from 'react';
import { AppContext } from '../../contextApi/AppContext';
import './Sidebar.css';
import { FiSearch, FiZap, FiClock, FiStar, FiBookmark, FiActivity } from 'react-icons/fi';

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
                    <div className="sidebar-item" key={index}>
                        <span className="sidebar-icon">{iconMap[item.icon]}</span>
                        <span className="sidebar-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
