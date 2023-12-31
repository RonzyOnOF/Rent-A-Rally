import { NavLink } from 'react-router-dom';
import logo from '../../images/logo3.png';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

export const Navbar = () => {

    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
    const [width, setWidth] = useState();

    const getWidth = () => {
        return window.innerWidth;
    }

    useEffect(() => {
        function handleResize() {
            setWidth(getWidth());
          }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const handleClick = () => {
        setIsHamburgerClicked(!isHamburgerClicked);
    }

    if(isHamburgerClicked && width >= 768) {
        setIsHamburgerClicked(false);
    }


    return (
        <>
            <nav className={styles.navbar}>
                <li><NavLink to='/' onClick={handleClick}><img src={logo} /></NavLink></li>
                <ul className={isHamburgerClicked ? styles.listActive : styles.list}>
                    <li id={styles.listItem} ><NavLink to='cars' className={ ({ isActive }) => isActive ? styles.activeNav : styles.inactiveNav}>Cars</NavLink></li>
                    <li id={styles.listItem} ><NavLink to='team' className={ ({ isActive }) => isActive ? styles.activeNav : styles.inactiveNav}>Our Team</NavLink></li>
                    <li id={styles.listItem} ><NavLink to='contact' className={ ({ isActive }) => isActive ? styles.activeNav : styles.inactiveNav}>Contact</NavLink></li>
                    <li id={styles.listItem} ><NavLink to='about' className={ ({ isActive }) => isActive ? styles.activeNav : styles.inactiveNav}>About</NavLink></li>
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