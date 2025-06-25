// 
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/Dashboard'
import Loginform from './pages/Loginform'
import InterviewScore from './pages/student/InterviewScore'

function App() {
 

  return (
   <main>
    <Navbar/>
    {/* <HeroSection/> */}
    {/* <Loginform/> */}
    <Login/>
    {/* <InterviewScore/> */}
    
   </main>
  )
}

export default App
