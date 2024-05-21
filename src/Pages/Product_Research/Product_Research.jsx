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
import Product_Reserch_Banner from './Product_Reserch_Banner'
import Product_Reserch_Card from './Product_Resech_Card'
import Product_Reserch_Card3 from './Product_Reserch_Card3'
import Product_Reserch_Card4 from './wqwq'
import { Helmet } from 'react-helmet'
import image1 from '../../Images/web.1-02.jpg'

const Product_Research   = () => {

  
  return (
    <>
    <Helmet>
  <title>Amazon Product Research Services by AmzVistas</title>
  <meta name="description" content="Discover AmzVistas' comprehensive Amazon product research services. We specialize in helping sellers find profitable products, conduct market analysis, and develop winning strategies for success on Amazon." />
  <meta name="keywords" content="Amazon product research, product analysis, market research, Amazon FBA, e-commerce services" />
  <link rel="canonical" href="https://www.amzvistas.com/Product-Research" />
</Helmet>

      <Navbar />
      <Product_Reserch_Banner />
      <Product_Reserch_Card />
      <Amazon_Store_CardSec />
      <Product_Reserch_Card3/>
      <Product_Reserch_Card4/>
      <Advertising />
      <Inventer />
      <ContactDiv />
      <Heading_Component />
      <Shopify_Card />
      <Shopify_Card_sec />
      <Content_Strategizing />

      <SupportImageCard
      title="BRAND STORES THAT WE HAVE ESTABLISHED"
      description="We have helped empower aspiring brands and businesses through our scalable dropshipping fulfillment service."
      imageSrc={image1}
      buttonText1="GET A QUOTE"
      buttonLink1="#quote-link"  
      buttonText2="+1 (737) 295-1375"
      buttonLink2="tel:+17372951375"
    />

      <Upsclaing />
      <ContactDiv />
      <Supporter />
      <Footer />
    </>
  )
}

export default Product_Research               