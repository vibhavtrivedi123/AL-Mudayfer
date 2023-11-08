import React from 'react'
import styles from './ImageBox.module.css';

import { Link } from 'react-router-dom'

const ImageBoxLeft = ({ imageSrc, heading, text, buttonText }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={imageSrc} alt="" />
                </div>
                <div className={styles.right}>
                    <div className={styles.right_heading}>{heading}</div>
                    <div className={styles.right_text}>{text}</div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>{buttonText}</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ImageBoxLeft