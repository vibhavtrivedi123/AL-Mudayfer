import React from 'react'
import styles from './Heading.module.css';


const Heading = ({
    heading1,
    heading2,
    description1,
    description2,
}) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading1}>{heading1}</div>
                <div className={styles.heading2}>{heading2}</div>
                {
                    description1 &&
                    <div div className={styles.description1}>{description1}</div>
                }
                {
                    description2 &&
                    <div className={styles.description2}>{description2}</div>
                }
            </div>
        </>
    )
}

export default Heading