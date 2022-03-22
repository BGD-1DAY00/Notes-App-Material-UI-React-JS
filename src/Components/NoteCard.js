import React from 'react'
import {Card, CardHeader, CardContent, Typography, IconButton} from '@material-ui/core'
import { DeleteOutlined} from '@mui/icons-material'
import { makeStyles } from '@material-ui/styles';
import{Avatar} from '@material-ui/core'
import { yellow, green, blue, pink} from '@material-ui/core/colors';
const useStyles = makeStyles({
  test: {
    border: (note)=>{
      if(note.category === 'work'){
        return '1px solid red'
      }
    }
  },
  avatars: {
    backgroundColor: (note)=>{
      if(note.category === 'Work'){
        return yellow[700]
      }
      if(note.category === 'money'){
        return green[500]
      }
      if(note.category === 'reminders'){
        return blue[500]
      }
      if(note.category === 'todos'){
        return pink[500]
      }
    }
  }
})
export default function NoteCard({note, handle}) {
  const styles = useStyles(note)
  return (
    <div>
      <Card elevation={3} className={styles.test}>
        <CardHeader 
          avatar={
            <Avatar className = {styles.avatars}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={(id)=>{handle(note.id)}}>
              <DeleteOutlined />
            </IconButton>
          }
          title = {note.title}
          subheader = {note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
