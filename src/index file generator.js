import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function App() {
  return (
    <React.Fragment>
    <h1> File Generator </h1>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="File Set A" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="File Set B" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="File Set C" />
    </FormGroup>
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="primary">
        Generate
      </Button>
      <Button variant="contained" component="span">
          Media 1
      </Button>
      <Button variant="contained" component="span">
        Media 2
      </Button>
    </Stack>
    </React.Fragment>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));
