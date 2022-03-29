import React from 'react'
import { AppButton } from '../styled/Button,styled';
import axios from 'axios'


const Login = () => {
    const baseURL = 'http://localhost:8000/api/v1/users'
    const signIn = () => {
        axios({
          method: "GET",
          withCredentials: true,
          url: `${baseURL}/login`,
        })
      };

  return (
    <AppButton
    bg="#292929"
    bcolor="#fff"
    color="#fff"
    className="newUserBttn"
    type="submit"
    id="submituser"
    onClick={signIn}
    >Log in</AppButton>
  )
}

export default Login