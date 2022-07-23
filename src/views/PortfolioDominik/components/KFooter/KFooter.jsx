import css from './KFooter.module.sass'
import LogoFooter from './../../images/LogoFooter.svg'

const KFooter = () => {
    return <div className={css.KFooter}>
        <section>
            <div className={css.IMPRESSUM}>
                <h1>IMPRESSUM</h1>
                <div></div>
            </div>
            <div className={css.ABOUT}>
                <h1>ABOUT</h1>
                <div></div>
            </div>
        </section>
        <section>
            <div className={css.CONTACT}>
                <h1>CONTACT</h1>
                <div>
                    <img src={LogoFooter} alt=""/>
                </div>
            </div>
            <div className={css.SOCIAL}>
                <h1>SOCIAL</h1>
                <div>
                    <span/>
                    <span/>
                </div>
            </div>
        </section>
    </div>
}
export default KFooter