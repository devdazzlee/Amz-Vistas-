import React from 'react'
import { Link } from 'react-router-dom'

const  Product_Research_Card2 = () => {
  return (
    <>
      <div>

<div className="w-full container mx-auto md:px-6">
  <div className="flex flex-col md:flex-row justify-between pt-10 animation-from-left">

  <div className="mt-20 md:mt-0 left-side mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
      <h2 className="mb-6 text-3xl text-black font-bold">
        <span className='mb-6'>Niche Analysis</span></h2>
      <p className="mb-6 text-black dark:text-neutral-300">
      To cut through product competition, AMZ Vistas does a bit of elbow grease to curate the perfect product niche for e-commerce brands. We exploit the big to make small but powerful impacts in the segmented market, with the right niche and product selection.
      </p>

      


      <div className='flex mt-2 flex-wrap text-black w-3/4	mb-4 justify-between' >
           <ul>

        


              <li   className='mb-2 mr-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Geographical selection</li>
              <li   className='mb-2 mr-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Behavioral interests</li>
              <li   className='mb-2 mr-2' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Sampling</li>

            </ul>
            
            


            <ul>
              <li   className='mb-2 ' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Sourcing & Supplier</li>
              <li   className='mb-2 ' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Delivery ease</li>
              <li   className='mb-2 ' ><i style={{color: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Price disparity</li>
            </ul>
           </div>

        <Link to={'/Contact-us'} >

<button   style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
  neon-button 
</button>
</Link>
      <button style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (737) 295-1375
            </button>
    </div>

  <div className='right-side w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
      <img
        src="https://www.amzinventor.com/images/holistic-img1.png"
        alt="Product Research - Amzvistas"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>

    

   

  </div>
</div>

</div>
    </>
  )
}

export default  Product_Research_Card2