import React from 'react';
import logo from '../../../images/logo.png'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles['header-container']}>
            <img src={logo} className={styles.logo} alt="logo" />
            <button className={styles['lang-btn']} type="button">العربية</button>
        </div>
    )
}

export default Header
