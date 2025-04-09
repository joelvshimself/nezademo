import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Products from './components/products'
import ThreeDCardDemo from './components/card3'
import Footer from './components/footer'
import Loader from './components/loader'
import './styles/App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Detecta si la página ya se cargó completamente
    if (document.readyState === 'complete') {
      setIsLoading(false)
    } else {
      window.addEventListener('load', () => {
        setIsLoading(false)
      })
    }

    return () => {
      window.removeEventListener('load', () => {
        setIsLoading(false)
      })
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      <Navbar />
      <Products />
      <ThreeDCardDemo />
      <Footer />
    </>
  )
}

export default App
