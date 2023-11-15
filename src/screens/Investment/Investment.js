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
import investscreen from '../../images/investment/investmentscreen.jpg'
import { Link } from 'react-router-dom';


const Investment = () => {
  return (
    <>
      <Investment1
        backgroundImage={investscreen}
        heading1="our investments"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="get started"
      />
      <Heading
        heading1="Partner with AL-MUDAYFER"
        heading2="our companies"
        description1="
        As an investor or entrepreneur with creative and distinct ideas, we integrate with you
        in the Al-Mudaifer Group, and we are happy to exchange opinions about ideas and
        are open to everyone, until we implement projects on reality."
        description2="Today, Al-Mudaifer Holding Group finds itself accelerating the pace of expanding its
          business to keep pace with all the giant projects created by Vision 2030 and
          intersecting with the group’s work, especially with the group’s known products of high
          reliability and the long-standing experience of a national company.
          Al-Mudaifer Holding Group aspires to work diligently to enhance its national presence
          and write new chapters of its success story through its distinctive interaction with the
          comprehensive national vision and enter into more projects and investments that
          enhance its effective presence at all levels, including localization of the industry,
          enhancing local content, industrial growth, creating job opportunities and bridging the
          gap in the market. Locally and looking to expand externally.
          "
      />

      <div className={styles.container}>

        <div className={styles.left_container}>
          <div className={styles.sticky_container}>
            <a href="#section1">
              <div className={styles.builder_names}> Omrania Crusher</div>
            </a>
            <a href="#section2">
              <div className={styles.builder_names}> OMRANIA FOR CONCRETE</div>
            </a>
            <a href="#section3">
              <div className={styles.builder_names}> OMRANIA MATERIALS</div>
            </a>
            <a href="#section4">
              <div className={styles.builder_names}> OMRANIA METAL POWER</div>
            </a>
            <a href="#section5">
              <div className={styles.builder_names}> OMRANIA WOOD PRODUCTS</div>
            </a>
            <a href="#section6">
              <div className={styles.builder_names}> saudi player for polishing materials</div>
            </a>
            <a href="#section7">
              <div className={styles.builder_names}> OMRANIA MATERIALS FOR ROAD TRANSPORT</div>
            </a>
            <a href="#section8">
              <div className={styles.builder_names}> OMRANIA LOGISTICS SUPPORT</div>
            </a>
          </div>

        </div>

        {/* TESTING */}
        <div className={styles.right_container}>

          {/* COMPANY 1 */}
          <div className={styles.company} id='section1'>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_crusher'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Date Of Establishment
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
                  <a href="https://comaco.sa">
                    https://comaco.sa
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 2 */}
          <div className={styles.company} id='section2'>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company2} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_concrete'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Date Of Establishment
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
                  <a href="https://comaco.sa">
                    https://comaco.sa
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 3 */}
          <div className={styles.company} id='section3'>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company3} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_material'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company3} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Date Of Establishment
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
                  <a href="https://comaco.sa">
                    https://comaco.sa
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 4 */}
          <div className={styles.company} id='section4'>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company4} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company4} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Date Of Establishment
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
                  <a href="https://comaco.sa">
                    https://comaco.sa
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 5 */}
          <div className={styles.company} id='section5'>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company5} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company5} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Date Of Establishment
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
                  <a href="https://comaco.sa">
                    https://comaco.sa
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 6 */}
          <div className={styles.company} id='section6'>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company6} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company6} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Date Of Establishment
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
                  <a href="https://comaco.sa">
                    https://comaco.sa
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 7 */}
          <div className={styles.company} id='section7'>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company7} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company7} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Date Of Establishment
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
                  <a href="https://comaco.sa">
                    https://comaco.sa
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.bottom_heading}>
                Gallery
              </div>
              <div className={styles.bottom_image}>
                <img src={building} alt="" />
              </div>
            </div>
          </div>

          {/* COMPANY 8 */}
          <div className={styles.company} id='section8'>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.logo}>
                  <img src={company8} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company8} alt="" />
                </div>
                <div className={styles.numbers}>
                  1979
                  <div className={styles.numbers_description}>
                    Date Of Establishment
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
                  <a href="https://comaco.sa">
                    https://comaco.sa
                  </a>
                </div>
              </div>
            </div>

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