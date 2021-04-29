import React from 'react';
import styles from './Documentation.module.scss';

const Documentation = () => {
    return (
        <div className={styles.container}>
            <h2>Required Documentation</h2>
            <div className={styles.documentations}>
                <h3>
                    Emirates ID
                </h3>
                <h3>
                    Possession certificate
                </h3>
                <h3>
                    Bank account details
                </h3>
            </div>
        </div>
    )
}

export default Documentation
