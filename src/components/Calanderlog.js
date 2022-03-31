import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Calanderlog = () => {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
            id="date"
            type="date"
            defaultValue="2022-01-01"
            sx={{ width: 220 }}
            InputLabelProps={{
            shrink: true,}}
        />
    </Stack>
  )
}

export default Calanderlog