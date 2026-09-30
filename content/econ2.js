// Economics, part 2: macroeconomics.
// Registered via content/index.js SUBJECT_FILES; merges into the economics subject.

module.exports = {
  id: 'economics',
  name: 'Economics',
  icon: 'chart',
  color: '#0d9488',
  tagline: 'How people, firms, and governments make choices',
  description: 'Micro and macroeconomics — markets, incentives, inflation, and the policies that move whole economies.',
  courses: [
    {
      id: 'macroeconomics',
      title: 'Macroeconomics',
      subtitle: 'High school / intro college',
      summary: 'The economy as a whole: GDP and growth, inflation and unemployment, and how fiscal and monetary policy steer it.',
      units: [
        {
          id: 'measuring-the-economy',
          title: 'Measuring the economy',
          lessons: [
            {
              id: 'gdp-and-growth',
              title: 'GDP and economic growth',
              minutes: 7,
              summary: 'Gross domestic product counts everything a country produces — and explains why growth compounds into prosperity.',
              tags: ['macroeconomics', 'GDP', 'growth'],
              blocks: [
                { type: 'p', text: '**GDP** (gross domestic product) is the market value of all *final* goods and services produced within a country in a period — the standard scoreboard for an economy. "Final" matters: the flour inside a loaf is not counted twice, only the bread.' },
                { type: 'callout', kind: 'key', text: 'GDP splits into four components: $GDP = C + I + G + (X - M)$ — consumption, investment, government spending, and exports minus imports. Every dollar of output is someone\'s spending.' },
                { type: 'p', text: '**Nominal GDP** uses current prices; **real GDP** strips out inflation to measure actual production. If nominal GDP rose 6% while prices rose 4%, real growth was roughly 2% — the rest was just price tags getting bigger.' },
                { type: 'example', title: 'The magic of compounding', text: 'Growing 2% a year, GDP doubles in about 35 years (the Rule of 72: $72 / 2 = 35$). At 7%, it doubles in a decade. Tiny growth-rate differences become enormous wealth gaps across generations.' },
                { type: 'callout', kind: 'warning', text: 'GDP is not happiness. It ignores unpaid work, leisure, pollution, and distribution — a country can grow GDP while most people\'s lives stagnate. Use GDP *per person* for living standards, and treat it as a floor, not the ceiling, of wellbeing.' }
              ],
              skill: {
                id: 'gdp-and-growth', name: 'GDP and growth',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which transaction is counted in GDP?',
                    choices: [
                      { id: 'a', text: 'Buying 100 shares of stock' },
                      { id: 'b', text: 'A bakery buying flour for bread it will sell' },
                      { id: 'c', text: 'A barber cutting a customer\'s hair for $25' },
                      { id: 'd', text: 'Selling your used bicycle to a neighbor' }
                    ],
                    answer: 'c',
                    hint: 'GDP counts final goods and services produced this period — not financial trades, intermediate goods, or resale of existing items.',
                    steps: ['A haircut is a final service produced now → counted. Stocks are ownership transfers, flour is intermediate (counted inside the bread), and the used bike was counted when first produced.'],
                    answerText: 'The haircut'
                  },
                  {
                    type: 'choice',
                    prompt: 'Nominal GDP grew 7% while inflation was 5%. Real GDP grew approximately:',
                    choices: [
                      { id: 'a', text: '12%' },
                      { id: 'b', text: '7%' },
                      { id: 'c', text: '2%' },
                      { id: 'd', text: '35%' }
                    ],
                    answer: 'c',
                    hint: 'Real growth ≈ nominal growth − inflation.',
                    steps: ['Real GDP removes price changes: $7\\% - 5\\% \\approx 2\\%$ of actual extra production.'],
                    answerText: 'About 2%'
                  },
                  {
                    type: 'choice',
                    prompt: 'In $GDP = C + I + G + (X - M)$, the letter I stands for:',
                    choices: [
                      { id: 'a', text: 'Interest' },
                      { id: 'b', text: 'Investment — business spending on equipment, structures, and inventories' },
                      { id: 'c', text: 'Imports' },
                      { id: 'd', text: 'Income' }
                    ],
                    answer: 'b',
                    hint: 'In GDP accounting it does not mean buying stocks.',
                    steps: ['Investment in GDP = spending on productive capacity: factories, machines, new housing, inventory buildup. Buying a stock is a financial transfer, not production.'],
                    answerText: 'Investment (productive capacity)'
                  },
                  {
                    type: 'choice',
                    prompt: 'An economy grows 4% per year. By the Rule of 72, GDP doubles in about:',
                    choices: [
                      { id: 'a', text: '4 years' },
                      { id: 'b', text: '9 years' },
                      { id: 'c', text: '18 years' },
                      { id: 'd', text: '72 years' }
                    ],
                    answer: 'c',
                    hint: 'Divide 72 by the growth rate.',
                    steps: ['$72 / 4 = 18$ years — compounding means each year\'s 4% applies to a larger base.'],
                    answerText: 'About 18 years'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why does GDP count only "final" goods and services?',
                    choices: [
                      { id: 'a', text: 'Intermediate goods are too small to measure' },
                      { id: 'b', text: 'To avoid double counting — the bread\'s price already includes the flour' },
                      { id: 'c', text: 'Only retail sales matter to the economy' },
                      { id: 'd', text: 'Imports are excluded by definition' }
                    ],
                    answer: 'b',
                    hint: 'If you counted both the flour and the bread, what would happen?',
                    steps: ['The value of every ingredient is already inside the final product\'s price. Counting both would measure the same output twice — so only final goods enter GDP (or equivalently, value added at each stage).'],
                    answerText: 'Avoids double counting'
                  },
                  {
                    type: 'choice',
                    prompt: 'GDP per capita is preferred over raw GDP for comparing living standards because it:',
                    choices: [
                      { id: 'a', text: 'Adjusts for inflation' },
                      { id: 'b', text: 'Adjusts for population size — a big country can have huge GDP but average citizens no better off' },
                      { id: 'c', text: 'Includes unpaid household work' },
                      { id: 'd', text: 'Measures happiness directly' }
                    ],
                    answer: 'b',
                    hint: 'What differs most between India and Switzerland?',
                    steps: ['Per capita = GDP ÷ population. A giant economy can dwarf a small rich one in total GDP while its typical resident is far poorer — dividing by population compares the *average* person.'],
                    answerText: 'Controls for population'
                  }
                ]
              }
            },
            {
              id: 'inflation-and-cpi',
              title: 'Inflation and the CPI',
              minutes: 7,
              summary: 'When every price rises, money shrinks — the CPI is how we measure it.',
              tags: ['inflation', 'CPI', 'macroeconomics'],
              blocks: [
                { type: 'p', text: '**Inflation** is a sustained rise in the general price level — equivalently, a fall in what each dollar buys. The **Consumer Price Index (CPI)** tracks it by pricing a fixed "basket" of goods a typical household buys, month after month.' },
                { type: 'callout', kind: 'key', text: 'Inflation rate = the percentage change in the price index: $$\\text{inflation} = \\frac{CPI_{new} - CPI_{old}}{CPI_{old}} \\times 100$$' },
                { type: 'example', title: 'Compute it', text: 'CPI moves from 120 to 126: inflation $= \\frac{126 - 120}{120} \\times 100 = 5\\%$. A \\$100 grocery trip last year now costs \\$105.' },
                { type: 'p', text: 'Inflation has real costs: savings lose value, planning gets harder, and those on fixed incomes are squeezed. But *deflation* (falling prices) is often worse — if everything will be cheaper tomorrow, people delay spending, and the economy stalls. Most central banks therefore aim for small, positive inflation around 2%.' },
                { type: 'callout', kind: 'warning', text: 'Your **nominal** wage is the number on your paycheck; your **real** wage is what it buys. A 3% raise during 5% inflation is a pay *cut* — always compare wage growth to inflation.' }
              ],
              skill: { id: 'inflation-and-cpi', name: 'Inflation and CPI', generator: 'inflationRate' }
            },
            {
              id: 'unemployment',
              title: 'Unemployment',
              minutes: 6,
              summary: 'Who counts as unemployed — and why the headline rate can mislead.',
              tags: ['unemployment', 'labor market', 'macroeconomics'],
              blocks: [
                { type: 'p', text: 'The **labor force** = everyone employed + everyone unemployed (jobless *and* actively looking). People not searching — retirees, students, discouraged workers who gave up — are simply outside the count. $$u = \\frac{\\text{unemployed}}{\\text{labor force}} \\times 100$$' },
                { type: 'callout', kind: 'key', text: 'Three flavors of unemployment: **frictional** (between jobs by choice — healthy), **structural** (skills no longer match what employers want — painful), and **cyclical** (caused by a recession — the one policymakers fight).' },
                { type: 'example', title: 'Classify it', text: 'A recent grad interviewing for her first job = frictional. A typewriter repairman whose trade vanished = structural. A restaurant worker laid off in a downturn = cyclical.' },
                { type: 'p', text: 'Some unemployment is always present — even booming economies show 3–4% as people move between jobs. The "**natural rate**" is frictional + structural; cyclical unemployment is what rises and falls with the business cycle.' },
                { type: 'callout', kind: 'warning', text: 'The headline rate can *fall* for a bad reason: if jobless people stop searching, they leave the labor force and the rate drops without anyone finding work. Check labor-force participation alongside the rate.' }
              ],
              skill: { id: 'unemployment', name: 'Unemployment rate', generator: 'unemploymentRate' }
            },
            {
              id: 'business-cycles',
              title: 'Business cycles and recessions',
              minutes: 7,
              summary: 'Economies breathe: expansion, peak, contraction, trough. Two quarters of shrinking GDP is the common recession marker.',
              tags: ['business cycle', 'recession', 'macroeconomics'],
              blocks: [
                { type: 'p', text: 'Real economies do not grow in a straight line — they **oscillate**. The **business cycle** is the recurring rhythm: **expansion** (output, jobs, and income rising) → **peak** → **contraction** (activity falling) → **trough** → the next expansion.' },
                { type: 'formula', text: '\\text{recession} \\approx 2\\ \\text{consecutive quarters of shrinking real GDP}' },
                { type: 'callout', kind: 'key', text: 'The two-quarter rule is a useful shorthand, but official dating (by NBER in the U.S.) weighs employment, income, sales, and production too — a recession is a *broad* decline, not just a technical one.' },
                { type: 'example', title: 'The cycle in one line', text: '2020 was the sharpest, shortest recession on record — GDP collapsed in weeks as the economy shut, then rebounded within months. 2008\'s "Great Recession" was slow and financial: housing credit froze, contraction ran 18 months.' },
                { type: 'p', text: 'Cycles are why the policy levers exist: during contraction, central banks cut rates and governments run deficits (stimulus); during an overheated expansion, they do the reverse — not to eliminate the cycle, but to smooth it.' },
                { type: 'callout', kind: 'warning', text: 'A recession is not a **depression** — a depression is a severe, years-long contraction (the 1930s Great Depression saw ~25% unemployment). Recessions are the normal, roughly 5–10 year, ebb of the cycle.' }
              ],
              skill: {
                id: 'business-cycles',
                name: 'Business cycle phases',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The common shorthand for a recession is…',
                    choices: [
                      { id: 'a', text: 'one quarter of falling GDP' },
                      { id: 'b', text: 'two consecutive quarters of shrinking real GDP' },
                      { id: 'c', text: 'unemployment above 10%' },
                      { id: 'd', text: 'a stock market crash' }
                    ],
                    answer: 'b',
                    hint: 'It is a duration rule, not a level rule.',
                    steps: [
                      'Two back-to-back quarters of negative real-GDP growth is the widely used marker.',
                      'Official declarations are broader — employment, income, sales — but the shorthand captures the usual case.'
                    ],
                    answerText: '2 quarters of negative GDP growth'
                  },
                  {
                    type: 'choice',
                    prompt: 'The correct order of the business cycle is…',
                    choices: [
                      { id: 'a', text: 'trough → peak → expansion → contraction' },
                      { id: 'b', text: 'expansion → peak → contraction → trough' },
                      { id: 'c', text: 'peak → expansion → trough → contraction' },
                      { id: 'd', text: 'contraction → expansion → trough → peak' }
                    ],
                    answer: 'b',
                    hint: 'It is a wave: up, top, down, bottom.',
                    steps: [
                      'Expansion rises to the peak; contraction falls to the trough; the trough begins the next expansion.',
                      'Peak and trough are the turning points — moments, not phases.'
                    ],
                    answerText: 'expansion → peak → contraction → trough'
                  },
                  {
                    type: 'choice',
                    prompt: 'Standard macro policy during a contraction calls for…',
                    choices: [
                      { id: 'a', text: 'higher interest rates and smaller deficits' },
                      { id: 'b', text: 'lower interest rates and fiscal stimulus' },
                      { id: 'c', text: 'no policy — cycles fix themselves' },
                      { id: 'd', text: 'price controls' }
                    ],
                    answer: 'b',
                    hint: 'Replace missing private demand.',
                    steps: [
                      'In a downturn, central banks cut rates to cheapen borrowing and governments spend/cut taxes to fill the demand gap.',
                      'The levers reverse in overheating — the goal is smoothing the cycle, not eliminating it.'
                    ],
                    answerText: 'cut rates + stimulate'
                  },
                  {
                    type: 'choice',
                    prompt: 'What separates a depression from a recession?',
                    choices: [
                      { id: 'a', text: 'Depressions only happen abroad' },
                      { id: 'b', text: 'Severity and duration — a depression is a deep, years-long contraction' },
                      { id: 'c', text: 'Depressions have no unemployment' },
                      { id: 'd', text: 'Nothing — they are synonyms' }
                    ],
                    answer: 'b',
                    hint: 'The 1930s is the benchmark.',
                    steps: [
                      'A recession is the ordinary ebb of the cycle; a depression is a rare, severe, multi-year collapse (Great Depression unemployment peaked near 25%).',
                      'Every depression is a contraction, but few contractions are depressions.'
                    ],
                    answerText: 'deeper + longer'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'policy-and-the-economy',
          title: 'Policy and the economy',
          lessons: [
            {
              id: 'fiscal-policy',
              title: 'Fiscal policy',
              minutes: 7,
              summary: 'Taxes and government spending — the government\'s direct levers on the economy.',
              tags: ['fiscal policy', 'government', 'macroeconomics'],
              blocks: [
                { type: 'p', text: '**Fiscal policy** is the government\'s use of its two big levers — spending and taxation — to influence the economy. Congress and the President control it directly, unlike interest rates.' },
                { type: 'callout', kind: 'key', text: 'In a recession: **expansionary** policy — spend more, tax less — to replace missing private demand. When the economy overheats: **contractionary** policy — spend less, tax more — to cool inflation.' },
                { type: 'example', title: 'The multiplier', text: 'The government pays a worker \\$1,000 to repair a bridge. She spends \\$800 of it at stores; those store owners spend \\$640 more; and so on. One dollar of spending multiplies into more than a dollar of income — the **multiplier effect**.' },
                { type: 'p', text: 'The cost of running deficits year after year is **government debt**. Moderate debt is manageable for countries that borrow in their own currency, but interest payments eventually crowd out other priorities — the debate is about *how much* is too much.' },
                { type: 'callout', kind: 'tip', text: 'Automatic stabilizers smooth the cycle without new laws: unemployment benefits rise in recessions (supporting spending) and shrink in booms.' }
              ],
              skill: {
                id: 'fiscal-policy', name: 'Fiscal policy',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The economy is in a deep recession. Standard fiscal policy prescribes:',
                    choices: [
                      { id: 'a', text: 'Raise taxes and cut spending' },
                      { id: 'b', text: 'Increase spending and/or cut taxes' },
                      { id: 'c', text: 'Raise interest rates' },
                      { id: 'd', text: 'Do nothing — markets always self-correct instantly' }
                    ],
                    answer: 'b',
                    hint: 'Recession = missing demand. Which lever adds demand?',
                    steps: ['Expansionary fiscal policy (more government spending, lower taxes) injects demand to offset the private-sector shortfall. Interest rates are *monetary* policy, not fiscal.'],
                    answerText: 'Spend more / tax less'
                  },
                  {
                    type: 'choice',
                    prompt: 'The "multiplier effect" means:',
                    choices: [
                      { id: 'a', text: 'Taxes multiply across states' },
                      { id: 'b', text: 'One dollar of government spending produces more than one dollar of income, as recipients re-spend it' },
                      { id: 'c', text: 'Banks multiply deposits through lending' },
                      { id: 'd', text: 'Inflation multiplies prices' }
                    ],
                    answer: 'b',
                    hint: 'Your spending is someone else\'s income.',
                    steps: ['A government payment becomes income for one person, who spends most of it — creating income for another, and so on in a chain.'],
                    answerText: 'Re-spending amplifies the initial dollar'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is an "automatic stabilizer"?',
                    choices: [
                      { id: 'a', text: 'A new infrastructure bill passed mid-recession' },
                      { id: 'b', text: 'Unemployment insurance, which expands automatically when layoffs rise' },
                      { id: 'c', text: 'The Federal Reserve buying bonds' },
                      { id: 'd', text: 'Annual budget negotiations' }
                    ],
                    answer: 'b',
                    hint: '"Automatic" = already in law, no new vote needed.',
                    steps: ['Unemployment insurance and progressive taxes adjust with the cycle automatically. A new bill is *discretionary* policy; the Fed\'s actions are monetary policy.'],
                    answerText: 'Unemployment insurance'
                  },
                  {
                    type: 'choice',
                    prompt: 'Expansionary fiscal policy is mainly limited in the long run by:',
                    choices: [
                      { id: 'a', text: 'The size of the military' },
                      { id: 'b', text: 'Accumulating debt and the interest needed to service it' },
                      { id: 'c', text: 'How fast the Fed can print money' },
                      { id: 'd', text: 'The electoral cycle' }
                    ],
                    answer: 'b',
                    hint: 'What accumulates when deficits repeat?',
                    steps: ['Persistent deficits pile up as debt; interest on it consumes future budgets. This is the core long-run trade-off of expansionary fiscal policy.'],
                    answerText: 'Debt and interest costs'
                  },
                  {
                    type: 'choice',
                    prompt: 'A government runs a **budget deficit** when it:',
                    choices: [
                      { id: 'a', text: 'Collects more taxes than it spends' },
                      { id: 'b', text: 'Spends more than it collects in taxes that year' },
                      { id: 'c', text: 'Imports more than it exports' },
                      { id: 'd', text: 'Has any national debt at all' }
                    ],
                    answer: 'b',
                    hint: 'Deficit is a yearly flow; debt is the accumulated stock.',
                    steps: ['Deficit = this year\'s spending minus this year\'s revenue. Each deficit adds to the national debt — the running total of all past deficits minus surpluses. A trade deficit is a different thing entirely (imports vs. exports).'],
                    answerText: 'Spending > tax revenue'
                  },
                  {
                    type: 'choice',
                    prompt: 'During an inflationary boom, appropriate *contractionary* fiscal policy would be:',
                    choices: [
                      { id: 'a', text: 'Cut spending or raise taxes to cool demand' },
                      { id: 'b', text: 'Increase spending to keep growth going' },
                      { id: 'c', text: 'Print less currency' },
                      { id: 'd', text: 'Lower interest rates' }
                    ],
                    answer: 'a',
                    hint: 'Overheating = too much demand chasing too few goods.',
                    steps: ['Contractionary policy withdraws demand — less government spending, higher taxes — easing price pressure. Rates and currency are monetary tools, not fiscal.'],
                    answerText: 'Spend less / tax more'
                  }
                ]
              }
            },
            {
              id: 'monetary-policy',
              title: 'Money, banks, and the Fed',
              minutes: 8,
              summary: 'How banks create money and how the central bank steers interest rates.',
              tags: ['monetary policy', 'Federal Reserve', 'interest rates'],
              blocks: [
                { type: 'p', text: '**Money** is anything accepted as payment — and most of it is created by banks, not printed. When a bank lends \\$900 of your \\$1,000 deposit and keeps \\$100 in reserve, that \\$900 loan becomes someone else\'s deposit, which funds another loan — the **money multiplier**.' },
                { type: 'callout', kind: 'key', text: 'A **central bank** (the Federal Reserve in the US) manages the money supply and sets benchmark interest rates. Its dual mandate: maximum employment *and* stable prices.' },
                { type: 'p', text: 'The Fed\'s main tool is the short-term interest rate. **Lower rates** → cheaper borrowing → more spending and investment → the economy accelerates (used in recessions). **Higher rates** → borrowing costs bite → spending cools → inflation eases (used when prices run hot).' },
                { type: 'example', title: 'The 2020s in one line', text: 'Pandemic shock → rates near zero + stimulus → demand surged while supply was tangled → inflation hit ~9% → the Fed raised rates sharply to cool it. That is monetary policy working as designed.' },
                { type: 'callout', kind: 'tip', text: 'Fiscal vs. monetary in one line: fiscal = elected officials changing taxes and spending; monetary = the central bank changing interest rates and the money supply.' },
                { type: 'callout', kind: 'warning', text: 'Monetary policy works with a lag — a rate hike today can take a year to fully cool prices — which is why central banks must act on forecasts, not just on today\'s data.' }
              ],
              skill: {
                id: 'monetary-policy', name: 'Monetary policy',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Inflation is running far above the target. The Fed\'s standard response is to:',
                    choices: [
                      { id: 'a', text: 'Lower interest rates' },
                      { id: 'b', text: 'Raise interest rates' },
                      { id: 'c', text: 'Increase government spending' },
                      { id: 'd', text: 'Cut income taxes' }
                    ],
                    answer: 'b',
                    hint: 'Which rate move makes borrowing more expensive and cools spending?',
                    steps: ['Higher rates raise the cost of mortgages, car loans, and business borrowing — spending and investment cool, easing price pressure.'],
                    answerText: 'Raise rates'
                  },
                  {
                    type: 'choice',
                    prompt: 'A bank keeps 10% of deposits as reserves and lends the rest. A \\$1,000 deposit can therefore support lending of:',
                    choices: [
                      { id: 'a', text: '$100' },
                      { id: 'b', text: '$900' },
                      { id: 'c', text: '$1,000' },
                      { id: 'd', text: '$10,000' }
                    ],
                    answer: 'b',
                    hint: 'Reserves stay put; the remainder is lendable.',
                    steps: ['$1{,}000 \\times (1 - 0.10) = \\$900$ lent out. That loan becomes a new deposit elsewhere, and the process repeats — how banks multiply money.'],
                    answerText: '$900'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Fed\'s "dual mandate" refers to:',
                    choices: [
                      { id: 'a', text: 'Balancing the budget and paying off debt' },
                      { id: 'b', text: 'Maximum employment and stable prices' },
                      { id: 'c', text: 'Low taxes and high spending' },
                      { id: 'd', text: 'Regulating banks and printing currency' }
                    ],
                    answer: 'b',
                    hint: 'Two goals that sometimes conflict.',
                    steps: ['Congress directs the Fed to pursue maximum employment AND stable prices — growth without runaway inflation.'],
                    answerText: 'Employment + price stability'
                  },
                  {
                    type: 'choice',
                    prompt: 'In a recession, the Fed typically:',
                    choices: [
                      { id: 'a', text: 'Raises rates to encourage saving' },
                      { id: 'b', text: 'Lowers rates to encourage borrowing and spending' },
                      { id: 'c', text: 'Raises taxes' },
                      { id: 'd', text: 'Restricts bank lending' }
                    ],
                    answer: 'b',
                    hint: 'Cheap money stimulates.',
                    steps: ['Cutting rates makes borrowing cheaper, nudging firms to invest and households to spend — replacing missing demand.'],
                    answerText: 'Lowers rates'
                  },
                  {
                    type: 'choice',
                    prompt: 'Commercial banks "create" money when they:',
                    choices: [
                      { id: 'a', text: 'Print physical currency' },
                      { id: 'b', text: 'Issue loans — each loan creates a new deposit somewhere in the system' },
                      { id: 'c', text: 'Charge interest on savings' },
                      { id: 'd', text: 'Exchange foreign currency' }
                    ],
                    answer: 'b',
                    hint: 'Where does the borrower\'s money come from?',
                    steps: ['A \$900 loan lands as \$900 in someone\'s account — brand-new spending power that did not exist as currency before. Only the central bank and mint make physical money; banks multiply deposits through lending.'],
                    answerText: 'Lending creates deposits'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why did the Fed cut rates to near zero in early 2020?',
                    choices: [
                      { id: 'a', text: 'To fight runaway inflation' },
                      { id: 'b', text: 'To stimulate an economy suddenly frozen by the pandemic' },
                      { id: 'c', text: 'To strengthen the dollar' },
                      { id: 'd', text: 'To reduce the national debt' }
                    ],
                    answer: 'b',
                    hint: 'March 2020 was a collapse in demand, not a price spiral.',
                    steps: ['With spending collapsing, near-zero rates plus bond purchases made credit cheap and kept money flowing — classic expansionary monetary policy. The inflation fight came later, with hikes.'],
                    answerText: 'Emergency stimulus'
                  }
                ]
              }
            },
            {
              id: 'trade-and-exchange',
              title: 'International trade and exchange rates',
              minutes: 7,
              summary: 'Why countries trade, what a stronger dollar really means, and who actually pays tariffs.',
              tags: ['trade', 'exchange rates', 'macroeconomics'],
              blocks: [
                { type: 'p', text: 'Countries trade for the same reason people do: specialization makes everyone better off. Even when one nation is more productive at *everything*, **comparative advantage** says both gain by each specializing where their advantage is greatest.' },
                { type: 'example', title: 'Comparative advantage', text: 'Country A makes a car in 100 hours or a computer in 10. Country B: car in 200 hours, computer in 30. A is better at both — but comparatively *much* better at computers. A sells computers, buys cars from B, and both end up richer than working alone.' },
                { type: 'p', text: 'An **exchange rate** is the price of one currency in another. A "strong" dollar buys more foreign goods — great for tourists and importers, bad for exporters whose products get pricier abroad. Currency strength helps some Americans and hurts others.' },
                { type: 'callout', kind: 'key', text: 'A **tariff** is a tax on imports. It is paid by the importing firm — and largely passed to domestic consumers in higher prices. Tariffs protect specific industries while raising costs economy-wide.' },
                { type: 'callout', kind: 'warning', text: 'A trade deficit is not automatically bad — it often means the country is also attracting foreign investment. Focus on whether the borrowing funds growth, not on the deficit number alone.' }
              ],
              skill: {
                id: 'trade-and-exchange', name: 'Trade and exchange rates',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Comparative advantage means a country should specialize in goods it produces:',
                    choices: [
                      { id: 'a', text: 'In the largest total volume' },
                      { id: 'b', text: 'At the lowest opportunity cost' },
                      { id: 'c', text: 'Using the most labor' },
                      { id: 'd', text: 'That sell for the highest price' }
                    ],
                    answer: 'b',
                    hint: 'It is about what you give up, not what you are best at in absolute terms.',
                    steps: ['Comparative advantage = lowest *opportunity cost*. Even a country worse at everything can still trade profitably where its disadvantage is smallest.'],
                    answerText: 'Lowest opportunity cost'
                  },
                  {
                    type: 'choice',
                    prompt: 'The dollar strengthens from 100 to 120 yen per dollar. This makes Japanese goods for American buyers:',
                    choices: [
                      { id: 'a', text: 'More expensive' },
                      { id: 'b', text: 'Cheaper' },
                      { id: 'c', text: 'Unchanged' },
                      { id: 'd', text: 'Illegal to import' }
                    ],
                    answer: 'b',
                    hint: 'Each dollar now buys more yen.',
                    steps: ['A stronger dollar buys more foreign currency — imports get cheaper. American *exports*, meanwhile, become pricier for Japanese buyers.'],
                    answerText: 'Cheaper'
                  },
                  {
                    type: 'choice',
                    prompt: 'Economically, who pays most of the cost of a tariff on imported steel?',
                    choices: [
                      { id: 'a', text: 'The exporting country\'s government' },
                      { id: 'b', text: 'The exporting factories' },
                      { id: 'c', text: 'Domestic buyers, through higher prices' },
                      { id: 'd', text: 'No one — tariffs are free revenue' }
                    ],
                    answer: 'c',
                    hint: 'The tax is collected at the border — but who sees higher prices?',
                    steps: ['The importer pays the tariff at customs, then typically passes it along. Domestic steel users (auto makers, builders, consumers) bear most of the cost.'],
                    answerText: 'Domestic consumers'
                  },
                  {
                    type: 'choice',
                    prompt: 'A country runs a trade deficit. This necessarily means:',
                    choices: [
                      { id: 'a', text: 'Its economy is failing' },
                      { id: 'b', text: 'It imports more than it exports — nothing more, and nothing less' },
                      { id: 'c', text: 'It must default on debt' },
                      { id: 'd', text: 'Its currency is worthless' }
                    ],
                    answer: 'b',
                    hint: 'Beware value judgments — a deficit is just an accounting identity.',
                    steps: ['Deficit = imports > exports. The offsetting "capital account surplus" often means foreigners are investing in the country — potentially a sign of strength.'],
                    answerText: 'Imports exceed exports'
                  },
                  {
                    type: 'choice',
                    prompt: 'If one US dollar buys 0.90 euros, a €45 sweater in Paris costs an American tourist roughly:',
                    choices: [
                      { id: 'a', text: '$40.50' },
                      { id: 'b', text: '$45' },
                      { id: 'c', text: '$50' },
                      { id: 'd', text: '$49.50' }
                    ],
                    answer: 'c',
                    hint: 'Divide euros by euros-per-dollar.',
                    steps: ['$45 \div 0.90 = \$50$. When $1 = €0.90$, dollars are worth *more* than euros unit-for-unit — or equivalently a euro costs $1/0.90 \approx \$1.11$.'],
                    answerText: '$50'
                  },
                  {
                    type: 'choice',
                    prompt: 'A tariff on imported washing machines most directly benefits:',
                    choices: [
                      { id: 'a', text: 'Consumers, who get cheaper machines' },
                      { id: 'b', text: 'Domestic washing-machine makers, who now face less import competition' },
                      { id: 'c', text: 'Foreign exporters' },
                      { id: 'd', text: 'Shipping companies' }
                    ],
                    answer: 'b',
                    hint: 'A tariff raises the rival\'s price — who sells more at home?',
                    steps: ['Tariffs raise the price of imports, letting domestic producers keep or raise prices and market share. Consumers pay for that protection with higher prices.'],
                    answerText: 'Domestic producers'
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
};
