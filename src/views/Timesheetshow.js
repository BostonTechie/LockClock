import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, Switch } from "react-router-dom";
import { Box, Paper, Grid, styled, Input, Typography, Container } from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Timesheetshow = () => {
  const baseURL = process.env.REACT_APP_API;
  const [timeShow, settimeShow] = useState([]);



  const retriveTime = async () => {
    const url = `${baseURL}/timesheet`;
    const timeData = await axios.get(url, { withCredentials: true });
    settimeShow(timeData.data.data);
  };

  useEffect(() => {
    retriveTime();
  }, []);


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'billable', headerName: 'billable', width: 130 },
    { field: 'calendar_day', headerName: 'date', width: 130 },
    { field: 'hourly_rate', headerName: 'rate', width: 130 },
    { field: 'notes', headerName: 'Note to self', width: 130 },
    { field: 'workday_start', headerName: 'Start', width: 130 },
    { field: 'workday_end', headerName: 'Stop', width: 130 },
    
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const navigate = useNavigate();

  const userDisplay = timeShow?.map((q) => {
    

    const handleDelete = async (id) => {
      const response = await axios.delete(`${baseURL}/timesheet/${id}`)
      console.log('here is your id', id)
      navigate('/timedata');
    };

  return (
    <div key={q.id}>
      <Box sx={{ p: 2, border: 2, backgroundColor: '#c3fdff', }}>
  <Grid container spacing={{ xs: 2, md: 3 }}
   columns={{ xs: 4, sm: 8, md: 12 }}>
  <Grid item xs={2}>
    <Item>Notes: {q.notes}</Item>
  </Grid>
  <Grid item xs={2}>
    <Item>rate:{q.hourly_rate}</Item>
  </Grid>
  <Grid item xs={1.5}>
    <Item>workday_start:{q.workday_start}</Item>
  </Grid>
  <Grid item xs={1.5}>
    <Item>workday_end:{q.workday_end}</Item>
  </Grid>
  <Grid item xs={2}>
    <Item>calendar_day:{q.calendar_day}</Item>
  </Grid>
  <Grid item xs={1}>
    <Item>total_bill: ${q.total_bill}</Item>
  </Grid>
  <Grid item xs={1}>
    <Item><Chip key={q.id} label="Delete" onClick={() => handleDelete(q.id)} /></Item>
  </Grid>
</Grid>
</Box>

      </div>
    );
  });

return <div>{userDisplay}</div>;
}

export default Timesheetshow;
