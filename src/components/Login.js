import React, { useState } from 'react';
import '../styled/login.css';
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import { FormInput } from '../styled/form.styled';
import {globalUrl} from '../global/Global'
import axios from 'axios'
import Logout from './Logout';
import { useAppContext } from '../global/Session'


async function loginUser(credentials) {
  return fetch(`${globalUrl}/users/register`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
 export default function Login({ setToken }) {

  const { userHasAuthenticated } = useAppContext();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
 
   const handleSubmit = async e => {
     e.preventDefault();
     const token = await loginUser({
       email,
       password
     });
     setToken(token.data.token);
    
   }
 
   return(
     <div className="login-wrapper">
       <h1>Please Log In</h1>
       <form onSubmit={handleSubmit}>
         <label>
           <p>email</p>
           <FormInput type="text" onChange={e => setEmail(e.target.value)} />
         </label>
         <label>
           <p>Password</p>
           <FormInput type="password" onChange={e => setPassword(e.target.value)} />
         </label>
         <div>
           <button type="submit">Submit</button>
          
         </div>
       </form>
       <Logout></Logout>
     </div>
   )
 }
 
