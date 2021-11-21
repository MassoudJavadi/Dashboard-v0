import './widgetSm.css';
import React from 'react';
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
    return (
        <div className="widgetSm">
             <span className="widgetSmTitle">اعضای جدید</span>
             <ul className="widgetSmList">
                 <li className="widgetSmListItem">
                   <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        نمایش
                    </button>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">حسن مرشدیان</span>
                        <span className="widgetSmUserTitle">مهندس صنایع</span>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />

                </li>
                <li className="widgetSmListItem">
                   <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        نمایش
                    </button>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">حسن مرشدیان</span>
                        <span className="widgetSmUserTitle">مهندس صنایع</span>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />

                </li>
                <li className="widgetSmListItem">
                   <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        نمایش
                    </button>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">حسن مرشدیان</span>
                        <span className="widgetSmUserTitle">مهندس صنایع</span>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="widgetSmImg"
                    />

                </li>
             </ul>
        </div>
    )
}
