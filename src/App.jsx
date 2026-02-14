import { Route, Routes } from "react-router-dom"

import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop";

function App() {


  return (
    <div className="main-container">
      <ScrollToTop/>
      <NavBar/>

      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route  path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
