'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { VALAMResult } from '@/lib/valam'
import type { Recommendation } from '@/lib/recommendations'

interface DashboardData {
    name: string
    valamScore: number
    valamLevel: number
    valamLevelName: string
    goal: string
    investments: string
    breakdown: {
        savingsScore: number
        investmentsScore: number
        incomeScore: number
        experienceScore: number
        ageScore: number
    }
}

interface AllocationSlice {
    label: string
    pct: number
    color: string
}

interface ProfileAPIResponse {
    profile: {
        id: string
        name: string
        age: number
        income: string
        savingsRate: string
        investments: string
        experience: string
        goal: string
        valamScore: number
        valamLevel: number
        valamLevelName: string
        breakdown: {
            savingsScore: number
            investmentsScore: number
            incomeScore: number
            experienceScore: number
            ageScore: number
        }
        createdAt: string
    }
}

function getAllocation(level: number): AllocationSlice[] {
    if (level <= 2) return [
        { label: 'Emergency Fund', pct: 50, color: '#c9a84c' },
        { label: 'FDs',            pct: 30, color: '#8b6914' },
        { label: 'Mutual Funds',   pct: 20, color: '#5a3e28' },
    ]
    if (level <= 4) return [
        { label: 'Mutual Funds',   pct: 40, color: '#c9a84c' },
        { label: 'FDs',            pct: 25, color: '#8b6914' },
        { label: 'Stocks',         pct: 20, color: '#5a3e28' },
        { label: 'Emergency Fund', pct: 15, color: '#d4943a' },
    ]
    if (level <= 6) return [
        { label: 'Stocks',       pct: 40, color: '#c9a84c' },
        { label: 'Mutual Funds', pct: 30, color: '#8b6914' },
        { label: 'Bonds',        pct: 15, color: '#5a3e28' },
        { label: 'Gold',         pct: 15, color: '#d4943a' },
    ]
    return [
        { label: 'Stocks',        pct: 35, color: '#c9a84c' },
        { label: 'International', pct: 25, color: '#8b6914' },
        { label: 'Alternatives',  pct: 20, color: '#5a3e28' },
        { label: 'Bonds',         pct: 20, color: '#d4943a' },
    ]
}

function buildConicGradient(slices: AllocationSlice[]): string {
    let cursor = 0
    const parts: string[] = []
    for (const s of slices) {
        const start = cursor * 3.6
        cursor += s.pct
        parts.push(`${s.color} ${start}deg ${cursor * 3.6}deg`)
    }
    return `conic-gradient(${parts.join(', ')})`
}

// Level boundaries: index = level number, value = score floor
const LEVEL_FLOOR = [0, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5]
const LEVEL_STEP  = 0.5

function levelProgress(score: number, level: number): number {
    const floor = LEVEL_FLOOR[level] ?? 1.0
    return Math.min(100, Math.max(0, Math.round(((score - floor) / LEVEL_STEP) * 100)))
}

