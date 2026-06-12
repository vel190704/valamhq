export interface Recommendation {
  headline: string
  summary: string
  steps: string[]
  products: string[]
  milestone: string
  warning: string
}

export type GoalKey = 'wealth' | 'retirement' | 'emergency' | 'home' | 'education' | 'business'

const RECOMMENDATIONS: Record<GoalKey, Record<number, Recommendation>> = {
  wealth: {
    1: {
      headline: "Your first ₹1,000 SIP changes everything",
      summary: "At the Seed stage, your only job is to build the habit of investing before spending. Most people at this stage delay starting because the amounts feel too small — but compounding rewards consistency, not size.",
      steps: [
        "Open a Zerodha or Groww account this week and start a ₹500 SIP in a Nifty 50 index fund",
        "Set up a ₹1,000 recurring deposit in your bank as a forced savings habit",
        "Enable auto-debit for both on your salary date so you never manually transfer"
      ],
      products: ["Nifty 50 Index Fund (SIP)", "Bank Recurring Deposit", "PPF (start with ₹500/month)"],
      milestone: "Reach ₹10,000 in total investments and maintain a 10%+ savings rate for 3 consecutive months",
      warning: "Waiting until you earn more — ₹500/month started at 22 beats ₹5,000/month started at 32"
    },
    2: {
      headline: "Turn savings discipline into a portfolio",
      summary: "As an Explorer, you've proven you can save — now convert that habit into real investments. Mutual funds are your primary vehicle: simple, regulated, and powerful over a 10-year horizon. The gap between saving and investing is where most Indian wealth is destroyed by inflation.",
      steps: [
        "Start a ₹3,000–₹5,000 monthly SIP in a Nifty 50 index fund via Zerodha Coin or Groww",
        "Open a PPF account at your bank and deposit ₹500/month — its EEE tax status makes every rupee work harder",
        "Review any FDs maturing in 3+ years and shift them into a short-duration debt fund to cut tax drag"
      ],
      products: ["Nifty 50 Index Fund", "PPF (EEE tax status)", "ELSS Fund (80C benefit)", "Short Duration Debt Fund"],
      milestone: "Reach ₹50,000 in mutual fund investments and max out ₹1.5L in 80C instruments within 12 months",
      warning: "Choosing 6+ mutual funds from the same category — diversification means asset classes, not fund count"
    },
    3: {
      headline: "Build your wealth engine, not just savings",
      summary: "At the Builder stage, you have money working but it needs structure. A proper asset allocation — not random SIPs — is what separates people who accumulate wealth from those who just save. Your focus now is on the equity/debt split that matches your 10–15 year timeline.",
      steps: [
        "Audit current SIPs and consolidate into 3 core funds: one large-cap index, one mid-cap index, one ELSS",
        "Increase your total SIP amount by 10% every April — set a calendar reminder on your salary anniversary",
        "Open an NPS Tier 1 account for the extra ₹50,000 deduction under 80CCD(1B) — saves ₹15,000+ in taxes at 30% slab"
      ],
      products: ["Nifty 50 Index Fund", "Nifty Midcap 150 Index Fund", "ELSS Fund", "NPS Tier 1"],
      milestone: "Cross ₹2L in annual SIP contributions and maintain a 70/30 equity-to-debt allocation",
      warning: "Over-diversifying into 10+ funds — a focused 3-fund portfolio beats a cluttered 15-fund portfolio over time"
    },
    4: {
      headline: "Maximize tax efficiency to compound faster",
      summary: "At the Accelerator stage, what you keep matters as much as what you earn. Tax-optimized investing can add 1–2% annually to your effective returns. You're ready to move beyond basic 80C savings into structured, multi-vehicle wealth building.",
      steps: [
        "Max all deductions: ₹1.5L via ELSS (80C), ₹25,000 health insurance (80D), and ₹50,000 NPS (80CCD(1B))",
        "Add Sovereign Gold Bonds (SGBs) for 2.5% annual interest plus gold price appreciation — zero LTCG on maturity if held to 8 years",
        "Set a quarterly rebalancing calendar: if equity crosses 75% of portfolio, shift 5–10% to debt funds to lock in gains"
      ],
      products: ["ELSS Fund", "NPS Tier 1", "Sovereign Gold Bonds (SGBs)", "Arbitrage Fund (short-term parking)"],
      milestone: "Build a ₹10L+ portfolio across 3 asset classes and achieve annual tax savings of ₹75,000+",
      warning: "Ignoring annual LTCG harvesting — sell and rebuy ₹1L of equity gains each March to reset cost basis tax-free"
    },
    5: {
      headline: "Add direct stocks to your wealth engine",
      summary: "As an Achiever, you have a strong SIP foundation — now layer in direct equity for alpha above index returns. This is where you move from 'set and forget' to 'invest with conviction'. Limit individual stocks to 20% of your portfolio to preserve the discipline you've built.",
      steps: [
        "Allocate up to 20% of investable surplus to 8–12 quality direct stocks — focus on large-cap, strong cash flow, low debt",
        "Add Nifty BeES or Nifty 50 ETF alongside your SIPs for low-cost exposure without concentration risk",
        "Open an NPS Tier 2 account for flexible tax-efficient debt allocation — same taxation as debt mutual funds"
      ],
      products: ["Direct Equities (NSE/BSE)", "Nifty BeES ETF", "NPS Tier 2", "REITs (Embassy, Mindspace)"],
      milestone: "Build a ₹25L+ portfolio with a documented stock selection framework and 12%+ CAGR tracked over 2 years",
      warning: "Over-concentrating in 2–3 'hot' stocks — even Nifty 50 companies experience 40–50% drawdowns"
    },
    6: {
      headline: "Build income streams, not just a corpus",
      summary: "At the Wealth Creator level, wealth is no longer a single number — it's a system. You're ready to add assets that generate passive income: REIT distributions, dividends, and bond coupons alongside growth assets. The goal is to have passive income cover at least 30% of monthly expenses.",
      steps: [
        "Build a ₹5L+ position in REITs for 7–8% annual distributions plus capital appreciation",
        "Add SGBs for 2.5% assured interest — superior to physical gold or gold ETFs on a post-tax basis",
        "Track your Net Worth monthly in a spreadsheet — what gets measured grows faster and more deliberately"
      ],
      products: ["REITs (Embassy REIT, Nexus REIT)", "Sovereign Gold Bonds", "Dividend-paying Large-cap Stocks", "AAA Corporate Bonds"],
      milestone: "Achieve ₹50L+ net worth with passive income (dividends, REIT distributions) of ₹15,000+/month",
      warning: "Lifestyle inflation consuming your surplus — even at ₹50L net worth, a 10% savings rate is insufficient"
    },
    7: {
      headline: "Architect a multi-asset, multi-geography portfolio",
      summary: "As a Wealth Architect, you've mastered domestic markets — now your wealth needs global diversification. International ETFs, PMS strategies, and alternative assets are your next frontier. You're also at the stage where estate planning and wealth structuring begin to matter significantly.",
      steps: [
        "Allocate 15–20% to international ETFs — Nasdaq 100 or S&P 500 via Mirae Asset or Motilal Oswal FOFs",
        "Evaluate a PMS with a verified 5-year track record for your ₹50L+ equity component — minimum ticket typically ₹50L",
        "Set up a will and consult a CA about HUF structure for tax-efficient family wealth management"
      ],
      products: ["International ETFs (Nasdaq 100 FOF, S&P 500 ETF)", "PMS (min ₹50L ticket)", "REITs + InvITs", "AAA Corporate Bonds"],
      milestone: "Achieve ₹1Cr+ net worth with international exposure, a completed estate plan, and a written investment policy statement",
      warning: "Entering PMS without verifying 5-year audited returns — many charge 2% + 20% profit share for index-like performance"
    },
    8: {
      headline: "Create generational wealth, not just returns",
      summary: "At the Legend level, wealth accumulation is no longer the challenge — preservation and multiplication at scale is. Your decisions now affect the financial foundation of the next generation. Sophisticated structures and institutional-quality instruments are your domain.",
      steps: [
        "Diversify ₹5Cr+ across Category III AIFs for market-neutral strategies unavailable to retail investors",
        "Make 3–5 angel investments via LetsVenture or AngelList India — ₹5–10L per deal across sectors",
        "Work with a CA and lawyer to create a Private Family Trust for succession planning and multi-generational tax efficiency"
      ],
      products: ["Category III AIFs", "Unlisted Equity / Pre-IPO", "International Bonds (GIFT City IFSC)", "Angel Investments"],
      milestone: "Establish a family wealth structure with ₹5Cr+ diversified across 5+ asset classes globally and a succession plan",
      warning: "Concentrating legacy wealth in real estate — illiquid assets create succession disputes and tax complexity across generations"
    },
  },

  retirement: {
    1: {
      headline: "Retirement at 22 starts with ₹500 today",
      summary: "At the Seed stage, retirement feels distant — but this is your single greatest compounding advantage. Every rupee invested before 30 has 3–4× the terminal value of a rupee invested at 40. Your goal is not a large amount — it is creating the account and the habit before life gets expensive.",
      steps: [
        "Open an NPS Tier 1 account via eNPS.nsdl.com and invest ₹500/month in Scheme E (100% equity) for maximum growth",
        "Start a ₹500/month SIP in a Nifty 50 index fund labelled 'Retirement' — treat it as permanently untouchable",
        "Buy a ₹1Cr term insurance cover this month — at 25, it costs under ₹700/month and protects your family if you die young"
      ],
      products: ["NPS Tier 1 (Scheme E)", "Nifty 50 Index Fund SIP", "Term Insurance (pure, no ULIP)"],
      milestone: "Accumulate ₹25,000 combined in NPS and retirement SIP, with zero withdrawals for 12 months",
      warning: "Buying LIC endowment or ULIP plans sold as retirement solutions — they return 4–6% versus 12%+ from equity index funds"
    },
    2: {
      headline: "Calculate your number before investing more",
      summary: "As an Explorer, you're investing — but do you know your actual retirement corpus target? Most Indians underestimate by 50–60% because they ignore inflation. At 7% inflation, ₹1L/month today needs ₹7.6L/month in 30 years. Calculate your target first, then reverse-engineer the SIP amount.",
      steps: [
        "Use an NPS calculator to model corpus: (target monthly expense × 12 × 25) = minimum corpus needed at retirement",
        "Max out the ₹50,000 NPS deduction under 80CCD(1B) — saves ₹15,000 in taxes at 30% slab with zero extra effort",
        "Open a PPF account and invest ₹12,500/month — its EEE tax status makes it the best debt instrument in India for retirement"
      ],
      products: ["NPS Tier 1", "PPF (EEE — exempt at invest, growth, and withdrawal)", "ELSS Fund (growth + 80C)"],
      milestone: "Reach ₹1L combined retirement corpus and complete a written retirement projection with inflation factored in",
      warning: "Stopping NPS contributions during job changes — even a 6-month gap destroys irreplaceable early-stage compounding"
    },
    3: {
      headline: "Lock equity exposure before life gets expensive",
      summary: "At the Builder stage, you're building income and stability — but also approaching life events (marriage, home, children) that will compete for your surplus. This is the critical window to lock in equity exposure in retirement accounts before your monthly surplus is fully allocated.",
      steps: [
        "Raise NPS contribution to ₹5,000/month and choose Active Choice with 75% equity allocation for maximum long-term growth",
        "Start a separate ₹3,000/month SIP in a large-cap index fund earmarked only for retirement — label it and never touch it",
        "Buy a comprehensive health insurance policy of ₹10L — one uninsured hospitalization can derail a retirement plan"
      ],
      products: ["NPS Tier 1 (Active Choice, 75% equity)", "Nifty 50 Index Fund", "PPF", "Health Insurance (family floater ₹10L)"],
      milestone: "Cross ₹3L in retirement corpus with combined NPS and mutual fund SIP of ₹8,000+/month",
      warning: "Pausing retirement SIPs to fund a home down payment — run both in parallel even at reduced amounts"
    },
    4: {
      headline: "Your 30s are your retirement wealth window",
      summary: "At the Accelerator stage, your income is growing and your retirement runway is long but narrowing. The decisions you make in your 30s — equity allocation, tax efficiency, SIP consistency through market crashes — will determine 80% of your final retirement outcome. Optimize aggressively now.",
      steps: [
        "Max retirement deductions: ₹1.5L via ELSS (80C) + ₹50,000 via NPS (80CCD(1B)) = ₹2L tax-free retirement investing annually",
        "Add a ₹10,000/month mid-cap index fund SIP — the higher volatility is appropriate for a 25+ year retirement horizon",
        "Step up all retirement SIPs by 10% every April — link this to your annual increment so it happens automatically"
      ],
      products: ["NPS Tier 1", "ELSS Fund", "Nifty Midcap 150 Index Fund", "PPF"],
      milestone: "Achieve ₹15L in retirement corpus with ₹3L+ in annual retirement contributions and 12%+ CAGR over 3 years",
      warning: "Reducing equity allocation to 50% at 35 — with 25+ years to retirement, 70%+ in equity is necessary and appropriate"
    },
    5: {
      headline: "Structure your retirement portfolio now",
      summary: "As an Achiever, you likely have a meaningful corpus built — but is it structured for withdrawal? The shift from accumulation to drawdown planning starts 10–15 years before retirement. You need to model sequence-of-returns risk, inflation protection, and tax-efficient withdrawal strategies before the retirement date arrives.",
      steps: [
        "Model a bucket strategy: 2 years in liquid fund, 5 years in debt, remaining in equity — reduces sequence-of-returns risk",
        "Add SGBs as an inflation hedge — buy during RBI issue windows for 2.5% annual interest plus gold price appreciation",
        "Review term insurance: cover must be 15–20× annual income and extend to at least age 60"
      ],
      products: ["Nifty 50 Index Fund", "NPS Tier 1 (max contribution)", "Sovereign Gold Bonds", "Short-term Debt Fund"],
      milestone: "Build ₹30L+ in retirement corpus and complete a written withdrawal strategy with tax projections for each bucket",
      warning: "Not factoring healthcare inflation — medical costs at 65+ inflate at 12–14% per year, far above general CPI"
    },
    6: {
      headline: "Build passive income streams for retirement",
      summary: "At the Wealth Creator stage, retirement planning evolves from accumulation to income architecture. The goal is a portfolio generating ₹1L+/month at retirement from REIT distributions, NPS annuity, dividends, and SWP — so that no single source can threaten your lifestyle.",
      steps: [
        "Build a ₹10L+ REIT position for 7–8% annual distributions — your inflation-linked income stream in retirement",
        "Shift NPS Tier 1 allocation to 60% equity / 40% debt via Active Choice as you approach age 50",
        "Start a Systematic Transfer Plan (STP) from equity to debt funds 5 years before your target retirement date"
      ],
      products: ["REITs (Embassy, Nexus)", "NPS (Tier 1 + Tier 2)", "Dividend-paying Bluechip Stocks", "AAA Corporate Bonds"],
      milestone: "Build ₹75L+ retirement corpus with projected passive income of ₹50,000+/month at your target retirement age",
      warning: "Under-insuring against critical illness — one major health event at 55 can destroy a decade of retirement savings"
    },
    7: {
      headline: "Pre-retirement: optimize for tax-free withdrawals",
      summary: "As a Wealth Architect, you're likely 5–15 years from retirement with a substantial corpus. The focus shifts to tax-efficient decumulation: structuring withdrawals to minimize tax across PPF maturity, NPS partial withdrawal rules, and equity LTCG. The structure you build now determines how much of your corpus you actually keep.",
      steps: [
        "Plan NPS withdrawal: at retirement, 60% lump sum (40% of that is tax-free) + 40% mandated annuity — model both in your drawdown plan",
        "Harvest LTCG annually: sell and rebuy ₹1L of equity gains each March — the exemption resets your cost basis tax-free every year",
        "Stagger PPF maturities by opening accounts in family members' names for rolling 15-year EEE cycles"
      ],
      products: ["PMS (for ₹50L+ equity component)", "NPS Tier 1 (withdrawal strategy)", "PPF (multi-cycle)", "International ETFs (geographic diversification)"],
      milestone: "Achieve ₹2Cr+ retirement corpus with a written, tax-optimized drawdown model and a completed estate plan",
      warning: "Delaying estate planning — without a will, family disputes in Indian courts can freeze retirement assets for years"
    },
    8: {
      headline: "Design a retirement that funds generations",
      summary: "At the Legend level, your retirement is financially secure. The question is how to structure it for maximum impact over 30+ years: tax efficiency across a long retirement, legacy creation, and charitable giving. Your retirement plan is now a family wealth plan.",
      steps: [
        "Set up a Private Family Trust for tax-efficient intergenerational wealth transfer — more robust than a will in Indian succession law",
        "Create a Donor-Advised Fund or contribute to a charitable endowment for tax-efficient philanthropy under 80G",
        "Diversify retirement income: international bonds via GIFT City, LIC Jeevan Akshay annuity, and REIT distributions in parallel"
      ],
      products: ["Private Family Trust", "International Bonds (GIFT City IFSC)", "LIC Jeevan Akshay (immediate annuity)", "Category III AIFs"],
      milestone: "Establish a trust or endowment, with retirement income from 4+ distinct streams and a documented succession plan",
      warning: "Concentrating retirement wealth in real estate or a single business — illiquidity at 70+ is a serious financial risk"
    },
  },

  emergency: {
    1: {
      headline: "One bad month can erase all savings",
      summary: "At the Seed stage, an emergency fund is not optional — it is the foundation without which no other financial goal is safe. Without 3–6 months of expenses in liquid savings, any unexpected cost forces you to borrow at 18–24% interest or liquidate investments at a loss.",
      steps: [
        "Open a separate savings account at AU Small Finance Bank or IDFC First (6–7% interest) and label it 'Emergency Fund'",
        "Set up an auto-transfer of ₹2,000–₹3,000/month to this account on your salary date before anything else",
        "Calculate monthly essential expenses (rent, food, EMIs, utilities) — your Phase 1 target is 3× that amount"
      ],
      products: ["High-interest Savings Account (AU Small Finance, IDFC First — 6–7%)", "Bank FD (premature withdrawal allowed)"],
      milestone: "Accumulate ₹30,000–₹50,000 in a dedicated emergency account within 6 months, completely untouched",
      warning: "Using your emergency fund for predictable costs like annual insurance premiums — those belong in a separate sinking fund"
    },
    2: {
      headline: "3 months saved — now build to 6",
      summary: "As an Explorer, you likely have some emergency savings but not the full 6-month buffer the rule requires. A partial fund gives false confidence — it covers a small crisis but fails on job loss. Complete the build-out before allocating surplus to investments.",
      steps: [
        "Calculate your exact 6-month essential expense number — the gap between current balance and that target is your active savings goal",
        "Move the existing corpus from a savings account to a liquid mutual fund for 1–2% better returns with same-day redemption",
        "Set a standing instruction to auto-sweep any balance above ₹10,000 in your savings account into a liquid fund overnight"
      ],
      products: ["Liquid Mutual Fund (Parag Parikh, Mirae Asset — T+0 redemption)", "Overnight Fund (lowest risk)", "High-yield Savings Account (daily float)"],
      milestone: "Complete a 6-month expense buffer in a liquid fund and document your emergency protocol — which account you access first",
      warning: "Keeping emergency savings in a 3.5% savings account — at 6% inflation, ₹1L loses ₹500 of purchasing power every month"
    },
    3: {
      headline: "Optimize your emergency fund for returns too",
      summary: "At the Builder stage, your emergency fund may be sitting in a regular savings account earning 3.5% while inflation runs at 6%. The fund must be safe and liquid — but it doesn't need to be lazy. Optimizing placement can add ₹3,000–₹5,000 annually on a ₹3L fund with zero extra risk.",
      steps: [
        "Split the fund: 1 month's expenses in savings account (instant access), 5 months in an ultra-short duration debt fund",
        "Set up a sweep-in FD with your bank — idle balance above ₹25,000 automatically earns FD rates (6–7%) with instant withdrawal",
        "Review the fund size annually — as your expenses grow, your emergency buffer must grow proportionally"
      ],
      products: ["Ultra Short Duration Fund", "Sweep-in FD (HDFC, ICICI, SBI)", "Liquid Fund (T+0 to T+1 redemption)"],
      milestone: "Maintain a fully-funded 6-month buffer returning 5%+ net of tax, reviewed every 12 months",
      warning: "Treating the emergency fund as an investment — never put emergency savings in equity, however stable the market looks"
    },
    4: {
      headline: "Build a tiered emergency system",
      summary: "At the Accelerator stage, your obligations are more complex — EMIs, dependents, insurance premiums. A single account doesn't serve you efficiently anymore. A tiered approach gives you speed where you need it and yield where you can afford to wait.",
      steps: [
        "Tier 1: 1 month expenses in a sweep-in FD or savings account — accessible in minutes",
        "Tier 2: 5 months expenses in a liquid or ultra-short fund — redeemable in 1 business day",
        "Tier 3: Apply for an overdraft against your FD — zero cost unless drawn, acts as a free backstop for extreme emergencies"
      ],
      products: ["Liquid Fund (Tier 2)", "Sweep-in FD (Tier 1)", "Overdraft Against FD (Tier 3 — cost only on use)"],
      milestone: "Have a 3-tier emergency system covering 6 months plus an active credit facility as a fourth safety layer",
      warning: "Counting your credit card limit as emergency coverage — credit lines can be cancelled exactly when you need them most"
    },
    5: {
      headline: "Scale your emergency fund with your lifestyle",
      summary: "As an Achiever, your monthly obligations — home loan EMI, school fees, insurance premiums — are significantly higher than when you started. A ₹50,000 emergency fund built at Level 1 now covers only 2–3 weeks. Recalibrate your baseline to include every fixed monthly obligation.",
      steps: [
        "Recalculate emergency fund target: include home loan EMI, car EMI, school fees, and insurance premiums in monthly baseline",
        "Move the bulk of the corpus into an arbitrage fund — 6–7% returns taxed as equity (better than FD post-tax above ₹5L income)",
        "Ensure health insurance cover is ₹15–25L — one uncovered hospitalization can drain the emergency fund immediately"
      ],
      products: ["Arbitrage Fund (equity taxation, lower risk than equity)", "Liquid Fund", "Super Top-up Health Insurance (₹25–50L cover, low premium)"],
      milestone: "Maintain 6 months of fully-loaded expenses (all EMIs included) returning 6%+ net, reviewed annually",
      warning: "Under-sizing as income grows — lifestyle inflation means the old fund size creates dangerous gaps"
    },
    6: {
      headline: "Liquidity strategy, not just an emergency fund",
      summary: "At the Wealth Creator level, a business disruption, large medical event, or real estate transaction can require ₹10–20L on short notice. Your liquidity system needs to be institutional in design: tiered, yielding, and backed by credit facilities that don't require selling investments at bad times.",
      steps: [
        "Set up a Loan Against Mutual Funds (LAMF) via Bajaj Finserv or HDFC Bank — access ₹25–50L without selling a single unit",
        "Maintain 3 months expenses in liquid/arbitrage funds and use LAMF as a cost-effective backstop",
        "If self-employed, maintain a separate 3-month business expense reserve alongside personal emergency buffer"
      ],
      products: ["Loan Against Mutual Funds (LAMF)", "Arbitrage Fund", "Liquid Fund", "Overdraft Against Investment Portfolio"],
      milestone: "Maintain ₹10L+ in tiered liquid buffer with a ₹25L+ LAMF facility — zero need to break fixed-term investments in any emergency",
      warning: "Pledging equity funds during market crashes for LAMF — collateral value falls exactly when you need the loan most"
    },
    7: {
      headline: "Liquidity infrastructure: your financial immune system",
      summary: "As a Wealth Architect, emergency resilience is not about a savings account — it is about a liquidity architecture. You have assets across categories, and an emergency means converting the right asset at the right speed. Map your liquidity waterfall explicitly before you need it.",
      steps: [
        "Document your complete liquidity waterfall: savings → liquid fund → LAMF → overdraft → FD break → equity liquidation",
        "Maintain 6 months expenses in arbitrage or ultra-short funds — at your wealth level, this is ₹10–20L minimum",
        "Establish a ₹10–20L limit credit card with zero annual fee as a bridge instrument for 30-day gaps"
      ],
      products: ["Arbitrage Fund (large position)", "Overdraft Against FD or Securities", "High-limit Credit Facility", "T-bills via RBI Retail Direct (7–8%)"],
      milestone: "Write a complete liquidity map with instant access to ₹5L and same-day access to ₹25L+ from non-equity sources",
      warning: "Treating real estate equity as liquid — a property takes 6–18 months to sell; never count it as emergency capacity"
    },
    8: {
      headline: "Institutional liquidity for legacy-scale wealth",
      summary: "At the Legend level, personal emergencies rarely threaten financial security — but business, legal, and family events can demand ₹1Cr+ at short notice. Your liquidity architecture must match the scale of your obligations: board-level thinking, not personal savings logic.",
      steps: [
        "Maintain ₹25–50L in T-bills via RBI Retail Direct — 7–8% yield, government-backed, quarterly maturity cycles",
        "Establish a ₹1Cr+ working capital overdraft against your investment portfolio or business assets",
        "Ensure all liquid assets have a designated nominee or power of attorney — in a real crisis, you may need a third party to access them"
      ],
      products: ["T-bills / G-Secs (RBI Retail Direct)", "Overnight Fund (cash management)", "Bank Overdraft (against portfolio)", "AAA Commercial Paper (via debt fund)"],
      milestone: "Maintain a ₹50L+ institutional liquidity stack with a documented access protocol for each tier, reviewed annually",
      warning: "Letting yield optimization erode your emergency buffer — at this level, the cost of illiquidity in a crisis far exceeds 1–2% in extra returns"
    },
  },

  home: {
    1: {
      headline: "Your home starts with ₹500/month today",
      summary: "At the Seed stage, a home feels impossibly distant — but the down payment is a defined savings target you can work toward systematically. A ₹60L flat needs ₹12L down payment plus ₹3–4L in registration costs. A ₹5,000/month SIP at 12% CAGR gets you there in under 10 years.",
      steps: [
        "Open a dedicated SIP labelled 'Home Down Payment' and start with ₹1,000/month in a balanced advantage fund",
        "Research property prices in your target area — calculate the 20% down payment plus 6–8% for registration and stamp duty",
        "Check your CIBIL score at CIBIL.com (free once a year) and start building it above 750 by paying all bills on time"
      ],
      products: ["Balanced Advantage Fund (SIP, 7–10 year horizon)", "Bank Recurring Deposit (stable accumulation)", "PPF (long-horizon, EEE)"],
      milestone: "Save ₹50,000 in a dedicated home corpus and achieve a CIBIL score of 750+",
      warning: "Rushing to buy before you have 20% down payment — a 10% down payment with a larger loan costs ₹8–12L extra in interest"
    },
    2: {
      headline: "Build your home corpus before loan approval",
      summary: "As an Explorer, your income is growing and your home goal is becoming real. Banks will only finance 70–80% of property value — the rest is your responsibility. Building the down payment corpus in instruments matched to your timeline is the critical step before any bank conversation.",
      steps: [
        "Calculate home loan eligibility: your monthly EMI should not exceed 40% of take-home — use this to set a property budget",
        "Park the home corpus in a balanced fund for 5–7 year timelines, or a short-duration debt fund for under 3 years",
        "Start organizing documentation: 3 years of ITRs, 6 months of salary slips, bank statements — lenders want consistency evidence"
      ],
      products: ["Balanced Advantage Fund (5–7 year horizon)", "Short Duration Debt Fund (under 3 years)", "Bank RD (conservative, predictable)"],
      milestone: "Accumulate ₹2L in your home corpus and receive a provisional pre-approval letter from at least 2 banks",
      warning: "Confusing EMI affordability with home affordability — add maintenance, property tax, insurance, and repairs (≈2% of value/year)"
    },
    3: {
      headline: "Structure your down payment for tax efficiency",
      summary: "At the Builder stage, home purchase is likely 3–5 years away and your corpus is growing. This is the window to use the full stack of tax advantages: Section 80C, 24(b) interest deduction, and PMAY subsidies — structured now, before you sign any agreement.",
      steps: [
        "Check PMAY (Pradhan Mantri Awas Yojana) eligibility — MIG-I category saves ₹2.67L in interest subsidy on loans up to ₹6L",
        "Model your Section 24(b) benefit: home loan interest up to ₹2L/year is tax-deductible — this reduces the true cost of ownership",
        "Shift your home corpus from equity to a conservative hybrid fund 18–24 months before your target purchase date"
      ],
      products: ["Conservative Hybrid Fund (2–3 year target)", "Short Duration Debt Fund", "PMAY-linked Loan (HDFC, SBI, LIC HFL)"],
      milestone: "Accumulate 20% down payment plus 8% for registration and stamp duty, held in a capital-protected instrument",
      warning: "Dipping into your emergency fund or retirement savings for the down payment — these must stay completely separate"
    },
    4: {
      headline: "Now optimize the loan, not the down payment",
      summary: "At the Accelerator stage, your down payment is substantial and purchase is likely 1–3 years away. The focus shifts from saving to structuring: which lender, what tenure, fixed versus floating, and prepayment strategy. A well-structured loan saves more than any post-purchase optimization.",
      steps: [
        "Compare loans across 4 lenders (SBI, HDFC, ICICI, PNB Housing) — a 0.25% rate difference on ₹40L saves ₹2.5L over 20 years",
        "Choose floating REPO-linked rate over fixed — historically lower over 10+ year periods in India",
        "Model a prepayment plan: ₹2L prepayment in year 3 on a ₹40L loan saves approximately ₹6L in total interest"
      ],
      products: ["HDFC / SBI / ICICI Home Loan (floating, REPO-linked)", "Home Loan Balance Transfer (when rates drop 0.5%+)", "Property Insurance (lender-mandated)"],
      milestone: "Have 25% down payment ready, pre-approval from 2 lenders, and a 10-year prepayment schedule modelled",
      warning: "Choosing maximum tenure (30 years) to minimize EMI — this nearly triples total interest cost versus a 15-year term"
    },
    5: {
      headline: "Buy smart: location beats price, always",
      summary: "As an Achiever, you have the financial means to buy — the decision is now strategic, not just financial. Builder reputation, RERA registration, legal title, and resale potential matter more than the EMI. A 15% cheaper property in the wrong location loses more value in a decade than the EMI saving.",
      steps: [
        "Verify RERA registration at your state's rera.gov.in portal — check all approvals and complaint history before booking",
        "Commission an independent legal title search and structural valuation — spend ₹20,000–₹30,000 on due diligence, not just the bank's check",
        "Use SBI MaxGain home loan — it works as an overdraft where extra money in the account reduces interest daily"
      ],
      products: ["SBI MaxGain Home Loan (overdraft structure)", "Property Insurance", "Term Insurance (cover equal to outstanding loan)"],
      milestone: "Complete legal due diligence, negotiate a 10%+ discount from launch price, and close with a tax-optimized structure",
      warning: "Booking an under-construction flat from a builder without delivery track record — insist on RERA registration and escrow-protected payments"
    },
    6: {
      headline: "Second home or REITs — choose wisely",
      summary: "At the Wealth Creator level, you likely own a primary home. The question is whether additional real estate exposure should come from a physical second property or through REITs. REITs offer 7–8% distributions, daily liquidity, and zero maintenance headache — often a better financial decision than a second flat.",
      steps: [
        "Model true return on a second property: rental yield in India is 2–3% gross — compare this to REIT distributions of 7–8%",
        "If buying physical property, budget 2% of value annually for maintenance, vacancy, and property management — most buyers ignore this",
        "For any new property, use SBI MaxGain to park excess cash in the loan account — reduces interest and keeps liquidity"
      ],
      products: ["REITs (Embassy, Nexus, Mindspace — liquid real estate exposure)", "SBI MaxGain Home Loan", "Property Insurance"],
      milestone: "Make a documented IRR comparison between physical property and REITs, choosing based on post-tax returns, not emotion",
      warning: "Allocating more than 40–50% of net worth to real estate — concentration in illiquid assets creates dangerous financial rigidity"
    },
    7: {
      headline: "Real estate is a business, run it",
      summary: "As a Wealth Architect, real estate must generate returns competitive with equity. That means commercial property, REITs, or structured leases — not a second residential flat. Residential property in India has delivered 4–6% price appreciation historically, barely beating inflation after costs.",
      steps: [
        "Evaluate REITs versus commercial lease versus residential on post-tax IRR — include rental yield, appreciation, and net carrying cost",
        "If buying commercial property, insist on lease deeds with 10–15% rent escalation every 3 years to beat inflation",
        "Consider holding commercial property through a Pvt Ltd company for tax-efficient rental income and easier succession"
      ],
      products: ["REITs (Embassy REIT, Nexus REIT)", "InvITs (PowerGrid InvIT — infrastructure income)", "Commercial Property (direct or structured lease)"],
      milestone: "Real estate portfolio yielding 6%+ net of all costs with no single property exceeding 25% of total net worth",
      warning: "Buying luxury residential property as an investment — premium flats have the worst rental yield and worst liquidity in India"
    },
    8: {
      headline: "Real estate as portfolio architecture",
      summary: "At the Legend level, real estate is one allocation within a diversified portfolio — not a goal in itself. The question is architecture: how much of your ₹5Cr+ net worth should be in illiquid physical property versus liquid REITs versus international real estate. Succession and tax structure matter as much as the assets.",
      steps: [
        "Audit portfolio: if illiquid property exceeds 35% of net worth, rebalance by adding REITs or liquidating underperforming assets",
        "For large transactions, consult a CA on Private Limited Company structure for tax-efficient rental income and inheritance",
        "Explore international real estate via legal LRS limits — $250,000/year per person for geographic diversification"
      ],
      products: ["Private Limited Company (rental income structure)", "International REITs via LRS", "REITs (liquid real estate)", "Commercial Lease Structures"],
      milestone: "Real estate below 35% of net worth, 30%+ in liquid financial assets, and a documented succession plan for every property",
      warning: "Gifting or transferring property without tax planning — incorrect structuring creates massive stamp duty and capital gains liability"
    },
  },

  education: {
    1: {
      headline: "Start your child's education fund today",
      summary: "At the Seed stage, education costs inflate at 10–12% per year. A private engineering degree costs ₹15–25L today and will cost ₹40–60L in 15 years. The only tool that can outpace this inflation is equity — started today, in small amounts, with discipline.",
      steps: [
        "Calculate target corpus: current education cost × (1.10)^years_until_age_18 = what you actually need",
        "Open a dedicated SIP labelled 'Education Fund' — start with ₹2,000/month in a Nifty 50 index fund",
        "If you have a daughter under 10, open a Sukanya Samriddhi Account — 8.2% guaranteed, EEE tax status, ₹500/month minimum"
      ],
      products: ["Nifty 50 Index Fund (long-term corpus)", "Sukanya Samriddhi Yojana (daughters, EEE)", "PPF (secondary, EEE)"],
      milestone: "Start an education SIP of ₹2,000+/month and calculate the exact inflation-adjusted target corpus",
      warning: "Buying child ULIP or endowment plans marketed as education policies — they return 4–6% versus 12%+ from index funds"
    },
    2: {
      headline: "Your child's education needs equity, not FDs",
      summary: "As an Explorer, your education fund is growing but may be in conservative instruments that lose ground to 10–12% education inflation every year. FD returns at 6–7% are guaranteed to fall short. Equity index funds are the only asset class that can reliably close this gap over a 10+ year timeline.",
      steps: [
        "If education is 10+ years away, shift the corpus to a 100% equity index fund — volatility over this horizon is a feature, not a bug",
        "Set a step-up SIP: increase contribution by ₹500/month every April — small increases compound dramatically over a decade",
        "If eligible, deposit ₹1.5L/year in Sukanya Samriddhi (80C benefit) — the 8.2% guaranteed return is tax-free at withdrawal"
      ],
      products: ["Nifty 50 Index Fund", "Sukanya Samriddhi Yojana", "ELSS Fund (education + 80C)", "Flexicap Fund"],
      milestone: "Build ₹1L in the education fund and raise monthly SIP to ₹3,000+ with an annual step-up plan",
      warning: "Keeping a 12-year education corpus in a bank FD — you lose 4–5% to education inflation in real terms every single year"
    },
    3: {
      headline: "Structure education savings for tax efficiency",
      summary: "At the Builder stage, your education corpus is growing and the target date is 7–12 years away. This is the window to use the full stack of tax-advantaged instruments — ELSS, PPF, and Sukanya Samriddhi together can meet 80C limits while building education wealth efficiently.",
      steps: [
        "Allocate ₹12,500/month (₹1.5L/year) across ELSS and Sukanya Samriddhi to max the 80C deduction while building corpus",
        "Use a goal-based SIP calculator to check if your current monthly contribution is on track for your inflation-adjusted target",
        "Begin shifting the corpus from equity to a balanced fund 3 years before the education start date to reduce timing risk"
      ],
      products: ["ELSS Fund (80C + growth)", "Sukanya Samriddhi Yojana", "Balanced Advantage Fund (3–5 year window)", "PPF"],
      milestone: "Build ₹3L in education corpus with a written goal-based projection showing current trajectory versus inflation-adjusted target",
      warning: "Making ad hoc withdrawals from the education fund for other expenses — treat this account as legally protected savings"
    },
    4: {
      headline: "Separate near-term and long-term education goals",
      summary: "At the Accelerator stage, you may have children at different life stages requiring both near-term (2–5 year) and long-term (8–12 year) education planning. Mixing timelines into one corpus is the most common mistake — each timeline requires a fundamentally different asset allocation.",
      steps: [
        "Create separate accounts for each child: child starting college in 4 years needs 70%+ in debt; child 10+ years away needs 80% in equity",
        "Model international education scenarios separately — IB school or a foreign university adds a $100,000–$200,000 premium above domestic cost",
        "Step up each SIP by 10% annually — education inflation does not pause for your salary to catch up"
      ],
      products: ["Nifty 50 Index Fund (10+ year corpus)", "Conservative Hybrid Fund (3–5 year corpus)", "Sukanya Samriddhi", "Short Duration Debt Fund (near-term)"],
      milestone: "Separate, correctly allocated education accounts for each child with documented targets and monthly SIP amounts",
      warning: "Using a single 10% education inflation assumption for all scenarios — IB school and IIM run at 15–20% inflation, not 10%"
    },
    5: {
      headline: "Target-based investing for premium education",
      summary: "As an Achiever, the planning challenge shifts from 'can I afford it' to 'how do I structure it most efficiently'. Tax-deductible education loans and the flexibility of corpus versus loan strategy is now the key decision — one that can save ₹5–8L in taxes over the course of an education.",
      steps: [
        "Compare full-corpus versus education loan strategy: HDFC Credila/Avanse loans up to ₹20L have tax-deductible interest under 80E with no upper limit",
        "For international education, open an FCNR deposit or LRS-compliant USD investment to avoid INR/USD hedging cost",
        "Shift 30–40% of corpus from equity to short-duration debt if the education date is 5–7 years away"
      ],
      products: ["Education Loan (80E interest deduction, no ceiling)", "Flexicap Fund (5–7 year corpus)", "FCNR Deposit (international education)", "Short Duration Debt Fund"],
      milestone: "Have 50% of target corpus funded with a hybrid corpus-plus-loan strategy modelled for post-tax efficiency",
      warning: "Funding 100% from corpus when a tax-deductible education loan lets your investments keep compounding for another 4 years"
    },
    6: {
      headline: "Fund world-class education, not just any education",
      summary: "At the Wealth Creator level, education funding is not a constraint — it is a design challenge. The question is not whether you can afford it, but how to structure the funding most intelligently across corpus, loan, and tax optimization. Your tax slab makes this decision worth ₹8–12L in real money.",
      steps: [
        "Model 3 funding scenarios: full corpus, full education loan, and 50/50 hybrid — calculate post-tax cost at your tax slab for each",
        "For international education, consult a CA on LRS regulations and the most tax-efficient fund transfer method",
        "Consider a ₹25–50L multi-asset fund that can serve as both education corpus and wealth transfer vehicle"
      ],
      products: ["Multi-Asset Fund (education + legacy)", "Education Loan (80E deduction)", "FCNR Account (international)", "Balanced Advantage Fund"],
      milestone: "A documented, tax-optimized education funding strategy for each child with a named beneficiary and a backup plan",
      warning: "Depleting your retirement corpus to fund children's education — education loans exist; your retirement has no equivalent loan"
    },
    7: {
      headline: "Education as a multi-generational investment",
      summary: "As a Wealth Architect, your children's education is likely on track. The question shifts to how to build a multi-generational education endowment — a fund that compounds over 30–40 years and funds your grandchildren's education as well. This is family wealth architecture, not personal goal planning.",
      steps: [
        "Explore a Private Family Trust with an education mandate — contributions compound tax-efficiently and the corpus is protected from creditors",
        "For children in or near college, set up an SWP (Systematic Withdrawal Plan) from a debt fund for tax-efficient semester disbursement",
        "Establish a scholarship in your family name at a local institution — 80G deduction while building lasting legacy"
      ],
      products: ["Private Family Trust (education mandate)", "Multi-Asset Allocation Fund", "SWP from Debt Fund (tax-efficient disbursement)", "International ETFs (corpus diversification)"],
      milestone: "Create a documented multi-generational education plan including a trust or fund with a 30-year investment horizon for grandchildren",
      warning: "Locking all education funds in illiquid instruments — college timelines are fixed; ensure 60%+ of corpus is in T+2 redeemable assets when needed"
    },
    8: {
      headline: "Create an education endowment that outlasts you",
      summary: "At the Legend level, your children's education is funded. The question is legacy. An education endowment — invested in a diversified global portfolio and distributing scholarships or family education grants — is one of the most tax-efficient and impactful deployments of intergenerational wealth in India.",
      steps: [
        "Establish a Section 8 company or charitable trust for education scholarships — 80G-deductible donations and tax-exempt trust corpus",
        "Contribute ₹1Cr+ to the endowment fund invested in a multi-asset global portfolio targeting 10%+ annual growth",
        "Engage a professional trustee to manage the endowment independently — self-managed trusts face regulatory scrutiny over time"
      ],
      products: ["Section 8 Company / Charitable Trust (80G)", "Multi-Asset Global Fund (trust corpus)", "International ETFs (geographic diversification)", "Category III AIF (for large corpus)"],
      milestone: "A functioning education endowment with a governance charter, ₹1Cr+ corpus, and at least one beneficiary receiving annual grants",
      warning: "Creating a trust without professional independent trustees — family-managed trusts invite disputes that erode corpus and mission over time"
    },
  },

  business: {
    1: {
      headline: "Save startup capital before you need it",
      summary: "At the Seed stage, launching a business is a goal but the capital does not exist yet. Most small business failures happen because founders are undercapitalized — they run out of money 3 months before the business would have turned profitable. Build the capital buffer before you quit your job.",
      steps: [
        "Calculate 12-month business runway: estimated monthly costs × 12 = minimum capital needed before launching anything",
        "Open a separate savings account labelled 'Business Capital' and auto-transfer ₹3,000–₹5,000/month on salary day",
        "Keep this fund in a liquid mutual fund or short-term FD — it must be safe and instantly accessible, never in equity"
      ],
      products: ["Liquid Fund (business capital — safe, instant access)", "Bank RD (disciplined monthly accumulation)", "High-yield Savings Account (AU Small Finance, IDFC First)"],
      milestone: "Save ₹50,000 in dedicated business capital and complete a basic business plan with 12-month cash flow projection",
      warning: "Using a personal loan or credit card to fund a business before you have revenue — debt amplifies failure, especially in early learning stages"
    },
    2: {
      headline: "Build a 12-month runway before you launch",
      summary: "As an Explorer, you're serious about a business but haven't yet accumulated enough capital or reduced personal financial risk sufficiently. The rule of thumb: 12 months of personal expenses secured AND 6 months of estimated business costs before you leave employment. Building this dual buffer is your current mission.",
      steps: [
        "Separate business capital from personal emergency fund — have ₹3L+ in each dedicated account before considering launch",
        "Research Mudra Yojana: loans up to ₹10L for micro/small businesses at subsidized rates with no collateral for Shishu/Kishor tiers",
        "Consult a CA on business structure: sole proprietorship versus LLP versus Pvt Ltd — tax treatment and liability differ significantly"
      ],
      products: ["Liquid Fund (business capital)", "MSME Mudra Loan (government-backed, subsidized)", "Business Current Account (HDFC, ICICI)"],
      milestone: "₹3L in business capital built and a CA consultation on optimal business structure and registration completed",
      warning: "Launching before accumulating full runway — businesses almost always take 2× longer and cost 3× more than the initial projection"
    },
    3: {
      headline: "Structure your business finances from day one",
      summary: "At the Builder stage, you have capital accumulating and may be running a business as a side project. The right legal entity and accounting structure from day one saves enormous tax and compliance headaches later. A good CA setup now saves 10× in restructuring costs within 3 years.",
      steps: [
        "Register formally — a Pvt Ltd costs ₹10,000–₹15,000 to incorporate and gives liability protection, credibility, and fundability",
        "Open a dedicated business current account — never mix personal and business finances, not even for small amounts",
        "Set up quarterly advance tax payments from business income — the 1% monthly penalty on under-payment adds up fast"
      ],
      products: ["Business Current Account", "GST Registration (mandatory above ₹20L turnover)", "Professional Indemnity + Property Insurance", "NPS (self-employed 80CCD(1B))"],
      milestone: "Formal business registration complete, separate business accounts operational, and a CA on retainer for quarterly compliance",
      warning: "Mixing personal and business finances — it destroys liability protection, creates tax complexity, and makes the business unsaleable"
    },
    4: {
      headline: "Invest in growth, not just savings",
      summary: "At the Accelerator stage, you likely have an operating business generating income. The challenge is allocating between reinvesting for growth and maintaining personal financial security. A 70/30 business reinvestment versus personal wealth split is a sensible starting framework.",
      steps: [
        "Allocate 70% of business profit to reinvestment and 30% to personal wealth including retirement and emergency fund",
        "Explore CGTMSE-backed business loans: up to ₹2Cr collateral-free for eligible MSMEs — far cheaper than equity dilution",
        "Build a 3-month business expense reserve separate from personal emergency fund — a business cash crisis must never threaten your home"
      ],
      products: ["CGTMSE Credit Guarantee (collateral-free up to ₹2Cr)", "Business Overdraft Facility", "Working Capital Loan (CC/OD limit)", "NPS (self-employed retirement)"],
      milestone: "Business generating ₹5L+/month revenue with a documented 70/30 profit allocation and a 3-month cash reserve",
      warning: "Reinvesting 100% of profit with no personal wealth building — if the business fails, you lose both the business and your savings"
    },
    5: {
      headline: "Build personal wealth alongside business growth",
      summary: "As an Achiever with an operating business, your biggest risk is concentration: all your wealth is in one illiquid asset. A ₹1Cr business is impressive — but it can go to zero. Your personal financial portfolio must be built independently as insurance against any business outcome.",
      steps: [
        "Target 50% of personal salary going into financial assets — never let business growth justify skipping personal investments",
        "Set up a ₹10,000+/month SIP funded from your business salary — treat it as a non-negotiable payroll expense to yourself",
        "Explore ESOPs for key employees — retention through ownership is cheaper than the cost of replacing a senior hire"
      ],
      products: ["Index Funds (personal portfolio, separate from business)", "NPS (self-employed, ₹50,000 80CCD(1B))", "Term Insurance (15× personal income)", "Business + Family Health Insurance"],
      milestone: "Personal financial assets outside the business cross ₹10L with a documented investment policy separate from business accounts",
      warning: "Using personal or emergency savings to meet business cash flow needs — these domains must remain completely separate"
    },
    6: {
      headline: "Prepare your business for scale or exit",
      summary: "At the Wealth Creator level, your business may be your largest single asset. The question is not just how to grow it but how to structure it for funding, partnership, or eventual exit. A business that cannot be valued, sold, or partnered is a job in disguise — build it as though you might sell in 5 years.",
      steps: [
        "Commission a formal business valuation from a CA or investment bank — understand your worth before any funding conversation",
        "Implement shareholder agreements, IP registration, and vesting schedules — these are prerequisites for any exit or fundraise",
        "Separate your personal compensation from the business P&L — pay yourself a market salary; keep profit distributions explicit"
      ],
      products: ["Business Valuation (CA or IB)", "Venture Debt (non-dilutive growth capital)", "Directors & Officers Insurance", "IP Registration (trademark, patent)"],
      milestone: "Formal valuation completed, shareholder agreements in place, and a documented 3-year growth and exit roadmap",
      warning: "Operating without documented ownership, IP rights, or shareholder agreements — undocumented businesses cannot raise funding or be sold"
    },
    7: {
      headline: "Monetize your business equity intelligently",
      summary: "As a Wealth Architect, your business is likely worth ₹5Cr+ and represents the majority of your net worth. That is dangerous concentration in a single illiquid asset. A partial monetization — selling 20–25% to a PE or strategic investor — de-risks your position and often accelerates growth simultaneously.",
      steps: [
        "Engage an M&A advisor to run a structured secondary process — even a 20% stake sale at fair value de-risks your financial position significantly",
        "Diversify proceeds: use secondary sale proceeds to build a ₹1Cr+ public market portfolio independent of business",
        "Explore ESOP liquidity programs for employees — creates goodwill, reduces attrition, and signals confidence in the company's value"
      ],
      products: ["PE/VC Secondary Sale (business stake)", "PMS (₹50L+ personal corpus)", "International ETFs (geographic diversification)", "REITs (passive income, zero management)"],
      milestone: "15–25% stake sold or structured as secondary transaction; personal financial assets above ₹2Cr independent of business",
      warning: "Delaying diversification because 'the business is doing well' — concentration risk does not care about current performance"
    },
    8: {
      headline: "Build an empire, not just a company",
      summary: "At the Legend level, your business success is established. The question is how to deploy that into a portfolio of companies — through acquisitions, angel investing, or venture building. The wealthiest Indian entrepreneurs are portfolio builders, not single-company operators.",
      steps: [
        "Allocate ₹2–5Cr across 5–8 angel investments via LetsVenture or 100X.vc — expect 2–3 failures, 1–2 multi-baggers",
        "Explore acquiring smaller competitors or adjacent businesses — strategic acquisitions often compound value faster than organic growth",
        "Establish a Family Office to manage business interests, personal investments, philanthropy, and succession in one integrated structure"
      ],
      products: ["Angel Investments (₹5–10L per deal, diversified)", "Category II AIF (PE/VC fund, ₹1Cr minimum)", "Family Office Structure", "GIFT City International Expansion"],
      milestone: "Portfolio of 3+ active business interests, ₹5Cr+ personal financial portfolio, and a Family Office with professional governance",
      warning: "Over-extending into too many businesses without delegation and governance infrastructure — empire building without systems creates chaos"
    },
  },
}

export function getRecommendation(level: number, goal: GoalKey): Recommendation {
  const rec = RECOMMENDATIONS[goal]?.[level]
  if (!rec) {
    return RECOMMENDATIONS['wealth'][1]
  }
  return rec
}
