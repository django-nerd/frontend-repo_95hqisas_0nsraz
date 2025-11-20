import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_50%,rgba(255,200,120,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 md:p-12 backdrop-blur-sm flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white/90">Обсудить ваш проект</h2>
          <p className="mt-3 text-white/70 max-w-xl">Расскажите пару слов о событии — мы подберём свет, звук и сцену под атмосферу и площадку.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/79999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-400/90 hover:bg-amber-400 text-black px-6 py-3 font-medium transition-colors">WhatsApp</a>
            <a href="https://t.me/username" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3 font-medium transition-colors">Telegram</a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3 font-medium transition-colors">Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
