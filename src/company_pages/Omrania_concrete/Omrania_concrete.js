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

const Omrania_concrete = () => {
    return (
        <>
            <Investment
                backgroundImage={aboutscreen}
                heading1="Omrania For"
                heading2=" Concrete"
                sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
                button="Get started "
            />
            <Heading
                heading1="about omrania for concrete"
                heading2="from the land of saudi arabia"
                description1="One of our holding group companies. It was established in 142 AH and seeks to provide peace of mind to all stakeholders in an innovative and sustainable way. Providing high quality building materials and products and reliable services to customers and local communities. At Omrania Concrete, we strongly believe that business and environmental preservation must go hand in hand. This is done by promoting local culture and traditions and integrating company strategies on industrial efficiency and innovation with climate protection, reducing dependence on natural resources and reducing harmful air emissions."
                description2="It is a source of pride and honour to use the company's products in building the most luxurious buildings and famous edifices in the Kingdom, and it also contributes to strengthening its future position by providing its services to the market and meeting the growing needs of consumers. The factory in Riyadh includes the latest computer-operated production lines and which consists of five modern mixing stations, five stations with a wet ready-mix system, with a high total production capacity of 720 m3/hour. The factory also includes the latest fleet of German-made mixers for transporting Ready mix concrete to work sites as quickly as possible The number of mixers reaches 60. We pay great attention to quality, accuracy, efficiency and structural standards in the manufacture of concrete blocks."
            />

            <Card
                image1={vision_big}
                icon1={vision}
                heading1="Our Vision"
                subHeading1="We contribute to providing creative solutions with the best features for everyone working in the field of concrete products."

                image2={message_big}
                icon2={message}
                heading2="Our Message"
                subHeading2="We pay great attention to quality, accuracy, efficiency and construction standards."

                image3={value_big}
                icon3={vision}
                heading3="our goal"
                subHeading3="To become the largest supplier and provider of the services we provide in the Middle East with the highest degrees of customer satisfaction"
            />

            <Heading
                heading2="omrania for concrete products"
                description1="Al-Omraniya Concrete Company provides you with the service you need at the lowest costs and in the shortest possible time to ensure ease of work."
            />

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

export default Omrania_concrete