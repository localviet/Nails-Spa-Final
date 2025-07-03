
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/next"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Gallery from './pages/Gallery'


function App() {

  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
      <Analytics />
    </div>
  )
}

export default App
