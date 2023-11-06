import React from 'react'
import styles from './Card.module.css';
import message from '../../images/about/message.svg'
import vision from '../../images/about/vision.svg'

const Card = () => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={vision} alt="" />
                    </div>
                    <div className={styles.heading}>
                        our vision
                    </div>
                    <div className={styles.sub_heading}>
                        Continuous development to maintain a prominent brand in the field of construction in order to continue to lead and provide a national product with high efficiency.
                    </div>
                </div>


                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={message} alt="" />
                    </div>
                    <div className={styles.heading}>
                        our vision
                    </div>
                    <div className={styles.sub_heading}>
                        Continuous development to maintain a prominent brand in the field of construction in order to continue to lead and provide a national product with high efficiency.
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card