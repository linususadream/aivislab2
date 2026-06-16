export default function WhyWin() {
  return (
    <section id="why-win">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> Competitive Moat</p>
        <h2 className="win-title reveal">Why AIvislab Wins</h2>
        <div className="win-layout">
          <div className="win-pillars reveal">
            <div className="win-pillar">
              <div className="win-pillar-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2L20 6v5c0 5.5-3.9 9.7-9 11C5.9 20.7 2 16.5 2 11V6l9-4z" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div><h4>Defensibility &amp; Scale</h4><p>Covers the entire AI automation stack &#8212; end-to-end control from customer interaction to kitchen delivery.</p></div>
            </div>
            <div className="win-pillar">
              <div className="win-pillar-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#6B46C1" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div><h4>Globally Protected Architecture</h4><p>Strong patent portfolio protects our innovation around the world via PCT and U.S. filings.</p></div>
            </div>
            <div className="win-pillar">
              <div className="win-pillar-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="18" height="18" rx="4" stroke="#6B46C1" strokeWidth="1.5"/><path d="M7 11h8M11 7v8" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
              <div><h4>Difficult to Replicate</h4><p>Complex integration of AI, hardware, software, and real-world operations creates a high barrier to entry.</p></div>
            </div>
            <div className="win-pillar">
              <div className="win-pillar-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11h4l3 7 4-14 3 7h4" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div><h4>Scalable Across Industries</h4><p>Built to scale across thousands of locations and multiple industries globally &#8212; retail, hospitality, smart cities.</p></div>
            </div>
          </div>
          <div>
            <div className="win-moat reveal reveal-delay-2">
              <h3>Why Competitors Can't Copy</h3>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Full Interaction Flow</div>
              <div className="win-stack">
                <span className="win-stack-item">Interaction</span>
                <span className="win-stack-arrow">&#8594;</span>
                <span className="win-stack-item">Ordering</span>
                <span className="win-stack-arrow">&#8594;</span>
                <span className="win-stack-item">Payment</span>
                <span className="win-stack-arrow">&#8594;</span>
                <span className="win-stack-item">Queue</span>
                <span className="win-stack-arrow">&#8594;</span>
                <span className="win-stack-item">Human</span>
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '1.25rem 0 0.75rem' }}>Patents Protect:</div>
              <div className="win-patents-list">
                <div className="win-patent">Multi-modal AI control (global PCT)</div>
                <div className="win-patent">AI &#8212; POS transaction execution</div>
                <div className="win-patent">AI-driven payment systems</div>
                <div className="win-patent">Real-world queue + sensor integration</div>
                <div className="win-patent">AI + human hybrid interaction</div>
              </div>
            </div>
            <div className="win-bottom reveal reveal-delay-3">
              <p>AIvislab doesn't just build AI &#8212; we build <span>systems that execute in the real world.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
