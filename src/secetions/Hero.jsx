import { ArrowRight, Check } from "lucide-react"

function Hero() {
  return (
    <section id="inicio" className="bg-[#0b1628] text-white pt-36 sm:pt-44 lg:pt-48 pb-20 lg:pb-28 min-h-screen flex items-center">
      {/* Container principal com margens de respiro fluidas */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Coluna da Esquerda (Textos e Botões) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tag Pílula */}
            <div className="inline-flex items-center gap-2 bg-[#c9a96e]/10 border border-[#c9a96e]/30 px-4 py-2 rounded-full mb-6 sm:mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c9a96e]"></span>
              <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c9a96e]">
                Advocacia Estratégica
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.2] tracking-tight text-white mb-6">
              Experiência e estratégia,{" "}
              <span className="block text-[#c9a96e] italic font-normal mt-2">
                para defender seus interesses.
              </span>
            </h1>

            {/* Descrição */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-8 sm:mb-10">
              Atuamos de forma personalizada para oferecer segurança jurídica e soluções eficientes para cada caso.
            </p>

            {/* Botões com padding nativo (py-4) para dar corpo e respiro */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10 sm:mb-12">
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center gap-3 bg-[#c9a96e] hover:bg-[#b8975c] text-[#0b1628] px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-[#c9a96e]/10 cursor-pointer"
              >
                Falar com advogado 
                <ArrowRight size={20} />
              </a>

              <a 
                href="#atuacao" 
                className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 py-4 rounded-xl font-medium text-base text-white hover:bg-white hover:text-[#0b1628] transition-all cursor-pointer"
              >
                Conheça nossa atuação
              </a>
            </div>

            {/* Ícones de Benefício no Rodapé */}
            <div className="w-full pt-8 border-t border-white/10 flex flex-wrap gap-6 sm:gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <Check size={18} className="text-[#c9a96e] shrink-0" /> 
                <span>Atendimento personalizado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check size={18} className="text-[#c9a96e] shrink-0" /> 
                <span>Sigilo e segurança</span>
              </div>
            </div>

          </div>

          {/* Coluna da Direita (Apenas a imagem limpa e sofisticada) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-4 sm:border-8 border-white/10 shadow-2xl bg-[#0e1d35]">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000"
                alt="Escritório de advocacia"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero