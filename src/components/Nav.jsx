import React from 'react'

const Nav = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.6)]" />
          <span className="font-medium tracking-wide text-white/90">Ламповый Прокат</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#work" className="hover:text-white transition-colors">Работы</a>
          <a href="#services" className="hover:text-white transition-colors">Услуги</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a>
          <a href="#contact" className="hover:text-white transition-colors">Связаться</a>
        </nav>
      </div>
    </header>
  )
}

export default Nav
