import css from './RightPart.module.sass'
import PortfolioInfoCard from "./PortfolioInfoCard/PortfolioInfoCard";
import Tree from "./Tree/Tree";
import React from "react";



const RightPart = () => {
    return <div className={css.RightPart}>

        <PortfolioInfoCard/>
        <Tree/>
    </div>
}
export default RightPart