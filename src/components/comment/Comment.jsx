
import styles from './Comment.module.css';
import quotes from '../../../public/images/background/left-quotes-sign.png';

export const Comment = ({ pfp, text, name }) => {

    return (
        <>
            <div className={styles.commentContainer}>
                <div className={styles.commentImage}>
                    <img id={styles.pfp} src={pfp} />
                </div>
                <div className={styles.commentBody}>
                    <h4>{name}</h4>
                    <p>{text}</p>
                </div>
                <img id={styles.quotes} src={quotes} />
            </div>
        </>
    )
}