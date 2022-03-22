import {purple} from '@material-ui/core/colors'
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from '../src/Components/Layout'

import './App.css';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
      <Layout>        
          <Routes>
            <Route path='/' element={<Notes />}/>
            <Route path='/create' element={<Create />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
     </ThemeProvider>
  

    
  );
}

export default App;
