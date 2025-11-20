import React from 'react'

const Trust = () => {
  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_100%_30%,rgba(255,200,120,0.09),transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-light text-white">100+</span>
              <span className="mt-2 text-white/70">реализованных мероприятий</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-light text-white">10 лет</span>
              <span className="mt-2 text-white/70">опыта в event-индустрии</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-light text-white">Команда</span>
              <span className="mt-2 text-white/70">профессиональных техников</span>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/79999999999"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-400/90 hover:bg-amber-400 text-black px-6 py-3 font-medium transition-colors shadow-[0_8px_30px_rgba(251,191,36,0.25)]"
            >
              Обсудить ваше мероприятие
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/200/svg">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
