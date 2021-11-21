import React from 'react';
import './sidebar.css';
import { Apps,Timeline,LocalGroceryStore, People } from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                داشبورد 
                                <Apps className="sidebarIcon"/> 
                            </li>
                        </Link>
                            <li className="sidebarListItem">
                                آمار  
                            <Timeline className="sidebarIcon"/> 
                            </li>
                            <li className="sidebarListItem">
                                محصولات  
                                <LocalGroceryStore className="sidebarIcon"/> 
                            </li>
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                مشتریها  
                                <People className="sidebarIcon"/> 
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}
