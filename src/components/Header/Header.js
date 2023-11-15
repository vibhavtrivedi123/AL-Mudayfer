
import Hamburger from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";



import logo from '../../images/logo0.svg'
import styles from './Header.module.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const LinkWithScrollToTop = ({ to, children }) => (
        <Link to={to} onClick={scrollToTop}>
            {children}
        </Link>
    );
    const toggleMobileMenu = () => {
        setOpen(!open);
    }


    return (
        <>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <LinkWithScrollToTop to="/">
                        <img src={logo} alt="" />
                    </LinkWithScrollToTop>
                </div>

                <div className={styles.links}>
                    <LinkWithScrollToTop to="/">
                        <div className={styles.link}>Home</div>
                    </LinkWithScrollToTop>
                    <LinkWithScrollToTop to="/about">
                        <div className={styles.link}>About</div>
                    </LinkWithScrollToTop>

                    <LinkWithScrollToTop to="/investment">
                        <div className={styles.link}>our investments</div>
                    </LinkWithScrollToTop>

                    <LinkWithScrollToTop to="/join" >
                        <div className={styles.link}>Join us</div>
                    </LinkWithScrollToTop>

                    <LinkWithScrollToTop to="/media" >
                        <div className={styles.link}>media</div>
                    </LinkWithScrollToTop>

                    <div
                        className={styles.dropdownContainer}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={styles.link}>
                            <FaGlobe /> {" "}
                            {isDropdownOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
                        </div>
                        {isDropdownOpen && (
                            <div className={styles.dropdownContent}>
                                {/* <div className={styles.dropdown_link}>español</div> */}
                                <div className={styles.dropdown_link}>اردو</div>
                                <div className={styles.dropdown_link}>English</div>
                            </div>
                        )}
                    </div>
                </div>

                <LinkWithScrollToTop to="/contact">
                    <div className={styles.button}>
                        contact us
                    </div>
                </LinkWithScrollToTop>
            </div>


            {/* mobile view */}
            <div className={styles.mobile_container}>

                <div className={styles.top}>
                    <div className={styles.left_mobile}>
                        <a href="/">
                            <img src={logo} alt="" />
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
                            <a href="/">
                                <div className={styles.mobile_link}>Home</div>
                            </a>
                            <a href="/about">
                                <div className={styles.mobile_link}>About</div>
                            </a>
                            <a href="/investment">
                                <div className={styles.mobile_link}>our investment</div>
                            </a>
                            <a href="/join">
                                <div className={styles.mobile_link}>join us</div>
                            </a>
                            <a href="/media">
                                <div className={styles.mobile_link}>media</div>
                            </a>
                            <a href="/contact">
                                <div className={styles.mobile_link}>Contact Us</div>
                            </a>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Header