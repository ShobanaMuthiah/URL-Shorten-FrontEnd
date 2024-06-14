import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmailActivation = () => {
  const navig=useNavigate()
    return (
        <div>
     <div className="card-center">
     <div className="card text-center p-4">
  <div className="card-header">
    Verification
  </div>
  <div className="card-body">
    <p className="card-title fa"><i className="fa fa-check-square-o" aria-hidden="true"></i></p>
    <p className="card-text">Your Mail ID has been verified Successfully</p>
    <Link to={navig('/login')} className="btn btn-primary">Click here to Login</Link>
  </div>
</div>
     </div>

        </div>
    );
};

export default EmailActivation;