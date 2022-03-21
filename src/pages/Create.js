import React,{useState} from 'react';
import { TextField } from '@mui/material';


const Create = ({colors}) => {
  const [text, setText] = useState('');
  const [textTwo, setTextTwo] = useState('')
  const handle =(e)=>{
    setText(e.target.value)
    console.log(text)
  }
  const handleTwo =(e)=>{
    setTextTwo(e.target.value)
    console.log(textTwo)
  }
  return (
    <div className={colors.lr}>
      <TextField
      label='Note Title'
      fullWidth
      variant='outlined'
      required
      margin='dense'
      value={text}
      onChange={(e)=>handle(e)}

  />
    <TextField
    label='Details'
    fullWidth
    variant='outlined'
    multiline
    rows={4}
    required
    margin='dense'
    value={textTwo}
    onChange={(e)=>handleTwo(e)}
  ></TextField>
    </div>

  );
}

export default Create;
