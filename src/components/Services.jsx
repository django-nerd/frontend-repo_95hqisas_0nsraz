import React from 'react'

const services = [
  { title: 'Свет', desc: 'Постановочный и архитектурный свет, динамика, тёплые заливки и белые лучи в дымке.' },
  { title: 'Звук', desc: 'Чистый и разборчивый саунд для камерных и масштабных залов.' },
  { title: 'Сцена', desc: 'Подиумы, фермовые конструкции, экраны и аккуратный монтаж.' },
  { title: 'Техника и поддержка', desc: 'Проверенное оборудование, резервирование и дежурная команда на площадке.' },
]

const Services = () => {
  return (
    <section id="services" className="relative bg-black text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_0%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white/90">Услуги</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-white/90 font-medium">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
