import './App.css'
import TeamSection from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/Hero'
import ServicesSection from './components/Services'
function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <TeamSection/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
