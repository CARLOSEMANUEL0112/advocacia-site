import { Mail, MessageSquare, Award, CheckCircle2, Quote } from "lucide-react"

function Team() {
  return (
    <section id="sobre" className="bg-black text-white py-28 sm:py-36 border-t border-white/10 relative overflow-hidden">
      
      {/* Luz de fundo sutil para dar profundidade premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a96e]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
            Atuação Direta e Exclusiva
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            Sem intermediários: você trata do seu caso diretamente com o especialista responsável por toda a sua estratégia jurídica.
          </p>
        </div>

        {/* Card do Advogado */}
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#111111] to-[#080808] border border-white/10 hover:border-[#c9a96e]/40 transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-12 items-stretch">
          
          {/* Container da Imagem */}
          <div className="md:col-span-5 relative h-[420px] sm:h-[500px] md:h-auto min-h-[480px] bg-[#1a1a1a] overflow-hidden group">
            <img
              src="/foto_thiago.jpeg"
              alt="Dr. Thiago Miranda - Advogado Responsável"
              className="w-full h-full object-cover object-[center_25%] absolute inset-0 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent md:hidden" />
          </div>

          {/* Conteúdo do Card */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-wide">
                Dr. Thiago Miranda
              </h3>

              <div className="flex items-center gap-2 text-sm text-[#c9a96e] font-semibold tracking-widest uppercase">
                <Award size={16} />
                <span>Advogado Titular & Sócio Fundador</span>
              </div>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                Graduado pela Escola de Direito - Universidade Anhembi Morumbi. Profissional dedicado à advocacia estratégica, com atuação firme na resolução de conflitos, proteção de direitos e planejamento jurídico personalizado para cada cliente.
              </p>

              {/* Diferenciais rápidos */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80">
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 p-2.5 rounded-xl">
                  <CheckCircle2 size={15} className="text-[#c9a96e] shrink-0" />
                  <span>Atendimento Personalizado</span>
                </div>
                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 p-2.5 rounded-xl">
                  <CheckCircle2 size={15} className="text-[#c9a96e] shrink-0" />
                  <span>Estratégia sob Medida</span>
                </div>
              </div>

              {/* Citação preenchendo o espaço com elegância */}
              <div className="relative bg-[#c9a96e]/5 border-l-2 border-[#c9a96e] p-4 rounded-r-xl text-xs sm:text-sm text-white/80 italic">
                <Quote size={14} className="text-[#c9a96e] inline mr-2 opacity-60" />
                "A advocacia exige técnica, mas acima de tudo, compromisso inegociável com a tranquilidade e os direitos de cada cliente."
              </div>
            </div>

            {/* Rodapé do Card */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2.5 bg-[#c9a96e] hover:bg-[#b8975c] text-black px-7 py-3.5 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-[#c9a96e]/15 hover:shadow-[#c9a96e]/30 hover:-translate-y-0.5"
              >
                <MessageSquare size={17} />
                Agendar Consulta
              </a>

              <a 
                href="mailto:thiago.oab.adv@outlook.com" 
                aria-label="Enviar E-mail"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#c9a96e] hover:border-[#c9a96e]/40 hover:bg-[#c9a96e]/10 transition-all hover:-translate-y-0.5"
              >
                <Mail size={19} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Team