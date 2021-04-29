import React from 'react';
import styles from './Info.module.scss';

const Info = () => {
    return (
        <div className={styles['info-container']}>
            <div className={`${styles.section} ${styles.instructions}`}>
                <h2>How it works?</h2>
                <p>Sell Your Car in Three Simple Steps</p>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.num}>
                            1
                        </div>
                        <div className={styles.instruction}>
                            <h3>Submit Your Car</h3>
                            <p>Enter your car details for inspection on Emirates Auction.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.num}>
                            2
                        </div>
                        <div className={styles.instruction}>
                            <h3>Receive Valuation and Offer</h3>
                            <p>We will check your car and provide you with approved purchase price.</p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.num}>
                            3
                        </div>
                        <div className={styles.instruction}>
                            <h3>Get Your Payment</h3>
                            <p>After a price is agreed for your car, we will exchange cash on a day that suits you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.section} ${styles.bidding}`}>
                <div className={styles['bidding-labels']}>
                    <h2>Your car will be sold by bidding</h2>
                    <p>You set the starting price it will be sold for the highest bidder </p>
                </div>
            </div>
        </div>
    )
}

export default Info
