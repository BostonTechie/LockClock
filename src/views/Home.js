import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Item, Chip, Container, styled, Box, Paper, Grid, Typography, LinearProgress } from '@mui/material';

const Home = () => {
    
const baseURL = 'http://localhost:8000'
const [userView, setUserView] = useState([])

const retrieveUser = async () => {
  const url = `${baseURL}/get`
  const userData = await axios.get(url)
  setUserView(userData.data.data)
}
    
useEffect(() => {
  retrieveUser()
}, [])




  const userDisplay = (
    userView?.map((q) =>{
      return (
          <div key={q.id}> {q.email} </div>
       )
    })
  )



  return (
    <div>{userDisplay}</div>
  )
}

export default Home