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

import img1 from '../../images/const1.jpg'
import img2 from '../../images/const2.jpg'

const Omrania_crushers = () => {
    const sliderItems = [
        {
            image: img1,
            heading: 'Construction',
            subHeading: 'Origins of Expertise Contracting Est',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Badr Al Dosari Contracting Est',
        },
        {
            image: img1,
            heading: 'Construction',
            subHeading: 'Origins of Expertise Contracting Est',
        },
        {
            image: img2,
            heading: 'Construction',
            subHeading: 'Badr Al Dosari Contracting Est',
        },
    ];

    return (
        <>
            <Investment
                backgroundImage={aboutscreen}
                heading1="Omrania Crusher"
                sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
                button="Get started "
            />
            <Heading
                heading1="about omrania crusher"
                heading2="from the land of saudi arabia"
                description1="Because primary raw materials are a priority in the success of the industry, we invested in establishing the Omraniya Crusher Company in the year 1425 AH, so that our journey in producing construction materials would be highly reliable, according to the highest specifications, and ensure sustainability. It also supplies the local market with the finest types of aggregates in different sizes, which are used in many different cement industries to play their role in growth and development. Al-Omraniyah Crusher has contributed to the implementation of many projects within the Kingdom that are distinguished by the quality of the product, as the quality of factory production begins with the quality of crusher materials."
            />

            <Card
                image1={vision_big}
                icon1={vision}
                heading1="Our Vision"
                subHeading1="We provide everyone with raw materials that are highly reliable and widely spread in the Saudi market."

                image2={message_big}
                icon2={message}
                heading2="Our Message"
                subHeading2="Meeting the requirements of the extension chain for cement products according to high standards."

                image3={value_big}
                icon3={vision}
                heading3="QUALITY & SAFETY"
                subHeading3="A quality control department has been established to include the highest standards and is equipped with the latest testing facilities to provide customized products subject to international and local specifications and standards."
            />

            <Heading
                heading2="OMRANIA CRUSHER COMPANY PRODUCTS"
                description1="Our quarries were chosen according to geological factors and with high planning, where the materials (pebbles, stone, and rock) are extracted from the ground using the best methods, tools and techniques to ensure obtaining a high-quality final product."
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
                heading2="our products pulse to"
            />
            
            <CompanySlider items={sliderItems} />

            <Heading
                heading1="Partner with OMRANIA CRUSHER"
                heading2="Testimonials"
                description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
            />

            <Testimonial />
            <Helper_numbers />
        </>
    )
}

export default Omrania_crushers