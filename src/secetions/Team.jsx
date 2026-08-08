import { Mail, MessageSquare } from "lucide-react"

function Team() {
  return (
    <section id="sobre" className="bg-[#0e1d35] text-white py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#c9a96e]/10 border border-[#c9a96e]/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c9a96e]"></span>
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c9a96e]">
              Advogado Responsável
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Atuação Direta e Exclusiva
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Sem intermediários: você trata do seu caso diretamente com o especialista responsável por toda a sua estratégia jurídica.
          </p>
        </div>

        {/* Card do Advogado */}
        <div className="max-w-4xl mx-auto bg-[#0b1628] border border-white/10 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-12 items-stretch">
          
          {/* Container da Imagem */}
          <div className="md:col-span-5 relative min-h-[380px] md:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
              alt="Dr. Carlos Almeida - Advogado Responsável"
              className="w-full h-full object-cover object-top absolute inset-0"
            />
          </div>

          {/* Conteúdo */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Dr. Carlos Almeida
                </h3>
                <span className="text-xs font-semibold text-[#c9a96e] bg-[#c9a96e]/15 px-3.5 py-1.5 rounded-full border border-[#c9a96e]/30">
                  OAB/SP 000.000
                </span>
              </div>

              <p className="text-sm text-[#c9a96e] font-semibold tracking-wide uppercase mb-4">
                Advogado Titular
              </p>

              <p className="text-sm text-white/75 leading-relaxed mb-6">
                Especialista em Direito Empresarial e Civil, com vasta experiência em negociações complexas, gestão de litígios e proteção patrimonial.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium bg-white/5 border border-white/15 text-white/90 px-3 py-1.5 rounded-xl">
                  Direito Empresarial
                </span>
                <span className="text-xs font-medium bg-white/5 border border-white/15 text-white/90 px-3 py-1.5 rounded-xl">
                  Contratos
                </span>
                <span className="text-xs font-medium bg-white/5 border border-white/15 text-white/90 px-3 py-1.5 rounded-xl">
                  Proteção Patrimonial
                </span>
              </div>
            </div>

            {/* Rodapé do Card com apenas o botão de E-mail */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2.5 bg-[#c9a96e] hover:bg-[#b8975c] text-[#0b1628] px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-[#c9a96e]/20"
              >
                <MessageSquare size={17} />
                Agendar Consulta
              </a>

              <a 
                href="mailto:carlosemanuelr0405@gmail.com" 
                aria-label="Enviar E-mail"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#c9a96e] hover:border-[#c9a96e]/40 hover:bg-[#c9a96e]/10 transition-all"
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