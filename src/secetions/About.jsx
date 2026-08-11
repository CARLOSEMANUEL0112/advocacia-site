import { useState, useEffect } from "react"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const highlights = [
  "Atendimento exclusivo e humanizado",
  "Transparência total em cada etapa do processo",
  "Atuação altamente especializada e atualizada",
  "Foco em soluções preventivas e agilidade",
]

const officePhotos = [
  {
    url: "/escritorio-card.png",
    caption: "Fachada do Escritório Thiago Miranda Advogados"
  },
  {
    url: "/sala_card_aprimorada.png",
    caption: "Interior do Escritório"
  }
]

function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % officePhotos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? officePhotos.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % officePhotos.length)
  }

  return (
    <section id="escritorio" className="bg-black text-white py-24 sm:py-32 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Esquerda (Carrossel com bordas douradas e sem cortes) */}
          <div className="lg:col-span-6 relative group">
            <div className="rounded-[2.5rem] overflow-hidden border-2 border-[#c9a96e]/40 shadow-2xl shadow-[#c9a96e]/10 relative h-[520px] sm:h-[650px] flex items-center justify-center bg-[#0a0a0a]">
              
              {/* Fundo desfocado elegante para preencher as laterais mantendo a foto inteira visível */}
              {officePhotos.map((photo, index) => (
                <div
                  key={`bg-${index}`}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-30 z-0" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={photo.url}
                    alt=""
                    className="w-full h-full object-cover filter blur-xl scale-110"
                    aria-hidden="true"
                  />
                </div>
              ))}

              {/* Camada escura sutil sobre o fundo */}
              <div className="absolute inset-0 bg-black/50 z-0" />

              {/* As fotos do Carrossel por cima, inteiras e sem cortes */}
              {officePhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center p-3 sm:p-6 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-contain drop-shadow-2xl rounded-2xl"
                  />
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/65 backdrop-blur-md border border-[#c9a96e]/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#c9a96e] hover:text-black hover:border-[#c9a96e] cursor-pointer shadow-lg"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/65 backdrop-blur-md border border-[#c9a96e]/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#c9a96e] hover:text-black hover:border-[#c9a96e] cursor-pointer shadow-lg"
                aria-label="Próxima foto"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 bg-black/65 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#c9a96e]/30 shadow-xl">
                {officePhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      index === currentIndex ? "w-6 bg-[#c9a96e]" : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Ir para foto ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Coluna da Direita (Conteúdo) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Tradição, ética e compromisso com o seu resultado.
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-4">
              Fundado para oferecer uma advocacia de alta performance, o escritório combina rigor técnico com uma visão moderna e estratégica para cada cliente.
            </p>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
              O compromisso vai além do acompanhamento processual: buscamos entender profundamente a necessidade de cada caso para entregar segurança jurídica e patrimonial sólida.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 w-full pt-4 border-t border-white/10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors p-3 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-[#c9a96e] shrink-0 mt-0.5" />
                  <span className="text-xs text-white/90 leading-snug">{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About