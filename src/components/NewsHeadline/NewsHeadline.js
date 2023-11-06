import React from 'react'
import styles from './NewsHealdine.module.css';
import build0 from '../../images/home/building0.jpg';
import build1 from '../../images/home/building1.jpg';
import build2 from '../../images/home/building2.jpg';

const NewsHealdine = () => {
  return (
    <>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <img src={build0} alt="" />
          <div className={styles.content}>
            <div className={styles.content_heading}>News Headline</div>
            <div className={styles.content_sub_heading}>
              We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
            </div>
            <div className={styles.content_button}>Read More</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.top}>
            <img src={build1} alt="" />
          </div>
          <div className={styles.bottom}>
            <img src={build2} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsHealdine