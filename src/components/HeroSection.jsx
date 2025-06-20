import { useState } from 'react'

const slides = [
  {
    title: "Jose Murinho dissed Chelsea!",
    subtitle: "Murinho god",
    description: "Jose goat hai bhai",
    image: "/src/images/jm.jpg", // Replace with your hero image
  },
  {
    title: "Cole Palmer agrees that he is a PenMerchant!",
    subtitle: "Wot? Watt?",
    description: "I can play on field but I cant play irl",
    image: "src/images/cpwhat.jpg",
  },
  {
    title: "Chelsea's lion is tired of being a lion!",
    subtitle: "Interviews",
    description: "Watch how chelsea's lion is tired of being the mascot of a loser team",
    image: "/src/images/lion.jpg",
  },
]

function HeroSection() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((current + 1) % slides.length)
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length)

  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">

      <img
        src={slides[current].image}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="relative z-10 p-10 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{slides[current].title}</h1>
        <div className="flex gap-4 items-center">
          <span className="bg-blue-900 text-xs px-2 py-1 rounded uppercase">{slides[current].subtitle}</span>
          {slides[current].description && (
            <span className="text-gray-300 text-sm">{slides[current].description}</span>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 right-10 flex gap-2 z-20">
        <button onClick={prevSlide} className="bg-blue-900 p-2 rounded text-white">&lt;</button>
        <button onClick={nextSlide} className="bg-blue-900 p-2 rounded text-white">&gt;</button>
      </div>
    </section>
  )
}

export default HeroSection
