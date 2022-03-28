import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../components/UserContext';
import axios from 'axios'
import { Card, Item, Chip, Container, styled, Box, Paper, Grid, Typography, LinearProgress } from '@mui/material';
import {globalUrl} from '../global/Global'


const Home = () => {

  const {Url } = useContext(UserContext)

const [userView, setUserView] = useState([])

const retrieveUser = async () => {
  const url = `${globalUrl}/users
`
  const userData = await axios.get(url)
  setUserView(userData.data.data)
}
    
useEffect(() => {
  retrieveUser()
}, [])



  const userDisplay = (
    userView?.map((q) =>{
      return (
          <div key={q.id}> email: {q.email} password:{q.password}</div>
       )
    })
  )



  return (
    <div>{userDisplay}</div>
  )
}

export default Home