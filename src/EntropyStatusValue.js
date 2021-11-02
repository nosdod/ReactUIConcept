import * as React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Title from './Title';

function getStatus(size,criticalLimit,warningLimit) {
  if ( size < criticalLimit )
    return "error"
  else if ( size < warningLimit )
    return "warning"
  else
    return "success"
}

function getStatusName(size,criticalLimit,warningLimit) {
  if ( size < criticalLimit )
    return "Level Critical"
  else if ( size < warningLimit )
    return "Level Warning"
  else
    return "Level OK"
}

export default function EntropyStatusValue(props) {
  const [size,setSize] = React.useState(props.size);
  const [criticalLimit,setCriticalLimit] = React.useState(props.criticalLimit);
  const [warningLimit,setWarningLimit] = React.useState(props.warningLimit);

  React.useEffect(() => {
    //Runs on the first render and when props change
    setSize(props.size);
    setCriticalLimit(props.criticalLimit);
    setWarningLimit(props.warningLimit);
  }, [props]);
  return (
    <React.Fragment>
      <Title>Entropy Status</Title>
      <Typography component="p" variant="h4">
        <Chip label={size} color={getStatus(size,criticalLimit,warningLimit)}/> bytes
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Status {getStatusName(size,criticalLimit,warningLimit)}
      </Typography>
    </React.Fragment>
  );
}
