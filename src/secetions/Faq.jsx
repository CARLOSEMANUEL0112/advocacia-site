import { useState } from "react"
import { ChevronDown } from "lucide-react"

function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Como funciona o primeiro atendimento com o advogado?",
      answer: "O atendimento é direto, sigiloso e personalizado. Você pode agendar uma consulta online ou presencial para expor o seu caso detalhadamente e receber uma análise estratégica inicial."
    },
    {
      question: "Preciso ir presencialmente ao escritório para iniciar o caso?",
      answer: "Não necessariamente. Toda a documentação e o alinhamento inicial podem ser feitos de forma 100% digital e segura, com a mesma proximidade e segurança de um atendimento presencial."
    },
    {
      question: "Quais documentos devo separar para a primeira consulta?",
      answer: "Recomendamos reunir documentos de identificação, comprovantes relacionados ao seu caso (contratos, notificações, mensagens ou histórico de conversas) e um breve resumo cronológico dos fatos."
    },
    {
      question: "Como é feita a cobrança dos honorários advocatícios?",
      answer: "Os honorários são definidos de forma transparente e ética, variando conforme a complexidade e a natureza de cada caso, sempre alinhados previamente em contrato."
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-black text-white py-28 sm:py-36 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-white/70">
            Respostas diretas para as principais dúvidas sobre nossos serviços e atendimento.
          </p>
        </div>

        {/* Lista de Acordeões */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index}
                className="bg-gradient-to-b from-[#111111] to-[#080808] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#c9a96e]/40"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-medium text-white/90">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-[#c9a96e] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Faq