import './style.css'
import ArrowRight from "../../Assets/arrowUp.svg";
import Return from "../../Assets/return.svg";
import Logo from "../../Assets/logo.svg";


const NavBar = ()=>{
    return(
    <div className="navContainer">
        <p><span className="claimsMenu">My Claims </span>
        <img className="returnArrow" src= {Return} alt="return"/>
        <img className="navArrowRight" src={ArrowRight} alt="arrowright"/> 
        June 2021 Claim
        <img className="logo" src={Logo} alt="logo"/>
        </p>
        
        
    </div>
    )
}


export default NavBar;
