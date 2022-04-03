import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
          <header>
            <div className="header" id="home">
              <div className="top-header">
                <div className="container">
                  <div className="logo">
                    <a href="index.html"><img src="images/logo.png"  /></a>
                  </div>
                  <div className="header-top-right">
                    {/* start search*/}
                    <div className="search-box">
                      <div id="sb-search" className="sb-search">
                        <form>
                          <input className="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search" />
                          <input className="sb-search-submit" type="submit"  />
                          <span className="sb-icon-search"> </span>
                        </form>
                      </div>
                    </div>
                    {/* search-scripts */}
                    {/* //search-scripts */}
                    <a href="cart.html"><i className="cart" /></a>
                  </div>
                  <div className="navigation">	
                    <div>
                      <label className="mobile_menu" htmlFor="mobile_menu">
                        <span>Menu</span>
                      </label>
                      <input id="mobile_menu" type="checkbox" />
                      <ul className="nav">
                        <li className="active"><a href="index.html">Home</a></li>                       
                        <li className="dropdown1"><a href="#">Dresses</a>
                          <ul className="dropdown2">
                            <li><a href="products.html">Dress Materials</a></li>
                            <li><a href="products.html">Kurta &amp; Kurti</a></li>
                            <li><a href="products.html">Sarees</a></li>
                            <li><a href="products.html">Chudidars</a></li>
                          </ul>
                        </li>             
                        <li className="dropdown1"><a href="#">Bags</a>
                          <ul className="dropdown2">
                            <li><a href="products.html">Latest</a></li>
                            <li><a href="products.html">Leather Bags</a></li>
                            <li><a href="products.html">Hand Bags</a></li>
                          </ul>
                        </li>
                        <li className="dropdown1"><a href="#">Shoes</a>
                          <ul className="dropdown2">
                            <li><a href="products.html">Sports Shoes</a></li>
                            <li><a href="products.html">Casual Shoes</a></li>
                            <li><a href="products.html">Formal Shoes</a></li>
                          </ul>
                        </li>        
                        <li><a href="contact.html">Contact US</a></li>
                        <div className="clearfix" />
                      </ul>
                    </div>			
                  </div>
                </div>
              </div>
              <div className="banner">
                <div className="signing text-right">
                  <div className="container">
                    <div className="sign-in">
                      <a href="signin.html">Sign In</a>
                    </div>
                    <div className="sign-up1">
                      <a href="signin.html">Sign Up</a>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="banner-info text-center">
                  <i className="shipping" />
                  <h3>Shopping Place For Girls</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimcidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                  <a href="products.html">All Products</a>
                </div>
              </div>
            </div>
          </header>

        <main>

           <Outlet/>
            

        </main>
        <footer>
                <div className="footer">
                  <div className="up-arrow">
                    <a className="scroll" href="#home"><img src="images/up.png"  /></a>
                  </div>
                  <div className="container">
                    <div className="copyrights">
                      <p>Copyright © 2015 All rights reserved | Template by  <a href="http://w3layouts.com">  W3layouts</a></p>
                    </div>
                    <div className="footer-social-icons">
                      <a href="#"><i className="fb" /></a>
                      <a href="#"><i className="tw" /></a>
                      <a href="#"><i className="in" /></a>
                      <a href="#"><i className="pt" /></a>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>

        </footer>
    </div>
  )
}

export default WebsiteLayout