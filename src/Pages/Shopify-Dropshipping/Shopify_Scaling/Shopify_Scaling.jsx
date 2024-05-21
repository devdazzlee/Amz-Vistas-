import {React , useEffect } from 'react'
import { Upscaling_Card } from '../../../Components/Upscaling/Upscaling_Card/Upscaling_Card'
import '../../../Components/Animation.css'
import { Link } from 'react-router-dom'
import Image1 from '../.../../../../Images/SEO_20_150x150.png'
import Image2 from '../.../../../../Images/SEO_22_150x150-min.png'
import Image3 from '../.../../../../Images/SEO_33_150x150.png'
const Dropshipping_Upsclaing = () => {

 

  return (
    <>
  <div  className='bottom-Animation flex flex-col items-center justify-center my-4' >
  <h1 className='bottom-Animation text-3xl sm:text-2xl md:text-4xl my-2 font-bold text-center sm:text-left'>
  OUR DROPSHIPPING FULFILLMENT AND MARKETING MODEL

</h1>
<p className='bottom-Animation text-sm sm:text-base md:text-md  lg:text-xl w-4/5 sm:w-2/3 text-center my-2'>
We strive to build an automated module that is functional, cost-effective, and fulfills even the most arduous dropshipping tasks.
</p>
<Link to={'/Contact-us'} >

<button  className="backgroundcolor-yellow  neon-button btn-getinTuch Animate-from-bottom main-center-text-rtf my-2 mr-2 w-full sm:w-auto md:w-auto lg:w-auto text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full">
  Get In Touch!
</button>
</Link>


<div   className='flex  mb-8  flex-wrap' >

<Upscaling_Card
  imageSrc={Image1}
  title="Data Push"
  description="Because we want you to attain your greatest potential, all our
  strategic choices and consultations are supported by research and evidence."
  buttonText="Learn More"
/>
<Upscaling_Card
  imageSrc={Image2}
  title="Growth Approach"
  description="Because our service approach is centered on a growth-hacking paradigm, we focus on implementing our marketing services for amazon."
  buttonText="Learn More"
/>
<Upscaling_Card
  imageSrc={Image3}
  title="Operational Excellence"
  description="We like navigating the intricacies of the e-commerce ecosystem and strive for excellence. Our amazon marketing."
  buttonText="Learn More"
/>



</div>




  </div>
    
    </>
  )
}

export default Dropshipping_Upsclaing