import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomProductBuilder from './pages/CustomProductBuilder'
import PrintOnDemand from './pages/PrintOnDemand'
import KrVsZakeke from './pages/KrVsZakeke'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CustomProductBuilder/>} />
        <Route path="/print" element={<PrintOnDemand/>} />
        <Route path="/kr" element={<KrVsZakeke/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
