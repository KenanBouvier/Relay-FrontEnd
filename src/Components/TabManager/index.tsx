import Tab from "../Tab";
import Line from "./../../Assets/line.svg";

const TabManager = ()=>{
    return(
    <>
        <img className="line" src={Line}alt="line" />
       {/* <img className="bottomLine" src={Line}alt="line" />*/}
        <Tab title={"Add evidence"} time={5} subTabs={[]}/>
        <Tab title={"Add costs"} time={20} subTabs={["Payroll","Subcontractors","Other"]} />
        <Tab title={"Add documents"} time={5} subTabs={["Company Accounts","Tax Comps","CT600"]}/>
    </>
    )
}

export default TabManager; 
