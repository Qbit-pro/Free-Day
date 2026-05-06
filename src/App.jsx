import {
  ArrowRight,
  BellRing,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  MessageCircle,
  PhoneCall,
  Radio,
  ScanText,
  School,
  ShieldCheck,
  Sparkles,
  Youtube,
} from "lucide-react";
import heroImage from "./assets/freeday-live-monitor.png";

const districts = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Tirunelveli",
  "Salem",
  "Cuddalore",
  "Puducherry",
];

const steps = [
  {
    icon: Youtube,
    title: "Live news intake",
    text: "FreeDay watches Tamil Nadu and Puducherry news channels as they stream on YouTube.",
  },
  {
    icon: ScanText,
    title: "OCR announcement scan",
    text: "The system reads tickers, lower thirds, headlines, and breaking-news plates in real time.",
  },
  {
    icon: BrainCircuit,
    title: "Gemini verification",
    text: "Gemini AI reviews the captured announcement to filter rumors, repeats, and unrelated closures.",
  },
  {
    icon: BellRing,
    title: "Parent alerts",
    text: "Registered parents and students receive WhatsApp messages and call alerts instantly.",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Ahead of forwarding chains",
    text: "YouTube live feeds often lead TV broadcasts, helping families hear about school holidays sooner.",
  },
  {
    icon: ShieldCheck,
    title: "Built for confidence",
    text: "Multiple checks reduce false alarms before a message reaches households.",
  },
  {
    icon: School,
    title: "Made for local school routines",
    text: "Coverage language, district context, and notification timing are tuned for parents and students.",
  },
];

const proofPoints = [
  "Live YouTube stream monitoring",
  "Tamil and English text recognition",
  "District-aware alert routing",
  "WhatsApp and call fallback",
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="FreeDay home">
          <span className="brand-mark">F</span>
          <span>FreeDay</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#how">How it works</a>
          <a href="#coverage">Coverage</a>
          <a href="#alerts">Alerts</a>
        </nav>
        <a className="nav-cta" href="#join">
          <BellRing size={18} aria-hidden="true" />
          <span className="nav-cta-label">Early access</span>
        </a>
      </header>

      <main id="top">
        <section
          className="hero"
          style={{ "--hero-image": `url(${heroImage})` }}
          aria-labelledby="hero-title"
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow">
              <Radio size={18} aria-hidden="true" />
              Live school holiday intelligence
            </div>
            <h1 id="hero-title">FreeDay</h1>
            <p className="hero-lede">
              AI-powered alerts for Tamil Nadu and Puducherry school holidays,
              detected live from YouTube news streams and verified before they
              reach parents.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#join">
                <MessageCircle size={19} aria-hidden="true" />
                Join alert list
              </a>
              <a className="button secondary" href="#how">
                <ArrowRight size={19} aria-hidden="true" />
                See the flow
              </a>
            </div>
            <div className="hero-proof" aria-label="Core capabilities">
              {proofPoints.map((point) => (
                <span key={point}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="speed-band" aria-label="Speed promise">
          <div>
            <p className="section-kicker">Faster than TV</p>
            <h2>YouTube streams move first. FreeDay listens there.</h2>
          </div>
          <p>
            When rainfall, cyclone conditions, heat waves, or district orders
            trigger school closure news, FreeDay watches the earliest live
            signals and turns verified announcements into direct family alerts.
          </p>
        </section>

        <section className="section console-section" aria-labelledby="console-title">
          <div className="section-copy">
            <p className="section-kicker">Monitoring desk</p>
            <h2 id="console-title">From live stream to verified alert in one flow.</h2>
            <p>
              FreeDay is designed for speed and restraint: it detects possible
              school holiday announcements, checks the language and district
              context, then sends alerts only when the announcement looks real.
            </p>
          </div>

          <div className="console" aria-label="FreeDay monitoring console preview">
            <div className="console-header">
              <span className="status-dot" />
              <strong>Live TN + PY watch</strong>
              <span>Signal confidence 94%</span>
            </div>
            <div className="console-grid">
              <div className="stream-tile active">
                <Youtube size={24} aria-hidden="true" />
                <span>News stream</span>
                <strong>Holiday ticker found</strong>
              </div>
              <div className="stream-tile">
                <ScanText size={24} aria-hidden="true" />
                <span>OCR frame</span>
                <strong>District closure text</strong>
              </div>
              <div className="alert-card">
                <div>
                  <BellRing size={24} aria-hidden="true" />
                  <span>Queued alert</span>
                </div>
                <p>Rain holiday announcement detected for selected districts.</p>
              </div>
              <div className="call-card">
                <PhoneCall size={24} aria-hidden="true" />
                <span>Call fallback ready</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="how" aria-labelledby="how-title">
          <div className="section-heading">
            <p className="section-kicker">How it works</p>
            <h2 id="how-title">A calm, verified pipeline for urgent school news.</h2>
          </div>
          <div className="steps">
            {steps.map(({ icon: Icon, title, text }) => (
              <article className="step-card" key={title}>
                <div className="icon-box">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section benefits-section" aria-labelledby="benefits-title">
          <div className="section-heading">
            <p className="section-kicker">Why families use it</p>
            <h2 id="benefits-title">Built for the morning when every minute matters.</h2>
          </div>
          <div className="benefits">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article className="benefit-card" key={title}>
                <Icon size={28} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="coverage" id="coverage" aria-labelledby="coverage-title">
          <div>
            <p className="section-kicker">Coverage</p>
            <h2 id="coverage-title">Focused on Tamil Nadu and Puducherry.</h2>
            <p>
              Start with the regions families ask about most, then route alerts
              by the districts registered in each student profile.
            </p>
          </div>
          <div className="district-list" aria-label="Example coverage locations">
            {districts.map((district) => (
              <span key={district}>{district}</span>
            ))}
          </div>
        </section>

        <section className="alerts" id="alerts" aria-labelledby="alerts-title">
          <div className="alert-copy">
            <p className="section-kicker">Notifications</p>
            <h2 id="alerts-title">WhatsApp first. Calls when it is urgent.</h2>
            <p>
              Parents get clear, district-specific alerts with the announcement
              context and confidence status, so they can act quickly without
              waiting for forwarded screenshots.
            </p>
          </div>
          <div className="phone-preview" aria-label="WhatsApp alert preview">
            <div className="phone-top" />
            <div className="message-bubble">
              <strong>FreeDay Alert</strong>
              <p>
                School holiday update detected for your registered district.
                Verified from live news stream.
              </p>
            </div>
            <div className="message-meta">
              <span>WhatsApp sent</span>
              <span>Call backup armed</span>
            </div>
          </div>
        </section>

        <section className="join" id="join" aria-labelledby="join-title">
          <div>
            <p className="section-kicker">Early access</p>
            <h2 id="join-title">Launch FreeDay for your school community.</h2>
            <p>
              Use this page to introduce FreeDay, collect interest, or connect
              the landing page to your registration workflow.
            </p>
          </div>
          <a className="button primary light" href="mailto:hello@freeday.ai">
            <Sparkles size={19} aria-hidden="true" />
            Contact FreeDay
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#top" aria-label="FreeDay home">
          <span className="brand-mark">F</span>
          <span>FreeDay</span>
        </a>
        <span>AI school holiday alerts for Tamil Nadu and Puducherry.</span>
      </footer>
    </div>
  );
}

export default App;
