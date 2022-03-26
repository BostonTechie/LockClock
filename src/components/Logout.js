import React from 'react'
import { AppButton } from '../styled/Button,styled';
import axios from 'axios'

const Logout = () => {
    const baseURL = 'http://localhost:8000/api/v1/users'
    const signOut = () => {
        axios({
          method: "Get",
          withCredentials: true,
          url: `${baseURL}/logout`,
        }).then((res) => {
          console.log(res)
        });
      };

  return (
    <AppButton
    bg="#292929"
    bcolor="#fff"
    color="#fff"
    className="newUserBttn"
    type="submit"
    id="submituser"
    onClick={signOut}
    >Sign Out!</AppButton>
  )
}

export default Logout