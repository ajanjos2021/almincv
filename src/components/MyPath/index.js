import styles from "./styles.module.css";

function MyPath() {
    return (
        <div>
            <ol>
                <li>
                    <div>ETF - Uvod u programiranje, Vedran Ljubovic</div>
                </li>
                <li>
                    <div>ETF - Tehnike programiranja, Željko Jurić</div>
                </li>
                <li>
                    <div>CSS - The Complete Guide, Maximilian Schwarzmüller,
                    <a
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/#instructor-2">Udemy link</a>
                    </div>
                </li>
                <li>
                    <div>JavaScript - The Complete Guide (Beginner + Advanced), Maximilian Schwarzmüller,
                    <a 
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/">Udemy link</a>
                    </div>
                </li>
                <li>
                    <div>JavaScript: The Hard Parts, v2, Will Sentance,
                    <a 
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://frontendmasters.com/courses/javascript-hard-parts-v2/">Frontend Masters link</a>
                    </div>
                </li>
                <li>
                    <div>JavaScript: The New Hard Parts , Will Sentance,
                    <a 
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://frontendmasters.com/courses/javascript-new-hard-parts/">Frontend Masters link</a>
                    </div>
                </li>
                <li>
                    <div>React - The Complete Guide (incl Hooks, React Router), Maximilian Schwarzmüller,
                    <a 
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Udemy link</a>
                    </div>
                </li>
                <li>
                    <div>Introduction to Next.js, Scott Moss,
                    <a 
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://frontendmasters.com/courses/next-js/">Udemy link</a>
                    </div>
                </li>
            </ol>
            <div>
                Pored navedenih kurseva koje sam se trudila da što detaljnije pređem, prešla sam veliki broj youtube videa u kojima sam učila kako napraviti odredjene stvari te uglavnom istraživala.
                Također sam pratila još neke kurseve iz kojih sam iscrpila određena znanja.Te kurseve nisam u potpunosti završila i iz tog razloga nisu navedeni.
            </div>
        </div>
    )
}

export default MyPath