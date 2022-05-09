import React, { useState } from 'react'
import { FaCreditCard } from "react-icons/fa";
import "./Donation.css"

function Donation() {
    
    const [isSubmitted, setIsSubmitting] = useState(false)

    const submit = () => {
        setIsSubmitting(true);
    }

  return (
      <>
        {!isSubmitted ? (
            <div class="donation-container">
            
            <div class="donation-box">
                <div class="title">Donation Information</div>
                
                <div class="fields">
                    <input type="text" id="firstName" placeholder="First Name" /> 
                    <input type="text" id="lastname" placeholder="Last Name" /> 
                    <input type="text" id="email" placeholder="Email" /> 
                </div>
                
                <div class="amount">
                    <div class="button">$10</div>
                    <div class="button">$20</div>
                    <div class="button">$50</div>
                    <div class="button">$<input type="text" class="set-amount" placeholder=""/></div>
                </div>
                
                <div class="switch">
                    <input type="radio" class="switch-input" name="view" value="One-Time" id="one-time" checked="" />
                    <label for="one-time" class="switch-label switch-label-off">One-Time</label>
                    <input type="radio" class="switch-input" name="view" value="Monthly" id="monthly" />
                    <label for="monthly" class="switch-label switch-label-on">Monthly</label>
                    <span class="switch-selection"></span>
                </div>
                
                
                <div class="checkboxes">
                    <input type="checkbox" id="receipt" class="checkbox" />
                    <label for="receipt">Email Me A Receipt</label>
                    <br />
                    <input type="checkbox" id="anon" class="checkbox" />
                    <label for="anon">Give Anonymously</label>
                    <br />
                    <input type="checkbox" id="list" class="checkbox" />
                    <label for="list">Add Me To Email List</label>
                </div>
                
                <div class="confirm">
                    
                </div>
                
                <div class="donate-button" onClick={submit} > Donate Now</div>
            </div>
        </div>
        ) : (
           <div className='donation-box'>
               <h2 style={{display: 'flex', justifyContent: 'center',fontSize: 33, marginLeft:35,paddingTop:40}}>Your Donation is Accepted! Thank You!</h2>
           </div>
        )}
        </>
      )
}

export default Donation