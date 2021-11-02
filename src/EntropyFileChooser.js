import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Fab } from '@mui/material';

export default function EntropyFileChooser(props) {    
  const [filename,setFilename] = React.useState(props.filename);
  const [fileSelected,setFileSelected] = React.useState(props.fileSelected);

  React.useEffect(() => {
    //Runs on the first render and when props change
    setFilename(props.filename);
    setFileSelected(props.fileSelected);
  }, [props]);

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
          id="filename"
          label="Filename"
          defaultValue={filename}
        />
        <Fab 
          variant="extended"
          onClick={() => fileSelected("a new file")}>
            Browse
        </Fab>
      </div>
    </Box>
  );
  }
