import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Fab } from '@mui/material';

export default function User(props) {
  const [usertype,setUsertype] = React.useState(props.usertype);
  const [username,setUsername] = React.useState(props.username);
  const [password,setPassword] = React.useState(props.password);
  
  React.useEffect(() => {
    //Runs on the first render and when props change
    setUsertype(props.usertype);
    setUsername(props.username);
    setPassword(props.password);
  }, [props]);

  function getUsernameHelperText( usertype ) {
    return "Enter the " + usertype + " account username"
  }

  function confirmOnclick() {
    console.log("User details confirmed");
  }

  function getPasswordHelperText( usertype ) {
    return "Enter the " + usertype + " account password"
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="user"
          label="User"
          helperText={getUsernameHelperText(usertype)}
          defaultValue={username}
        />
        <TextField
          id="password"
          label="Password"
          helperText={getPasswordHelperText(usertype)}
          type="password"
          defaultValue={password}
        />
        <Fab 
          variant="extended"
          onClick={confirmOnclick}  
          >
            Confirm
        </Fab>
      </div>
    </Box>
  );
}
