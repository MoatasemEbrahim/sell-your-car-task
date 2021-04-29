import React from 'react';
import styles from './OurServices.module.scss';
import documentImage from '../../images/text.png';
import starImage from '../../images/star.png';
import timeImage from '../../images/time.png';

const OurServices = () => {
    return (
        <div className={styles.container}>
            <h2>Why use our services?</h2>
            <p>We operates  24 hour/7 day-a-week telephone,
             email & remote support services that is staffed to handle any issue or question </p>
             <div className={styles.services}>
                <div className={styles.service}>
                    <img className={styles.icon} src={documentImage} alt="document" />
                    <div className={styles.description}>
                        <h4>
                            Easy Process
                        </h4>
                        <p>
                            We help you save time and effort. We master how to sell a car privately and have simplified the process of selling a vehicle to make it hassle-free.
                        </p>
                    </div>
                </div>
                <div className={styles.service}>
                    <img className={styles.icon} src={starImage} alt="document" />
                    <div className={styles.description}>
                        <h4>
                            Get The Best Return
                        </h4>
                        <p>
                            Get the most money for your car. Reach serious buyers. Avoid lowball offers. Use our valuation tools for a better price when selling your car.
                        </p>
                    </div>
                </div>
                <div className={styles.service}>
                    <img className={styles.icon} src={timeImage} alt="document" />
                    <div className={styles.description}>
                        <h4>
                            Dedicated Team
                        </h4>
                        <p>
                            Our seller experts are here to help you at every step of the way via email, phone, or chat all the week days! They help you find real buyers for your car and finalize your deal fast.
                        </p>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default OurServices
