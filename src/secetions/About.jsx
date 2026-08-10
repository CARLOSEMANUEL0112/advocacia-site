import { useState, useEffect } from "react"
import { CheckCircle2, MapPin, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const highlights = [
  "Atendimento exclusivo e humanizado",
  "Transparência total em cada etapa do processo",
  "Atuação altamente especializada e atualizada",
  "Foco em soluções preventivas e agilidade",
]

const officePhotos = [
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    caption: "Ambiente de Atendimento"
  },
  {
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000",
    caption: "Sala de Reuniões"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    caption: "Recepção do Escritório"
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
          
          {/* Coluna da Esquerda (Carrossel Limpo) */}
          <div className="lg:col-span-6 relative group">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl bg-[#111111] relative h-[450px] sm:h-[580px]">
              
              {officePhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-25 w-10 h-10 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#c9a96e] hover:text-black hover:border-[#c9a96e] cursor-pointer shadow-lg"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-25 w-10 h-10 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#c9a96e] hover:text-black hover:border-[#c9a96e] cursor-pointer shadow-lg"
                aria-label="Próxima foto"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-6 right-6 z-25 flex items-center gap-1.5 bg-black/65 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 shadow-xl">
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

          {/* Coluna da Direita (Conteúdo + Mapa Integrado) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 bg-[#c9a96e]/10 border border-[#c9a96e]/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c9a96e]"></span>
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c9a96e]">
                O Escritório & Localização
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Tradição, ética e compromisso com o seu resultado.
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-4">
              Fundado para oferecer uma advocacia de alta performance, o escritório combina rigor técnico com uma visão moderna e estratégica para cada cliente.
            </p>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
              O compromisso vai além do acompanhamento processual: buscamos entender profundamente a necessidade de cada caso para entregar segurança jurídica e patrimonial sólida.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 w-full pt-4 border-t border-white/10 mb-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors p-3 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-[#c9a96e] shrink-0 mt-0.5" />
                  <span className="text-xs text-white/90 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* BLOCO DE LOCALIZAÇÃO */}
            <div className="w-full bg-[#111111] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center text-[#c9a96e] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Thiago Miranda Advogados</h3>
                    <p className="text-xs sm:text-sm text-white/70">Avenida Antônio Ribeiro - Centro, Júlio Borges - PI, 64983-000</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Thiago+Miranda+Advogados+J%C3%BAlio+Borges+PI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#c9a96e]/10 hover:bg-[#c9a96e] text-[#c9a96e] hover:text-black border border-[#c9a96e]/30 text-xs font-semibold transition-all shrink-0"
                >
                  <span>Ampliar</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Mapa incorporado correto */}
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-white/10 relative shadow-inner bg-white/5">
                <iframe
                  title="Localização do Escritório - Thiago Miranda Advogados"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.179180030242!2d-44.239133125201704!3d-10.327541289795231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76397e237072cef%3A0x614097124d0bda0!2sThiago%20Miranda%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1786318970155!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

              {/* Botão mobile */}
              <div className="mt-4 pt-3 border-t border-white/10 flex sm:hidden justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Thiago+Miranda+Advogados+J%C3%BAlio+Borges+PI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#c9a96e] text-black text-xs font-bold transition-all shadow-md"
                >
                  <MapPin size={16} />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About