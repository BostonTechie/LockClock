import React from 'react'
import '../styled/css/index.css'
import { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import Stack from '@mui/material/Stack';
import { TimePicker } from '@material-ui/lab';
import Timelog from '../components/Timelog';
import Calanderlog from '../components/Calanderlog';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import {
    Box,
    Paper,
    Grid,
    styled,
    Input,
    Typography
  } from "@mui/material";
import { ContentCutOutlined, MonetizationOnSharp } from '@mui/icons-material';

  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Timesheet = () => {
    const [billable_time, setBill] = useState(false);
    const [color_bill, setBillColor] = useState();


    const handleBill = async e => {
        e.preventDefault();
        if (billable_time === false) {
            setBill(true)
            setBillColor("")
        }
        if (billable_time === true) {
          
            setBill(false)
            setBillColor("primary")
   
        }
    }

  return (<div>
  <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ border: 2 }}>
          
          <Grid item
              xs={3}
              sm={6}
              md={8}>
                <Box sx={{ border: 2,
                    bgcolor: 'text.disabled' }}>
                    <Typography variant="h4" component="h4" >date</Typography>
                </Box>
            </Grid>

            <Grid item
              xs={1}
              sm={1}
              md={4}>
                <Box sx={{ border: 2,
                    bgcolor: 'text.disabled' }}>
                    <Typography variant="h4" component="h4" >total</Typography>
                </Box>
            </Grid>

            <Grid item
              xs={3}
              sm={3}
              md={5.2}>
                <Box sx={{ }}>
                <TextField fullWidth id="fullWidth" label="What are you working on?" variant="outlined" />
                </Box>
            </Grid>

            <Grid item
              xs={.6}
              sm={.6}
              md={.6}>
                <Box sx={{  }}>
                <MonetizationOnSharp color={color_bill}  onClick={handleBill}sx={{ fontSize: 40 }}></MonetizationOnSharp>
                </Box>
            </Grid>
            <Grid item
              xs={1}
              sm={1}
              md={1.75}>
                <Box sx={{  }}>
                <Timelog></Timelog>
                </Box>
            </Grid>
            <Grid item
              xs={1}
              sm={1}
              md={1.75}>
                <Box sx={{  }}>
                <Timelog></Timelog>
                </Box>
            </Grid>
            <Grid item
              xs={1}
              sm={1}
              md={1.75}>
                <Box sx={{  }}>
                <Calanderlog></Calanderlog>
                </Box>
            </Grid>
        </Grid>
    </Box>
    </div>
    )
}

export default Timesheet