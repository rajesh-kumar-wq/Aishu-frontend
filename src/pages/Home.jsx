import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { HERO_IMG, BRIDE_IMG, MEHENDI_IMG, AARI_IMG } from '../assets/images'

function useFadeIn(ref) {
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fi')
    if (!els) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)' } })
    }, { threshold: 0.12 })
    els.forEach(el => {
      el.style.opacity = 0; el.style.transform = 'translateY(24px)'
      el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
}

export default function Home() {
  const ref = useRef()
  useFadeIn(ref)

  return (
    <main ref={ref}>
      {/* HERO */}
      <section className="hero-section">
        <img src={HERO_IMG} alt="Bridal Mehendi" className="hero-bg-img" />
        <div className="container fi" style={{ position: 'relative', zIndex: 1, paddingBlock: '80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(78,6,23,0.08)', border: '1px solid var(--color-primary-container)', borderRadius: 'var(--radius-full)', padding: '6px 16px', marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Nagercoil's Premier Artisan Studio</span>
          </div>
          <h1 className="display-lg" style={{ color: 'var(--color-primary)', marginBottom: 16, maxWidth: 620 }}>
            Beautiful Designs.<br /><em>Timeless Impression.</em>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--color-on-surface-muted)', maxWidth: 520, marginBottom: 36, lineHeight: 1.7 }}>
            Bespoke Mehendi &amp; Aari artistry crafted for your most celebrated moments.
          </p>
          <div className="flex-cta">
            <Link to="/contact" className="btn btn-primary">Book a Consultation →</Link>
            <Link to="/gallery" className="btn btn-outline">View Gallery</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--color-primary)', padding: '48px 0' }}>
        <div className="container">
          <div className="grid-4-stats">
            {[['10+','Years of Mastery'],['500+','Brides Adorned'],['100%','Organic Henna'],['★ 5.0','Client Rating']].map(([n, l]) => (
              <div key={l} className="fi">
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(28px,3vw,38px)', fontWeight: 700, color: 'var(--color-secondary-light)' }}>{n}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, color: '#fff', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="fi">
              <img src={BRIDE_IMG} alt="Bride with mehendi" style={{ borderRadius: 'var(--radius-lg)', border: '3px solid var(--color-gold-light)', boxShadow: 'var(--shadow-hover)' }} />
            </div>
            <div className="fi">
              <span className="eyebrow">Our Heritage</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 16 }}>Ancestral Craft,<br /><em>Modern Elegance</em></h2>
              <div className="gold-divider-dot"><span className="dot" /></div>
              <p style={{ fontSize: 17, color: 'var(--color-on-surface-muted)', marginBottom: 16, lineHeight: 1.75 }}>
                Located in the heart of Nagercoil, Aishu Petals &amp; Patterns is a premier studio specialising in luxury Mehendi and exquisite Aari embroidery.
              </p>
              <p style={{ fontSize: 15, color: 'var(--color-on-surface-muted)', marginBottom: 32, lineHeight: 1.7 }}>
                Our artisans dedicate countless hours to perfecting intricate floral motifs, geometric precision, and personalised storytelling within every design.
              </p>
              <Link to="/about" className="btn btn-outline">Discover Our Process →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="text-center fi" style={{ marginBottom: 64 }}>
            <span className="eyebrow">What We Offer</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>Bespoke Services</h2>
            <p style={{ color: 'var(--color-on-surface-muted)', maxWidth: 480, margin: '8px auto 0' }}>Tailored artistry for every occasion, crafted with precision and passion.</p>
          </div>
          <div className="grid-3">
            {[
              { icon: 'bi-flower1',  title: 'Bridal Mehendi',  desc: 'Elaborate, full-coverage designs telling your unique love story.', price: 'From ₹5,000' },
              { icon: 'bi-flower2',  title: 'Arabic Mehendi',  desc: 'Flowing, bold floral and vine patterns with elegant spacing.', price: 'From ₹1,000' },
              { icon: 'bi-gem',      title: 'Bridal Aari Work',desc: 'Heavy, intricate gold and bead embroidery for bridal blouses.', price: 'From ₹8,000' },
            ].map((s, i) => (
              <div key={s.title} className="card fi">
                <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-surface-high)', fontSize: 56, color: 'var(--color-primary)' }}>
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <div className="card-body">
                  <h3 className="headline-sm" style={{ color: 'var(--color-primary)', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: 'var(--color-on-surface-muted)', fontSize: 14, marginBottom: 16 }}>{s.desc}</p>
                  <span className="chip">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="text-center fi" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Artistry Gallery</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>Our Recent Work</h2>
          </div>
          <div className="grid-3">
            {[[MEHENDI_IMG,'Arabic Mehendi'],[AARI_IMG,'Aari Embroidery'],[BRIDE_IMG,'Bridal Portrait']].map(([src, cap]) => (
              <div key={cap} className="gallery-item fi">
                <img src={src} alt={cap} />
                <div className="gallery-overlay"><span className="gallery-caption">{cap}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/gallery" className="btn btn-outline">Explore Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="text-center fi" style={{ marginBottom: 56 }}>
            <span className="eyebrow">Client Love</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)' }}>Words from Our Brides</h2>
          </div>
          <div className="grid-3">
            {[
              { quote: "Aishu's artistry is unmatched. The bespoke Mehendi pattern told our love story beautifully. I felt like royalty.", author: 'Priya S.', service: 'Bridal Mehendi' },
              { quote: "The Aari embroidery on my blouse was a true masterpiece. The golden threads caught the light perfectly.", author: 'Ananya V.', service: 'Custom Aari Work' },
              { quote: "The consultation alone was so luxurious. The final result exceeded all expectations.", author: 'Meera D.', service: 'Bridal Consultation' },
            ].map(t => (
              <div key={t.author} className="testimonial-card fi">
                <div className="stars">★★★★★</div>
                <p style={{ fontStyle: 'italic', fontSize: 14, lineHeight: 1.75, color: 'var(--color-on-surface-muted)', marginTop: 32, marginBottom: 20 }}>"{t.quote}"</p>
                <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: 14 }}>{t.author}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>{t.service}</div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link to="/testimonials" className="btn btn-gold">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: 'var(--color-primary)', padding: '96px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Ready to Begin?</span>
          <h2 className="headline-md" style={{ color: '#fff', margin: '12px 0 16px' }}>Let Us Adorn Your Special Moment</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 480, margin: '0 auto 32px', fontSize: 15 }}>Book a consultation with Aishu and let's create something unforgettable together.</p>
          <Link to="/contact" className="btn btn-gold" style={{ borderColor: '#fff', color: '#fff' }}>
            <i className="bi bi-calendar-check" style={{ marginRight: 8 }}></i>Book Your Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}
