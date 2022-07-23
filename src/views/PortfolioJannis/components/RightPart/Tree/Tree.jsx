import React, {useState} from "react";
import css from './Tree.module.sass'
import Arrow from "./Arrow";

const Tree = (props) => {
    document.addEventListener('scroll', () => setScroll(true))
    const [isScrolled, setScroll] = useState(false)

    return <div className={css.Tree}>
        <div className={css.topContainer}>
            <h1 className={css.name}>EXPERIENCE</h1>
            {/*//////////////////////*/}
            <div className={[css.VertLine, css.VertLine1].join(' ')}>
                <span></span>
            </div>
            {/*//////////////////////*/}
            <div className={css.container}>
                <h2>1999</h2>
                <section>
                    <span></span>
                    <div></div>
                    <span></span>
                </section>
                <div>
                    <h1>headline</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. </p>
                </div>
            </div>
            {/*//////////////////////*/}
            <div className={[css.VertLine, css.VertLine2].join(' ')}>
                <span></span>
            </div>
            {/*//////////////////////*/}
            <div className={css.container}>
                <h2>1999</h2>
                <section>
                    <span></span>
                    <div></div>
                    <span></span>
                </section>
                <div>
                    <h1>headline</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. </p>
                </div>
            </div>
            {/*//////////////////////*/}
            <div className={[css.VertLine, css.VertLine3].join(' ')}>
                <span></span>
            </div>
            {/*//////////////////////*/}
            <div className={css.container}>
                <h2>1999</h2>
                <section>
                    <span></span>
                    <div></div>
                    <span></span>
                </section>
                <div>
                    <h1>headline</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. </p>
                </div>
            </div>
            {/*//////////////////////*/}
            <div className={[css.VertLine, css.VertLine4].join(' ')}>
                <span></span>
            </div>
            {/*//////////////////////*/}
            {/*    ARROW    */}
            <Arrow isScrolled={isScrolled}/>
            {/*    ARROW    */}

        </div>
        {/*//////////////////////*/}
        <div className={[css.VertLine, css.VertLine5, isScrolled ? "" : css.hidden].join(' ')}>
            <span></span>
        </div>
        {/*//////////////////////*/}

        {/*//////////////////////*/}
        <h1 className={css.name}>EDUCATION</h1>
        {/*//////////////////////*/}
        <div className={[css.VertLine, css.VertLine1].join(' ')}>
            <span></span>
        </div>
        {/*//////////////////////*/}
        <div className={css.container}>
            <h2>1999</h2>
            <section>
                <span></span>
                <div></div>
                <span></span>
            </section>
            <div>
                <h1>headline</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
            </div>
        </div>
        {/*//////////////////////*/}
        <div className={[css.VertLine, css.VertLine2].join(' ')}>
            <span></span>
        </div>
        {/*//////////////////////*/}
        <div className={css.container}>
            <h2>1999</h2>
            <section>
                <span></span>
                <div></div>
                <span></span>
            </section>
            <div>
                <h1>headline</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
            </div>
        </div>
        {/*//////////////////////*/}
        <div className={[css.VertLine, css.VertLine3].join(' ')}>
            <span></span>
        </div>
        {/*//////////////////////*/}
        <div className={css.container}>
            <h2>1999</h2>
            <section>
                <span></span>
                <div></div>
                <span></span>
            </section>
            <div>
                <h1>headline</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
            </div>
        </div>
        {/*//////////////////////*/}
        <div className={[css.VertLine, css.VertLineLast].join(' ')}>
            <span></span>
            <div></div>
        </div>
        {/*//////////////////////*/}
    </div>
}
export default Tree