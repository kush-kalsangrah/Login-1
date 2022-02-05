import { useState } from 'react';
 import './App.css';
 import React from "react";
 import IconButton from "@material-ui/core/IconButton";
 import InputLabel from "@material-ui/core/InputLabel";
 import Visibility from "@material-ui/icons/Visibility";
 import InputAdornment from "@material-ui/core/InputAdornment";
 import VisibilityOff from "@material-ui/icons/VisibilityOff";
 import Input from "@material-ui/core/Input";
 
 function App() {
  const [passwordShow, setValues] = React.useState({
     
    password: "",
    showPasswordShow: false,
  });
   const handleClickShowPassword = () => {
    setValues({ ...passwordShow, setPasswordShow: !passwordShow.setPasswordShow });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...passwordShow, [prop]: event.target.passwordShow });
  };
 
   return (
     <div className='row'>
     <div className="App">
       <div className='content'>
       <div className='one'>
         <h1>facebook</h1>
        
         <p>Facebook helps you connect and share with the people in your life.</p>
       </div>
      
      <div class="form-container">
       <input type="text" placeholder='Email address or phone number'  /> <br/> 
       
       <div className='col-md-6'> 
       <input  placeholder="Password" type= {passwordShow.setPasswordShow ? "text" : "password" } 
  
		onChange={handlePasswordChange("password")}
		value={passwordShow.password}
	/>
  <div className='IconButton'>
  <IconButton
			onClick={handleClickShowPassword}
			onMouseDown={handleMouseDownPassword}
			>
			{passwordShow.setPasswordShow ? <Visibility /> : <VisibilityOff />}
			</IconButton> 	
      </div>
      </div>
   <br/> 
      
       <button className='btn'>Login</button>
       <br/>
       <a href="List.html">Forgotton password?</a>
       <br/>
       <br/>
       <button className='cbtn'>Create New Account</button>
 
      </div>
      </div>
 
     </div>
     </div>
   );
 
};

 export default App