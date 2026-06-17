import { SplineSceneBasic } from '@/components/ui/demo'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-canvas">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      <p className="hero-eyebrow"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> Talking to the Future</p>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">AIvisLab<br /><em>AI Avatar Brain Engine :: </em></h1>
          <SplineSceneBasic />
          <p className="hero-sub">Real-World AI Brain Infrastructure — the unified platform transforming retail &amp; service industries through intelligent automation.</p>
          <a href="#problem" className="hero-cta">
            Explore the Platform
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-val">5+</div>
              <div className="hero-stat-label">Patents Filed</div>
            </div>
            <div>
              <div className="hero-stat-val">$568M</div>
              <div className="hero-stat-label">Customer Savings / Yr</div>
            </div>
            <div>
              <div className="hero-stat-val">$100M+</div>
              <div className="hero-stat-label">2030 Revenue Target</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="order-flow.png" alt="AivisLab Real-World Order Execution System" className="order-flow-img" />
          <img src="order-flow2.png" alt="AivisLab Order Flow 2" className="order-flow-img" />
        </div>
      </div>
    </section>
  )
}
