import React from 'react'
import styles from './Ourvalue.module.css';

// import value from ''

const OurValues = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>our values</div>
          <div className={styles.sub_heading}>our vision</div>
        </div>
        <div className={styles.right}>

          <div className={styles.right_line}></div>
          <div className={styles.right_heading}>Quality, Reliability, Leadership</div>
          <div className={styles.right_sub_heading}>We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.</div>
        </div>
      </div>
    </>
  )
}

export default OurValues