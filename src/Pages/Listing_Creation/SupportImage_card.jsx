import React from 'react';

const SupportImageCard = ({ title, description, imageSrc, buttonText1, buttonText2, buttonLink1, buttonLink2 }) => {
  return (
    <div className='flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-2xl'>
        {title}
      </h1>
      <p className='mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12'>
        {description}
      </p>
      <img
        style={{ "height": "auto", "maxWidth": "100%" }}
        className='w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12'
        src={imageSrc}
        alt="Supporters - Amzvistas"
      />
      <p className='w-full md:w-2/3 lg:w-1/2 text-center my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12'>
        {description}
      </p>

      <div className='my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12'>
        <a
          href={buttonLink1}
          style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} 
          className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button mb-2 sm:mb-0 md:mr-4"
        >
          <span>{buttonText1}</span>
        </a>
        <a
          href={buttonLink2}
          style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}} 
          className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button"
        >
          <span>{buttonText2}</span>
        </a>
      </div>
    </div>
  );
};

export default SupportImageCard;
