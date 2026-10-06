import { MessageCircle, Phone } from 'lucide-react'
import { WHATSAPP } from '../lib/site'

export function ContactSection() {
  return <section id="contato" className="contact-section"><div className="section-watermark outline-word">FORÇA</div><img className="section-logo-mark" src="/logo-kings.png" alt="" aria-hidden="true" /><div className="section-kicker">05 / PRÓXIMO PASSO</div><h2>CHEGA DE<br /><span>PENSAR.</span><br />COMEÇA.</h2><p>Fale com a King’s e venha treinar.</p><a className="button button-white" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> FALAR NO WHATSAPP</a><div className="contact-detail"><Phone size={17} /><span>(14) 99136-0697</span></div></section>
}
