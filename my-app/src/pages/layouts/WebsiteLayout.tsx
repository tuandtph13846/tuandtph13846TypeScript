import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
                <Outlet />
          
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default WebsiteLayout