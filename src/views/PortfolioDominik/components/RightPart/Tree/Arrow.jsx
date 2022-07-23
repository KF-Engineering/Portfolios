import React from 'react';
import css from './Arrow.module.sass'

const Arrow = ({isScrolled}) => {
    return <div className={[css.Arrow, isScrolled ? css.hidden : ''].join(' ')}>
        <p>Scroll down</p>
        <span></span>
        <div></div>
        <div></div>
        <div></div>
    </div>
};

export default Arrow;