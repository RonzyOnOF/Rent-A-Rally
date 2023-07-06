import other from '../../../public/images/hondaCoverFinal.png';
import smallCivic from '../../../public/images/smallCivicCover.png';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

import { Steps } from '../../components/steps/Steps';
import { WhyUs } from '../../components/whyUs/WhyUs';
import { Comments } from '../../components/comment/Comments';
export const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.frontCover} >
                <div className={styles.frontText}>
                    <p id={styles.coverText}>Rent as little as <strong>$25/day</strong></p>
                    <button onClick={() => navigate('/cars')}>See Cars</button>
                </div>
                <img id={styles.hondaCover} src={other} />
            </div>
            <Steps />
            <WhyUs />
            <Comments />
        </>
    )
}