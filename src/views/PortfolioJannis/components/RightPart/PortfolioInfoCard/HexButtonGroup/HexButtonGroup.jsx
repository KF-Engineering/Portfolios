import css from './HexButtonGroup.module.sass'
import React from "react";

const HexButtonGroup = (props) => {
    return <div className={css.HexButtonGroup}>
        <h1>PROJECTS</h1>
        <div className={css.container}>
            <span className={css.cell}></span>
            <span className={css.cell}></span>
            <span className={css.cell}></span>
            <span className={css.cell}></span>
            <span className={css.cell}></span>
        </div>
    </div>
}
export default HexButtonGroup



