import React from 'react'
import styles from './Trusted.module.css';
import company1 from '../../images/home/company1.jpg'
import company2 from '../../images/home/company2.jpg'
import company3 from '../../images/home/company3.jpg'
import company4 from '../../images/home/company4.jpg'
import company5 from '../../images/home/company5.jpg'
import company6 from '../../images/home/company6.jpg'

const Trusted = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>Trusted by 45M+ users</div>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <img src={company1} alt="" />
                    </div>
                    <div className={styles.image}>
                        <img src={company2} alt="" />
                    </div>
                    <div className={styles.image}>
                        <img src={company3} alt="" />
                    </div>
                    <div className={styles.image}>
                        <img src={company4} alt="" />
                    </div>
                    <div className={styles.image}>
                        <img src={company5} alt="" />
                    </div>
                    <div className={styles.image}>
                        <img src={company6} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trusted