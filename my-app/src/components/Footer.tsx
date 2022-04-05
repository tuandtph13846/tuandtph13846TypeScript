import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
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
  )
}

export default Footer