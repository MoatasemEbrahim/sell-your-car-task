import React from 'react';
import ReactPlayer from 'react-player';
import CarForm from './CarForm/CarForm';
import styles from './StartToday.module.scss';

const StartToday = () => {
    return (
        <div className={styles.container}>
            <h2>Start today!</h2>
            <p className={styles.gray}>You are just one click away from selling your car.</p>
            <div className={styles.section}>
                <div className={styles['support-container']}>
                    <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    <h2>
                        Why you should sell your car with us?
                    </h2>
                    <p>
                        We support you from start to finish 
                    </p>
                    <p className={`${styles.gray} ${styles.small}`}>
                        We have streamlined the process to sell your car online for quick payment to get your free cash offer.  
                    </p>
                    <p className={`${styles.gray} ${styles.small}`}>
                        Ready to sell your car?
                    </p>
                </div>
                <div className={styles['form-container']}>
                    <CarForm />
                </div>
            </div>
        </div>
    )
}

export default StartToday
