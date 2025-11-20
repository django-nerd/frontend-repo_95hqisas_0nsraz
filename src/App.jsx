import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/90 selection:text-black">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_10%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_60%,rgba(255,200,120,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      <Nav />

      <main>
        <Hero />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
