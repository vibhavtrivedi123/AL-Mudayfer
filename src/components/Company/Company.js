import React from 'react'
import styles from './Company.module.css'
import { BsArrowRight } from 'react-icons/bs';

const Company = ({ backgroundImage, heading1, heading2, sub_heading, button }) => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.background_image} style={backgroundStyle}>
                    <div className={styles.content}>
                        <div className={styles.heading}>{heading1}</div>
                        <div className={styles.heading}>{heading2}</div>
                        <div className={styles.heading_line}></div>
                        <div className={styles.sub_heading}>{sub_heading}</div>
                        <div className={styles.button}>{button} <BsArrowRight /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company