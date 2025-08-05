import './App.css'
import GolfBallOrbit from './components/GolfBallOrbit'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Membership from './components/Membership'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-black min-h-screen'>
      {/* < GolfBallOrbit /> */}

      <Navbar />
      <HeroSection />
      <About />
      <Membership />
      <Footer />
      {/* < GolfBallOrbit /> */}
    </div>
  )
}

export default App
