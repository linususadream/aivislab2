export default function Technology() {
  return (
    <section id="technology">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> Core Technology</p>
        <h2 className="tech-title reveal">Multi-Modal AI<br />Control Engine</h2>
        <div className="tech-engine-label reveal">Our Core Technology</div>
        <div className="tech-grid reveal">
          <div className="tech-block">
            <div className="tech-block-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6" stroke="#6B46C1" strokeWidth="1.5"/><path d="M10 4v2M10 14v2M4 10h2M14 10h2" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
            <h4>Speech Input</h4>
            <p>Real-time voice capture, ASR, and intent understanding</p>
          </div>
          <div className="tech-block">
            <div className="tech-block-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="#6B46C1" strokeWidth="1.5"/><path d="M2 10h16M10 2c-2.5 2.7-4 6.2-4 8s1.5 5.3 4 8" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
            <h4>Sensor Input</h4>
            <p>Captures data from environment sensors for context awareness</p>
          </div>
          <div className="tech-block">
            <div className="tech-block-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="3" stroke="#6B46C1" strokeWidth="1.5"/><path d="M6 8l4-3 4 3M6 12l4 3 4-3" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h4>LLM Reasoning</h4>
            <p>Advanced LLM understands, plans, and makes decisions</p>
          </div>
          <div className="tech-block">
            <div className="tech-block-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#6B46C1" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h4>FSM Execution</h4>
            <p>Finite State Machine ensures reliable and consistent flows</p>
          </div>
        </div>
        <div className="tech-grid-row2 reveal">
          <div className="tech-block">
            <div className="tech-block-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="#6B46C1" strokeWidth="1.5"/><path d="M6 10h8M2 8h16" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
            <h4>POS Control</h4>
            <p>Seamless control and interaction with POS systems</p>
          </div>
          <div className="tech-block">
            <div className="tech-block-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="10" rx="2" stroke="#6B46C1" strokeWidth="1.5"/><path d="M6 10h4M15 8v4" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
            <h4>Payment Execution</h4>
            <p>Secure payment processing and transaction management</p>
          </div>
          <div className="tech-block">
            <div className="tech-block-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v18M2 10h18" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="10" r="4" stroke="#6B46C1" strokeWidth="1.5"/></svg></div>
            <h4>Closed-Loop Feedback</h4>
            <p>Continuous learning from interactions to improve accuracy</p>
          </div>
          <div className="tech-block">
            <div className="tech-block-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4c3.3-3.3 8.7-3.3 12 0M16 16c-3.3 3.3-8.7 3.3-12 0" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 10a6 6 0 0 1 12 0" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="10" r="2" fill="#6B46C1"/></svg></div>
            <h4>Adaptive Response</h4>
            <p>Adapts and refines responses for better user experience</p>
          </div>
        </div>
        <div className="tech-tagline reveal">
          <p>One Engine. <span>All Modalities.</span> Intelligent. Adaptive. Autonomous.</p>
        </div>

        {/* ORDER EXECUTION FLOW */}
        <div className="tech-flow-section reveal">
          <p className="tech-flow-heading">Real-World Order Execution System</p>
          <p className="tech-flow-sub">From Customer Order to POS Order Tag &#8212; Real-Time End-to-End Flow</p>
          <div className="tech-flow-steps">
            <div className="tech-flow-step">
              <div className="tech-flow-num">1</div>
              <h4>Customer Tries to Order</h4>
              <p>Customer speaks their order to AivisLab Avatar in natural language</p>
              <div className="tech-flow-step-tags">
                <span className="tech-flow-tag">Voice Input</span>
                <span className="tech-flow-tag">Natural Language</span>
              </div>
            </div>
            <div className="tech-flow-arr">&#8594;</div>
            <div className="tech-flow-step">
              <div className="tech-flow-num">2</div>
              <h4>AI Avatar Confirms Order</h4>
              <p>Avatar understands, interacts and confirms the full order via LLM &amp; speech</p>
              <div className="tech-flow-step-tags">
                <span className="tech-flow-tag">Speech Recognition</span>
                <span className="tech-flow-tag">LLM Reasoning</span>
                <span className="tech-flow-tag">Voice &amp; Gesture</span>
              </div>
            </div>
            <div className="tech-flow-arr">&#8594;</div>
            <div className="tech-flow-step">
              <div className="tech-flow-num">3</div>
              <h4>JetBox Connects to POS</h4>
              <p>AivisLab JetBox securely transmits order data to the retailer's POS system</p>
              <div className="tech-flow-step-tags">
                <span className="tech-flow-tag">Encrypted Transmission</span>
                <span className="tech-flow-tag">POS Protocol</span>
                <span className="tech-flow-tag">Real-time Execution</span>
              </div>
            </div>
            <div className="tech-flow-arr">&#8594;</div>
            <div className="tech-flow-step">
              <div className="tech-flow-num">4</div>
              <h4>POS Provides Order Tag</h4>
              <p>POS processes the order and generates a kitchen order tag for preparation</p>
              <div className="tech-flow-step-tags">
                <span className="tech-flow-tag">Order Processed</span>
                <span className="tech-flow-tag">Tag Generated</span>
                <span className="tech-flow-tag">Sent to Kitchen</span>
              </div>
            </div>
          </div>
          <div className="tech-flow-summary">
            <span className="tech-flow-chip">Customer Places Order</span>
            <span className="tech-flow-arrow-sm">&#8594;</span>
            <span className="tech-flow-chip">Avatar Understands &amp; Confirms</span>
            <span className="tech-flow-arrow-sm">&#8594;</span>
            <span className="tech-flow-chip">JetBox Sends Order to POS</span>
            <span className="tech-flow-arrow-sm">&#8594;</span>
            <span className="tech-flow-chip">POS Generates Order Tag</span>
            <span className="tech-flow-arrow-sm">&#8594;</span>
            <span className="tech-flow-chip">Kitchen Receives &amp; Prepares</span>
          </div>
        </div>
      </div>
    </section>
  )
}
