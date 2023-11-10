import React from 'react'
import styles from './Media.module.css'
import Investment from '../../components/InvestmentOpp/Investment'
import mediascreen from '../../images/media/mediascreen.jpg'
import Heading from '../../components/Heading/Heading'
import Testimonial from '../../resuable/testimonials/Testimonial'
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight'
import board from '../../images/home/board.jpg'
import { Link } from 'react-router-dom'

const Media = () => {
    return (
        <>
            <Investment
                backgroundImage={mediascreen}
                heading1="media center"
                // heading2="contact us"
                sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
                button="get started"
            />
            <Heading
                heading1="Partner with AL-MUDAYFER"
                heading2="News"
                description1="The most important developments about and about the group."
            />
            <Testimonial />
            <Link to='/'>
                <div className={styles.read_more}>
                    read more
                </div>
            </Link>

            <div className={styles.media_kit}>
                <div className={styles.left}>
                    <img src={board} alt="" />
                </div>
                <div className={styles.right}>
                    <div className={styles.right_heading}>media kit</div>
                    <div className={styles.right_sub_heading}>Logo</div>
                    <div className={styles.right_sub_heading}>Assets</div>
                    <div className={styles.right_sub_heading}>Management</div>
                    <Link to='/contact'>
                        <div className={styles.right_button}>open media kit</div>
                    </Link>
                </div>
            </div>

            <div className={styles.media_relaionship}>
                <div className={styles.left}>
                    <div className={styles.left_heading}>
                        MEDIA RELATIONSHIP
                    </div>
                    <div className={styles.left_subheading}>
                        You can be assured of reliable sources from the Al-Mudayfer group by contacting us.
                    </div>
                    <Link to="/contact">
                        <div className={styles.left_button}>contact</div>
                    </Link>
                </div>
                <div className={styles.right}>
                    <img src={board} alt="" />
                </div>
            </div>


            <div className={styles.blue_board}>
                <div className={styles.heading}>with al-MUDAYFER</div>
                <div className={styles.sub_heading}>press release</div>

                <div className={styles.white_board}>
                    <div className={styles.white_heading}>
                        Quality, Reliability, Leadership
                    </div>
                    <div className={styles.white_sub_heading}>
                        We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                    </div>
                </div>
            </div>

        </>
    )
}

export default Media