import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"
import { site, whatsappUrl } from "../data/site"

// Ícone do Instagram em SVG para evitar erro de importação do lucide-react
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
    <section id="contato" className="bg-[#0b1628] text-white py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#c9a96e]/10 border border-[#c9a96e]/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c9a96e]"></span>
            <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-[#c9a96e]">
              Atendimento
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Entre em Contato Conosco
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Estamos prontos para entender seu caso e oferecer a melhor orientação jurídica.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Card de Informações Estilo Clínica */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#0e1d35] p-8 sm:p-10 rounded-3xl border border-white/10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-8">
                Informações de Atendimento
              </h3>

              <div className="space-y-6">
                
                {/* Endereço */}
                {site?.address && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Onde estamos</p>
                      <p className="text-sm text-white/70 mt-0.5 whitespace-pre-line leading-relaxed">
                        {site.address}
                      </p>
                    </div>
                  </div>
                )}

                {/* Horários */}
                {site?.hours && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Horários</p>
                      <p className="text-sm text-white/70 mt-0.5">{site.hours}</p>
                    </div>
                  </div>
                )}

                {/* Instagram (Clicável) */}
                {site?.instagram && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Instagram</p>
                      <a
                        href={`https://instagram.com/${site.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-[#c9a96e] transition-colors mt-0.5 block"
                      >
                        {site.instagram}
                      </a>
                    </div>
                  </div>
                )}

                {/* Telefone / WhatsApp (Clicável) */}
                {site?.whatsappFormatted && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Telefone / WhatsApp</p>
                      <a
                        href={whatsappUrl("Olá! Gostaria de tirar uma dúvida jurídica.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-[#c9a96e] transition-colors mt-0.5 block"
                      >
                        {site.whatsappFormatted}
                      </a>
                    </div>
                  </div>
                )}

                {/* E-mail */}
                {site?.email && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 border border-[#c9a96e]/20 flex items-center justify-center text-[#c9a96e] shrink-0 mt-0.5">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">E-mail</p>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm text-white/70 hover:text-[#c9a96e] transition-colors mt-0.5 block"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Botão para o Mapa */}
            {site?.mapUrl && (
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-white/20 hover:bg-white/5 text-white font-semibold text-sm transition-colors text-center block"
                >
                  Ver localização no mapa
                </a>
              </div>
            )}
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7 bg-[#0e1d35] p-8 sm:p-10 rounded-3xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-[#0b1628] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-[#0b1628] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  className="w-full bg-[#0b1628] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Mensagem / Resumo do Caso
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente como podemos te ajudar..."
                  className="w-full bg-[#0b1628] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c9a96e] hover:bg-[#b8975c] text-[#0b1628] font-bold py-4 rounded-xl text-sm transition-all shadow-lg"
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