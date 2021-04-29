import React from 'react';
import styles from './Call.module.scss';

const Call = () => {
    return (
        <div className={styles.container}>
            <h2>Get prepared before our call</h2>
            <p>Required Documents & Procedures </p>
            <div className={styles.instructions}>
                <div className={styles.instruction}>
                    <span className={styles.icon}></span>
                    <p>The car must be brought in good working condition</p>
                </div>
                <div className={styles.instruction}>
                    <span className={styles.icon}></span>
                    <p>The car must be brought in good working condition</p>
                </div>
                <div className={styles.instruction}>
                    <span className={styles.icon}></span>
                    <p>The car must be brought in good working condition</p>
                </div>
                <div className={styles.instruction}>
                    <span className={styles.icon}></span>
                    <p>If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion</p>
                </div>
                <div className={styles.instruction}>
                    <span className={styles.icon}></span>
                    <p>If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion</p>
                </div>
                <div className={styles.instruction}>
                    <span className={styles.icon}></span>
                    <p>If the item is sold, the check will be deposit in your bank account after 10 working days from the time of auction’s conclusion</p>
                </div>
                <div className={styles.instruction}>
                    <span className={styles.icon}></span>
                    <p>We'll do a comprehensive test (AED 300 is the cost).</p>
                </div>
                <div className={styles.instruction}>
                    <span className={styles.icon}></span>
                    <p>The car must be brought in good working condition</p>
                </div>
            </div>
        </div>
    )
}

export default Call;
