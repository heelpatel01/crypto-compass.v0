import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function Buy() {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    
    <TextField id="standard-basic" label="AT PRICE INR" variant="standard" type='number'/>
    <br/>
    <TextField id="standard-basic" label="AMOUNT OF COINS" variant="standard" />
    <br/>
    <TextField id="standard-basic" label="TOTAL INR" variant="standard" />
    <br/>
    <Button variant="contained" color="success">
  Place your order
</Button>
  </Box>  )
}

export default Buy