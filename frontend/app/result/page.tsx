'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
    calculateVALAM,
    type VALAMResult,
    type IncomeKey,
    type SavingsKey,
    type InvestmentsKey,
    type ExperienceKey,
} from '@/lib/valam'

export default function ResultPage() {
    const router = useRouter()
    const hasSaved = useRef(false)
    const [result, setResult] = useState<VALAMResult | null>(null)
    const [saving, setSaving] = useState(false)
    const [saveError, setSaveError] = useState<string | null>(null)

    useEffect(() => {
        if (hasSaved.current) return
        hasSaved.current = true

        const name        = sessionStorage.getItem('valam_name')
        const ageStr      = sessionStorage.getItem('valam_age')
        const income      = sessionStorage.getItem('valam_income')
        const savings     = sessionStorage.getItem('valam_savings')
        const investments = sessionStorage.getItem('valam_investments')
        const knowledge   = sessionStorage.getItem('valam_knowledge')
        const goal        = sessionStorage.getItem('valam_goal')

        if (!name || !ageStr || !income || !savings || !investments || !knowledge) {
            router.push('/onboarding/step1')
            return
        }

        const age = parseInt(ageStr, 10)
        if (isNaN(age)) {
            router.push('/onboarding/step1')
            return
        }

        let valamResult: VALAMResult
        try {
            valamResult = calculateVALAM({
                age,
                income:      income as IncomeKey,
                savingsRate: savings as SavingsKey,
                investments: investments as InvestmentsKey,
                experience:  knowledge as ExperienceKey,
            })
        } catch {
            router.push('/onboarding/step1')
            return
        }

        // Show score immediately — API save is non-blocking
        setResult(valamResult)

        setSaving(true)
        fetch('/api/save-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                age,
                income,
                savingsRate:    savings,
                investments,
                experience:     knowledge,
                goal:           goal ?? '',
                valamScore:     valamResult.valamScore,
                valamLevel:     valamResult.valamLevel,
                valamLevelName: valamResult.valamLevelName,
                breakdown: {
                    savingsScore:     valamResult.breakdown.savingsScore,
                    investmentsScore: valamResult.breakdown.investmentsScore,
                    incomeScore:      valamResult.breakdown.incomeScore,
                    experienceScore:  valamResult.breakdown.experienceScore,
                    ageScore:         valamResult.breakdown.ageScore,
                },
            }),
        })
            .then(async (res) => {
                if (!res.ok) {
                    const errorBody = await res.text()
                    console.error('Save profile failed:', res.status, errorBody)
                    throw new Error('Save failed')
                }
                const data = await res.json() as { profileId: string }
                sessionStorage.setItem('valam_result', JSON.stringify(valamResult))
                localStorage.setItem('valam_profile_id', data.profileId)
            })
            .catch((err: unknown) => {
                console.error('Save profile error:', err)
                setSaveError('Could not save your profile. Your score is still shown below.')
            })
            .finally(() => setSaving(false))
    }, [router])

    if (!result) {
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
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🏆</div>
                    <h1 className="valam-heading" style={{ fontSize: '2.5rem', color: '#f5f0e8', marginBottom: '8px' }}>
                        Your VALAM Assessment
                    </h1>
                    <p className="valam-subtext" style={{ color: 'rgba(245,240,232,0.7)' }}>
                        Here's where you stand today and your potential
                    </p>
                </div>

                {/* Non-blocking save error */}
                {saveError && (
                    <div style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', borderRadius: '12px', padding: '12px 20px', marginBottom: '24px', fontFamily: "'Inter', sans-serif", color: '#ff9999', fontSize: '0.9rem', textAlign: 'center' }}>
                        ⚠️ {saveError}
                    </div>
                )}

                {/* Score Card */}
                <div className="valam-card" style={{ padding: '40px', marginBottom: '24px', background: 'rgba(245,240,232,0.95)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: '#2a1a0e', marginBottom: '8px' }}>
                            YOUR VALAM SCORE
                        </div>
                        <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#c9a84c', marginBottom: '8px' }}>
                            {result.valamScore.toFixed(2)}
                        </div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 600, color: '#2a1a0e', marginBottom: '16px' }}>
                            Level {result.valamLevel}: {result.valamLevelName}
                        </div>
                        <div className="level-badge" style={{ display: 'inline-block' }}>
                            {result.valamLevel}
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div style={{ borderTop: '1px solid rgba(90,62,40,0.2)', paddingTop: '24px' }}>
                        <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '16px' }}>
                            Score Breakdown:
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>💰 Savings Rate</div>
                                <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{result.breakdown.savingsScore} / 5</div>
                            </div>
                            <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>💎 Investments</div>
                                <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{result.breakdown.investmentsScore} / 5</div>
                            </div>
                            <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>📈 Income</div>
                                <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{result.breakdown.incomeScore} / 5</div>
                            </div>
                            <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px' }}>
                                <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>📚 Experience</div>
                                <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{result.breakdown.experienceScore} / 4</div>
                            </div>
                            <div style={{ padding: '12px', background: 'rgba(201,168,76,0.1)', borderRadius: '8px', gridColumn: '1 / -1' }}>
                                <div style={{ fontSize: '0.85rem', color: '#5a3e28', marginBottom: '4px' }}>🎂 Age Score</div>
                                <div style={{ fontWeight: 600, color: '#2a1a0e' }}>{result.breakdown.ageScore} / 5</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Saving indicator */}
                {saving && (
                    <div style={{ textAlign: 'center', fontFamily: "'Inter', sans-serif", color: 'rgba(245,240,232,0.5)', fontSize: '0.85rem', marginBottom: '24px' }}>
                        Saving your profile...
                    </div>
                )}

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