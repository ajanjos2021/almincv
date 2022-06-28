import Image from "next/image";
import ProfilePicture from "./../../../../public/profilePicture.jpg"
import Logo from "./../../../../public/ajLogo.png"

import styles from "./styles.module.css";
import AboutMe from "../../AboutMe";
import MyPath from "../../MyPath";
import Projects from "../../Projects";
import Contact from "../../Contact";

function CVMobile() {
    return (
        <div>
            <div className={styles.logoOmotac}>
                <Image src={Logo} width={44} height={44} className={styles.logo} />
            </div>
            <div className={styles.imeSlikaOmotac}>
                <div className={styles.ime}>Alma Janjoš</div>
                <div className={styles.profilePicture}>
                    <Image src={ProfilePicture} layout='responsive' objectFit='cover' />
                </div>
            </div>
            <div className={styles.data}>
                <div className={styles.sekcija}>
                    <div className={styles.naslovSekcije}>O meni</div>
                    <div>
                        <AboutMe />
                        </div>
                </div>
                <div className={styles.sekcija}>
                    <div className={styles.naslovSekcije}>Moj put</div>
                    <div>
                        <MyPath />
                    </div>
                </div>
                <div className={styles.sekcija}>
                    <div className={styles.naslovSekcije}>Projekti</div>
                    <div>
                        <Projects />
                    </div>
                </div>
                <div className={styles.sekcija}>
                    <div className={styles.naslovSekcije}>Kontakt</div>
                    <div>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CVMobile