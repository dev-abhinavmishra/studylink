// Subject: Economics — microeconomics essentials + personal finance.

module.exports = {
  id: 'economics',
  name: 'Economics',
  icon: 'dollar',
  color: '#059669',
  tagline: 'How people, markets, and money actually work',
  description: 'Understand incentives, markets, and your own money — from supply and demand to compound interest.',
  courses: [
    {
      id: 'microeconomics-essentials',
      title: 'Microeconomics Essentials',
      subtitle: 'High school / intro college',
      summary: 'Scarcity, opportunity cost, supply and demand, elasticity, and how markets coordinate millions of strangers.',
      units: [
        {
          id: 'thinking-like-an-economist',
          title: 'Thinking like an economist',
          lessons: [
            {
              id: 'scarcity-and-tradeoffs',
              title: 'Scarcity and trade-offs',
              minutes: 6,
              summary: 'Economics starts with one fact: wants are unlimited, resources are not.',
              tags: ['scarcity', 'trade-offs', 'economics intro'],
              blocks: [
                { type: 'p', text: '**Scarcity** means society has limited resources — time, money, labor, raw materials — but unlimited wants. Every economic question flows from that gap. Because you cannot have everything, every choice has a cost.' },
                { type: 'callout', kind: 'key', text: 'A **trade-off** is what you give up when you choose one option over another. Economics is mostly the study of trade-offs: more of this means less of that.' },
                { type: 'p', text: 'Trade-offs apply to individuals (study or sleep), firms (build factories or hire researchers), and governments (defense or healthcare). A **production possibilities frontier** draws this trade-off as a curve: points on the curve are efficient, points inside it waste resources, and points outside it are impossible with current resources.' },
                { type: 'example', title: 'Guns and butter', text: 'A classic frontier: an economy can produce 500 tanks *or* 1,000 tons of butter, or combinations on the curve. Producing 300 tanks + 600 butter is efficient; 200 + 500 wastes capacity; 500 + 1,000 is unattainable.' },
                { type: 'callout', kind: 'tip', text: 'When a question asks "what is the trade-off," look for what was *not* chosen — the best alternative given up.' }
              ],
              skill: {
                id: 'scarcity-and-tradeoffs',
                name: 'Identify trade-offs',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A city has $2M to spend and can fund either a new library or road repairs, not both. The trade-off of choosing the library is:',
                    choices: [
                      { id: 'a', text: 'The $2M cost of the library' },
                      { id: 'b', text: 'The road repairs that go unfunded' },
                      { id: 'c', text: 'The librarians\' salaries' },
                      { id: 'd', text: 'The books inside the library' }
                    ],
                    answer: 'b',
                    hint: 'A trade-off is the alternative you give up, not the money itself.',
                    steps: ['The $2M is the same either way — what differs is what it buys.', 'Choosing the library means giving up the next-best use: road repairs.'],
                    answerText: 'The road repairs that go unfunded'
                  },
                  {
                    type: 'choice',
                    prompt: 'On a production possibilities frontier, a point *inside* the curve represents:',
                    choices: [
                      { id: 'a', text: 'An unattainable combination' },
                      { id: 'b', text: 'Maximum efficiency' },
                      { id: 'c', text: 'Inefficient use of resources' },
                      { id: 'd', text: 'Economic growth' }
                    ],
                    answer: 'c',
                    hint: 'Inside = producing less than possible.',
                    steps: ['The curve itself is efficiency.', 'Inside the curve means resources are idle or wasted — you could make more of both goods.'],
                    answerText: 'Inefficient use of resources'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is NOT a resource economists consider scarce?',
                    choices: [
                      { id: 'a', text: 'A student\'s hours before the exam' },
                      { id: 'b', text: 'Clean water in a desert town' },
                      { id: 'c', text: 'Human desires for goods' },
                      { id: 'd', text: 'Skilled software engineers' }
                    ],
                    answer: 'c',
                    hint: 'Scarcity is about resources being limited — what is unlimited here?',
                    steps: ['Scarcity = limited resources vs. unlimited wants.', 'Wants (desires) are the unlimited side of the equation, not the scarce resource.'],
                    answerText: 'Human desires for goods'
                  },
                  {
                    type: 'choice',
                    prompt: 'You spend Saturday working a shift for $80 instead of studying for Tuesday\'s exam. Economists would say the shift\'s true cost is best described by:',
                    choices: [
                      { id: 'a', text: 'Zero — you gained $80' },
                      { id: 'b', text: 'The study time you gave up' },
                      { id: 'c', text: 'The gas money to get to work' },
                      { id: 'd', text: '$80 minus your transportation costs' }
                    ],
                    answer: 'b',
                    hint: 'Cost in economics means the best alternative forgone.',
                    steps: ['This is opportunity cost: the value of your next-best option.', 'That option was studying — the money earned does not erase what you gave up.'],
                    answerText: 'The study time you gave up'
                  },
                  {
                    type: 'choice',
                    prompt: 'A production possibilities frontier bows outward (concave) mainly because:',
                    choices: [
                      { id: 'a', text: 'Resources are equally good at producing everything' },
                      { id: 'b', text: 'Resources are specialized — moving them between products costs increasingly more' },
                      { id: 'c', text: 'Prices rise as output rises' },
                      { id: 'd', text: 'Demand always exceeds supply' }
                    ],
                    answer: 'b',
                    hint: 'Why does producing the 100th tank cost more butter than the 1st?',
                    steps: ['Some resources suit tanks; others suit butter.', 'Shifting butter-suited land into tanks sacrifices a lot of butter — increasing opportunity cost bows the curve.'],
                    answerText: 'Resources are specialized — moving them between products costs increasingly more'
                  },
                  {
                    type: 'choice',
                    prompt: 'Economic growth (better technology, more resources) shifts the production possibilities frontier:',
                    choices: [
                      { id: 'a', text: 'Inward, toward the origin' },
                      { id: 'b', text: 'Outward — more of both goods becomes possible' },
                      { id: 'c', text: 'It rotates around one axis only' },
                      { id: 'd', text: 'It does not move; only points inside change' }
                    ],
                    answer: 'b',
                    hint: 'Growth expands what is attainable.',
                    steps: ['Growth raises the economy\'s capacity.', 'Previously unattainable points outside the curve become reachable — the frontier shifts outward.'],
                    answerText: 'Outward — more of both goods becomes possible'
                  }
                ]
              }
            },
            {
              id: 'opportunity-cost',
              title: 'Opportunity cost',
              minutes: 7,
              summary: 'The true cost of anything is what you give up to get it — not the price tag.',
              tags: ['opportunity cost', 'decision making', 'cost-benefit'],
              blocks: [
                { type: 'p', text: '**Opportunity cost** is the value of your next-best alternative — the thing you *didn\'t* choose. A \$20 ticket doesn\'t cost \$20 if buying it means skipping a \$25 babysitting gig: its opportunity cost includes that forgone income.' },
                { type: 'callout', kind: 'key', text: 'Cost = explicit costs (money spent) **+** implicit costs (value of forgone alternatives). Economists count both; accountants count only the first.' },
                { type: 'p', text: 'This idea changes real decisions. "Free" college isn\'t free — four years of tuition may be waived, but you give up four years of wages. Whether that trade is worth it depends on the earnings premium a degree unlocks.' },
                { type: 'example', title: 'The real price of a concert', text: 'Tickets are free, but attending means skipping a \$60 shift. Opportunity cost = \$60 (implicit) + \$0 (explicit) = \$60. If the concert is worth more than \$60 of enjoyment, go.' },
                { type: 'callout', kind: 'tip', text: 'Sunk costs are *not* opportunity costs. Money already spent and unrecoverable should not influence the next decision — "I paid for the buffet, so I must finish it" is the sunk-cost fallacy.' },
                { type: 'h2', text: 'Comparative advantage' },
                { type: 'p', text: 'Opportunity cost explains why trade works: whoever produces a good at the *lowest opportunity cost* has a **comparative advantage** — even if they\'re worse at everything. Specialize where your opportunity cost is lowest, trade for the rest, and both sides end up ahead.' }
              ],
              skill: {
                id: 'opportunity-cost',
                name: 'Compute opportunity cost',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'You can either take a \$15/hr shift for 4 hours or attend a free workshop. The opportunity cost of the workshop is:',
                    choices: [
                      { id: 'a', text: '$0 — it is free' },
                      { id: 'b', text: '$15' },
                      { id: 'c', text: '$60' },
                      { id: 'd', text: '4 hours' }
                    ],
                    answer: 'c',
                    hint: 'Value of the best forgone alternative, in dollars.',
                    steps: ['The alternative is 4 hours × $15/hr = $60 of forgone wages.', 'Opportunity cost = $60.'],
                    answerText: '$60'
                  },
                  {
                    type: 'choice',
                    prompt: 'You paid $40 for a nonrefundable concert ticket. The night of the show you feel sick. The $40 should:',
                    choices: [
                      { id: 'a', text: 'Push you to go — otherwise it is wasted' },
                      { id: 'b', text: 'Be ignored — it is a sunk cost' },
                      { id: 'c', text: 'Be added to the cost of staying home' },
                      { id: 'd', text: 'Be subtracted from future concert costs' }
                    ],
                    answer: 'b',
                    hint: 'Can you recover the $40 either way?',
                    steps: ['The ticket is nonrefundable: $40 is gone whether you go or not.', 'Only future consequences matter — sunk costs should not drive the decision.'],
                    answerText: 'Be ignored — it is a sunk cost'
                  },
                  {
                    type: 'choice',
                    prompt: 'Maria can make 10 websites or 30 logos a week. Jamal can make 5 websites or 5 logos. Who has a comparative advantage in logos?',
                    choices: [
                      { id: 'a', text: 'Maria — her logos cost fewer websites' },
                      { id: 'b', text: 'Jamal — he is better at nothing but logos' },
                      { id: 'c', text: 'Neither — Maria is better at everything' },
                      { id: 'd', text: 'Both equally' }
                    ],
                    answer: 'a',
                    hint: 'Compare opportunity cost per logo: how many websites each gives up.',
                    steps: ['Maria: 1 logo costs 10/30 = 1/3 website.', 'Jamal: 1 logo costs 5/5 = 1 website.', 'Maria\'s opportunity cost (1/3) is lower — she has the comparative advantage in logos even though she is better at both in absolute terms. Jamal\'s advantage is in websites (1 logo vs. 3).'],
                    answerText: 'Maria — her logos cost fewer websites'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A farm can grow 200 kg of wheat or 300 kg of corn on a field. If it uses the whole field for corn, the opportunity cost (in kg of wheat) is:',
                    answer: 200,
                    tolerance: 0.01,
                    hint: 'What is the best alternative given up?',
                    steps: ['Choosing corn means no wheat: 200 kg of wheat forgone.', 'Opportunity cost = 200 kg of wheat.'],
                    answerText: '200 kg of wheat'
                  },
                  {
                    type: 'choice',
                    prompt: 'Attending a year of college costs $20,000 in tuition. You also give up a $35,000/yr job. The economist\'s annual cost of college is:',
                    choices: [
                      { id: 'a', text: '$20,000' },
                      { id: 'b', text: '$35,000' },
                      { id: 'c', text: '$55,000' },
                      { id: 'd', text: '$15,000' }
                    ],
                    answer: 'c',
                    hint: 'Add explicit + implicit costs.',
                    steps: ['Explicit: $20,000 tuition. Implicit: $35,000 forgone wages.', 'Total economic cost = $55,000.'],
                    answerText: '$55,000'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A web designer earns $50/hr. Fixing her own sink takes 3 hours (a plumber would charge $180 total). What is the opportunity cost of doing it herself, in dollars?',
                    answer: 150,
                    tolerance: 0.5,
                    hint: 'What do those 3 hours cost in forgone work?',
                    steps: ['3 hours × $50/hr = $150 of forgone income.', 'Opportunity cost = $150 — less than the plumber\'s $180, so DIY wins here.'],
                    answerText: '$150'
                  }
                ]
              }
            },
            {
              id: 'marginal-analysis',
              title: 'Marginal analysis: thinking on the edge',
              minutes: 7,
              summary: 'Good decisions compare the next unit\'s benefit to the next unit\'s cost — not averages.',
              tags: ['marginal analysis', 'marginal benefit', 'marginal cost'],
              blocks: [
                { type: 'p', text: '**Marginal** means "one more." Marginal benefit is the extra gain from one more unit; marginal cost is what one more unit costs you. Rational decisions continue an activity until marginal benefit equals marginal cost — then stop.' },
                { type: 'formula', text: '\\text{Keep going while } MB \\geq MC; \\quad \\text{stop when } MB < MC' },
                { type: 'callout', kind: 'key', text: 'Diminishing marginal benefit: the 3rd slice of pizza satisfies less than the 1st. Rising marginal cost: the 5th hour of cramming exhausts you more than the 1st. Together they pin down the optimal stopping point.' },
                { type: 'example', title: 'How many hours to study?', text: 'Hour 1 of studying adds ~12 expected points; hour 5 adds ~1. If your time is worth \$20/hr and each point is "worth" \$5 to your grade goals, stop where \$5 × points < \$20 — around hour 4.' },
                { type: 'callout', kind: 'warning', text: 'Averages mislead. If your average quiz score is 80, that says nothing about whether one more practice test helps — what matters is the *marginal* gain from the next one.' },
                { type: 'p', text: 'Firms use the same logic: produce until marginal revenue equals marginal cost. Airlines fill cheap last-minute seats because the marginal cost of one more passenger (a snack, a bit of fuel) is tiny compared to the fare.' }
              ],
              skill: {
                id: 'marginal-analysis',
                name: 'Apply marginal analysis',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A café sells a pastry for $4. The 50th pastry of the day costs $3.80 to make (extra labor, ingredients). Sell it?',
                    choices: [
                      { id: 'a', text: 'No — margins are thin' },
                      { id: 'b', text: 'Yes — $4 > $3.80, marginal revenue beats marginal cost' },
                      { id: 'c', text: 'Only if average profit is positive' },
                      { id: 'd', text: 'Only if it is the last one' }
                    ],
                    answer: 'b',
                    hint: 'Compare the benefit and cost of *this* pastry only.',
                    steps: ['Marginal benefit = $4; marginal cost = $3.80.', 'MB > MC → sell it. The $0.20 adds to profit.'],
                    answerText: 'Yes — marginal revenue exceeds marginal cost'
                  },
                  {
                    type: 'choice',
                    prompt: '"Diminishing marginal benefit" explains why:',
                    choices: [
                      { id: 'a', text: 'Water is cheap though essential, while diamonds are expensive but optional' },
                      { id: 'b', text: 'Prices always rise over time' },
                      { id: 'c', text: 'Firms always maximize output' },
                      { id: 'd', text: 'Taxes reduce consumption' }
                    ],
                    answer: 'a',
                    hint: 'Price reflects the value of the *next* unit, not total usefulness.',
                    steps: ['Water is abundant: the marginal liter is worth little, so price is low.', 'Diamonds are rare: the marginal stone is highly valued, so price is high — the diamond-water paradox, resolved by marginal thinking.'],
                    answerText: 'Water is cheap though essential, while diamonds are expensive but optional'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Your 4th hour of review adds 3 points to your expected score; the 5th adds 1 point. If each point is worth $8 to you and each hour costs you $15 of free time, how many total hours should you review (given hour-by-hour: +9, +6, +4, +3, +1 points)?',
                    answer: 4,
                    tolerance: 0.01,
                    hint: 'Stop when the next hour\'s benefit falls below its cost.',
                    steps: ['Hour 4: 3 pts × $8 = $24 > $15 → worth it.', 'Hour 5: 1 pt × $8 = $8 < $15 → stop.', 'Answer: 4 hours.'],
                    answerText: '4'
                  },
                  {
                    type: 'choice',
                    prompt: 'A theater sells leftover seats cheaply minutes before showtime because:',
                    choices: [
                      { id: 'a', text: 'Marginal cost of one more viewer is nearly zero' },
                      { id: 'b', text: 'Average cost per seat is low' },
                      { id: 'c', text: 'It maximizes total attendance' },
                      { id: 'd', text: 'Fixed costs disappear late' }
                    ],
                    answer: 'a',
                    hint: 'The show runs either way — what does one more attendee cost?',
                    steps: ['The play, building, and cast are paid for regardless.', 'Marginal cost of seat #301 ≈ $0, so any positive price beats the marginal cost.'],
                    answerText: 'Marginal cost of one more viewer is nearly zero'
                  },
                  {
                    type: 'choice',
                    prompt: 'Optimal quantity of an activity is reached when:',
                    choices: [
                      { id: 'a', text: 'Total benefit equals total cost' },
                      { id: 'b', text: 'Marginal benefit equals marginal cost' },
                      { id: 'c', text: 'Average benefit is maximized' },
                      { id: 'd', text: 'Marginal cost is minimized' }
                    ],
                    answer: 'b',
                    hint: 'It is about the *next* unit.',
                    steps: ['While MB > MC, expanding adds net benefit.', 'Once MB < MC, further units subtract value. The crossover — MB = MC — is optimal.'],
                    answerText: 'Marginal benefit equals marginal cost'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A bakery\'s marginal cost per cupcake rises: $1.50, $1.60, $1.70, $1.90, $2.40 for cupcakes 101–105. Selling price is $2.00. What is the last cupcake number worth baking?',
                    answer: 104,
                    tolerance: 0.01,
                    hint: 'Bake while marginal cost stays below the price.',
                    steps: ['Cupcakes 101–104: MC of $1.50–$1.90 all < $2.00 → profitable.', 'Cupcake 105: MC $2.40 > $2.00 → loses money.', 'Answer: 104.'],
                    answerText: '104'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'markets',
          title: 'Markets: supply and demand',
          lessons: [
            {
              id: 'supply-and-demand',
              title: 'Supply and demand',
              minutes: 9,
              summary: 'Two curves explain most prices: what buyers want and what sellers will offer.',
              tags: ['supply', 'demand', 'equilibrium', 'markets'],
              blocks: [
                { type: 'p', text: 'The **law of demand**: all else equal, higher price → lower quantity demanded. The **law of supply**: higher price → higher quantity supplied. Put them on one graph and they cross at the **equilibrium** — the price where the quantity buyers want exactly equals what sellers offer.' },
                { type: 'callout', kind: 'key', text: 'At prices above equilibrium, a **surplus** pushes sellers to cut prices. Below it, a **shortage** lets sellers raise them. Markets grind toward the clearing price on their own.' },
                { type: 'p', text: 'Crucially, a **change in price** moves you *along* a curve (quantity demanded changes); a change in something else — income, tastes, input costs, number of buyers or sellers — *shifts* the whole curve.' },
                { type: 'example', title: 'Why concert resale prices spike', text: 'Face value \$80, but 40,000 fans want 10,000 seats. At \$80 demand exceeds supply — a shortage — so resellers charge \$300, where only ~10,000 fans still want tickets. Equilibrium found.' },
                { type: 'list', items: [
                  '**Demand shifters**: income, prices of substitutes/complements, tastes, expectations, number of buyers',
                  '**Supply shifters**: input costs, technology, taxes/subsidies, number of sellers, expectations',
                  'Price itself is *never* a shifter — it causes movement along the curve'
                ] },
                { type: 'callout', kind: 'warning', text: 'Don\'t say "demand increased" when the price just changed. If gas gets expensive and people drive less, that\'s a *decrease in quantity demanded* (movement), not a decrease in demand (shift).' }
              ],
              skill: {
                id: 'supply-and-demand',
                name: 'Predict market shifts',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The price of coffee beans (an input) rises sharply. In the coffee market:',
                    choices: [
                      { id: 'a', text: 'Demand shifts left' },
                      { id: 'b', text: 'Supply shifts left — higher cost reduces what sellers offer at each price' },
                      { id: 'c', text: 'Quantity supplied decreases along an unchanged curve' },
                      { id: 'd', text: 'Demand shifts right' }
                    ],
                    answer: 'b',
                    hint: 'Input costs affect sellers, not buyers.',
                    steps: ['Beans are an input cost — a supply shifter.', 'Higher cost → less supply at every price → supply curve shifts left → price rises.'],
                    answerText: 'Supply shifts left'
                  },
                  {
                    type: 'choice',
                    prompt: 'A celebrity makes mechanical keyboards trendy overnight. In that market:',
                    choices: [
                      { id: 'a', text: 'Supply shifts right' },
                      { id: 'b', text: 'Demand shifts right — more buyers at every price' },
                      { id: 'c', text: 'Quantity demanded rises because price fell' },
                      { id: 'd', text: 'Both curves shift left' }
                    ],
                    answer: 'b',
                    hint: 'Tastes and preferences are demand shifters.',
                    steps: ['A taste change raises demand at every price → demand shifts right.', 'New equilibrium: higher price AND higher quantity.'],
                    answerText: 'Demand shifts right — more buyers at every price'
                  },
                  {
                    type: 'choice',
                    prompt: 'At a price of $5, sellers offer 1,000 lemons but buyers only want 400. This market has a:',
                    choices: [
                      { id: 'a', text: 'Shortage of 600 — price will rise' },
                      { id: 'b', text: 'Surplus of 600 — price will fall toward equilibrium' },
                      { id: 'c', text: 'Equilibrium at $5' },
                      { id: 'd', text: 'Demand curve shift' }
                    ],
                    answer: 'b',
                    hint: 'Supply exceeds demand at that price.',
                    steps: ['Quantity supplied (1,000) > quantity demanded (400): surplus of 600.', 'Unsold inventory pushes sellers to lower prices until the market clears.'],
                    answerText: 'Surplus of 600 — price will fall'
                  },
                  {
                    type: 'choice',
                    prompt: 'Both supply and demand for laptops increase (new chip tech + more remote workers). The result:',
                    choices: [
                      { id: 'a', text: 'Price rises, quantity falls' },
                      { id: 'b', text: 'Quantity rises; price change is ambiguous' },
                      { id: 'c', text: 'Price falls, quantity rises' },
                      { id: 'd', text: 'Both rise for sure' }
                    ],
                    answer: 'b',
                    hint: 'The shifts push price in opposite directions.',
                    steps: ['Demand ↑ pushes price up and quantity up.', 'Supply ↑ pushes price down and quantity up.', 'Quantity definitely rises; the price effect depends on which shift is bigger.'],
                    answerText: 'Quantity rises; price change is ambiguous'
                  },
                  {
                    type: 'choice',
                    prompt: 'A binding **price ceiling** (like rent control below equilibrium) causes:',
                    choices: [
                      { id: 'a', text: 'A surplus of housing' },
                      { id: 'b', text: 'A shortage — quantity demanded exceeds quantity supplied' },
                      { id: 'c', text: 'Equilibrium to move up' },
                      { id: 'd', text: 'Supply to increase' }
                    ],
                    answer: 'b',
                    hint: 'Legal price below the clearing price — what happens to sellers vs. buyers?',
                    steps: ['Below-equilibrium price raises quantity demanded and lowers quantity supplied.', 'Result: persistent shortage — waitlists, search costs, under-the-table payments.'],
                    answerText: 'A shortage — quantity demanded exceeds quantity supplied'
                  },
                  {
                    type: 'choice',
                    prompt: 'Electric cars get cheaper to build (battery breakthrough). In the gasoline-car market, all else equal:',
                    choices: [
                      { id: 'a', text: 'Supply shifts right' },
                      { id: 'b', text: 'Demand shifts left — a substitute got cheaper' },
                      { id: 'c', text: 'Demand shifts right' },
                      { id: 'd', text: 'No effect — different product' }
                    ],
                    answer: 'b',
                    hint: 'Cheaper substitutes pull buyers away.',
                    steps: ['EVs substitute for gas cars; a cheaper substitute lowers demand for the alternative.', 'Gas-car demand shifts left → lower price, lower quantity.'],
                    answerText: 'Demand shifts left — a substitute got cheaper'
                  }
                ]
              }
            },
            {
              id: 'elasticity',
              title: 'Elasticity: how sensitive is demand?',
              minutes: 8,
              summary: 'Elasticity measures how much quantity responds to a price change — and explains pricing strategy.',
              tags: ['elasticity', 'demand sensitivity', 'pricing'],
              blocks: [
                { type: 'p', text: '**Price elasticity of demand** asks: if price rises 1%, how much does quantity demanded fall? Necessities without substitutes (insulin, electricity) are **inelastic** — quantity barely moves. Luxuries with alternatives (a specific soda brand) are **elastic** — quantity collapses.' },
                { type: 'formula', text: 'E_d = \\frac{\\%\\,\\Delta Q_d}{\\%\\,\\Delta P}' },
                { type: 'callout', kind: 'key', text: '$|E_d| > 1$ → elastic (quantity responds more than price). $|E_d| < 1$ → inelastic. $|E_d| = 1$ → unit elastic. Sign is almost always negative — we compare magnitudes.' },
                { type: 'p', text: 'Elasticity rules pricing. With inelastic demand, a price *increase* raises revenue — buyers keep buying. With elastic demand, a price *cut* raises revenue — the quantity surge outweighs the lower price. That is why airlines price business fares (inelastic travelers) far above leisure fares.' },
                { type: 'example', title: 'Compute it', text: 'A $10\\%$ price cut raises sales by $25\\%$. $E_d = 25/10 = 2.5$ — elastic. Revenue moves with quantity: cutting price was a win.' },
                { type: 'callout', kind: 'tip', text: 'Three big drivers: availability of **substitutes** (more → elastic), **necessity vs. luxury**, and **time horizon** (demand gets more elastic as consumers find alternatives).' },
                { type: 'p', text: 'Percent change uses the **midpoint formula** to stay direction-agnostic: $\\%\\Delta = \\frac{\\text{new} - \\text{old}}{(\\text{new} + \\text{old})/2}$.' }
              ],
              skill: {
                id: 'elasticity',
                name: 'Calculate elasticity',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'A 10% price increase causes quantity demanded to fall 25%. What is the price elasticity of demand (magnitude)?',
                    answer: 2.5,
                    tolerance: 0.01,
                    hint: 'Divide % change in quantity by % change in price.',
                    steps: ['$E_d = 25\\% / 10\\% = 2.5$', 'Elastic since 2.5 > 1.'],
                    answerText: '2.5'
                  },
                  {
                    type: 'choice',
                    prompt: 'Insulin demand is highly inelastic. If a manufacturer raises price 20%, total revenue will most likely:',
                    choices: [
                      { id: 'a', text: 'Fall — buyers flee to substitutes' },
                      { id: 'b', text: 'Rise — quantity demanded barely drops' },
                      { id: 'c', text: 'Stay exactly the same' },
                      { id: 'd', text: 'Fall to zero' }
                    ],
                    answer: 'b',
                    hint: 'Inelastic means quantity barely responds.',
                    steps: ['Inelastic → quantity falls < 20% while price rises 20%.', 'Higher price × slightly lower quantity = more revenue.'],
                    answerText: 'Rise — quantity barely drops'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Using the midpoint method: quantity rises from 40 to 60 units after a price cut. What is the % change in quantity (as a number, e.g. 40)?',
                    answer: 40,
                    tolerance: 1,
                    hint: 'Midpoint denominator: (40 + 60)/2 = 50.',
                    steps: ['Change: 60 − 40 = 20.', 'Midpoint: (60 + 40)/2 = 50.', '%Δ = 20/50 = 40%.'],
                    answerText: '40'
                  },
                  {
                    type: 'choice',
                    prompt: 'Demand for a snack brand is elastic. To raise total revenue, the seller should:',
                    choices: [
                      { id: 'a', text: 'Raise the price' },
                      { id: 'b', text: 'Lower the price — the quantity gain outweighs it' },
                      { id: 'c', text: 'Keep price fixed; revenue cannot change' },
                      { id: 'd', text: 'Reduce quantity supplied' }
                    ],
                    answer: 'b',
                    hint: 'Elastic buyers respond strongly to discounts.',
                    steps: ['Elastic → %ΔQ > %ΔP.', 'A price cut lifts quantity proportionally more → total revenue rises.'],
                    answerText: 'Lower the price — the quantity gain outweighs it'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which good most likely has the MOST elastic demand?',
                    choices: [
                      { id: 'a', text: 'Gasoline overall' },
                      { id: 'b', text: 'One specific gas station\'s fuel' },
                      { id: 'c', text: 'Prescription medication with no generic' },
                      { id: 'd', text: 'Tap water' }
                    ],
                    answer: 'b',
                    hint: 'Elasticity grows with the number of close substitutes.',
                    steps: ['Other stations are near-perfect substitutes for one station\'s gas.', 'A small price difference sends buyers across the street → very elastic.'],
                    answerText: 'One specific gas station\'s fuel'
                  },
                  {
                    type: 'choice',
                    prompt: 'Demand becomes MORE elastic over longer time horizons mainly because:',
                    choices: [
                      { id: 'a', text: 'Prices change more over time' },
                      { id: 'b', text: 'Consumers find substitutes and adjust habits' },
                      { id: 'c', text: 'Incomes rise' },
                      { id: 'd', text: 'Firms exit the market' }
                    ],
                    answer: 'b',
                    hint: 'What can you do about expensive heating oil this year vs. over 5 years?',
                    steps: ['Short run: you must still heat the house — inelastic.', 'Long run: insulate, buy a heat pump, move — elastic.', 'Time expands the substitute set.'],
                    answerText: 'Consumers find substitutes and adjust habits'
                  }
                ]
              }
            },
            {
              id: 'percent-change-practice',
              title: 'Working with percentages in economics',
              minutes: 6,
              summary: 'Percent change, markups, and market shares — the arithmetic behind every econ headline.',
              tags: ['percent change', 'market share', 'arithmetic'],
              blocks: [
                { type: 'p', text: 'Economic data is almost always quoted in percentages: inflation of 3%, a 12% sales drop, a 40% market share. Fluency with percentage arithmetic is the entry ticket to reading (and double-checking) those claims.' },
                { type: 'formula', text: '\\%\\,\\text{change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100' },
                { type: 'callout', kind: 'key', text: 'A 50% drop followed by a 50% rise does **not** return you to the start: $100 \\to 50 \\to 75$. Percentages apply to the current base, not the original.' },
                { type: 'example', title: 'Market share', text: 'A firm sells 180,000 of 900,000 total units. Share $= 180{,}000/900{,}000 = 20\\%$.' },
                { type: 'example', title: 'Markup', text: 'A \$25 cost sold at \$40 is a $(40-25)/25 = 60\\%$ markup on cost — but a $37.5\\%$ margin on the selling price. Keep the denominator straight.' },
                { type: 'callout', kind: 'warning', text: '"Margin" divides by the selling price; "markup" divides by cost. Same dollars, different percentages — a classic exam trap.' }
              ],
              skill: { id: 'percent-change-practice', name: 'Percent change and shares', generator: 'percentOf' }
            }
          ]
        }
      ]
    },
    {
      id: 'personal-finance',
      title: 'Personal Finance',
      subtitle: 'Everyday money skills',
      summary: 'Budgets, interest, credit, and investing — the math of not going broke and actually building wealth.',
      units: [
        {
          id: 'money-basics',
          title: 'Money basics',
          lessons: [
            {
              id: 'budgeting-503020',
              title: 'Budgeting with the 50/30/20 rule',
              minutes: 6,
              summary: 'A simple split — needs, wants, savings — turns a paycheck into a plan.',
              tags: ['budgeting', 'saving', 'money management'],
              blocks: [
                { type: 'p', text: 'The **50/30/20 rule** divides after-tax income into three buckets: 50% needs (rent, food, utilities, transport), 30% wants (streaming, eating out, hobbies), 20% savings and debt repayment. It is a starting point, not a law — high-cost cities may demand 60/20/20.' },
                { type: 'callout', kind: 'key', text: 'A budget works because it makes trade-offs explicit. "I can afford it" really means "I am willing to give up the other things this money could buy."' },
                { type: 'example', title: 'Monthly split on $3,000 take-home', text: 'Needs ≤ \\$1,500, wants ≤ \\$900, savings/debt ≥ \\$600. If rent alone is \\$1,400, the pressure is obvious — the budget shows where the strain lives.' },
                { type: 'list', items: [
                  '**Pay yourself first**: move the 20% on payday, before it can leak into wants',
                  '**Emergency fund**: 3–6 months of expenses parked in a separate savings account',
                  '**Audit wants quarterly**: subscriptions and "small" spending are where budgets bleed'
                ] },
                { type: 'callout', kind: 'tip', text: 'Zero-based budgeting is the stricter cousin: every dollar gets a job — spending, saving, or debt — so income minus allocations equals zero.' }
              ],
              skill: {
                id: 'budgeting-503020',
                name: 'Apply the 50/30/20 rule',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'Take-home pay is $4,200/month. Under 50/30/20, what is the savings/debt target (in dollars)?',
                    answer: 840,
                    tolerance: 0.5,
                    hint: '20% goes to savings.',
                    steps: ['$4{,}200 \\times 0.20 = 840$'],
                    answerText: '$840'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Income: $5,000 after tax. Monthly needs total $2,800. What percent of income are needs? (number only)',
                    answer: 56,
                    tolerance: 0.5,
                    hint: 'Divide needs by income, then × 100.',
                    steps: ['$2{,}800/5{,}000 = 0.56 = 56\\%$', 'That exceeds the 50% guideline — budget is tight.'],
                    answerText: '56%'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which expense belongs in "needs" (the 50%)?',
                    choices: [
                      { id: 'a', text: 'Concert tickets' },
                      { id: 'b', text: 'Bus fare to work' },
                      { id: 'c', text: 'A streaming subscription' },
                      { id: 'd', text: 'New sneakers for fashion' }
                    ],
                    answer: 'b',
                    hint: 'Needs = required to live and work.',
                    steps: ['Transport to work is a need; entertainment and discretionary purchases are wants.'],
                    answerText: 'Bus fare to work'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Monthly income $3,600. 50/30/20 caps wants at how many dollars?',
                    answer: 1080,
                    tolerance: 0.5,
                    hint: '30% of income.',
                    steps: ['$3{,}600 \\times 0.30 = 1{,}080$'],
                    answerText: '$1,080'
                  },
                  {
                    type: 'choice',
                    prompt: '"Pay yourself first" means:',
                    choices: [
                      { id: 'a', text: 'Buy what you want before paying bills' },
                      { id: 'b', text: 'Move money to savings on payday, before spending' },
                      { id: 'c', text: 'Pay off the smallest debt first' },
                      { id: 'd', text: 'Take your paycheck in cash' }
                    ],
                    answer: 'b',
                    hint: 'It is about the order money moves.',
                    steps: ['Automating the 20% transfer on payday makes saving the default.', 'What is left is what you can safely spend — removing willpower from the equation.'],
                    answerText: 'Move money to savings on payday, before spending'
                  },
                  {
                    type: 'choice',
                    prompt: 'A 6-month emergency fund for someone with $2,500/month in expenses is:',
                    choices: [
                      { id: 'a', text: '$2,500' },
                      { id: 'b', text: '$7,500' },
                      { id: 'c', text: '$15,000' },
                      { id: 'd', text: '$25,000' }
                    ],
                    answer: 'c',
                    hint: 'Multiply monthly expenses by the number of months.',
                    steps: ['$2{,}500 \\times 6 = 15{,}000$'],
                    answerText: '$15,000'
                  }
                ]
              }
            },
            {
              id: 'interest-and-compounding',
              title: 'Interest and the power of compounding',
              minutes: 8,
              summary: 'Compound growth is why small early savings beat large late ones.',
              tags: ['interest', 'compound interest', 'savings', 'APY'],
              blocks: [
                { type: 'p', text: '**Simple interest** pays a fixed percent of the original deposit. **Compound interest** pays interest on interest — growth on growth. The difference is small for a year and enormous over decades.' },
                { type: 'formula', text: 'A = P\\left(1 + \\frac{r}{n}\\right)^{nt}' },
                { type: 'p', text: 'where $P$ is the principal, $r$ the annual rate, $n$ the compounds per year, $t$ the years. Savings accounts quote **APY** (annual percentage yield) — the compound-inclusive rate; loans quote **APR**.' },
                { type: 'example', title: 'The same $5,000, two ways', text: 'At $5\\%$ simple interest for 20 years: $5{,}000 + 5{,}000 \\times 0.05 \\times 20 = \\$10{,}000$. Compounded annually: $5{,}000(1.05)^{20} \\approx \\$13{,}266$ — a 33% bigger result from the same rate.' },
                { type: 'callout', kind: 'key', text: 'The **Rule of 72**: money doubles in roughly $72/r$ years at rate $r\\%$. At 8%, ≈9 years. At 24% credit-card debt, ≈3 years — compounding is a tool or a trap depending on which side you stand.' },
                { type: 'callout', kind: 'tip', text: 'Starting early beats saving more. \\$200/month from age 20 at 7% beats \\$400/month from 35 by retirement — the early dollars compound for twice as long.' }
              ],
              skill: { id: 'interest-and-compounding', name: 'Compound interest math', generator: 'percentOf' }
            },
            {
              id: 'credit-and-debt',
              title: 'Credit scores and the cost of debt',
              minutes: 7,
              summary: 'How borrowing is priced, what builds credit, and why minimum payments are a trap.',
              tags: ['credit', 'debt', 'APR', 'credit score'],
              blocks: [
                { type: 'p', text: 'A **credit score** (300–850) summarizes how reliably you repay debt. The biggest drivers: payment history (~35%), amounts owed / utilization (~30%), credit history length (~15%), new credit (~10%), and mix (~10%).' },
                { type: 'callout', kind: 'key', text: '**Utilization** = balance ÷ limit. Keep it under ~30% (under 10% is better). Maxing a card dents your score even if you pay it off monthly — report dates matter.' },
                { type: 'p', text: 'APR is the yearly cost of borrowing. At **24% APR**, a \$3,000 balance with \$60 minimum payments takes **over 8 years** to clear and costs ~\$2,900 in interest — nearly doubling the purchase. Minimum payments are designed to keep the balance alive.' },
                { type: 'example', title: 'Two payoff plans', text: 'Same \$3,000 at 24% APR: \$60/month → ~\$2,900 interest, 8+ years. \$150/month → ~\$660 interest, 2 years. Three times the payment, a quarter of the interest.' },
                { type: 'list', items: [
                  '**Avalanche method**: pay highest-APR debt first — mathematically optimal',
                  '**Snowball method**: pay smallest balance first — psychologically motivating',
                  '**0% intro APR** offers can help *if* the balance is cleared before the promo ends'
                ] },
                { type: 'callout', kind: 'warning', text: 'Payday loans run 400%+ APR. A \$300 advance "rolled over" for a year costs more than the loan itself. If it has an APR above ~36%, walk away.' }
              ],
              skill: {
                id: 'credit-and-debt',
                name: 'Evaluate debt decisions',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Your card limit is $4,000 and balance is $1,000. Your utilization is:',
                    choices: [
                      { id: 'a', text: '4%' },
                      { id: 'b', text: '25%' },
                      { id: 'c', text: '40%' },
                      { id: 'd', text: '250%' }
                    ],
                    answer: 'b',
                    hint: 'Balance ÷ limit.',
                    steps: ['$1{,}000/4{,}000 = 0.25 = 25\\%$'],
                    answerText: '25%'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which factor weighs MOST in a credit score?',
                    choices: [
                      { id: 'a', text: 'Credit mix' },
                      { id: 'b', text: 'Payment history' },
                      { id: 'c', text: 'New credit inquiries' },
                      { id: 'd', text: 'Length of history' }
                    ],
                    answer: 'b',
                    hint: 'On-time payments dominate the model (~35%).',
                    steps: ['Payment history is the biggest single component — late payments hurt most.'],
                    answerText: 'Payment history'
                  },
                  {
                    type: 'choice',
                    prompt: 'The avalanche debt-payoff method targets:',
                    choices: [
                      { id: 'a', text: 'The smallest balance first' },
                      { id: 'b', text: 'The highest interest rate first' },
                      { id: 'c', text: 'The oldest debt first' },
                      { id: 'd', text: 'The largest balance first' }
                    ],
                    answer: 'b',
                    hint: 'It minimizes total interest paid.',
                    steps: ['Highest APR debt grows fastest → kill it first → least total interest. Snowball (smallest balance) trades math for momentum.'],
                    answerText: 'The highest interest rate first'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A loan charges 18% APR. Using the Rule of 72, roughly how many years for the debt to double if unpaid? (round to nearest whole year)',
                    answer: 4,
                    tolerance: 0.5,
                    hint: '72 ÷ rate.',
                    steps: ['$72/18 = 4$ years'],
                    answerText: '4'
                  },
                  {
                    type: 'choice',
                    prompt: 'Paying only the minimum on a card mainly:',
                    choices: [
                      { id: 'a', text: 'Clears debt efficiently' },
                      { id: 'b', text: 'Keeps the balance alive for years, maximizing interest paid' },
                      { id: 'c', text: 'Improves utilization fastest' },
                      { id: 'd', text: 'Avoids all interest charges' }
                    ],
                    answer: 'b',
                    hint: 'Minimums are usually ~2% of the balance — barely beating the interest.',
                    steps: ['Interest accrues monthly; a ~2% minimum barely exceeds it.', 'Small payments stretch payoff to years and multiply the interest cost.'],
                    answerText: 'Keeps the balance alive for years, maximizing interest paid'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A card charges 24% APR (about 2% per month). On a $1,500 balance, roughly how much interest accrues in the first month (in dollars)?',
                    answer: 30,
                    tolerance: 1,
                    hint: 'Monthly rate ≈ APR/12.',
                    steps: ['$1{,}500 \times 0.02 = 30$ per month.', 'A $30 minimum payment would barely touch the principal.'],
                    answerText: '$30'
                  }
                ]
              }
            },
            {
              id: 'inflation-real-value',
              title: 'Inflation and the real value of money',
              minutes: 6,
              summary: 'Prices rise; what matters is what your money can actually buy.',
              tags: ['inflation', 'CPI', 'real vs nominal'],
              blocks: [
                { type: 'p', text: '**Inflation** is a general rise in prices — equivalently, a fall in what each dollar buys. The **CPI** (Consumer Price Index) tracks a fixed basket of goods; 3% inflation means the basket costs 3% more than a year ago.' },
                { type: 'callout', kind: 'key', text: '**Nominal** figures are raw dollars; **real** figures are adjusted for inflation. A 5% raise during 6% inflation is a real *pay cut* — you can buy about 1% less than before.' },
                { type: 'formula', text: '\\text{real rate} \\approx \\text{nominal rate} - \\text{inflation rate}' },
                { type: 'example', title: 'Purchasing power', text: 'At 3% inflation, \\$100 today buys what \\$103 buys next year. Cash under the mattress loses ~3% of value annually — a 20-year erosion of ~45%.' },
                { type: 'p', text: 'Moderate inflation is normal and even targeted by central banks (~2%). Runaway inflation (double digits) wrecks savings and planning. Deflation sounds nice but stalls economies — why buy today what gets cheaper tomorrow?' },
                { type: 'callout', kind: 'tip', text: 'When comparing money across years, always ask "in which year\'s dollars?" A 1975 salary of \\$10,000 equals roughly \\$60,000 today — real terms, not nominal, are what count.' }
              ],
              skill: {
                id: 'inflation-real-value',
                name: 'Convert nominal to real',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'Your nominal raise is 5% while inflation runs 3%. Your approximate real raise is what percent?',
                    answer: 2,
                    tolerance: 0.2,
                    hint: 'Real ≈ nominal − inflation.',
                    steps: ['$5\\% - 3\\% = 2\\%$ real gain.'],
                    answerText: '2%'
                  },
                  {
                    type: 'choice',
                    prompt: 'A bank account pays 1% interest while inflation is 4%. Your real return is:',
                    choices: [
                      { id: 'a', text: '+5%' },
                      { id: 'b', text: '−3% — you lose purchasing power' },
                      { id: 'c', text: '+1%' },
                      { id: 'd', text: '+4%' }
                    ],
                    answer: 'b',
                    hint: 'Subtract inflation from the nominal rate.',
                    steps: ['$1\\% - 4\\% = -3\\%$ real return.', 'The balance grows 1% while prices grow 4% — money buys less.'],
                    answerText: '−3% — you lose purchasing power'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Inflation is 6%. What was a $50 item worth a year ago, in today\'s dollars? (number only)',
                    answer: 53,
                    tolerance: 0.3,
                    hint: 'Today\'s price = past price × (1 + inflation).',
                    steps: ['$50 \\times 1.06 = 53$'],
                    answerText: '$53'
                  },
                  {
                    type: 'choice',
                    prompt: 'The CPI primarily measures:',
                    choices: [
                      { id: 'a', text: 'The stock market' },
                      { id: 'b', text: 'A fixed basket of consumer goods and services over time' },
                      { id: 'c', text: 'Wages across industries' },
                      { id: 'd', text: 'Government spending' }
                    ],
                    answer: 'b',
                    hint: 'It tracks the price of what households actually buy.',
                    steps: ['CPI prices a representative basket monthly; its change is the headline inflation rate.'],
                    answerText: 'A fixed basket of consumer goods and services over time'
                  },
                  {
                    type: 'choice',
                    prompt: 'Mild deflation (falling prices) worries economists because it:',
                    choices: [
                      { id: 'a', text: 'Raises debt burdens and delays spending, stalling the economy' },
                      { id: 'b', text: 'Makes everyone richer instantly' },
                      { id: 'c', text: 'Causes interest rates to rise' },
                      { id: 'd', text: 'Increases employment' }
                    ],
                    answer: 'a',
                    hint: 'Would you spend now if everything is cheaper next month?',
                    steps: ['Falling prices encourage waiting → demand drops → production cuts → layoffs.', 'Real debt burdens rise as dollars get more valuable — defaults climb.'],
                    answerText: 'Raises debt burdens and delays spending, stalling the economy'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Inflation has been 3% per year for a decade. What is $100 from ten years ago worth in today\'s purchasing-power terms? (to the nearest dollar; $100 \times 1.03^{10} \approx 134$)',
                    answer: 134,
                    tolerance: 1,
                    hint: 'Compound the 3% for 10 years.',
                    steps: ['$100 \times 1.03^{10} \approx 100 \times 1.344 = 134$', 'Ten years of 3% inflation erodes ~26% of purchasing power.'],
                    answerText: '134'
                  }
                ]
              }
            },
            {
              id: 'investing-basics',
              title: 'Investing basics: risk, return, diversification',
              minutes: 8,
              summary: 'Stocks, bonds, index funds, and why "don\'t put all your eggs in one basket" is the whole game.',
              tags: ['investing', 'stocks', 'index funds', 'diversification'],
              blocks: [
                { type: 'p', text: 'A **stock** is a slice of ownership in a company — you share its profits and risks. A **bond** is a loan you make to a company or government — fixed interest, lower risk, lower return. Historically stocks return ~7%/yr after inflation over long horizons; bonds ~2–3%.' },
                { type: 'callout', kind: 'key', text: 'Risk and return are linked — higher expected return is compensation for bearing more uncertainty. Anything promising high returns with no risk is either mispriced or a scam.' },
                { type: 'p', text: '**Diversification** spreads money across many investments so one company\'s collapse cannot sink you. An **index fund** buys hundreds of stocks at once (e.g., the S&P 500) for near-zero fees — instant diversification, which is why it beats most professional pickers over decades.' },
                { type: 'example', title: 'One stock vs. the market', text: 'Your employer\'s stock falls 60% — if it was your whole portfolio, so is your savings. An index fund investor owns that same company diluted across 500 names — the same crash moves their portfolio ~0.2%.' },
                { type: 'list', items: [
                  '**Time in market > timing the market**: missing the 10 best days since 2005 cut long-run S&P returns roughly in half',
                  '**Fees compound too**: 1% annual fees cost ~28% of a 30-year portfolio\'s growth',
                  '**Tax-advantaged first**: 401(k) match is a 100% instant return — take it before anything else'
                ] },
                { type: 'callout', kind: 'warning', text: 'Past returns never guarantee future ones. Never invest money you need soon, and never borrow to invest — leverage turns a downturn into a wipeout.' }
              ],
              skill: {
                id: 'investing-basics',
                name: 'Compare investment options',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The main reason index funds beat most actively managed funds over decades is:',
                    choices: [
                      { id: 'a', text: 'They pick better stocks' },
                      { id: 'b', text: 'Lower fees — costs compound against returns' },
                      { id: 'c', text: 'They trade more often' },
                      { id: 'd', text: 'They avoid all downturns' }
                    ],
                    answer: 'b',
                    hint: 'What do active managers charge every year?',
                    steps: ['Active fees (~1%+/yr) must be beaten by stock-picking skill — few manage it consistently.', 'Index fees (~0.03%) leave nearly all returns to the investor.'],
                    answerText: 'Lower fees — costs compound against returns'
                  },
                  {
                    type: 'choice',
                    prompt: 'Diversification reduces risk primarily because:',
                    choices: [
                      { id: 'a', text: 'It increases expected return' },
                      { id: 'b', text: 'Individual investments don\'t all fall together — losses in one are offset by others' },
                      { id: 'c', text: 'It guarantees positive returns' },
                      { id: 'd', text: 'It eliminates market risk' }
                    ],
                    answer: 'b',
                    hint: 'What happens to a 500-stock portfolio when one company fails?',
                    steps: ['Company-specific (unsystematic) risk averages out across many holdings.', 'Broad market risk remains — diversification removes the part you aren\'t paid to bear.'],
                    answerText: 'Losses in one are offset by others'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A $10,000 portfolio charges a 1% annual fee vs. 0.03% for an index fund. Difference in first-year fees (in dollars)?',
                    answer: 97,
                    tolerance: 1,
                    hint: '1% of 10,000 minus 0.03% of 10,000.',
                    steps: ['$10{,}000 \\times 0.01 = 100$; $10{,}000 \\times 0.0003 = 3$; difference = \\$97.'],
                    answerText: '$97'
                  },
                  {
                    type: 'choice',
                    prompt: 'Stocks differ from bonds mainly in that:',
                    choices: [
                      { id: 'a', text: 'Stocks are loans; bonds are ownership' },
                      { id: 'b', text: 'Stocks are ownership with variable returns; bonds are loans paying fixed interest' },
                      { id: 'c', text: 'Bonds are riskier than stocks' },
                      { id: 'd', text: 'Only bonds can lose value' }
                    ],
                    answer: 'b',
                    hint: 'Shareholder vs. lender.',
                    steps: ['Stock = equity: returns ride on company performance.', 'Bond = debt: issuer owes interest + principal unless it defaults.'],
                    answerText: 'Stocks are ownership with variable returns; bonds are loans paying fixed interest'
                  },
                  {
                    type: 'choice',
                    prompt: 'An employer matches 50% of your 401(k) contributions up to 6% of salary. Failing to contribute 6% means:',
                    choices: [
                      { id: 'a', text: 'Nothing lost — you just invest later' },
                      { id: 'b', text: 'Declining an instant 50% return on that money' },
                      { id: 'c', text: 'Paying lower fees' },
                      { id: 'd', text: 'Avoiding market risk entirely' }
                    ],
                    answer: 'b',
                    hint: 'The match is free money.',
                    steps: ['Every contributed dollar gets 50¢ free — a 50% instant return.', 'No investment reliably beats that; skipping it is leaving compensation on the table.'],
                    answerText: 'Declining an instant 50% return on that money'
                  },
                  {
                    type: 'choice',
                    prompt: '"Time in market beats timing the market" because:',
                    choices: [
                      { id: 'a', text: 'The best days cluster near the worst — sitting out risks missing them' },
                      { id: 'b', text: 'Markets only go up on Tuesdays' },
                      { id: 'c', text: 'Trading is illegal for individuals' },
                      { id: 'd', text: 'Dividends only pay monthly' }
                    ],
                    answer: 'a',
                    hint: 'You must predict downturns AND re-entry perfectly to win by timing.',
                    steps: ['Big up-days often follow big down-days; a mistimed exit forfeits them.', 'Missing a handful of the best days slashes decades of compound returns.'],
                    answerText: 'The best days cluster near the worst — sitting out risks missing them'
                  }
                ]
              }
            },
            {
              id: 'unit-pricing-value',
              title: 'Smart spending: unit prices and value traps',
              minutes: 5,
              summary: 'Cost per ounce, bulk discounts, and when "deals" cost more.',
              tags: ['unit pricing', 'smart shopping', 'value'],
              blocks: [
                { type: 'p', text: 'Packages lie — shelf labels show total price, but the honest comparison is **price per unit** (per ounce, per sheet, per load). Bigger packages *usually* win, but not always: promotions, shrinkflation, and clearance pricing regularly invert the expectation.' },
                { type: 'formula', text: '\\text{unit price} = \\frac{\\text{total price}}{\\text{quantity}}' },
                { type: 'example', title: 'Peanut butter, two sizes', text: '16 oz at \\$3.84 = 24¢/oz vs. 40 oz at \\$9.60 = 24¢/oz — identical. Now add a \$1-off coupon on the small jar: 17.5¢/oz. The "bulk discount" was an illusion.' },
                { type: 'callout', kind: 'tip', text: 'Bulk only wins if you\'ll *use* it all. A gallon of mayo that expires half-used at 30¢/oz wastes more than the smaller jar at 40¢/oz — the true unit price is cost divided by quantity **consumed**, not purchased.' },
                { type: 'p', text: 'The same math scales to subscriptions (cost per month you actually use), phones (total cost of ownership over the contract, not the sticker), and education (total cost including forgone earnings).' }
              ],
              skill: { id: 'unit-pricing-value', name: 'Compute unit prices', generator: 'ratioScale' }
            }
          ]
        }
      ]
    }
  ]
};
