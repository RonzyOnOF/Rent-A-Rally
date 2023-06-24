import other from '../../../public/images/hondaCoverFinal.png';
import smallCivic from '../../../public/images/smallCivicCover.png';
import styles from './Home.module.css';

import { Steps } from '../../components/steps/Steps';


export const Home = () => {


    return (
        <>
            <div className={styles.frontCover} >
                <p id={styles.coverText}>Rent as little as <strong>$35/day</strong></p>
                <img id={styles.hondaCover} src={other} />
            </div>
            <Steps />
        </>
    )
}