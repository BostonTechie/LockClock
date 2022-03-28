import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../components/UserContext';
import axios from 'axios'
import { Card, Item, Chip, Container, styled, Box, Paper, Grid, Typography, LinearProgress } from '@mui/material';
import {globalUrl} from '../global/Global'
import { Link, Navigate, useNavigate } from "react-router-dom";




const UserProfile = () => {

  const {Url } = useContext(UserContext)

const [userView, setUserView] = useState([])

const retrieveUser = async (id) => {
  const url = `${globalUrl}/users`
  const userData = await axios.get(url)
  setUserView(userData.data.data)
}
    
useEffect(() => {
  retrieveUser()
}, [])



  const userDisplay = (
    userView?.map((q) =>{
      return (
        <div key={q.id}> <Link to={`/users/${q.id}`}>  id: {q.id} </Link> email: {q.email}   </div>
       )
    })
  )



  return (
    <div>{userDisplay}</div>
  )
}

export default UserProfile