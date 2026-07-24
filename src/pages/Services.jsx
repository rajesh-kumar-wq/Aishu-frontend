import { Link } from 'react-router-dom'

const MEHENDI_IMG = 'https://lh3.googleusercontent.com/aida/AP1WRLvCVNbQE1fpOKt_JRJk1wyepbja_TPe1wEzb3pX4h81egLJjfs_6Y5Yp2xv_LqvBKNHSVxOvPo76aA0gUN6VR__w9thFleClxYDAwAYzX-ESsMMmceYM4aRPdZIKBWINlV7liGCiZZnJ3w-Rp6BxGcmbMtfyVLNWJLTtUlkd7SAKbVapsnY-re1qI870uygufeVjdhCh3GtRVrELSF74aR_LIvX_c8LSe4EAFi3Z9gymXoKcS5NIY7iDqk'
const AARI_IMG   = 'https://lh3.googleusercontent.com/aida/AP1WRLsieGzmQVy3Yv29dTVosdPOt79ZakpUvkBF-6PBS0ghzhwguQ51oaUQSrdSFU_Gqg9nwllhLcgXGpQvP_MWiXptxDl9H3a7w9iiPawhMeCE2gNX2wL44diX-HoPPn-UEqcC-ojW7ocYvbqET-IcapdZaoXx7BMwPJukCNvPHt1s70z4pN15kjzOm5eIAjqZCnxdvW4MEKkYk_T5o63EA23lcE3-jRcn-cbSr0Rhhg3TxHcf1_okX24wnX0z'
const BRIDE_IMG  = 'https://lh3.googleusercontent.com/aida/AP1WRLv-9LL7exrov0fFSD0cDV65DF3sBy64IomXHKQR-7Zf0uKMFw2CJDMwoh6804SSTdxIF60ORIp5-oF8KrhOsDhB9IQtTf6WZYAQ-d4z21Ff4segx6ZXhE7dpJbyoRzSW-cjd3mFepvGvRRJV2Ii428jwATKpcCbhIegemYlJ_t7-9LYG56oJamNKYq9nB5scrgeTPzxcNo1olBk6hTEYUuiuIIDfKc5v0rirUROL4uvCB-SNgETTKO-s6i4'

const mehendiServices = [
  { name: 'Bridal Mehendi',  price: 'From ₹5,000', icon: 'bi-person-heart', desc: 'Intricate, full-coverage designs combining traditional motifs, figures, and personalised elements. Includes both hands and feet.' },
  { name: 'Arabic Style',    price: 'From ₹1,000', icon: 'bi-flower1',      desc: 'Elegant, flowing patterns with prominent floral motifs and significant negative space for a modern, bold, sophisticated look.' },
  { name: 'Engagement',      price: 'From ₹2,500', icon: 'bi-gem',          desc: 'Sophisticated mid-length designs, balancing traditional detail with elegant simplicity — perfect for your ring ceremony.' },
  { name: 'Festival Henna',  price: 'From ₹800',   icon: 'bi-stars',        desc: 'Festive motifs for Karwa Chauth, Diwali, and Eid celebrations. Group bookings available for events and gatherings.' },
  { name: 'Guest Mehendi',   price: '₹800 / hr',   icon: 'bi-people',       desc: 'Swift, beautiful designs for all your wedding guests. Professional, punctual, and adored by everyone.' },
]

const aariServices = [
  { name: 'Bridal Blouse (Heavy)', price: 'From ₹8,000', icon: 'bi-gem',    desc: 'Heavy Aari work across neckline, sleeves, and back using premium zardosi, cutdana, and micro-beads for an opulent bridal look.' },
  { name: 'Semi-Bridal',           price: 'From ₹4,500', icon: 'bi-flower2', desc: 'Elegant designs focusing on rich borders and neckline detailing. Perfect for engagement sarees or close family members.' },
  { name: 'Simple & Elegant',      price: 'From ₹1,800', icon: 'bi-sparkle', desc: 'Subtle touches of Aari embroidery — delicate scattered buttas or minimal necklines. Ideal for party wear and receptions.' },
]

const process = [
  { num: '01', title: 'Consultation', desc: 'Discuss your vision, attire, jewellery, and preferences in a relaxed, personalised session.' },
  { num: '02', title: 'Design & Sketch', desc: 'Custom motifs are drafted from scratch to perfectly complement your style and occasion.' },
  { num: '03', title: 'Artistry Applied', desc: 'Meticulous henna application or precise Aari hand-embroidery — every stroke with intention.' },
  { num: '04', title: 'Final Polish', desc: 'Aftercare advice for Mehendi or expert tailoring consultation for Aari blouses.' },
]

const faqs = [
  { q: 'How far in advance should I book?', a: 'For bridal bookings, we recommend booking at least 2–3 months in advance. Festival and guest henna can be booked 2–4 weeks ahead.' },
  { q: 'Do you travel to venues?', a: 'Yes! We offer home visits and venue services across Nagercoil and surrounding areas. Travel charges apply based on distance.' },
  { q: 'How long does the Mehendi stain last?', a: 'Our 100% organic henna gives a deep stain that lasts 10–20 days depending on skin type and aftercare.' },
  { q: 'What materials do you use for Aari work?', a: 'We use premium quality threads, zardosi, cutdana beads, and French wires sourced from trusted suppliers.' },
]

