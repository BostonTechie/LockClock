import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import {
  Card,
  Grid,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from '@mui/material'

import {globalUrl} from '../global/Global'
import {Link, useParams} from "react-router-dom";
import { Box, styled, useTheme } from '@mui/system'
import { AppButton } from '../styled/Button,styled';
import { FormInput } from '../styled/form.styled';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center',
}))

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}))

const IMG = styled('img')(() => ({
  width: '100%',
}))


const UserProfile = () => {

const [userView, setProfileView] = useState([])
let {userid} = useParams()


const retrieveProfile = async () => {
  
  const url = `${globalUrl}/users/${userid}`
  const userView = await axios.get(url)
  setProfileView(userView.data.data)
}
    

useEffect(() => {
  retrieveProfile()
}, [])




return (
  <div key={userView.id}> <Link to={`/user/${userView.id}`} > id: {userView.id} email: {userView.email} password:{userView.password}</Link> </div>
)
}

export default UserProfile