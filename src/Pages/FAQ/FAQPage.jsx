import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Supporter from '../../Components/Supporter/Supporter'
import MainContentPrivacy from '../../Components/FAQ/FAQ'
import { Helmet } from 'react-helmet'

const FAQPage = () => {
  return (
    <>
    <Helmet>
  <title>FAQs - Frequently Asked Questions | AmzVistas</title>
  <meta name="description" content="Find answers to frequently asked questions about AmzVistas services, Amazon FBA, Shopify, dropshipping, and more. Get clarity on our offerings and how we can help you succeed in e-commerce." />
  <meta name="keywords" content="FAQs, frequently asked questions, AmzVistas services, Amazon FBA, Shopify, dropshipping, e-commerce" />
  <link rel="canonical" href="https://www.amzvistas.com/Contact-us" />
</Helmet>

     <Navbar />
<MainContentPrivacy/>
     <Supporter />
      <Footer />
    
    </>
  )
}

export default FAQPage