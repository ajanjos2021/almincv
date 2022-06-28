import styles from "./styles.module.css";

function Projects() {
    return (
        <div>
            Pored projekata Kaizen i Bosniaventure koje je radila profesionalno, privatno je radila na sljedećim navedenim projektima s ciljem usavršavanja znanja o ReactJS frameworku i njihov kod je javno dostupan.
            <ul>
                <li>
                    <div className={styles.title}>Calculator - ReactJS</div>
                    <div>Tokom prelaska kursa iz ReactJS, u svrhu primjene dotad stečenih znanja napravila sam kalkukator koji omogućava jednostavne matematičke operacije ali i neke druge kompleksnije funkcionalosti.</div>
                    <a className={styles.link}  target="_blank"
                        rel="noopener noreferrer" href="https://github.com/ajanjos2021/calculator">Github Link</a>
                </li>
                <li>
                    <div className={styles.title}>Zooba Game - ReactJS</div>
                    <div>U svrhu primjene znanja iz ReactJS i dodatne vježbe, napravila sam simulaciju navedene igrice u kojoj postoji solo mode i multiteams mode. U zavisnosti od odabranog moda, igrači se mogu dodati u igru ili u timove, te nakon toga boriti. Svaki potez se bilježi u historiju.</div>
                    <a className={styles.link}  target="_blank"
                        rel="noopener noreferrer" href="https://github.com/ajanjos2021/zooba-game">Github Link</a>
                </li>
                <li>
                    <div className={styles.title}>Povio - ReactJS</div>
                    <div>Kompleksna aplikacija koja je zahtijevala primjenu raznih funkcionalnosti koje ReactJS omogućava. Odabrana za rad zbog posjedovanja API-ja za pristup raznim funkcionalnostima.</div>
                    <a className={styles.link}  target="_blank"
                        rel="noopener noreferrer" href="https://github.com/ajanjos2021/cvijece">Github Link</a>
                </li>
                <li>
                    <div className={styles.title}>CV - NextJS</div>
                    <div>Nakon odslušanog kursa iz NextJS urađen zbog želje za primjenom stečenog znanja ali i analiziranja ove tehnologije.</div>
                    <a className={styles.link}  target="_blank"
                        rel="noopener noreferrer" href="https://github.com/ajanjos2021/almincv">Github Link</a>
                </li>
            </ul>
        </div>
    )
}

export default Projects