import { useEffect , React } from 'react';
import '../../Components/Animation.css'
const Service_Card = ({ img, heading, description }) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.Responsive-icon-card');
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
    <>
      <div className='Responsive-icon-card flex justify-center w-full mb-4 sm:w-full'>

        <div className="self-start">
          <img className='w-14 h-14 mr-2' src={img} alt={`Amzvistas/${img}`} />
        </div>

        <div>
          <h5 className="font-bold mb-2">{heading}</h5>
          <p className='w-44'>{description}</p>
        </div>

      </div>
    </>
  );
};

export default Service_Card;
