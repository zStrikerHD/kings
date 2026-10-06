import { ArrowUpRight, MapPin } from 'lucide-react'
import { MAPS } from '../lib/site'

export function LocationSection() {
  return <section id="localizacao" className="section location-section"><div className="location-copy"><div className="section-kicker">06 / COMO CHEGAR</div><h2>A KING’S<br /><span>É AQUI.</span></h2><p>Av. Duque de Caxias, 68<br />Vila Maria · Bariri — SP<br />17250-000</p><a className="text-link" href={MAPS} target="_blank" rel="noreferrer"><MapPin size={17} /> ABRIR NO GOOGLE MAPS <ArrowUpRight size={16} /></a></div><div className="map-placeholder"><div className="map-grid" /><div className="map-pin"><MapPin size={27} fill="currentColor" /></div><span>AV. DUQUE DE CAXIAS, 68</span></div></section>
}
