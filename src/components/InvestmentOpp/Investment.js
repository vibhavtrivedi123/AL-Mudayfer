import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import styles from './Investment.module.css';
import { useTranslation } from 'react-i18next';



const Investment = ({ backgroundImage, heading1, heading2, sub_heading, button ,page  }) => {

  
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    

    const { t } = useTranslation();
   
    return (
        <>
            <div className={styles.container}>
                <div className={styles.background_image} style={backgroundStyle}>
                    <div className={styles.content}>
                        <div className={styles.heading}>{t(`${page}.investment.heading1`)}</div>
                        {(page !== "invest" && page !== "join" &&  page !== "media" && page !== "SaudiPlayer_polishingMaterials"  && page!== "Omrania_landTransport" && page!=="Omrania_logisticSupport" )  && <div className={styles.heading}>{t(`${page}.investment.heading2`)}</div>}
                        <div className={styles.heading_line}></div>
                        <div className={styles.sub_heading}>{t(`${page}.investment.sub_heading`)}</div>
                        <div className={styles.button}>{t(`${page}.investment.button`)}<BsArrowRight /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Investment