import css from './TopSection.module.sass'

const TopSection = () => {
    return <div className={css.TopSection}>
        <section>

            <h1>DOMINIK <span>FRANZ</span></h1>
            <h2>“A smart Qoute, which was said by” <br/>
                - Smart Person</h2>
        </section>
        <div className={css.triangle}></div>
    </div>
}
export default TopSection