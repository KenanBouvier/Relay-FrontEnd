import React from "react";
import Circle from "../../Assets/circle.svg";
import './style.css';
import ArrowRight from "./../../Assets/arrowUp.svg";

interface IDropTab{ 
    title : string 
    end : boolean
}

const DropTab = (props:IDropTab)=>{
    const {title,end} = props;
    return(
        <div className="dropTabContainer" 
        style={{borderRadius:end?"0px 0px 15px 15px":" "}}
        >
            <p className = "circleTagDrop">
            <img src={Circle} alt="circle"/>
            </p>
            <h3 className = "dropTitleTag">{title}</h3> 
            <button 
            className="arrowTagButton">
            <img src={ArrowRight} alt="arrowUp"/>
            </button>
        </div> 
    )
}

export default DropTab;
