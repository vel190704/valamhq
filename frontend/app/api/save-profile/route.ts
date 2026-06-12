export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

interface Breakdown {
  savingsScore: number
  investmentsScore: number
  incomeScore: number
  experienceScore: number
  ageScore: number
}

interface SaveProfileBody {
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
  breakdown: Breakdown
}

const REQUIRED_FIELDS = [
  'name',
  'age',
  'income',
  'savingsRate',
  'investments',
  'experience',
  'goal',
  'valamScore',
  'valamLevel',
  'valamLevelName',
] as const

const REQUIRED_BREAKDOWN_FIELDS = [
  'savingsScore',
  'investmentsScore',
  'incomeScore',
  'experienceScore',
  'ageScore',
] as const

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: SaveProfileBody = await request.json()

    for (const field of REQUIRED_FIELDS) {
      if (body[field] === undefined || body[field] === null || body[field] === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    if (!body.breakdown || typeof body.breakdown !== 'object') {
      return NextResponse.json(
        { error: 'Missing required field: breakdown' },
        { status: 400 }
      )
    }

    for (const field of REQUIRED_BREAKDOWN_FIELDS) {
      if (body.breakdown[field] === undefined || body.breakdown[field] === null) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const { data, error } = await supabase
      .from('profiles')
      .insert({
        user_id:           null,
        name:              body.name,
        age:               body.age,
        income:            body.income,
        savings_rate:      body.savingsRate,
        investments:       body.investments,
        experience:        body.experience,
        goal:              body.goal,
        valam_score:       body.valamScore,
        valam_level:       body.valamLevel,
        valam_level_name:  body.valamLevelName,
        savings_score:     body.breakdown.savingsScore,
        investments_score: body.breakdown.investmentsScore,
        income_score:      body.breakdown.incomeScore,
        experience_score:  body.breakdown.experienceScore,
        age_score:         body.breakdown.ageScore,
      })
      .select('id')
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to save profile' }, { status: 500 })
    }

    return NextResponse.json({ profileId: data.id }, { status: 201 })
  } catch (err) {
    console.error('Unexpected error in save-profile route:', err)
    return NextResponse.json({ error: 'Failed to save profile' }, { status: 500 })
  }
}