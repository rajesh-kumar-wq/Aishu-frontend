import { Link } from 'react-router-dom'

const featured = [
  { quote: "Aishu's artistry is unmatched. The bespoke Mehendi pattern she designed for my wedding told our love story beautifully. It was intricate, dark, and lasted for weeks. I felt like royalty.", author: 'Priya S.', service: 'Bridal Mehendi', location: 'Nagercoil' },
  { quote: "The Aari embroidery on my blouse was a true masterpiece. The attention to detail and the golden threads caught the light perfectly. I received compliments all evening. Highly recommend!", author: 'Ananya V.', service: 'Custom Aari Work', location: 'Chennai' },
]

const reviews = [
  { quote: "I wanted something modern and minimal for my engagement. Aishu perfectly understood my vision and created a delicate, beautiful design that felt so 'me'. The stain turned out incredibly dark!", author: 'Kavya M.', service: 'Minimalist Henna', rating: 5 },
  { quote: "We hired her for a pre-wedding Mehendi party. She was professional, swift, and her designs were loved by everyone — from the teenagers to the grandmothers. A wonderful experience.", author: 'Lakshmi R.', service: 'Guest Henna Services', rating: 5 },
  { quote: "The consultation alone was so luxurious. She sketched ideas while discussing my outfit and jewelry. It made me so confident for my wedding day. The result exceeded all expectations!", author: 'Meera D.', service: 'Bridal Consultation', rating: 5 },
  { quote: "My bridal blouse was transformed into a piece of art. The Aari work is so detailed and the colours are stunning. Every stitch was perfect. Worth every rupee and more!", author: 'Divya S.', service: 'Bridal Aari Blouse', rating: 5 },
  { quote: "Festival henna has never looked this good. Aishu created a beautiful Diwali design that was quick and absolutely gorgeous. My family was so impressed!", author: 'Preethi M.', service: 'Festival Henna', rating: 5 },
  { quote: "Booked for my sister's engagement. She was so patient, incredibly talented, and made my sister feel like a princess. The Mehendi was the talk of the evening!", author: 'Raji K.', service: 'Engagement Mehendi', rating: 5 },
]

const HERO_IMG = 'https://lh3.googleusercontent.com/aida/AP1WRLvG33XbkkdOxhPCiuu21z-oMEZ080SrnmI5rS05Uax4QxXuYHWnkEXIGUHqaYmlJMTjcnGk2-ArIKwlIWmqN--0LjeG-Yx2R2UbtPNNCglO0cp-MXgEXtF9HKYg7Zvwxciyjct0ibrPZ5UxRDbp6YM42r3536hrM7Hz987eyJLKUJdlQpNS0VE2JHCefWiN__MQkC7Zux8EVtqtINdgR_HQ4H3yDADzou30QKOMAcQLzhIkuOngoknzdDkw'

export default function Testimonials() {
  return (
    <main>

      {/* HERO */}
      <section className="page-hero-section">
        <div style={{ position: 'absolute', right: '-80px', top: '-80px', width: 500, height: 500, borderRadius: '50%', border: '1px solid var(--color-gold)', opacity: 0.15, pointerEvents: 'none' }} />
        <div className="container" style={{ paddingBlock: '100px', textAlign: 'center' }}>
          <span className="eyebrow fade-up">Client Love</span>
          <h1 className="display-lg fade-up" style={{ color: 'var(--color-primary)', marginBottom: 20 }}>
            Words of Love
          </h1>
          <div className="gold-divider-dot" style={{ maxWidth: 400, margin: '0 auto 24px' }}><span className="dot" /></div>
          <p className="fade-up delay-1" style={{ fontSize: 18, color: 'var(--color-on-surface-muted)', maxWidth: 580, margin: '0 auto 40px', lineHeight: 1.8 }}>
            Every review here is a story — a bride's joy, a family's pride, a moment made unforgettable. Hear from the women who trusted Aishu with their most cherished occasions.
          </p>
          <div className="flex-cta-center">
            <Link to="/contact" className="btn btn-primary">Book Your Experience →</Link>
            <Link to="/gallery" className="btn btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--color-primary)', padding: '48px 0' }}>
        <div className="container">
          <div className="grid-4-stats">
            {[['★ 5.0', 'Average Rating'], ['500+', 'Happy Clients'], ['100%', 'Recommend Us'], ['10+', 'Years Trusted']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: 'var(--color-secondary-light)' }}>{n}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, color: '#fff', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SPOTLIGHT */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="eyebrow">Client Spotlight</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>"An Absolute Dream"</h2>
          </div>
          <div className="grid-2">
            {featured.map(t => (
              <div key={t.author} className="featured-testimonial">
                <div className="quote-mark">"</div>
                <div style={{ color: 'var(--color-gold)', letterSpacing: 2, fontSize: 18, marginBottom: 24 }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--font-headline)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.75, color: 'var(--color-on-surface-muted)', marginBottom: 32, position: 'relative', zIndex: 1 }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div className="avatar">
                    {t.author[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--color-primary)' }}>— {t.author}</div>
                    <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginTop: 2 }}>{t.service} · {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="eyebrow">More Happy Clients</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>More Words of Love</h2>
            <p style={{ color: 'var(--color-on-surface-muted)', maxWidth: 480, margin: '12px auto 0' }}>Each review is a story of a moment made unforgettable.</p>
          </div>
          <div className="grid-3">
            {reviews.map(t => (
              <div key={t.author} className="testimonial-card">
                <div className="stars">{'★'.repeat(t.rating)}</div>
                <p style={{ fontStyle: 'italic', fontSize: 14, lineHeight: 1.8, color: 'var(--color-on-surface-muted)', marginTop: 32, marginBottom: 20 }}>"{t.quote}"</p>
                <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: 14 }}>{t.author}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginTop: 4 }}>{t.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="eyebrow">Why They Choose Us</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>Built on Trust</h2>
          </div>
          <div className="grid-4">
            {[
              { icon: 'bi-flower1',        title: '100% Organic',      desc: 'Pure natural henna — no chemicals, no allergies, no compromise' },
              { icon: 'bi-brush',          title: 'Bespoke Designs',   desc: 'Every pattern created fresh — no templates, no repetition' },
              { icon: 'bi-clock-history',  title: 'Always On Time',    desc: 'Professional punctuality for weddings and events alike' },
              { icon: 'bi-heart',          title: 'After-care Support', desc: 'Detailed guidance to ensure your henna stays dark and beautiful' },
            ].map(b => (
              <div key={b.title} className="card value-card">
                <div style={{ fontSize: 40, marginBottom: 16, color: 'var(--color-primary)' }}>
                  <i className={`bi ${b.icon}`}></i>
                </div>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: 17, color: 'var(--color-primary)', marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--color-on-surface-muted)', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARE YOUR STORY CTA */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="instagram-card">
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Join Our Story</span>
              <h2 className="headline-md" style={{ color: '#fff', marginBottom: 16 }}>Become Our Next Happy Bride</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
                Join hundreds of brides who have trusted Aishu with their most special moments. Book a consultation and let's create your story together.
              </p>
              <div className="flex-cta">
                <Link to="/contact" className="btn btn-gold" style={{ borderColor: '#fff', color: '#fff' }}>
                  <i className="bi bi-calendar-check" style={{ marginRight: 8 }}></i>
                  Book Now
                </Link>
                <Link to="/gallery" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>View Gallery</Link>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(60px,8vw,100px)', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>★</div>
              <div style={{ fontFamily: 'var(--font-headline)', fontSize: 48, fontWeight: 700, color: '#fff' }}>5.0</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 }}>Average Rating · 500+ Reviews</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
