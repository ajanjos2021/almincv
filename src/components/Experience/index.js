import styles from "./styles.module.css";

const Experience = () => {
    return (
        <div>
            <div><b className={styles.company}>Oblique</b></div>
            <i>Oktobar 2020 - Juli 2021</i>
            <br />
            <br />
            <ul>
            <li>
                <div className={styles.company}>Kaizen - ReactJS</div>
                <div>Radila kao frontend developer na aplikaciji čija je uloga predvidjala olakšano mentorstvo i u skladu s tim razvijala potrebne funkcionalnosti.</div>
            </li>
            <br />
            <li>
                <div className={styles.company}>Bosniaventure - ReactJS</div>
                <div>Radila na razvoju startup-a od samog početka. Namjena startup-a bila je promovisanje znamenitosti i turističkih destinacija kao i aktivnosti koje se mogu obaviti na istim.</div>
            </li>
            </ul>
        </div>
    )
}

export default Experience