import React from "react";
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";
const NavigationSidebar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const parts = pathname.split('/')
   console.log("parts",parts)
    return (

        <div className="list-group">
            <a href="#" className="list-group-item">Tuiter</a>
            <Link to="/tuiter" className={`list-group-item ${parts.length < 3 ? 'active' : ''}`}>
                Home
            </Link>
            <Link  to="/tuiter/explore"  className={`${parts[2] === 'explore' ? 'active':''} list-group-item`}>
                Explore
            </Link>
            <a className="list-group-item">
                Notifications
            </a>
            <a className="list-group-item">
                Messages
            </a>
            <a className="list-group-item">
                Bookmarks
            </a>
            <a className="list-group-item">
                Lists
            </a>
            <Link  to="/tuiter/profile"  className={`${parts[2] === 'profile' ? 'active':''} list-group-item`}>
                Profile
            </Link>
            <a className="list-group-item">
                More
            </a>
        </div>

    );

};
export default NavigationSidebar;