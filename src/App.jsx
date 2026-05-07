import { useState, useEffect } from 'react'
import './App.css'

// Rain animation component
function RainEffect() {
  const drops = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${0.8 + Math.random() * 0.6}s`,
    opacity: 0.2 + Math.random() * 0.4,
  }))

  return (
    <div className="rain-container">
      {drops.map(drop => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  )
}

// Navbar
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#" className="nav-logo">
        🌧️ <span>FreeDay</span>
      </a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#subscribe" className="nav-cta">Get Alerts Free</a></li>
      </ul>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="pulse"></span>
            Live Monitoring Active
          </div>
          <h1>
            Never Miss a <span className="highlight">Rain Holiday</span> Again
          </h1>
          <p className="hero-subtitle">
            FreeDay monitors official government announcements 24/7 and sends you instant WhatsApp alerts — with screenshot proof — before anyone else knows.
          </p>
          <div className="hero-actions">
            <a href="#subscribe" className="btn-primary" id="hero-cta">
              📱 Get Free Alerts
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works →
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Monitoring</div>
            </div>
            <div className="stat">
              <div className="stat-number">&lt;30s</div>
              <div className="stat-label">Alert Speed</div>
            </div>
            <div className="stat">
              <div className="stat-number">38</div>
              <div className="stat-label">Districts Covered</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero.png" alt="Happy Indian children celebrating a rainy holiday" />
        </div>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Faster Than Uncle\'s Group',
      description: 'Our AI monitors official sources in real-time. Get the alert minutes before it hits the school WhatsApp group — with zero confusion.'
    },
    {
      icon: '📸',
      title: 'Screenshot Proof',
      description: 'Every alert comes with a screenshot of the official announcement. No more "is this real?" — see the proof yourself.'
    },
    {
      icon: '🌧️',
      title: 'Rain Holiday Specialist',
      description: 'Built specifically for Indian rain holidays. We monitor District Collector announcements across all 38 Tamil Nadu districts.'
    },
    {
      icon: '🔔',
      title: 'WhatsApp Delivery',
      description: 'Alerts come straight to your WhatsApp — the app you already check first thing in the morning. No new app to install.'
    },
    {
      icon: '🏫',
      title: 'All School Types',
      description: 'Government, Private, CBSE, Matric, ICSE — we cover every school type mentioned in the official announcement.'
    },
    {
      icon: '🗣️',
      title: 'Bilingual Alerts',
      description: 'Get alerts in both Tamil and English. Choose your language preference or receive both — your choice.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-tag">✨ Features</span>
        <h2>Why Parents Trust FreeDay</h2>
        <p>We ended the 20-minute confusion in school WhatsApp groups. Here's how.</p>
      </div>
      <div className="features-grid">
        {features.map((feature, i) => (
          <div className="feature-card" key={i} id={`feature-${i}`}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      number: '🌧️',
      title: 'Rain Hits Your District',
      description: 'Heavy rainfall triggers monitoring across official channels — government portals, collector accounts, and verified news sources.',
      time: 'Automatic'
    },
    {
      number: '🤖',
      title: 'AI Detects the Announcement',
      description: 'Our system scans multiple official sources simultaneously and identifies holiday declarations within seconds of publication.',
      time: 'Under 30 seconds'
    },
    {
      number: '📸',
      title: 'Screenshot Captured',
      description: 'The system captures a screenshot of the official announcement as proof — so you never have to wonder "is this real?"',
      time: 'Instant'
    },
    {
      number: '📱',
      title: 'You Get the Alert',
      description: 'A WhatsApp message lands on your phone with the district, date, school types affected, reason, and the screenshot proof.',
      time: 'Before 6:30 AM'
    }
  ]

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-header">
        <span className="section-tag">⚙️ How It Works</span>
        <h2>From Rain to Your Phone in Seconds</h2>
        <p>While others are still figuring out "is there a holiday?", you already know.</p>
      </div>
      <div className="steps-container">
        {steps.map((step, i) => (
          <div className="step" key={i}>
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="step-time">⏱️ {step.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Demo Section
function Demo() {
  return (
    <section className="demo" id="demo">
      <div className="demo-container">
        <div className="demo-phone">
          <img src="/images/phone-mockup.png" alt="FreeDay WhatsApp alert on phone" />
        </div>
        <div className="demo-text">
          <span className="section-tag">📱 WhatsApp Alert</span>
          <h2>This Is What You'll Get</h2>
          <p>A clear, instant message with everything you need to know. No forwarded rumours. No confusion. Just facts with proof.</p>
          <ul className="demo-features">
            <li><span className="check">✅</span> District and date clearly stated</li>
            <li><span className="check">✅</span> All school types listed (Govt, Private, CBSE, Matric)</li>
            <li><span className="check">✅</span> Official reason included (rainfall, cyclone, etc.)</li>
            <li><span className="check">✅</span> Screenshot proof from official source</li>
            <li><span className="check">✅</span> Exact time the alert was detected</li>
            <li><span className="check">✅</span> Available in Tamil and English</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <span className="section-tag">💰 Pricing</span>
        <h2>Simple, Honest Pricing</h2>
        <p>Start free. Upgrade only if you want premium features.</p>
      </div>
      <div className="pricing-cards">
        <div className="pricing-card" id="pricing-free">
          <h3>🌧️ Free</h3>
          <div className="price">
            <span className="currency">₹</span>0<span>/forever</span>
          </div>
          <ul className="pricing-features">
            <li><span className="icon">✅</span> WhatsApp holiday alerts</li>
            <li><span className="icon">✅</span> Screenshot proof</li>
            <li><span className="icon">✅</span> Bilingual (Tamil + English)</li>
            <li><span className="icon">✅</span> Your district covered</li>
            <li><span className="icon">⬜</span> Phone call alert</li>
            <li><span className="icon">⬜</span> ML rain predictions</li>
          </ul>
          <a href="#subscribe" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
            Get Started Free
          </a>
        </div>
        <div className="pricing-card popular" id="pricing-premium">
          <h3>⭐ Premium</h3>
          <div className="price">
            <span className="currency">₹</span>49<span>/month</span>
          </div>
          <ul className="pricing-features">
            <li><span className="icon">✅</span> Everything in Free</li>
            <li><span className="icon">✅</span> 📞 Phone call alert (wake-up call)</li>
            <li><span className="icon">✅</span> 🔮 ML rain predictions (coming soon)</li>
            <li><span className="icon">✅</span> 🗺️ Multi-district alerts</li>
            <li><span className="icon">✅</span> 🚫 No ads, ever</li>
            <li><span className="icon">✅</span> 🎮 Fun games for kids</li>
          </ul>
          <a href="#subscribe" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Start Premium — ₹49/mo
          </a>
        </div>
      </div>
    </section>
  )
}

// Subscribe CTA
function Subscribe() {
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phone.length >= 10) {
      setSubmitted(true)
    }
  }

  return (
    <section className="how-it-works" id="subscribe" style={{ textAlign: 'center' }}>
      <div className="section-header">
        <span className="section-tag">🚀 Get Started</span>
        <h2>Get Your First Alert Free</h2>
        <p>Enter your WhatsApp number and never miss a rain holiday again.</p>
      </div>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          gap: '12px',
          maxWidth: '480px',
          margin: '0 auto',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input
            type="tel"
            placeholder="Your WhatsApp number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            id="subscribe-phone"
            style={{
              flex: 1,
              minWidth: '240px',
              padding: '16px 24px',
              borderRadius: '50px',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              background: 'rgba(14, 165, 233, 0.05)',
              color: '#f1f5f9',
              fontSize: '1rem',
              fontFamily: 'Outfit, sans-serif',
              outline: 'none',
            }}
          />
          <button type="submit" className="btn-primary" id="subscribe-btn">
            📱 Subscribe
          </button>
        </form>
      ) : (
        <div style={{
          padding: '24px',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: '16px',
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎉</div>
          <h3 style={{ color: '#10b981' }}>You're In!</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            We'll send your first alert to <strong style={{ color: '#f1f5f9' }}>+91 {phone}</strong> when the next rain holiday hits.
          </p>
        </div>
      )}
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          🌧️ <span>FreeDay</span>
        </div>
        <div className="footer-text">
          © 2026 FreeDay Alerts. Made with ❤️ in Tamil Nadu, India.
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <>
      <RainEffect />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <Pricing />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
