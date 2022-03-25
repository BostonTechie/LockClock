import React, { createContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GlobalContext = createContext();

export const FuncGlobalContext = ({ children }) => {
  const navigate = useNavigate();
  const baseURL = 'http://127.0.0.1:8000/api/v1'

  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  const register = () => {

    fetch(`${baseURL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'email': 'password'
      }),
    })
      
    
    .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })

    // const config = {headers:{"Content-Type": "application/json" } } 
    // const payload = {email: registerEmail,
    //  password: registerPassword}
    // axios.post(`${baseURL}/users/register`,payload,config)
    
    
    
    
    // axios({
    //   method: "POST",
    //   data: {
    //     email: registerEmail,
    //     password: registerPassword,
        
    //   },
    //   withCredentials: true,
    //   url: `${baseURL}/users/register`,
    // }).then((res) => {
    //   //ggg
    //   console.log(res)
    //    localStorage.setItem("user", res.data)
    // }).catch((err)=> {
    //   console.log('here is your error: ', err)
    // });
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