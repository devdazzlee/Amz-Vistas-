import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Advertising from '../../Components/Advertising/Advertising'
import Inventer from '../../Components/INVENTOR/Inventer'
import ContactDiv from '../../Components/Contact_Div/ContactDiv'
import Heading_Component from '../Shopify-Dropshipping/Heading_Component/Heading_Component'
import Shopify_Card from '../Shopify-Dropshipping/Shopify_Card/Shopify_Card'
import Shopify_Card_sec from '../Shopify-Dropshipping/Shopify_Card/Shopify_Card_Sec'
import Footer from '../../Components/Footer/Footer'
import Supporter from '../../Components/Supporter/Supporter'
import Upsclaing from '../../Components/Upscaling/Upsclaing'
import Content_Strategizing from '../../Components/Content_Strategizing/Content_Strategizing'
import Services_Card_New from '../../Components/Services_Cards_New/Services_Card_new'
import Services_Card_New2 from '../../Components/Services_Cards_New/Services_Card_new2'
import Amazon_Store_Card from '../Amazon_Store_Creation/Amazon_Banner_Card'
import Amazon_Store_CardSec from '../Amazon_Store_Creation/Amazon_Store_CardSec'
import Amazon_Store_Banner from '../Amazon_Store_Creation/Amazon_Store_Banner'
import SupportImageCard from '../Listing_Creation/SupportImage_card'
import Product_Reserch_Banner from '../Product_Research/Product_Reserch_Banner'
import Product_Reserch_Card from '../Product_Research/Product_Resech_Card'
import Product_Reserch_Card3 from '../Product_Research/Product_Reserch_Card3'
import Product_Reserch_Card4 from '../Product_Research/wqwq'
import Virtual_Assistant_Banner from './Virtual_AssistantBanner'
import Virtual_Assistant_Card from './Virtual_Assistant_Card'
import Virtual_Assistant_Card2 from './Virtual_Assistant_Card2'
import Virtual_Card3 from './Virtual_Assistant_Card3'
import { Helmet } from 'react-helmet'


const Virtual_Assistant   = () => {

  
  return (
    <>
    <Helmet>
        <title>Amazon Store Creation Services by AmzVistas</title>
        <meta name="description" content="Explore AmzVistas' comprehensive services, including Amazon store creation, storefront customization, optimized product listing, store management, Amazon analytics, and expert guidance in establishing a successful online presence." />
        <meta name="keywords" content="Amazon store creation, storefront customization, product listing optimization, store management, Amazon analytics, e-commerce services" />
  <link rel="canonical" href="https://www.amzvistas.com/Virtual_Assistant" />
        </Helmet>
      <Navbar />
      <Virtual_Assistant_Banner />
      <Virtual_Assistant_Card />
      <Virtual_Assistant_Card2 />
      <Virtual_Card3/>
      <Product_Reserch_Card4/>
      <Advertising />
      <Inventer />
      <ContactDiv />
      <Heading_Component />
      <Shopify_Card />
      <Shopify_Card_sec />
      <Content_Strategizing />


      <Upsclaing />
      <ContactDiv />
      <Supporter />
      <Footer />
    </>
  )
}

export default Virtual_Assistant               