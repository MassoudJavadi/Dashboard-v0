import React from 'react';
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">آخرین تراکنشها</h3>

      <table className="widgetLgTable">
        
          <tr className="widgetLgTr">
            <th className="widgetLgTh">وضعیت</th>
            <th className="widgetLgTh">تاریخ</th>
            <th className="widgetLgTh">مبلغ</th>
            <th className="widgetLgTh">مشتری</th>
          </tr>
        
        
        <tr className="widgetLgTr">
          
           <Button type="Approved" />
           

          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">

            <td className="widgetLgUser">
            <span className="widgetLgName">رزیتا بلاپور</span>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
 
          </td>
          </td>
        </tr>
        

        
        <tr className="widgetLgTr">
          
           <Button type="Declined" />
          
          <td className="widgetLgDate">2 Jun 2021</td> 
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">

          <td className="widgetLgUser">
            <span className="widgetLgName">آتنا اقدامی</span>
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
 
          </td>
          
          </td>
          
        </tr>
        

        
        <tr className="widgetLgTr">
           <Button type="Pending" />
           
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
            
            <td className="widgetLgStatus">
            
                <td className="widgetLgUser">
                  <span className="widgetLgName">پریوش نظریه</span>
                  <img
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="widgetLgImg"
                  />
                </td>
            
          </td>
         
        </tr>
        

      </table>
    </div>
  );
}

