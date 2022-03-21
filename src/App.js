import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes'
import Create from './pages/Create'
import Home from './pages/Home'
import './App.css';


function App() {
  return (
  
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
     </BrowserRouter>
  

    
  );
}

export default App;
