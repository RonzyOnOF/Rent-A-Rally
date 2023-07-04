import styles from './Team.module.css';

import { Employees } from '../../components/employee/Employees';

export const Team = () => {
    return (
        <>
            <div className={styles.teamPageContainer}>
                <h2>Meet Our Team</h2>
                <Employees />
            </div>
        </>
    )
}