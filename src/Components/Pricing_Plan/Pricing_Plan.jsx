import { useState, useEffect } from 'react';
import '../../Components/Animation.css'
function Pricing_Plan() {
  const [isAnnual, setIsAnnual] = useState(true);
  useEffect(() => {
    const cards = document.querySelectorAll('.Eleveted-from-bottom');

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
    <main className="flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="w-full ">

        {/* Pricing table component */}
        <div  className='py-4' >
          
          {/* Pricing toggle */}
       
        
          <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
        
            {/* Pricing tab 1 */}
            <div  style={{"boxShadow" : "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}   className="h-full Eleveted-from-bottom">                                
              <div className="relative flex flex-col h-full p-6  bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                <div className="mb-5">
                  <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">Personal</div>
                  {/* <div className="inline-flex items-baseline mb-2">
                    <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$100</span>
                    <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl" x-text={isAnnual ? '29' : '35'}></span>
                    <span className="text-slate-500 font-medium">/mo</span>
                  </div> */}
                  <div className="text-sm text-slate-500 mb-5">In the realm of personal experiences, a myriad of variations exists, each weaving a unique narrative that contributes to the rich tapestry of individual lives. Life's journey is marked by twists and turns</div>
                  
                  <a  style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}}  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg  px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                  Get A Quote
                  </a>
                </div>
                <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Website Development</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Appealing Store Design</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Winning Drop-Shipping Products</span>
                                </li>
                </ul>
              </div>
            </div>

            {/* Pricing tab 2 */}
            <div  style={{"boxShadow" : "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}   class="dark h-full Eleveted-from-bottom">
                        <div class="relative flex flex-col h-full p-6  bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                            <div class="absolute top-0 right-0 mr-6 -mt-4">
                                <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                            </div>
                            <div class="mb-5">
                                <div class="text-slate-900 dark:text-slate-200 font-semibold mb-1">Professional</div>
                                <div class="inline-flex items-baseline mb-2">
                                    <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">$200</span>
                                    <span class="text-slate-900 dark:text-slate-200 font-bold text-4xl" x-text="isAnnual ? '49' : '55'"></span>
                                    <span class="text-slate-500 font-medium">/mo</span>
                                </div>
                                <div class="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                                <a  style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}}   class="w-full inline-flex justify-center whitespace-nowrap rounded-lg  px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                Get A Quote
                                </a>
                            </div>
                            <div class="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                            <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                            



  



                             
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Website Development</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Appealing Store Design</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Winning Drop-Shipping Products</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Niche Selection</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Finding Right Supplier</span>
                                </li>
                            </ul>
                        </div>
                    </div>

            {/* Pricing tab 3 */}
            <div  style={{"boxShadow" : "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}   class="h-full Eleveted-from-bottom">
                        <div class="relative flex flex-col h-full p-6  bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                            <div class="mb-5">
                                <div class="text-slate-900 dark:text-slate-200 font-semibold mb-1">Enterprise</div>
                                <div class="inline-flex items-baseline mb-2">
                                    <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">$300</span>
                                    <span class="text-slate-900 dark:text-slate-200 font-bold text-4xl" x-text="isAnnual ? '79' : '85'"></span>
                                    <span class="text-slate-500 font-medium">/mo</span>
                                </div>
                                <div class="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                                <a  style={{  backgroundImage: "linear-gradient(180deg, rgba(250, 152, 0, 1) 0%, rgba(223, 123, 1, 1) 100%)"}}   class="w-full inline-flex justify-center whitespace-nowrap rounded-lg  px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                Get A Quote
                                </a>
                            </div>
                            <div class="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                            <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">

                            






                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Website Development</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Appealing Store Design</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Winning Drop-Shipping Products</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Finding Right Supplier</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Facebook and Google Ads</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Customer Support</span>
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Sales Copywriting</span>
                                </li>
                            </ul>
                        </div>
                    </div>
            
                

        
          </div>
        
        </div>
        {/* End: Pricing table component */}

      </div>
    </main>
  );
}

export default Pricing_Plan;
