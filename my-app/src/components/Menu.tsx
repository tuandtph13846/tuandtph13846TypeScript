import React from 'react'

type Props = {}

const Menu = (props: Props) => {
    return (
        <><label className="mobile_menu" htmlFor="mobile_menu">
            <span>Menu</span>
        </label><input id="mobile_menu" type="checkbox" />
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
            </ul></>
    )
}

export default Menu