import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,Button } from '@material-ui/core';
import React from 'react';
import {useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@material-ui/core';
import { pink } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';

const styles = makeStyles({
  btn: {
    color: pink[500],
    backgroundColor: yellow[300],
    padding: '25px 40px',
    width: '25%',
    textAlign: 'center',
    display:'absolute',
    top: '50%',
    left: '37%'
    

  },
  mar: {
    marginTop: '30px'
  },
  mar2: {
    marginTop: '30px'
  },
  dad: {
    marginTop: '30px'
  },
  dis: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  }
})
const Home = () => {
  const [category, setCategory] = useState('money')
  const [categoryTwo, setCategoryTwo] = useState('Meditate')
  const color = styles()

  return (
    <div  >
      <FormControl className={color.dis} >
        <div className={color.mar2}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <FormControlLabel value='money' control={<Radio />} label='Money'/>
            <FormControlLabel value='reminder' control={<Radio />} label='reminder'/>
            <FormControlLabel value='work' control={<Radio />} label='work'/>
          </RadioGroup>
        </div>
        <div className={color.mar2}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={categoryTwo} onChange={(e)=>{setCategoryTwo(e.target.value)}}>
            <FormControlLabel value='Workout' control={<Radio />} label='Workout'/>
            <FormControlLabel value='Sleep' control={<Radio />} label='Sleep'/>
            <FormControlLabel value='Meditate' control={<Radio />} label='Meditate'/>
          </RadioGroup>
        </div>
        
      </FormControl>
      <Button 
          variant='contained'
          endIcon={<ArrowForwardIosIcon />}
          size='large'
          className={color.btn}
          type='submit'
          onClick={()=>console.log('sdjfkl')}
          
          
        >
          Submit
        </Button>
      

    </div>
  );
}

export default Home;
