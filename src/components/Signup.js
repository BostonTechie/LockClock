import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styled/css/login.css';
import PropTypes from 'prop-types';
import { useAppContext } from "../global/Session";
import Logout from "./Logout";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext(false);

  const baseURL = process.env.REACT_APP_API

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function loginUser(credentials) {
    return fetch(`${baseURL}/users/register`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

  const handleSubmit = async e => {
    e.preventDefault();
    userHasAuthenticated(true)
    const token = await loginUser({
      email,
      password
    });
    
    
  }
  

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign up!
        </Button>
      </Form>
      

    </div>
  );
}

