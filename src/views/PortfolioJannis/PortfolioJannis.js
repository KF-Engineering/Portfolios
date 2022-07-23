
import './Portfolio.sass';
import nasa from './images/nasa.png'
import React from "react";
import RightPart from "./components/RightPart/RightPart";
import KFooter from "./components/KFooter/KFooter";
import Logo from './images/Logo.svg'
import CV from './images/CV.svg'
import PortfolioContactInfo from "./components/PortfolioContactInfo/PortfolioContactInfo";
import AboutCard from "./components/AboutCard/AboutCard";
import TopSection from "./components/TopSection/TopSection";

function PortfolioJannis() {
    return (
        <div className="Portfolio">
            <TopSection/>
            <AboutCard/>
            <RightPart/>
            <PortfolioContactInfo/>
            <KFooter/>
            <img className='logo' src={Logo} alt=""/>
            <img className='CV' src={CV} alt=""/>
            <div className='nasaBG'>
                <img src={nasa} alt=""/>
            </div>
        </div>
    );
}

export default PortfolioJannis;
