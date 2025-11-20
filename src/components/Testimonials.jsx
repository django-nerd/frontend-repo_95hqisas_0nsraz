import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-black text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_100%_30%,rgba(255,200,120,0.09),transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="text-white/85"><span className="text-white">«</span>Умеют работать с атмосферой: свет — как в кино, звук — чистый. Гости в восторге!<span className="text-white">»</span></blockquote>
            <blockquote className="text-white/85"><span className="text-white">«</span>Аккуратный монтаж и точное попадание в концепцию площадки. Профессионально.<span className="text-white">»</span></blockquote>
            <blockquote className="text-white/85"><span className="text-white">«</span>Надёжная команда: всё вовремя, всё работает, никаких сюрпризов.<span className="text-white">»</span></blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
