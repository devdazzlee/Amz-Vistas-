import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Supporter from '../../Components/Supporter/Supporter'
import Footer from '../../Components/Footer/Footer'
import Terms_FAQ from '../../Components/FAQ/Terms_FAQ'
import { Helmet } from 'react-helmet-async'


const Terms_Condition = () => {
  return (
    <>
          {/* <Helmet>
        <title>Terms and Conditions - Amzvistas</title>
        <meta name="description" content="View the terms and conditions of AmzVistas for using our services. Understand the guidelines and policies before engaging with us." />
        <meta name="keywords" content="terms, conditions, legal, agreement" />
        <link rel="canonical" href="https://www.amzvistas.com/Terms-Condition" />
      </Helmet> */}

    <Navbar />
<Terms_FAQ/>
     <Supporter />
      <Footer />
    
    
    </>
  )
}

export default Terms_Condition