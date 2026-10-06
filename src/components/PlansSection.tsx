import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP } from '../lib/site'

const plans = [['01', 'INDIVIDUAL', 'R$ 90', '/ MÊS', 'QUERO TREINAR', 'Plano para quem treina no próprio ritmo.', 'ACESSO LIVRE · SEG — SÁB'], ['02', 'CASAL', 'R$ 85', '/ PESSOA / MÊS', 'TREINAR EM DUPLA', 'Treine junto. Pague menos. Evolua mais.', 'TREINE JUNTO', 'POR PESSOA · 2 ALUNOS'], ['03', 'DIÁRIA', 'R$ 15', '', 'TREINAR HOJE', 'Entrou, treinou. Sem desculpas.', undefined, 'ACESSO DE 1 DIA']]

export function PlansSection() {
  return <section id="planos" className="section plans-section"><div className="section-kicker">02 / PLANOS</div><div className="plans-head"><h2>ESCOLHA SEU<br /><span>RITMO.</span></h2><p>Sem contrato complicado. Só o plano certo para você começar e continuar.</p></div><div className="plans-list">{plans.map(([num, name, price, suffix, cta, copy, tag, detail]) => <article className={`plan-row ${tag ? 'featured' : ''}`} key={name}><div className="plan-top"><div className="plan-number">{num}</div><span className="plan-label">KING’S / PLANO</span></div><div className="plan-name">{tag && <span className="plan-tag">{tag}</span>}<h3>{name}</h3><p>{copy}</p></div><div className="plan-bottom"><div className="plan-price"><strong>{price}</strong><span>{suffix}</span></div><div className="plan-detail">{detail}</div><a className="plan-cta" href={WHATSAPP} target="_blank" rel="noreferrer">{cta} <ArrowUpRight size={16} /></a></div></article>)}</div></section>
}
