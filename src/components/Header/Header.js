import Hamburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from "../../images/logo0.svg";
import styles from "./Header.module.css";
import i18next from "i18next";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const {t} = useTranslation()

  console.log(window.location.pathname);
  let path = window.location.pathname;

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(()=>{
    const storedLanguage = localStorage.getItem('i18nextLng');
    document.body.dir = storedLanguage === 'ar' ? 'rtl' : '';
  },[])

  

  const handleLanguageChange = (language) => {
    setDropdownOpen(false);
    document.body.dir = language === "ar" ? "rtl" : "";
    i18next.changeLanguage(language === "ar" ? "ar" : "en");
  };

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
  };

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
            <div className={styles.link}> {t('header.links.home')}</div>
          </LinkWithScrollToTop>
          <LinkWithScrollToTop to="/about">
            <div className={styles.link}>{t('header.links.about')}</div>
          </LinkWithScrollToTop>

          <LinkWithScrollToTop to="/investment">
            <div className={styles.link}>{t('header.links.ourInvestments')}</div>
          </LinkWithScrollToTop>

          <LinkWithScrollToTop to="/join">
            <div className={styles.link}>{t('header.links.joinUs')}</div>
          </LinkWithScrollToTop>

          <LinkWithScrollToTop to="/media">
            <div className={styles.link}>{t('header.links.media')}</div>
          </LinkWithScrollToTop>

          <div
            className={styles.dropdownContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.link}>
              <FaGlobe />{" "}
              {isDropdownOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
            </div>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <div className={styles.dropdown_link} onClick={()=>handleLanguageChange("ar")}>اردو</div>
                <div className={styles.dropdown_link} onClick={()=>handleLanguageChange("en")}>English</div>
              </div>
            )}
          </div>
        </div>

        <LinkWithScrollToTop to="/contact">
          <div className={styles.button}>{t('header.links.contactUs')}</div>
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
          {/* <button onClick={toggleMobileMenu}> */}
          <div className={styles.right_mobile}>
            {/* {open ? <IoMdClose /> : <FaBars />} */}
            <Hamburger
              rounded
              toggled={open}
              toggle={setOpen}
              hideOutline={false}
            />
          </div>
          {/* </button> */}
        </div>
        {open && (
          <>
            <div div className={styles.bottom} onClick={toggleMobileMenu}>
              <a href="/">
                <div className={styles.mobile_link}>{t('header.mobileLinks.home')}</div>
              </a>
              <a href="/about">
                <div className={styles.mobile_link}>{t('header.mobileLinks.about')}</div>
              </a>
              <a href="/investment">
                <div className={styles.mobile_link}>{t('header.mobileLinks.ourInvestment')}</div>
              </a>
              <a href="/join">
                <div className={styles.mobile_link}>{t('header.mobileLinks.joinUs')}</div>
              </a>
              <a href="/media">
                <div className={styles.mobile_link}>{t('header.mobileLinks.media')}</div>
              </a>
              <a href="/contact">
                <div className={styles.mobile_link}>{t('header.mobileLinks.contactUs')}</div>
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
