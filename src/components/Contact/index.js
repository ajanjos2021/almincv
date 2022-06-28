import styles from "./styles.module.css";


function Contact() {

    return (
        <div>
            <div>
                <span className={styles.info}>Email:</span> aalmajanjos@gmail.com (2a nije greska)</div>
            <div>
                <span className={styles.info}>LinkedIn: </span>
                <a target="_blank"
                    rel="noopener noreferrer"
                >Alma Janjoš</a></div>
        </div>
    )
}

export default Contact