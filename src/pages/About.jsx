import { Link } from 'react-router-dom'
import { BRIDE_IMG, AARI_IMG } from '../assets/images'

const stats = [['10+','Years of Mastery'],['500+','Brides Adorned'],['100%','Organic Henna'],['★ 5.0','Client Rating']]

const values = [
  { icon: 'bi-brush',         title: 'Mastery in Detail',   desc: 'Over a decade of dedication to the fine arts of Mehendi and Aari, translating visions into tangible beauty with flawless micro-detailing.' },
  { icon: 'bi-flower1',       title: 'Organic Approach',    desc: '100% organic, hand-mixed henna pastes infused with essential oils for a deep, rich, long-lasting stain — no chemicals, no compromise.' },
  { icon: 'bi-gem',           title: 'Handcrafted Luxury',  desc: "True luxury lies in the time, patience, and soul poured into craft. Every client's journey is honoured with undivided attention." },
  { icon: 'bi-pencil-square', title: 'Bespoke Designs',     desc: 'No two designs are alike. Every pattern is drawn fresh, tailored to your personality, outfit, and the story you want to tell.' },
  { icon: 'bi-award',         title: 'Bridal Expertise',    desc: 'Specialised in bridal Mehendi and heavy Aari blouse work. We understand the gravity of your big day.' },
  { icon: 'bi-person-heart',  title: 'Personal Consultation', desc: 'We begin with a relaxed discussion about your vision, attire, and preferences — ensuring you feel heard before we begin.' },
]

