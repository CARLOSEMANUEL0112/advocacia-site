import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from "lucide-react"
import { site, whatsappUrl } from "../data/site"

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = 
      `*Novo Contato via Site*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Mensagem:* ${formData.message}`

    window.open(whatsappUrl(text), "_blank")
  }

  return (
    <section id="contato" className="bg-black text-white py-28 sm:py-36 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c9a96e] font-bold mb-4 bg-[#c9a96e]/10 px-4 py-1.5 rounded-full border border-[#c9a96e]/20">
            Atendimento
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Entre em Contato Conosco
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
            Estamos prontos para entender seu caso e oferecer a melhor orientação jurídica.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card de Informações e Localização */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-[#111111] to-[#080808] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl">
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-8 pb-4 border-b border-white/10">
                Informações de Atendimento
              </h3>

              <div className="space-y-6">
                
                {/* Horários */}
                {site?.hours && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#c9a96e] mb-1">Horários</p>
                      <p className="text-sm text-white/80">{site.hours}</p>
                    </div>
                  </div>
                )}

                {/* Instagram */}
                {site?.instagram && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#c9a96e] mb-1">Instagram</p>
                      <a
                        href={`https://instagram.com/${site.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/80 hover:text-[#c9a96e] transition-colors block"
                      >
                        {site.instagram}
                      </a>
                    </div>
                  </div>
                )}

                {/* Telefone / WhatsApp */}
                {site?.whatsappFormatted && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#c9a96e] mb-1">Telefone / WhatsApp</p>
                      <a
                        href={whatsappUrl("Olá! Gostaria de tirar uma dúvida jurídica.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/80 hover:text-[#c9a96e] transition-colors block"
                      >
                        {site.whatsappFormatted}
                      </a>
                    </div>
                  </div>
                )}

                {/* E-mail */}
                {site?.email && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#c9a96e] mb-1">E-mail</p>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm text-white/80 hover:text-[#c9a96e] transition-colors block"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Bloco de Localização com Mapa Exatamente Igual ao do Escritório */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center text-[#c9a96e] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Thiago Miranda Advogados</h4>
                    <p className="text-xs sm:text-sm text-white/70">Avenida Antônio Ribeiro - Centro, Júlio Borges - PI, 64983-000</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Thiago+Miranda+Advogados+J%C3%BAlio+Borges+PI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#c9a96e]/10 hover:bg-[#c9a96e] text-[#c9a96e] hover:text-black border border-[#c9a96e]/30 text-xs font-semibold transition-all shrink-0"
                >
                  <span>Ampliar</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Mapa incorporado */}
              <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-white/10 relative shadow-inner bg-white/5">
                <iframe
                  title="Localização do Escritório - Thiago Miranda Advogados"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.179180030242!2d-44.239133125201704!3d-10.327541289795231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76397e237072cef%3A0x614097124d0bda0!2sThiago%20Miranda%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1786318970155!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>

              {/* Botão mobile */}
              <div className="mt-4 pt-3 border-t border-white/10 flex sm:hidden justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Thiago+Miranda+Advogados+J%C3%BAlio+Borges+PI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#c9a96e] text-black text-xs font-bold transition-all shadow-md"
                >
                  <MapPin size={16} />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Formulário */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-gradient-to-b from-[#111111] to-[#080808] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#c9a96e] uppercase tracking-wider mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#c9a96e] uppercase tracking-wider mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#c9a96e] uppercase tracking-wider mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#c9a96e] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#c9a96e] uppercase tracking-wider mb-2">
                    Mensagem / Resumo do Caso
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente como podemos te ajudar..."
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#c9a96e] resize-none transition-colors"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#b8975c] text-black font-bold py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg mt-6"
              >
                <MessageSquare size={18} />
                Enviar Mensagem via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact