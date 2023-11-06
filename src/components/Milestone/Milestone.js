import React from 'react'
import styles from './Milestone.module.css';


const Milestone = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.heading}>29+</div>
                    <div className={styles.sub_heading}>Years in business</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.heading}>$3B</div>
                    <div className={styles.sub_heading}>in projects</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.heading}>$300M+</div>
                    <div className={styles.sub_heading}>spend per year</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.heading}>275+</div>
                    <div className={styles.sub_heading}>completed projects</div>
                </div>
            </div>
        </>
    )
}

export default Milestone