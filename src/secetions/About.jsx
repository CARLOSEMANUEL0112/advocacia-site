import { CheckCircle2 } from "lucide-react"
import { site } from "../data/site"

const highlights = [
  "Atendimento exclusivo e humanizado",
  "Transparência total em cada etapa do processo",
  "Atuação altamente especializada e atualizada",
  "Foco em soluções preventivas e agilidade",
]

function About() {
  return (
    <section id="escritorio" className="bg-[#0b1628] text-white py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Esquerda (Foto do escritório) */}
          <div className="lg:col-span-6">
            <div className="rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-[#0e1d35]">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"
                alt="Ambiente de atendimento do escritório"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Coluna da Direita (Conteúdo principal) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-[#c9a96e]/10 border border-[#c9a96e]/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c9a96e]"></span>
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c9a96e]">
                O Escritório
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Tradição, ética e compromisso com o seu resultado.
            </h2>

            <p className="text-base text-white/70 leading-relaxed mb-6">
              Fundado para oferecer uma advocacia de alta performance, o escritório Almeida Advocacia combina rigor técnico com uma visão moderna e estratégica.
            </p>

            <p className="text-base text-white/70 leading-relaxed mb-8">
              O compromisso vai além do acompanhamento processual: busco entender profundamente a necessidade de cada cliente para entregar segurança física, patrimonial e jurídica.
            </p>

            {/* Lista de Diferenciais */}
            <div className="grid sm:grid-cols-2 gap-4 w-full pt-6 border-t border-white/10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#c9a96e] shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Botão para o Mapa estilo Card Outline */}
            {site?.mapUrl && (
              <div className="mt-8 pt-6 border-t border-white/10 w-full">
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl border border-white/20 hover:bg-white/5 text-white font-semibold text-sm transition-all text-center block"
                >
                  Ver localização no mapa
                </a>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}

export default About