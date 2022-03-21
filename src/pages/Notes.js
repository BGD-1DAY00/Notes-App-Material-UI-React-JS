import {  Typography } from '@material-ui/core';
import React from 'react';
import Create from './Create';
import Home from './Home';
import { makeStyles } from '@material-ui/core';
const styles = makeStyles({
  mar: {
    marginBottom: '30px',
    textAlign: 'center'
  },
  lr: {
    marginLeft: '25px',
    marginRight: '25px'
  },

})
const Notes = () => {
  const colors = styles()

  return (
    <div>
      
        <Typography variant='h3'className={colors.mar}>
          Create a New Note
        </Typography>
        <Create colors ={colors}  />
        <Home  />
      
    </div>
  );
}

export default Notes;
