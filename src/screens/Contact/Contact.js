import React from 'react'
import styles from './Contact.module.css';
import Heading from '../../components/Heading/Heading';
import location from '../../images/contact/location.svg'
import Investment from '../../components/InvestmentOpp/Investment';

import contact from '../../images/about/aboutscreen.jpg'


const Contact = () => {
  const handleSubmit = () => { }


  return (
    <>
      <Investment
        backgroundImage={contact}
        heading1="still curious?"
        heading2="contact us"
        sub_heading="New Industrial City - Al-Musafa
District - Street 194 Riyadh - Kingdom of Saudi Arabia"
        button="Know More "
      />
      <div className={styles.blue_heading}>
        stay in touch
      </div>
      <Heading
        heading2="LET’S GET IN TOUCH WITH OUR PROFESSIONALS TEAM WORKING"
      />


      <div className={styles.container_box}>

        <div className={styles.box}>
          <div className={styles.icon}>
            <img src={location} alt="" />
          </div>
          <div className={styles.heading}>office location</div>
          <div className={styles.sub_heading}>
            New Industrial City - Al-Musafa
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icon}>
            <img src={location} alt="" />
          </div>
          <div className={styles.heading}>office location</div>
          <div className={styles.sub_heading}>
            New Industrial City - Al-Musafa
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icon}>
            <img src={location} alt="" />
          </div>
          <div className={styles.heading}>office location</div>
          <div className={styles.sub_heading}>
            New Industrial City - Al-Musafa
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icon}>
            <img src={location} alt="" />
          </div>
          <div className={styles.heading}>office location</div>
          <div className={styles.sub_heading}>
            New Industrial City - Al-Musafa
          </div>
        </div>

      </div>


      <div className={styles.container}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844233.2919646518!2d44.08772330291176!3d25.471069451748104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa19c19b9dc2f%3A0x7a97f6b0e808a934!2sAl%20Mudayfer%20Investment%20Group!5e0!3m2!1sen!2sin!4v1699300668702!5m2!1sen!2sin"
            width="600"
            height="650"
            styles={{ border: 'none' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>


        <div className={styles.form}>
          <div className={styles.form_top}>
            <div className={styles.form_heading}>Keep in touch</div>
            <div className={styles.form_sub_heading}>please let us know how can we help you</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.main_form_container}>

              <div className={styles.left_form_container}>
                <div className={styles.label_name}>First name</div>
                <input
                  type="text"
                  placeholder='Enter Your First Name'
                />
                <div className={styles.label_name}>email</div>
                <input
                  type="text"
                  placeholder='Enter Your First Name'
                />
              </div>
              <div className={styles.left_form_container}>
                <div className={styles.label_name}>Last name</div>
                <input
                  type="text"
                  placeholder='Enter Your First Name'
                />
                <div className={styles.label_name}>Telephone</div>
                <input
                  type="text"
                  placeholder='Enter Your First Name'
                />
              </div>
            </div>
            <div className={styles.button_and_textarea}>
              <div className={styles.label_name}>Message</div>
              <input
                type="textarea"
                placeholder='Write Message'
              />


              <div className={styles.send_button}>
                send message
              </div>
            </div>
            {/* <div className={styles.right_form_container}></div> */}
          </form>
        </div>


      </div>
    </>
  )
}

export default Contact