import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP } from '../lib/site'

export function Hero({ isOpen }: { isOpen: boolean }) {
  const marqueeItems = ['FORÇA', 'FOCO', 'DISCIPLINA', 'EVOLUÇÃO', 'KING’S', 'FORÇA', 'FOCO', 'DISCIPLINA']
  return <>
    <section id="inicio" className="hero">
      <div className="hero-image" /><div className="hero-overlay" /><div className="hero-noise" />
      <div className="hero-content"><div className={`eyebrow ${isOpen ? 'is-open' : ''}`}><span className={`red-dot ${isOpen ? 'is-open' : ''}`} /> ACADEMIA KING’S · BARIRI-SP</div><h1>VOCÊ NÃO VEIO AQUI<br /><em>PRA CONTINUAR</em><br />O MESMO.</h1><p>Treino de verdade, estrutura e intensidade no coração de Bariri.</p><div className="hero-actions"><a className="button button-red" href={WHATSAPP} target="_blank" rel="noreferrer">COMEÇAR AGORA <ArrowUpRight size={18} /></a><a className="text-link" href="#planos">VER PLANOS <span>↓</span></a></div></div>
      <div className="hero-bottom"><span>SCROLL PARA CONHECER</span><span className="line" /><span>01 / 06</span></div><div className="hero-word">KING’S</div>
    </section>
    <div className="marquee" aria-hidden="true"><div className="marquee-track">{[0, 1].map((copy) => <span className="marquee-copy" key={copy}>{marqueeItems.map((item, index) => <span key={`${copy}-${item}-${index}`}>{item}<i>—</i></span>)}</span>)}</div></div>
  </>
}
