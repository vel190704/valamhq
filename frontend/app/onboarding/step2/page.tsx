'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const experiences = [
    { value: 'beginner',     label: 'Beginner',     desc: 'No Investments' },
    { value: 'learning',     label: 'Learning',     desc: 'FDs, Mutual Funds' },
    { value: 'intermediate', label: 'Intermediate', desc: 'Stocks, ETFs, Bonds' },
    { value: 'advanced',     label: 'Advanced',     desc: 'Crypto, Options, Global Markets' },
]

export default function Step2Page() {
    const router = useRouter()
    const [selected, setSelected] = useState('')

    const handleContinue = () => {
        if (!selected) {
            alert('Please select your experience level')
            return
        }
        sessionStorage.setItem('valam_knowledge', selected)
        router.push('/onboarding/step3')
    }

    return (
        <main className="valam-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
            <div className="valam-card" style={{ maxWidth: '580px', width: '100%', padding: '48px 40px' }}>
                {/* Progress dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
                    <div className="step-dot done"></div>
                    <div className="step-dot active"></div>
                    <div className="step-dot"></div>
                    <div className="step-dot"></div>
                </div>

                {/* Header */}
                <h1 className="valam-heading" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '12px' }}>
                    Your Investing Experience
                </h1>
                <p className="valam-subtext" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Select the option that best describes you
                </p>

                {/* Options */}
                <div style={{ marginBottom: '32px' }}>
                    {experiences.map((exp) => (
                        <div
                            key={exp.value}
                            onClick={() => setSelected(exp.value)}
                            className={`option-row ${selected === exp.value ? 'selected' : ''}`}
                            style={{
                                background: selected === exp.value ? 'rgba(201,168,76,0.1)' : 'transparent',
                                cursor: 'pointer',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <span style={{ fontSize: '1.5rem' }}>📚</span>
                                <div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e' }}>
                                        {exp.label}
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", color: '#5a3e28', fontSize: '0.9rem' }}>
                                        {exp.desc}
                                    </div>
                                </div>
                            </div>
                            {selected === exp.value && <span style={{ color: '#c9a84c', fontSize: '1.5rem' }}>✓</span>}
                        </div>
                    ))}
                </div>

                {/* Continue Button */}
                <button onClick={handleContinue} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                    Continue →
                </button>
            </div>
        </main>
    )
}