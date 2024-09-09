import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Downloadapp from './Pages/Downloadapp'
import Contactus from './Pages/Contactus'
import Footer from './Components/Footer'
import './App.css'

function App() {
  

  return (
    <div className='app'>
        <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Downloadapp' element={<Downloadapp/>}></Route>
              <Route path='/Contactus' element={<Contactus/>}></Route>
            </Routes>
          <Footer/>
        </Router>

    </div>
  )
}

export default App
