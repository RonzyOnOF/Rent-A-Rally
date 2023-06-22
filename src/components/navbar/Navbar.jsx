import { NavLink } from 'react-router-dom';
import logo from '../../../public/images/logo3.png';
import styles from './Navbar.module.css';
import { useState } from 'react';

export const Navbar = () => {

    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
    
    const handleClick = () => {
        setIsHamburgerClicked(!isHamburgerClicked);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <li><NavLink to='/'><img src={logo} /></NavLink></li>
                <ul className={isHamburgerClicked ? styles.listActive : styles.list}>
                    <li id={styles.listItem}><NavLink to='cars'>Cars</NavLink></li>
                    <li id={styles.listItem}><NavLink to='team'>Our Team</NavLink></li>
                    <li id={styles.listItem}><NavLink to='contact'>Contact</NavLink></li>
                    <li id={styles.listItem}><NavLink to='about'>About</NavLink></li>
                </ul>
                <div className={isHamburgerClicked ? styles.hamburgerActive : styles.hamburger} onClick={handleClick}>
                    <span className={styles.bar}></span>  
                    <span className={styles.bar}></span> 
                    <span className={styles.bar}></span> 
                </div>
            </nav>
        </>

        
    )
}