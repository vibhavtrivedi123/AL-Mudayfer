import React from 'react'
import styles from './ImageBox.module.css';

const Experience62 = ({ imageSrc, heading, text, buttonText }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    {/* <img src='https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg' alt="" /> */}
                    <img src={imageSrc} alt="" />
                </div>
                <div className={styles.right}>
                    <div className={styles.right_heading}>{heading}</div>
                    <div className={styles.right_text}>{text}</div>
                    <div className={styles.right_button}>{buttonText}</div>
                </div>
            </div>
        </>
    )
}

export default Experience62