export default function Products() {
  return (
    <section id="products">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> Product Suite</p>
        <h2 className="products-title reveal">Products Include:</h2>
        <div className="products-grid">
          <div className="product-card reveal reveal-delay-1">
            <div className="product-card-top">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="16" y="4" width="32" height="48" rx="4" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/><rect x="20" y="8" width="24" height="32" rx="2" fill="rgba(159,122,234,0.3)"/><circle cx="32" cy="46" r="2" fill="rgba(255,255,255,0.5)"/><circle cx="32" cy="24" r="6" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/><path d="M26 38c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="product-card-body">
              <h3>AI-Powered Self-Checkout Avatars</h3>
              <p>Intelligent avatars guide customers, assist with orders, and complete transactions seamlessly.</p>
              <div className="product-price">Standard $10,000 · Premium $12,000</div>
            </div>
          </div>
          <div className="product-card reveal reveal-delay-2">
            <div className="product-card-top">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M32 12C24 12 18 20 18 28c0 6 3 11 8 14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><path d="M32 12C40 12 46 20 46 28c0 6-3 11-8 14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/><circle cx="32" cy="26" r="7" stroke="rgba(159,122,234,0.8)" strokeWidth="2"/><circle cx="32" cy="26" r="3" fill="rgba(159,122,234,0.6)"/><path d="M24 46h16M32 42v4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/><path d="M28 52h8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="product-card-body">
              <h3>3D Hologram AI Assistants</h3>
              <p>Realistic 3D hologram assistants deliver engaging, human-like interactions and product information.</p>
              <div className="product-price">Enterprise deployment</div>
            </div>
          </div>
          <div className="product-card reveal reveal-delay-3">
            <div className="product-card-top">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="20" y="8" width="24" height="40" rx="4" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/><rect x="24" y="14" width="16" height="24" rx="2" fill="rgba(159,122,234,0.3)"/><circle cx="32" cy="43" r="1.5" fill="rgba(255,255,255,0.5)"/><circle cx="32" cy="26" r="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/><path d="M28 34c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="product-card-body">
              <h3>Mobile AI Shopping Assistants</h3>
              <p>AI assistants in your pocket — recommend products, track orders anytime, anywhere.</p>
              <div className="product-price">SaaS subscription</div>
            </div>
          </div>
          <div className="product-card reveal reveal-delay-4">
            <div className="product-card-top">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="20" r="6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/><circle cx="14" cy="44" r="5" stroke="rgba(159,122,234,0.7)" strokeWidth="1.5"/><circle cx="32" cy="44" r="5" stroke="rgba(159,122,234,0.7)" strokeWidth="1.5"/><circle cx="50" cy="44" r="5" stroke="rgba(159,122,234,0.7)" strokeWidth="1.5"/><path d="M26 26l-8 12M32 26v12M38 26l8 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/></svg>
            </div>
            <div className="product-card-body">
              <h3>AI Queue Management</h3>
              <p>Smart queue systems reduce wait times, optimize flow, and improve customer satisfaction.</p>
              <div className="product-price">SaaS + hardware integration</div>
            </div>
          </div>
          <div className="product-card reveal reveal-delay-1">
            <div className="product-card-top">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="12" y="16" width="40" height="28" rx="3" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/><path d="M12 26h40" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/><rect x="18" y="32" width="14" height="6" rx="1.5" fill="rgba(159,122,234,0.4)"/><circle cx="44" cy="35" r="3" fill="rgba(244,200,66,0.6)"/><path d="M24 52h16M32 44v8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="product-card-body">
              <h3>AI Payment Execution</h3>
              <p>Secure, automated payment processing with multiple payment methods and fraud protection.</p>
              <div className="product-price">Integrated with all kiosks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
