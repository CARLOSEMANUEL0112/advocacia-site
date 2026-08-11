import { Menu, X } from "lucide-react"
import { useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#c9a96e]/20" translate="no">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-32 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center shrink-0 py-2">
          <img 
            src="/logo_thiago_miranda_advogados_hd.png" 
            alt="Thiago Miranda Advogados" 
            className="h-14 sm:h-24 w-auto object-contain mix-blend-screen"
          />
        </a>

        {/* MENU DESK / NOTEBOOK (Espaçamento otimizado para não quebrar) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-white/80">
          <a href="#inicio" className="hover:text-[#c9a96e] transition-colors whitespace-nowrap">Início</a>
          <a href="#atuacao" className="hover:text-[#c9a96e] transition-colors whitespace-nowrap">Áreas de atuação</a>
          <a href="#escritorio" className="hover:text-[#c9a96e] transition-colors whitespace-nowrap">Escritório</a>
          <a href="#sobre" className="hover:text-[#c9a96e] transition-colors whitespace-nowrap">Sobre</a>
          <a href="#faq" className="hover:text-[#c9a96e] transition-colors whitespace-nowrap">FAQ</a>
          <a href="#avaliacoes" className="hover:text-[#c9a96e] transition-colors whitespace-nowrap">Avaliações</a>
          <a href="#contato" className="hover:text-[#c9a96e] transition-colors whitespace-nowrap">Localização</a>
        </nav>

        {/* BOTÃO PILULA DOURADO (DESKTOP) */}
        <a 
          href="#contato" 
          className="hidden lg:inline-flex items-center justify-center bg-[#c9a96e] hover:bg-[#b8975c] text-black px-5 xl:px-7 py-3 rounded-full text-[11px] xl:text-xs font-bold uppercase tracking-wider leading-none transition-all shadow-md shrink-0 whitespace-nowrap"
        >
          Falar com o advogado
        </a>

        {/* BOTÃO MOBILE / TABLET */}
        <button 
          className="lg:hidden text-[#c9a96e] p-2 relative z-50 focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/98 border-b border-[#c9a96e]/20 shadow-2xl px-6 py-8 flex flex-col gap-6 z-40 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-white/90">
            <a href="#inicio" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Início</a>
            <a href="#atuacao" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Áreas de atuação</a>
            <a href="#escritorio" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Escritório</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)} className="hover:text-c9a96e transition-colors py-2 border-b border-white/5">Sobre</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">FAQ</a>
            <a href="#avaliacoes" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Avaliações</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2">Localização</a>
          </nav>
          
          <div>
            <a 
              href="#contato" 
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-[#c9a96e] text-black text-center py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#b8975c] transition-colors"
            >
              Falar com o advogado
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header