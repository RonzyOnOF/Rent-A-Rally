import styles from './Team.module.css';

import { Employees } from '../../components/employee/Employees';

export const Team = () => {
    return (
        <>
            <h2 id={styles.teamHeader}>Meet Our Team</h2>
            <div className={styles.teamPageContainer}>
                <Employees />
            </div>
        </>
    )
}