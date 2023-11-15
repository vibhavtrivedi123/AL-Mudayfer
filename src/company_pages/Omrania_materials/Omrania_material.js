import React from 'react'
import Testimonial from '../../resuable/testimonials/Testimonial'
import Heading from '../../components/Heading/Heading'
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight'
import ImageBoxLeft from '../../components/ImageBoxLeft/ImageBoxLeft'
import Trusted from '../../components/TrustedByCompany/Trusted'
import Card from '../../resuable/cards/Card'
import Investment from '../../components/InvestmentOpp/Investment'

import block from '../../images/about/block.jpg'
import interlock from '../../images/about/interlock.jpg'
import aboutscreen from '../../images/about/aboutscreen.jpg'
import tiles from '../../images/about/tiles.jpg'
import skirting from '../../images/about/skirting.jpg'

import message from '../../images/about/message.svg'
import vision from '../../images/about/vision.svg'
import vision_big from '../../images/about/vision.jpg'
import message_big from '../../images/about/message.jpg'
import value_big from '../../images/about/value.jpg'
import Helper_numbers from '../../resuable/helper_numbers/Helper_numbers'
import CompanySlider from '../../resuable/company_slider/CompanySlider'

const Omrania_material = () => {
    return (
        <>
            <Investment
                backgroundImage={aboutscreen}
                heading1="Omrania materials"
                sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
                button="Get started "
            />
            <Heading
                heading1="about omrania materials"
                heading2="from the land of the saudi arabia"
                description1="The company was established in 1972 and since its launch, it has strived to keep pace with continuous development to provide the best construction materials products and services with the highest quality and efficiency. During these years, the company was able to achieve many successes to become the main pillar in all private and government projects in the Kingdom of Saudi Arabia and is classified as one of the best construction materials companies in the Saudi market. We always strive to serve our customers and provide support in all cases, taking into account the values of integrity, credibility, honesty, quality, security and safety, with promises that we will always provide innovative solutions that save a lot of time, money and effort, while continuing development and construction efforts to provide the best urban products and services that are compatible with... With the highest standards of quality and safety the quality"
            />

            <Card
                image1={vision_big}
                icon1={vision}
                heading1="Our Vision"
                subHeading1="Continuous development to maintain a prominent brand in the field of construction in order to continue to lead and provide a highly efficient national product"

                image2={message_big}
                icon2={message}
                heading2="Our Message"
                subHeading2="Together towards the future - our slogan that we believe in and always strive to achieve by becoming the future of the industrial sector in the field of construction Value 
                Leadership and development 
                Honesty and integrity
                Community Service"

                image3={value_big}
                icon3={vision}
                heading3="QUALITY & SAFETY"
                subHeading3="A leader in the manufacture of terrazzo and cement tiles, soffits, blocks, interlocks and ballasts in the Middle East region with the highest standards, specifications and standards. It also possesses international and local accreditation certificates."
            />

            <Heading
                heading2="omrania materials company"
                description1="The Omraniya factory was established on clear foundations and a comprehensive vision, so it adopted quality as a cornerstone. The management devoted its efforts and focused on quality to ensure obtaining an international Saudi product. Therefore, it established quality 5 control laboratories that adopt international and local technical specifications."
            />

            {/* <Trusted /> */}
            <ImageBoxLeft
                imageSrc={block}
                heading="BLOCK"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            />
            <ImageBoxRight
                imageSrc={interlock}
                heading="interlock"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            />
            <ImageBoxLeft
                imageSrc={skirting}
                heading="SKIRTING"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            />
            <ImageBoxRight
                imageSrc={tiles}
                heading="tiles"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="read more"
            />


            <Heading
                heading1="Partner with OMRANIA CRUSHER"
                heading2="PRODUCTS WE WERE PART OF "
            />
            <CompanySlider />

            <Heading
                heading1="Partner with OMRANIA for concrete"
                heading2="Testimonials"
                description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
            />

            <Testimonial />
            <Helper_numbers />
        </>
    )
}

export default Omrania_material