import React from 'react'

const bullets = [
  'Надёжность и пунктуальность',
  'Премиальное и проверенное оборудование',
  'Аккуратная установка и чистый монтаж',
  'Работа под концепцию площадки и сценария',
  'Внимание к атмосфере и эмоциям гостей',
]

const Approach = () => {
  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_0%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white/90">Наш подход</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {bullets.map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.6)]" />
              <p className="text-white/85">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
