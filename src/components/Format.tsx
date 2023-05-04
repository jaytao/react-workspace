import * as React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FormatComponent = () => {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        width: 1000,
        maxWidth: '100%'
      }}
    >
      <div>
        <h2>JSON</h2>
        <Button variant="outlined">Format</Button>
        <TextField fullWidth label="jsonTextField" id="jsonTextField" />
      </div>
    </Box>
  )
}

export default FormatComponent
