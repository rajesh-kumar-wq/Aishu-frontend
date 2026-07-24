import { useState } from 'react'
import { Link } from 'react-router-dom'

const MEHENDI_IMG = 'https://lh3.googleusercontent.com/aida/AP1WRLvCVNbQE1fpOKt_JRJk1wyepbja_TPe1wEzb3pX4h81egLJjfs_6Y5Yp2xv_LqvBKNHSVxOvPo76aA0gUN6VR__w9thFleClxYDAwAYzX-ESsMMmceYM4aRPdZIKBWINlV7liGCiZZnJ3w-Rp6BxGcmbMtfyVLNWJLTtUlkd7SAKbVapsnY-re1qI870uygufeVjdhCh3GtRVrELSF74aR_LIvX_c8LSe4EAFi3Z9gymXoKcS5NIY7iDqk'
const AARI_IMG   = 'https://lh3.googleusercontent.com/aida/AP1WRLsieGzmQVy3Yv29dTVosdPOt79ZakpUvkBF-6PBS0ghzhwguQ51oaUQSrdSFU_Gqg9nwllhLcgXGpQvP_MWiXptxDl9H3a7w9iiPawhMeCE2gNX2wL44diX-HoPPn-UEqcC-ojW7ocYvbqET-IcapdZaoXx7BMwPJukCNvPHt1s70z4pN15kjzOm5eIAjqZCnxdvW4MEKkYk_T5o63EA23lcE3-jRcn-cbSr0Rhhg3TxHcf1_okX24wnX0z'
const BRIDE_IMG  = 'https://lh3.googleusercontent.com/aida/AP1WRLv-9LL7exrov0fFSD0cDV65DF3sBy64IomXHKQR-7Zf0uKMFw2CJDMwoh6804SSTdxIF60ORIp5-oF8KrhOsDhB9IQtTf6WZYAQ-d4z21Ff4segx6ZXhE7dpJbyoRzSW-cjd3mFepvGvRRJV2Ii428jwATKpcCbhIegemYlJ_t7-9LYG56oJamNKYq9nB5scrgeTPzxcNo1olBk6hTEYUuiuIIDfKc5v0rirUROL4uvCB-SNgETTKO-s6i4'
const HERO_IMG   = 'https://lh3.googleusercontent.com/aida/AP1WRLvG33XbkkdOxhPCiuu21z-oMEZ080SrnmI5rS05Uax4QxXuYHWnkEXIGUHqaYmlJMTjcnGk2-ArIKwlIWmqN--0LjeG-Yx2R2UbtPNNCglO0cp-MXgEXtF9HKYg7Zvwxciyjct0ibrPZ5UxRDbp6YM42r3536hrM7Hz987eyJLKUJdlQpNS0VE2JHCefWiN__MQkC7Zux8EVtqtINdgR_HQ4H3yDADzou30QKOMAcQLzhIkuOngoknzdDkw'

const ALL_ITEMS = [
  { src: MEHENDI_IMG, caption: 'Bridal Elegance',    tag: 'Mehendi',    cat: 'mehendi', desc: 'Full bridal coverage with intricate floral motifs' },
  { src: AARI_IMG,    caption: 'Golden Threads',     tag: 'Aari Work',  cat: 'aari',    desc: 'Heavy zardosi work on maroon silk blouse' },
  { src: BRIDE_IMG,   caption: 'Royal Heritage',     tag: 'Bridal',     cat: 'bridal',  desc: 'Portrait of a radiant bride adorned with mehendi' },
  { src: HERO_IMG,    caption: 'Classic Beauty',     tag: 'Mehendi',    cat: 'mehendi', desc: 'Cinematic bridal hands photography' },
  { src: MEHENDI_IMG, caption: 'Contemporary Lines', tag: 'Engagement', cat: 'mehendi', desc: 'Modern minimal Arabic style for engagement' },
  { src: AARI_IMG,    caption: "Artisan's Touch",    tag: 'Aari Work',  cat: 'aari',    desc: 'Semi-bridal Aari neckline embroidery' },
  { src: BRIDE_IMG,   caption: 'Timeless Grace',     tag: 'Bridal',     cat: 'bridal',  desc: 'Full bridal look with heritage Mehendi' },
  { src: MEHENDI_IMG, caption: 'Festival Spirit',    tag: 'Mehendi',    cat: 'mehendi', desc: 'Festive henna for Diwali celebrations' },
  { src: AARI_IMG,    caption: 'Silk & Gold',        tag: 'Aari Work',  cat: 'aari',    desc: 'Intricate cutdana bead work on silk blouse' },
]
const FILTERS = ['All', 'Mehendi', 'Aari', 'Bridal']

