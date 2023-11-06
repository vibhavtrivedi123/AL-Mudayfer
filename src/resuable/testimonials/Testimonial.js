import React from 'react'
import girl from '../../images/about/block.jpg'

const Testimonial = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.date}></div>
                <div className={styles.headline}></div>
            </div>
            <div className={styles.bottom}>
                read more
            </div>
        </div>
    </>
  )
}

export default Testimonial