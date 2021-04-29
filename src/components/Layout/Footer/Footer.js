import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../../images/logo.png';
import facebook from '../../../images/facebook.png'
import twitter from '../../../images/twitter.png'
import youtube from '../../../images/youtube.png'
import instagram from '../../../images/instagram.png'
import googlePlus from '../../../images/googlePlus.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.section}>
                <img src={logo} alt="logo" />
                <p className={styles.gray}>
                    Buy new and used cars in UAE, shipping and delivery service are available, 
                    Sell your car at the highest price online with no worries visiting cars show rooms.
                </p>
            </div>
            <div className={styles.section}>
                <h4>
                    Follow the first and the largest online auction in UAE and Middle East 
                </h4>
                <div className={styles['social-media']}>
                    <a href="#">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a href="#">
                        <img src={youtube} alt="youtube" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="#">
                        <img src={googlePlus} alt="googlePlus" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
