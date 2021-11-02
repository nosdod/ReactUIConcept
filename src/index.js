import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Dashboard from './Dashboard'

function App() {
  return (
    <React.Fragment>
    <Dashboard/>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="File Set A" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="File Set B" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="File Set C" />
    </FormGroup>
    <Stack direction="row" spacing={2}>
      <Button variant="contained" component="span">
        Close
      </Button>
      <Button variant="contained" component="span">
        Load Entropy
      </Button>
    </Stack>
    </React.Fragment>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));
