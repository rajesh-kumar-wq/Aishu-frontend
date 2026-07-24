import { useState } from 'react'
import { Link } from 'react-router-dom'

const AARI_IMG = 'https://lh3.googleusercontent.com/aida/AP1WRLsieGzmQVy3Yv29dTVosdPOt79ZakpUvkBF-6PBS0ghzhwguQ51oaUQSrdSFU_Gqg9nwllhLcgXGpQvP_MWiXptxDl9H3a7w9iiPawhMeCE2gNX2wL44diX-HoPPn-UEqcC-ojW7ocYvbqET-IcapdZaoXx7BMwPJukCNvPHt1s70z4pN15kjzOm5eIAjqZCnxdvW4MEKkYk_T5o63EA23lcE3-jRcn-cbSr0Rhhg3TxHcf1_okX24wnX0z'

const contactInfo = [
  { icon: 'bi-telephone-fill',  label: 'Phone',           value: '+91 73588 31918',       href: 'tel:+917358831918',        sub: 'Call or WhatsApp anytime' },
  { icon: 'bi-geo-alt-fill',    label: 'Studio Location', value: 'Nagercoil, Tamil Nadu',  href: null,                       sub: 'India · Home visits available' },
  { icon: 'bi-clock-fill',      label: 'Working Hours',   value: 'Mon – Sat: 10am – 7pm', href: null,                       sub: 'Sunday: By Appointment Only' },
  { icon: 'bi-instagram',       label: 'Instagram',       value: '@AishuPetals',           href: 'https://instagram.com',    sub: 'DM us for quick queries' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', occasion: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <main>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, var(--color-surface-container) 0%, var(--color-surface-highest) 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: '-80px', bottom: '-80px', width: 500, height: 500, borderRadius: '50%', border: '1px solid var(--color-gold)', opacity: 0.15, pointerEvents: 'none' }} />
        <div className="container" style={{ paddingBlock: '100px', textAlign: 'center' }}>
          <span className="eyebrow fade-up">Get in Touch</span>
          <h1 className="display-lg fade-up" style={{ color: 'var(--color-primary)', marginBottom: 20 }}>
            Contact &amp;<br /><em>Bookings</em>
          </h1>
          <div className="gold-divider-dot" style={{ maxWidth: 400, margin: '0 auto 24px' }}><span className="dot" /></div>
          <p className="fade-up delay-1" style={{ fontSize: 18, color: 'var(--color-on-surface-muted)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.8 }}>
            Let us weave artistry into your special moments. Book a consultation or reach out for inquiries regarding our bespoke Mehendi and Aari services.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+917358831918" className="btn btn-primary">
              <i className="bi bi-telephone" style={{ marginRight: 8 }}></i>
              Call Now
            </a>
            <a href="#booking-form" className="btn btn-outline">Fill Enquiry Form</a>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section style={{ background: 'var(--color-primary)', padding: '56px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {contactInfo.map(c => (
              <div key={c.label} style={{ textAlign: 'center', padding: '24px 16px' }}>
                <div style={{ fontSize: 36, marginBottom: 12, color: 'var(--color-gold-light)' }}>
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-light)', marginBottom: 8 }}>{c.label}</div>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ fontFamily: 'var(--font-headline)', fontSize: 16, color: '#fff', display: 'block', marginBottom: 4 }}>{c.value}</a>
                  : <div style={{ fontFamily: 'var(--font-headline)', fontSize: 16, color: '#fff', marginBottom: 4 }}>{c.value}</div>
                }
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN FORM + INFO */}
      <section className="section" id="booking-form">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'start' }}>

            {/* LEFT: Info + Map */}
            <div>
              <span className="eyebrow">Visit Our Studio</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 16 }}>Find Us in Nagercoil</h2>
              <div className="gold-divider-dot"><span className="dot" /></div>
              <p style={{ fontSize: 15, color: 'var(--color-on-surface-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                Our studio is a calm sanctuary designed to make you feel relaxed and pampered. Walk-ins welcome during working hours, but we recommend booking in advance for bridal services.
              </p>

              <img src={AARI_IMG} alt="Studio" style={{ borderRadius: 'var(--radius-lg)', border: '2px solid var(--color-gold-light)', boxShadow: 'var(--shadow-card)', width: '100%', marginBottom: 24 }} />

              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--color-gold-light)', background: 'var(--color-surface-container)', height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <i className="bi bi-geo-alt-fill" style={{ fontSize: 40, color: 'var(--color-primary)' }}></i>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: 18, color: 'var(--color-primary)' }}>Nagercoil Studio</div>
                <a href="https://maps.google.com/?q=Nagercoil,Tamil+Nadu" target="_blank" rel="noreferrer"
                  style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-secondary)', textDecoration: 'underline' }}>
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* RIGHT: Booking Form */}
            <div style={{ background: 'var(--color-surface-low)', borderRadius: 'var(--radius-xl)', padding: 48, boxShadow: 'var(--shadow-hover)', border: '1px solid var(--color-outline-variant)' }}>
              <span className="eyebrow">Book an Appointment</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 8 }}>Request a Consultation</h2>
              <p style={{ fontSize: 14, color: 'var(--color-on-surface-muted)', marginBottom: 36 }}>Fill out the form below and we will contact you within 24 hours to confirm your session.</p>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <i className="bi bi-patch-check-fill" style={{ fontSize: 64, color: 'var(--color-primary)', marginBottom: 20, display: 'block' }}></i>
                  <h3 className="headline-sm" style={{ color: 'var(--color-primary)', marginBottom: 12 }}>Thank You, {form.name}!</h3>
                  <p style={{ color: 'var(--color-on-surface-muted)', fontSize: 15, lineHeight: 1.7 }}>We've received your request and will reach out to you at <strong>{form.phone}</strong> shortly to confirm your session.</p>
                  <button onClick={() => setSent(false)} className="btn btn-outline" style={{ marginTop: 24 }}>Submit Another →</button>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" name="name" value={form.name} onChange={handle} required placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp *</label>
                      <input className="form-input" name="phone" value={form.phone} onChange={handle} required placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div className="form-group">
                      <label className="form-label">Service Required *</label>
                      <select className="form-select" name="service" value={form.service} onChange={handle} required>
                        <option value="">Select a service...</option>
                        <optgroup label="Mehendi">
                          <option>Bridal Mehendi</option>
                          <option>Arabic Mehendi</option>
                          <option>Engagement Mehendi</option>
                          <option>Festival Henna</option>
                          <option>Guest Mehendi (Event)</option>
                        </optgroup>
                        <optgroup label="Aari Work">
                          <option>Bridal Aari Blouse (Heavy)</option>
                          <option>Semi-Bridal Aari</option>
                          <option>Simple Aari / Party Wear</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Occasion Date</label>
                      <input className="form-input" type="date" name="date" value={form.date} onChange={handle} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Type of Occasion</label>
                    <input className="form-input" name="occasion" value={form.occasion} onChange={handle} placeholder="e.g. Wedding, Engagement, Festival..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message / Additional Details</label>
                    <textarea className="form-textarea" name="message" value={form.message} onChange={handle} placeholder="Tell us your outfit colour, jewellery style, any inspiration images you have in mind..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '16px 32px' }}>
                    <i className="bi bi-send" style={{ marginRight: 8 }}></i>
                    Send Enquiry
                  </button>
                  <p style={{ fontSize: 12, color: 'var(--color-on-surface-muted)', textAlign: 'center' }}>
                    We respond within 24 hours · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHY BOOK WITH US */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="eyebrow">Why Choose Aishu?</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>What to Expect</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {[
              { icon: 'bi-person-check', title: 'Personal Consultation', desc: 'Every booking begins with a relaxed 1-on-1 discussion about your vision, outfit, and expectations. We listen before we create.' },
              { icon: 'bi-lightning-charge', title: 'Quick Confirmation', desc: 'We confirm bookings within 24 hours. No chasing, no uncertainty — just a clear schedule so you can plan your wedding stress-free.' },
              { icon: 'bi-star', title: 'Day-of Excellence', desc: 'On your special day, we arrive on time, fully prepared, and stay until every detail is perfect. Your comfort is our priority.' },
            ].map(b => (
              <div key={b.title} className="card" style={{ padding: 32, textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16, color: 'var(--color-primary)' }}>
                  <i className={`bi ${b.icon}`}></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: 18, color: 'var(--color-primary)', marginBottom: 12 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-on-surface-muted)', lineHeight: 1.75 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section style={{ background: 'var(--color-primary)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Quick Response</span>
          <h2 className="headline-md" style={{ color: '#fff', margin: '12px 0 16px' }}>Prefer to Chat Directly?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 440, margin: '0 auto 32px', fontSize: 15 }}>
            WhatsApp us directly for quick queries, design references, or to check availability.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/917358831918?text=${encodeURIComponent('Hello Aishu! I would like to book a consultation for Mehendi / Aari work. Please let me know your availability.')}`} target="_blank" rel="noreferrer" className="btn btn-gold" style={{ borderColor: '#fff', color: '#fff' }}>
              <i className="bi bi-whatsapp" style={{ marginRight: 8 }}></i>
              WhatsApp Us
            </a>
            <a href="tel:+917358831918" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
              <i className="bi bi-telephone" style={{ marginRight: 8 }}></i>
              +91 73588 31918
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