export default function DashboardPage() {
    const [data, setData]           = useState<DashboardData | null>(null)
    const [dataSource, setDataSource] = useState<'live' | 'local' | null>(null)
    const [loading, setLoading]     = useState(true)
    const [recommendation, setRecommendation] = useState<Recommendation | null>(null)

    useEffect(() => {
        async function load() {
            // Source 1: Supabase via API (uses localStorage profileId)
            const profileId = localStorage.getItem('valam_profile_id')
            if (profileId) {
                try {
                    const res = await fetch(`/api/profile?id=${encodeURIComponent(profileId)}`)
                    if (res.ok) {
                        const json = await res.json() as ProfileAPIResponse
                        const p = json.profile
                        setData({
                            name:           p.name,
                            valamScore:     p.valamScore,
                            valamLevel:     p.valamLevel,
                            valamLevelName: p.valamLevelName,
                            goal:           p.goal,
                            investments:    p.investments,
                            breakdown:      p.breakdown,
                        })
                        setDataSource('live')
                        const recRes1 = await fetch(`/api/recommendations?level=${p.valamLevel}&goal=${encodeURIComponent(p.goal || 'wealth')}`)
                        if (recRes1.ok) {
                            const recJson1 = await recRes1.json() as { recommendation: Recommendation }
                            setRecommendation(recJson1.recommendation)
                        } else {
                            console.error('Recommendation fetch failed:', recRes1.status)
                        }
                        setLoading(false)
                        return
                    }
                } catch {
                    // fall through to sessionStorage
                }
            }

            // Source 2: sessionStorage fallback
            try {
                const raw         = sessionStorage.getItem('valam_result')
                const name        = sessionStorage.getItem('valam_name')
                const goal        = sessionStorage.getItem('valam_goal')
                const investments = sessionStorage.getItem('valam_investments')
                if (raw) {
                    const parsed = JSON.parse(raw) as VALAMResult
                    setData({
                        name:           name ?? '',
                        valamScore:     parsed.valamScore,
                        valamLevel:     parsed.valamLevel,
                        valamLevelName: parsed.valamLevelName,
                        goal:           goal ?? '',
                        investments:    investments ?? '',
                        breakdown:      parsed.breakdown,
                    })
                    setDataSource('local')
                    const recLevel = parsed.valamLevel
                    const recGoal  = (goal ?? 'wealth') || 'wealth'
                    const recRes2 = await fetch(`/api/recommendations?level=${recLevel}&goal=${encodeURIComponent(recGoal)}`)
                    if (recRes2.ok) {
                        const recJson2 = await recRes2.json() as { recommendation: Recommendation }
                        setRecommendation(recJson2.recommendation)
                    } else {
                        console.error('Recommendation fetch failed:', recRes2.status)
                    }
                }
            } catch {
                // both sources failed — data stays null
            }

            setLoading(false)
        }

        void load()
    }, [])

    // --- Loading state ---
    if (loading) {
        return (
            <main className="valam-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="valam-card" style={{ padding: '48px', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '24px' }}>⏳</div>
                    <h2 className="valam-heading" style={{ marginBottom: '12px' }}>Loading your dashboard...</h2>
                </div>
            </main>
        )
    }

    // --- Error state (both sources failed) ---
    if (!data) {
        return (
            <main className="valam-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="valam-card" style={{ padding: '48px', textAlign: 'center', maxWidth: '480px' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '24px' }}>📋</div>
                    <h2 className="valam-heading" style={{ marginBottom: '12px' }}>No assessment found</h2>
                    <p className="valam-subtext" style={{ marginBottom: '32px' }}>
                        Complete your financial assessment to see your dashboard.
                    </p>
                    <Link href="/onboarding/step1" className="btn-gold" style={{ textDecoration: 'none', padding: '14px 40px' }}>
                        Retake Assessment →
                    </Link>
                </div>
            </main>
        )
    }

    const allocation = getAllocation(data.valamLevel)
    const gradient   = buildConicGradient(allocation)
    const progress   = levelProgress(data.valamScore, data.valamLevel)
    const nextLevel  = data.valamLevel < 8 ? data.valamLevel + 1 : 8

    return (
        <main className="valam-bg" style={{ minHeight: '100vh', padding: '40px 24px 120px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ marginBottom: '40px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div className="valam-logo" style={{ marginBottom: '16px' }}>
                            VALAM
                            <span className="valam-logo-star">★</span>
                        </div>
                        {/* Data source badge */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', background: 'rgba(245,240,232,0.1)', borderRadius: '20px', padding: '4px 12px', border: '1px solid rgba(201,168,76,0.3)' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: dataSource === 'live' ? '#4caf50' : '#ffc107', display: 'inline-block' }}></span>
                            <span style={{ color: '#f5f0e8' }}>{dataSource === 'live' ? 'Live' : 'Local'}</span>
                        </div>
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#f5f0e8', marginBottom: '8px' }}>
                        {data.name ? `Welcome back, ${data.name}! 👋` : 'Welcome back! 👋'}
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
                                Level {data.valamLevel}: {data.valamLevelName}
                            </div>
                            <div style={{ fontFamily: "'Inter', sans-serif", color: '#5a3e28', fontSize: '0.9rem' }}>
                                VALAM Score: {data.valamScore.toFixed(2)}
                                {data.valamLevel < 8
                                    ? ` · ${progress}% to Level ${nextLevel}`
                                    : ' · Max Level Reached'}
                            </div>
                        </div>
                        <div className="level-badge">{data.valamLevel}</div>
                    </div>
                    <div className="valam-progress-track" style={{ background: 'rgba(90,62,40,0.2)' }}>
                        <div className="valam-progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#5a3e28', marginTop: '8px' }}>
                        {progress}% to next level
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
                        Your Goal: {data.goal || '—'}
                    </h3>
                    <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", color: '#5a3e28', fontSize: '0.95rem' }}>
                            Current investments: {data.investments || '—'}
                        </span>
                    </div>
                </div>

                {/* Score Breakdown */}
                <div className="valam-card" style={{ padding: '32px', marginBottom: '24px', background: 'rgba(245,240,232,0.95)' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: '#2a1a0e', marginBottom: '20px' }}>
                        Score Breakdown
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>💰 Savings Rate</div>
                            <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{data.breakdown.savingsScore} / 5</div>
                        </div>
                        <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>💎 Investments</div>
                            <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{data.breakdown.investmentsScore} / 5</div>
                        </div>
                        <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>📈 Income</div>
                            <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{data.breakdown.incomeScore} / 5</div>
                        </div>
                        <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>📚 Experience</div>
                            <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{data.breakdown.experienceScore} / 4</div>
                        </div>
                        <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px', gridColumn: '1 / -1' }}>
                            <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>🎂 Age Score</div>
                            <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{data.breakdown.ageScore} / 5</div>
                        </div>
                    </div>
                </div>

                {/* Your Roadmap */}
                {!recommendation ? (
                    <div style={{
                        background: 'rgba(201,168,76,0.05)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        borderRadius: '16px',
                        padding: '32px',
                        marginBottom: '24px',
                        textAlign: 'center',
                        color: 'rgba(245,240,232,0.4)',
                        fontFamily: "'Inter', sans-serif",
                    }}>
                        Loading your personalised roadmap...
                    </div>
                ) : (
                    <div className="valam-card" style={{ padding: '32px', marginBottom: '24px', background: 'rgba(245,240,232,0.95)' }}>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: '#2a1a0e', marginBottom: '20px' }}>
                            Your Roadmap
                        </h3>

                        {/* Headline */}
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#c9a84c', marginBottom: '12px' }}>
                            {recommendation.headline}
                        </div>

                        {/* Summary */}
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#5a3e28', marginBottom: '24px' }}>
                            {recommendation.summary}
                        </p>

                        {/* Action Steps */}
                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '12px', fontSize: '0.95rem' }}>
                                Your Next Steps
                            </div>
                            {recommendation.steps.map((step, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                                    <div style={{ minWidth: '28px', height: '28px', borderRadius: '50%', background: '#c9a84c', color: '#2a1a0e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.85rem' }}>
                                        {i + 1}
                                    </div>
                                    <span style={{ fontFamily: "'Inter', sans-serif", color: '#2a1a0e', fontSize: '0.95rem', paddingTop: '4px' }}>
                                        {step}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Recommended Products */}
                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '10px', fontSize: '0.95rem' }}>
                                Recommended For You
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {recommendation.products.map((product) => (
                                    <span key={product} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#c9a84c', border: '1px solid #c9a84c', borderRadius: '20px', padding: '4px 14px', background: 'transparent' }}>
                                        {product}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Milestone */}
                        <div style={{ background: 'rgba(90,62,40,0.15)', borderRadius: '10px', padding: '16px', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <span style={{ fontSize: '1.3rem' }}>🏆</span>
                            <div>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', fontSize: '0.85rem', marginBottom: '4px' }}>
                                    Next Milestone
                                </div>
                                <div style={{ fontFamily: "'Inter', sans-serif", color: '#5a3e28', fontSize: '0.9rem' }}>
                                    {recommendation.milestone}
                                </div>
                            </div>
                        </div>

                        {/* Warning */}
                        <div style={{ background: 'rgba(220,53,69,0.08)', border: '1px solid rgba(220,53,69,0.2)', borderRadius: '10px', padding: '16px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <span style={{ fontSize: '1.3rem' }}>⚠️</span>
                            <div>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', fontSize: '0.85rem', marginBottom: '4px' }}>
                                    Common Mistake to Avoid
                                </div>
                                <div style={{ fontFamily: "'Inter', sans-serif", color: '#5a3e28', fontSize: '0.9rem' }}>
                                    {recommendation.warning}
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.9rem', color: '#5a3e28', textAlign: 'center', fontStyle: 'italic' }}>
                            This is educational guidance based on your inputs. Please consult a certified financial planner before making actual investments.
                        </p>
                    </div>
                )}

                {/* Portfolio Overview */}
                <div className="valam-card" style={{ padding: '32px', background: 'rgba(245,240,232,0.95)' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600, color: '#2a1a0e', marginBottom: '24px' }}>
                        Portfolio Overview
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', marginBottom: '24px' }}>
                        <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: gradient }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {allocation.map((s) => (
                                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: s.color }}></div>
                                    <span style={{ fontFamily: "'Inter', sans-serif", color: '#2a1a0e' }}>{s.label} {s.pct}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.9rem', color: '#5a3e28', textAlign: 'center', fontStyle: 'italic' }}>
                        This is a model allocation for educational purposes based on your inputs.
                        Please consult a certified financial planner before making actual investments.
                    </p>
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