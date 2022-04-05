import React from 'react'
import Menu from './Menu'
import Search from './search'



const Header = () => {
    return (

        <div className="header" id="home">
            <div className="top-header">
                <div className="container">
                    <div className="logo">
                        <a href="index.html"><img src="images/logo.png" /></a>
                    </div>
                    <div className="header-top-right">

                        <div className="search-box">
                            <Search/>
                        </div>
                        <div className="cart mr-96">
                            <a href="cart.html"><i className="cart" /></a>
                        </div>
                        
                    </div>
                    <div className="navigation">
                        <div>
                            <Menu/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="signing text-right">
                    <div className="container">
                        <div className="sign-in">
                            <a href="signin">Sign In</a>
                        </div>
                        <div className="sign-up1">
                            <a href="signup">Sign Up</a>
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

    )
}

export default Header