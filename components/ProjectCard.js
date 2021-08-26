import Image from "next/image"
import styles from "../styles/ProjectCard.module.scss"


function ProjectCard(props) {
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <div className={styles.card}>
                {/* <div className={styles.cardImage}> */}
                    {props.image?
                        <Image
                            className={styles.cardImage}
                            src={props.image}
                            alt={props.title}
                        />:
                        <h3></h3>
                    }
                {/* </div> */}
                <div className={styles.cardText}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>


            </div>
        </a>
    )
}


export default ProjectCard