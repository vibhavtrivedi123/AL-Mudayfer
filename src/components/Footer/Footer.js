import React from 'react'
import styles from './Footer.module.css';
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.main_line}>
                        Saleh AL-Mudaifer Sons Holding Company (investment in building the nation),  a Saudi Company
                    </div>
                    <div className={styles.footer_container}>
                        <div className={styles.left}>
                            <div className={styles.logo}>
                                <img src="https://customers.seomanager.com/knowledgegraph/logo/loogguitars_myshopify_com_logo.jpg" alt="" />
                            </div>
                            <div className={styles.left_box}>
                                <div className={styles.tag_line}>ALWAYS BE WITH US</div>
                                <div className={styles.phone}>
                                    <BsFillTelephoneFill /> Phone : 800-286-2915
                                </div>
                                <div className={styles.phone}>
                                    <MdEmail /> Email : info@segalebros.com
                                </div>
                            </div>

                            <div className={styles.icons}>
                                <div className={styles.icon}>
                                    <AiOutlineTwitter />
                                </div>
                                <div className={styles.icon}>
                                    <AiOutlineTwitter />
                                </div>
                                <div className={styles.icon}>
                                    <AiOutlineTwitter />
                                </div>
                                <div className={styles.icon}>
                                    <AiOutlineTwitter />
                                </div>
                            </div>
                        </div>

                        <div className={styles.right}>
                            <div className={styles.right_company}>
                                <div className={styles.right_company_heading}>Company</div>
                                <div className={styles.right_company_content}>
                                    About AL-Mudaifer
                                </div>
                                <div className={styles.right_company_content}>
                                    About AL-Mudaifer
                                </div>
                                <div className={styles.right_company_content}>
                                    About AL-Mudaifer
                                </div>
                                <div className={styles.right_company_content}>
                                    Environmental Responsibility
                                </div>
                                <div className={styles.right_company_content}>
                                    About AL-Mudaifer
                                </div>
                                <div className={styles.right_company_content}>
                                    Environmental Responsibility
                                </div>
                            </div>

                            <div className={styles.right_company}>
                                <div className={styles.right_company_heading}>Company</div>
                                <div className={styles.right_company_content}>
                                    About AL-Mudaifer
                                </div>
                                <div className={styles.right_company_content}>
                                    About AL-Mudaifer
                                </div>
                                <div className={styles.right_company_content}>
                                    About AL-Mudaifer
                                </div>
                                <div className={styles.right_company_content}>
                                    About AL-Mudaifer
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer