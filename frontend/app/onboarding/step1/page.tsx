'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Step1Page() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {
        const keysToRemove = [
            'valam_name', 'valam_age', 'valam_income', 'valam_savings',
            'valam_investments', 'valam_knowledge', 'valam_goal', 'valam_result'
        ]
        keysToRemove.forEach(key => sessionStorage.removeItem(key))
        localStorage.removeItem('valam_profile_id')
    }, [])

    const handleContinue = () => {
        if (!name || !age || parseInt(age) < 18) {
            alert('Please enter valid details')
            return
        }
        // Store in sessionStorage for now
        sessionStorage.setItem('valam_name', name)
        sessionStorage.setItem('valam_age', age)
        router.push('/onboarding/step2')
    }

    return (
        <main className="valam-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
            <div className="valam-card" style={{ maxWidth: '520px', width: '100%', padding: '48px 40px' }}>
                {/* Progress dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
                    <div className="step-dot active"></div>
                    <div className="step-dot"></div>
                    <div className="step-dot"></div>
                    <div className="step-dot"></div>
                </div>

                {/* Header */}
                <h1 className="valam-heading" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '12px' }}>
                    Tell Us About Yourself
                </h1>
                <p className="valam-subtext" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    Let's personalize your wealth journey
                </p>

                {/* Name Input */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '8px' }}>
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="valam-input"
                        placeholder="Enter your full name"
                        style={{ background: '#f5f0e8', color: '#2a1a0e' }}
                    />
                </div>

                {/* Age Input */}
                <div style={{ marginBottom: '32px' }}>
                    <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#2a1a0e', marginBottom: '8px' }}>
                        Age
                    </label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="valam-input"
                        placeholder="Enter your age"
                        min="18"
                        max="100"
                        style={{ background: '#f5f0e8', color: '#2a1a0e' }}
                    />
                </div>

                {/* Helper text */}
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#5a3e28', fontSize: '0.95rem', textAlign: 'center', marginBottom: '32px' }}>
                    ✦ This helps us calculate your wealth velocity and financial stage
                </p>

                {/* Continue Button */}
                <button onClick={handleContinue} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                    Continue →
                </button>

                {/* Back link */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link href="/" style={{ color: '#8b6914', textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>
                        ← Back to home
                    </Link>
                </div>
            </div>
        </main>
    )
}