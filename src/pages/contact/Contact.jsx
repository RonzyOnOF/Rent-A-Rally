import styles from './Contact.module.css';
import { Contacts } from '../../components/contact/Contacts';
import bottomSplash from '../../../public/images/background/bottomSplash2.png';
import topSplash from '../../../public/images/background/topSplash2.png';

export const Contact = () => {
    return (
        <>  <div className={styles.contactPageContainer}>
                <Contacts />
                <img id={styles.bottomSplash} src={bottomSplash} />
                <img id={styles.topSplash} src={topSplash} />
            </div>
        </>
    )
}