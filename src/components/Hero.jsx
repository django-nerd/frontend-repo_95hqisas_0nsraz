import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        {/* Deep vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_20%,rgba(255,195,100,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_50%,rgba(255,180,80,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_50%,rgba(255,220,160,0.15),transparent_60%)]" />
        {/* Haze */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        {/* Subtle light beams */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[140%] w-[60%] rotate-6 bg-gradient-to-b from-white/30 via-white/5 to-transparent blur-[2px] opacity-15" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-[140%] w-[45%] -rotate-6 bg-gradient-to-b from-amber-200/20 via-white/10 to-transparent blur-[1px] opacity-20" />
        {/* Photo montage (premium, warm, joyful) */}
        <div className="absolute inset-0 mix-blend-screen opacity-70">
          <div className="absolute right-6 top-8 w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" alt="Счастливые гости на свадьбе" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-6 bottom-8 w-64 h-80 md:w-80 md:h-[26rem] rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop" alt="Танцы и световые лучи" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[88vw] md:w-[60vw] h-[38vh] md:h-[50vh] rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop" alt="Атмосферный зал с тёплой подсветкой" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Soft noise for filmic texture */}
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      {/* Content */}
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
            Профессиональный прокат света и звука для свадеб, частных мероприятий и крупных событий.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/79999999999"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-400/90 hover:bg-amber-400 text-black px-6 py-3 font-medium transition-colors shadow-[0_8px_30px_rgba(251,191,36,0.25)]"
            >
              <span>Обсудить ваше мероприятие</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/200/svg">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium text-white/90 transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Gradient divider */}
      <div className="pointer-events-none relative z-10 h-24 w-full -mt-14 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}

export default Hero
