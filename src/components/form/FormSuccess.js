import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import successLogo from "../../images/Screenshot_5.png"
const FormSuccess = () => {
  return (
    <div className="form-content-right">
        <div className="form-success">
            We have recieved your request!
        </div>
        <img src={successLogo} alt="success-image
        " className="form-img-2" />
    </div>
  )
}

export default FormSuccess