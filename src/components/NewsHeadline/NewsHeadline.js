import React from 'react'
import styles from './NewsHealdine.module.css';
// import boy from '../../images/boy.svg';
// import man from '../../images/man.svg'
// import woman from '../../images/woman.svg';

const NewsHealdine = () => {
  return (
    <>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <img src='https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg' alt="" />
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
          {/* <div className={styles.top}>
            <img src='https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg' alt="" />
          </div>
          <div className={styles.bottom}>
            <img src='https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg' alt="" />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default NewsHealdine