import { Building2, Users, FileText, Scale, Briefcase, Gavel } from "lucide-react"

const areas = [
  {
    icon: Building2,
    title: "Direito Empresarial",
    description: "Assessoria estratégica para empresas, contratos corporativos, fusões e prevenção de riscos jurídicos."
  },
  {
    icon: Users,
    title: "Direito de Família e Sucessões",
    description: "Resolução humanizada e discreta para divórcios, inventários, partilha de bens e planejamento sucessório."
  },
  {
    icon: FileText,
    title: "Direito Civil e Contratos",
    description: "Elaboração e análise rígida de contratos, renegociações e indenizações para proteção do seu patrimônio."
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Atuação defensiva para empresas e defesa dos direitos corporativos de executivos e trabalhadores."
  },
  {
    icon: Scale,
    title: "Direito Imobiliário",
    description: "Segurança jurídica em compra, venda, locação, regularização de imóveis e usucapião."
  },
  {
    icon: Gavel,
    title: "Direito Tributário",
    description: "Planejamento tributário, recuperação de créditos e defesa em processos administrativos ou judiciais."
  }
]

function Services() {
  return (
    <section id="atuacao" className="bg-[#0e1d35] text-white py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#c9a96e]/10 border border-[#c9a96e]/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c9a96e]"></span>
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c9a96e]">
              Especialidades
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Nossas Principais Áreas de Atuação
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Oferecemos soluções jurídicas personalizadas com foco na prevenção de litígios e na defesa firme dos seus interesses.
          </p>
        </div>

        {/* Grid dos Cards de Áreas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <div 
                key={index}
                className="bg-[#0b1628] border border-white/10 p-8 rounded-2xl hover:border-[#c9a96e]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] mb-6 group-hover:bg-[#c9a96e] group-hover:text-[#0b1628] transition-all duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#c9a96e] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Services;