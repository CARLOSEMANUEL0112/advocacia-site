import { useState } from "react"
import { 
  ShieldCheck, 
  Briefcase, 
  Vote, 
  Building2, 
  FileText, 
  ArrowRight,
  CheckCircle2,
  X
} from "lucide-react"

const areas = [
  {
    icon: ShieldCheck,
    title: "Direito Previdenciário",
    description: "Regulamenta a proteção social, assegurando o acesso a benefícios e a segurança financeira dos segurados e dependentes.",
    topics: [
      "Consultoria em aposentadoria",
      "Revisão de benefícios previdenciários",
      "Planejamento sucessório",
      "Orientação sobre seguridade social",
      "Assessoria em requerimentos administrativos",
      "Defesas em ações judiciais previdenciárias"
    ]
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Regula as relações entre empregados e empregadores, buscando assegurar justiça, respeito e equilíbrio no ambiente laboral.",
    topics: [
      "Consultoria em contratos de trabalho",
      "Assessoria em rescisões contratuais",
      "Acompanhamento de disputas trabalhistas",
      "Orientação sobre direitos e deveres do trabalhador",
      "Elaboração de políticas de compliance trabalhista",
      "Representação em audiências trabalhistas"
    ]
  },
  {
    icon: Vote,
    title: "Direito Eleitoral",
    description: "Regulamenta normas e processos eleitorais, assegurando a lisura e a transparência democrática nos pleitos.",
    topics: [
      "Consultoria em candidaturas",
      "Assessoria na elaboração de peças eleitorais",
      "Defesa em processos e ações judiciais eleitorais",
      "Consultoria sobre financiamento e prestação de contas",
      "Análise de regularidade partidária",
      "Orientação sobre direitos políticos e condições de elegibilidade"
    ]
  },
  {
    icon: Building2,
    title: "Direito Público",
    description: "Regula a atividade da Administração Pública e suas relações com os cidadãos e entidades, garantindo legalidade e eficiência.",
    topics: [
      "Consultoria em licitações e contratos administrativos",
      "Assessoria em processos administrativos disciplinares",
      "Elaboração de defesas em ações de improbidade administrativa",
      "Consultoria sobre atos normativos e regulatórios",
      "Atuação voltada para órgãos públicos",
      "Representação em contenciosos administrativos"
    ]
  },
  {
    icon: FileText,
    title: "Assessoria e Consultoria Jurídica",
    description: "Atuação consultiva e estratégica voltada para dar total segurança jurídica e suporte especializado em casos complexos.",
    topics: [
      "Atendimento especializado para Empresas",
      "Suporte jurídico para o Terceiro Setor",
      "Consultoria focada em Órgãos Públicos",
      "Prevenção de riscos legais e societários",
      "Elaboração e revisão de contratos estratégicos",
      "Pareceres jurídicos personalizados"
    ]
  }
]

function Services() {
  const [selectedArea, setSelectedArea] = useState(null)

  return (
    <section id="atuacao" className="bg-black text-white py-24 sm:py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Áreas de Atuação
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Confira nossas áreas de atuação e como podemos te ajudar.
          </p>
        </div>

        {/* Grid dos Cards de Áreas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <div 
                key={index}
                className="bg-[#111111] border border-white/10 p-8 rounded-2xl hover:border-[#c9a96e]/50 hover:bg-[#161616] transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] mb-6 group-hover:bg-[#c9a96e] group-hover:text-black transition-all duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#c9a96e] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                {/* Botões refinados e estilizados */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button 
                    onClick={() => setSelectedArea(area)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#c9a96e]/10 border border-[#c9a96e]/30 hover:bg-[#c9a96e] text-[#c9a96e] hover:text-black py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 group/btn cursor-pointer"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a 
                    href="#contato"
                    className="text-xs font-medium text-white/70 hover:text-[#c9a96e] transition-colors px-3 py-2.5 rounded-xl hover:bg-white/5 border border-white/5 text-center"
                  >
                    Falar sobre o caso
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* MODAL ELEGANTE */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#141414] border border-[#c9a96e]/40 rounded-3xl max-w-2xl w-full p-8 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setSelectedArea(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/75 hover:text-black hover:bg-[#c9a96e] hover:border-[#c9a96e] transition-all cursor-pointer"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 pr-12">
              {selectedArea.title}
            </h3>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 pb-6 border-b border-white/10">
              {selectedArea.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a96e] mb-4">
              O que abrange esta área:
            </h4>

            <ul className="space-y-3 mb-8">
              {selectedArea.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/85 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <CheckCircle2 size={18} className="text-[#c9a96e] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato"
                onClick={() => setSelectedArea(null)}
                className="flex-1 inline-flex items-center justify-center gap-3 bg-[#c9a96e] hover:bg-[#b8975c] text-black px-6 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-[#c9a96e]/20 group"
              >
                <span>Falar com advogado sobre esta área</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}

export default Services