import React from 'react'
import Investment from '../../components/InvestmentOpp/Investment'

import aboutscreen from '../../images/about/aboutscreen.jpg'
import Heading from '../../components/Heading/Heading'
import Milestone from '../../components/Milestone/Milestone'
import Trusted from '../../components/TrustedByCompany/Trusted'
import ImageBoxRight from '../../components/ImageBoxRight/ImageBoxRight'
import ImageBoxLeft from '../../components/ImageBoxLeft/ImageBoxLeft'

import block from '../../images/about/block.jpg'
import interlock from '../../images/about/interlock.jpg'
import tiles from '../../images/about/tiles.jpg'
import skirting from '../../images/about/skirting.jpg'
import Testimonial from '../../resuable/testimonials/Testimonial'
import Card from '../../resuable/cards/Card'

const About = () => {
  return (
    <>
      <Investment
        backgroundImage={aboutscreen}
        heading1="construction"
        heading2="material company  "
        sub_heading="Leader in the manufacture of terrazza tiles, blocks, cement tiles, interlocks and balustrades for more than 50 years in the middle east."
        button="Get started "
      />
      <Heading
        heading1="Partner with AL-MUDAYFER"
        heading2="The BUILDING & CONSTRUCTION EXPERT"
        description1="Al-Omraniah for Trade, Industry and Contracting Company was established at the beginning of the seventh decade of the last century. Since it’s establishment in 1972, it has been a pioneer in the manufacture of terrazzo tiles, blocks, cement tiles, interlocks and balconies in the middle east. "
      />
      <Card />
      <Trusted />
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
        heading1="Partner with AL-MUDAYFER"
        heading2="Testimonials"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />
      <Testimonial />
    </>
  )
}

export default About