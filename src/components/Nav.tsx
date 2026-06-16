import { useState } from 'react'

const navItems = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#products', label: 'Products' },
  { href: '#technology', label: 'Technology' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#patents', label: 'Patents' },
  { href: '#market', label: 'Market' },
  { href: '#business-model', label: 'Pricing' },
  { href: '#go-to-market', label: 'GTM' },
  { href: '#why-win', label: 'Why Win' },
  { href: '#vision', label: 'Vision' },
  { href: '#team', label: 'Team' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav>
        <div className="nav-logo">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L18 6V10C18 14.4 14.4 18.3 10 19C5.6 18.3 2 14.4 2 10V6L10 2Z" fill="none" stroke="#9F7AEA" strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="2.5" fill="#9F7AEA"/>
          </svg>
          <span className="nav-brand">AIvis<span>Lab</span></span>
        </div>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
        <button className={`nav-burger${open ? ' open' : ''}`} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-mobile-overlay${open ? ' open' : ''}`}>
        <ul className="nav-mobile-links">
          {navItems.map(item => (
            <li key={item.href}><a href={item.href} onClick={() => setOpen(false)}>{item.label}</a></li>
          ))}
        </ul>
      </div>
    </>
  )
}
