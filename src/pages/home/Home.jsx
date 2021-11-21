import React from 'react';
import './home.css';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import {userData} from '../../dummyData';
import WidgetSm from '../../components/smallwidgets/WidgetSm';
import WidgetLg from '../../components/largewidgets/WidgetLg';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="آمار بازدید سایت" grid dataKey="بازدیدکنندگان"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>

        </div>
    )
}
