const patentSealSvg = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="11" stroke="rgba(107,70,193,0.6)" strokeWidth="1.5"/>
    <circle cx="14" cy="14" r="7" stroke="rgba(107,70,193,0.4)" strokeWidth="1"/>
    <path d="M14 3v4M14 21v4M3 14h4M21 14h4" stroke="rgba(107,70,193,0.5)" strokeWidth="1" strokeLinecap="round"/>
  </svg>
)

const patents = [
  { num: 1, id: 'US 509755935', title: 'Multi-Modal AI Control Engine and Interactive System' },
  { num: 2, id: 'US 509755950', title: 'AI Avatar Interaction and Behavior Generation System' },
  { num: 3, id: 'US 509755965', title: 'Real-Time AI Decision Engine for Kiosk and IoT Systems' },
  { num: 4, id: 'US 509755972', title: 'Voice, Gesture and Emotion Synchronized AI System' },
  { num: 5, id: 'US 509758017', title: 'Autonomous Kiosk Management and Cloud Control Platform' },
]

export default function Patents() {
  return (
    <section id="patents">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> IP Protection</p>
        <h2 className="patents-title reveal">Patent Moat</h2>
        <div className="patents-header-row reveal">
          <div className="patents-header-badge">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L17.5 4.5V9C17.5 13.1 14.2 17 10 18C5.8 17 2.5 13.1 2.5 9V4.5L10 1Z" fill="rgba(107,70,193,0.4)" stroke="#9F7AEA" strokeWidth="1.3"/><circle cx="10" cy="9" r="2" fill="#9F7AEA"/></svg>
            USA Patent Portfolio
          </div>
          <div className="patents-header-sub">5 Granted / Pending Patents Protecting Core AI Innovations</div>
        </div>
        <div className="patents-certs reveal reveal-delay-1">
          {patents.map(p => (
            <div className="patent-cert" key={p.num}>
              <div className="patent-cert-header">
                <div className="patent-cert-seal">{patentSealSvg}</div>
                <div className="patent-cert-agency">UNITED STATES PATENT AND TRADEMARK OFFICE</div>
              </div>
              <div className="patent-cert-num">{p.num}</div>
              <div className="patent-cert-id">{p.id}</div>
              <div className="patent-cert-title">{p.title}</div>
            </div>
          ))}
        </div>
        <div className="patents-pct reveal reveal-delay-2">
          <div className="pct-globe-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="15" stroke="#9F7AEA" strokeWidth="1.5"/><path d="M5 20h30M20 5c-4.5 4.8-7 10.8-7 15s2.5 10.2 7 15" stroke="#9F7AEA" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 5c4.5 4.8 7 10.8 7 15s-2.5 10.2-7 15" stroke="#9F7AEA" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div className="pct-content">
            <div className="pct-badge-row">
              <span className="pct-main-badge">GLOBAL PATENT · PCT/US26/24252</span>
              <span className="pct-country-badge">Protected in 150+ Countries</span>
            </div>
            <div className="pct-name">Multi-Modal Real-Time Control Model for AI Avatar Interaction and Behavior Generation</div>
            <div className="pct-meta">Filed: April 17, 2026 &nbsp;·&nbsp; Applicant: AIVISLAB INC &nbsp;·&nbsp; International IP Protection &nbsp;·&nbsp; Strong Technology Moat Secured</div>
          </div>
        </div>
        <div className="patents-tagline reveal reveal-delay-3">
          <strong>Strong IP Protection. Global Advantage.</strong> AivisLab's patented technologies create a defensible moat around our AI control engine, avatar interaction, and intelligent kiosk ecosystem — protecting innovation and enabling long-term competitive leadership.
        </div>
      </div>
    </section>
  )
}
