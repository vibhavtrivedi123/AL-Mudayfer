import React from 'react'
import styles from './News.module.css'
import girls from '../../images/girls.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NewsCards = ({page}) => {

  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>

        <div className={styles.const_container}>
          <div className={styles.bottom}>
          <div className={styles.date}>{t(`media.testimonial.date`)}</div>
          <div className={styles.headline}> {t(`${page}.testimonial.headline`)} </div>
          <div className={styles.details}> {t(`${page}.testimonial.details`)} </div>
          <div className={styles.readmore}>
          <Link to='/contact'>
            {t(`${page}.testimonial.read_more`)}
            </Link>
          </div>
            
            <div className={styles.line}></div>
          </div>
        </div>


        

        {/* <div className={styles.girl_container}>
          <div className={styles.top}>
            <div className={styles.date}>{t(`${page}.testimonial.date`)}</div>
            <div className={styles.headline}>
            {t(`${page}.testimonial.headline`)}
            </div>
          </div>
          <div className={styles.bottom}>
            <Link to='/contact'>
            {t(`${page}.testimonial.read_more`)}
            </Link>
            <div className={styles.line}></div>
          </div>
        </div> */}

      </div>
    </>
  )
}

export default NewsCards