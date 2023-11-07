import React from 'react'
import styles from './Footer.module.css';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import logo from '../../images/logo0.svg'


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
                                <img src={logo} alt="" />
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
                                    <BiLogoFacebook />
                                </div>
                                <div className={styles.icon}>
                                    <BsInstagram />
                                </div>
                                <div className={styles.icon}>
                                    <AiFillGithub />
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
                                    Vision and Mission
                                </div>
                                <div className={styles.right_company_content}>
                                    Our History
                                </div>
                                <div className={styles.right_company_content}>
                                    Social Responsibility
                                </div>
                                <div className={styles.right_company_content}>
                                    Environmental Responsibility
                                </div>
                                <div className={styles.right_company_content}>
                                    National Responsibility
                                </div>
                            </div>

                            <div className={styles.right_company}>
                                <div className={styles.right_company_heading}>Company</div>
                                <div className={styles.right_company_content}>
                                    Our Investments
                                </div>
                                <div className={styles.right_company_content}>
                                    Invest with us
                                </div>
                                <div className={styles.right_company_content}>
                                    Join as a Supplier
                                </div>
                                <div className={styles.right_company_content}>
                                    Join as a Client
                                </div>
                                <div className={styles.right_company_content}>
                                    Join as an Employee
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