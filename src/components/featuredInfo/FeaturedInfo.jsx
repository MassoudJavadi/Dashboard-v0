import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featuredInfo.css';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">درآمد</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$2000</span>
                        <span className="featuredMoneyRate">-11.5 
                            <ArrowDownward className="featuredIcon negative"/>
                        </span>
                     </div>
                     <span className="featuredSub"> مقایسه با ماه قبل</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">سود خالص</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$100</span>
                        <span className="featuredMoneyRate">-1.9 
                            <ArrowDownward className="featuredIcon negative" />
                        </span>
                     </div>
                     <span className="featuredSub"> مقایسه با ماه قبل</span>
            </div>

           <div className="featuredItem">
                <span className="featuredTitle">هزینه</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$1900</span>
                        <span className="featuredMoneyRate">+2.5 
                          <ArrowUpward className="featuredIcon"/>
                        </span>
                     </div>
                     <span className="featuredSub"> مقایسه با ماه قبل</span>
            </div>
        </div>
    )
}
