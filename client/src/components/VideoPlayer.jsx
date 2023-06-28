import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  myvideo: {
    width: '20vw',
    // [theme.breakpoints.down('xs')]: {
    //   width: '300px',
    // },
  },
  uservideo: {
    width: '66vw',
    // [theme.breakpoints.down('xs')]: {
    //   width: '300px',
    // },
  },
  flip: {
    '-o-transform': 'scaleX(-1)',
    '-moz-transform': 'scaleX(-1)',
    '-webkit-transform': 'scaleX(-1)',
    '-ms-transform': 'scaleX(-1)',
    transform: 'scaleX(-1)',
  },
  gridContainer: {
    justifyContent: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column',
    // },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
    background: 'transparent',
  },
}));

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.gridContainer}
    >
      {/* Other user's Video */}
      {(callAccepted && !callEnded) && (
        <Paper className={classes.paper}>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant='h5'
              gutterBottom
            >
              {call.name || 'Name'}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={`${classes.uservideo} ${classes.flip}`}
            />
          </Grid>
        </Paper>
      )}

      {/* Our Own Video */}
      {true && (
        <Paper className={classes.paper}>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant='h5'
              gutterBottom
            >
              {name || 'Name'}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={`${classes.myvideo} ${classes.flip}`}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
