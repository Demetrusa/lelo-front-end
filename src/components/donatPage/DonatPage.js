import React from 'react'
import Footer from '../footer/Footer'
import Navigation from '../navigation/Navigation'
import Donation from './Donation'
import "./Donation.css"

function DonatPage() {
  return (
    <div className='donatPage'>
        <Navigation />
        <div className="donat-wrap">
            <div className="donat-heading">
            <h2>Donation</h2>
            <p>Your Future Is In Your Hands</p>
            </div>
        <Donation />
        </div>
            <div id="donatFooter">
            <Footer  />
            </div>
    </div>
  )
}

export default DonatPage