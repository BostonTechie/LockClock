import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, styled, useTheme } from '@mui/system'
import { AppButton } from '../styled/Button,styled';
import { FormInput } from '../styled/form.styled';
import {
    Card,
    Grid,
    Button,
    Checkbox,
    CircularProgress,
    FormControlLabel,
} from '@mui/material'

const baseURL = 'http://localhost:8000'

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


const Post = () => {
    
    const baseURL = 'http://localhost:8000'
    const [userEmail, setUserEmail] = useState([])
    const [userPass, setUserPass] = useState([])

    const register = () => {
        axios({
          method: "POST",
          data: {       
            email: userEmail,
            password: userPass,
          },
          //withCredentials: true,
          url: `${baseURL}/register`,
        }).then((res) => {
          console.log(res)
        });
      };
  
    return (
        <ContentBox>
            hello
          <FormInput
                placeholder="Email"
                type="text"
                name="email"
                id='email'
                
                onChange={(e) => {setUserEmail(e.target.value)}}
            />
            <FormInput
                placeholder="Password"
                type="password"
                name="password"
                id='password'
                
                onChange={(e) => {setUserPass(e.target.value)}}
            />
                 
            <AppButton
                bg="#292929"
                bcolor="#fff"
                color="#fff"
                className="newUserBttn"
                type="submit"
                id="submituser"
                onClick={register}
            >Sign Up Now!</AppButton>
          
        </ContentBox>
  )
}

export default Post