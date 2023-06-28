import React, { useCallback, useContext } from 'react';
import { Button } from '@mui/material';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } =
    useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>
            {call.name
              ? `${call.name} is Calling : `
              : `Unknown Call :`}{' '}
          </h1>
          <Button
            variant='contained'
            color='secondary'
            onClick={answerCall}
            className='glow-on-hover'
          >
            Accept
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
