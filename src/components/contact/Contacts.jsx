import styles from './Contacts.module.css';
import email from '../../../public/images/contact/emailContact.png';
import phone from '../../../public/images/contact/phoneContact.png';
import chat from '../../../public/images/contact/chatContact.png';
import { motion } from 'framer-motion';


export const Contacts = () => {
    return (
        <>
            <h2 id={styles.contactHeader}>Contact Us</h2>
            <div className={styles.contactCardsContainer}>
                <motion.article className={styles.contactCardContainer}
                    initial={{opacity: 0, translateY: 50}}
                    animate={{opacity: 1, translateY: 0}}
                    transition={{duration: 0.3, delay: 0.05}}
                >
                    <img src={phone} />
                    <h4>Give Us A Call</h4>
                    <p>Give us a call at <strong>123-456-7890</strong> for any support or questions</p>
                </motion.article>

                <motion.article className={styles.contactCardContainer}
                    initial={{opacity: 0, translateY: 50}}
                    animate={{opacity: 1, translateY: 0}}
                    transition={{duration: 0.3, delay: 0.15}}
                >
                    <img src={email} />
                    <h4>Shoot us an email</h4>
                    <p>Shoot us an email about any questions ya got at <strong>fakeemailforreal@gmail.com</strong></p>
                </motion.article>

                <motion.article className={styles.contactCardContainer}
                    initial={{opacity: 0, translateY: 50}}
                    animate={{opacity: 1, translateY: 0}}
                    transition={{duration: 0.3, delay: 0.30}}
                >
                    <img src={chat} />
                    <h4>Live Chat</h4>
                    <p>Chat with one of our in-house members about any questions or issues</p>
                    <button>Live Chat</button>
                </motion.article>
            </div>
        </>
    )
}