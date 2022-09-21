import Heading from "../../Components/Heading";
import TabManager from "../../Components/TabManager";
import TopShape from './../../Assets/topShape.svg';
import BiggerTopShape from './../../Assets/biggerTopShape.svg';
import './style.css'

const Claim = ()=>{
    return(
        <div> 
            <img src={TopShape} alt='topshape' className="topShape"/> 
            <img src={BiggerTopShape} alt='topshapeBigger' className="biggerTopShape"/> 
            <Heading/>
           
           <TabManager/>
            
        </div> 
    )
}

export default Claim;
