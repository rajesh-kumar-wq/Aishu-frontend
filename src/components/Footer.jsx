import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)', color: '#fff', paddingBlock: '80px 24px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '64px', paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.15)', marginBottom: '24px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-headline)', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              Aishu Petals &amp; Patterns
            </div>
            <p style={{ fontSize: '13px', opacity: 0.75, lineHeight: 1.7, maxWidth: 260, marginBottom: '20px' }}>
              Elevating traditional artistry for the modern connoisseur. Bespoke Mehendi &amp; Aari work in Nagercoil, Tamil Nadu.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: 'bi-instagram', href: '#', label: 'Instagram' },
                { icon: 'bi-facebook', href: '#', label: 'Facebook' },
                { icon: 'bi-telephone', href: 'tel:+917358831918', label: 'Phone' },
              ].map((item, i) => (
                <a key={i} href={item.href} aria-label={item.label}
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s, border-color 0.3s', color: '#fff', fontSize: '16px' }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.borderColor = 'var(--color-gold)' }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}>
                  <i className={`bi ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Navigate', links: [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/gallery', 'Gallery']] },
            { title: 'More', links: [['/testimonials', 'Testimonials'], ['/contact', 'Contact'], ['/contact', 'Book Now']] },
            { title: 'Contact', links: [['tel:+917358831918', '+91 73588 31918'], ['#', 'Nagercoil, Tamil Nadu'], ['#', 'Mon–Sat: 10am–7pm'], ['#', 'Sun: By Appointment']] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold-light)', marginBottom: '20px' }}>
                {col.title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {col.links.map(([href, label]) => (
                  <li key={label}>
                    <Link to={href} style={{ fontSize: '14px', opacity: 0.8, textDecoration: 'none', color: '#fff', transition: 'opacity 0.2s' }}
                      onMouseOver={e => e.currentTarget.style.opacity = 1}
                      onMouseOut={e => e.currentTarget.style.opacity = 0.8}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', opacity: 0.55 }}>
          <span>© 2024 Aishu Petals &amp; Patterns. All Rights Reserved.</span>
          <span>Crafted with ♥ in Nagercoil</span>
        </div>
      </div>
    </footer>
  )
}
