'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const incomeOptions: { value: string; label: string }[] = [
    { value: '<3L',     label: 'Below ₹3L / year' },
    { value: '3L-8L',   label: '₹3L – ₹8L / year' },
    { value: '8L-15L',  label: '₹8L – ₹15L / year' },
    { value: '15L-30L', label: '₹15L – ₹30L / year' },
    { value: '30L+',    label: '₹30L+ / year' },
]
const savingsOptions: { value: string; label: string }[] = [
    { value: '<5',   label: 'Less than 5%' },
    { value: '5-15', label: '5% – 15%' },
    { value: '15-25',label: '15% – 25%' },
    { value: '25-40',label: '25% – 40%' },
    { value: '40+',  label: '40%+' },
]
const investmentOptions: { value: string; label: string }[] = [
    { value: '<10k',   label: 'Less than ₹10,000' },
    { value: '10k-1L', label: '₹10,000 – ₹1L' },
    { value: '1L-5L',  label: '₹1L – ₹5L' },
    { value: '5L-25L', label: '₹5L – ₹25L' },
    { value: '25L+',   label: '₹25L+' },
]

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
                        {incomeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
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
                        {savingsOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
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
                        {investmentOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
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