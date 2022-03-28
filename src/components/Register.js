import React, { useContext }from 'react'
import { AppButton } from '../styled/Button,styled';
import UserContext from "./UserContext"

const Register = () => {
    const {register} = useContext(UserContext)

  return (
    <AppButton
    bg="#292929"
    bcolor="#fff"
    color="#fff"
    className="newUserBttn"
    type="submit"
    id="submituser"
    onClick={register}
    >Sign up!</AppButton>
  )
}

export default Register