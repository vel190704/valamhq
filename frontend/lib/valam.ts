// VALAM Framework v1.0 - NEW Algorithm with Wealth Velocity

export interface UserData {
    name: string;
    age: number;
    income: string;
    savingsRate: string;
    currentInvestments: string;
    knowledge: string;
    goal?: string;
}

export interface VALAMResult {
    positionScore: number;
    positionLevel: number;
    positionLevelName: string;
    potentialScore: number;
    potentialLevel: number;
    potentialLevelName: string;
}

// ALGORITHM 1: CURRENT POSITION (Wealth Velocity-based - 50% weight)
export function calculateCurrentPosition(data: UserData) {
    const investments = parseAmount(data.currentInvestments);
    const wealthVelocity = investments / data.age;

    const wealthVelocityScore = getWealthVelocityScore(wealthVelocity);
    const incomeScore = getIncomeScore(data.income);
    const savingsRateScore = getSavingsRateScore(data.savingsRate);
    const knowledgeScore = getKnowledgeScore(data.knowledge);

    // NEW v1.0 weights: Wealth Velocity 50%, Income 20%, Savings 20%, Knowledge 10%
    const score = (
        (0.50 * wealthVelocityScore) +
        (0.20 * incomeScore) +
        (0.20 * savingsRateScore) +
        (0.10 * knowledgeScore)
    );

    const level = getLevelFromScore(score);

    return {
        score: parseFloat(score.toFixed(2)),
        level: level.number,
        levelName: level.name,
        breakdown: { wealthVelocity: wealthVelocityScore, income: incomeScore, savingsRate: savingsRateScore, knowledge: knowledgeScore }
    };
}

// ALGORITHM 2: FUTURE POTENTIAL
export function calculateFuturePotential(data: UserData) {
    const ageScore = getAgeScore(data.age);
    const incomeScore = getIncomeScore(data.income);
    const savingsRateScore = getSavingsRateScore(data.savingsRate);
    const knowledgeScore = getKnowledgeScore(data.knowledge);

    // NEW v1.0 weights: Savings 45%, Age 30%, Income 15%, Knowledge 10%
    const score = (
        (0.45 * savingsRateScore) +
        (0.30 * ageScore) +
        (0.15 * incomeScore) +
        (0.10 * knowledgeScore)
    );

    const level = getLevelFromScore(score);

    return {
        score: parseFloat(score.toFixed(2)),
        level: level.number,
        levelName: level.name,
        breakdown: { age: ageScore, income: incomeScore, savingsRate: savingsRateScore, knowledge: knowledgeScore }
    };
}

// MAIN FUNCTION - Returns BOTH scores
export function calculateVALAM(data: UserData): VALAMResult {
    const position = calculateCurrentPosition(data);
    const potential = calculateFuturePotential(data);

    return {
        positionScore: position.score,
        positionLevel: position.level,
        positionLevelName: position.levelName,
        potentialScore: potential.score,
        potentialLevel: potential.level,
        potentialLevelName: potential.levelName
    };
}

// SCORING FUNCTIONS

function getWealthVelocityScore(velocity: number): number {
    // NEW v1.0 scale: 1-8 based on investments ÷ age
    if (velocity < 1000) return 1;
    if (velocity < 10000) return 2;
    if (velocity < 50000) return 3;
    if (velocity < 200000) return 4;
    if (velocity < 1000000) return 5;
    if (velocity < 2500000) return 6;
    if (velocity < 5000000) return 7;
    return 8;
}

function getIncomeScore(income: string): number {
    const value = parseAmount(income);
    // NEW v1.0 scale: 1, 3, 5, 7, 8
    if (value < 300000) return 1;
    if (value < 800000) return 3;
    if (value < 1500000) return 5;
    if (value < 3000000) return 7;
    return 8;
}

function getSavingsRateScore(rate: string): number {
    const value = parseFloat(rate);
    // NEW v1.0 scale: 1-5
    if (value < 5) return 1;
    if (value < 15) return 2;
    if (value < 25) return 3;
    if (value < 35) return 4;
    return 5;
}

function getKnowledgeScore(knowledge: string): number {
    const map: Record<string, number> = {
        'Beginner - No Investments': 1,
        'Learning - FDs, Mutual Funds': 2,
        'Intermediate - Stocks, ETFs, Bonds': 3,
        'Advanced - Crypto, Options, Global Markets': 4
    };
    return map[knowledge] || 1;
}

function getAgeScore(age: number): number {
    // NEW v1.0: Younger = higher potential
    if (age < 25) return 8;
    if (age < 35) return 7;
    if (age < 45) return 5;
    if (age < 60) return 3;
    return 1;
}

function getLevelFromScore(score: number) {
    // NEW v1.0 level boundaries
    if (score < 1.5) return { number: 1, name: 'Seed' };
    if (score < 2.0) return { number: 2, name: 'Explorer' };
    if (score < 2.5) return { number: 3, name: 'Builder' };
    if (score < 3.0) return { number: 4, name: 'Accelerator' };
    if (score < 3.5) return { number: 5, name: 'Achiever' };
    if (score < 4.0) return { number: 6, name: 'Wealth Creator' };
    if (score < 4.5) return { number: 7, name: 'Wealth Architect' };
    return { number: 8, name: 'Legend' };
}

function parseAmount(str: string): number {
    if (!str) return 0;
    const match = str.match(/Rs\s*([\d.]+)([LkM]?)/i);
    if (!match) return 0;

    const value = parseFloat(match[1]);
    const unit = match[2]?.toLowerCase();

    if (unit === 'l' || unit === 'lk') return value * 100000;
    if (unit === 'm') return value * 1000000;
    if (unit === 'k') return value * 1000;
    return value;
}

// Recommendation engine for 48 journeys
export function getRecommendation(level: number, goal: string) {
    // Simplified - expand based on your 48 combinations
    const recommendations: Record<string, any> = {
        'foundation': { allocation: { equity: 40, debt: 50, gold: 10 }, sipSuggestion: 'Start with ₹500/month' },
        'grow_wealth': { allocation: { equity: 60, debt: 30, gold: 10 }, sipSuggestion: 'Increase SIP by 10% yearly' },
        'first_crore': { allocation: { equity: 70, debt: 20, gold: 10 }, sipSuggestion: 'Maximize equity exposure' },
    };

    return recommendations[goal] || { allocation: { equity: 60, debt: 30, gold: 10 }, sipSuggestion: 'Consult advisor' };
}