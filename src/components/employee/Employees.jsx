import { Employee } from './Employee';
import { employeeData } from '../../data/employeeData';
import styles from './Employees.module.css';

export const Employees = () => {


    return (
        <>
            <div className={styles.employeesContainer}>
                {employeeData.map(employee => {
                    return (
                        <Employee employee={employee} key={employee.name}/>
                    )
                })}
            </div>
        </>
    )
}