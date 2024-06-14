import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import EmailActivation from './Pages/EmailActivation';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Reset from './Pages/Reset';
import Dashboard from './Pages/Dashboard';
import OriginalUrl from './Pages/OriginalUrl';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path='/register' element={<Register/>}/>
<Route path='/activate/:token' element={<EmailActivation/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/forgot-password' element={<ForgotPassword/>}/>
<Route path='/reset-password' element={<Reset/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/shortingurl' element={<OriginalUrl/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App;