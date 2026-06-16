import { useState } from 'react'

type Region = 'japan' | 'taiwan' | 'china' | 'europe' | 'south-am'

const regions: { id: Region; label: string }[] = [
  { id: 'japan', label: 'Japan' },
  { id: 'taiwan', label: 'Taiwan' },
  { id: 'china', label: 'China' },
  { id: 'europe', label: 'Europe' },
  { id: 'south-am', label: 'South AM' },
]

const brands: { name: string; country: string; region: Region }[] = [
  // Japan
  { name: 'Yayoi', country: 'Japan', region: 'japan' },
  { name: 'CoCo壱番屋', country: 'Japan', region: 'japan' },
  { name: 'Torikizoku', country: 'Japan', region: 'japan' },
  { name: 'SEVEN&i', country: 'Japan', region: 'japan' },
  { name: 'Sushiro', country: 'Japan', region: 'japan' },
  { name: 'Kura Sushi', country: 'Japan', region: 'japan' },
  { name: '王将 (Osho)', country: 'Japan', region: 'japan' },
  { name: 'Sukiya', country: 'Japan', region: 'japan' },
  { name: '7-Eleven Japan', country: 'Japan', region: 'japan' },
  { name: 'HottoMotto', country: 'Japan', region: 'japan' },
  { name: 'FamilyMart', country: 'Japan', region: 'japan' },
  { name: 'Kotsuya Matsuya', country: 'Japan', region: 'japan' },
  { name: 'Lawson', country: 'Japan', region: 'japan' },
  { name: 'Bikkuri Donkey', country: 'Japan', region: 'japan' },
  { name: 'Yoshinoya', country: 'Japan', region: 'japan' },
  { name: 'MOS Burger', country: 'Japan', region: 'japan' },
  { name: 'Saizeriya', country: 'Japan', region: 'japan' },
  { name: "Denny's Japan", country: 'Japan', region: 'japan' },
  { name: 'Lotteria', country: 'Japan', region: 'japan' },
  { name: 'Mister Donut', country: 'Japan', region: 'japan' },
  // Taiwan
  { name: "Shakey's Pizza", country: 'Taiwan', region: 'taiwan' },
  { name: '85°C Daily Cafe', country: 'Taiwan', region: 'taiwan' },
  { name: 'MOS Burger', country: 'Taiwan', region: 'taiwan' },
  { name: "McDonald's", country: 'Taiwan', region: 'taiwan' },
  { name: 'KFC', country: 'Taiwan', region: 'taiwan' },
  { name: 'Burger King', country: 'Taiwan', region: 'taiwan' },
  { name: 'Pizza Hut', country: 'Taiwan', region: 'taiwan' },
  { name: 'Subway', country: 'Taiwan', region: 'taiwan' },
  { name: 'FamilyMart', country: 'Taiwan', region: 'taiwan' },
  { name: '7-Eleven Taiwan', country: 'Taiwan', region: 'taiwan' },
  // China
  { name: 'Haidilao', country: 'China', region: 'china' },
  { name: 'Yum China (KFC)', country: 'China', region: 'china' },
  { name: "McDonald's China", country: 'China', region: 'china' },
  { name: 'Nayuki Tea', country: 'China', region: 'china' },
  { name: 'Heytea', country: 'China', region: 'china' },
  { name: 'Luckin Coffee', country: 'China', region: 'china' },
  { name: 'Mixue Ice Cream', country: 'China', region: 'china' },
  { name: 'Tastien', country: 'China', region: 'china' },
  // Europe
  { name: "McDonald's EU", country: 'Europe', region: 'europe' },
  { name: 'KFC Europe', country: 'Europe', region: 'europe' },
  { name: 'Burger King EU', country: 'Europe', region: 'europe' },
  { name: 'Subway Europe', country: 'Europe', region: 'europe' },
  { name: 'Pizza Hut EU', country: 'Europe', region: 'europe' },
  { name: "Domino's EU", country: 'Europe', region: 'europe' },
  { name: 'Starbucks EU', country: 'Europe', region: 'europe' },
  { name: 'Tim Hortons', country: 'Europe', region: 'europe' },
  // South AM
  { name: "McDonald's BR", country: 'Brazil', region: 'south-am' },
  { name: 'Burger King BR', country: 'Brazil', region: 'south-am' },
  { name: "Bob's", country: 'Brazil', region: 'south-am' },
  { name: "Habib's", country: 'Brazil', region: 'south-am' },
  { name: 'KFC LatAm', country: 'LatAm', region: 'south-am' },
  { name: 'Subway LatAm', country: 'LatAm', region: 'south-am' },
  { name: 'Pollo Campero', country: 'LatAm', region: 'south-am' },
  { name: 'Starbucks LatAm', country: 'LatAm', region: 'south-am' },
]

