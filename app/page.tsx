const metrics = [
  { value: '50-200', label: 'real inquiries in a focused pilot' },
  { value: '3', label: 'ranked offers per customer request' },
  { value: '24/7', label: 'follow-up, price watch and deal monitoring' },
];

const modules = [
  'QPNR quote record for every inquiry',
  'AI request understanding from WhatsApp, email or CRM notes',
  'Budget / Recommended / Premium offer builder',
  'Dynamic pricing, margin and risk calculation',
  'Follow-up, requote and lost-offer recovery',
  'Payment-ready checks, revalidation and booking gates',
  'Hotel price watch and post-booking rebook opportunities',
];

const phases = [
  {
    title: '1. Map the quote-to-close flow',
    text: 'We identify how inquiries arrive, how offers are built, where margins are calculated, and where opportunities are lost.',
  },
  {
    title: '2. Run a controlled hotel pilot',
    text: 'We start with hotels only: QPNR creation, offer building, dynamic pricing, message drafts and follow-up board.',
  },
  {
    title: '3. Move to guarded autopilot',
    text: 'Low-risk actions can run automatically while sensitive actions stay behind policy checks and human approval.',
  },
  {
    title: '4. Expand to payment and booking gates',
    text: 'After value is proven, Q2C connects to payment, supplier booking workflows and post-booking optimization.',
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand">Q2C Travel</div>
          <a className="navLink" href="mailto:hello@q2ctravel.ai?subject=Q2C%20Travel%20Pilot">
            Request pilot
          </a>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">AI Transformation for Travel Agencies</p>
            <h1>From customer inquiry to paid booking.</h1>
            <p className="lead">
              Q2C Travel is an AI Sales Operating Layer that helps travel agencies turn every travel request into a clear,
              profitable and followed-up offer all the way to payment, booking and post-booking optimization.
            </p>
            <div className="ctaRow">
              <a className="primaryCta" href="mailto:hello@q2ctravel.ai?subject=Q2C%20Travel%20Pilot">
                Start a 30-day pilot
              </a>
              <a className="secondaryCta" href="#method">
                See the method
              </a>
            </div>
          </div>

          <div className="heroCard">
            <div className="cardHeader">
              <span className="dot" />
              Live QPNR
            </div>
            <div className="qpnr">QPNR-2026-0184</div>
            <div className="request">London, Aug 12-16, 2 adults, 4-star, central, up to GBP 900</div>
            <div className="offerRow recommended">
              <span>Recommended offer</span>
              <strong>GBP 869</strong>
            </div>
            <div className="offerRow">
              <span>Expected margin</span>
              <strong>GBP 74</strong>
            </div>
            <div className="offerRow">
              <span>Next action</span>
              <strong>Send payment-ready follow-up</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics">
        {metrics.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section twoCol">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>Travel agencies do not need another search engine.</h2>
        </div>
        <p>
          Customers can already compare hotels online. The real challenge is the commercial flow after the inquiry:
          understanding the request, building the right offer set, protecting margin, following up, revalidating prices,
          collecting payment and moving safely into booking.
        </p>
      </section>

      <section className="section dark">
        <p className="eyebrow">The product</p>
        <h2>A controlled AI layer above your existing systems.</h2>
        <div className="moduleGrid">
          {modules.map((module) => (
            <div className="module" key={module}>{module}</div>
          ))}
        </div>
      </section>

      <section className="section" id="method">
        <p className="eyebrow">The transformation method</p>
        <h2>A practical path from copilot to guarded autopilot.</h2>
        <div className="phaseGrid">
          {phases.map((phase) => (
            <article className="phase" key={phase.title}>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitPanel">
        <div>
          <p className="eyebrow">Why agencies win</p>
          <h2>Booking sells search. Q2C sells guided decisions.</h2>
        </div>
        <div className="bullets">
          <p>Faster response to every inquiry.</p>
          <p>Focused offers instead of overwhelming lists.</p>
          <p>Dynamic pricing and margin discipline.</p>
          <p>Follow-up discipline until close.</p>
          <p>Price watch and rebook opportunities after booking.</p>
        </div>
      </section>

      <section className="finalCta">
        <p className="eyebrow">Suggested pilot</p>
        <h2>Hotels first. 14-30 days. Real inquiries. Measurable results.</h2>
        <p>
          We start in human-approval mode, prove value, then expand into guarded autopilot, payment gates and supplier booking workflows.
        </p>
        <a className="primaryCta" href="mailto:hello@q2ctravel.ai?subject=Q2C%20Travel%20Pilot">
          Discuss a pilot
        </a>
      </section>
    </main>
  );
}
