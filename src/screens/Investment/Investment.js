import React from 'react'
import Heading from '../../components/Heading/Heading'
import Investment1 from '../../components/InvestmentOpp/Investment'
import aboutscreen from '../../images/about/aboutscreen.jpg'

import styles from './Investment.module.css';
import building from '../../images/investment/buildings.jpg'
import company1 from '../../images/investment/company1.svg'
import company2 from '../../images/investment/company2.svg'
import company3 from '../../images/investment/company3.svg'
import company4 from '../../images/investment/company4.svg'
import company5 from '../../images/investment/company5.svg'
import company6 from '../../images/investment/company6.svg'
import company7 from '../../images/investment/company7.svg'
import company8 from '../../images/investment/company8.svg'
// import company1 from '../../images/investment/materialcompany.png'


const Investment = () => {
  const arr = [
    {
      company_logo: company1,
      mainimage: building,
      description1: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      description2: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      date: 1976,
      date_desc: "Date Of Establishment",
      date2: 1976,
      date_desc2: "Advanced",
      date3: "20M",
      date3: "Branches",
      link: "https://comaco.sa"
    },
    {
      company_logo: company2,
      mainimage: building,
      description1: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      description2: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      date: 1976,
      date_desc: "Date Of Establishment",
      date2: 1976,
      date_desc2: "Advanced",
      date3: "20M",
      date3: "Branches",
      link: "https://comaco.sa"
    },
    {
      company_logo: company3,
      mainimage: building,
      description1: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      description2: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      date: 1976,
      date_desc: "Date Of Establishment",
      date2: 1976,
      date_desc2: "Advanced",
      date3: "20M",
      date3: "Branches",
      link: "https://comaco.sa"
    },
    {
      company_logo: company4,
      mainimage: building,
      description1: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      description2: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      date: 1976,
      date_desc: "Date Of Establishment",
      date2: 1976,
      date_desc2: "Advanced",
      date3: "20M",
      date3: "Branches",
      link: "https://comaco.sa"
    },
    {
      company_logo: company5,
      mainimage: building,
      description1: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      description2: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      date: 1976,
      date_desc: "Date Of Establishment",
      date2: 1976,
      date_desc2: "Advanced",
      date3: "20M",
      date3: "Branches",
      link: "https://comaco.sa"
    },
    {
      company_logo: company6,
      mainimage: building,
      description1: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      description2: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      date: 1976,
      date_desc: "Date Of Establishment",
      date2: 1976,
      date_desc2: "Advanced",
      date3: "20M",
      date3: "Branches",
      link: "https://comaco.sa"
    },
    {
      company_logo: company7,
      mainimage: building,
      description1: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      description2: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      date: 1976,
      date_desc: "Date Of Establishment",
      date2: 1976,
      date_desc2: "Advanced",
      date3: "20M",
      date3: "Branches",
      link: "https://comaco.sa"
    },
    {
      company_logo: company8,
      mainimage: building,
      description1: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      description2: "We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.",
      date: 1976,
      date_desc: "Date Of Establishment",
      date2: 1976,
      date_desc2: "Advanced",
      date3: "20M",
      date_desc3: "Branches",
      link: "https://comaco.sa"
    },
  ]


  return (
    <>
      <Investment1
        backgroundImage={aboutscreen}
        heading1="our investments"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="get started"
      />
      <Heading
        heading1="Partner with AL-MUDAYFER"
        heading2="our companies"
        description1="Al-MUDAYFER is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />

      <div className={styles.container}>

        <div className={styles.left_container}>
          <div className={styles.sticky_container}>
            <div className={styles.builder_names}> Omrania Crusher</div>
            <div className={styles.builder_names}> OMRANIA FOR CONCRETE</div>
            <div className={styles.builder_names}> OMRANIA MATERIALS</div>
            <div className={styles.builder_names}> OMRANIA METAL POWER</div>
            <div className={styles.builder_names}> OMRANIA WOOD PRODUCTS</div>
            <div className={styles.builder_names}> saudi player for polishing materials</div>
            <div className={styles.builder_names}> OMRANIA MATERIALS FOR ROAD TRANSPORT</div>
            <div className={styles.builder_names}> OMRANIA LOGISTICS SUPPORT</div>
          </div>
        </div>
        <div className={styles.right_container}>
          {arr && arr.length > 0 ? (
            arr.map((item, idx) => (
              <div className={styles.company}>

                <div className={styles.top}>
                  <div className={styles.top_left}>
                    <div className={styles.logo}>
                      <img src={item.company_logo} alt="" />
                    </div>
                    <div className={styles.blue_underline}></div>
                    <div className={styles.left_description}>
                      {item.description1}
                    </div>
                    <div className={styles.left_description}>
                      {item.description2}
                    </div>
                  </div>

                  <div className={styles.top_right}>
                    <div className={styles.logo}>
                      <img src={item.company_logo} alt="" />
                    </div>
                    <div className={styles.numbers}>
                      {item.date}
                      <div className={styles.numbers_description}>
                        {item.date_desc}
                      </div>
                    </div>
                    <div className={styles.numbers}>
                      {item.date2}
                      <div className={styles.numbers_description}>
                        {item.date_desc2}
                      </div>
                    </div>
                    <div className={styles.numbers}>
                      {item.date3}
                      <div className={styles.numbers_description}>
                        {item.date_desc3}
                      </div>
                    </div>
                    <div className={styles.right_button}>
                      {item.link}
                    </div>
                  </div>
                </div>

                <div className={styles.bottom}>
                  <div className={styles.bottom_heading}>
                    Gallery
                  </div>
                  <div className={styles.bottom_image}>
                    <img src={item.mainimage} alt="" />
                  </div>
                </div>
              </div>
            ))
          ) : null
          }

        </div>
      </div>
    </>
  )
}

export default Investment