const journey = [
  { year: '2012', title: 'The Beginning',  desc: 'Aishu began her journey with a passion for traditional henna art, practicing ancestral techniques passed down through generations.' },
  { year: '2015', title: 'Studio Opens',   desc: 'After three years of working at weddings and events, Aishu opened her first dedicated studio space — a sanctuary for brides in Nagercoil.' },
  { year: '2019', title: 'Aari Mastery',   desc: "Expanding into luxury Aari embroidery, Aishu mastered zardosi, cutdana, and micro-bead work, becoming the region's most sought-after artisan." },
  { year: '2024', title: 'Today',          desc: 'With 500+ brides adorned and a 5-star reputation, Aishu Petals & Patterns continues to redefine bridal artistry in Nagercoil and beyond.' },
]

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero-section">
        <div className="container" style={{ paddingBlock: '100px', textAlign: 'center' }}>
          <span className="eyebrow fade-up">Our Story</span>
          <h1 className="display-lg fade-up" style={{ color: 'var(--color-primary)', marginBottom: 20 }}>
            About Aishu Petals<br /><em>&amp; Patterns</em>
          </h1>
          <div className="gold-divider-dot" style={{ maxWidth: 400, margin: '0 auto 24px' }}><span className="dot" /></div>
          <p className="fade-up delay-1" style={{ fontSize: 18, color: 'var(--color-on-surface-muted)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.8 }}>
            Discover the heritage of Nagercoil's finest Mehendi and Aari artistry.
          </p>
          <div className="flex-cta-center">
            <Link to="/services" className="btn btn-primary">Explore Services →</Link>
            <Link to="/gallery" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--color-primary)', padding: '48px 0' }}>
        <div className="container">
          <div className="grid-4-stats">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(28px,3vw,38px)', fontWeight: 700, color: 'var(--color-secondary-light)' }}>{n}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, color: '#fff', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <img src={BRIDE_IMG} alt="Bride with mehendi" style={{ borderRadius: 'var(--radius-lg)', border: '3px solid var(--color-gold-light)', boxShadow: 'var(--shadow-hover)', width: '100%' }} />
            </div>
            <div>
              <span className="eyebrow">Born from Tradition</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 16 }}>Our Journey</h2>
              <div className="gold-divider-dot"><span className="dot" /></div>
              <p style={{ fontSize: 16, color: 'var(--color-on-surface-muted)', lineHeight: 1.85, marginBottom: 20 }}>
                Born from the rich cultural tapestry of Nagercoil, Aishu Petals &amp; Patterns began as a homage to ancestral craftsmanship. We preserve the delicate, time-honored techniques of natural henna preparation and meticulous Aari embroidery.
              </p>
              <p style={{ fontSize: 16, color: 'var(--color-on-surface-muted)', lineHeight: 1.85, marginBottom: 28 }}>
                Our journey is woven with threads of dedication — transforming pure ingredients and fine silks into wearable masterpieces for life's most celebrated moments.
              </p>
              <blockquote style={{ fontFamily: 'var(--font-headline)', fontSize: 20, fontStyle: 'italic', color: 'var(--color-primary)', borderLeft: '3px solid var(--color-gold)', paddingLeft: 20, marginBottom: 32 }}>
                "Every design is a bespoke creation, echoing the wearer's soul."
              </blockquote>
              <Link to="/contact" className="btn btn-outline">Meet Aishu →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 64 }}>
            <span className="eyebrow">Our Milestones</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>A Decade of Artistry</h2>
          </div>
          <div className="timeline">
            <div className="timeline-line" />
            {journey.map((item, i) => (
              <div key={item.year} className={`timeline-item ${i % 2 === 0 ? 'right' : 'left'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div style={{ fontFamily: 'var(--font-headline)', fontSize: 28, fontWeight: 700, color: 'var(--color-gold)', marginBottom: 8 }}>{item.year}</div>
                  <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: 18, fontWeight: 600, color: 'var(--color-primary)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--color-on-surface-muted)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 64 }}>
            <span className="eyebrow">What Sets Us Apart</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>Our Pillars of Excellence</h2>
          </div>
          <div className="grid-3">
            {values.map(v => (
              <div key={v.title} className="card value-card">
                <div style={{ fontSize: 40, marginBottom: 16, color: 'var(--color-primary)' }}>
                  <i className={`bi ${v.icon}`}></i>
                </div>
                <h3 className="headline-sm" style={{ color: 'var(--color-primary)', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-on-surface-muted)', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO SECTION */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Visit Us</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 16 }}>A Boutique Atmosphere</h2>
              <div className="gold-divider-dot"><span className="dot" /></div>
              <p style={{ fontSize: 16, color: 'var(--color-on-surface-muted)', lineHeight: 1.85, marginBottom: 20 }}>
                Located in the serene heart of Nagercoil, our studio is designed to be a sanctuary of calm. From the moment you step in, the scent of essential oils and the soft ambiance set the stage for a relaxing, indulgent experience.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {[
                  { icon: 'bi-geo-alt',  text: 'Nagercoil, Tamil Nadu, India' },
                  { icon: 'bi-telephone', text: '+91 73588 31918' },
                  { icon: 'bi-clock',    text: 'Mon–Sat: 10am–7pm  |  Sun: By Appointment' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--color-on-surface-muted)' }}>
                    <i className={`bi ${icon}`} style={{ fontSize: 20, color: 'var(--color-primary)', flexShrink: 0 }}></i>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary">Get Directions →</Link>
            </div>
            <div>
              <img src={AARI_IMG} alt="Studio work" style={{ borderRadius: 'var(--radius-lg)', border: '3px solid var(--color-gold-light)', boxShadow: 'var(--shadow-hover)', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Start Your Journey</span>
          <h2 className="headline-md" style={{ color: '#fff', margin: '12px 0 16px' }}>Let Us Be Part of Your Story</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 480, margin: '0 auto 32px', fontSize: 15 }}>Book a consultation and experience the artistry of Aishu Petals &amp; Patterns firsthand.</p>
          <Link to="/contact" className="btn btn-gold" style={{ borderColor: '#fff', color: '#fff' }}>
            <i className="bi bi-calendar-check" style={{ marginRight: 8 }}></i>Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
