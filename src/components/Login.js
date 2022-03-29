import React, { useState } from 'react';
import '../styled/login.css';
import PropTypes from 'prop-types';
import { FormInput } from '../styled/form.styled';
import {globalUrl} from '../global/Global'

async function loginUser(credentials) {
  return fetch(`${globalUrl}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  

  const [email, setUserEmail] = useState();
  const [password, setUserPass] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>E-Mail</p>
        <FormInput type="text" onChange={e => setUserEmail(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <FormInput type="password" onChange={e => setUserPass(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}