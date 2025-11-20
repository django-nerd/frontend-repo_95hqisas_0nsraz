import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1529634899231-2f7da28c6096?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511033430160-7f5f16a3e2ef?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521334726092-b509a19597d8?q=80&w=1600&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section className="relative bg-black text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_0%,rgba(255,200,120,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white/90">Галерея мероприятий</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Тёплые заливки, белые лучи в дымке и живые эмоции — свадьбы, конференции, банкетные залы и open-air события.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <img src={src} alt="Сцены с мероприятий" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
