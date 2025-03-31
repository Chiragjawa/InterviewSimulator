
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'

function App() {
 

  return (
   <main>
    <Navbar/>
    <HeroSection/>
    <Login/>
   </main>
  )
}

export default App
