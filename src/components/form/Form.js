import React, { useState } from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import "./FormApp.css";
import LeloImage from "../../images/lelologoori.png"

const Form = () => {
    const [isSubmitted,setIsSubmitting] = useState(false)


    function submitForm() {
        setIsSubmitting(true)
    }
  return (
    <>
    <div className='form-container'>
      <span className='close-btn'>×</span>
      <div className='form-content-left'>
        {/* <img className='form-img' src={LeloImage} /> */}
      </div>
      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </div>
  </>
);
};

export default Form