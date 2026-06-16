export default function Architecture() {
  return (
    <section id="architecture">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> System Design</p>
        <h2 className="arch-title reveal">Full Platform Architecture</h2>
        <div className="arch-wrapper reveal">
          <div className="arch-layers">
            <div className="arch-layer input">
              <div className="arch-layer-label">Input Layer</div>
              <div className="arch-layer-items">
                <span className="arch-chip">Voice</span>
                <span className="arch-chip">Text</span>
                <span className="arch-chip">Sensors</span>
                <span className="arch-chip">System Data</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', color: 'rgba(159,122,234,0.5)', fontSize: '1.2rem' }}>&#8595;</div>
            <div className="arch-layer ai-core">
              <div className="arch-layer-label">AI Core Layer</div>
              <div className="arch-layer-items">
                <span className="arch-chip" style={{ background: 'rgba(107,70,193,0.3)', color: '#c4b5fd' }}>LLM + FSM Decision Engine</span>
                <span className="arch-chip" style={{ background: 'rgba(107,70,193,0.3)', color: '#c4b5fd' }}>Large Language Model</span>
                <span className="arch-chip" style={{ background: 'rgba(107,70,193,0.3)', color: '#c4b5fd' }}>Finite State Machine</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', color: 'rgba(159,122,234,0.5)', fontSize: '1.2rem' }}>&#8595;</div>
            <div className="arch-layer execution">
              <div className="arch-layer-label">Execution Layer</div>
              <div className="arch-layer-items">
                <span className="arch-chip">POS</span>
                <span className="arch-chip">Payment</span>
                <span className="arch-chip">Devices</span>
                <span className="arch-chip">IoT Systems</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', color: 'rgba(159,122,234,0.5)', fontSize: '1.2rem' }}>&#8595;</div>
            <div className="arch-layer avatar">
              <div className="arch-layer-label">Avatar Layer</div>
              <div className="arch-layer-items">
                <span className="arch-chip">Voice</span>
                <span className="arch-chip">Gesture</span>
                <span className="arch-chip">Emotion</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', color: 'rgba(159,122,234,0.5)', fontSize: '1.2rem' }}>&#8595;</div>
            <div className="arch-layer feedback-layer">
              <div className="arch-layer-label">Feedback Loop</div>
              <div className="arch-layer-items">
                <span className="arch-chip" style={{ background: 'rgba(244,200,66,0.15)', color: 'rgba(244,200,66,0.8)' }}>Continuous Real-Time Adaptation</span>
                <span className="arch-chip" style={{ background: 'rgba(244,200,66,0.15)', color: 'rgba(244,200,66,0.8)' }}>Learns from every interaction</span>
              </div>
            </div>
          </div>
          <div className="arch-feedback-sidebar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M4 10l8-8 8 8M4 14l8 8 8-8" stroke="#9F7AEA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Feedback Loop</span>
            <span>Continuous</span>
            <span>Adaptation</span>
            <span>All Layers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
