import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Banner_Contact from './Banner-Contact/Banner_Contact'
import Footer from '../../Components/Footer/Footer'
import Supporter from '../../Components/Supporter/Supporter'
import Contact_Form from './Contact_Form/Contact_Form'
import { Helmet } from 'react-helmet'

const CONTACTus = () => {
  return (
    <>
<Helmet>
    <title>Contact AmzVistas - Reach Out for Expert Amazon Services</title>
    <meta name="description" content="Contact AmzVistas for expert Amazon services, including Amazon FBA setup & management, store setup assistance, storefront customization, optimized product listing, store management, Amazon analytics, dropshipping store designing, dropshipping marketing, niche selection, store management, supplier & sourcing, and visual ads." />
    <meta name="keywords" content="Contact AmzVistas, Amazon services, Amazon FBA, store setup, dropshipping, store management, visual ads, dropshipping marketing, niche selection, supplier & sourcing" />
    <link rel="canonical" href="https://www.amzvistas.com/Contact-us" />
</Helmet>

   <Navbar /> 
   <Banner_Contact />
   <Contact_Form/>
   <Supporter />
      <Footer />
    
    </>
  )
}

export default CONTACTus