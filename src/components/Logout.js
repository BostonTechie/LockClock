import React from 'react'
import { AppButton } from '../styled/Button,styled';
import { useAppContext } from "../global/Session";
import axios from 'axios'

const Logout = () => {
    const { userHasAuthenticated } = useAppContext();
    const baseURL = 'http://localhost:8000/api/v1/users'
    const signOut = () => {
        axios({
          method: "Get",
          withCredentials: true,
          url: `${baseURL}/logout`,
        }).then((res) => {
          console.log(res)
          userHasAuthenticated(false)
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