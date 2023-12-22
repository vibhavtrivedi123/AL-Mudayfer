import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import styles from './Investment.module.css';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';



const Investment = ({ backgroundImage, heading1, heading2, sub_heading, button ,page  }) => {

     const {id} = useParams()
  
     
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };


    const eployeentDEsc = " Joining the work community of Saleh Al-Mudaifer Sons Holding Group companies is  an opportunity that we are proud to offer to Saudi youth of all abilities and   backgrounds, as the group’s work is diverse. We consider those working with us as   our extended family in an ideal work environment that guarantees obtaining many job   benefits and practical experiences."
    
    const investerDEsc = " Integration in the commercial market is an important requirement, especially between  the producer and the investor who wants to benefit from his experience and work in  marketing products by obtaining an important role as a wholesale and retail trader."

    const { t } = useTranslation();
  
    return (
        <>
            <div className={styles.container} >
                <div className={styles.background_image} style={backgroundStyle}>
                    <div className={styles.content}>
                        {
                            page === "join" ? 
                            <div className={styles.heading} style={{textTransform:'capitalize'}}>{`Join As ${id}`}</div>
                             :
                            <div className={styles.heading} style={{textTransform:'capitalize'}}>{t(`${page}.investment.heading1`)}</div>

                        }
                        {(page !== "invest" && page !== "join" &&  page !== "media" && page !== "SaudiPlayer_polishingMaterials"  && page!== "Omrania_landTransport" && page!=="Omrania_logisticSupport"   && page !== "omraniaCrusher" )  && <div className={styles.heading} style={{textTransform:'capitalize'}}>{ t(`${page}.investment.heading2`)}</div>}
                        <div className={styles.heading_line}></div>
                        <div className={styles.sub_heading}>  {id === "employee" ? eployeentDEsc : (id === "investor" ? investerDEsc : t(`${page}.investment.sub_heading`))}</div>
                      

                      {
                        page == "join" ? 
                        <a href="#formSection" > 
                       
                        <div className={styles.button}>{t(`${page}.investment.button`)}<BsArrowRight /></div>
                        </a> 
                        :

                        <a href="#homePartner" > 
                       
                        <div className={styles.button}>{t(`${page}.investment.button`)}<BsArrowRight /></div>
                        </a> 
                      }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Investment