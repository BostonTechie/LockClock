import React, { createContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GlobalContext = createContext();

export const FuncGlobalContext = ({ children }) => {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_API

  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        password: registerPassword,
        email: registerEmail,
      },
      withCredentials: true,
      url: `${baseURL}/users/register`,
    }).then((res) => {
      console.log(res)
      localStorage.setItem("user", res.data)
    });
  };

  return (
    <GlobalContext.Provider
    value={{
      register,
      setRegisterPassword,
      registerPassword,
      setRegisterEmail,
      registerEmail

      }}
  >
    {children}
  </GlobalContext.Provider>
  )
}

export default GlobalContext