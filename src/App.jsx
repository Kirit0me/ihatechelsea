import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import LgbtqFlagPage from './pages/LgbtqFlagPage'
import EmbarrassingSlideshow from './pages/EmbarrassingSlideshow'
import HateCommentsPage from './pages/HateCommentsPage'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/lgbtq-flag" element={<LgbtqFlagPage />} />
        <Route path="/embarrassing-slideshow" element={<EmbarrassingSlideshow />} />
        <Route path="/hate-comments" element={<HateCommentsPage />} />
      </Routes>
    </div>
  )
}

export default App
