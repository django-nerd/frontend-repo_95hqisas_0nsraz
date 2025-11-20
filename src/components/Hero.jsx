import React from 'react'

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_20%,rgba(255,195,100,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_50%,rgba(255,180,80,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_50%,rgba(255,220,160,0.12),transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="pointer-events-none absolute -left-20 top-0 h-[140%] w-[60%] rotate-6 bg-gradient-to-b from-white/30 via-white/5 to-transparent blur-[2px] opacity-15" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-[140%] w-[45%] -rotate-6 bg-gradient-to-b from-amber-200/20 via-white/10 to-transparent blur-[1px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 md:pt-28 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.8)]" />
            <span className="text-xs tracking-widest uppercase text-white/70">Ламповый Прокат — свет и звук c душой</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-white drop-shadow-[0_6px_40px_rgba(255,200,100,0.15)]">
            «Мы создаём атмосферу, которая делает ваше событие незабываемым»
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
            Портфолио-коллекция, где мы собрали любимые проекты: от камерных вечеров до масштабных сцен. В кадре — эмоции, свет и чистый звук.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-400/90 hover:bg-amber-400 text-black px-6 py-3 font-medium transition-colors shadow-[0_8px_30px_rgba(251,191,36,0.25)]"
            >
              <span>Смотреть работы</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/200/svg">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium text-white/90 transition-colors"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative z-10 h-24 w-full -mt-14 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}

export default Hero
