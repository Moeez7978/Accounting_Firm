import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Accounting from './pages/Services/Accounting'
import Tax from './pages/Services/Tax'
import Outsourcing from './pages/Services/Outsourcing'
import IT from './pages/Services/IT'
import ServiceDetail from "./pages/Services/ServiceDetail.jsx";
import Footer from './components/Footer.jsx'

const App = () => {
  const basename = import.meta.env.MODE === 'production'
  ? '/Accounting_Firm'
  : '/'
  return (
    <>
      <BrowserRouter basename='Accounting_Firm'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/get-quote' element={<Contact/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/tax" element={<Tax />} />
          <Route path="/outsourcing" element={<Outsourcing />} />
          <Route path="/it-services" element={<IT />} />
          <Route path="/services/:serviceSlug/:subServiceSlug" element={<ServiceDetail />} />
        </Routes>
        <Footer></Footer>

      </BrowserRouter>
      
    </>
  )
}

export default App
