import Image from "next/image"
import styles from "./styles.module.css"
import ProfilePicture from "./../../../../public/profilePicture.jpg"
import Logo from "./../../../../public/ajLogo.png"
import { useState } from "react"
import AboutMe from "../../AboutMe"
import MyPath from "../../MyPath"
import Projects from "../../Projects"
import Contact from "../../Contact"
import Experience from "../../Experience"

function CVDesktop() {

    const [selektovano, setSelektovano] = useState(0)

    return (
    <div className={styles.container}>  
        <div className={styles.profilePicture}>
            <Image src={ProfilePicture} layout='fill' objectFit='cover' />   
            <div className={styles.myName}>
                <div>Alma</div>
                <div>Janjoš</div>
            </div>    
        </div>
        <div className={styles.rightSide}>
            <header className={styles.header}>
                <Image src={Logo} width={44} height={44} className={styles.logo}/>        
                <nav className={styles.nav}>
                    <div onClick={() => setSelektovano(0)}>O meni</div>
                    <div onClick={() => setSelektovano(1)}>Moj put</div>
                    <div onClick={() => setSelektovano(2)}>Iskustvo</div>
                    <div onClick={() => setSelektovano(3)}>Projekti</div>
                    <div onClick={() => setSelektovano(4)}>Kontakt</div>    
                </nav>
            </header> 
            <div className={styles.aboutMe}>
                {selektovano === 0 && <AboutMe />}
                {selektovano == 1 && <MyPath />}
                {selektovano == 2 && <Experience />}
                {selektovano == 3 && <Projects />}
                {selektovano == 4 && <Contact />}    
            </div>
        </div>
    </div>
    )
}

export default CVDesktop