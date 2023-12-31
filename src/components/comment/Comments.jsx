
import styles from './Comments.module.css';
import { reviews } from '../../data/reviews';
import { Comment } from './Comment';

export const Comments = () => {

    return (
        <>
            <h4 id={styles.header}>Tesimonials</h4>
            <p id={styles.subHeader}>Hear it from some of our many clients</p>
            <div className={styles.commentsContainer}>
                {reviews.map(review => {
                    return (
                        <Comment pfp={review.image} name={review.name} text={review.text} key={review.name} />
                    )
                })}
            </div>
        </>
    )
}