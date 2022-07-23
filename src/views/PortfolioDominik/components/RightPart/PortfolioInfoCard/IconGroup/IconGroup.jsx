import React from 'react';
import css from './IconGroup.module.sass'

const IconGroup = (props) => {
    return <div className={css.IconGroup}>
            <h1>TECH</h1>
        <div className={css.container}>
            <div className={css.cell}>
                <span></span>
            </div>
            <div className={css.cell}>
                <span></span>
            </div>
            <div className={css.cell}>
                <span></span>
            </div>
            <div className={css.cell}>
                <span></span>
            </div>
            <div className={css.cell}>
                <span></span>
            </div>
            <div className={css.cell}>
                <span></span>
            </div>
        </div>
    </div>
};

export default IconGroup;