import { Phone, Mail, ArrowUp } from "lucide-react"
import { whatsappUrl, site } from "../data/site"

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center">
        
        {/* Logo em Imagem */}
        <div className="mb-8">
          <a href="#inicio" className="block focus:outline-none">
            <img 
              src="/logo_thiago_miranda_advogados_hd.png" 
              alt={site.name} 
              className="h-28 sm:h-36 w-auto object-contain mx-auto mix-blend-screen opacity-95 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        {/* Botões de Ação Principal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-10">
          <a 
            href={whatsappUrl()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#c9a96e] text-black hover:bg-[#b8985d] transition-all duration-300 font-bold text-xs tracking-widest uppercase shadow-md"
          >
            <Phone size={15} /> Contato
          </a>
          
          <a 
            href={`mailto:${site.email}`} 
            className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#c9a96e]/60 text-white bg-black/40 hover:bg-[#c9a96e]/10 hover:border-[#c9a96e] transition-all duration-300 font-medium text-xs tracking-widest uppercase"
          >
            <Mail size={15} className="text-[#c9a96e]" /> E-mail
          </a>
        </div>

        {/* Linha Divisória Suave */}
        <div className="w-full max-w-xs h-px bg-white/10 mb-8"></div>

        {/* Redes Sociais Secundárias (Com ícones proporcionais) */}
        <div className="flex items-center gap-6 mb-12">
          {/* Instagram */}
          <a 
            href={`https://www.instagram.com/${site.instagram.replace('@', '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#c9a96e] hover:border-[#c9a96e]/50 transition-all"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/thiago-miranda-advogados-tm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#c9a96e] hover:border-[#c9a96e]/50 transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        {/* Direitos Autorais Atualizados com o nome do site */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 tracking-wider gap-4 pt-6 border-t border-white/5">
          <p>© {currentYear} {site.name}. Todos os direitos reservados.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#c9a96e] transition-colors uppercase tracking-widest text-[10px]"
          >
            Voltar ao topo <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer