
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import Nav from '../Nav';
import styles from './styles.module.scss';

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    return (
        <header className={styles.header}>
            <img className={styles.icon} onClick={() => setShowNav(!showNav)} src={showNav ? closeIcon : menuIcon} alt="" />
            <img className={styles.logo} src={Logo} alt="" />

            {
                showNav &&
                <Nav />
            }
        </header>



    )
}