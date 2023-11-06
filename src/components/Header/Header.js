
import Hamburger from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'

import logo from '../../images/logo0.svg'
import styles from './Header.module.css'

const Header = () => {

    const [open, setOpen] = useState(false);
    const toggleMobileMenu = () => {
        setOpen(!open); // Toggle the state when the hamburger icon is clicked
    };

    return (
        <>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className={styles.links}>
                    <Link to="/about">
                        <div className={styles.link}>About</div>
                    </Link>
                    <Link to="/investment">
                        <div className={styles.link}>our investments</div>
                    </Link>
                    <Link to="/join">
                        <div className={styles.link}>Join us</div>
                    </Link>
                    <Link to="/media">
                        <div className={styles.link}>media</div>
                    </Link>
                </div>

                <div className={styles.button}>
                    <Link to="/contact">
                        contact us
                    </Link>
                </div>
            </div>


            {/* mobile view */}
            {/* <div className={styles.mobile_container}>

                    <div className={styles.top}>
                        <div className={styles.left_mobile}>
                            <a href="/">
                                <img src="./images/logo.svg" alt="" />
                            </a>
                        </div>
                        <button onClick={toggleMobileMenu}>
                            <div className={styles.right_mobile}>
                                <Hamburger toggled={open} toggle={setOpen} />
                            </div>
                        </button>
                    </div>
                    {
                        open &&
                        <>
                            <div div className={styles.bottom} onClick={toggleMobileMenu}>
                                <a href="#aboutmobile"><div className={styles.mobile_link}>About us</div></a>
                                <a href="#vision"><div className={styles.mobile_link}>our vision</div></a>
                                <a href="#service"><div className={styles.mobile_link}>services</div></a>
                                <a href="#value"><div className={styles.mobile_link}>our values</div></a>
                                <a href="#newsletter"><div className={styles.mobile_link}>Contact Us</div></a>
                            </div>
                        </>

                    }
                </div> */}
        </>
    )
}

export default Header