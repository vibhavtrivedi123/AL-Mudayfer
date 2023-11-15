import React from 'react'
import styles from './Helper.module.css';

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";



const Helper_numbers = () => {
    return (
        <>
            <div className={styles.helper__container}>
                <div className={styles.helper__heading}>
                    WE ARE HAPPY TO 
                    <br />
                    COMMUNICATE WITH YOU
                </div>
                <div className={styles.tab}>
                    <FaPhoneAlt /> &nbsp; Phone : 920000116
                </div>
                <div className={styles.tab}>
                    <MdEmail /> &nbsp; Email: Info@smsh.com.sa
                </div>
                <div className={styles.tab}>
                    <RiWhatsappFill /> &nbsp;  Whatsapp: 966501906677
                </div>
            </div>
        </>
    )
}

export default Helper_numbers