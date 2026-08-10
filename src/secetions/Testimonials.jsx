import { Star } from "lucide-react"

function Testimonials() {
  const reviews = [
    {
      name: "Edivagno Miranda De Oliveira",
      initial: "E",
      role: "Avaliação do Google",
      content: "Agilidade, compromisso e competência é a marca desse escritório.",
      rating: 5
    },
    {
      name: "Lucio Santos",
      initial: "L",
      role: "Avaliação do Google",
      content: "Espaço aconchegante. Profissional responsável, ético, ágil, resolutivo.",
      rating: 5
    },
    {
      name: "MAIRES SILVA DE OLIVEIRA",
      initial: "M",
      role: "Avaliação do Google",
      content: "Excelente escritório, ótimo atendimento, resolutivo e prestativo!",
      rating: 5
    }
  ]

  return (
    <section id="avaliacoes" className="bg-black text-white py-28 sm:py-36 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c9a96e] font-bold mb-3 bg-[#c9a96e]/10 px-4 py-1.5 rounded-full border border-[#c9a96e]/20">
            Avaliações
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-sm sm:text-base text-white/70">
            A satisfação e a confiança de quem já contou com a nossa assessoria jurídica.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-[#111111] to-[#080808] border border-white/10 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#c9a96e]/40 hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#c9a96e] fill-[#c9a96e]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed italic mb-8">
                  "{review.content}"
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar com a Inicial */}
                  <div className="w-10 h-10 rounded-full bg-[#c9a96e]/20 border border-[#c9a96e]/40 flex items-center justify-center text-[#c9a96e] font-bold text-sm shrink-0">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{review.name}</h4>
                    <span className="text-xs text-[#c9a96e]">{review.role}</span>
                  </div>
                </div>
                <span className="text-2xl font-serif text-white/10">“</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials