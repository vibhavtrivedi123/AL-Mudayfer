import React from 'react'
import Heading from '../../components/Heading/Heading'
import Investment1 from '../../components/InvestmentOpp/Investment'
import aboutscreen from '../../images/about/aboutscreen.jpg'


const Investment = () => {
  return (
    <>
      <Investment1
        backgroundImage={aboutscreen}
        heading1="our investments"
        sub_heading="Always be close to us and part of our journey and get what you want from it’s source."
        button="get started"
      />
      <Heading
        heading1="Partner with AL-MUDAIFER"
        heading2="our companies"
        description1="TAl-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
      />
    </>
  )
}

export default Investment