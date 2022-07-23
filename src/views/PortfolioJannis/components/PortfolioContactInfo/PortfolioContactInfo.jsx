import css from './PortfolioContactInfo.module.sass'
import location from '../../images/location.svg'
import call from '../../images/call.svg'
import email from '../../images/email.svg'
import laptop from '../../images/laptop.svg'

const PortfolioContactInfo = () => {
    return <div className={css.PortfolioContactInfo}>
        <div className={css.container}>
            <img src={location} alt=""/>
            <div className={css.content}>
                <h1>ADRESS</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. </p>
            </div>
        </div>
        <div className={css.container}>
            <img src={call} alt=""/>
            <div className={css.content}>
                <h1>PHONE</h1>
                <p>+ 49 163 7029444</p>
            </div>
        </div>
        <div className={css.container}>
            <img src={email} alt=""/>
            <div className={css.content}>
                <h1>MAIL</h1>
                <p>franzjandominik@gmail.com</p>
            </div>
        </div>
        <div className={css.container}>
            <img src={laptop} alt=""/>
            <div className={css.content}>
                <h1>WEBSITE</h1>
                <p>This one</p>
            </div>
        </div>
    </div>
}
export default PortfolioContactInfo