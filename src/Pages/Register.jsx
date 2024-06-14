import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const [lastName,setlastName]=useState('');
const [firstName,setfirstName]=useState('');

const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [msg,setmsg]=useState('');
const [toast,settoast]=useState(false)
// const navig=useNavigate()

const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={firstName,lastName,email,password}
    await axios.post('http://localhost:5000/api/auth/register',payload)
    .then(res=>{setmsg(res.data.message)
        settoast(true)
       setTimeout(()=>{
setfirstName('');
setlastName('');

    setemail('');
    setpassword('');
       },1000) 
    })
    .catch(error=>{
        setmsg(error.data.message)
        settoast(true)
    })
    

}

    return (
        <div>
           <div className="title">Register</div>
            <div className="card-center m-3">
                <div className="card card-format text-center">
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="row-cols-sm-2">
                    <label className='col-12 col-sm-3 p-3 text-sm-end'>
                    First Name:
                </label>
                <input className='border-black' type="text" name="firstName" value={firstName} onChange={(e)=>setfirstName(e.target.value)} required  /><br />
               
                <label className='col-12 col-sm-3 p-3 text-sm-end'>
                    Last Name:
                </label>
                <input className='border-black' type="text" name="secondName" value={lastName} onChange={(e)=>setlastName(e.target.value)} required  /><br />
               

                <label className='col-12 col-sm-3 p-3 text-sm-end'>
                    Email:
                </label>
                <input className='border-black' type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} required/><br />

                <label className='col-12 col-sm-3 p-3 text-sm-end'>
                    Password:
                </label>
                <input className='border-black' required type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
<br /><br />
                    </div>
                </div>
                <button className='btn' type='submit' >
                    Register
                </button>
                {toast && (
                        <div className="toast-container position-fixed top-0 end-0 p-3" >
                            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                              
                            <div className="d-flex">
                            <div className="toast-body fw-bolder w-100  text-bg-info">
                                    {msg}
                                </div>
                            
                                <div className="toast-header  ">
                                    
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={()=>settoast(false)}></button>
                                </div>
                                
                            </div>
                                
                            </div>
                        </div>
                    )}

            </form>

          

          
    
 

                </div>
            
           </div>
        </div>
    );
};

export default Register;