const categories = [
  { icon: 'bi-person-heart', title: 'Bridal Mehendi',  count: '200+ designs', desc: 'Full-coverage traditional and contemporary bridal henna' },
  { icon: 'bi-flower1',      title: 'Arabic Style',    count: '150+ designs', desc: 'Flowing floral patterns with elegant negative space' },
  { icon: 'bi-gem',          title: 'Aari Embroidery', count: '100+ pieces',  desc: 'Luxury bead and thread work for bridal blouses' },
  { icon: 'bi-diamond',      title: 'Engagements',     count: '80+ designs',  desc: 'Sophisticated designs for your ring ceremony' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.cat === active.toLowerCase() || i.tag.toLowerCase().includes(active.toLowerCase()))

  return (
    <main>

      {/* HERO */}
      <section className="page-hero-section" style={{ padding: 0 }}>
        <img src={HERO_IMG} alt="Gallery hero" className="hero-bg-img" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,248,246,0.95) 50%, rgba(255,248,246,0.4) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBlock: '100px' }}>
          <span className="eyebrow fade-up">Our Portfolio</span>
          <h1 className="display-lg fade-up" style={{ color: 'var(--color-primary)', marginBottom: 20, maxWidth: 600 }}>
            Artistry<br /><em>Gallery</em>
          </h1>
          <div className="gold-divider-dot" style={{ maxWidth: 320, marginBottom: 24 }}><span className="dot" /></div>
          <p className="fade-up delay-1" style={{ fontSize: 18, color: 'var(--color-on-surface-muted)', maxWidth: 520, marginBottom: 40, lineHeight: 1.8 }}>
            Explore our curated collection of bespoke Mehendi designs and intricate Aari embroidery.
          </p>
          <div className="flex-cta">
            <Link to="/contact" className="btn btn-primary">Book Your Design →</Link>
            <a href="#gallery-grid" className="btn btn-outline">Browse Gallery</a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-sm" style={{ background: 'var(--color-primary)' }}>
        <div className="container">
          <div className="grid-4">
            {categories.map(c => (
              <div key={c.title} style={{ textAlign: 'center', padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 12, color: 'var(--color-gold-light)' }}>
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: 18, color: '#fff', marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: 'var(--color-gold-light)', letterSpacing: '0.08em', marginBottom: 8 }}>{c.count}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="section" id="gallery-grid">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Browse By Category</span>
            <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 32 }}>Our Work</h2>
            <div className="filter-buttons" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              {FILTERS.map(f => (
                <button key={f} onClick={() => setActive(f)}
                  className={`filter-btn ${active === f ? 'active' : ''}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="gallery-grid-layout">
            {items.map((item, i) => (
              <div key={i} className="gallery-item">
                <img src={item.src} alt={item.caption} />
                <div className="gallery-overlay">
                  <div>
                    <div className="gallery-caption">{item.caption}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="section-sm" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Behind the Art</span>
              <h2 className="headline-md" style={{ color: 'var(--color-primary)', marginBottom: 16 }}>Every Design is a Story</h2>
              <div className="gold-divider-dot"><span className="dot" /></div>
              <p style={{ fontSize: 16, color: 'var(--color-on-surface-muted)', lineHeight: 1.85, marginBottom: 20 }}>
                Each piece in this gallery began as a conversation. A bride's vision, a mother's dream, a woman's personal aesthetic — all translated into henna or thread by Aishu's expert hands.
              </p>
              <p style={{ fontSize: 16, color: 'var(--color-on-surface-muted)', lineHeight: 1.85, marginBottom: 32 }}>
                No two designs are ever repeated. Every pattern is uniquely composed to complement your outfit, jewellery, skin tone, and the story you want to wear.
              </p>
              <Link to="/services" className="btn btn-outline">See All Services →</Link>
            </div>
            <div>
              <img src={AARI_IMG} alt="Artisan at work" style={{ borderRadius: 'var(--radius-lg)', border: '3px solid var(--color-gold-light)', boxShadow: 'var(--shadow-hover)', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="section">
        <div className="container">
          <div className="instagram-card">
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-gold-light)' }}>Follow Our Journey</span>
              <h2 className="headline-md" style={{ color: '#fff', marginBottom: 16 }}>Daily Inspiration on Instagram</h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
                Behind-the-scenes studio moments, new design reveals, and recent bridal work — follow @AishuPetals and never miss our latest artistry.
              </p>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn btn-gold" style={{ borderColor: '#fff', color: '#fff' }}>
                <i className="bi bi-instagram" style={{ marginRight: 8 }}></i>
                Follow @AishuPetals
              </a>
            </div>
            <div className="insta-grid">
              {[MEHENDI_IMG, AARI_IMG, BRIDE_IMG, HERO_IMG, MEHENDI_IMG, AARI_IMG].map((src, i) => (
                <div key={i} style={{ aspectRatio: '1', overflow: 'hidden' }}>
                  <img src={src} alt="Instagram post" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Love What You See?</span>
          <h2 className="headline-md" style={{ color: 'var(--color-primary)', margin: '12px 0 16px' }}>Let's Create Your Design</h2>
          <p style={{ color: 'var(--color-on-surface-muted)', maxWidth: 440, margin: '0 auto 32px', fontSize: 15 }}>
            Book a consultation and Aishu will craft a design exclusively for you.
          </p>
          <div className="flex-cta-center">
            <Link to="/contact" className="btn btn-primary">
              <i className="bi bi-calendar-check" style={{ marginRight: 8 }}></i>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
