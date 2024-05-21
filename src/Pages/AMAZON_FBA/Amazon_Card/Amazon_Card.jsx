import React from 'react'
import '../../../Components/Animation.css'
import { Link } from 'react-router-dom'
import image1 from '../../../Images/images-servcs-bnr-side-img24.png'
const Amazon_Card = () => {
  return (
    <>
      <div>

<div className="w-full container mx-auto md:px-6">
  <div className="flex flex-col md:flex-row justify-between pt-10 animation-from-left">

  <div className='mt-20 md:mt-0 fade-from-right w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
      <img
        src={image1}
        alt="Amazon PPC - Amzvistas"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>

    <div className="fade-from-right element-to mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
      <h2 className="mb-6 text-3xl text-black font-bold">
        <span className='mb-6'>SCALE A PROFITABLE BUSINESS WITH AMAZON FBA AUTOMATION</span></h2>
      <p className="mb-6 text-black dark:text-neutral-300">
      It's time to leverage the power of Amazon FBA and make most of your online sales. In simplest terms, you have to send the inventory and watch the show; we'll handle the rest. FBA management incorporates the following areas:
      </p>

      <div className='flex mt-2 flex-wrap text-black w-3/4	mb-4 justify-between' >
           <ul>

           



              <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Warehousing</li>
              <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Packaging</li>
              {/* <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i></li> */}
              <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Dispatching</li>

            </ul>
            
            


            <ul>
            <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Returns</li>
              {/* <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i> </li> */}
              <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Refunds</li>
              <li   className='mb-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Reviews</li>
            </ul>
           </div>

        <Link to={'/Contact-us'} >

<button   style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  Live Chat
</button>
</Link>
      <button style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (737) 295-1375
            </button>
    </div>

   

  </div>
</div>

</div>
    </>
  )
}

export default Amazon_Card