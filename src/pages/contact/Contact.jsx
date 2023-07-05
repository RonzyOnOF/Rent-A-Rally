import styles from './Contact.module.css';
import { Contacts } from '../../components/contact/Contacts';


export const Contact = () => {
    return (
        <>  <div className={styles.contactPageContainer}>
                <Contacts />
            </div>
        </>
    )
}