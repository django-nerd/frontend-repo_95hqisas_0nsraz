import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Approach from './components/Approach'
import Trust from './components/Trust'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Soft global background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_30%,rgba(255,200,120,0.06),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      {/* Simple premium header */}
      <header className="relative z-20">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
            <span className="tracking-wide font-medium text-white/90">Ламповый Прокат</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition-colors">О компании</a>
            <a href="#gallery" className="hover:text-white transition-colors">Галерея</a>
            <a href="#approach" className="hover:text-white transition-colors">Наш подход</a>
            <a href="#contact" className="hover:text-white transition-colors">Связаться</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <div id="about"><About /></div>
        <div id="gallery"><Gallery /></div>
        <div id="approach"><Approach /></div>
        <Trust />
      </main>

      <footer id="contact" className="relative z-10 bg-black/60 border-t border-white/10">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-white/90 font-medium">Ламповый Прокат</h3>
              <p className="text-white/60 mt-2 max-w-md">Атмосфера, эмоции, свет и звук — тщательно и по‑премиальному. Мы делаем события, о которых хочется вспоминать.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/79999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-400/90 hover:bg-amber-400 text-black px-5 py-2.5 font-medium transition-colors">WhatsApp</a>
              <a href="https://t.me/username" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 font-medium transition-colors">Telegram</a>
            </div>
          </div>
          <div className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} Ламповый Прокат. Все права защищены.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