export default function Services() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero-section">
        <div className="container" style={{ paddingBlock: '100px', textAlign: 'center' }}>
          <span className="eyebrow fade-up">Our Artistry</span>
          <h1 className="display-lg fade-up" style={{ color: 'var(--color-primary)', marginBottom: 20 }}>Services &amp;<br /><em>Pricing</em></h1>
          <div className="gold-divider-dot" style={{ maxWidth: 400, margin: '0 auto 24px' }}><span className="dot" /></div>
          <p className="fade-up delay-1" style={{ fontSize: 18, color: 'var(--color-on-surface-muted)', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.8 }}>
            Discover the delicate interplay of ancestral henna artistry and exquisite Aari embroidery.
          </p>
          <div className="flex-cta-center">
            <Link to="/contact" className="btn btn-primary">Book a Consultation →</Link>
            <Link to="/gallery" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section style={{ background: 'var(--color-primary)', padding: '40px 0' }}>
        <div className="container">
          <div className="grid-4-stats">
            {[['5','Service Types'],['500+','Projects Done'],['10+','Years Expert'],['★ 5.0','Average Rating']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: 'var(--color-secondary-light)' }}>{n}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, color: '#fff', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEHENDI SERVICES */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ marginBottom: '80px' }}>
            <div>
              <span className="eyebrow"><i className="bi bi-flower1" style={{ marginRight: 6 }}></i>Henna Artistry</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 8 }}>Mehendi Services</h2>
              <p style={{ color: 'var(--color-on-surface-muted)', marginBottom: 32, fontSize: 15 }}>Each design is freshly composed — never repeated, always personal.</p>
              {mehendiServices.map(s => (
                <div key={s.name} className="service-row">
                  <div className="service-icon"><i className={`bi ${s.icon}`}></i></div>
                  <div style={{ flex: 1 }}>
                    <div className="service-title-row">
                      <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: 18, color: 'var(--color-on-surface)' }}>{s.name}</h3>
                      <span style={{ fontFamily: 'var(--font-headline)', fontSize: 17, fontWeight: 600, color: 'var(--color-primary)', whiteSpace: 'nowrap', marginLeft: 12 }}>{s.price}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--color-on-surface-muted)', lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img src={MEHENDI_IMG} alt="Mehendi design" className="service-img" />
            </div>
          </div>
        </div>
      </section>

      {/* AARI SERVICES */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="grid-2 grid-2-reverse">
            <div className="grid-2-img-first">
              <img src={AARI_IMG} alt="Aari embroidery" className="service-img" />
            </div>
            <div>
              <span className="eyebrow"><i className="bi bi-gem" style={{ marginRight: 6 }}></i>Embroidery</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 8 }}>Aari Work Services</h2>
              <p style={{ color: 'var(--color-on-surface-muted)', marginBottom: 32, fontSize: 15 }}>Luxury needlework using premium gold threads, zardosi &amp; micro-beads.</p>
              {aariServices.map(s => (
                <div key={s.name} className="service-row">
                  <div className="service-icon"><i className={`bi ${s.icon}`}></i></div>
                  <div style={{ flex: 1 }}>
                    <div className="service-title-row">
                      <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: 18, color: 'var(--color-on-surface)' }}>{s.name}</h3>
                      <span style={{ fontFamily: 'var(--font-headline)', fontSize: 17, fontWeight: 600, color: 'var(--color-primary)', whiteSpace: 'nowrap', marginLeft: 12 }}>{s.price}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--color-on-surface-muted)', lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
              <p style={{ fontSize: 12, color: 'var(--color-on-surface-muted)', marginTop: 16, fontStyle: 'italic' }}>* Stitching charges extra. Prices vary by design intricacy. Contact us for a custom quote.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 64 }}>
            <span className="eyebrow">How It Works</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>Our Process</h2>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={p.num} className="card process-card">
                <div className="process-num">{p.num}</div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: 18, color: 'var(--color-primary)', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--color-on-surface-muted)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Bridal Package</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 24 }}>What's Included</h2>
              <div className="gold-divider-dot"><span className="dot" /></div>
              {['Both hands &amp; feet full Mehendi coverage','Custom motif design sketched before application','Premium organic henna paste — dark &amp; long-lasting','Aftercare kit &amp; detailed care instructions','Complimentary touch-up session if needed','Flexible scheduling around your wedding functions'].map((item, i) => (
                <div key={i} className="include-row">
                  <i className="bi bi-check-circle-fill" style={{ color: 'var(--color-gold)', fontSize: 18, flexShrink: 0, marginTop: 2 }}></i>
                  <p style={{ fontSize: 15, color: 'var(--color-on-surface-muted)' }} dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
            <div>
              <img src={BRIDE_IMG} alt="Bridal Mehendi" style={{ borderRadius: 'var(--radius-lg)', border: '3px solid var(--color-gold-light)', boxShadow: 'var(--shadow-hover)', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container faq-container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="eyebrow">Got Questions?</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>Frequently Asked</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-summary">
                  {faq.q}
                  <i className="bi bi-plus-circle" style={{ color: 'var(--color-gold)', fontSize: 20, flexShrink: 0, marginLeft: 12 }}></i>
                </summary>
                <p style={{ padding: '0 24px 20px', fontSize: 15, color: 'var(--color-on-surface-muted)', lineHeight: 1.75 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Ready to Begin?</span>
          <h2 className="headline-md" style={{ color: '#fff', margin: '12px 0 16px' }}>Book Your Consultation Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 440, margin: '0 auto 32px', fontSize: 15 }}>Let's create something unforgettable. Reach out and we'll get back to you within 24 hours.</p>
          <div className="flex-cta-center">
            <Link to="/contact" className="btn btn-gold" style={{ borderColor: '#fff', color: '#fff' }}>
              <i className="bi bi-calendar-check" style={{ marginRight: 8 }}></i>Book Now
            </Link>
            <a href="tel:+917358831918" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>
              <i className="bi bi-telephone" style={{ marginRight: 8 }}></i>Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
