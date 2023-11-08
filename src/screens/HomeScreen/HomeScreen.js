import React from 'react'
import NewsHealdine from '../../components/NewsHeadline/NewsHeadline';
import ImageBoxLeft from '../../components/ImageBoxLeft/ImageBoxLeft';
import Company from '../../components/Company/Company';
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight';
import Investment from '../../components/InvestmentOpp/Investment';
import Experience62 from '../../components/Experience62/Experience62';
import Heading from '../../components/Heading/Heading';
import Timeline from '../../components/Timeline/Timeline';
import Trusted from '../../components/TrustedByCompany/Trusted';
import Milestone from '../../components/Milestone/Milestone';
import OurValues from '../../components/Ourvalues/OurValue';
import ConsHeading from '../../components/ConsHeading/ConsHeading';

import homescreen from '../../images/home/homescreen.jpg'
import employment from '../../images/home/employment.jpg'
import exp from '../../images/home/exp.jpg'
import board from '../../images/home/board.jpg'
import invest from '../../images/home/ourvalue.jpg'

const HomeScreen = () => {
    return (
        <>
            <Investment
                backgroundImage={homescreen}
                heading1="AL-MUDAYFER"
                heading2="HOLDING"
                sub_heading="The name that has been associated with building and construction works for development monuments over generations from the Kingdom of Saudi Arabia and to the Middle East."
                button="Know More "
            />
            <Heading
                heading1="Partner with AL-MUDAYFER"
                heading2="The BUILDING & CONSTRUCTION EXPERT"
                description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
                description2="Trust our project management experts at Al-Mudafir Holdings from Design to Completion!"
            />
            <Milestone />
            <Experience62
                imageSrc={exp}
                heading="Experience 62+ Years"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Learn More"
            />

            <Trusted />
            <OurValues />
            <ConsHeading />

            <ImageBoxRight
                imageSrc={board}
                heading="the board of directors"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Get to know"
            />
            <Company
                backgroundImage={invest}
                heading1="INVESTMENT"
                heading2="OPPORTUNITIES"
                sub_heading="The name that has been associated with building and construction works for development monuments over generations from the Kingdom of Saudi Arabia and to the Middle East."
                button="Know More "
            />
            <ImageBoxLeft
                imageSrc={employment}
                heading="Employment Portal"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-MUDAYFER Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="know more"
            />
            <Timeline />
            <NewsHealdine />
        </>
    )
}

export default HomeScreen