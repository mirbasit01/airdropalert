// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    // <nav>
    //   <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/newpage">New Page</Link></li>
    //   </ul>
    // </nav>

    <div className="container ">
      <div className="row ">
        {/* <p className="text-white fixed-top mb-3"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, nihil exercitationem laboriosam praesentium qui, reprehenderit dolores tempore sunt esse consectetur voluptas, nisi amet. Provident quod voluptates accusamus, laborum pariatur a!</p> */}

        <header id="main-header" className="fixed-top ">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light py-3">
              <a className="navbar-brand" href="https://airdropalert.com/">
                <img
                  src="https://airdropalert.com/wp-content/uploads/2023/12/airdrop-alert-logo.png"
                  width="200"
                  height="25"
                  alt="AirdropAlert"
                  id="logo"
                />
              </a>
              <button
                className="navbar-toggler  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item ">
                    <a
                      className="nav-link active  "
                      aria-current="page"
                      href=""
                    >
                      <Link to="/home" className="  text-decoration-none">
                        Home
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle "
                      href="/browse-airdrops/?category="
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Airdrops
                    </a>
                    
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          <Link
                            to="/featured-airdrops"
                            className="  text-decoration-none"
                          >
                            Featured Airdrops
                          </Link>

                          {/* <Link to="/" className="text-white text-decoration-none">Featured Airdrops</Link> */}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item " href="/">
                          <Link
                            to="/New-Airdrops"
                            className="  text-decoration-none"
                          >
                            {" "}
                            New Airdrops
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item " href="/">
                          <Link
                            to="/NFT-Airdrops"
                            className="  text-decoration-none"
                          >
                            {" "}
                            NFT Airdrops
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item  " href="/">
                          <Link
                            to="/DeFi-Airdrops"
                            className=" text-decoration-none"
                          >
                            {" "}
                            DeFi Airdrops
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item  " href="/">
                          <Link
                            to="/Potential-Airdrops"
                            className="  text-decoration-none"
                          >
                            {" "}
                            Potential Airdrops
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item  " href="/">
                          <Link
                            to="/Solana-Airdrops"
                            className="  text-decoration-none"
                          >
                            {" "}
                            Solana Airdrops
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item  " href="/">
                          <Link
                            to="/Blast-Airdrops"
                            className="  text-decoration-none"
                          >
                            {" "}
                            Blast Airdrops
                          </Link>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle  " href="/">
                      {/* id="blogDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false" */}
                      {/* <Link to="/blog" className="text-white text-decoration-none"> 
                          </Link> */}{" "}
                      <Link to="/blog" className="  text-decoration-none">
                        Blog{" "}
                      </Link>
                    </a>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="blogDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item "
                          target="_blank"
                          rel="noopener"
                          href="/"
                        >
                          {" "}
                          <Link
                            to="/Trading"
                            className="  text-decoration-none"
                          >
                            Trading{" "}
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item "
                          target="_blank"
                          rel="noopener"
                          href="/"
                        >
 {" "}
                          <Link
                            to="/NFTs"
                            className="  text-decoration-none"
                          >
                            NFTs{" "}
                          </Link>


                          
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item  "
                          target="_blank"
                          rel="noopener"
                          href="/"
                        >


{" "}
                          <Link
                            to="/Airdrop-Content"
                            className="  text-decoration-none"
                          >
                             Airdrop Content{" "}
                          </Link>
                         
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item  "
                          target="_blank"
                          rel="noopener"
                          href="/"
                        >



{" "}
                          <Link
                            to="/Guides"
                            className="  text-decoration-none"
                          >
                             Guides{" "}
                          </Link>
                         
                         
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item  "
                          target="_blank"
                          rel="noopener"
                          href="/"
                        >


{" "}
                          <Link
                            to="/Meme-Coins"
                            className="  text-decoration-none"
                          >
                             Meme Coins{" "}
                          </Link>
                          
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item  "
                          target="_blank"
                          rel="noopener"
                          href="/"
                        >


{" "}
                          <Link
                            to="/Airdrop-Farming"
                            className="  text-decoration-none"
                          >
                              Airdrop Farming{" "}
                          </Link>
                         
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  " href="/">
                      {/* Cointracker */}
                      <Link
                        to="/Cointracker"
                        className="  text-decoration-none"
                      >
                        Cointracker
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
