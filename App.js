// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CryptoInfiniteScroll from "./CryptoInfiniteScroll";
import Navbar from "./Navbar";
import "./App.css";
import AirdropHeader from "./Component/AirdropHeader";
// import AirdropCarousel from "./Component/AirdropCarousel";
import Box from "./Component/box";
import LatestNews from "./Component/LatestNews";
import TradeCrypto from "./Component/TradeCrypto";
import Footer from "./Component/Footer";
// import Cointracker from "./Component/Cointracker"; 
// Importing NewPage component
// import FeaturedAirdrops from "./Component/FeaturedAirdrops";
import AdvancedFilters from "./Component/AdvancedFilters";
import Page from "./Component/Page";
import InfiniteScroll from "./Component/InfiniteScroll";
import Blogm from "./Component/blogm";
import Trading from "./Component/Trading";
import AirdropFarming from "./AirdropFarming";

function App() {
  return (
    <Router>
      <div className="App">
        <CryptoInfiniteScroll/>
        <Navbar />
          
              
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <AirdropHeader />
               
                <InfiniteScroll/>
                <Box />
                <LatestNews />
                <TradeCrypto />
                <Footer />
              
              </>
            }
          />
          <Route
            path="/Cointracker"
            element={
              <>
            <InfiniteScroll/>
            <TradeCrypto />
            <Footer />

              
 
              
             
             
                {/* {
                <TradeCrypto />
                <Footer /> */} 
                
              </>
            }
          />
          <Route
            path="/featured-airdrops"
            element={
              <>
                <AdvancedFilters/>
                <Page/>
                <Footer />
               
               
              </>
            }
          />
           <Route
            path="/NFT-Airdrops"
            element={
              <>
                <AdvancedFilters/>
                <Page/>
                <Footer />
               
               
              </>
            }
          />
           <Route
            path="/DeFi-Airdrops"
            element={
              <>
                <AdvancedFilters/>
                <Page/>
                <Footer />
               
               
              </>
            }
          />
           <Route
            path="/Potential-Airdrops"
            element={
              <>
                <AdvancedFilters/>
                <Page/>
                <Footer />
               
               
              </>
            }
          />
          <Route
            path="/Solana-Airdrops"
            element={
              <>
                <AdvancedFilters/>
                <Page/>
                <Footer />
               
               
              </>
            }
          />
 <Route
            path="/Blast-Airdrops"
            element={
              <>
                <AdvancedFilters/>
                <Page/>
                <Footer />
               
               
              </>
            }
          />
                    {/* 2 page */}
            <Route
            path="/blog"
            element={
              <>
               <InfiniteScroll/>
               <Blogm />
               <Footer />
               </>
            }
          />
            <Route
            path="/Trading"
            element={
              <>
              <Trading/>
              <Footer />

              </>
            }
          />


<Route
            path="/NFTs"
            element={
              <>
              <Trading/>
              <Footer />

              </>
            }
          />

    
<Route
            path="/Airdrop-Content"
            element={
              <>

           
              <Trading/>
              <Footer />

              </>
            }
          />



             
<Route
            path="/Guides"
            element={
              <>
              <Trading/>
              <Footer />

              </>
            }
          />


<Route
            path="/Meme-Coins"
            element={
              <>
              <Trading/>
              <Footer />

              </>
            }
          />


          
<Route
            path="/Airdrop-Farming"
            element={
              <>

                <AirdropFarming/>
              <Footer/>

              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
