import React from 'react'
import styles from './Triplet.module.css'

import social from '../../images/about/social.jpg'
import national from '../../images/about/national.jpg'
import environmental from '../../images/about/environmental.jpg'
import { Link } from 'react-router-dom'

const Triplet = ({
    img1,
    img2,
    img3,
    heading1,
    description1,
    button
}) => {
    return (
        <>
            <div className={styles.container}>
                {/* LEFT */}
                <div className={styles.left}>
                    <img src={social} alt="" />
                    <div className={styles.content}>
                        <div className={styles.content_heading}>SOCIAL RESPONSIBILITY</div>
                        <div className={styles.content_sub_heading}>
                            Saleh Al-Mudaifer Sons Holding Group carries in its genes the love of doing good for others, working for everyone, and the culture of social responsibility, believing that it is from this country and to it and part of its interconnected society.
                        </div>
                        <Link to='/social'>
                            <div className={styles.content_button}>Learn More</div>
                        </Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    <div className={styles.top}>
                        <img src={national} alt="" />
                    </div>
                    <div className={styles.bottom}>
                        <img src={environmental} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Triplet