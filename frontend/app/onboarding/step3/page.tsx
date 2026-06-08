'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const incomeRanges = ['< ₹3L', '₹3L - ₹8L', '₹8L - ₹15L', '₹15L - ₹30L', '₹30L+']
const savingsRanges = ['< 5%', '5-15%', '15-25%', '25-35%', '35%+']
const investmentRanges = ['< ₹10k', '₹10k - ₹1L', '₹1L - ₹5L', '₹5L - ₹25L', '₹25L+']

export default function Step3Page() {
    const router = useRouter()
    const [income, setIncome] = useState('')
    const [savings, setSavings] = useState('')
    const [investments, setInvestments] = useState('')

    const handleContinue = () => {
        if (!income || !savings || !investments) {
            alert('Please fill in all fields')
            return
        }
        sessionStorage.setItem('valam_income', income)
        sessionStorage.setItem('valam_savings', savings)
        sessionStorage.setItem('valam_investments', investments)
        router.push('/onboarding/step4')
    }

    return (
        <main className="valam-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
            <div className="valam-card" style={{ maxWidth: '580px', width: '100%', padding: '48px 40px' }}>
                {/* Progress dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
                    <div className="step-dot done"></div>
                    <div className="step-dot done"></div>
                    <div className="step-dot active"></div>
                    <div className="step-dot"></div>
                </div>

                {/* Header */}
                <h1 className="valam-heading" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '12px' }}>
                    Your Financial Profile
                </h1>
                <p className="valam-subtext" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Help us understand your current financial position
                </p>

                {/* Income */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '8px' }}>
                        💰 Annual Income
                    </label>
                    <select
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        className="valam-select"
                        style={{ background: '#f5f0e8', color: '#2a1a0e' }}
                    >
                        <option value="">Select your income range</option>
                        {incomeRanges.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>

                {/* Savings Rate */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '8px' }}>
                        🎯 Monthly Savings Rate
                    </label>
                    <select
                        value={savings}
                        onChange={(e) => setSavings(e.target.value)}
                        className="valam-select"
                        style={{ background: '#f5f0e8', color: '#2a1a0e' }}
                    >
                        <option value="">Select your savings rate</option>
                        {savingsRanges.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>

                {/* Current Investments */}
                <div style={{ marginBottom: '32px' }}>
                    <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '8px' }}>
                        💎 Current Investments
                    </label>
                    <select
                        value={investments}
                        onChange={(e) => setInvestments(e.target.value)}
                        className="valam-select"
                        style={{ background: '#f5f0e8', color: '#2a1a0e' }}
                    >
                        <option value="">Select your investment amount</option>
                        {investmentRanges.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>

                {/* Continue Button */}
                <button onClick={handleContinue} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                    Continue →
                </button>
            </div>
        </main>
    )
}