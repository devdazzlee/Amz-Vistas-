import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Shopify_Banner from './Shopinfy_Banner/Shopify_Banner'
import Dropshipping_Upsclaing from './Shopify_Scaling/Shopify_Scaling'
import Advertising from '../../Components/Advertising/Advertising'
import Inventer from '../../Components/INVENTOR/Inventer'
import Content_Strategizing from '../../Components/Content_Strategizing/Content_Strategizing'
import Supporter from '../../Components/Supporter/Supporter'
import Footer from '../../Components/Footer/Footer'
import ContactDiv from '../../Components/Contact_Div/ContactDiv'
import Pricing_Plan from '../../Components/Pricing_Plan/Pricing_Plan'
import Shopify_Card from './Shopify_Card/Shopify_Card'
import Shopify_Card_sec from './Shopify_Card/Shopify_Card_Sec'
import Heading_Component from './Heading_Component/Heading_Component'
import { Helmet } from 'react-helmet'

const Shopify_dropshipping = () => {


  return (
    <>
<Helmet>
  <title>Shopify Dropshipping Services by AmzVistas</title>
  <meta name="description" content="Explore AmzVistas' Shopify dropshipping services, including dropshipping store designing, dropshipping marketing, niche selection, store management, supplier & sourcing, and visual ads, to kickstart your e-commerce journey." />
  <meta name="keywords" content="Shopify dropshipping, dropshipping store designing, dropshipping marketing, niche selection, store management, supplier, sourcing, visual ads, e-commerce, online business" />

</Helmet>

     <Navbar />
     <Shopify_Banner/>
<Dropshipping_Upsclaing/>
{/* <Pricing_Plan/> */}
<Inventer/>
<ContactDiv/>
<Heading_Component/>
<Shopify_Card/>
<Shopify_Card_sec/>
<Content_Strategizing/>
<Supporter/>
<Footer/>
    </>
  )
}

export default Shopify_dropshipping