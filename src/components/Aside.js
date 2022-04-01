import React from 'react'
import '../styled/css/aside.css'
import Box from '@mui/material/Box';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AppBar from '@mui/material/AppBar';
import { flexbox } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const Aside = () => {

  

  return (
    <React.Fragment>
    <AppBar position="fixed" color="primary" sx={{ display: 'inline-flex', flexDirection: 'column' , top: 'auto', bottom: 0 }}>
    <Toolbar>
      <IconButton color="inherit" aria-label="open drawer">
        <MenuIcon />
      </IconButton>
      <StyledFab color="secondary" aria-label="add">
        <AddIcon />
      </StyledFab>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
</React.Fragment>

  )
}

export default Aside