export default function Market() {
  const [activeRegion, setActiveRegion] = useState<Region>('japan')
  const filteredBrands = brands.filter(b => b.region === activeRegion)

  return (
    <section id="market">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> Opportunity</p>
        <h2 className="market-title reveal">Global Retail Automation<br />Market Opportunity</h2>
        <div className="market-stats reveal">
          <div className="market-stat">
            <div className="market-stat-val">$862B</div>
            <div className="market-stat-desc">Global fast food market in 2023<br />&#8594; $1.5T+ by 2030 at ~8% CAGR</div>
          </div>
          <div className="market-stat">
            <div className="market-stat-val">$270B</div>
            <div className="market-stat-desc">Asia fast food market in 2023<br />&#8594; $400B+ by 2030 at ~6% CAGR</div>
          </div>
          <div className="market-stat">
            <div className="market-stat-val">Multi-B$</div>
            <div className="market-stat-desc">Global retail automation TAM<br />Rapid growth across all verticals</div>
          </div>
        </div>
        <div className="market-segments reveal">
          <div className="market-seg"><div className="market-seg-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="6" width="18" height="12" rx="2" stroke="#6B46C1" strokeWidth="1.5"/><path d="M6 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="#6B46C1" strokeWidth="1.5"/><path d="M7 13h2M13 13h2" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg></div><h4>Retail Chains</h4></div>
          <div className="market-seg"><div className="market-seg-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 19V9l8-6 8 6v10" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="13" width="6" height="6" stroke="#6B46C1" strokeWidth="1.5"/></svg></div><h4>Restaurants</h4></div>
          <div className="market-seg"><div className="market-seg-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 15l4-8 5 4 3-6 4 10" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="19" cy="6" r="2" stroke="#6B46C1" strokeWidth="1.5"/></svg></div><h4>Airports</h4></div>
          <div className="market-seg"><div className="market-seg-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="8" width="18" height="12" rx="2" stroke="#6B46C1" strokeWidth="1.5"/><path d="M6 8V6a6 6 0 0 1 10 0v2" stroke="#6B46C1" strokeWidth="1.5"/><path d="M9 14h4" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg></div><h4>Hotels</h4></div>
          <div className="market-seg"><div className="market-seg-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M1 20h20M4 20V10l7-7 7 7v10" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/><rect x="8" y="14" width="6" height="6" stroke="#6B46C1" strokeWidth="1.5"/></svg></div><h4>Shopping Malls</h4></div>
          <div className="market-seg"><div className="market-seg-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#6B46C1" strokeWidth="1.5"/><path d="M11 2c-3 2.8-5 6.2-5 9s2 6.2 5 9" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 2c3 2.8 5 6.2 5 9s-2 6.2-5 9" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/><path d="M2 11h18" stroke="#6B46C1" strokeWidth="1.5"/></svg></div><h4>Smart Cities</h4></div>
        </div>
        <div className="reveal">
          <div className="chains-title">Target Customers — Global Fast Food Leaders</div>
          <div className="chains-list">
            <span className="chain-tag">McDonald's (40,031)</span>
            <span className="chain-tag">Subway (37,300)</span>
            <span className="chain-tag">Starbucks (33,833)</span>
            <span className="chain-tag">KFC (25,000)</span>
            <span className="chain-tag">Burger King (19,247)</span>
            <span className="chain-tag">Domino's (18,848)</span>
            <span className="chain-tag">Pizza Hut (17,639)</span>
            <span className="chain-tag">Taco Bell (7,791)</span>
            <span className="chain-tag">Wendy's (6,828)</span>
            <span className="chain-tag">+ Asian Chains (Japan / Taiwan)</span>
          </div>
        </div>

        {/* ASIA MARKET BRANDS */}
        <div className="asia-market reveal">
          <p className="asia-market-title">Fast food brands</p>
          <div className="asia-tabs">
            {regions.map(r => (
              <span
                key={r.id}
                className={`asia-tab${activeRegion === r.id ? ' active' : ''}`}
                onClick={() => setActiveRegion(r.id)}
              >
                {r.label}
              </span>
            ))}
          </div>
          <div className="asia-brands-grid">
            {filteredBrands.map((b, i) => (
              <div className="asia-brand-card" key={i}>
                <span className="asia-brand-name">{b.name}</span>
                <span className="asia-brand-country">{b.country}</span>
              </div>
            ))}
          </div>
          <div className="asia-stat-box">
            <p>Asia's fast food market was valued at <strong>~$270B in 2023</strong> and is projected to reach <strong>~$400B+</strong> by 2030, growing at a CAGR of <strong>~6%</strong>. Strong presence of trusted local brands with deep consumer loyalty and high frequency &#8212; rising demand for AI-powered convenience, loyalty programs, and digital-first experiences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
