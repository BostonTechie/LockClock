import React from "react";
import "../styled/css/index.css";
import "../styled/css/smaller.css";
import Stack from "@mui/material/Stack";
import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Box, Paper, Grid, styled, Input, Typography, Container } from "@mui/material";
import { MonetizationOnSharp } from "@mui/icons-material";
import Popover from '@mui/material/Popover';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Timesheet = () => {
  //set State for the time sheet variables
  const [billable, setBill] = useState(false);
  const [color_bill, setBillColor] = useState();
  const [workday_start, setStartTime] = useState();
  const [workday_end, setStopTime] = useState();
  const [calendar_day, setCalendarDay] = useState("Use box below");
  const [notes, setNotes] = useState("");
  const [total_time_day, setTotalTime] = useState(0);
  const [hourly_rate, setRate] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [total_bill, setEarnings] = useState(0);


  const baseURL = process.env.REACT_APP_API;
  const navigate = useNavigate();

  function handleBill(e) {
    e.preventDefault();
    if (billable === false) {
      setBill(true);
      setBillColor("primary");
      setAnchorEl(e.currentTarget)
      setEarnings(0)
    }
    if (billable === true) {
      setBill(false);
      setBillColor("");
      
    }
  }

  function handleTotal() {
    if (workday_start && workday_end) {
      let splitbegin = workday_start.split(":");
      let splitend = workday_end.split(":");

      let total_hours_neg = splitbegin[0] - splitend[0];
      let total_hours = Math.abs(total_hours_neg);

      let total_min_neg = splitbegin[1] - splitend[1];
      let total_min = Math.abs(total_min_neg);
      let covertMIntoHour = total_min / 60;
      let total_time = total_hours + covertMIntoHour;
      let total_time2 = total_time.toFixed(2)
      setTotalTime(total_time2);

      if (calendar_day !== "Use box below" && billable === true){
        let myInvoice = total_time_day *hourly_rate
        myInvoice = myInvoice.toFixed(2)
        setEarnings(myInvoice)
        
      }
    }
  }

  function validateForm() {
    return (
      workday_start &&
      workday_end &&
      calendar_day !== "Use box below"
    );
  }

  async function postTime(postDatathis) {
    return fetch(`${baseURL}/timesheet/`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDatathis),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postDatathis = await postTime({
      notes,
      billable,
      hourly_rate,
      workday_start,
      workday_end,
      calendar_day,
      total_bill

    });
  };

//popover config 99-106

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Box sx={{ marginTop: 7, flexGrow: 1, marginLeft: 10,marginRight: 10 }}>
          <Grid
            container
            spacing={{ xs: 2,}}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ border: 2 }}
          >
            <Grid item xs={3} sm={6} md={8}>
              <Box sx={{ border: 2, bgcolor: "text.disabled" }}>
                <Typography variant="h4" component="h4">
                  Timesheet day: {calendar_day}  ${total_bill}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={1} sm={1} md={3.5}>
              <Box sx={{ border: 2, bgcolor: "text.disabled" }}>
                <Typography variant="h4" component="h4">
                  total hrs: {total_time_day}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={3} sm={3} md={4}>
              <Box sx={{}}>
                <Form.Control
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  id="fullWidth"
                  label="What are you working on?"
                  variant="outlined"
                />
              </Box>
            </Grid>

            <Grid item xs={0.6} sm={0.6} md={0.6}>
              <Box sx={{}}>
              <Button aria-describedby={id} variant="contained" onClick={handleBill}>
              <MonetizationOnSharp
                  color={color_bill}
                  onClick={handleBill}
                  sx={{ fontSize: 40 }}
                ></MonetizationOnSharp>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}><Form.Control
                  value={hourly_rate}
                  onChange={(e) => setRate(e.target.value)}
                  id="fullWidth"
                  variant="outlined"
                />Enter Hourly rate:</Typography>
      </Popover>
                
              </Box>
            </Grid>
            <Grid item xs={1} sm={1} md={1.75}>
              <Box sx={{}}>
                <Stack spacing={3}>
                  <TextField
                    id="time"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 60, // 1 min
                    }}
                    sx={{ width: 150 }}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={1} sm={1} md={1.75}>
              <Box sx={{}}>
                <Stack spacing={3}>
                  <TextField
                    id="time"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 60, // 1 min
                    }}
                    sx={{ width: 150 }}
                    onChange={(e) => {
                      setStopTime(e.target.value);
                      handleTotal();
                    }}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={1} sm={1} md={1.75}>
              <Box sx={{}}>
                
                <Stack spacing={3}>
                  <TextField
                    id="date"
                    type="date"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setCalendarDay(e.target.value)}
                  />
                  
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={1} sm={1} md={1.75}>
              <Button sx={{right:0  }}disabled={!validateForm()} size="lg" type="submit">
                   Post time
                </Button>
            </Grid>
          </Grid>
        </Box>
      </Form>
      </React.Fragment>
    
  );
};

export default Timesheet;
