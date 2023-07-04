import styles from './Employee.module.css';

export const Employee = ({ employee }) => {


    return (
        <>
            <article className={styles.employeeContainer}>
                <img src={employee.pfp}/>
                <h3>{employee.name}</h3>
                <p>{employee.jobTitle}</p>
            </article>
        </>
    )
}