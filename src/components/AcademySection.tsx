import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP } from '../lib/site'

export function AcademySection() {
  return <section id="academia" className="section academy-section"><div className="academy-watermark">ACADEMIA KING’S</div><div className="section-kicker">01 / A ACADEMIA</div><div className="academy-head"><h2>SEM DESCULPA.<br /><span>TEM FERRO</span><br />TE ESPERANDO.</h2><div className="academy-copy"><p>Na King’s, cada treino tem propósito. Ambiente de verdade, equipamento para evoluir e uma comunidade que não deixa você parar.</p><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">VEM TREINAR COM A GENTE <ArrowUpRight size={17} /></a></div></div><div className="gallery-grid"><div className="gallery-photo gallery-main" /><div className="gallery-photo gallery-tall" /><div className="gallery-photo gallery-detail" /><div className="gallery-caption"><span>ESTRUTURA<br />PARA QUEM<br /><b>LEVA A SÉRIO.</b></span><span className="caption-num">02—04</span></div></div></section>
}
