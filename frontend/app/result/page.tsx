'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { calculateVALAM } from '@/lib/valam'

export default function ResultPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState<any>(null)

    useEffect(() => {
        const name = sessionStorage.getItem('valam_name')
        const age = sessionStorage.getItem('valam_age')
        const income = sessionStorage.getItem('valam_income')
        const savings = sessionStorage.getItem('valam_savings')
        const investments = sessionStorage.getItem('valam_investments')
        const knowledge = sessionStorage.getItem('valam_knowledge')
        const goal = sessionStorage.getItem('valam_goal')

        if (!name || !age || !income || !savings || !investments || !knowledge) {
            router.push('/')
            return
        }

        // Calculate VALAM scores
        const valamResult = calculateVALAM({
            name,
            age: parseInt(age),
            income,
            savingsRate: savings,
            currentInvestments: investments,
            knowledge,
            goal: goal || 'grow_wealth'
        })

        setResult(valamResult)
        setLoading(false)
    }, [router])

    if (loading) {
        return (
            <main className="valam-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="valam-card" style={{ padding: '48px', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '24px' }}>⏳</div>
                    <h2 className="valam-heading" style={{ marginBottom: '12px' }}>Calculating Your Financial Stage...</h2>
                    <p className="valam-subtext">Analyzing your wealth velocity and potential</p>
                </div>
            </main>
        )
    }

    return (
        <main className="valam-bg" style={{ minHeight: '100vh', padding: '60px 24px 40px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {/* Congratulations */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🏆</div>
                    <h1 className="valam-heading" style={{ fontSize: '2.5rem', color: '#f5f0e8', marginBottom: '8px' }}>
                        Your VALAM Assessment
                    </h1>
                    <p className="valam-subtext" style={{ color: 'rgba(245,240,232,0.7)' }}>
                        Here's where you stand today and your potential
                    </p>
                </div>

                {/* Current Position Card */}
                <div className="valam-card" style={{ padding: '40px', marginBottom: '24px', background: 'rgba(245,240,232,0.95)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#2a1a0e', marginBottom: '8px' }}>
                            CURRENT POSITION
                        </div>
                        <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#c9a84c', marginBottom: '8px' }}>
                            LEVEL {result?.positionLevel}
                        </div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 600, color: '#2a1a0e', marginBottom: '16px' }}>
                            {result?.positionLevelName}
                        </div>
                        <div className="level-badge" style={{ display: 'inline-block' }}>
                            {result?.positionScore}
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div style={{ borderTop: '1px solid rgba(90,62,40,0.2)', paddingTop: '24px' }}>
                        <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '16px' }}>
                            Score Breakdown:
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>💰 Wealth Velocity</div>
                                <div style={{ fontWeight: 600, color: '#2a1a0e' }}>Score calculated</div>
                            </div>
                            <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>📈 Income</div>
                                <div style={{ fontWeight: 600, color: '#2a1a0e' }}>Score calculated</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Future Potential Card */}
                <div className="valam-card" style={{ padding: '40px', marginBottom: '32px', background: 'linear-gradient(135deg, rgba(240,208,128,0.2) 0%, rgba(245,240,232,0.95) 100%)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🚀</div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#2a1a0e', marginBottom: '8px' }}>
                            FUTURE POTENTIAL
                        </div>
                        <div style={{ fontSize: '3rem', fontWeight: 700, color: '#c9a84c', marginBottom: '8px' }}>
                            LEVEL {result?.potentialLevel}
                        </div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 600, color: '#2a1a0e' }}>
                            {result?.potentialLevelName}
                        </div>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#5a3e28', marginTop: '12px', fontSize: '1.05rem' }}>
                            With consistent effort, you can reach this level!
                        </p>
                    </div>
                </div>

                {/* Dashboard Button */}
                <button
                    onClick={() => router.push('/dashboard')}
                    className="btn-gold"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '16px' }}
                >
                    Go to Dashboard →
                </button>
            </div>
        </main>
    )
}