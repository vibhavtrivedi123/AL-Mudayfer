import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Join.module.css';
import Investment from '../../components/InvestmentOpp/Investment'
import Heading from '../../components/Heading/Heading'
import aboutscreen from '../../images/about/aboutscreen.jpg'
import Company from '../../components/Company/Company'
import value from '../../images/home/ourvalue.jpg'
import { AiOutlineLine } from 'react-icons/ai'
import Slider from '../../resuable/slider/Slider';
import axios from 'axios';



const Join = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:9001/api/v1/user/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      // setFormData({
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   phone: '',
      //   message: '',
      // });

    } catch (error) {
      toast.error('Please Check Fields!', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Investment
        backgroundImage={aboutscreen}
        heading1="join us"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="get started"
      />
      <Heading
        heading1="Partner with AL-MUDAYFER"
        heading2="explore jobs"
      />

      <Slider />

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
                    placeholder='Ex. Aamir'
                    onChange={handleChange}
                    name="firstName"
                    required
                  />
                  <div className={styles.label_name}>email</div>
                  <input
                    type="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                    placeholder='Email'
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>
                <div className={styles.left_form_container}>
                  <div className={styles.label_name}>Last name</div>
                  <input
                    type="text"
                    placeholder='Ex. Doe'
                    name="lastName"
                    onChange={handleChange}
                    required
                  />
                  <div className={styles.label_name}>Telephone</div>
                  <input
                    type="text"
                    pattern="^\d{7}$|^\d{10}$"
                    placeholder='Telephone'
                    title="Please Enter The Mobile Number"
                    onChange={handleChange}
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className={styles.button_and_textarea}>
                <div className={styles.label_name}>Message</div>
                <input
                  type="textarea"
                  placeholder='Write Message'
                  onChange={handleChange}
                  name="message"
                  required
                />
                <div className={styles.send_button}>
                  <button>
                    SEND MESSAGE
                  </button>
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
                    placeholder='Ex. Aamir'
                    onChange={handleChange}
                    name="firstName"
                    required
                  />
                  <div className={styles.label_name}>email</div>
                  <input
                    type="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$"
                    placeholder='Email'
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>
                <div className={styles.left_form_container}>
                  <div className={styles.label_name}>Last name</div>
                  <input
                    type="text"
                    placeholder='Ex. Doe'
                    name="lastName"
                    onChange={handleChange}
                    required
                  />
                  <div className={styles.label_name}>Telephone</div>
                  <input
                    type="text"
                    pattern="^\d{7}$|^\d{10}$"
                    placeholder='Telephone'
                    title="Please Enter The Mobile Number"
                    onChange={handleChange}
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className={styles.button_and_textarea}>
                <div className={styles.label_name}>Message</div>
                <input
                  type="textarea"
                  placeholder='Write Message'
                  onChange={handleChange}
                  name="message"
                  required
                />
                <div className={styles.send_button}>
                  <button>
                    SEND MESSAGE
                  </button>
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