import React from 'react'
import styles from './HomScreen.module.css';
import NewsHealdine from '../../components/NewsHeadline/NewsHeadline';
import ImageBoxLeft from '../../components/ImageBoxLeft/ImageBoxLeft';
import Company from '../../components/Company/Company';
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight';
import Investment from '../../components/InvestmentOpp/Investment';
import Experience62 from '../../components/Experience62/Experience62';

const HomeScreen = () => {
    return (
        <>
            <Investment
                backgroundImage="https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg"
                heading1="AL-MUDAIFER"
                heading2="HOLDING"
                sub_heading="The name that has been associated with building and construction works for development monuments over generations from the Kingdom of Saudi Arabia and to the Middle East."
                button="Know More "
            />
            <Experience62
                imageSrc="https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg"
                heading="Experience 62+ Years"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Learn More"
            />
            <ImageBoxRight
                imageSrc="https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg"
                heading="the board of directors"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Get to know"
            />
            <Company />
            <ImageBoxLeft
                imageSrc="https://thumbs.dreamstime.com/b/bengal-tiger-tige-basking-sun-zoo-51748104.jpg"
                heading="Employment Portal"
                text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
                buttonText="Apply now"
            />
            <NewsHealdine />
        </>
    )
}

export default HomeScreen