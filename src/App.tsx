import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AcademySection } from './components/AcademySection'
import { PlansSection } from './components/PlansSection'
import { TrustSection } from './components/TrustSection'
import { HoursSection } from './components/HoursSection'
import { ContactSection } from './components/ContactSection'
import { LocationSection } from './components/LocationSection'
import { Footer } from './components/Footer'
import { getStatus } from './lib/site'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

export function App() {
  const [scrolled, setScrolled] = useState(false)
  const [status, setStatus] = useState(getStatus)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    const timer = window.setInterval(() => setStatus(getStatus()), 60000)
    return () => { window.removeEventListener('scroll', onScroll); window.clearInterval(timer) }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.from('.hero-content > *', { opacity: 0, y: 26, duration: .8, stagger: .1, ease: 'power3.out', delay: .15 })
      gsap.to('.hero-word', { y: -110, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.utils.toArray<HTMLElement>('.section-kicker, .section h2, .gallery-photo, .plan-row, .hours-row').forEach((element) => gsap.from(element, { opacity: 0, y: 26, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } }))
    }, document.body)
    return () => context.revert()
  }, [])

  return <div className="site-shell"><Header scrolled={scrolled} /><main><Hero /><AcademySection /><PlansSection /><TrustSection /><HoursSection status={status} /><ContactSection /><LocationSection /></main><Footer /></div>
}
