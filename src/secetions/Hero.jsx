import { ArrowRight, Check } from "lucide-react"

function Hero() {
  return (
    <section id="inicio" className="relative bg-black text-white pt-36 sm:pt-44 lg:pt-48 pb-20 lg:pb-32 min-h-screen flex items-center overflow-hidden">
      
      {/* IMAGEM DE FUNDO COM GRADIENTE AJUSTADO */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
          alt="Escritório de advocacia de alto padrão"
          className="w-full h-full object-cover object-center opacity-75"
        />
        {/* Gradiente inteligente: Preto sólido à esquerda para o texto e transparente revelando a foto à direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent"></div>
        {/* Sutil escurecida geral para unificar o tom */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Container principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        <div className="max-w-3xl flex flex-col items-start">

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.15] tracking-tight text-white mb-6">
            Excelência jurídica para a proteção{" "}
            <span className="block text-[#c9a96e] italic font-normal mt-2">
              dos seus direitos.
            </span>
          </h1>

          {/* Descrição Atualizada com o perfil do Dr. Thiago */}
          <p className="text-base sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Escritório full service com expertise em assessoria e consultoria jurídica em casos complexos, atuação interdisciplinar e humanizada.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10 sm:mb-12">
            <a 
              href="#contato" 
              className="inline-flex items-center justify-center gap-3 bg-[#c9a96e] hover:bg-[#b8975c] text-black px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-[#c9a96e]/20 cursor-pointer"
            >
              Falar com advogado 
              <ArrowRight size={20} />
            </a>

            <a 
              href="#atuacao" 
              className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-8 py-4 rounded-xl font-medium text-base text-white hover:bg-[#c9a96e] hover:text-black hover:border-[#c9a96e] transition-all cursor-pointer"
            >
              Saiba mais
            </a>
          </div>

          {/* Ícones de Benefício no Rodapé */}
          <div className="w-full pt-8 border-t border-white/10 flex flex-wrap gap-6 sm:gap-8 text-sm text-white/75">
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
      </div>
    </section>
  )
}

export default Hero