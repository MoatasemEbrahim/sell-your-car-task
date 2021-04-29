import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={styles['banner-container']}>
            <div className={styles.titles}>
                <h2>Selling Your Car Now</h2>
                <h3>Is Easier than ever.</h3>
            </div>
            <button className={styles.btn}>Start today</button>
        </div>
    )
}

export default Banner
