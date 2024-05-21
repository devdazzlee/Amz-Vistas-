import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Images/Asset 6.png'
import { Link  , useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)

const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };
  const handleClick = () => {
    window.location.href = 'tel:+17372951375';
  };


  function handleClick23() {
    navigate("/Contact-us");
  }

  return (
    <nav 
    style={{
      position: 'fixed',
      zIndex: '100',
    
    }}
    
    
    className="navbar">
      <div className="navbar-container">
   <Link  to={"/"} >


   <img  className='w-24  md:mx-12 mx-4'  src={logo} alt="Amzvistas logo" />

      
      
      </Link>

        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>

        <Link itemprop="availability" href="https://schema.org/InStock"
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
              to={'/'}
            >
              Home
            </Link>
          <li className="with-dropdown">
          <Link itemprop="availability" href="https://schema.org/InStock"
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
              to={'/'}
            >
              Services  <i class="fa fa-caret-down" aria-hidden="true"></i>
            </Link>
            
            <ul className="dropdown">
              <li className="nested-dropdown-container">
                <a >Amazon Store Creation <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <ul className="nested-dropdown">
                  <li>
                    <Link to={"/Listing-creation"} >
                    
                    Listing creation
                    </Link>
                    </li>
                  <li>

                  <Link to={"/Amazon-storefront"} >
                  Amazon Storefront
                    </Link>
                    </li>
                </ul>
              </li>
              <li className="nested-dropdown-container">
                <a >Amazon Product Hunting <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <ul className="nested-dropdown">
                  <li>
                  <Link to={"/Product-Research"} >
                  Product Research
                    </Link>
                    </li>
                  <li>
                  <Link to={"/Product-Research"} >
                  Niche Analysis
                    </Link>
                  </li>

                  <li>
                  <Link to={"/Product-Research"} >
                  Profitability Analysis    
                    </Link>
                    
                </li>
                  <li>
                  <Link to={"/Product-Research"} >
                  Basic Keyword Research    
                    </Link>
                    

                  </li>
                </ul>
              </li>

<li  className="nested-dropdown-container"  >
      
<Link to={"/Ebc_Content"} >
EBC/A+ Content   
</Link>
     
</li>


<li className="nested-dropdown-container">
                <a href="/">Virtual Assistant <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <ul className="nested-dropdown">
                  <li><Link to={"/Virtual_Assistant"}  >Amazon Inventory Management</Link></li>
                  <li><Link to={"/Virtual_Assistant"}  >Amazon Account Feedback</Link></li>
                  <li><Link to={"/Virtual_Assistant"}  >Brand Registration</Link></li>
                  <li><Link to={"/Virtual_Assistant"}  >Analytics & Reporting</Link></li>
                </ul>
              </li>
              <li  className="nested-dropdown-container"  >
                <Link  to={"/Amazon_PPC"} >
                Amazon PPC
                </Link>
</li>


            </ul>
          </li>
<li   className='mb-dropdown' >


<Link itemprop="availability" href="https://schema.org/InStock"
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
              onClick={()=>{
                setDropdown(!dropdown)
              }}
            >
              Services  <i class="fa fa-caret-down" aria-hidden="true"></i>
            </Link>
{
  dropdown ? <>
   <li     onClick={()=>{
    setDropdown1(!dropdown1)
   }}        className="block py-2 pl-3 pr-4 text-white rounded  md:p-0">
   <a>Amazon Store Creation <i class="fa fa-caret-down" aria-hidden="true"></i></a>
   </li>
   {
  dropdown1 ?  <>
  <li>
  <Link to={"/Listing-creation"}  style={{"color" :"black" , "textDecoration" :"underline"}}   >
                    
                    Listing creation
                    </Link>
                    </li>
                  <li>

                  <Link to={"/Amazon-storefront"}  style={{"color" :"black" , "textDecoration" :"underline"}}   >
                  Amazon Storefront
                    </Link>
                    </li>
  
  </> : ""
}

   <li     onClick={()=>{
    setDropdown2(!dropdown2)
   }}        className="block py-2 pl-3 pr-4 text-white rounded  md:p-0">
<a >Amazon Product Hunting <i class="fa fa-caret-down" aria-hidden="true"></i></a>
   </li>





   {
  dropdown2 ?  <>
  <li>
 
  <li>
                  <Link   style={{"color" :"black" , "textDecoration" :"underline"}}   to={"/Product-Research"} >
                  Product Research
                    </Link>
                    </li>
                  <li>
                  <Link   style={{"color" :"black" , "textDecoration" :"underline"}}   to={"/Product-Research"} >
                  Niche Analysis
                    </Link>
                  </li>

                  <li>
                  <Link   style={{"color" :"black" , "textDecoration" :"underline"}}   to={"/Product-Research"} >
                  Profitability Analysis    
                    </Link>
                    
                </li>
                  <li>
                  <Link   style={{"color" :"black" , "textDecoration" :"underline"}}   to={"/Product-Research"} >
                  Basic Keyword Research    
                    </Link>
                    

                  </li>


                    </li>
  
  </> : ""
}
<li>
<Link to={"/Ebc_Content"} >
EBC/A+ Content   
</Link>
</li>


<li     onClick={()=>{
    setDropdown3(!dropdown3)
   }}        className="block py-2 pl-3 pr-4 text-white rounded  md:p-0">
<a >Virtual Assistant <i class="fa fa-caret-down" aria-hidden="true"></i></a>
   </li>
   {
  dropdown3 ?  <>
   <li    ><Link style={{"color" :"black" , "textDecoration" :"underline"}}  to={"/Virtual_Assistant"}  >Amazon Inventory Management</Link></li>
                  <li   ><Link    style={{"color" :"black" , "textDecoration" :"underline"}}  to={"/Virtual_Assistant"}  >Amazon Account Feedback</Link></li>
                  <li   style={{"color" :"black"}} ><Link     style={{"color" :"black" , "textDecoration" :"underline"}} to={"/Virtual_Assistant"}  >Brand Registration</Link></li>
                  <li   style={{"color" :"black"}} ><Link     style={{"color" :"black" , "textDecoration" :"underline"}} to={"/Virtual_Assistant"}  >Analytics & Reporting</Link></li>
  </> : ""
}


<Link  to={"/Amazon_PPC"} >
                Amazon PPC
                </Link>




  </> : ''

}


</li>






          <Link itemprop="availability" href="https://schema.org/InStock"
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
              to={'/AMAZON-FBA'}
            >
              Amazon FBA Automation
            </Link>
            <Link itemprop="availability" href="https://schema.org/InStock"
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
              to={'/shopify-dropshipping'}
            >
              Shopify Dropshipping
            </Link>
            <Link itemprop="availability" href="https://schema.org/InStock"
              className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
              to={'/about-us'}
            >
              About
            </Link>
            
            
          <li>
           <Link itemprop="availability" href="https://schema.org/InStock"
              className="block  text-white rounded  md:p-0   "
              to={'/Contact-us'}
            >
              Contact Us
            </Link>
          
          </li>


      <button
        style={{ background: "#232F3F" }}
        className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button"
        itemscope
        itemtype="http://schema.org/Button"
        onClick={handleClick}
      >
        <span itemprop="name">+1 (737) 295-1375</span>
      </button>
{/* <Link   to={'/Contact-us'} >  */}
<button
onClick={handleClick23}
  style={{ background: "#232F3F" }}
  className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button"
  itemscope
  itemtype="http://schema.org/Button"
>
  <span itemprop="name">Get A Quote</span>
</button>
{/* </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
