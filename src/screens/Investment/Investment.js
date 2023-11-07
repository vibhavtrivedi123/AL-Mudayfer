import React from 'react'
import Heading from '../../components/Heading/Heading'
import Investment1 from '../../components/InvestmentOpp/Investment'
import aboutscreen from '../../images/about/aboutscreen.jpg'

import styles from './Investment.module.css';
import building from '../../images/investment/buildings.jpg'
import company from '../../images/home/company1.jpg'
import company1 from '../../images/investment/materialcompany.png'


const Investment = () => {
  // const arr  = [
  //   mainimage:building
  // ]


  return (
    <>
      <Investment1
        backgroundImage={aboutscreen}
        heading1="our investments"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="get started"
      />
      <Heading
        heading1="Partner with AL-MUDAIFER"
        heading2="our companies"
        description1="TAl-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />

      <div className={styles.container}>

        <div className={styles.left_container}></div>
        <div className={styles.right_container}>
          <div className={styles.company}>

            {/* top */}
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  20M
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>
                <div className={styles.right_button}>
                  https://comaco.sa
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>

        <div className={styles.left_container}></div>
        <div className={styles.right_container}>
          <div className={styles.company}>

            {/* top */}
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  20M
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>
                <div className={styles.right_button}>
                  https://comaco.sa
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>

        <div className={styles.left_container}></div>
        <div className={styles.right_container}>
          <div className={styles.company}>

            {/* top */}
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  20M
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>
                <div className={styles.right_button}>
                  https://comaco.sa
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>

        <div className={styles.left_container}></div>
        <div className={styles.right_container}>
          <div className={styles.company}>

            {/* top */}
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  20M
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>
                <div className={styles.right_button}>
                  https://comaco.sa
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Investment