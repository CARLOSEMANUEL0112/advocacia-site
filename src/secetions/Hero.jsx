import { ArrowRight, Check } from "lucide-react"

function Hero() {
  return (
    <section id="inicio" className="relative bg-black text-white pt-36 sm:pt-44 lg:pt-48 pb-20 lg:pb-32 min-h-screen flex items-center overflow-hidden">
      
      {/* Container principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-center">
        
        {/* COLUNA DA ESQUERDA: Textos e Botões */}
        <div className="w-full lg:col-span-7 flex flex-col items-start z-10">

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] tracking-tight text-white mb-6">
            Excelência jurídica para a proteção{" "}
            <span className="block text-[#c9a96e] italic font-normal mt-2">
              dos seus direitos.
            </span>
          </h1>

          {/* Descrição */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mb-8">
            Escritório full service com expertise em assessoria e consultoria jurídica em casos complexos, atuação interdisciplinar e humanizada.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
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
          <div className="w-full pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm text-white/75">
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

        {/* COLUNA DA DIREITA: Foto RETANGULAR com bordas alinhadas e efeito de zoom */}
        <div className="w-full lg:col-span-5 relative flex justify-center items-center group cursor-pointer">
          {/* Container Externo (Quadro): Borda dourada alinhada, sem sombra externa, fundo de cor sólida pra não vazar */}
          <div className="relative w-full max-w-md rounded-[2.5rem] border-2 border-[#c9a96e]/40 group-hover:border-[#c9a96e] bg-black p-1 flex items-center justify-center h-[500px] sm:h-[580px] transition-all duration-500 overflow-hidden">
            
            {/* 1. Foto Principal da Fachada (RETANGULAR): Borda interna e zoom suave no hover, sem padding extra pra alinhar */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.3rem] group-hover:border-[#c9a96e]">
              <img
                src="/escritorio-card.png"
                alt="Fachada do Escritório Thiago Miranda Advogados"
                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero