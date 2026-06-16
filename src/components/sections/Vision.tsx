export default function Vision() {
  return (
    <section id="vision">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> Long-Term Vision</p>
        <h2 className="vision-title reveal">Become the <em>operating system</em><br />for AI-powered real-world commerce.</h2>

        <div className="vision-timeline reveal reveal-delay-1">
          <div className="vision-era">
            <div className="vision-era-num">1</div>
            <div className="vision-era-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/><path d="M5 16h22M16 5c-3.3 3.8-5.3 8.2-5.3 11s2 7.2 5.3 11M16 5c3.3 3.8 5.3 8.2 5.3 11s-2 7.2-5.3 11" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3>Internet</h3>
            <p>digitized information.</p>
            <span className="vision-era-year">1990s</span>
          </div>
          <div className="vision-era-arr">&#8594;</div>
          <div className="vision-era">
            <div className="vision-era-num">2</div>
            <div className="vision-era-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="11" y="5" width="10" height="22" rx="2.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/><circle cx="16" cy="22.5" r="1" fill="rgba(255,255,255,0.35)"/></svg>
            </div>
            <h3>Mobile</h3>
            <p>digitized consumers.</p>
            <span className="vision-era-year">2000s</span>
          </div>
          <div className="vision-era-arr">&#8594;</div>
          <div className="vision-era">
            <div className="vision-era-num">3</div>
            <div className="vision-era-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="5" y="5" width="22" height="22" rx="5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/><path d="M11 16h10M11 11h7M11 21h9" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3>AI</h3>
            <p>digitizes decision-making.</p>
            <span className="vision-era-year">2010s</span>
          </div>
          <div className="vision-era-arr vision-era-arr-highlight">&#8594;</div>
          <div className="vision-era vision-era-active">
            <div className="vision-era-num vision-era-num-active">4</div>
            <div className="vision-era-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4L28 9V16C28 22.6 22.7 28.5 16 30C9.3 28.5 4 22.6 4 16V9L16 4Z" fill="rgba(107,70,193,0.5)" stroke="#9F7AEA" strokeWidth="1.5"/><circle cx="16" cy="16" r="3.5" fill="#9F7AEA"/></svg>
            </div>
            <h3>AivisLab</h3>
            <p>digitizes execution.</p>
            <span className="vision-era-year vision-era-year-gold">2020s+</span>
          </div>
        </div>

        <div className="vision-eco reveal reveal-delay-2">
          <div className="vision-eco-hub">
            <svg width="44" height="44" viewBox="0 0 20 20" fill="none"><path d="M10 2L18 6V10C18 14.4 14.4 18.3 10 19C5.6 18.3 2 14.4 2 10V6L10 2Z" fill="rgba(107,70,193,0.7)" stroke="#9F7AEA" strokeWidth="1.5"/><circle cx="10" cy="10" r="2.5" fill="white"/></svg>
            <div className="vision-eco-hub-name">AivisLab</div>
            <div className="vision-eco-hub-desc">The Operating System for AI-Powered Real-World Commerce</div>
          </div>
          <div className="vision-eco-nodes">
            <div className="vision-eco-node"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 18V8l8-6 8 6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/></svg>Retail Stores</div>
            <div className="vision-eco-node"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 19V9l7-7 7 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 12h4M10 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>Restaurants</div>
            <div className="vision-eco-node"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 8h16" stroke="currentColor" strokeWidth="1.5"/><circle cx="14" cy="12" r="1.5" fill="currentColor"/></svg>QSR / Kiosks</div>
            <div className="vision-eco-node"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="1" y="7" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5"/></svg>Enterprise Locations</div>
            <div className="vision-eco-node"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="1" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1 8h18M5 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>Payments</div>
            <div className="vision-eco-node"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 14l4-7 4 3 3-5 5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Data &amp; Analytics</div>
            <div className="vision-eco-node"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 18c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="15" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M11 18c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>AI Agents</div>
            <div className="vision-eco-node"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2 10l4-6 4 3 3-4 5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 16l3-3-3-3M6 16l-3-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>Logistics &amp; Fulfillment</div>
          </div>
        </div>

        <div className="vision-mission reveal reveal-delay-3">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ flexShrink: 0 }}><circle cx="13" cy="13" r="11" stroke="#6B46C1" strokeWidth="1.5"/><circle cx="13" cy="13" r="5.5" stroke="#6B46C1" strokeWidth="1.5"/><circle cx="13" cy="13" r="2" fill="#6B46C1"/><path d="M13 2v4M13 20v4M2 13h4M20 13h4" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div className="vision-mission-body">
            <div className="vision-mission-heading"><strong>Our Mission:</strong> Enable AI Agents to autonomously interact, transact, and operate across physical businesses worldwide.</div>
            <div className="vision-mission-pills">
              <span className="vision-mission-pill">Autonomous AI Agents</span>
              <span className="vision-mission-pill">Interact Intelligently</span>
              <span className="vision-mission-pill">Transact Securely</span>
              <span className="vision-mission-pill">Operate Efficiently</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
