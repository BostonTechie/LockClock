import React, { useState } from 'react'
import {
    Card,
    Grid,
    Button,
    Checkbox,
    CircularProgress,
    FormControlLabel,
} from '@mui/material'
import { Box, styled, useTheme } from '@mui/system'
import { Paragraph, Span } from '../components/typo'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

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

const StyledProgress = styled(CircularProgress)(() => ({
    position: 'absolute',
    top: '6px',
    left: '25px',
}))


const Homepage = () => {


    
  return (
   
   
     <>
    <Card className="card">
    <Grid container>
        <Grid item lg={5} md={5} sm={5} xs={12}>
            <JustifyBox p={4} height="100%">
                <IMG
                    src="../assets/Loginclock.PNG"
                    alt=""
                />
            </JustifyBox>
        </Grid>
        <Grid item lg={7} md={7} sm={7} xs={12}>
            <ContentBox>
                <ValidatorForm>
                    <TextValidator
                        sx={{ mb: 3, width: '100%' }}
                        variant="outlined"
                        size="small"
                        label="Email"
                        //onChange={handleChange}
                        type="email"
                        name="email"
                       // value={userInfo.email}
                        validators={['required', 'isEmail']}
                        errorMessages={[
                            'this field is required',
                            'email is not valid',
                        ]}
                    />
                    <TextValidator
                        sx={{ mb: '12px', width: '100%' }}
                        label="Password"
                        variant="outlined"
                        size="small"
                        //onChange={handleChange}
                        name="password"
                        type="password"
                        //value={userInfo.password}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <FormControlLabel
                        sx={{ mb: '12px', maxWidth: 288 }}
                        name="agreement"
                       //onChange={handleChange}
                        control={
                            <Checkbox
                                size="small"
                                // onChange={({
                                //     target: { checked },
                                // }) =>
                                //     // handleChange({
                                //     //     target: {
                                //     //         name: 'agreement',
                                //     //         value: checked,
                                //     //     },
                                //     // })
                                // }
                                //checked={userInfo.agreement || true}
                            />
                        }
                        label="Remeber me"
                    />

                 
                    <FlexBox mb={2} flexWrap="wrap">
                        <Box position="relative">
                            <Button
                                variant="contained"
                                color="primary"
                               // disabled={loading}
                                type="submit"
                            >
                                Sign in
                            </Button>
                          
                        </Box>
                        <Span sx={{ mr: 1, ml: '20px' }}>or</Span>
                        <Button
                            sx={{ textTransform: 'capitalize' }}
                            //onClick={() =>
                                // navigate('/session/signup')
                            //}
                        >
                            Sign up (broken atm)
                        </Button>
                    </FlexBox>
                  
                </ValidatorForm>
            </ContentBox>
        </Grid>
    </Grid>
</Card>
    
    </>
  )
}

export default Homepage