export const WHATSAPP = 'https://wa.me/5514991360697?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Academia%20King%27s%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20planos.'
export const MAPS = 'https://www.google.com/maps/search/?api=1&query=Av.+Duque+de+Caxias,+68,+Bariri+-+SP'

export type Schedule = { day: string; hours: string; open: number; close: number }

export const schedule: Schedule[] = [
  { day: 'Segunda a sexta', hours: '05:00 — 21:30', open: 5, close: 21.5 },
  { day: 'Sábado', hours: '07:00 — 11:00', open: 7, close: 11 },
  { day: 'Domingo', hours: 'FECHADO', open: 0, close: 0 },
]

export function getStatus() {
  const now = new Date()
  const day = now.getDay()
  const time = now.getHours() + now.getMinutes() / 60
  if (day >= 1 && day <= 5 && time >= 5 && time < 21.5) return { label: 'ABERTO AGORA', detail: 'Fecha às 21:30', open: true }
  if (day === 6 && time >= 7 && time < 11) return { label: 'ABERTO AGORA', detail: 'Fecha às 11:00', open: true }
  return { label: 'FECHADO AGORA', detail: day === 0 ? 'Abre amanhã às 05:00' : 'Confira nossos horários', open: false }
}

export function getTodayScheduleIndex(date = new Date()) {
  const day = date.getDay()
  if (day === 0) return 2
  if (day === 6) return 1
  return 0
}
