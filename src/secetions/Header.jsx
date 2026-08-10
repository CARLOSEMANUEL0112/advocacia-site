import { Menu, X } from "lucide-react"
import { useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#c9a96e]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-24 sm:h-32 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center shrink-0 py-2">
          <img 
            src="/logo_thiago_miranda_advogados_hd.png" 
            alt="Thiago Miranda Advogados" 
            className="h-16 sm:h-28 w-auto object-contain mix-blend-screen"
          />
        </a>

        {/* MENU DESK / NOTEBOOK (Com Escritório e Sobre) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white/80">
          <a href="#inicio" className="hover:text-[#c9a96e] transition-colors">Início</a>
          <a href="#atuacao" className="hover:text-[#c9a96e] transition-colors">Áreas de atuação</a>
          <a href="#escritorio" className="hover:text-[#c9a96e] transition-colors">Escritório</a>
          <a href="#sobre" className="hover:text-[#c9a96e] transition-colors">Sobre</a>
          <a href="#avaliacoes" className="hover:text-[#c9a96e] transition-colors">Avaliações</a>
          <a href="#localizacao" className="hover:text-[#c9a96e] transition-colors">Localização</a>
        </nav>

        {/* BOTÃO PILULA DOURADO (DESKTOP) */}
        <a 
          href="#contato" 
          className="hidden md:inline-flex items-center justify-center bg-[#c9a96e] hover:bg-[#b8975c] text-black px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider leading-none transition-all shadow-md shrink-0"
        >
          FALAR COM O ADVOGADO
        </a>

        {/* BOTÃO MOBILE */}
        <button 
          className="md:hidden text-[#c9a96e] p-2 relative z-50 focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE (Com Escritório e Sobre) */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/98 border-b border-[#c9a96e]/20 shadow-2xl px-6 py-8 flex flex-col gap-6 z-40 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-white/90">
            <a href="#inicio" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Início</a>
            <a href="#atuacao" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Áreas de atuação</a>
            <a href="#escritorio" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Escritório</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Sobre</a>
            <a href="#avaliacoes" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2 border-b border-white/5">Avaliações</a>
            <a href="#localizacao" onClick={() => setMenuOpen(false)} className="hover:text-[#c9a96e] transition-colors py-2">Localização</a>
          </nav>
          
          <div>
            <a 
              href="#contato" 
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-[#c9a96e] text-black text-center py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#b8975c] transition-colors"
            >
              FALAR COM O ADVOGADO
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header