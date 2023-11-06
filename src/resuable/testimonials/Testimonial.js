import React from 'react'
import styles from './Testimonial.module.css'
import girls from '../../images/girls.jpg'

const Testimonial = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.main_container}>
          <div className={styles.top}>
            <div className={styles.date}>october 28, 2003</div>
            <div className={styles.headline}>
              the contruction experts.
            </div>
          </div>
          <div className={styles.bottom}>
            read more
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.main_container}>
          <div className={styles.top}>
            <div className={styles.date}>october 28, 2003</div>
            <div className={styles.headline}>
              the contruction experts.
            </div>
          </div>
          <div className={styles.bottom}>
            read more
            <div className={styles.line}></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Testimonial