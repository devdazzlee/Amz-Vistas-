import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CONTACTus from './Pages/CONTACT-US/CONTACTus';
import About from './Pages/About-us/About';
import Shopify_dropshipping from './Pages/Shopify-Dropshipping/shopify_dropshipping';
import AMAZON_FBA from './Pages/AMAZON_FBA/AMAZON_FBA';
import Amazon_store_creation from './Pages/Amazon_Store_Creation/amazon_store_creation';
import ScrollToTop from './Components/Scrool_Top/Scroll_Top';
import MainContentPrivacy from './Components/FAQ/FAQ';
import FAQPage from './Pages/FAQ/FAQPage';
import Listing_Creation from './Pages/Listing_Creation/Listing_Creation';
import Amazon_Store_Fornt from './Pages/Amazon_Store_Front/Amazon_Store_Front';
import Product_Research from './Pages/Product_Research/Product_Research';
import Ebc_Content from './Pages/Ebc-content/Ebc-content';
import Virtual_Assistant from './Pages/Virtual_Assistant/Virtual_Assistant';
import Amazon_PPC from './Pages/Amazon_PPC/Amazon_PPC';
import Terms_Condition from './Pages/Terms&Condition/Terms&Condition';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <ScrollToTop />
                <Home />
              </>
            }
          />
          <Route
            path={"/Contact-us"}
            element={
              <>
                <ScrollToTop />
                <CONTACTus />
              </>
            }
          />
          <Route
            path={"/about-us"}
            element={
              <>
                <ScrollToTop />
                <About />
              </>
            }
          />
          <Route
            path={"/shopify-dropshipping"}
            element={
              <>
                <ScrollToTop />
                <Shopify_dropshipping />
              </>
            }
          />
          <Route
            path={"/AMAZON-FBA"}
            element={
              <>
                <ScrollToTop />
                <AMAZON_FBA />
              </>
            }
          />
          <Route
            path={"/Services"}
            element={
              <>
                <ScrollToTop />
                <Amazon_store_creation />
              </>
            }
          />
            <Route
            path={"/Privacy-Policy"}
            element={
              <>
                <ScrollToTop />
                <FAQPage/>
              </>
            }
          />

<Route
            path={"/Listing-creation"}
            element={
              <>
                <ScrollToTop />
                <Listing_Creation/>
              </>
            }
          />
<Route
      path={"*"}
      element={
        <>
        <ScrollToTop/>
          <Home />
        </>
      }
    />


<Route
            path={"/Amazon-storefront"}
            element={
              <>
                <ScrollToTop />
                <Amazon_Store_Fornt/>
              </>
            }
          />
<Route
            path={"/Product-Research"}
            element={
              <>
                <ScrollToTop />
                <Product_Research/>
              </>
            }
          />


<Route
            path={"/Niche-Analysis"}
            element={
              <>
                <ScrollToTop />
                <Product_Research/>
              </>
            }
          />



<Route
            path={"/Ebc_Content"}
            element={
              <>
                <ScrollToTop />
                <Ebc_Content/>
              </>
            }
          />

<Route
            path={"/Amazon_PPC"}
            element={
              <>
                <ScrollToTop />
                <Amazon_PPC/>
              </>
            }
          />

<Route
            path={"/Virtual_Assistant"}
            element={
              <>
                <ScrollToTop />
                <Virtual_Assistant/>
              </>
            }
          />

<Route
            path={"/Terms-Condition"}
            element={
              <>
                <ScrollToTop />
                {/* <Virtual_Assistant/> */}

                <Terms_Condition/>
              </>
            }
          />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
