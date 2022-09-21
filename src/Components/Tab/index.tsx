import React, {useState} from "react";
import './style.css';
import Circle from '../../Assets/circle.svg';
import ArrowDown from './../../Assets/arrowDown.svg';
import ArrowRight from './../../Assets/arrowUp.svg';
import DropTab from "../DropTab";
import Line from "../../Assets/line.svg";

interface ITab{
    title: string
    time: number
    subTabs: string[]
}

const Tab = (props:ITab)=>{
    const {title,time,subTabs} = props;
    const [dropDown,setDropDown] = useState(false);

    const nothing = ()=>{}

    return(
    <>
    <div className="tabContainer" >
        <div className="tab" 
        style={{
            backgroundColor:dropDown?'#5378EB':'white',
            borderRadius:dropDown?"15px 15px 0px 0px":'',
        }} >
            <p className = "circleTag">
            <img src={Circle} alt="circle"/>
            </p>
            <h3 className = "titleTag" 
                style={{color:dropDown?'white':'' }} 
            >{title}
            </h3>
            
            <button 
            onClick={()=>{subTabs.length>0?setDropDown(!dropDown):nothing()}}
            className="arrowTagButton">
            <img src={dropDown ?ArrowDown :ArrowRight} alt="arrowUp"/>
            </button>

            <p className="timeTag"
            style={{color:dropDown?"white":"#08174D"}}
            >{time + " min"}</p>
        </div>
    {dropDown && title==="Add costs"&&
    <img src={Line} alt="line" className="bottomLine"/>
    }
    {!dropDown && title==="Add costs"&&
    <img src={Line} alt="line" className="midLine"/>
    }

        {/*Drop down enabled for component so we iterate through the subTabs*/}
        {dropDown &&     
            subTabs.map((tabTitle,key)=>{
                return (
                <>
                    <DropTab 
                    title={tabTitle} 
                    end={key===subTabs.length-1?true:false}
                    />
                </>  
                )
            }) 
        }
    </div>
    </>
    )
}

export default Tab;
