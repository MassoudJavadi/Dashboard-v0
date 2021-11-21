import React from 'react';
import './navbar.css';
import {NotificationsNone,Language,AccountCircle,Settings} from '@material-ui/icons';
import image1 from '../../assets/avatar1.jpg';

export default function Navbar() {
    return (
        <div className="nav">
            <div className="navWrapper">
                <div className="navLeft">
                    <img src={image1} alt = "" className="navAvatar"/>
                    <div className="navIconContainer">
                        <NotificationsNone/>
                        <span className="navIconBadge">2</span>
                    </div>
                    <div className="navIconContainer">
                        <Language/>
                    </div>
                    <div className="navIconContainer">
                        <Settings/>
                    </div>
                    
                </div>
                <div className="navRight">
                    <span className="logo">پنل مدیریت مسعود</span>
                </div>
            </div>
        </div>
    )
}
