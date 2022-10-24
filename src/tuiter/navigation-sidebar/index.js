import React from "react";
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";
const NavigationSidebar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const parts = pathname.split('/')
   console.log(parts[1])
    return (

        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
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
            <a className="list-group-item">
                Profile
            </a>
            <a className="list-group-item">
                More
            </a>
        </div>

    );

};
export default NavigationSidebar;