import { Menu, X } from "lucide-react"
import { useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1628]/95 border-b border-white/10 backdrop-blur-md">
      {/* Container com padronização rígida de respiro */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-24 flex items-center justify-between">
        
        {/* LOGO COM ESPAÇAMENTO AJUSTADO */}
        <a href="#" className="flex flex-col justify-center gap-1 shrink-0">
          <span className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wider leading-none">
            ALMEIDA
          </span>
          <span className="text-[10px] tracking-[0.35em] text-[#c9a96e] font-semibold uppercase leading-none">
            ADVOCACIA
          </span>
        </a>

        {/* MENU DESK */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-white/80">
          <a href="#inicio" className="hover:text-[#c9a96e] transition-colors">Início</a>
          <a href="#atuacao" className="hover:text-[#c9a96e] transition-colors">Áreas de atuação</a>
          <a href="#escritorio" className="hover:text-[#c9a96e] transition-colors">Escritório</a>
          <a href="#sobre" className="hover:text-[#c9a96e] transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-[#c9a96e] transition-colors">Contato</a>
        </nav>

        {/* BOTÃO PILULA COM ALTURA CORRETA (DESKTOP) */}
        <a 
          href="#contato" 
          className="hidden md:inline-flex items-center justify-center bg-[#c9a96e] hover:bg-[#b8975c] text-[#0b1628] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider leading-none transition-all shadow-md shrink-0"
        >
          FALAR COM O ADVOGADO
        </a>

        {/* BOTÃO MOBILE */}
        <button 
          className="md:hidden text-[#c9a96e] p-2" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {menuOpen && (
        <nav className="md:hidden bg-[#0b1628] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm text-white">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#atuacao" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
          <a href="#escritorio" onClick={() => setMenuOpen(false)}>Escritório</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          
          {/* BOTÃO MOBILE ATUALIZADO */}
          <a 
            href="#contato" 
            onClick={() => setMenuOpen(false)}
            className="bg-[#c9a96e] text-[#0b1628] text-center py-3.5 rounded-full font-bold text-xs uppercase mt-2"
          >
            FALAR COM O ADVOGADO
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header