export default function BusinessModel() {
  return (
    <section id="business-model">
      <div className="container">
        <p className="section-label reveal"><img src="bird-logo.png" alt="AivisLab" className="section-logo-img" /> Revenue Streams</p>
        <h2 className="bm-title reveal">Business Model</h2>
        <div className="bm-tiers">
          <div className="bm-tier reveal reveal-delay-1">
            <div className="bm-tier-label">AI Checkout Assistant</div>
            <div className="bm-rows">
              <div className="bm-row">
                <div className="bm-row-name">AI Checkout Assistant<small>Per store/month · 20,000 interactions included</small></div>
                <div className="bm-row-price">$999/mo</div>
              </div>
              <div className="bm-row">
                <div className="bm-row-name">SaaS Platform Fee<small>AI platform, POS integration, management dashboard</small></div>
                <div className="bm-row-price">$2,000/mo</div>
              </div>
              <div className="bm-row">
                <div className="bm-row-name">AI Usage Fee<small>Voice AI, LLM interactions, conversational AI</small></div>
                <div className="bm-row-price">$500+/mo</div>
              </div>
              <div className="bm-row">
                <div className="bm-row-name">Maintenance &amp; Support<small>Hardware monitoring, updates, customer support</small></div>
                <div className="bm-row-price">$300/mo</div>
              </div>
            </div>
          </div>
          <div className="bm-tier reveal reveal-delay-2">
            <div className="bm-tier-label">AI Platform Subscription</div>
            <div className="bm-rows">
              <div className="bm-row">
                <div className="bm-row-name">Starter<small>2M tokens included · Core AI features · API access</small></div>
                <div className="bm-row-price">$499/mo</div>
              </div>
              <div className="bm-row">
                <div className="bm-row-name">Professional<small>10M tokens · Advanced AI · Priority support</small></div>
                <div className="bm-row-price">$1,999/mo</div>
              </div>
              <div className="bm-row">
                <div className="bm-row-name">Enterprise<small>50M tokens · Custom integrations · SLA guarantee</small></div>
                <div className="bm-row-price">$4,999/mo</div>
              </div>
              <div className="bm-row">
                <div className="bm-row-name">Overage<small>Usage beyond included tokens</small></div>
                <div className="bm-row-price">$0.50/1M tokens</div>
              </div>
            </div>
          </div>
          <div className="bm-tier reveal reveal-delay-3">
            <div className="bm-tier-label">Hardware</div>
            <div className="bm-rows">
              <div className="bm-row">
                <div className="bm-row-name">AivisLab Kiosk &#8212; Standard<small>27" Touch Screen · Small-Mid Retail, QSR</small></div>
                <div className="bm-row-price">$10,000</div>
              </div>
              <div className="bm-row">
                <div className="bm-row-name">AivisLab Kiosk &#8212; Premium<small>32" Touch Screen · Enterprise, Airports, Large Chains</small></div>
                <div className="bm-row-price">$12,000</div>
              </div>
              <div className="bm-row">
                <div className="bm-row-name">Hardware Revenue Projection<small>2030: 5,000 stores × 2 kiosks × $10K</small></div>
                <div className="bm-row-price">$100M</div>
              </div>
            </div>
          </div>
          <div className="bm-tier bm-economics reveal reveal-delay-4">
            <div className="bm-tier-label">Unit Economics</div>
            <div className="bm-economics-grid">
              <div className="bm-econ-stat">
                <div className="bm-econ-val">97%</div>
                <div className="bm-econ-label">Gross Margin<br /><span>per interaction</span></div>
              </div>
              <div className="bm-econ-stat">
                <div className="bm-econ-val">88%</div>
                <div className="bm-econ-label">Gross Margin<br /><span>per store/month</span></div>
              </div>
              <div className="bm-econ-stat">
                <div className="bm-econ-val">$0.005</div>
                <div className="bm-econ-label">AI Cost<br /><span>per interaction</span></div>
              </div>
              <div className="bm-econ-stat">
                <div className="bm-econ-val">$2,460</div>
                <div className="bm-econ-label">Gross Profit<br /><span>per store/month</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* ENTERPRISE PLATFORM */}
        <div className="bm-enterprise reveal">
          <div className="bm-ent-header">
            <div>
              <div className="bm-ent-title">Enterprise Platform</div>
              <div className="bm-ent-subtitle">For national chains and large enterprises — custom solutions for complex, high-volume operations</div>
            </div>
            <span className="bm-ent-badge">Custom Quote</span>
          </div>
          <div className="bm-ent-body">
            <div className="bm-ent-features">
              <div className="bm-ent-feature">
                <h5>Platform License</h5>
                <p>Flexible licensing based on your deployment needs and scale</p>
              </div>
              <div className="bm-ent-feature">
                <h5>AI Usage</h5>
                <p>Token or interaction-based pricing designed for high-volume enterprise scale</p>
              </div>
              <div className="bm-ent-feature">
                <h5>Maintenance &amp; Support</h5>
                <p>Proactive maintenance and 24/7 enterprise support with guaranteed response times</p>
              </div>
              <div className="bm-ent-feature">
                <h5>Custom Integration</h5>
                <p>Seamless integration with your existing systems, workflows, and APIs</p>
              </div>
              <div className="bm-ent-feature">
                <h5>Dedicated SLA</h5>
                <p>Enterprise-grade SLA with guaranteed uptime and performance commitments</p>
              </div>
              <div className="bm-ent-feature">
                <h5>White-Label Deployment</h5>
                <p>White-label option for your brand experience across all customer touchpoints</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
