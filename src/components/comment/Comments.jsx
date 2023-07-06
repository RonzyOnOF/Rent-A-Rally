
import styles from './Comments.module.css';
import { reviews } from '../../data/reviews';
import { Comment } from './Comment';

export const Comments = () => {

    return (
        <>
            <h4 id={styles.header}>Customer Tesimonials</h4>
            <div className={styles.commentsContainer}>
                {reviews.map(review => {
                    return (
                        <Comment pfp={review.image} name={review.name} text={review.text} />
                    )
                })}
            </div>
        </>
    )
}