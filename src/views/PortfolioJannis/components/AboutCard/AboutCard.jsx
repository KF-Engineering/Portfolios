import css from './AboutCard.module.sass'
import SomeBoy from '../../images/SomeBoy.png'

const AboutCard = () => {
    return <div className={css.AboutCard}>
        <img src={SomeBoy} alt=""/>
        <div className={css.AboutMe}>
            <h1>About <span>Me</span></h1>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam e
            </p>
        </div>
    </div>
}
export default AboutCard