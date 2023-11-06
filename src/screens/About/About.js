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
        heading1="Partner with AL-MUDAIFER"
        heading2="The BUILDING & CONSTRUCTION EXPERT"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />
      <Trusted />
      <ImageBoxLeft
        imageSrc={block}
        heading="Employment Portal"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="know more"
      />
      <ImageBoxRight
        imageSrc={interlock}
        heading="the board of directors"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="Get to know"
      />
      <ImageBoxLeft
        imageSrc={skirting}
        heading="Employment Portal"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="know more"
      />
      <ImageBoxRight
        imageSrc={tiles}
        heading="the board of directors"
        text="We invested in building a nation, and in developing a human being, so the products of Saleh Al-Mudaifer Sons Holding Company became an essential pillar in the construction and finishing work of various development projects in the Kingdom of Saudi Arabia, as the company’s investments were built on the legacy of the founding father and specialization in its supply chains."
        buttonText="Get to know"
      />
      <Heading
        heading1="Partner with AL-MUDAIFER"
        heading2="Testimonials"
        description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />
      .
    </>
  )
}

export default About