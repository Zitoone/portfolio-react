import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import "./style/app.css"
import About from './pages/about'
import Contact from './pages/contact'
import Error404 from './pages/error404'
import Home from './pages/home'
import Skills from './pages/skills'
import Projects from './pages/projects'



function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  )
}

export default App