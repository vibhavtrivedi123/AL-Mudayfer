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
              <div className={styles.builder_names}> OMRANIA MATERIALS FOR LAND TRANSPORT</div>
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
                  <img src={company7} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                We invested in Omrania Crusher to make it our journey in the production of construction materials with high reliability.
                </div>
                <div className={styles.left_description}>
                From the land of Saudi Arabia... Omrania Crusher.
Because raw materials are a priority for the success of the industry, we invested in establishing Omrania Crusher in 2004. This investment marks our journey in producing construction materials with high reliability, meeting the highest specifications, and ensuring sustainability.
We supply the local market with the finest types of gravel in various sizes, which are used in many different cement industries. These materials play a crucial role in development and progress. Omrania Crusher has contributed to the execution of numerous distinguished projects within the Kingdom. Our product quality sets the foundation for the overall quality of the factories, starting with the quality of the crusher materials.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_crusher'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company7} alt="" />
                </div>
                <div className={styles.numbers}>
                  2004
                  <div className={styles.numbers_description}>
                    Date Of Establishment
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}
                  -
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://occo.sa/">
                  https://occo.sa/
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
                We strive diligently to provide confidence and certainty to all stakeholders through our innovative and sustainable approach. Our aim is to assist them in delivering high-quality construction materials and products, along with providing reliable services to customers and local communities.
                </div>
                <div className={styles.left_description}>
                At Al-Omrania Ready Mix Concrete, we strongly believe that business and environmental preservation should go hand in hand. This is achieved by promoting local culture and traditions and integrating the company's strategies regarding industrial efficiency and innovation with climate protection, reducing reliance on natural resources, and minimizing harmful air emissions.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_concrete'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company2} alt="" />
                </div>
                <div className={styles.numbers}>
                  2003
                  <div className={styles.numbers_description}>
                    Date Of Establishment
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}
                  -
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://orm.sa/">
                  https://orm.sa/
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
                  <img src={company4} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                Al-Omrania Building Materials Company is a pioneer in the production and manufacturing of essential construction materials in the Kingdom of Saudi Arabia..
                </div>
                <div className={styles.left_description}>
                The company's product range includes tiles, blocks, interlock pavers, and paving slabs. With a history spanning over half a century, the company has become a symbol of innovation and leadership in the construction sector, extending its influence across the Middle East.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_material'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company4} alt="" />
                </div>
                <div className={styles.numbers}>
                  1972
                  <div className={styles.numbers_description}>
                    Date Of Establishment
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}
                  -
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://comaco.sa/">
                  https://comaco.sa/
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
                  <img src={company5} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                Al-Omrania Materials Metal Forming Company is a leader in the field of metal forming, providing modern and contemporary engineering solutions that meet the needs of various metal forming domains.
                </div>
                <div className={styles.left_description}>
                Al-Omrania Metal Forming Company was established in 2018. It is a specialized company in metal forming, providing modern and contemporary engineering solutions in all fields of metal forming. The company boasts a technical team with the highest qualifications and experiences, utilizing the latest advanced technologies and adhering to industrial methods with the highest standards.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_metal_power'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company5} alt="" />
                </div>
                <div className={styles.numbers}>
                  2018
                  <div className={styles.numbers_description}>
                    Date Of Establishment
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}
                  -
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://cmmf.sa/">
                  https://cmmf.sa/
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
                  <img src={company3} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                A leading Saudi company in manufacturing high-quality furniture and producing custom-made furniture.
                </div>
                <div className={styles.left_description}>
                It is a leading Saudi company in the manufacturing of high-quality furniture, producing custom-made furniture such as reception units, cabinets, kitchens, wall panels, doors, ceilings, and bespoke solutions. They utilize the latest technologies to manufacture furniture that meets the highest international standards. Al-Omrania for Wood Products is one of the investments of the Sons of Saleh Al-Mudayfer Holding Company, established in 1996. They have significant commercial interests in a wide range of activities across the Kingdom.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_wood_products'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company3} alt="" />
                </div>
                <div className={styles.numbers}>
                  1996
                  <div className={styles.numbers_description}>
                    Date Of Establishment
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}
                  -
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://omraniahwood.sa/?lang=ar">
                  https://omraniahwood.sa/?lang=ar
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
                  <img src={company1} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                A leader in the field of manufacturing building materials and the first specialized Saudi factory in the production of gears and cutting cylinders in various sizes and for various purposes.
                </div>
                <div className={styles.left_description}>
                  We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains.
                </div>
                <div className={styles.link__button}>
                  <Link to='/SaudiPlayer_polishingMaterials'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company1} alt="" />
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Date Of Establishment
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}
                  -
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://saudi-grinding-polishing.sa/">
                  https://saudi-grinding-polishing.sa/
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
                  <img src={company8} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                Integrated and innovative solutions specialized in land transportation with the latest technologies. We have provided a ground transportation fleet with the highest standards of safety and security to ensure the preservation of products.
                </div>
                <div className={styles.left_description}>
                Due to the significant and continuous economic development,Al-Omrania Land Transportation Company was established to keep pace with progress and provide integrated and innovative solutions specialized in land transportation with the latest technologies. We have introduced a ground transportation fleet with the highest standards of safety and security to ensure the preservation of products.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_landTransport'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company8} alt="" />
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Date Of Establishment
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}
                  -
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://otco.sa/">
                  https://otco.sa/
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
                  <img src={company6} alt="" />
                </div>
                <div className={styles.blue_underline}></div>
                <div className={styles.left_description}>
                The Al-Omrania Materials for Logistics Support company is based on core values that it adheres to and contributes to its business growth. These values include integrity, quality, and excellence.
                </div>
                <div className={styles.left_description}>
                Established in 2019 as part of the Sons of Saleh Al-Mudayfer Holding Company to keep pace with developments in the logistics sector, especially with the focus on the Kingdom's Vision 2030 and the establishment of a national strategy for transportation and logistics.
                </div>
                <div className={styles.link__button}>
                  <Link to='/omrania_logisticSupport'>
                    Learn more
                  </Link>
                </div>
              </div>

              <div className={styles.top_right}>
                <div className={styles.logo}>
                  <img src={company6} alt="" />
                </div>
                <div className={styles.numbers}>
                  2019
                  <div className={styles.numbers_description}>
                    Date Of Establishment
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 1979 */}
                  -
                  <div className={styles.numbers_description}>
                    Advanced
                  </div>
                </div>
                <div className={styles.numbers}>
                  {/* 20M */}
                  -
                  <div className={styles.numbers_description}>
                    Branches
                  </div>
                </div>

                <div className={styles.right_button}>
                  <a href="https://olsco.sa/">
                  https://olsco.sa/
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