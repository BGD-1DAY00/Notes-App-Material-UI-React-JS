import React from 'react';
import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar } from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';


const drawerWidth = 240

const useStyles = makeStyles((theme)=>{
  return{
      page: {
        background: '#f9f9f9',
        width:' 100%'
      },
      drawer:{
        width: drawerWidth
      },
      drawerPaper:{
        width: drawerWidth
      },
      root:{
        display: 'flex'
      },
      active: {
        background: grey[400]
      },
      title:{
        padding: theme.spacing(3)
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    toobar: theme.mixins.toolbar
  }

})

export default function Layout({children}) {
  const styles = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create'
    }
  ]
  return (
    <div className={styles.root}>
      <AppBar className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <Typography>
            Welcome to Notes Best
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={styles.drawer}
        variant='permanent'
        anchor='left'
        classes={{paper: styles.drawerPaper}} //this overwrites certain methods in the Drawer Method
      >
        <div>
          <Typography variant='h5' className={styles.title}>
            Best Notes
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemText primary='hello' />
          </ListItem>
            {menuItems.map((item)=>{
              const {text, icon, path} = item
              return(
                <ListItem
                  key={text}
                  button
                  onClick={()=>navigate(`${path}`)}
                  className = {location.pathname === path ? styles.active : null}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            })}
        </List>
      </Drawer>
      <div className={styles.page} style={{marginTop: '5rem'}}>
      {children}
      </div>
    </div>
  )
}
