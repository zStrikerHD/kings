import { MessageCircle, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { WHATSAPP } from '../lib/site'

export function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['INÍCIO', '#inicio'], ['ACADEMIA', '#academia'], ['PLANOS', '#planos'], ['HORÁRIOS', '#horarios'], ['LOCALIZAÇÃO', '#localizacao']]
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <a className="brand" href="#inicio" aria-label="Academia King's, voltar ao início"><img className="header-gorilla" src="/gorilla-kings.png" alt="" aria-hidden="true" /><span className="brand-name">KING<span>’</span>S</span></a>
    <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
    <a className="header-cta" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={16} /> FALAR NO WHATSAPP</a>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
  </header>
}
