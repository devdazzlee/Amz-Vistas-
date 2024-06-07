import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import about_image from'../../../Images/images-about-people.png'
const About_us_Banner = () => {
  

  return (
    <div style={{ background: '#232F3F' , paddingTop : "80px" }} className='main-banner '>

      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between  items-center py-6 md:py-24 animation-from-left">

        <div  className=" md:mt-0  mt-11 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <h2 className="mb-6 text-3xl text-white font-bold">
              <span className='mb-6'>Generating Ascending Graphs </span> <br /> Of Sales <br /> SERVICES.
            </h2>
            <p className="mb-6 text-white ">
              We are an  end-end E-commerce service agency that combines cutting-edge  technologies with innovative marketing tactics. We identify  loop holes and strategically place brands in the Saturated and competitive E-commerce industry to provide the best online shopping experince.
            </p>

            <Link to={'/Contact-us'} >

            <button   style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto  text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-2">
              Live Chat
            </button>
</Link>
            <button style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} className="neon-button w-full md:w-auto text-white font-bold py-2 px-4 rounded-full">
              +1 (737) 295-1375
            </button>
          </div>

          <div className='fade-up-element w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
            <img
              src={about_image}
              style={{ maxWidth: '100%', height: 'auto' }}
              alt="Banner Image Amzvistas"
              />
          </div>

        </div>
      </div>

    </div>
  );
};

export default About_us_Banner;
