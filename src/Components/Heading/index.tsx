import React from "react";
import './style.css';
import calendarIcon from '../../Assets/calendar.svg';

const Heading = ()=>{
    return(
    <>
    <div className="heading"> 
        <p className="techLtd">STEP 3 TECHNOLOGY LTD</p>
        <h1>June 2021 Claim</h1>
        <p className="timeSpanPara"><span className="timeSpan1" >
        <img src={calendarIcon} alt='calendar' className="calendar"/> 
        {"1 June 2020 > 30 June 2021"}</span></p>
        <div className="headerTimeSeparator"></div>
        <p className="timeSpanPara2"><span className="timeSpan2">
        {"1 Month, 14 Days, 11 Hours"}</span></p>
    </div>
    </>
    )
}

export default Heading;
