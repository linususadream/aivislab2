export default function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> The Challenge</p>
        <h2 className="problem-title reveal">Retail Chains Face:</h2>
        <div className="problem-grid">
          <div className="problem-card reveal reveal-delay-1">
            <div className="problem-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6B46C1" strokeWidth="1.5"/><circle cx="9" cy="7" r="4" stroke="#6B46C1" strokeWidth="1.5"/><line x1="23" y1="11" x2="17" y2="11" stroke="#EF4444" strokeWidth="1.5"/></svg>
            </div>
            <h3>Labor Shortages</h3>
            <p>Difficulty finding and retaining qualified staff across locations.</p>
          </div>
          <div className="problem-card reveal reveal-delay-2">
            <div className="problem-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3>Rising Labor Costs</h3>
            <p>Wages and benefits continue to rise, putting pressure on profit margins.</p>
          </div>
          <div className="problem-card reveal reveal-delay-3">
            <div className="problem-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3>Human Error</h3>
            <p>Mistakes in orders, transactions, and operations lead to losses.</p>
          </div>
          <div className="problem-card reveal reveal-delay-4">
            <div className="problem-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#6B46C1" strokeWidth="1.5"/><path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h3>Poor Customer Experience</h3>
            <p>Long wait times, limited assistance, and lack of personal interaction.</p>
          </div>
          <div className="problem-card reveal reveal-delay-1">
            <div className="problem-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#6B46C1" strokeWidth="1.5"/><line x1="8" y1="21" x2="16" y2="21" stroke="#6B46C1" strokeWidth="1.5"/><line x1="12" y1="17" x2="12" y2="21" stroke="#6B46C1" strokeWidth="1.5"/><line x1="7" y1="8" x2="17" y2="8" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2 2"/></svg>
            </div>
            <h3>Inefficient Self-Checkout</h3>
            <p>Complex to use, technical issues, and lack of human support.</p>
          </div>
        </div>
        <div className="problem-callout reveal">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}><rect width="32" height="32" rx="8" fill="rgba(159,122,234,0.3)"/><path d="M8 16h8M20 12l4 4-4 4" stroke="#9F7AEA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="16" y1="16" x2="24" y2="16" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/></svg>
          <p>Self-checkout reduces labor. But it <span>removes customer interaction.</span></p>
        </div>
      </div>
    </section>
  )
}
