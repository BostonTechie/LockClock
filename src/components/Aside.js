import React from 'react'
import '../styled/css/aside.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { createTheme } from '@mui/material/styles';
import Divider from "@material-ui/core/Divider";
import { AppBar, Button, CssBaseline } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { sizing } from '@mui/system'
import Timesheet from '../views/Timesheet'


const useStyles = createTheme({
  root: {
    height: "100vh",
    width: "100vw",

  },

  mainArea: {
  
    height: "100%",
    
  }
});


const Aside = () => {



  return (
    <div>
      <CssBaseline />
      <Box display="flex" flexDirection="row" sx={{height: "100vh",
        width: "100vw",}}>
        <Box flexGrow={0}>
          <AppBar elevation={0} position="sticky">
            <div>Left</div>
            <div>appBar</div>
            <Button>try me</Button>
            <Divider />
            <Button>try me2</Button>
          </AppBar>
        </Box>
        <Box display="flex" flexDirection="row" flexGrow={1}>
          <Box
            display="flex"
            flexDirection="column"
            sx={{height: "100%"}}
            flexGrow={1}
          ><Timesheet /></Box>
        </Box>
       
      </Box>
    </div>
  );
}

export default Aside