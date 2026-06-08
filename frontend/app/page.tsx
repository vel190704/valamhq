'use client'
import Link from 'next/link'

export default function WelcomePage() {
  return (
    <main className="valam-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative', zIndex: 1 }}>
      {/* Logo */}
      <div className="valam-logo fade-up" style={{ marginBottom: '48px', fontSize: '2.2rem' }}>
        VALAM
        <span className="valam-logo-star">★</span>
      </div>

      {/* Hero text */}
      <div style={{ textAlign: 'center', maxWidth: '620px', marginBottom: '56px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#f5f0e8', lineHeight: 1.15, marginBottom: '20px' }} className="fade-up-delay-1">
          Your Journey to Wealth <br />Creation Starts Here
        </h1>
        <p className="fade-up-delay-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 0' }}>
          Investing is not about being rich, it's about being free. Start your journey with a personalised financial stage assessment and smart wealth-building strategies.
        </p>
      </div>

      {/* Feature cards */}
      <div className="fade-up-delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '620px', width: '100%', marginBottom: '40px' }}>
        <div className="valam-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(245,240,232,0.95)' }}>
          <span style={{ fontSize: '1.8rem' }}>📊</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', fontSize: '0.95rem' }}>Discover Your Financial Stage</span>
        </div>
        <div className="valam-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(245,240,232,0.95)' }}>
          <span style={{ fontSize: '1.8rem' }}>📈</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', fontSize: '0.95rem' }}>Track Your Progress</span>
        </div>
      </div>

      {/* CTA Button */}
      <Link href="/onboarding/step1" className="fade-up-delay-3" style={{ textDecoration: 'none', marginBottom: '40px' }}>
        <button className="btn-gold pulse-gold" style={{ fontSize: '1.1rem', padding: '16px 56px', borderRadius: '50px' }}>
          Get Started →
        </button>
      </Link>

      {/* Scroll hint icons */}
      <div className="fade-up-delay-4" style={{ display: 'flex', gap: '32px', opacity: 0.5 }}>
        <span style={{ fontSize: '1.8rem' }}>🔍</span>
        <span style={{ fontSize: '1.8rem' }}>⚙️</span>
        <span style={{ fontSize: '1.8rem' }}>📊</span>
      </div>
    </main>
  )
}