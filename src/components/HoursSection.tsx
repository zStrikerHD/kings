import { getTodayScheduleIndex, schedule } from '../lib/site'

type Props = { status: { label: string; detail: string; open: boolean } }

export function HoursSection({ status }: Props) {
  const today = getTodayScheduleIndex()
  return <section id="horarios" className="section hours-section"><div className="section-watermark outline-word">FOCO</div><img className="section-logo-mark" src="/logo-kings.png" alt="" aria-hidden="true" /><div className="hours-layout"><div><div className="section-kicker">04 / HORÁRIOS</div><h2>SEU TREINO<br /><span>TEM HORA.</span><br />DESCULPA NÃO.</h2><div className={`status-pill ${status.open ? 'open' : ''}`}><span /> {status.label}<small>{status.detail}</small></div></div><div className="hours-table">{schedule.map((item, index) => <div className="hours-row" key={item.day}><span>{item.day}{index === today && <b>HOJE</b>}</span><strong>{item.hours}</strong></div>)}</div></div></section>
}
