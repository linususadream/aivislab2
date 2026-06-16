export default function GoToMarket() {
  return (
    <section id="go-to-market">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> Strategy</p>
        <h2 className="gtm-title reveal">Go-To-Market</h2>
        <div className="gtm-phases">
          <div className="gtm-phase p1 reveal reveal-delay-1">
            <div className="phase-num">1</div>
            <div className="phase-badge">Phase 1 ·Now</div>
            <h3>Pilot Deployments</h3>
            <ul>
              <li>Pilot with leading retail chains</li>
              <li>Partner with restaurant chains</li>
              <li>Demonstrate ROI &amp; efficiency</li>
              <li>Build case studies</li>
            </ul>
          </div>
          <div className="gtm-phase p2 reveal reveal-delay-2">
            <div className="phase-num">2</div>
            <div className="phase-badge">Phase 2 ·2027</div>
            <h3>Enterprise Partnerships</h3>
            <ul>
              <li>Secure strategic global retail partnerships</li>
              <li>Expand into international markets</li>
              <li>Scale deployments across regions</li>
              <li>Strengthen market leadership</li>
            </ul>
          </div>
          <div className="gtm-phase p3 reveal reveal-delay-3">
            <div className="phase-num">3</div>
            <div className="phase-badge">Phase 3 ·2028+</div>
            <h3>Global Scaling</h3>
            <ul>
              <li>Build scalable licensing ecosystem</li>
              <li>Scale across industries &amp; geographies</li>
              <li>Strong partner network globally</li>
              <li>Drive long-term sustainable growth</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }} className="reveal">
          <div style={{ background: 'white', border: '1px solid rgba(107,70,193,0.15)', borderRadius: '10px', padding: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>US Trade Shows</div>
            <div style={{ fontSize: '0.82rem', color: '#444', lineHeight: '1.7' }}>NRF '26 – NYC, Jan 11–13<br />Franchise Expo NY – May 29–30<br />Automate 2026 – Chicago, Jun 22–25<br />MODEX26 – Atlanta, Apr 13–16</div>
          </div>
          <div style={{ background: 'white', border: '1px solid rgba(107,70,193,0.15)', borderRadius: '10px', padding: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Europe Events</div>
            <div style={{ fontSize: '0.82rem', color: '#444', lineHeight: '1.7' }}>EuroShop – Dsseldorf, Feb 22–26 2026<br />Retail Technology Show – London, Apr 22–23 2026</div>
          </div>
          <div style={{ background: 'white', border: '1px solid rgba(107,70,193,0.15)', borderRadius: '10px', padding: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Asia Markets</div>
            <div style={{ fontSize: '0.82rem', color: '#444', lineHeight: '1.7' }}>Japan, Taiwan, China<br />South America expansion<br />Local partnerships &amp; teams</div>
          </div>
        </div>
      </div>
    </section>
  )
}
