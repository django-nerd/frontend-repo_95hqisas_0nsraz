import React from 'react'

const About = () => {
  return (
    <section className="relative bg-black text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(255,200,120,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_80%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white/90">О компании «Ламповый Прокат»</h2>
        <p className="mt-6 max-w-3xl text-white/80 leading-relaxed">
          Мы — команда, для которой свет и звук — это язык эмоций. За нашими плечами десятки крупных событий и сотни камерных вечеров, где каждая деталь работала на атмосферу: от мягких тёплых заливок до чистых белых лучей в лёгкой дымке. Мы внимательны, технологичны и аккуратны: продумываем концепцию под площадку, собираем идеальную сценографию и бережно реализуем её на площадке. Наша цель — чтобы ваши гости почувствовали магию момента.
        </p>
      </div>
    </section>
  )
}

export default About
