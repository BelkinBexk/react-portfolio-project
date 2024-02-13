import { useState } from 'react'
import './App.css'
import AnimatedCursor from 'react-animated-cursor'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Expertises from './components/Expertises/Expertises'
import Services from './components/Services/Services'
import Porfolio from './components/Porfolio/Porfolio'
import Number from './components/Number/Number'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='0, 65, 125'
      outerAlpha={0.2}
      innerScale={1.5}
      outerScale={{
        border: '3px solid #fff'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Navbar/>
      <Hero/>
      <Expertises/>
      <Services/>
      <Porfolio/>
      <Number/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
