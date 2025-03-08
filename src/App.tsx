
import './App.css'
import './assets/style/custom.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/home';
import About from './components/about';
import { Box } from '@mui/material';
import * as $ from 'jquery';
import Admin from './components/admin';
import Home from './components/home';
(window as any).jQuery = $;


function App() {
 

  return (
    <>

    <Router>

      <Box component={'div'} width={'100vw'}>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        </Box>

       
       </Router>
    
    </>
  )
}

export default App
