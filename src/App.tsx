import { useEffect } from 'react'
import ProgressBar from './components/ProgressBar'
import Nav from './components/Nav'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import Products from './components/sections/Products'
import Technology from './components/sections/Technology'
import Architecture from './components/sections/Architecture'
import Patents from './components/sections/Patents'
import Market from './components/sections/Market'
import BusinessModel from './components/sections/BusinessModel'
import GoToMarket from './components/sections/GoToMarket'
import WhyWin from './components/sections/WhyWin'
import Team from './components/sections/Team'
import Vision from './components/sections/Vision'
import Footer from './components/Footer'

function App() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = (scrollTop / docHeight) * 100
      const bar = document.getElementById('progress-bar')
      if (bar) bar.style.width = pct + '%'
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy
  useEffect(() => {
    const allNavLinks = document.querySelectorAll('.nav-links a, .nav-mobile-links a')
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          allNavLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)
          })
        }
      })
    }, { rootMargin: '-35% 0px -60% 0px' })
    document.querySelectorAll('section[id]').forEach(s => spyObserver.observe(s))
    return () => spyObserver.disconnect()
  }, [])

  return (
    <>
      <ProgressBar />
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Products />
      <Technology />
      <Architecture />
      <Patents />
      <Market />
      <BusinessModel />
      <GoToMarket />
      <WhyWin />
      <Team />
      <Vision />
      <Footer />
    </>
  )
}

export default App
