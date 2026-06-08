'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const goals = [
    { value: 'foundation', icon: '🌱', title: 'Build My Foundation', desc: 'Emergency fund, insurance, basics' },
    { value: 'grow_wealth', icon: '📈', title: 'Grow My Wealth', desc: 'Increase portfolio value' },
    { value: 'first_crore', icon: '🎯', title: 'Reach First ₹1 Crore', desc: 'Milestone wealth building' },
    { value: 'financial_freedom', icon: '🔓', title: 'Achieve Financial Freedom', desc: 'Passive income > expenses' },
    { value: 'retire_comfortably', icon: '🏖️', title: 'Retire Comfortably', desc: 'Peaceful retirement planning' },
    { value: 'manage_better', icon: '📊', title: 'Manage Investments Better', desc: 'Optimize existing portfolio' },
]

export default function Step4Page() {
    const router = useRouter()
    const [selectedGoal, setSelectedGoal] = useState('')

    const handleCalculate = () => {
        if (!selectedGoal) {
            alert('Please select your goal')
            return
        }
        sessionStorage.setItem('valam_goal', selectedGoal)
        router.push('/result')
    }

    return (
        <main className="valam-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
            <div className="valam-card" style={{ maxWidth: '680px', width: '100%', padding: '48px 40px' }}>
                {/* Progress dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
                    <div className="step-dot done"></div>
                    <div className="step-dot done"></div>
                    <div className="step-dot done"></div>
                    <div className="step-dot active"></div>
                </div>

                {/* Header */}
                <h1 className="valam-heading" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '12px' }}>
                    What's Your Primary Goal?
                </h1>
                <p className="valam-subtext" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Choose the goal that matters most to you right now
                </p>

                {/* Goal Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
                    {goals.map((goal) => (
                        <div
                            key={goal.value}
                            onClick={() => setSelectedGoal(goal.value)}
                            className="valam-card"
                            style={{
                                padding: '20px',
                                cursor: 'pointer',
                                background: selectedGoal === goal.value ? 'rgba(201,168,76,0.15)' : 'rgba(245,240,232,0.95)',
                                border: selectedGoal === goal.value ? '2px solid #c9a84c' : '1.5px solid #c9a84c',
                                transition: 'all 0.2s',
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{goal.icon}</div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '4px' }}>
                                {goal.title}
                            </div>
                            <div style={{ fontFamily: "'Inter', sans-serif", color: '#5a3e28', fontSize: '0.85rem' }}>
                                {goal.desc}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Calculate Button */}
                <button onClick={handleCalculate} className="btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '16px' }}>
                    Calculate My Stage →
                </button>
            </div>
        </main>
    )
}