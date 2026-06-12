export type SavingsKey     = '<5' | '5-15' | '15-25' | '25-40' | '40+'
export type InvestmentsKey = '<10k' | '10k-1L' | '1L-5L' | '5L-25L' | '25L+'
export type IncomeKey      = '<3L' | '3L-8L' | '8L-15L' | '15L-30L' | '30L+'
export type ExperienceKey  = 'beginner' | 'learning' | 'intermediate' | 'advanced'

export interface VALAMInput {
  age: number
  income: IncomeKey
  savingsRate: SavingsKey
  investments: InvestmentsKey
  experience: ExperienceKey
}

export interface VALAMResult {
  valamScore: number
  valamLevel: number
  valamLevelName: string
  breakdown: {
    savingsScore: number
    investmentsScore: number
    incomeScore: number
    experienceScore: number
    ageScore: number
    savingsWeighted: number
    investmentsWeighted: number
    incomeWeighted: number
    experienceWeighted: number
    ageWeighted: number
  }
}

function scoreSavings(key: SavingsKey): number {
  switch (key) {
    case '<5':    return 1
    case '5-15':  return 2
    case '15-25': return 3
    case '25-40': return 4
    case '40+':   return 5
    default:
      throw new Error('Invalid savingsRate key: ' + (key as string))
  }
}

function scoreInvestments(key: InvestmentsKey): number {
  switch (key) {
    case '<10k':   return 1
    case '10k-1L': return 2
    case '1L-5L':  return 3
    case '5L-25L': return 4
    case '25L+':   return 5
    default:
      throw new Error('Invalid investments key: ' + (key as string))
  }
}

function scoreIncome(key: IncomeKey): number {
  switch (key) {
    case '<3L':     return 1
    case '3L-8L':   return 2
    case '8L-15L':  return 3
    case '15L-30L': return 4
    case '30L+':    return 5
    default:
      throw new Error('Invalid income key: ' + (key as string))
  }
}

function scoreExperience(key: ExperienceKey): number {
  switch (key) {
    case 'beginner':     return 1
    case 'learning':     return 2
    case 'intermediate': return 3
    case 'advanced':     return 4
    default:
      throw new Error('Invalid experience key: ' + (key as string))
  }
}

type AgeBracket = '18-24' | '25-34' | '35-44' | '45-59' | '60+'

function ageBracket(age: number): AgeBracket {
  if (age < 18) throw new Error('Age must be 18 or older, got: ' + age)
  if (age <= 24) return '18-24'
  if (age <= 34) return '25-34'
  if (age <= 44) return '35-44'
  if (age <= 59) return '45-59'
  return '60+'
}

function scoreAge(age: number): number {
  switch (ageBracket(age)) {
    case '18-24': return 5
    case '25-34': return 4
    case '35-44': return 3
    case '45-59': return 2
    case '60+':   return 1
  }
}

function levelFromScore(score: number): { level: number; name: string } {
  if (score < 1.5) return { level: 1, name: 'Seed' }
  if (score < 2.0) return { level: 2, name: 'Explorer' }
  if (score < 2.5) return { level: 3, name: 'Builder' }
  if (score < 3.0) return { level: 4, name: 'Accelerator' }
  if (score < 3.5) return { level: 5, name: 'Achiever' }
  if (score < 4.0) return { level: 6, name: 'Wealth Creator' }
  if (score < 4.5) return { level: 7, name: 'Wealth Architect' }
  return { level: 8, name: 'Legend' }
}

export function calculateVALAM(input: VALAMInput): VALAMResult {
  const savingsScore     = scoreSavings(input.savingsRate)
  const investmentsScore = scoreInvestments(input.investments)
  const incomeScore      = scoreIncome(input.income)
  const experienceScore  = scoreExperience(input.experience)
  const ageScore         = scoreAge(input.age)

  const savingsWeighted     = savingsScore     * 0.40
  const investmentsWeighted = investmentsScore * 0.25
  const incomeWeighted      = incomeScore      * 0.15
  const experienceWeighted  = experienceScore  * 0.10
  const ageWeighted         = ageScore         * 0.10

  const raw = savingsWeighted + investmentsWeighted + incomeWeighted + experienceWeighted + ageWeighted
  const valamScore = Math.round(raw * 100) / 100

  const { level, name } = levelFromScore(valamScore)

  return {
    valamScore,
    valamLevel: level,
    valamLevelName: name,
    breakdown: {
      savingsScore,
      investmentsScore,
      incomeScore,
      experienceScore,
      ageScore,
      savingsWeighted,
      investmentsWeighted,
      incomeWeighted,
      experienceWeighted,
      ageWeighted,
    },
  }
}