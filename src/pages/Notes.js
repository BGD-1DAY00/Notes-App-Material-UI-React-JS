import React, { useEffect, useState } from 'react'
import {Grid,  Container} from '@material-ui/core'
import NoteCard from '../Components/NoteCard';
export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
  const handle = async(id)=>{
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newarray = notes.filter(note=> note.id !== id)
    setNotes(newarray)
  }
  return (
    <Container>
        <Grid container spacing={3}>
        {notes && notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} handle={handle} />
          </Grid>
        ))}
      </Grid>
   </Container>
  )
}

