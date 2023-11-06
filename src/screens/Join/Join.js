import React from 'react'
import styles from './Join.module.css';

import Investment from '../../components/InvestmentOpp/Investment'
import Heading from '../../components/Heading/Heading'
import aboutscreen from '../../images/about/aboutscreen.jpg'
import Company from '../../components/Company/Company'
import value from '../../images/invest.jpg'
import { AiOutlineLine } from 'react-icons/ai'

const Join = () => {
  const handleSubmit = () => { }
  return (
    <>
      <Investment
        backgroundImage={aboutscreen}
        heading1="join us"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="get started"
      />
      <Heading
        heading1="Partner with AL-MUDAIFER"
        heading2="explore jobs"
      />

      {/* supplier */}
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}> <div className={styles.mid_line}></div> join as a supplier</div>
          <div className={styles.main_heading}>
            Discover the benefits of collaborating with us as a supplier.
          </div>
          <div className={styles.sub_heading1}>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.
          </div>
          <div className={styles.sub_heading2}>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.form_top}>
              <div className={styles.form_heading}>FILL THIS FORM TO GET AN QUOTATION</div>
              <div className={styles.form_sub_heading}>
                Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.main_form_container}>

                <div className={styles.left_form_container}>
                  <div className={styles.label_name}>First name</div>
                  <input
                    type="text"
                    placeholder='Enter Your First Name'
                  />
                  <div className={styles.label_name}>Email</div>
                  <input
                    type="text"
                    placeholder='Enter Your First Name'
                  />
                  <div className={styles.label_name}>Choose Industry</div>
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
                  <div className={styles.label_name}>Choose Package</div>
                  <input
                    type="text"
                    placeholder='Enter Your First Name'
                  />
                </div>

              </div>
              <div className={styles.button_and_textarea}>

                <div className={styles.send_button}>
                  submit now
                </div>
              </div>
              {/* <div className={styles.right_form_container}></div> */}
            </form>
          </div>
        </div>
      </div>

      {/* client */}
      <div className={styles.container}>

        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.form_top}>
              <div className={styles.form_heading}>FILL THIS FORM TO GET AN QUOTATION</div>
              <div className={styles.form_sub_heading}>
                Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.main_form_container}>

                <div className={styles.left_form_container}>
                  <div className={styles.label_name}>First name</div>
                  <input
                    type="text"
                    placeholder='Enter Your First Name'
                  />
                  <div className={styles.label_name}>Email</div>
                  <input
                    type="text"
                    placeholder='Enter Your First Name'
                  />
                  <div className={styles.label_name}>Choose Industry</div>
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
                  <div className={styles.label_name}>Choose Package</div>
                  <input
                    type="text"
                    placeholder='Enter Your First Name'
                  />
                </div>

              </div>
              <div className={styles.button_and_textarea}>

                <div className={styles.send_button}>
                  submit now
                </div>
              </div>
              {/* <div className={styles.right_form_container}></div> */}
            </form>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.heading}> <div className={styles.mid_line}></div> join as a client</div>
          <div className={styles.main_heading}>
            Unlock tailored solutions and unparalleled support by becoming our client.
          </div>
          <div className={styles.sub_heading1}>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.
          </div>
          <div className={styles.sub_heading2}>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
      </div>

      <Company
        backgroundImage={value}
        heading1="INVESTMENT"
        heading2="OPPORTUNITIES"
        sub_heading="The name that has been associated with building and construction works for development monuments over generations from the Kingdom of Saudi Arabia and to the Middle East."
        button="Know More "
      />

    </>
  )
}

export default Join