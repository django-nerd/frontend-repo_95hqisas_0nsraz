import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-black/60 border-t border-white/10">
      <div className="container mx-auto px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-white/90 font-medium">Ламповый Прокат</h3>
          <p className="text-white/60 mt-2 max-w-md">Атмосфера, эмоции, свет и звук — тщательно и по‑премиальному. Мы делаем события, о которых хочется вспоминать.</p>
        </div>
        <div className="text-xs text-white/40">© {new Date().getFullYear()} Ламповый Прокат. Все права защищены.</div>
      </div>
    </footer>
  )
}

export default Footer
