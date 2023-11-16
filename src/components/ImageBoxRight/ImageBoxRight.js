import React from 'react'
import styles from './ImageBox.module.css';
import { Link } from 'react-router-dom'

const ImageBoxRight = ({ imageSrc, heading, text, buttonText }) => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.right}>
                    <div className={styles.right_heading}>
                        {heading} 
                        <div className={styles.right_line}></div>
                    </div>
                    <div className={styles.right_text}>{text}</div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>{buttonText}</div>
                    </Link>
                </div>

                <div className={styles.left}>
                    {/* <img src='https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg' alt="" /> */}
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        </>
    )
}

export default ImageBoxRight