import React, { useState , useEffect } from 'react';
import '../../Components/Animation.css'
const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleToggle5 = () => {
    setIsOpen5(!isOpen5);
  };
  useEffect(() => {
    const cards = document.querySelectorAll('.Animate-from-bottom');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (

    <div   >
<div className='flex flex-col  items-center text-center'>
  <h1 className='text-2xl capitalize font-extrabold text-black Animate-from-bottom'>Frequently Asked Questions</h1>
  <p className='mb-4 mt-2 w-4/6 text-center Animate-from-bottom'>
    We aim to aid your progress online. However, if there's a query not addressed on our site, don't hesitate to contact our customer representative.
  </p>
</div>

  
    <div   style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
      <div  style={{ border: '1px solid #e5e1e1', width: '80%' }}>
        <div className='flex justify-between items-center p-4' onClick={handleToggle1}>
          <div className='ml-5'>
            <h3   className='font-bold text-sm'  style={{ color: 'black'   }}>What Is Your Best Approach To Selling Products On Amazon?</h3>
          </div>
          <div className='mr-10'>
          {isOpen1 ? (
  '-'
) : (
  '+'
)}

</div>

        </div>
        <div  style={{ margin : "0px 10px" }}>
          {isOpen1 && (
            <div style={{ padding: '10px' }}>
              <p  className='text-sm'  style={{ color: 'black' }}>
              Amazon is a great place to reach an untapped market and increase your revenues through product listing optimization, digital marketing, enhanced brand amazon content/A+ content, sponsored ads, engaging sales copy, attractive product descriptions, attractive product images, Amazon fulfillment, and many other methods. Our marketing services for amazon promise scaling of your business driven by sales.
              </p>
            </div>
          )}
        </div>
      </div>
     
      <div  style={{ border: '1px solid #e5e1e1', width: '80%' }}>
        <div className='flex justify-between items-center  p-4' onClick={handleToggle2}>
          <div className='ml-5'>
            <h3   className='font-bold text-sm'  style={{ color: 'black'   }}>Do I Need To Hire Amazon Marketing Service Professionals For My Business?</h3>
          </div>
          <div className='mr-10'>
          {isOpen2 ? (
  '-'
) : (
  '+'
)}

</div>

        </div>
        <div style={{ margin : "0px 10px" }}>
          {isOpen2 && (
            <div style={{ padding: '10px' }}>
              <p  className='text-sm'  style={{ color: 'black' }}>
              An Amazon marketing service professional will help you increase your brand's online visibility, run your online store properly, and drive more traffic to your product site, regardless of the size of your business or the product you want to advertise to your audience. As a result, you may promote your goods correctly and meet all Amazon rules by leveraging the considerable experience of Amazon marketing agencies. Furthermore, with the assistance of a marketing specialist, you can become the seller you've always wanted to be.
              </p>
            </div>
          )}
        </div>
      </div>

      <div  style={{ border: '1px solid #e5e1e1', width: '80%' }}>
        <div className='flex justify-between items-center  p-4' onClick={handleToggle3}>
          <div className='ml-5'>
            <h3   className='font-bold text-sm'  style={{ color: 'black'   }}>I Have A Successful Amazon E-Commerce Store. Do I Need To Hire Amazon Marketing Experts For My Online Business?</h3>
          </div>
          <div className='mr-10'>
          {isOpen3 ? (
  '-'
) : (
  '+'
)}

</div>

        </div>
        <div style={{ margin : "0px 10px" }}>
          {isOpen3 && (
            <div style={{ padding: '10px' }}>
              <p  className='text-sm'  style={{ color: 'black' }}>
              An Amazon marketing service professional will help you increase your brand's online visibility, run your online store properly, and drive more traffic to your product site, regardless of the size of your business or the product you want to advertise to your audience. As a result, you may promote your goods correctly and meet all Amazon rules by leveraging the considerable experience of Amazon marketing agencies. Furthermore, with the assistance of a marketing specialist, you can become the seller you've always wanted to be.
              </p>
            </div>
          )}
        </div>
      </div>
      <div  style={{ border: '1px solid #e5e1e1', width: '80%' }}>
        <div className='flex justify-between items-center  p-4' onClick={handleToggle4}>
          <div className='ml-5'>
            <h3   className='font-bold text-sm'  style={{ color: 'black'   }}>How Do I Know My Amazon Strategy Is Effective?</h3>
          </div>
          <div className='mr-10'>
          {isOpen4 ? (
  '-'
) : (
  '+'
)}

</div>

        </div>
        <div style={{ margin : "0px 10px" }}>
          {isOpen4 && (
            <div style={{ padding: '10px' }}>
              <p  className='text-sm'  style={{ color: 'black' }}>
              If your consumers are responding well, but Amazon alterations are causing you to spend more than you planned, you should know that increasing your Amazon sales is the answer to your question. Even if you have a solid sales track record, you may believe that your strategy is not yielding results or that you are not making enough money at times. In this regard, you should change your marketing plan to increase your company's sales. Amazon allows you to sell your products across all social media platforms and marketplaces.
              </p>
            </div>
          )}
        </div>
      </div>
      <div  style={{ border: '1px solid #e5e1e1', width: '80%' }}>
        <div className='flex justify-between items-center  p-4' onClick={handleToggle5}>
          <div className='ml-5'>
            <h3   className='font-bold text-sm'  style={{ color: 'black'   }}>How Long Do You Take To Set Up An Online E-Commerce Store?</h3>
          </div>
          <div className='mr-10'>
          {isOpen5 ? (
  '-'
) : (
  '+'
)}

</div>

        </div>
        <div style={{ margin : "0px 10px" }}>
          {isOpen5 && (
            <div style={{ padding: '10px' }}>
              <p  className='text-sm'  style={{ color: 'black' }}>
              In a perfect scenario, it would take 3-4 weeks to launch an e-commerce business on Amazon. However, this may cause a delay based on your need. AMZ Vistas has a team of highly experienced Amazon marketers and business advisors who can assist you in setting up your Amazon online store within the time frame specified. With our deployment of marketing strategy, Amazon ranks and thousands of businesses have progressed, and we bear credit for that remarkable success. It has provided extensive expertise in providing high-quality services based on proven approaches.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
    </div>

  );
};

export default Faq;