// Math, part 3: statistics & probability.
// Registered via content/index.js SUBJECT_FILES.

module.exports = {
  id: 'math',
  name: 'Mathematics',
  icon: 'sigma',
  color: '#6366f1',
  tagline: 'From counting to calculus — the language of patterns',
  description: 'Algebra, geometry, trigonometry, statistics, and calculus with unlimited practice and worked solutions.',
  courses: [
    {
      id: 'statistics-probability',
      title: 'Statistics & Probability',
      subtitle: 'High school / intro college',
      summary: 'Describe data with numbers and charts, then measure uncertainty — probability rules, counting, expected value, and the normal curve.',
      units: [
        {
          id: 'describing-data',
          title: 'Describing data',
          lessons: [
            {
              id: 'mean-median-mode',
              title: 'Mean, median, and mode',
              minutes: 7,
              summary: 'Three ways to describe the "center" of a data set — and when each one lies.',
              tags: ['statistics', 'mean', 'median'],
              blocks: [
                { type: 'p', text: 'A data set is a pile of numbers. To make sense of it, we summarize it with a single "typical" value — and there are three candidates: the **mean** (add everything, divide by the count), the **median** (the middle value when sorted), and the **mode** (the most frequent value).' },
                { type: 'example', title: 'Compute all three', text: 'For $2, 5, 5, 7, 9, 11$: mean $= \\frac{2+5+5+7+9+11}{6} = \\frac{39}{6} = 6.5$. Median: the two middle values are 5 and 7, so median $= 6$. Mode: $5$ appears twice.' },
                { type: 'callout', kind: 'key', text: 'The mean is pulled toward **outliers**. Nine friends earn about \\$60k each and one earns \\$2M — the mean salary is way above what almost everyone makes. The median resists this: it only cares about position, not size.' },
                { type: 'p', text: 'When a data set is symmetric, mean and median sit together. When it is **skewed** — a long tail of large values, like income or housing prices — the mean drifts into the tail while the median stays put. That is why "median home price" is quoted more often than the mean.' },
                { type: 'callout', kind: 'tip', text: 'Ask "would one extreme value distort the answer?" If yes, quote the median. If the data is balanced and every value matters equally, the mean is fine.' }
              ],
              skill: { id: 'mean-median-mode', name: 'Mean, median, and mode', generator: 'meanMedian' }
            },
            {
              id: 'visualizing-data',
              title: 'Visualizing data',
              minutes: 6,
              summary: 'Dot plots, histograms, and box plots — see the shape of data at a glance.',
              tags: ['statistics', 'graphs', 'histogram'],
              blocks: [
                { type: 'p', text: 'A table of numbers hides its pattern; a picture reveals it. A **dot plot** stacks one dot per data point over a number line — great for small sets. A **histogram** groups values into bins (ranges) and shows the count in each bin as a bar — the standard tool for large sets.' },
                { type: 'callout', kind: 'key', text: 'A histogram\'s **shape** tells the story: *symmetric* (mirror image around the center), *skewed right* (long tail of large values), *skewed left* (long tail of small values), or *bimodal* (two humps — often two different groups mixed together).' },
                { type: 'p', text: 'A **box plot** compresses data into five numbers: minimum, first quartile (Q1), median (Q2), third quartile (Q3), maximum. The box spans Q1 to Q3 — the middle 50% — with whiskers to the extremes. It is the fastest way to compare several groups side by side.' },
                { type: 'example', title: 'Read a box plot', text: 'Test scores in class A: min 60, Q1 72, median 80, Q3 88, max 96. Half the class scored between 72 and 88 (the box). The whisker from 60 to 72 covers the lowest quarter.' },
                { type: 'callout', kind: 'warning', text: 'A histogram bar covers a **range** — "30–40" means every value in that interval, not just 30 and 40. And histograms are not bar charts: the bins are consecutive and touching.' }
              ],
              skill: {
                id: 'visualizing-data', name: 'Reading data displays',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A histogram of household incomes has a long tail stretching toward large values. The distribution is:',
                    choices: [
                      { id: 'a', text: 'Symmetric' },
                      { id: 'b', text: 'Skewed right' },
                      { id: 'c', text: 'Skewed left' },
                      { id: 'd', text: 'Bimodal' }
                    ],
                    answer: 'b',
                    hint: 'The direction of skew names the side with the tail.',
                    steps: ['A long tail of large values drags the distribution "right" — this is **skewed right**. In skewed-right data the mean exceeds the median.'],
                    answerText: 'Skewed right'
                  },
                  {
                    type: 'choice',
                    prompt: 'In a box plot, the box itself (from Q1 to Q3) always contains what fraction of the data?',
                    choices: [
                      { id: 'a', text: 'One quarter (25%)' },
                      { id: 'b', text: 'One third (33%)' },
                      { id: 'c', text: 'One half (50%)' },
                      { id: 'd', text: 'All of it (100%)' }
                    ],
                    answer: 'c',
                    hint: 'Q1 cuts off the bottom 25%; Q3 cuts off the top 25%.',
                    steps: ['Q1 = 25th percentile, Q3 = 75th percentile. Between them lies the middle 50% of the data — the interquartile range (IQR).'],
                    answerText: '50%'
                  },
                  {
                    type: 'choice',
                    prompt: 'A dataset is symmetric except for one extremely large value. Which measure of center changes the MOST if that outlier is removed?',
                    choices: [
                      { id: 'a', text: 'The mode' },
                      { id: 'b', text: 'The median' },
                      { id: 'c', text: 'The mean' },
                      { id: 'd', text: 'None — they all resist outliers equally' }
                    ],
                    answer: 'c',
                    hint: 'The mean uses every value\'s size; the median uses only position.',
                    steps: ['The mean adds every value, so one huge value inflates it directly. The median just shifts by at most one position. Removing the outlier changes the mean dramatically.'],
                    answerText: 'The mean'
                  },
                  {
                    type: 'choice',
                    prompt: 'A histogram of test scores shows two separate humps — one near 55 and one near 85. The most likely explanation is:',
                    choices: [
                      { id: 'a', text: 'The data was rounded' },
                      { id: 'b', text: 'Two different groups (e.g. those who studied vs. those who did not) were combined' },
                      { id: 'c', text: 'The test was too easy' },
                      { id: 'd', text: 'The median equals the mean' }
                    ],
                    answer: 'b',
                    hint: 'A bimodal shape suggests the data is a mixture.',
                    steps: ['Two peaks usually mean two subpopulations — like two classes, or prepared vs. unprepared students — pooled into one chart.'],
                    answerText: 'Two groups combined'
                  },
                  {
                    type: 'choice',
                    prompt: 'A box plot\'s right whisker is much longer than its left. The data is probably:',
                    choices: [
                      { id: 'a', text: 'Skewed right — a few unusually large values' },
                      { id: 'b', text: 'Skewed left' },
                      { id: 'c', text: 'Perfectly symmetric' },
                      { id: 'd', text: 'Bimodal' }
                    ],
                    answer: 'a',
                    hint: 'A whisker stretches toward the extreme values.',
                    steps: ['The right whisker reaches to the maximum — a long right whisker means some values sit far above the box, i.e. skewed right.'],
                    answerText: 'Skewed right'
                  },
                  {
                    type: 'choice',
                    prompt: 'The key difference between a histogram and an ordinary bar chart is that a histogram:',
                    choices: [
                      { id: 'a', text: 'Uses vertical bars' },
                      { id: 'b', text: 'Groups continuous data into consecutive, touching bins' },
                      { id: 'c', text: 'Has labels on the x-axis' },
                      { id: 'd', text: 'Shows percentages instead of counts' }
                    ],
                    answer: 'b',
                    hint: 'What does each bar represent?',
                    steps: ['Histogram bins are numeric ranges sharing boundaries — the bars touch. A bar chart compares separate categories and its bars are separated.'],
                    answerText: 'Binned continuous ranges'
                  }
                ]
              }
            },
            {
              id: 'spread-and-variation',
              title: 'Spread: range, IQR, and standard deviation',
              minutes: 7,
              summary: 'Two data sets can share a mean yet feel completely different — spread is why.',
              tags: ['statistics', 'standard deviation', 'spread'],
              blocks: [
                { type: 'p', text: 'Two classes both average 80 on a test — but in one, everyone scored 78–82; in the other, half scored 50 and half scored 110. **Spread** captures that difference. The simplest measure is the **range**: max − min.' },
                { type: 'callout', kind: 'key', text: 'The **standard deviation** measures the typical distance from the mean. Compute each deviation $(x_i - \\bar{x})$, square them, average (that average is the **variance**, $\\sigma^2$), then take the square root: $\\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n}}$.' },
                { type: 'example', title: 'A two-point world', text: 'Data: $4, 6, 6, 8$. Mean $= 6$. Deviations: $-2, 0, 0, 2$ → squares $4, 0, 0, 4$ → variance $= \\frac{8}{4} = 2$ → $\\sigma = \\sqrt{2} \\approx 1.41$.' },
                { type: 'p', text: 'The **interquartile range** (IQR $= Q3 - Q1$) is the spread of the middle 50% — resistant to outliers, like the median. A common rule flags outliers as anything beyond $Q1 - 1.5\\,IQR$ or $Q3 + 1.5\\,IQR$.' },
                { type: 'callout', kind: 'tip', text: 'Report standard deviation alongside the mean — together they say far more than either alone. A factory making 500 g bottles with $\\sigma = 1$ g is precise; $\\sigma = 20$ g is chaos.' }
              ],
              skill: { id: 'spread-and-variation', name: 'Range and spread', generator: 'rangeIqr' }
            }
          ]
        },
        {
          id: 'probability',
          title: 'Probability',
          lessons: [
            {
              id: 'probability-basics',
              title: 'Probability basics',
              minutes: 6,
              summary: 'Probabilities live between 0 and 1 — and the counting formula P = favorable / total.',
              tags: ['probability', 'intro'],
              blocks: [
                { type: 'p', text: 'A **probability** measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). A coin landing heads has probability $\\frac{1}{2}$; rolling a 7 on one die has probability $0$.' },
                { type: 'callout', kind: 'key', text: 'When all outcomes are equally likely: $$P(\\text{event}) = \\frac{\\text{number of favorable outcomes}}{\\text{number of possible outcomes}}$$ Draw a card: $P(\\text{ace}) = \\frac{4}{52} = \\frac{1}{13}$.' },
                { type: 'p', text: 'The **complement** rule is the fastest tool in the toolbox: the probability something does *not* happen is $1 - P(\\text{it does})$. "At least one" questions almost always want this: $P(\\text{at least one}) = 1 - P(\\text{none})$.' },
                { type: 'example', title: 'Marble draw', text: 'A bag holds 3 red and 7 blue marbles. $P(\\text{red}) = \\frac{3}{10}$ and $P(\\text{not red}) = \\frac{7}{10}$. The two probabilities must sum to 1 — every draw lands somewhere.' },
                { type: 'callout', kind: 'warning', text: 'A probability can be written as a fraction, decimal, or percent — $\\frac{1}{4}$, $0.25$, and 25% all mean the same thing — but it can never be negative or exceed 1. If a calculation gives $P = 1.4$, an error happened.' }
              ],
              skill: { id: 'probability-basics', name: 'Basic probability', generator: 'simpleProbability' }
            },
            {
              id: 'compound-events',
              title: 'Independent and dependent events',
              minutes: 7,
              summary: 'When to multiply probabilities — and when independence is just an assumption.',
              tags: ['probability', 'independence'],
              blocks: [
                { type: 'p', text: 'Two events are **independent** when one\'s outcome does not change the other\'s odds — separate coin flips, spins of a wheel, draws *with replacement*. For independent events: $$P(A \\text{ and } B) = P(A) \\times P(B)$$' },
                { type: 'example', title: 'Two coin flips', text: '$P(\\text{two heads}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. All four outcomes — HH, HT, TH, TT — are equally likely, and only one is HH.' },
                { type: 'p', text: 'Events become **dependent** when one outcome changes the next. Draw two cards *without* replacement: $P(\\text{two aces}) = \\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} \\approx 0.45\\%$ — after the first ace, only 3 remain among 51 cards.' },
                { type: 'callout', kind: 'key', text: 'The word "without replacement" is the signal for dependence. It shrinks both the favorable count and the total on the next draw.' },
                { type: 'callout', kind: 'warning', text: 'The gambler\'s fallacy is forgetting independence: after five heads in a row, $P(\\text{heads})$ is still $\\frac{1}{2}$ — the coin has no memory. Streaks happen by chance; they do not "balance out."' }
              ],
              skill: { id: 'compound-events', name: 'Compound probability', generator: 'independentEvents' }
            },
            {
              id: 'counting-outcomes',
              title: 'Counting: permutations and combinations',
              minutes: 8,
              summary: 'Multiply choices, arrange in order, or select without order — the arithmetic of possibility.',
              tags: ['probability', 'combinatorics', 'counting'],
              blocks: [
                { type: 'p', text: 'The **counting principle** says: if a task has $m$ ways to happen and a second task has $n$ ways, doing both has $m \\times n$ outcomes. 4 shirts and 3 pairs of pants make $4 \\times 3 = 12$ outfits.' },
                { type: 'callout', kind: 'key', text: 'Arranging $n$ distinct items **in order** has $n!$ (n factorial) ways: $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$. Order matters → **permutation**.' },
                { type: 'p', text: 'When order does not matter — choosing 2 toppings out of 5, or picking a committee — each selection was counted multiple times in the factorial. Dividing out the reorderings gives the **combination**: $$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$' },
                { type: 'example', title: 'Choose 2 of 5', text: '$\\binom{5}{2} = \\frac{5!}{2!\\,3!} = \\frac{5 \\times 4}{2} = 10$. There are 10 ways to pick a pair — versus $5 \\times 4 = 20$ ordered arrangements, since each pair appears 2 ways.' },
                { type: 'callout', kind: 'tip', text: 'Ask: "does swapping the picked items create a new outcome?" Yes → permutation ($P(n,k) = \\frac{n!}{(n-k)!}$). No → combination ($\\binom{n}{k}$).' }
              ],
              skill: { id: 'counting-outcomes', name: 'Counting outcomes', generator: 'countingPrinciple' }
            },
            {
              id: 'expected-value',
              title: 'Expected value',
              minutes: 7,
              summary: 'The long-run average of a random process — how casinos, insurers, and lotteries think.',
              tags: ['probability', 'expected value'],
              blocks: [
                { type: 'p', text: '**Expected value** weights every possible outcome by its probability and adds them up: $$E = \\sum x_i \\cdot P(x_i)$$ It is the average you would get per play if you repeated the process forever.' },
                { type: 'example', title: 'A fair-ish game', text: 'A spinner pays 10 points with probability $\\frac{1}{4}$ and 2 points otherwise. $E = 10 \\times \\frac{1}{4} + 2 \\times \\frac{3}{4} = 2.5 + 1.5 = 4$ points per spin on average.' },
                { type: 'callout', kind: 'key', text: 'A game is **fair** when $E = 0$ relative to its cost. A lottery ticket that pays an expected \\$0.60 for \\$1.00 is a 40-cent loss per ticket — expected value converts hype into arithmetic.' },
                { type: 'p', text: 'Insurance companies, casinos, and investors all live on this number: they only need each bet or policy to have a small positive expected value, then repeat millions of times. The gambler plays once; the house plays forever.' },
                { type: 'callout', kind: 'warning', text: 'Expected value is not a prediction — the spinner will never pay exactly 4.0 points. It describes the *average over many trials*, not the next outcome.' }
              ],
              skill: { id: 'expected-value', name: 'Expected value', generator: 'expectedValue' }
            },
            {
              id: 'normal-distribution',
              title: 'The normal distribution',
              minutes: 6,
              summary: 'The bell curve: 68–95–99.7, z-scores, and why "average" things cluster.',
              tags: ['statistics', 'normal distribution'],
              blocks: [
                { type: 'p', text: 'Heights, test scores, measurement errors — many natural quantities pile up near a center and thin out symmetrically on both sides. That shape is the **normal distribution**, the famous bell curve, fully described by a mean $\\mu$ and standard deviation $\\sigma$.' },
                { type: 'callout', kind: 'key', text: 'The **68–95–99.7 rule**: about 68% of values fall within $1\\sigma$ of the mean, 95% within $2\\sigma$, and 99.7% within $3\\sigma$. For $\\mu = 100, \\sigma = 15$: roughly 95% of values lie between 70 and 130.' },
                { type: 'p', text: 'A **z-score** converts any value into "how many standard deviations from the mean": $z = \\frac{x - \\mu}{\\sigma}$. A score of 130 in that example gives $z = \\frac{130-100}{15} = 2$ — higher than about 97.5% of the population.' },
                { type: 'example', title: 'Compare apples to oranges', text: 'Who did better — Maya (SAT 1400, $\\mu=1050, \\sigma=200$, so $z=1.75$) or Leo (ACT 30, $\\mu=21, \\sigma=5$, so $z=1.8$)? Z-scores put them on one scale: Leo\'s result is slightly rarer.' },
                { type: 'callout', kind: 'tip', text: 'The bell curve emerges whenever many small independent effects add up — the **central limit theorem**. It is the reason averages of samples look normal even when individual data is not.' }
              ],
              skill: {
                id: 'normal-distribution', name: 'Normal distribution',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Scores are normally distributed with $\\mu = 500$ and $\\sigma = 100$. About what percent score between 400 and 600?',
                    choices: [
                      { id: 'a', text: '50%' },
                      { id: 'b', text: '68%' },
                      { id: 'c', text: '95%' },
                      { id: 'd', text: '99.7%' }
                    ],
                    answer: 'b',
                    hint: 'How many standard deviations is each bound from the mean?',
                    steps: ['$400 = \\mu - \\sigma$ and $600 = \\mu + \\sigma$. By the 68–95–99.7 rule, about 68% fall within one standard deviation.'],
                    answerText: '68%'
                  },
                  {
                    type: 'choice',
                    prompt: 'In a normal distribution with $\\mu = 60, \\sigma = 5$, what is the z-score of a value $x = 70$?',
                    choices: [
                      { id: 'a', text: '$z = 1$' },
                      { id: 'b', text: '$z = 2$' },
                      { id: 'c', text: '$z = 10$' },
                      { id: 'd', text: '$z = 0.5$' }
                    ],
                    answer: 'b',
                    hint: '$z = (x - \\mu) / \\sigma$',
                    steps: ['$z = \\frac{70 - 60}{5} = \\frac{10}{5} = 2$. The value sits two standard deviations above the mean.'],
                    answerText: 'z = 2'
                  },
                  {
                    type: 'choice',
                    prompt: 'A value has z-score $z = -1.5$. What does that mean?',
                    choices: [
                      { id: 'a', text: 'It is 1.5 units below the mean' },
                      { id: 'b', text: 'It is 1.5 standard deviations below the mean' },
                      { id: 'c', text: 'It is impossible — z-scores are always positive' },
                      { id: 'd', text: 'It equals $-1.5$' }
                    ],
                    answer: 'b',
                    hint: 'Z-scores count standard deviations, and sign shows direction.',
                    steps: ['$z = -1.5$ means the value sits 1.5 standard deviations *below* the mean — negative z means below average, not impossible.'],
                    answerText: '1.5σ below the mean'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why do so many real-world quantities follow the normal distribution?',
                    choices: [
                      { id: 'a', text: 'Nature prefers symmetry' },
                      { id: 'b', text: 'The central limit theorem — sums of many small independent effects become bell-shaped' },
                      { id: 'c', text: 'Scientists choose to measure normally' },
                      { id: 'd', text: 'It is a coincidence' }
                    ],
                    answer: 'b',
                    hint: 'Think of height: many genes + nutrition + chance all add together.',
                    steps: ['When a measurement is the sum of many small independent influences, the sum\'s distribution approaches normal — this is the central limit theorem.'],
                    answerText: 'Central limit theorem'
                  },
                  {
                    type: 'choice',
                    prompt: 'Heights are normal with $\mu = 170$ cm, $\sigma = 8$ cm. Roughly what fraction of people are taller than 186 cm?',
                    choices: [
                      { id: 'a', text: 'About 2.5%' },
                      { id: 'b', text: 'About 16%' },
                      { id: 'c', text: 'About 32%' },
                      { id: 'd', text: 'About 5%' }
                    ],
                    answer: 'a',
                    hint: '186 is two standard deviations above the mean — use 95% within $2\sigma$ and split the outside.',
                    steps: ['$186 = 170 + 2(8)$ — exactly $2\sigma$ up. About 95% lie within $\pm 2\sigma$, so 5% lie outside; symmetric tails put half of that — 2.5% — above.'],
                    answerText: '≈ 2.5%'
                  },
                  {
                    type: 'choice',
                    prompt: 'On two exams with the same $\sigma$, Priya\'s score has $z = 0.8$ and Sam\'s has $z = 1.6$. Who performed better relative to the group?',
                    choices: [
                      { id: 'a', text: 'Priya — lower z is better' },
                      { id: 'b', text: 'Sam — higher z means further above average' },
                      { id: 'c', text: 'They scored identically' },
                      { id: 'd', text: 'Cannot tell without knowing the means' }
                    ],
                    answer: 'b',
                    hint: 'Z-scores already fold in the mean and spread.',
                    steps: ['A z-score IS the relative standing: $z = 1.6$ beats $z = 0.8$ regardless of the raw means — Sam is 1.6 standard deviations above average vs. 0.8.'],
                    answerText: 'Sam (higher z)'
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
