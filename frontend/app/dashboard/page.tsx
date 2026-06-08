'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
    const router = useRouter()

    useEffect(() => {
        const name = sessionStorage.getItem('valam_name')
        if (!name) {
            router.push('/')
        }
    }, [router])

    return (
        <main className="valam-bg" style={{ minHeight: '100vh', padding: '40px 24px 120px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '40px' }}>
                    <div className="valam-logo" style={{ marginBottom: '16px' }}>
                        VALAM
                        <span className="valam-logo-star">★</span>
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#f5f0e8', marginBottom: '8px' }}>
                        Welcome back, {sessionStorage.getItem('valam_name')}! 👋
                    </h1>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(245,240,232,0.6)', fontSize: '1.1rem' }}>
                        Your wealth journey is progressing well
                    </p>
                </div>

                {/* Level Progress Card */}
                <div className="valam-card" style={{ padding: '32px', marginBottom: '24px', background: 'rgba(245,240,232,0.95)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', fontSize: '1.2rem' }}>
                                Level 3: Builder
                            </div>
                            <div style={{ fontFamily: "'Inter', sans-serif", color: '#5a3e28', fontSize: '0.9rem' }}>
                                280/500 points to Level 4
                            </div>
                        </div>
                        <div className="level-badge">3</div>
                    </div>
                    <div className="valam-progress-track" style={{ background: 'rgba(90,62,40,0.2)' }}>
                        <div className="valam-progress-fill" style={{ width: '56%' }}></div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#5a3e28', marginTop: '8px' }}>
                        56% to next level
                    </div>
                </div>

                {/* Quick Actions */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div className="valam-card" style={{ padding: '24px', cursor: 'pointer', background: 'rgba(245,240,232,0.95)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📊</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e' }}>Track Progress</div>
                    </div>
                    <div className="valam-card" style={{ padding: '24px', cursor: 'pointer', background: 'rgba(245,240,232,0.95)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎯</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e' }}>Set Goal</div>
                    </div>
                    <div className="valam-card" style={{ padding: '24px', cursor: 'pointer', background: 'rgba(245,240,232,0.95)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📚</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e' }}>Learn More</div>
                    </div>
                    <div className="valam-card" style={{ padding: '24px', cursor: 'pointer', background: 'rgba(245,240,232,0.95)' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💡</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e' }}>Tips</div>
                    </div>
                </div>

                {/* Goals Section */}
                <div className="valam-card" style={{ padding: '32px', marginBottom: '24px', background: 'rgba(245,240,232,0.95)' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: '#2a1a0e', marginBottom: '20px' }}>
                        Your Goal: Reach ₹1 Crore
                    </h3>
                    <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", color: '#5a3e28', fontSize: '0.95rem' }}>₹25 Lakhs saved so far</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e' }}>2.5%</span>
                    </div>
                    <div className="valam-progress-track" style={{ background: 'rgba(90,62,40,0.2)' }}>
                        <div className="valam-progress-fill" style={{ width: '2.5%' }}></div>
                    </div>
                </div>

                {/* Portfolio Overview */}
                <div className="valam-card" style={{ padding: '32px', background: 'rgba(245,240,232,0.95)' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: '#2a1a0e', marginBottom: '24px' }}>
                        Portfolio Overview
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                        {/* Simple pie chart representation */}
                        <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'conic-gradient(#c9a84c 0deg 216deg, #8b6914 216deg 324deg, #5a3e28 324deg 360deg)' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#c9a84c' }}></div>
                                <span style={{ fontFamily: "'Inter', sans-serif", color: '#2a1a0e' }}>Equity 60%</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#8b6914' }}></div>
                                <span style={{ fontFamily: "'Inter', sans-serif", color: '#2a1a0e' }}>Debt 30%</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#5a3e28' }}></div>
                                <span style={{ fontFamily: "'Inter', sans-serif", color: '#2a1a0e' }}>Gold 10%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#1a0f0a', borderTop: '1.5px solid rgba(201,168,76,0.3)', padding: '12px 24px', display: 'flex', justifyContent: 'space-around', zIndex: 10 }}>
                <Link href="/dashboard" style={{ color: '#c9a84c', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '1.5rem' }}>🏠</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem' }}>Home</span>
                </Link>
                <Link href="#" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '1.5rem' }}>📊</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem' }}>Portfolio</span>
                </Link>
                <Link href="#" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '1.5rem' }}>🎯</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem' }}>Goals</span>
                </Link>
                <Link href="#" style={{ color: 'rgba(245,240,232,0.5)', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '1.5rem' }}>👤</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem' }}>Profile</span>
                </Link>
            </div>
        </main>
    )
}