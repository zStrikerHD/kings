import { Camera, MessageCircle } from 'lucide-react'
import { WHATSAPP } from '../lib/site'

export function Footer() {
  return <><footer className="footer"><div className="footer-brand"><span className="brand-mark">K</span><span className="brand-name">KING<span>’</span>S</span></div><div className="footer-meta"><span>(14) 99136-0697</span><span>Av. Duque de Caxias, 68 · Bariri-SP</span><span>Seg — Sex · 05:00 — 21:30</span></div><div className="footer-links"><a href="#inicio">VOLTAR AO TOPO ↑</a><a href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={16} /> INSTAGRAM</a></div><div className="footer-bottom"><span>© Academia King’s — Todos os direitos reservados.</span><span>FORÇA. FOCO. PRESENÇA.</span></div></footer><a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a Academia King's pelo WhatsApp"><MessageCircle size={22} /></a></>
}
