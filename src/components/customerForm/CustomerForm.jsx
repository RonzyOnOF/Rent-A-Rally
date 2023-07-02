import styles from './CustomerForm.module.css';

export const CustomerForm = () => {
    return (
        <>
            <form className={styles.customerForm}>
                <input type='text' placeholder='First Name'></input>
                <input type='text' placeholder='Last Name'></input>
                <input type='text' placeholder='Email'></input>
            </form>
        </>
    )
}