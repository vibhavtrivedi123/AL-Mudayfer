import React from 'react'
import styles from './Testimonial.module.css'
import girls from '../../images/girls.jpg'
import { Link } from 'react-router-dom'

const Testimonial = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.const_container}>
          <div className={styles.top}>
            <div className={styles.date}>october 28, 2003</div>
            <div className={styles.headline}>
              the contruction experts.
            </div>
          </div>
          <div className={styles.bottom}>
            <Link to='/contact'>
              read more
            </Link>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.girl_container}>
          <div className={styles.top}>
            <div className={styles.date}>october 28, 2003</div>
            <div className={styles.headline}>
              the contruction experts.
            </div>
          </div>
          <div className={styles.bottom}>
            <Link to='/contact'>
              read more
            </Link>
            <div className={styles.line}></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Testimonial