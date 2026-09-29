// Subject: Mathematics (part 2) — geometry, precalculus, and calculus.
// Merges into subject 'math' (see content/index.js). See content/SPEC.md for the schema.

module.exports = {
  id: 'math',
  name: 'Mathematics',
  icon: 'sigma',
  color: '#4f7cff',
  tagline: 'From arithmetic to calculus',
  description: 'Build fluency in algebra, geometry, and calculus with worked examples and unlimited practice.',
  courses: [
    {
      id: 'geometry-essentials',
      title: 'Geometry Essentials',
      subtitle: 'Grades 8–10 · Core',
      summary: 'Triangles, circles, and the coordinate plane — the geometric toolkit behind measurement, design, and proof.',
      units: [
        {
          id: 'triangles-congruence',
          title: 'Triangles and congruence',
          lessons: [
            {
              id: 'triangle-angle-sums',
              title: 'The angle sum theorem',
              minutes: 7,
              summary: 'Every triangle\'s three interior angles add to exactly 180°.',
              tags: ['geometry', 'triangles', 'angles'],
              blocks: [
                { type: 'p', text: 'Draw any triangle — skinny, wide, tilted — and measure its three interior angles. They always sum to $180^\\circ$. This is the **angle sum theorem**, one of the oldest results in geometry, proved in Euclid\'s *Elements* around 300 BCE.' },
                { type: 'callout', kind: 'key', text: 'For any triangle, $A + B + C = 180^\\circ$. Knowing any two angles pins down the third: $C = 180^\\circ - A - B$.' },
                { type: 'p', text: 'Why it works: draw the line through one vertex **parallel** to the opposite side. The two angles it makes with the triangle\'s sides equal the far interior angles (alternate interior angles), and all three together form a straight line — which is $180^\\circ$ by definition.' },
                { type: 'example', title: 'Find a missing angle', text: 'A triangle has angles of $65^\\circ$ and $45^\\circ$. The third is $180 - 65 - 45 = 70^\\circ$. Check: $65 + 45 + 70 = 180$ ✓' },
                { type: 'h2', text: 'Special triangles' },
                { type: 'p', text: 'In an **isosceles** triangle the two base angles are equal, so a vertex angle of $40^\\circ$ forces base angles of $(180 - 40)/2 = 70^\\circ$ each. In an **equilateral** triangle all three angles equal $60^\\circ$.' },
                { type: 'callout', kind: 'tip', text: 'An **exterior angle** equals the sum of the two nonadjacent interior angles — a fast shortcut when a side of the triangle is extended.' }
              ],
              skill: { id: 'triangle-angle-sums', name: 'Triangle angle sums', generator: 'triangleAngles' }
            },
            {
              id: 'pythagorean-theorem',
              title: 'The Pythagorean theorem',
              minutes: 9,
              summary: 'In a right triangle, a² + b² = c² connects the two legs to the hypotenuse.',
              tags: ['geometry', 'right triangles', 'pythagorean theorem'],
              blocks: [
                { type: 'p', text: 'A **right triangle** has one $90^\\circ$ angle. The side opposite that angle — always the longest — is the **hypotenuse**, and the other two sides are the **legs**. The Pythagorean theorem relates all three.' },
                { type: 'formula', text: 'a^2 + b^2 = c^2' },
                { type: 'callout', kind: 'key', text: 'The areas of the squares built on the two legs sum to the area of the square built on the hypotenuse. This is a statement about *areas*, which is why it only works on right triangles.' },
                { type: 'example', title: 'Find the hypotenuse', text: 'Legs $9$ and $12$: $c^2 = 81 + 144 = 225$, so $c = \\sqrt{225} = 15$. Check: $9^2 + 12^2 = 15^2$ ✓' },
                { type: 'example', title: 'Find a missing leg', text: 'Hypotenuse $25$, leg $7$: the other leg satisfies $b^2 = 625 - 49 = 576$, so $b = 24$. Check: $7^2 + 24^2 = 625$ ✓' },
                { type: 'p', text: 'Whole-number solutions like $(3,4,5)$, $(5,12,13)$, and $(8,15,17)$ are called **Pythagorean triples** — worth memorizing, since they appear constantly in problems and let you skip the arithmetic.' },
                { type: 'callout', kind: 'warning', text: 'The theorem runs both ways: if $a^2 + b^2 = c^2$ holds, the triangle **must** be right. Carpenters use this converse — a 3-4-5 measure guarantees a square corner.' }
              ],
              skill: { id: 'pythagorean-theorem', name: 'Pythagorean theorem', generator: 'pythagorean' }
            },
            {
              id: 'congruence-criteria',
              title: 'Congruence criteria: SSS, SAS, ASA',
              minutes: 9,
              summary: 'Three matching measurements are enough to prove two triangles identical — if you pick the right three.',
              tags: ['geometry', 'congruence', 'proofs'],
              blocks: [
                { type: 'p', text: 'Two triangles are **congruent** when they are exactly the same shape and size — one could be slid, flipped, or rotated onto the other. All three pairs of corresponding sides and angles match, but you rarely need to check all six.' },
                { type: 'list', items: ['**SSS** — all three sides equal', '**SAS** — two sides and the *included* angle between them', '**ASA** — two angles and the *included* side', '**AAS** — two angles and a non-included side'] },
                { type: 'callout', kind: 'key', text: 'Each criterion locks the triangle into one rigid shape. SSS works because three fixed side lengths leave no freedom to flex — this is why bridges and trusses are built from triangles.' },
                { type: 'example', title: 'Using SAS', text: 'Triangles share two sides of $5$ and $7$ with the same $50^\\circ$ angle between them. SAS forces the third side and remaining angles to match, so the triangles are congruent.' },
                { type: 'callout', kind: 'warning', text: '**SSA is not a criterion.** Two sides and a non-included angle can produce two different triangles — the "ambiguous case." Likewise **AAA** proves only similarity, never congruence.' },
                { type: 'p', text: 'Once congruence is established, every remaining pair matches — remembered as **CPCTC**: corresponding parts of congruent triangles are congruent. Most proofs end by invoking it.' }
              ],
              skill: {
                id: 'congruence-criteria',
                name: 'Congruence criteria',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Two triangles have two pairs of equal sides and equal angles **between** those sides. Which criterion proves congruence?',
                    choices: [
                      { id: 'a', text: 'SAS' },
                      { id: 'b', text: 'SSS' },
                      { id: 'c', text: 'ASA' },
                      { id: 'd', text: 'SSA' }
                    ],
                    answer: 'a',
                    hint: 'The angle is included between the two known sides.',
                    steps: [
                      'List the known parts: side, angle, side.',
                      'The angle lies between the two sides, so it is included.',
                      'That order is Side–Angle–Side: SAS.'
                    ],
                    answerText: 'SAS'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which combination does **not** guarantee two triangles are congruent?',
                    choices: [
                      { id: 'a', text: 'SSS' },
                      { id: 'b', text: 'ASA' },
                      { id: 'c', text: 'SSA' },
                      { id: 'd', text: 'AAS' }
                    ],
                    answer: 'c',
                    hint: 'One of these produces two possible triangles — the ambiguous case.',
                    steps: [
                      'SSS, ASA, and AAS each fix a unique triangle.',
                      'SSA (two sides, non-included angle) can swing to form two different triangles.',
                      'So SSA does not guarantee congruence.'
                    ],
                    answerText: 'SSA'
                  },
                  {
                    type: 'choice',
                    prompt: 'Triangles $\\triangle ABC$ and $\\triangle DEF$ satisfy $AB = DE$, $BC = EF$, and $AC = DF$. They are congruent by:',
                    choices: [
                      { id: 'a', text: 'ASA' },
                      { id: 'b', text: 'SSS' },
                      { id: 'c', text: 'SAS' },
                      { id: 'd', text: 'AAA' }
                    ],
                    answer: 'b',
                    hint: 'Count how many sides (and angles) you were given.',
                    steps: [
                      'All three givens are side lengths.',
                      'Three pairs of equal sides is Side–Side–Side.',
                      'So the criterion is SSS.'
                    ],
                    answerText: 'SSS'
                  },
                  {
                    type: 'choice',
                    prompt: 'Two angles and the side **between** them are equal in two triangles. The criterion is:',
                    choices: [
                      { id: 'a', text: 'SSS' },
                      { id: 'b', text: 'SAS' },
                      { id: 'c', text: 'ASA' },
                      { id: 'd', text: 'SSA' }
                    ],
                    answer: 'c',
                    hint: 'Read the parts in order: angle, side, angle.',
                    steps: [
                      'The known parts are angle, side, angle.',
                      'The side is included between the two angles.',
                      'That is Angle–Side–Angle: ASA.'
                    ],
                    answerText: 'ASA'
                  },
                  {
                    type: 'numeric',
                    prompt: '$\\triangle ABC \\cong \\triangle DEF$ with $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$. If $AB = 10$ and $DE = 3x + 1$, find $x$.',
                    answer: 3,
                    tolerance: 0.001,
                    hint: 'Corresponding sides of congruent triangles are equal — set DE equal to AB.',
                    steps: [
                      'Correspondence gives $AB = DE$.',
                      '$3x + 1 = 10$',
                      '$3x = 9$, so $x = 3$.'
                    ],
                    answerText: 'x = 3'
                  },
                  {
                    type: 'choice',
                    prompt: 'After proving $\\triangle ABC \\cong \\triangle DEF$, a proof concludes $\\angle C \\cong \\angle F$. The justification is:',
                    choices: [
                      { id: 'a', text: 'The reflexive property' },
                      { id: 'b', text: 'The AA criterion' },
                      { id: 'c', text: 'SAS' },
                      { id: 'd', text: 'CPCTC' }
                    ],
                    answer: 'd',
                    hint: 'It is the acronym for "corresponding parts of congruent triangles are congruent."',
                    steps: [
                      'Congruent triangles have all corresponding parts equal.',
                      'CPCTC is the rule that licenses pulling out any matching pair.',
                      'So $\\angle C \\cong \\angle F$ by CPCTC.'
                    ],
                    answerText: 'CPCTC'
                  },
                  {
                    type: 'numeric',
                    prompt: '$\\triangle PQR \\cong \\triangle STU$ with $P \\leftrightarrow S$, $Q \\leftrightarrow T$, $R \\leftrightarrow U$. If $PR = 2x + 5$ and $SU = 19$, find $x$.',
                    answer: 7,
                    tolerance: 0.001,
                    hint: 'Match the corresponding sides PR and SU.',
                    steps: [
                      'Correspondence gives $PR = SU$.',
                      '$2x + 5 = 19$',
                      '$2x = 14$, so $x = 7$.'
                    ],
                    answerText: 'x = 7'
                  }
                ]
              }
            },
            {
              id: 'similar-triangles',
              title: 'Similar triangles',
              minutes: 9,
              summary: 'Same shape, different size: corresponding angles match and sides scale by one factor.',
              tags: ['geometry', 'similarity', 'proportions'],
              blocks: [
                { type: 'p', text: '**Similar** triangles have identical angles but different sizes — one is a scaled photograph of the other. Every pair of corresponding sides shares a single ratio called the **scale factor** $k$.' },
                { type: 'callout', kind: 'key', text: 'Two matching angles are enough to prove similarity (the **AA criterion**), because the third angle is then forced by the angle sum theorem.' },
                { type: 'p', text: 'Similarity turns measurement into algebra. If corresponding sides $a$ and $a\'$ satisfy $a\' = ka$, then every corresponding measurement multiplies by $k$ — heights, medians, and the perimeter itself.' },
                { type: 'example', title: 'Find a missing side', text: 'Triangles are similar with scale factor $2$: sides $3, 4, 5$ correspond to $x, 8, 10$. From $4 \\cdot 2 = 8$ we read $k = 2$, so $x = 3 \\cdot 2 = 6$. Check: $5 \\cdot 2 = 10$ ✓' },
                { type: 'p', text: 'A useful memory aid: lengths scale by $k$, but **areas scale by $k^2$**. Doubling a triangle\'s sides quadruples its area — the same reason a doubled pizza slice has four times the cheese.' },
                { type: 'callout', kind: 'tip', text: 'Set up proportions carefully: always compare **corresponding** sides — the sides opposite equal angles. Matching the wrong pair is the most common error.' }
              ],
              skill: { id: 'similar-triangles', name: 'Similar-triangle proportions', generator: 'ratioScale' }
            }
          ]
        },
        {
          id: 'circles',
          title: 'Circles',
          lessons: [
            {
              id: 'circle-area-circumference',
              title: 'Area and circumference',
              minutes: 8,
              summary: 'Two formulas, one constant: C = 2πr around the circle, A = πr² inside it.',
              tags: ['geometry', 'circles', 'area'],
              blocks: [
                { type: 'p', text: 'Every circle carries the same magic ratio: the circumference divided by the diameter equals $\\pi \\approx 3.14159$, no matter how large or small the circle. That single constant generates both formulas.' },
                { type: 'formula', text: 'C = 2\\pi r = \\pi d \\qquad A = \\pi r^2' },
                { type: 'callout', kind: 'key', text: 'Circumference is a **length** (units), area is a **surface** (square units). The exponent tells you which is which: $r^1$ for distance around, $r^2$ for space inside.' },
                { type: 'example', title: 'Radius 5', text: 'Circumference: $C = 2\\pi(5) = 10\\pi \\approx 31.42$ units. Area: $A = \\pi(5)^2 = 25\\pi \\approx 78.54$ square units.' },
                { type: 'p', text: 'Problems often hand you the **diameter** instead of the radius — halve it first. Given $d = 12$, use $r = 6$: the area is $36\\pi$, not $144\\pi$. Squaring the diameter is the classic trap.' },
                { type: 'callout', kind: 'tip', text: 'Leave answers in terms of $\\pi$ when you can ($25\\pi$ is exact); only approximate with $3.14159$ when the problem asks for a decimal.' }
              ],
              skill: { id: 'circle-area', name: 'Circle area', generator: 'circleArea' }
            },
            {
              id: 'arcs-sectors',
              title: 'Arc length and sector area',
              minutes: 9,
              summary: 'A slice of a circle is just a fraction of the whole — θ/360 of the circumference or area.',
              tags: ['geometry', 'circles', 'arcs'],
              blocks: [
                { type: 'p', text: 'A **central angle** $\\theta$ cuts the circle the way a pizza cutter does: the **arc** is the curved edge of the slice, and the **sector** is the slice itself. Both are the same fraction of the whole circle.' },
                { type: 'formula', text: '\\text{arc} = \\frac{\\theta}{360^\\circ} \\cdot 2\\pi r \\qquad \\text{sector} = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2' },
                { type: 'callout', kind: 'key', text: 'The fraction $\\frac{\\theta}{360^\\circ}$ is the whole trick. A $90^\\circ$ angle takes one quarter of the circle; a $120^\\circ$ angle takes one third.' },
                { type: 'example', title: 'Arc length', text: 'Radius $10$, angle $72^\\circ$: the arc is $\\frac{72}{360} \\cdot 20\\pi = \\frac{1}{5} \\cdot 20\\pi = 4\\pi \\approx 12.57$ units.' },
                { type: 'example', title: 'Sector area', text: 'Radius $6$, angle $60^\\circ$: the sector is $\\frac{60}{360} \\cdot 36\\pi = \\frac{1}{6} \\cdot 36\\pi = 6\\pi \\approx 18.85$ square units.' },
                { type: 'callout', kind: 'warning', text: 'Match the formula to the question: arc uses the circumference $2\\pi r$; sector uses the area $\\pi r^2$. Swapping them is the standard mistake.' }
              ],
              skill: {
                id: 'arcs-sectors',
                name: 'Arc length and sector area',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'A circle has radius $10$. Find the length of the arc cut by a $72^\\circ$ central angle. (Round to two decimals.)',
                    answer: 12.57,
                    tolerance: 0.02,
                    hint: 'Take 72/360 of the full circumference 20π.',
                    steps: [
                      'Circumference: $2\\pi(10) = 20\\pi$.',
                      'Fraction: $\\frac{72}{360} = \\frac{1}{5}$.',
                      'Arc: $\\frac{1}{5} \\cdot 20\\pi = 4\\pi \\approx 12.57$.'
                    ],
                    answerText: '4π ≈ 12.57'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A circle has radius $8$. Find the area of a sector with central angle $45^\\circ$. (Round to two decimals.)',
                    answer: 25.13,
                    tolerance: 0.02,
                    hint: 'Take 45/360 of the full area πr².',
                    steps: [
                      'Area: $\\pi(8)^2 = 64\\pi$.',
                      'Fraction: $\\frac{45}{360} = \\frac{1}{8}$.',
                      'Sector: $\\frac{1}{8} \\cdot 64\\pi = 8\\pi \\approx 25.13$.'
                    ],
                    answerText: '8π ≈ 25.13'
                  },
                  {
                    type: 'choice',
                    prompt: 'A semicircle has radius $6$ (central angle $180^\\circ$). Its arc length is:',
                    choices: [
                      { id: 'a', text: '$12\\pi$' },
                      { id: 'b', text: '$3\\pi$' },
                      { id: 'c', text: '$6\\pi$' },
                      { id: 'd', text: '$36\\pi$' }
                    ],
                    answer: 'c',
                    hint: 'A semicircle is half the full circumference.',
                    steps: [
                      'Full circumference: $2\\pi(6) = 12\\pi$.',
                      'Fraction: $\\frac{180}{360} = \\frac{1}{2}$.',
                      'Arc: $\\frac{1}{2} \\cdot 12\\pi = 6\\pi$.'
                    ],
                    answerText: '6π'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A circle has radius $12$. Find the area of a sector with central angle $30^\\circ$. (Round to two decimals.)',
                    answer: 37.7,
                    tolerance: 0.02,
                    hint: '30/360 is one twelfth of the circle.',
                    steps: [
                      'Area: $\\pi(12)^2 = 144\\pi$.',
                      'Fraction: $\\frac{30}{360} = \\frac{1}{12}$.',
                      'Sector: $\\frac{1}{12} \\cdot 144\\pi = 12\\pi \\approx 37.70$.'
                    ],
                    answerText: '12π ≈ 37.70'
                  },
                  {
                    type: 'choice',
                    prompt: 'A circle has radius $4$. The arc cut by a $270^\\circ$ central angle has length:',
                    choices: [
                      { id: 'a', text: '$6\\pi$' },
                      { id: 'b', text: '$8\\pi$' },
                      { id: 'c', text: '$3\\pi$' },
                      { id: 'd', text: '$12\\pi$' }
                    ],
                    answer: 'a',
                    hint: '270° is three quarters of the circle.',
                    steps: [
                      'Circumference: $2\\pi(4) = 8\\pi$.',
                      'Fraction: $\\frac{270}{360} = \\frac{3}{4}$.',
                      'Arc: $\\frac{3}{4} \\cdot 8\\pi = 6\\pi$.'
                    ],
                    answerText: '6π'
                  },
                  {
                    type: 'choice',
                    prompt: 'A circle has radius $9$. The area of a sector with central angle $120^\\circ$ is:',
                    choices: [
                      { id: 'a', text: '$9\\pi$' },
                      { id: 'b', text: '$81\\pi$' },
                      { id: 'c', text: '$18\\pi$' },
                      { id: 'd', text: '$27\\pi$' }
                    ],
                    answer: 'd',
                    hint: '120° is one third of the circle — take a third of πr².',
                    steps: [
                      'Area: $\\pi(9)^2 = 81\\pi$.',
                      'Fraction: $\\frac{120}{360} = \\frac{1}{3}$.',
                      'Sector: $\\frac{1}{3} \\cdot 81\\pi = 27\\pi$.'
                    ],
                    answerText: '27π'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A quarter-circle (central angle $90^\\circ$) has radius $14$. Find its arc length. (Round to two decimals.)',
                    answer: 21.99,
                    tolerance: 0.02,
                    hint: 'A quarter of the circumference 28π.',
                    steps: [
                      'Circumference: $2\\pi(14) = 28\\pi$.',
                      'Fraction: $\\frac{90}{360} = \\frac{1}{4}$.',
                      'Arc: $\\frac{1}{4} \\cdot 28\\pi = 7\\pi \\approx 21.99$.'
                    ],
                    answerText: '7π ≈ 21.99'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'coordinate-geometry',
          title: 'Coordinate geometry',
          lessons: [
            {
              id: 'slope-of-a-line',
              title: 'Slope: rise over run',
              minutes: 8,
              summary: 'Slope measures steepness as the ratio of vertical change to horizontal change.',
              tags: ['geometry', 'coordinate plane', 'slope'],
              blocks: [
                { type: 'p', text: 'The **slope** of a line is a single number describing how steeply it climbs: the vertical change divided by the horizontal change between any two points on it. "Rise over run."' },
                { type: 'formula', text: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
                { type: 'callout', kind: 'key', text: 'Positive slope rises left to right; negative slope falls. A horizontal line has slope $0$ (no rise); a vertical line\'s slope is **undefined** — the run is $0$ and division by zero is impossible.' },
                { type: 'example', title: 'Slope between two points', text: 'Through $(2, 3)$ and $(6, 11)$: $m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$. The line climbs 2 units for every 1 unit right.' },
                { type: 'p', text: 'Slope is really a **rate of change**. A slope of 2 means $y$ grows twice as fast as $x$ — the same idea as miles per hour or price per pound, just drawn on a grid.' },
                { type: 'callout', kind: 'warning', text: 'Keep the order consistent: whichever point supplies $y_2$ must supply $x_2$. Mixing $\\frac{y_2 - y_1}{x_1 - x_2}$ flips the sign — a small slip, a wrong answer.' }
              ],
              skill: { id: 'slope-from-points', name: 'Slope from two points', generator: 'slopeFromPoints' }
            },
            {
              id: 'distance-formula',
              title: 'The distance formula',
              minutes: 8,
              summary: 'The Pythagorean theorem on the coordinate plane: distance = √(Δx² + Δy²).',
              tags: ['geometry', 'coordinate plane', 'distance'],
              blocks: [
                { type: 'p', text: 'How far apart are two points $(x_1, y_1)$ and $(x_2, y_2)$? The segment between them is the hypotenuse of a right triangle whose legs are the horizontal and vertical gaps.' },
                { type: 'formula', text: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' },
                { type: 'callout', kind: 'key', text: 'The distance formula **is** the Pythagorean theorem: $\\Delta x$ and $\\Delta y$ are the legs, and $d$ is the hypotenuse. Squaring also removes any sign, so point order never matters.' },
                { type: 'example', title: 'Distance between (1, 1) and (4, 5)', text: '$d = \\sqrt{(4-1)^2 + (5-1)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ — the 3-4-5 triple hiding in coordinates.' },
                { type: 'p', text: 'Horizontal and vertical distances need no square root: $(−4, 0)$ to $(5, 0)$ is just $|5 - (-4)| = 9$ units. The formula handles them too, but spotting the shortcut saves time.' },
                { type: 'callout', kind: 'tip', text: 'Expect irrational answers. $d = \\sqrt{40} = 2\\sqrt{10} \\approx 6.32$ is a perfectly good distance — simplify the radical or round only if asked.' }
              ],
              skill: {
                id: 'distance-formula',
                name: 'Distance between points',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'Find the distance between $(1, 1)$ and $(4, 5)$.',
                    answer: 5,
                    tolerance: 0.001,
                    hint: 'Compute Δx = 3 and Δy = 4, then apply the formula.',
                    steps: [
                      '$\\Delta x = 4 - 1 = 3$, $\\Delta y = 5 - 1 = 4$.',
                      '$d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25}$.',
                      '$d = 5$.'
                    ],
                    answerText: '5'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Find the distance between $(0, 0)$ and $(6, 8)$.',
                    answer: 10,
                    tolerance: 0.001,
                    hint: 'The differences are 6 and 8.',
                    steps: [
                      '$\\Delta x = 6$, $\\Delta y = 8$.',
                      '$d = \\sqrt{36 + 64} = \\sqrt{100}$.',
                      '$d = 10$.'
                    ],
                    answerText: '10'
                  },
                  {
                    type: 'choice',
                    prompt: 'The distance between $(2, 3)$ and $(14, 8)$ is:',
                    choices: [
                      { id: 'a', text: '$\\sqrt{119}$' },
                      { id: 'b', text: '$13$' },
                      { id: 'c', text: '$17$' },
                      { id: 'd', text: '$7$' }
                    ],
                    answer: 'b',
                    hint: 'Δx = 12 and Δy = 5 — a familiar triple.',
                    steps: [
                      '$\\Delta x = 14 - 2 = 12$, $\\Delta y = 8 - 3 = 5$.',
                      '$d = \\sqrt{144 + 25} = \\sqrt{169}$.',
                      '$d = 13$.'
                    ],
                    answerText: '13'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Find the distance between $(5, 5)$ and $(5, -2)$.',
                    answer: 7,
                    tolerance: 0.001,
                    hint: 'The x-coordinates match — this is a vertical segment.',
                    steps: [
                      'Same $x$: the distance is $|\\Delta y|$.',
                      '$|5 - (-2)| = |7| = 7$.'
                    ],
                    answerText: '7'
                  },
                  {
                    type: 'choice',
                    prompt: 'The distance formula $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ is really which theorem in disguise?',
                    choices: [
                      { id: 'a', text: 'The angle sum theorem' },
                      { id: 'b', text: 'The AA similarity criterion' },
                      { id: 'c', text: 'The Pythagorean theorem' },
                      { id: 'd', text: 'The exterior angle theorem' }
                    ],
                    answer: 'c',
                    hint: 'Δx and Δy form the legs of a right triangle.',
                    steps: [
                      'The two coordinate differences are perpendicular legs.',
                      'The distance is the hypotenuse.',
                      'That is exactly $a^2 + b^2 = c^2$ — the Pythagorean theorem.'
                    ],
                    answerText: 'The Pythagorean theorem'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Find the distance between $(-2, 1)$ and $(4, -1)$. (Round to two decimals.)',
                    answer: 6.32,
                    tolerance: 0.02,
                    hint: 'Δx = 6 and Δy = −2; the answer will be a radical.',
                    steps: [
                      '$\\Delta x = 4 - (-2) = 6$, $\\Delta y = -1 - 1 = -2$.',
                      '$d = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10}$.',
                      '$d \\approx 6.32$.'
                    ],
                    answerText: '2√10 ≈ 6.32'
                  },
                  {
                    type: 'choice',
                    prompt: 'The distance between $(-4, 0)$ and $(5, 0)$ is:',
                    choices: [
                      { id: 'a', text: '$1$' },
                      { id: 'b', text: '$4.5$' },
                      { id: 'c', text: '$18$' },
                      { id: 'd', text: '$9$' }
                    ],
                    answer: 'd',
                    hint: 'Both points lie on the x-axis — subtract the coordinates.',
                    steps: [
                      'Same $y$-coordinate: horizontal distance.',
                      '$|5 - (-4)| = 9$.'
                    ],
                    answerText: '9'
                  }
                ]
              }
            },
            {
              id: 'midpoint-formula',
              title: 'The midpoint formula',
              minutes: 7,
              summary: 'The midpoint of a segment is the average of the endpoints\' coordinates.',
              tags: ['geometry', 'coordinate plane', 'midpoint'],
              blocks: [
                { type: 'p', text: 'The **midpoint** of a segment is the point exactly halfway between its endpoints. On the coordinate plane, "halfway" just means averaging each coordinate separately.' },
                { type: 'formula', text: 'M = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)' },
                { type: 'callout', kind: 'key', text: 'Averaging is the whole idea: the midpoint\'s $x$ sits halfway between $x_1$ and $x_2$, and likewise for $y$. Add, then divide by 2 — do it coordinate by coordinate.' },
                { type: 'example', title: 'Midpoint of (2, 4) and (6, 10)', text: '$M = \\left(\\frac{2+6}{2}, \\frac{4+10}{2}\\right) = (4, 7)$. Check distances: from $(2,4)$ to $(4,7)$ is $\\sqrt{4+9} = \\sqrt{13}$, and from $(4,7)$ to $(6,10)$ is also $\\sqrt{13}$ ✓' },
                { type: 'p', text: 'The formula also runs **backward**: given one endpoint and the midpoint, double the midpoint and subtract the endpoint to recover the other end. The center of a circle is just the midpoint of any diameter.' },
                { type: 'callout', kind: 'warning', text: 'Do not subtract the coordinates — that finds the difference (a piece of the distance formula), not the middle. Midpoint: add and halve. Distance: subtract, square, root.' }
              ],
              skill: {
                id: 'midpoint-formula',
                name: 'Midpoint formula',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The midpoint of the segment from $(2, 4)$ to $(6, 10)$ is:',
                    choices: [
                      { id: 'a', text: '$(8, 14)$' },
                      { id: 'b', text: '$(4, 7)$' },
                      { id: 'c', text: '$(2, 3)$' },
                      { id: 'd', text: '$(4, 6)$' }
                    ],
                    answer: 'b',
                    hint: 'Average each coordinate separately.',
                    steps: [
                      '$x$: $\\frac{2 + 6}{2} = 4$.',
                      '$y$: $\\frac{4 + 10}{2} = 7$.',
                      'Midpoint: $(4, 7)$.'
                    ],
                    answerText: '(4, 7)'
                  },
                  {
                    type: 'numeric',
                    prompt: 'What is the $x$-coordinate of the midpoint of $(1, 3)$ and $(9, 7)$?',
                    answer: 5,
                    tolerance: 0.001,
                    hint: 'Average the two x-coordinates.',
                    steps: [
                      '$x$-coordinate: $\\frac{1 + 9}{2} = \\frac{10}{2} = 5$.'
                    ],
                    answerText: '5'
                  },
                  {
                    type: 'choice',
                    prompt: 'The midpoint of the segment from $(-3, 5)$ to $(7, -1)$ is:',
                    choices: [
                      { id: 'a', text: '$(2, 2)$' },
                      { id: 'b', text: '$(5, 2)$' },
                      { id: 'c', text: '$(2, 3)$' },
                      { id: 'd', text: '$(-5, 3)$' }
                    ],
                    answer: 'a',
                    hint: 'Watch the signs when adding.',
                    steps: [
                      '$x$: $\\frac{-3 + 7}{2} = \\frac{4}{2} = 2$.',
                      '$y$: $\\frac{5 + (-1)}{2} = \\frac{4}{2} = 2$.',
                      'Midpoint: $(2, 2)$.'
                    ],
                    answerText: '(2, 2)'
                  },
                  {
                    type: 'numeric',
                    prompt: 'What is the $y$-coordinate of the midpoint of $(-4, -6)$ and $(2, 8)$?',
                    answer: 1,
                    tolerance: 0.001,
                    hint: 'Average the two y-coordinates.',
                    steps: [
                      '$y$-coordinate: $\\frac{-6 + 8}{2} = \\frac{2}{2} = 1$.'
                    ],
                    answerText: '1'
                  },
                  {
                    type: 'choice',
                    prompt: 'A segment has endpoint $(0, 0)$ and midpoint $(3, 5)$. The other endpoint is:',
                    choices: [
                      { id: 'a', text: '$(1.5, 2.5)$' },
                      { id: 'b', text: '$(-3, -5)$' },
                      { id: 'c', text: '$(6, 10)$' },
                      { id: 'd', text: '$(3, 5)$' }
                    ],
                    answer: 'c',
                    hint: 'Work backward: double the midpoint, subtract the known endpoint.',
                    steps: [
                      'Midpoint formula: $\\frac{0 + x}{2} = 3$ gives $x = 6$.',
                      '$\\frac{0 + y}{2} = 5$ gives $y = 10$.',
                      'Other endpoint: $(6, 10)$.'
                    ],
                    answerText: '(6, 10)'
                  },
                  {
                    type: 'numeric',
                    prompt: 'The endpoints of a circle\'s diameter are $(2, 3)$ and $(8, 9)$. What is the $x$-coordinate of the center?',
                    answer: 5,
                    tolerance: 0.001,
                    hint: 'The center is the midpoint of the diameter.',
                    steps: [
                      'Center = midpoint of the diameter.',
                      '$x$-coordinate: $\\frac{2 + 8}{2} = 5$.'
                    ],
                    answerText: '5'
                  },
                  {
                    type: 'choice',
                    prompt: 'The midpoint of the segment from $(-5, -5)$ to $(5, 5)$ is:',
                    choices: [
                      { id: 'a', text: '$(5, 5)$' },
                      { id: 'b', text: '$(0, 5)$' },
                      { id: 'c', text: '$(-5, 0)$' },
                      { id: 'd', text: '$(0, 0)$' }
                    ],
                    answer: 'd',
                    hint: 'The endpoints cancel each other.',
                    steps: [
                      '$x$: $\\frac{-5 + 5}{2} = 0$.',
                      '$y$: $\\frac{-5 + 5}{2} = 0$.',
                      'Midpoint: the origin $(0, 0)$.'
                    ],
                    answerText: '(0, 0)'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'precalculus',
      title: 'Precalculus',
      subtitle: 'Grades 10–12 · Intermediate',
      summary: 'Functions, exponents, and logarithms — the language calculus is written in.',
      units: [
        {
          id: 'functions',
          title: 'Functions and their properties',
          lessons: [
            {
              id: 'function-notation',
              title: 'Function notation',
              minutes: 8,
              summary: 'f(x) is a machine: feed it an input, get exactly one output.',
              tags: ['precalculus', 'functions'],
              blocks: [
                { type: 'p', text: 'A **function** is a rule that assigns each input exactly **one** output. We write $f(x)$ — read "$f$ of $x$" — for the output when the input is $x$.' },
                { type: 'callout', kind: 'key', text: '$f(x)$ does **not** mean $f$ times $x$. It is a machine label: $f(2)$ means "apply rule $f$ to the number 2."' },
                { type: 'p', text: 'Evaluating a function is substitution: replace **every** $x$ in the formula with the input. If $f(x) = 2x^2 - 3$, then $f(3)$ asks what the machine outputs when 3 goes in.' },
                { type: 'example', title: 'Evaluate f(3) and f(−1)', text: '$f(x) = 2x^2 - 3$: $\\quad f(3) = 2(9) - 3 = 15$, $\\quad f(-1) = 2(1) - 3 = -1$. Note the parentheses — $f(-1)$ squares $-1$, not $1$.' },
                { type: 'p', text: 'The "exactly one output" rule is what separates functions from general relations. A circle\'s equation $x^2 + y^2 = 25$ gives two $y$ values for most $x$ — so $y$ is not a function of $x$ there. On a graph, the **vertical line test** detects this instantly.' },
                { type: 'callout', kind: 'tip', text: 'Inputs are not always numbers: $f(x + h)$ and $f(g(x))$ feed *expressions* into the machine. Whatever goes in the parentheses replaces every $x$.' }
              ],
              skill: { id: 'function-evaluation', name: 'Evaluating functions', generator: 'functionEval' }
            },
            {
              id: 'domain-and-range',
              title: 'Domain and range',
              minutes: 9,
              summary: 'The domain is every legal input; the range is every reachable output.',
              tags: ['precalculus', 'functions', 'domain'],
              blocks: [
                { type: 'p', text: 'The **domain** of a function is the set of inputs it accepts — the machine\'s "allowed ingredients." The **range** is the set of outputs it can actually produce.' },
                { type: 'callout', kind: 'key', text: 'Two operations restrict domains: **division by zero** (denominators cannot equal 0) and **even roots** (you cannot take $\\sqrt{\\phantom{x}}$ of a negative number in the reals).' },
                { type: 'example', title: 'Domain of f(x) = 1/(x − 3)', text: 'The denominator fails only at $x = 3$, so the domain is all real numbers **except** 3 — written $x \\ne 3$, or $(-\\infty, 3) \\cup (3, \\infty)$.' },
                { type: 'example', title: 'Domain of g(x) = √(x − 5)', text: 'The root needs $x - 5 \\ge 0$, so the domain is $x \\ge 5$ — the interval $[5, \\infty)$.' },
                { type: 'p', text: 'Range is trickier — reason about outputs instead. Since $x^2 \\ge 0$ always, $f(x) = x^2$ has range $y \\ge 0$, and $f(x) = x^2 - 3$ shifts that down to $y \\ge -3$. Graphs help: the range is the vertical "shadow" the curve casts.' },
                { type: 'callout', kind: 'warning', text: 'Do not confuse the two: $x \\ge 1$ describes a domain (allowed inputs), while $y \\ge 2$ describes a range (produced outputs). Check which axis your inequality lives on.' }
              ],
              skill: {
                id: 'domain-and-range',
                name: 'Domain and range',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is the domain of $f(x) = \\dfrac{1}{x - 3}$?',
                    choices: [
                      { id: 'a', text: 'All real numbers' },
                      { id: 'b', text: '$x > 3$' },
                      { id: 'c', text: 'All real numbers except $x = 3$' },
                      { id: 'd', text: '$x \\ne 0$' }
                    ],
                    answer: 'c',
                    hint: 'The denominator cannot be zero.',
                    steps: [
                      'Set the denominator nonzero: $x - 3 \\ne 0$.',
                      'So $x \\ne 3$.',
                      'Domain: all reals except 3.'
                    ],
                    answerText: 'x ≠ 3'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the domain of $f(x) = \\sqrt{x - 5}$?',
                    choices: [
                      { id: 'a', text: '$x \\ge 5$' },
                      { id: 'b', text: '$x > 5$' },
                      { id: 'c', text: '$x \\le 5$' },
                      { id: 'd', text: 'All real numbers' }
                    ],
                    answer: 'a',
                    hint: 'The expression under the square root must be ≥ 0.',
                    steps: [
                      'Require $x - 5 \\ge 0$.',
                      'Solve: $x \\ge 5$.',
                      'The endpoint 5 is allowed since $\\sqrt{0} = 0$.'
                    ],
                    answerText: 'x ≥ 5'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the range of $f(x) = x^2$?',
                    choices: [
                      { id: 'a', text: 'All real numbers' },
                      { id: 'b', text: '$y > 0$' },
                      { id: 'c', text: '$x \\ge 0$' },
                      { id: 'd', text: '$y \\ge 0$' }
                    ],
                    answer: 'd',
                    hint: 'Squares are never negative — but they can be zero.',
                    steps: [
                      'A square satisfies $x^2 \\ge 0$ for every real $x$.',
                      'At $x = 0$ the output is exactly 0.',
                      'Range: $y \\ge 0$ (outputs, so we write it in $y$).'
                    ],
                    answerText: 'y ≥ 0'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the domain of $f(x) = \\dfrac{x + 1}{(x - 2)(x + 4)}$?',
                    choices: [
                      { id: 'a', text: '$x \\ne -1$' },
                      { id: 'b', text: '$x \\ne 2$ and $x \\ne -4$' },
                      { id: 'c', text: '$x \\ne 2$' },
                      { id: 'd', text: 'All real numbers' }
                    ],
                    answer: 'b',
                    hint: 'Every root of the denominator is excluded — there are two.',
                    steps: [
                      'Denominator zero when $x - 2 = 0$ or $x + 4 = 0$.',
                      'That is $x = 2$ or $x = -4$.',
                      'Domain: all reals except 2 and −4.'
                    ],
                    answerText: 'x ≠ 2, x ≠ −4'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the range of $f(x) = x^2 - 3$?',
                    choices: [
                      { id: 'a', text: '$y \\ge 3$' },
                      { id: 'b', text: 'All real numbers' },
                      { id: 'c', text: '$y \\ge -3$' },
                      { id: 'd', text: '$y \\ge 0$' }
                    ],
                    answer: 'c',
                    hint: 'x² reaches down to 0; subtracting 3 shifts the whole range.',
                    steps: [
                      'Since $x^2 \\ge 0$, the smallest output is $0 - 3 = -3$.',
                      'Every value above that is reachable.',
                      'Range: $y \\ge -3$.'
                    ],
                    answerText: 'y ≥ −3'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the domain of $f(x) = \\sqrt{2x - 6}$?',
                    choices: [
                      { id: 'a', text: '$x \\ge 6$' },
                      { id: 'b', text: '$x \\ge -3$' },
                      { id: 'c', text: 'All real numbers' },
                      { id: 'd', text: '$x \\ge 3$' }
                    ],
                    answer: 'd',
                    hint: 'Solve the inequality 2x − 6 ≥ 0.',
                    steps: [
                      'Require $2x - 6 \\ge 0$.',
                      '$2x \\ge 6$, so $x \\ge 3$.'
                    ],
                    answerText: 'x ≥ 3'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the domain of $f(x) = |x - 1| + 2$?',
                    choices: [
                      { id: 'a', text: 'All real numbers' },
                      { id: 'b', text: '$x \\ge 1$' },
                      { id: 'c', text: '$x \\ne 1$' },
                      { id: 'd', text: '$y \\ge 2$' }
                    ],
                    answer: 'a',
                    hint: 'Absolute value accepts any input — no denominators or roots here.',
                    steps: [
                      'Absolute value is defined for every real input.',
                      'Nothing can make the function fail.',
                      'Domain: all real numbers. ($y \\ge 2$ describes the *range*.)'
                    ],
                    answerText: 'All real numbers'
                  }
                ]
              }
            },
            {
              id: 'function-composition',
              title: 'Composing functions',
              minutes: 9,
              summary: 'Chain two machines together: (f∘g)(x) means g first, then f.',
              tags: ['precalculus', 'functions', 'composition'],
              blocks: [
                { type: 'p', text: '**Composition** feeds the output of one function into another: $(f \\circ g)(x) = f(g(x))$. Read it inside-out — $g$ runs first, and its output becomes $f$\'s input.' },
                { type: 'callout', kind: 'key', text: 'Order matters. $f(g(x))$ applies $g$ then $f$; $g(f(x))$ applies $f$ then $g$. These are usually **different** functions.' },
                { type: 'example', title: 'f(g(3)) for f(x) = 2x + 1, g(x) = x²', text: 'Inner first: $g(3) = 9$. Then outer: $f(9) = 2(9) + 1 = 19$. So $(f \\circ g)(3) = 19$.' },
                { type: 'example', title: 'Same functions, reversed order', text: '$(g \\circ f)(2)$: $f(2) = 5$ first, then $g(5) = 25$. Compare $(f \\circ g)(2) = f(4) = 9$ — the order flipped the answer.' },
                { type: 'p', text: 'To write a composed *formula*, substitute the inner expression into the outer: if $f(x) = x + 2$ and $g(x) = x^2$, then $(f \\circ g)(x) = x^2 + 2$, while $(g \\circ f)(x) = (x+2)^2 = x^2 + 4x + 4$. Real life composes constantly — "price after tax after discount" is two machines in sequence.' },
                { type: 'callout', kind: 'tip', text: 'Compute compositions in two labeled steps — evaluate the inner function, write its value down, then feed it to the outer. Skipping the middle step is where sign errors breed.' }
              ],
              skill: {
                id: 'function-composition',
                name: 'Composing functions',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'Let $f(x) = 2x + 1$ and $g(x) = x^2$. Find $f(g(3))$.',
                    answer: 19,
                    tolerance: 0.001,
                    hint: 'Evaluate g(3) first.',
                    steps: [
                      '$g(3) = 3^2 = 9$.',
                      '$f(9) = 2(9) + 1 = 19$.'
                    ],
                    answerText: '19'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Let $f(x) = 2x + 1$ and $g(x) = x^2$. Find $g(f(2))$.',
                    answer: 25,
                    tolerance: 0.001,
                    hint: 'Evaluate f(2) first — order matters.',
                    steps: [
                      '$f(2) = 2(2) + 1 = 5$.',
                      '$g(5) = 5^2 = 25$.'
                    ],
                    answerText: '25'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Let $f(x) = x^2 - 1$ and $g(x) = x + 3$. Find $f(g(2))$.',
                    answer: 24,
                    tolerance: 0.001,
                    hint: 'Inside out: g(2) = 5, then plug into f.',
                    steps: [
                      '$g(2) = 2 + 3 = 5$.',
                      '$f(5) = 5^2 - 1 = 24$.'
                    ],
                    answerText: '24'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Let $f(x) = x^2 - 1$ and $g(x) = x + 3$. Find $g(f(0))$.',
                    answer: 2,
                    tolerance: 0.001,
                    hint: 'f(0) = −1 is the input to g.',
                    steps: [
                      '$f(0) = 0^2 - 1 = -1$.',
                      '$g(-1) = -1 + 3 = 2$.'
                    ],
                    answerText: '2'
                  },
                  {
                    type: 'choice',
                    prompt: 'If $f(x) = x + 2$ and $g(x) = x^2$, then $(f \\circ g)(x) = $',
                    choices: [
                      { id: 'a', text: '$(x + 2)^2$' },
                      { id: 'b', text: '$x^2 + 2$' },
                      { id: 'c', text: '$x^2 + 4$' },
                      { id: 'd', text: '$2x^2$' }
                    ],
                    answer: 'b',
                    hint: 'Replace x in f with the whole of g(x).',
                    steps: [
                      '$(f \\circ g)(x) = f(g(x)) = f(x^2)$.',
                      '$f$ adds 2 to its input: $x^2 + 2$.'
                    ],
                    answerText: 'x² + 2'
                  },
                  {
                    type: 'choice',
                    prompt: 'If $f(x) = x + 2$ and $g(x) = x^2$, then $(g \\circ f)(x) = $',
                    choices: [
                      { id: 'a', text: '$x^2 + 4$' },
                      { id: 'b', text: '$x^2 + 2$' },
                      { id: 'c', text: '$4x^2 + 4$' },
                      { id: 'd', text: '$x^2 + 4x + 4$' }
                    ],
                    answer: 'd',
                    hint: 'Square the whole expression x + 2.',
                    steps: [
                      '$(g \\circ f)(x) = g(x + 2) = (x + 2)^2$.',
                      'Expand: $x^2 + 4x + 4$.'
                    ],
                    answerText: 'x² + 4x + 4'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Let $h(x) = 3x - 2$ and $k(x) = 4x$. Find $h(k(3))$.',
                    answer: 34,
                    tolerance: 0.001,
                    hint: 'k(3) = 12, then apply h.',
                    steps: [
                      '$k(3) = 4(3) = 12$.',
                      '$h(12) = 3(12) - 2 = 34$.'
                    ],
                    answerText: '34'
                  }
                ]
              }
            },
            {
              id: 'inverse-functions',
              title: 'Inverse functions',
              minutes: 9,
              summary: 'The inverse undoes the function: swap input and output, then solve.',
              tags: ['precalculus', 'functions', 'inverses'],
              blocks: [
                { type: 'p', text: 'An **inverse function** $f^{-1}$ runs the machine backward: whatever $f$ does, $f^{-1}$ undoes. If $f(2) = 7$, then $f^{-1}(7) = 2$.' },
                { type: 'callout', kind: 'key', text: 'The defining identity: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$. Each function returns the other\'s input untouched.' },
                { type: 'p', text: 'To find an inverse algebraically, write $y = f(x)$, **swap** $x$ and $y$, then solve for $y$. Swapping is the key step — it encodes "inputs and outputs trade places."' },
                { type: 'example', title: 'Inverse of f(x) = 3x − 9', text: 'Write $y = 3x - 9$. Swap: $x = 3y - 9$. Solve: $3y = x + 9$, so $f^{-1}(x) = \\frac{x + 9}{3}$. Check: $f^{-1}(f(5)) = f^{-1}(6) = 5$ ✓' },
                { type: 'p', text: 'Graphically, swapping coordinates reflects the curve across the line $y = x$ — a fast sanity check. Note that $f^{-1}(x)$ means the inverse, **not** $\\frac{1}{f(x)}$; the reciprocal is a different operation entirely.' },
                { type: 'callout', kind: 'warning', text: 'Only **one-to-one** functions have inverses. $f(x) = x^2$ fails: both $2$ and $-2$ output 4, so the inverse cannot decide which to return — unless we restrict the domain to $x \\ge 0$.' }
              ],
              skill: {
                id: 'inverse-functions',
                name: 'Inverse functions',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The inverse of $f(x) = 3x - 9$ is:',
                    choices: [
                      { id: 'a', text: '$f^{-1}(x) = \\dfrac{x - 9}{3}$' },
                      { id: 'b', text: '$f^{-1}(x) = \\dfrac{x + 9}{3}$' },
                      { id: 'c', text: '$f^{-1}(x) = 9x - 3$' },
                      { id: 'd', text: '$f^{-1}(x) = \\dfrac{1}{3x - 9}$' }
                    ],
                    answer: 'b',
                    hint: 'Swap x and y, then solve for y.',
                    steps: [
                      'Swap: $x = 3y - 9$.',
                      'Add 9: $x + 9 = 3y$.',
                      'Divide: $f^{-1}(x) = \\frac{x + 9}{3}$.'
                    ],
                    answerText: '(x + 9)/3'
                  },
                  {
                    type: 'numeric',
                    prompt: 'If $f(x) = 5x - 4$, find $f^{-1}(6)$.',
                    answer: 2,
                    tolerance: 0.001,
                    hint: 'Find the input x for which f(x) = 6.',
                    steps: [
                      'Solve $5x - 4 = 6$.',
                      '$5x = 10$, so $x = 2$.',
                      'Check: $f(2) = 10 - 4 = 6$ ✓'
                    ],
                    answerText: '2'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement must be true if $g$ is the inverse of $f$?',
                    choices: [
                      { id: 'a', text: '$g(x) = \\dfrac{1}{f(x)}$' },
                      { id: 'b', text: '$f(g(x)) = 1$' },
                      { id: 'c', text: '$f(g(x)) = x$' },
                      { id: 'd', text: '$f(x) = g(x)$' }
                    ],
                    answer: 'c',
                    hint: 'An inverse undoes the function, returning the original input.',
                    steps: [
                      'Inverse means: apply $f$, then $g$ — get $x$ back.',
                      'That is $f(g(x)) = x$ (and $g(f(x)) = x$).',
                      'The reciprocal $1/f(x)$ is a different idea entirely.'
                    ],
                    answerText: 'f(g(x)) = x'
                  },
                  {
                    type: 'numeric',
                    prompt: 'If $f(x) = \\dfrac{x}{4} + 1$, find $f^{-1}(3)$.',
                    answer: 8,
                    tolerance: 0.001,
                    hint: 'Solve f(x) = 3 for x.',
                    steps: [
                      'Solve $\\frac{x}{4} + 1 = 3$.',
                      '$\\frac{x}{4} = 2$, so $x = 8$.'
                    ],
                    answerText: '8'
                  },
                  {
                    type: 'choice',
                    prompt: 'The inverse of $f(x) = x^3 + 2$ is:',
                    choices: [
                      { id: 'a', text: '$f^{-1}(x) = \\sqrt[3]{x} - 2$' },
                      { id: 'b', text: '$f^{-1}(x) = (x - 2)^3$' },
                      { id: 'c', text: '$f^{-1}(x) = \\dfrac{1}{x^3 + 2}$' },
                      { id: 'd', text: '$f^{-1}(x) = \\sqrt[3]{x - 2}$' }
                    ],
                    answer: 'd',
                    hint: 'Swap, then isolate y — undo the +2 before the cube.',
                    steps: [
                      'Swap: $x = y^3 + 2$.',
                      'Subtract 2: $x - 2 = y^3$.',
                      'Cube root: $y = \\sqrt[3]{x - 2}$.'
                    ],
                    answerText: '∛(x − 2)'
                  },
                  {
                    type: 'choice',
                    prompt: 'The graph of $f^{-1}$ is the reflection of the graph of $f$ across:',
                    choices: [
                      { id: 'a', text: 'the $x$-axis' },
                      { id: 'b', text: 'the $y$-axis' },
                      { id: 'c', text: 'the line $y = x$' },
                      { id: 'd', text: 'the origin' }
                    ],
                    answer: 'c',
                    hint: 'Inverting swaps the coordinates — which reflection swaps x and y?',
                    steps: [
                      'Each point $(a, b)$ on $f$ becomes $(b, a)$ on $f^{-1}$.',
                      'Reflecting across $y = x$ swaps coordinates exactly.',
                      'So the line is $y = x$.'
                    ],
                    answerText: 'y = x'
                  },
                  {
                    type: 'numeric',
                    prompt: 'If $f(x) = 3x + 2$, find $f^{-1}(11)$.',
                    answer: 3,
                    tolerance: 0.001,
                    hint: 'Solve f(x) = 11.',
                    steps: [
                      'Solve $3x + 2 = 11$.',
                      '$3x = 9$, so $x = 3$.'
                    ],
                    answerText: '3'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'exponential-and-logarithmic',
          title: 'Exponential and logarithmic functions',
          lessons: [
            {
              id: 'exponential-growth-decay',
              title: 'Exponential growth and decay',
              minutes: 9,
              summary: 'Multiply by the same factor each step: y = a·bᵗ models growth when b > 1, decay when 0 < b < 1.',
              tags: ['precalculus', 'exponentials'],
              blocks: [
                { type: 'p', text: 'Linear change **adds** the same amount each step; exponential change **multiplies** by the same factor. A population doubling every year grows by a factor of 2 — nothing is being added, the whole current value is being scaled.' },
                { type: 'formula', text: 'y = a \\cdot b^{t}' },
                { type: 'callout', kind: 'key', text: '$a$ is the starting value (the output at $t = 0$) and $b$ is the growth factor. $b > 1$ gives **growth**; $0 < b < 1$ gives **decay**. Doubling is $b = 2$; halving is $b = \\tfrac{1}{2}$.' },
                { type: 'example', title: 'Doubling population', text: '$P(t) = 1000 \\cdot 2^{t}$: after 4 years, $P(4) = 1000 \\cdot 16 = 16{,}000$. Each year multiplies the count — year 3 to 4 alone adds 8,000.' },
                { type: 'example', title: 'Half-life decay', text: 'A 500 g sample halves each day: $500 \\cdot \\left(\\frac{1}{2}\\right)^{3} = 500 \\cdot \\frac{1}{8} = 62.5$ g after 3 days.' },
                { type: 'p', text: 'Why "exponential" feels explosive: the increments grow in proportion to the current size, so the curve bends upward ever faster. Interest compounds, bacteria multiply, and viral videos spread this way — small percentages, repeated, beat big one-time additions.' },
                { type: 'callout', kind: 'warning', text: 'The exponent applies to the **factor**, not the value: $a \\cdot b^t$ means $a$ times $b^t$, not $(a \\cdot b)^t$. $100 \\cdot 2^3 = 800$, not $200^3$.' }
              ],
              skill: {
                id: 'exponential-growth',
                name: 'Exponential growth',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'A population follows $P(t) = 100 \\cdot 2^{t}$, with $t$ in hours. What is $P(3)$?',
                    answer: 800,
                    tolerance: 0.001,
                    hint: 'Compute 2³, then multiply by 100.',
                    steps: [
                      '$2^{3} = 8$.',
                      '$P(3) = 100 \\cdot 8 = 800$.'
                    ],
                    answerText: '800'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A colony follows $P(t) = 50 \\cdot 3^{t}$. What is $P(2)$?',
                    answer: 450,
                    tolerance: 0.001,
                    hint: 'Compute 3², then multiply by 50.',
                    steps: [
                      '$3^{2} = 9$.',
                      '$P(2) = 50 \\cdot 9 = 450$.'
                    ],
                    answerText: '450'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A town of 1000 people doubles every year. What is the population after 4 years?',
                    answer: 16000,
                    tolerance: 0.001,
                    hint: 'Doubling means multiplying by 2, four times.',
                    steps: [
                      'Model: $P(t) = 1000 \\cdot 2^{t}$.',
                      '$2^{4} = 16$.',
                      '$P(4) = 1000 \\cdot 16 = 16{,}000$.'
                    ],
                    answerText: '16,000'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A sample of 500 g decays by half every day. How many grams remain after 3 days?',
                    answer: 62.5,
                    tolerance: 0.001,
                    hint: 'Multiply 500 by (1/2)³.',
                    steps: [
                      'Model: $A(t) = 500\\left(\\frac{1}{2}\\right)^{t}$.',
                      '$\\left(\\frac{1}{2}\\right)^{3} = \\frac{1}{8}$.',
                      '$A(3) = 500 \\cdot \\frac{1}{8} = 62.5$ g.'
                    ],
                    answerText: '62.5 g'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which function models exponential **growth**?',
                    choices: [
                      { id: 'a', text: '$y = 2(0.95)^{x}$' },
                      { id: 'b', text: '$y = 2(1.05)^{x}$' },
                      { id: 'c', text: '$y = 2x^{5}$' },
                      { id: 'd', text: '$y = 2(0.5)^{x}$' }
                    ],
                    answer: 'b',
                    hint: 'Growth requires a factor greater than 1.',
                    steps: [
                      'In $y = a \\cdot b^x$, growth needs $b > 1$.',
                      'Only $1.05$ exceeds 1.',
                      'So $y = 2(1.05)^x$ is the growth model.'
                    ],
                    answerText: 'y = 2(1.05)^x'
                  },
                  {
                    type: 'numeric',
                    prompt: 'An investment follows $A(t) = 200(1.5)^{t}$. What is $A(2)$?',
                    answer: 450,
                    tolerance: 0.001,
                    hint: 'Compute 1.5² first.',
                    steps: [
                      '$(1.5)^2 = 2.25$.',
                      '$A(2) = 200 \\cdot 2.25 = 450$.'
                    ],
                    answerText: '450'
                  },
                  {
                    type: 'choice',
                    prompt: 'In the model $y = 80(0.9)^{t}$, what is the initial value?',
                    choices: [
                      { id: 'a', text: '$0.9$' },
                      { id: 'b', text: '$72$' },
                      { id: 'c', text: '$80$' },
                      { id: 'd', text: '$8$' }
                    ],
                    answer: 'c',
                    hint: 'Set t = 0 — anything to the zero power is 1.',
                    steps: [
                      'Initial value means $t = 0$.',
                      '$(0.9)^0 = 1$.',
                      '$y = 80 \\cdot 1 = 80$.'
                    ],
                    answerText: '80'
                  }
                ]
              }
            },
            {
              id: 'what-are-logarithms',
              title: 'Logarithms: undoing exponents',
              minutes: 8,
              summary: 'log_b(x) asks: "what power of b gives x?" — the inverse of the exponential.',
              tags: ['precalculus', 'logarithms'],
              blocks: [
                { type: 'p', text: 'A **logarithm** answers a question about exponents: $\\log_b(x) = y$ means "$b$ raised to what power equals $x$?" — and the answer is $y$, because $b^y = x$.' },
                { type: 'callout', kind: 'key', text: '$\\log_b(x) = y \\iff b^y = x$. The two statements are the same fact wearing different notation — logarithm and exponential are inverses.' },
                { type: 'example', title: 'Evaluate log₂ 8', text: 'Ask: 2 to what power is 8? Since $2^3 = 8$, $\\log_2 8 = 3$. The logarithm *is* the missing exponent.' },
                { type: 'p', text: 'Two bases dominate: $\\log_{10}$ — the **common log**, written just $\\log$ — and $\\log_e$, the **natural log** $\\ln$, where $e \\approx 2.71828$ is the constant behind continuous growth. $\\log 1000 = 3$ because $10^3 = 1000$.' },
                { type: 'example', title: 'Evaluate log₅ 125', text: '$5^3 = 125$, so $\\log_5 125 = 3$. Reading the expression backward — "power of 5 that makes 125" — is the whole skill.' },
                { type: 'callout', kind: 'warning', text: 'Logarithms only accept **positive** inputs: $b^y$ can never be 0 or negative, so $\\log_b(0)$ and $\\log_b(-4)$ are undefined. And the base itself must be positive with $b \\ne 1$.' }
              ],
              skill: { id: 'evaluating-logarithms', name: 'Evaluating logarithms', generator: 'logarithmEval' }
            },
            {
              id: 'log-laws',
              title: 'The laws of logarithms',
              minutes: 9,
              summary: 'Logs turn multiplication into addition, division into subtraction, powers into products.',
              tags: ['precalculus', 'logarithms'],
              blocks: [
                { type: 'p', text: 'Because logarithms *are* exponents, the exponent rules translate directly into log rules — products, quotients, and powers each get a simpler form.' },
                { type: 'formula', text: '\\log_b(xy) = \\log_b x + \\log_b y \\qquad \\log_b\\!\\left(\\frac{x}{y}\\right) = \\log_b x - \\log_b y \\qquad \\log_b(x^{n}) = n \\log_b x' },
                { type: 'callout', kind: 'key', text: 'Logs demote every operation one level: multiplication becomes addition, division becomes subtraction, and exponentiation becomes multiplication. That is why slide rules — mechanical log tables — could turn multiplication into adding lengths.' },
                { type: 'example', title: 'Evaluate log₂ 32 by splitting', text: '$\\log_2(8 \\cdot 4) = \\log_2 8 + \\log_2 4 = 3 + 2 = 5$. Check: $2^5 = 32$ ✓' },
                { type: 'example', title: 'Use the power law', text: 'If $\\log_2 x = 4$, then $\\log_2(x^3) = 3 \\log_2 x = 12$ — the exponent hops out front as a multiplier.' },
                { type: 'callout', kind: 'warning', text: '$\\log(x + y)$ has **no** law — it does not equal $\\log x + \\log y$. The product rule needs multiplication *inside* the log: $\\log(xy)$, not $\\log(x + y)$.' }
              ],
              skill: {
                id: 'log-laws',
                name: 'Laws of logarithms',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\log_2(8 \\cdot 4)$.',
                    answer: 5,
                    tolerance: 0.001,
                    hint: 'Product rule: split into two logs you know.',
                    steps: [
                      '$\\log_2(8 \\cdot 4) = \\log_2 8 + \\log_2 4$.',
                      '$= 3 + 2 = 5$.',
                      'Check: $2^5 = 32$ ✓'
                    ],
                    answerText: '5'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\log_3 27 + \\log_3 3$.',
                    answer: 4,
                    tolerance: 0.001,
                    hint: 'Evaluate each log separately, or combine first.',
                    steps: [
                      '$\\log_3 27 = 3$ since $3^3 = 27$.',
                      '$\\log_3 3 = 1$.',
                      'Sum: $3 + 1 = 4$.'
                    ],
                    answerText: '4'
                  },
                  {
                    type: 'numeric',
                    prompt: 'If $\\log_2 x = 4$, what is $\\log_2(x^3)$?',
                    answer: 12,
                    tolerance: 0.001,
                    hint: 'The power rule pulls the exponent out front.',
                    steps: [
                      '$\\log_2(x^3) = 3 \\log_2 x$.',
                      '$= 3 \\cdot 4 = 12$.'
                    ],
                    answerText: '12'
                  },
                  {
                    type: 'choice',
                    prompt: 'Expand $\\log(x^{2}y)$ using the laws of logarithms.',
                    choices: [
                      { id: 'a', text: '$\\log x \\cdot \\log y$' },
                      { id: 'b', text: '$2\\log x \\cdot \\log y$' },
                      { id: 'c', text: '$2\\log x + \\log y$' },
                      { id: 'd', text: '$\\log(x^2 + y)$' }
                    ],
                    answer: 'c',
                    hint: 'Product first, then power.',
                    steps: [
                      'Product rule: $\\log(x^2 y) = \\log x^2 + \\log y$.',
                      'Power rule: $\\log x^2 = 2\\log x$.',
                      'Result: $2\\log x + \\log y$.'
                    ],
                    answerText: '2 log x + log y'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\log_{10} 1000 - \\log_{10} 10$.',
                    answer: 2,
                    tolerance: 0.001,
                    hint: 'Each term is a power of 10.',
                    steps: [
                      '$\\log_{10} 1000 = 3$ and $\\log_{10} 10 = 1$.',
                      'Difference: $3 - 1 = 2$.',
                      'Check via quotient rule: $\\log_{10} 100 = 2$ ✓'
                    ],
                    answerText: '2'
                  },
                  {
                    type: 'choice',
                    prompt: 'Write $2\\log_3 5 + \\log_3 4$ as a single logarithm.',
                    choices: [
                      { id: 'a', text: '$\\log_3 29$' },
                      { id: 'b', text: '$\\log_3 100$' },
                      { id: 'c', text: '$\\log_3 40$' },
                      { id: 'd', text: '$2\\log_3 20$' }
                    ],
                    answer: 'b',
                    hint: 'The coefficient 2 becomes an exponent first.',
                    steps: [
                      'Power rule backward: $2\\log_3 5 = \\log_3 25$.',
                      'Product rule: $\\log_3 25 + \\log_3 4 = \\log_3(25 \\cdot 4)$.',
                      '$= \\log_3 100$.'
                    ],
                    answerText: 'log₃ 100'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\log_2 64 - \\log_2 4$.',
                    answer: 4,
                    tolerance: 0.001,
                    hint: 'Quotient rule, or evaluate each log.',
                    steps: [
                      '$\\log_2 64 = 6$ and $\\log_2 4 = 2$.',
                      'Difference: $6 - 2 = 4$.',
                      'Check: $\\log_2(64/4) = \\log_2 16 = 4$ ✓'
                    ],
                    answerText: '4'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'calculus-i',
      title: 'Calculus I',
      subtitle: 'Grades 11–12+ · Advanced',
      summary: 'Limits and derivatives — how mathematicians tamed infinity and measured change itself.',
      units: [
        {
          id: 'limits',
          title: 'Limits',
          lessons: [
            {
              id: 'what-is-a-limit',
              title: 'What is a limit?',
              minutes: 8,
              summary: 'A limit is the value a function approaches — whether or not it ever gets there.',
              tags: ['calculus', 'limits'],
              blocks: [
                { type: 'p', text: 'Calculus begins with a gentle idea: watch what a function does as $x$ gets **close** to a value, without asking what happens exactly there. That target value is the **limit**.' },
                { type: 'formula', text: '\\lim_{x \\to a} f(x) = L' },
                { type: 'callout', kind: 'key', text: 'Read it as: "as $x$ approaches $a$, $f(x)$ approaches $L$." The limit describes the *trend*, not the landing — $f(a)$ itself may be undefined or disagree.' },
                { type: 'example', title: 'A limit where f is undefined', text: '$f(x) = \\frac{x^2 - 9}{x - 3}$ blows up at $x = 3$. But for $x \\ne 3$, $\\frac{(x-3)(x+3)}{x-3} = x + 3$, which approaches $6$. So $\\lim_{x \\to 3} f(x) = 6$ — the hole still has a height.' },
                { type: 'p', text: 'A limit exists only if both **one-sided** approaches agree. If $f(x)$ heads to 2 from the left and 5 from the right, the two-sided limit **does not exist** — the function is being pulled toward two different values.' },
                { type: 'callout', kind: 'tip', text: 'First instinct for any limit: try direct substitution. Most "nice" functions (polynomials, roots at valid inputs) hand you the answer for free — only reach for algebra when substitution gives $\\frac{0}{0}$.' }
              ],
              skill: {
                id: 'intuitive-limits',
                name: 'Evaluating simple limits',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\lim_{x \\to 2} (3x + 1)$.',
                    answer: 7,
                    tolerance: 0.001,
                    hint: 'This is a polynomial — substitute directly.',
                    steps: [
                      'Substitute $x = 2$.',
                      '$3(2) + 1 = 7$.'
                    ],
                    answerText: '7'
                  },
                  {
                    type: 'choice',
                    prompt: 'Evaluate $\\lim_{x \\to 0} \\dfrac{x^2 + x}{x}$.',
                    choices: [
                      { id: 'a', text: '$0$' },
                      { id: 'b', text: 'Does not exist' },
                      { id: 'c', text: '$1$' },
                      { id: 'd', text: '$2$' }
                    ],
                    answer: 'c',
                    hint: 'Factor out x before substituting.',
                    steps: [
                      'Factor: $\\frac{x(x + 1)}{x} = x + 1$ for $x \\ne 0$.',
                      'Now substitute: $\\lim_{x \\to 0}(x + 1) = 1$.'
                    ],
                    answerText: '1'
                  },
                  {
                    type: 'choice',
                    prompt: 'As $x \\to 1$, $f(x)$ approaches $2$ from the left and $5$ from the right. Then $\\lim_{x \\to 1} f(x)$:',
                    choices: [
                      { id: 'a', text: 'equals $3.5$' },
                      { id: 'b', text: 'equals $5$' },
                      { id: 'c', text: 'equals $2$' },
                      { id: 'd', text: 'does not exist' }
                    ],
                    answer: 'd',
                    hint: 'Both one-sided limits must agree.',
                    steps: [
                      'Left-hand limit: $2$. Right-hand limit: $5$.',
                      'Since $2 \\ne 5$, no single value is approached.',
                      'The limit does not exist.'
                    ],
                    answerText: 'Does not exist'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$.',
                    answer: 6,
                    tolerance: 0.001,
                    hint: 'Factor the numerator — a difference of squares.',
                    steps: [
                      'Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\ne 3$.',
                      'Substitute: $3 + 3 = 6$.'
                    ],
                    answerText: '6'
                  },
                  {
                    type: 'choice',
                    prompt: 'The statement $\\lim_{x \\to a} f(x) = L$ means:',
                    choices: [
                      { id: 'a', text: '$f(a) = L$' },
                      { id: 'b', text: '$f(x)$ gets arbitrarily close to $L$ as $x$ gets close to $a$' },
                      { id: 'c', text: '$f(x)$ eventually equals $L$' },
                      { id: 'd', text: '$x$ reaches $a$ and $f$ outputs $L$' }
                    ],
                    answer: 'b',
                    hint: 'The limit is about approaching, not arriving.',
                    steps: [
                      'A limit describes behavior *near* $a$, not *at* $a$.',
                      '$f(a)$ may be undefined or different from $L$.',
                      'Correct reading: $f(x)$ approaches $L$ as $x \\to a$.'
                    ],
                    answerText: 'f(x) approaches L near a'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\lim_{x \\to 4} \\sqrt{x + 5}$.',
                    answer: 3,
                    tolerance: 0.001,
                    hint: 'The square root is fine at x = 4 — substitute.',
                    steps: [
                      'Substitute: $\\sqrt{4 + 5} = \\sqrt{9}$.',
                      '$= 3$.'
                    ],
                    answerText: '3'
                  },
                  {
                    type: 'choice',
                    prompt: 'Let $f(x) = -1$ for $x < 0$ and $f(x) = 1$ for $x \\ge 0$. Then $\\lim_{x \\to 0} f(x)$:',
                    choices: [
                      { id: 'a', text: 'equals $-1$' },
                      { id: 'b', text: 'equals $1$' },
                      { id: 'c', text: 'does not exist' },
                      { id: 'd', text: 'equals $0$' }
                    ],
                    answer: 'c',
                    hint: 'Compare the two one-sided limits.',
                    steps: [
                      'From the left, $f(x) \\to -1$; from the right, $f(x) \\to 1$.',
                      'The one-sided limits disagree.',
                      'So the limit does not exist — a jump discontinuity.'
                    ],
                    answerText: 'Does not exist'
                  }
                ]
              }
            },
            {
              id: 'limit-laws',
              title: 'Limit laws and algebraic techniques',
              minutes: 9,
              summary: 'Limits split over sums, products, and quotients — and factoring rescues the 0/0 cases.',
              tags: ['calculus', 'limits'],
              blocks: [
                { type: 'p', text: 'Limits behave politely: they distribute over the basic operations. The limit of a sum is the sum of the limits; likewise for products and quotients (provided the bottom limit is not zero).' },
                { type: 'list', items: ['$\\lim\\,[f + g] = \\lim f + \\lim g$', '$\\lim\\,[f \\cdot g] = \\lim f \\cdot \\lim g$', '$\\lim\\,\\frac{f}{g} = \\frac{\\lim f}{\\lim g}$ when $\\lim g \\ne 0$'] },
                { type: 'callout', kind: 'key', text: 'Practical consequence: for any polynomial, $\\lim_{x \\to a} P(x) = P(a)$ — just plug in. Direct substitution is the default move.' },
                { type: 'example', title: 'Direct substitution', text: '$\\lim_{x \\to 2}(x^2 + 3x - 4) = 4 + 6 - 4 = 6$. No drama — polynomials are continuous everywhere.' },
                { type: 'h2', text: 'When substitution fails: 0/0' },
                { type: 'p', text: 'If substituting produces $\\frac{0}{0}$, the limit is not necessarily dead — the top and bottom share a factor causing the trouble. **Factor and cancel** it, then substitute again.' },
                { type: 'example', title: 'Factor to evaluate', text: '$\\lim_{x \\to 5}\\frac{x^2 - 25}{x - 5}$ gives $\\frac{0}{0}$ raw. Factoring: $\\frac{(x-5)(x+5)}{x-5} = x + 5$ for $x \\ne 5$, so the limit is $10$.' },
                { type: 'callout', kind: 'warning', text: '$\\frac{0}{0}$ is a signal to keep working, not a verdict of "undefined." But a nonzero number over zero (like $\\frac{5}{0}$) means the limit genuinely blows up — typically to $\\pm\\infty$.' }
              ],
              skill: {
                id: 'limit-laws',
                name: 'Limit laws',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\lim_{x \\to 2}(x^2 + 3x - 4)$.',
                    answer: 6,
                    tolerance: 0.001,
                    hint: 'Polynomials allow direct substitution.',
                    steps: [
                      'Substitute $x = 2$.',
                      '$4 + 6 - 4 = 6$.'
                    ],
                    answerText: '6'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1}$.',
                    answer: 2,
                    tolerance: 0.001,
                    hint: 'Factor the difference of squares.',
                    steps: [
                      'Substitution gives $\\frac{0}{0}$ — factor instead.',
                      '$\\frac{(x-1)(x+1)}{x-1} = x + 1$.',
                      'Limit: $1 + 1 = 2$.'
                    ],
                    answerText: '2'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\lim_{x \\to 5} \\dfrac{x^2 - 25}{x - 5}$.',
                    answer: 10,
                    tolerance: 0.001,
                    hint: 'Factor x² − 25.',
                    steps: [
                      '$\\frac{(x-5)(x+5)}{x-5} = x + 5$ for $x \\ne 5$.',
                      'Substitute: $5 + 5 = 10$.'
                    ],
                    answerText: '10'
                  },
                  {
                    type: 'choice',
                    prompt: 'Evaluate $\\lim_{x \\to 0} \\dfrac{x^2 + 2x}{x}$.',
                    choices: [
                      { id: 'a', text: 'Does not exist' },
                      { id: 'b', text: '$0$' },
                      { id: 'c', text: '$1$' },
                      { id: 'd', text: '$2$' }
                    ],
                    answer: 'd',
                    hint: 'Pull a factor of x out of the numerator.',
                    steps: [
                      '$\\frac{x(x + 2)}{x} = x + 2$ for $x \\ne 0$.',
                      'Limit: $0 + 2 = 2$.'
                    ],
                    answerText: '2'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\lim_{x \\to 4} \\dfrac{x - 4}{x^2 - 16}$.',
                    answer: 0.125,
                    tolerance: 0.001,
                    hint: 'Factor the denominator, then cancel x − 4.',
                    steps: [
                      '$\\frac{x - 4}{(x-4)(x+4)} = \\frac{1}{x + 4}$ for $x \\ne 4$.',
                      'Substitute: $\\frac{1}{4 + 4} = \\frac{1}{8} = 0.125$.'
                    ],
                    answerText: '1/8 = 0.125'
                  },
                  {
                    type: 'choice',
                    prompt: 'The identity $\\lim\\,[f(x) \\cdot g(x)] = \\lim f(x) \\cdot \\lim g(x)$ is called the:',
                    choices: [
                      { id: 'a', text: 'quotient law' },
                      { id: 'b', text: 'sum law' },
                      { id: 'c', text: 'chain law' },
                      { id: 'd', text: 'product law' }
                    ],
                    answer: 'd',
                    hint: 'Match the operation: a product of functions.',
                    steps: [
                      'The left side is the limit of a product.',
                      'The right side is the product of the limits.',
                      'That is the product law.'
                    ],
                    answerText: 'Product law'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Evaluate $\\lim_{x \\to 2} \\dfrac{x^3 - 8}{x - 2}$.',
                    answer: 12,
                    tolerance: 0.001,
                    hint: 'x³ − 8 is a difference of cubes.',
                    steps: [
                      'Factor: $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$.',
                      'Cancel: limit becomes $\\lim_{x \\to 2}(x^2 + 2x + 4)$.',
                      'Substitute: $4 + 4 + 4 = 12$.'
                    ],
                    answerText: '12'
                  }
                ]
              }
            },
            {
              id: 'continuity',
              title: 'Continuity',
              minutes: 8,
              summary: 'A continuous function has no breaks: the limit, the value, and the graph all agree.',
              tags: ['calculus', 'limits', 'continuity'],
              blocks: [
                { type: 'p', text: 'A function is **continuous at $a$** when you can draw through that point without lifting your pencil — the limit and the actual value coincide.' },
                { type: 'callout', kind: 'key', text: 'Three conditions must all hold: (1) $f(a)$ is defined, (2) $\\lim_{x \\to a} f(x)$ exists, and (3) the two are equal.' },
                { type: 'p', text: 'Failures come in three flavors. A **removable** discontinuity is a single hole — the limit exists but $f(a)$ is missing or wrong. A **jump** discontinuity has two different one-sided limits. An **infinite** discontinuity blows up near the point, like $\\frac{1}{x}$ at $0$.' },
                { type: 'example', title: 'Classify f(x) = (x² − 1)/(x − 1) at x = 1', text: '$f(1)$ is undefined (fails condition 1), but $\\lim_{x \\to 1} f(x) = 2$ exists. A hole with a reachable height: **removable** — patch it by defining $f(1) = 2$.' },
                { type: 'p', text: 'The friendly functions are continuous everywhere: polynomials, exponentials, sine and cosine. Rational functions are continuous wherever the denominator is nonzero — $\\frac{x+2}{x^2 - 4}$ fails only at $x = \\pm 2$.' },
                { type: 'callout', kind: 'tip', text: 'Continuity explains why direct substitution works: for a continuous function, the limit **is** the value. Every limit trick in the previous lesson was secretly about repairing continuity.' }
              ],
              skill: {
                id: 'continuity-check',
                name: 'Continuity',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'At $x = 1$, $f(x) = \\dfrac{x^2 - 1}{x - 1}$ has which type of discontinuity?',
                    choices: [
                      { id: 'a', text: 'Jump' },
                      { id: 'b', text: 'Infinite' },
                      { id: 'c', text: 'Removable' },
                      { id: 'd', text: 'None — it is continuous' }
                    ],
                    answer: 'c',
                    hint: 'The limit exists, but f(1) is undefined.',
                    steps: [
                      '$f(1)$ is undefined (division by zero).',
                      'But the limit exists: $\\lim_{x \\to 1}(x + 1) = 2$.',
                      'A hole with a defined limit is a removable discontinuity.'
                    ],
                    answerText: 'Removable'
                  },
                  {
                    type: 'choice',
                    prompt: 'A piecewise function approaches $4$ from the left of $x = 2$ and $9$ from the right. The discontinuity is:',
                    choices: [
                      { id: 'a', text: 'removable' },
                      { id: 'b', text: 'jump' },
                      { id: 'c', text: 'infinite' },
                      { id: 'd', text: 'there is no discontinuity' }
                    ],
                    answer: 'b',
                    hint: 'The two one-sided limits disagree.',
                    steps: [
                      'Left limit $4$, right limit $9$: they differ.',
                      'Different one-sided limits means the two-sided limit fails.',
                      'That is a jump discontinuity.'
                    ],
                    answerText: 'Jump'
                  },
                  {
                    type: 'choice',
                    prompt: 'The function $f(x) = \\dfrac{1}{x}$ at $x = 0$ has which type of discontinuity?',
                    choices: [
                      { id: 'a', text: 'removable' },
                      { id: 'b', text: 'jump' },
                      { id: 'c', text: 'infinite' },
                      { id: 'd', text: 'continuous' }
                    ],
                    answer: 'c',
                    hint: 'What happens to 1/x as x shrinks toward 0?',
                    steps: [
                      'As $x \\to 0^+$, $f(x) \\to +\\infty$; as $x \\to 0^-$, $f(x) \\to -\\infty$.',
                      'The function blows up near 0.',
                      'That is an infinite discontinuity (a vertical asymptote).'
                    ],
                    answerText: 'Infinite'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement about polynomials is true?',
                    choices: [
                      { id: 'a', text: 'They are continuous only at integer inputs' },
                      { id: 'b', text: 'They are continuous everywhere' },
                      { id: 'c', text: 'They are continuous only where defined' },
                      { id: 'd', text: 'They have removable discontinuities at their roots' }
                    ],
                    answer: 'b',
                    hint: 'Substitution always works on a polynomial.',
                    steps: [
                      'Polynomials involve only addition and multiplication.',
                      'Direct substitution always succeeds: $\\lim_{x \\to a} P(x) = P(a)$.',
                      'So polynomials are continuous at every real number.'
                    ],
                    answerText: 'Continuous everywhere'
                  },
                  {
                    type: 'choice',
                    prompt: 'For $f$ to be continuous at $x = a$, which must hold?',
                    choices: [
                      { id: 'a', text: 'Only that $f(a)$ is defined' },
                      { id: 'b', text: 'Only that $\\lim_{x \\to a} f(x)$ exists' },
                      { id: 'c', text: '$f(a)$ defined, the limit exists, and they are equal' },
                      { id: 'd', text: 'That $f$ is a polynomial' }
                    ],
                    answer: 'c',
                    hint: 'Continuity has a three-part checklist.',
                    steps: [
                      'Condition 1: $f(a)$ defined.',
                      'Condition 2: the limit exists.',
                      'Condition 3: $\\lim_{x \\to a} f(x) = f(a)$ — all three required.'
                    ],
                    answerText: 'All three conditions'
                  },
                  {
                    type: 'choice',
                    prompt: 'Is $f(x) = |x|$ continuous at $x = 0$?',
                    choices: [
                      { id: 'a', text: 'No — it has a corner there' },
                      { id: 'b', text: 'Yes — both sides approach 0 and $f(0) = 0$' },
                      { id: 'c', text: 'No — the left and right formulas differ' },
                      { id: 'd', text: 'Only from the right side' }
                    ],
                    answer: 'b',
                    hint: 'Check the one-sided limits and the function value.',
                    steps: [
                      'From the left: $|x| \\to 0$. From the right: $|x| \\to 0$.',
                      '$f(0) = 0$ matches the common limit.',
                      'Continuous — the corner affects *smoothness*, not continuity.'
                    ],
                    answerText: 'Yes, continuous'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where is $f(x) = \\dfrac{x + 2}{x^2 - 4}$ discontinuous?',
                    choices: [
                      { id: 'a', text: 'Only at $x = 2$' },
                      { id: 'b', text: 'Only at $x = -2$' },
                      { id: 'c', text: 'At $x = 2$ and $x = -2$' },
                      { id: 'd', text: 'Nowhere — the numerator cancels everything' }
                    ],
                    answer: 'c',
                    hint: 'Find every root of the denominator.',
                    steps: [
                      'Denominator zero when $x^2 - 4 = 0$.',
                      '$x^2 = 4$ gives $x = 2$ or $x = -2$.',
                      'Discontinuous at both points (only $-2$ is removable, $2$ is infinite).'
                    ],
                    answerText: 'x = 2 and x = −2'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'derivatives',
          title: 'Derivatives',
          lessons: [
            {
              id: 'derivative-as-slope',
              title: 'The derivative as slope',
              minutes: 9,
              summary: 'Shrink the secant line to a point and its slope becomes the tangent slope — the derivative.',
              tags: ['calculus', 'derivatives'],
              blocks: [
                { type: 'p', text: 'A **secant line** through two points of a curve has slope $\\frac{f(x+h) - f(x)}{h}$ — the *average* rate of change over that interval. The derivative asks what happens as the second point slides toward the first, $h \\to 0$: the secant pivots into the **tangent line**, touching the curve at one point.' },
                { type: 'formula', text: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}' },
                { type: 'callout', kind: 'key', text: '$f\'(a)$ is the slope of the tangent line at $x = a$ — equivalently, the **instantaneous rate of change**. Velocity is the classic example: distance per time at a single instant, not averaged over the trip.' },
                { type: 'example', title: 'Derivative of x² at x = 2', text: '$\\frac{f(2+h) - f(2)}{h} = \\frac{4 + 4h + h^2 - 4}{h} = 4 + h$. As $h \\to 0$ this tends to $4$ — so the tangent at $(2, 4)$ has slope $4$.' },
                { type: 'p', text: 'Geometric readings pay off: where the curve is flat (a hilltop or valley floor), the tangent is horizontal and $f\' = 0$. Where the function is increasing, $f\' > 0$; decreasing, $f\' < 0$.' },
                { type: 'callout', kind: 'warning', text: 'The difference quotient has $f(x + h) - f(x)$ over $h$ — the $h$ goes in the *denominator*. Writing $\\frac{f(x+h) - f(x)}{x}$ or forgetting the limit are the two ways this definition gets mangled.' }
              ],
              skill: {
                id: 'secant-and-tangent-slopes',
                name: 'Slopes and rates of change',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'Find the slope of the secant line to $f(x) = x^2$ from $x = 1$ to $x = 3$.',
                    answer: 4,
                    tolerance: 0.001,
                    hint: 'Average rate of change: rise over run between the two points.',
                    steps: [
                      '$f(1) = 1$, $f(3) = 9$.',
                      'Slope: $\\frac{9 - 1}{3 - 1} = \\frac{8}{2} = 4$.'
                    ],
                    answerText: '4'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Using the limit definition, find $f\'(2)$ for $f(x) = x^2$.',
                    answer: 4,
                    tolerance: 0.001,
                    hint: 'Compute the difference quotient, then let h → 0.',
                    steps: [
                      '$\\frac{f(2+h)-f(2)}{h} = \\frac{(4 + 4h + h^2) - 4}{h} = \\frac{4h + h^2}{h} = 4 + h$.',
                      'As $h \\to 0$: $4 + h \\to 4$.',
                      '$f\'(2) = 4$.'
                    ],
                    answerText: '4'
                  },
                  {
                    type: 'choice',
                    prompt: 'The value $f\'(a)$ represents:',
                    choices: [
                      { id: 'a', text: 'the average rate of change over $[a, x]$' },
                      { id: 'b', text: 'the slope of the secant line at $a$' },
                      { id: 'c', text: 'the instantaneous rate of change (tangent slope) at $a$' },
                      { id: 'd', text: 'the limit of $f(x)$ as $x \\to a$' }
                    ],
                    answer: 'c',
                    hint: 'The derivative is a limit of difference quotients.',
                    steps: [
                      '$f\'(a) = \\lim_{h \\to 0}\\frac{f(a+h)-f(a)}{h}$.',
                      'Geometrically this is the tangent line\'s slope.',
                      'Physically it is the instantaneous rate of change.'
                    ],
                    answerText: 'Instantaneous rate of change'
                  },
                  {
                    type: 'numeric',
                    prompt: 'For the linear function $f(x) = 3x + 2$, what is $f\'(5)$?',
                    answer: 3,
                    tolerance: 0.001,
                    hint: 'A line has the same slope everywhere.',
                    steps: [
                      'A line\'s tangent is the line itself.',
                      'Its slope is 3 at every point.',
                      'So $f\'(5) = 3$.'
                    ],
                    answerText: '3'
                  },
                  {
                    type: 'choice',
                    prompt: 'The difference quotient used to define the derivative is:',
                    choices: [
                      { id: 'a', text: '$\\dfrac{f(x + h) - f(x)}{x}$' },
                      { id: 'b', text: '$f(x + h) - f(x)$' },
                      { id: 'c', text: '$\\dfrac{f(x) - f(x - h)}{x}$' },
                      { id: 'd', text: '$\\dfrac{f(x + h) - f(x)}{h}$' }
                    ],
                    answer: 'd',
                    hint: 'It is rise over run between two nearby points.',
                    steps: [
                      'The horizontal gap between the points is $h$.',
                      'The vertical change is $f(x+h) - f(x)$.',
                      'Slope = $\\frac{f(x+h) - f(x)}{h}$.'
                    ],
                    answerText: '(f(x+h) − f(x))/h'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Find the slope of the secant line to $f(x) = x^3$ from $x = 1$ to $x = 2$.',
                    answer: 7,
                    tolerance: 0.001,
                    hint: 'f(1) = 1 and f(2) = 8.',
                    steps: [
                      '$f(1) = 1$, $f(2) = 8$.',
                      'Slope: $\\frac{8 - 1}{2 - 1} = 7$.'
                    ],
                    answerText: '7'
                  },
                  {
                    type: 'choice',
                    prompt: 'At the bottom of an upward-opening parabola, the tangent line has slope:',
                    choices: [
                      { id: 'a', text: '$1$' },
                      { id: 'b', text: 'undefined' },
                      { id: 'c', text: '$0$' },
                      { id: 'd', text: 'negative' }
                    ],
                    answer: 'c',
                    hint: 'The tangent at the vertex is horizontal.',
                    steps: [
                      'At the minimum the curve momentarily flattens.',
                      'A horizontal line has slope 0.',
                      'So $f\' = 0$ at the vertex.'
                    ],
                    answerText: '0'
                  }
                ]
              }
            },
            {
              id: 'power-rule',
              title: 'The power rule',
              minutes: 8,
              summary: 'Differentiate xⁿ in one move: bring the exponent down, subtract one.',
              tags: ['calculus', 'derivatives'],
              blocks: [
                { type: 'p', text: 'The limit definition works, but no one wants to run it on every function. The **power rule** does $x^n$ in one step: multiply by the exponent, then reduce the exponent by one.' },
                { type: 'formula', text: '\\frac{d}{dx}\\, x^{n} = n\\,x^{n-1}' },
                { type: 'callout', kind: 'key', text: 'Constants travel through untouched: $\\frac{d}{dx}(ax^n) = a\\,n\\,x^{n-1}$. And the derivative of a lone constant is $0$ — a constant never changes, so its rate of change is zero.' },
                { type: 'example', title: 'Differentiate 3x⁴', text: '$\\frac{d}{dx}(3x^4) = 3 \\cdot 4 \\cdot x^{4-1} = 12x^3$. Exponent down front, exponent minus one — two motions.' },
                { type: 'example', title: 'Differentiate x² − 5x + 7', text: 'Term by term: $x^2 \\to 2x$, $-5x \\to -5$, $7 \\to 0$. So $f\'(x) = 2x - 5$.' },
                { type: 'p', text: 'Sanity checks: $\\frac{d}{dx}x = 1$ (the exponent is 1, so $1 \\cdot x^0 = 1$) — a line of slope 1. And $\\frac{d}{dx}x^2 = 2x$, matching our limit computation that the slope of the parabola at $x = 2$ is $4$.' },
                { type: 'callout', kind: 'warning', text: 'The rule needs the variable in the **base**. For $x^{1/2}$ or $x^{-3}$ it still works ($\\tfrac{1}{2}x^{-1/2}$, $-3x^{-4}$), but $2^x$ is an exponential — a different rule entirely.' }
              ],
              skill: { id: 'power-rule', name: 'Power rule', generator: 'derivativePower' }
            },
            {
              id: 'chain-rule-intro',
              title: 'The chain rule (introduction)',
              minutes: 9,
              summary: 'For nested functions, differentiate the outer, keep the inner, then multiply by the inner\'s derivative.',
              tags: ['calculus', 'derivatives', 'chain rule'],
              blocks: [
                { type: 'p', text: 'Some functions are **compositions** in disguise: $(3x + 1)^2$ is "square" wrapped around $3x + 1$. The **chain rule** differentiates such nested functions.' },
                { type: 'formula', text: '\\frac{d}{dx}\\, f(g(x)) = f\'(g(x)) \\cdot g\'(x)' },
                { type: 'callout', kind: 'key', text: 'Differentiate the **outer** function (leaving the inside alone), then multiply by the derivative of the **inner**. "Outer times inner-prime."' },
                { type: 'example', title: 'Differentiate (3x + 1)²', text: 'Outer: square → $2(3x+1)$, keeping the inside. Inner derivative: $3$. Result: $2(3x+1) \\cdot 3 = 6(3x+1) = 18x + 6$.' },
                { type: 'example', title: 'Differentiate (x² + 1)³', text: 'Outer cube → $3(x^2+1)^2$; inner derivative $2x$. Result: $3(x^2+1)^2 \\cdot 2x = 6x(x^2+1)^2$.' },
                { type: 'p', text: 'You could expand $(3x+1)^2 = 9x^2 + 6x + 1$ and use the power rule — same answer, $18x + 6$. But expansion is hopeless for $(x^2 + 1)^{10}$; the chain rule scales where algebra does not.' },
                { type: 'callout', kind: 'warning', text: 'The most common error is forgetting the inner derivative: writing $2(3x+1)$ for $\\frac{d}{dx}(3x+1)^2$. Every composition needs that final multiplier $g\'(x)$ — here the $3$.' }
              ],
              skill: {
                id: 'chain-rule',
                name: 'Chain rule',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Find $\\dfrac{d}{dx}(3x + 1)^2$.',
                    choices: [
                      { id: 'a', text: '$2(3x + 1)$' },
                      { id: 'b', text: '$18x$' },
                      { id: 'c', text: '$6(3x + 1)$' },
                      { id: 'd', text: '$3(3x + 1)$' }
                    ],
                    answer: 'c',
                    hint: 'Outer derivative times inner derivative.',
                    steps: [
                      'Outer: $2(3x + 1)$.',
                      'Inner derivative: $3$.',
                      'Product: $6(3x + 1) = 18x + 6$.'
                    ],
                    answerText: '6(3x + 1)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Find $\\dfrac{d}{dx}(x^2 + 1)^3$.',
                    choices: [
                      { id: 'a', text: '$3(x^2 + 1)^2$' },
                      { id: 'b', text: '$6x(x^2 + 1)^2$' },
                      { id: 'c', text: '$6x(x^2 + 1)^3$' },
                      { id: 'd', text: '$2x(x^2 + 1)^2$' }
                    ],
                    answer: 'b',
                    hint: 'Outer: cube. Inner: x² + 1 with derivative 2x.',
                    steps: [
                      'Outer derivative: $3(x^2 + 1)^2$.',
                      'Inner derivative: $2x$.',
                      'Product: $6x(x^2 + 1)^2$.'
                    ],
                    answerText: '6x(x² + 1)²'
                  },
                  {
                    type: 'numeric',
                    prompt: 'If $f(x) = (2x + 1)^2$, find $f\'(0)$.',
                    answer: 4,
                    tolerance: 0.001,
                    hint: 'Differentiate first, then substitute x = 0.',
                    steps: [
                      '$f\'(x) = 2(2x + 1) \\cdot 2 = 4(2x + 1)$.',
                      '$f\'(0) = 4(1) = 4$.'
                    ],
                    answerText: '4'
                  },
                  {
                    type: 'choice',
                    prompt: 'Find $\\dfrac{d}{dx}(5x - 2)^4$.',
                    choices: [
                      { id: 'a', text: '$4(5x - 2)^3$' },
                      { id: 'b', text: '$5(5x - 2)^3$' },
                      { id: 'c', text: '$20(5x - 2)^4$' },
                      { id: 'd', text: '$20(5x - 2)^3$' }
                    ],
                    answer: 'd',
                    hint: 'Outer power 4, inner derivative 5.',
                    steps: [
                      'Outer derivative: $4(5x - 2)^3$.',
                      'Inner derivative: $5$.',
                      'Product: $20(5x - 2)^3$.'
                    ],
                    answerText: '20(5x − 2)³'
                  },
                  {
                    type: 'numeric',
                    prompt: 'If $f(x) = (x^3 + 1)^2$, find $f\'(1)$.',
                    answer: 12,
                    tolerance: 0.001,
                    hint: 'The inner derivative is 3x².',
                    steps: [
                      '$f\'(x) = 2(x^3 + 1) \\cdot 3x^2$.',
                      'At $x = 1$: $2(2) \\cdot 3 = 12$.'
                    ],
                    answerText: '12'
                  },
                  {
                    type: 'choice',
                    prompt: 'The chain rule states $\\dfrac{d}{dx}f(g(x)) =$',
                    choices: [
                      { id: 'a', text: '$f\'(x) \\cdot g\'(x)$' },
                      { id: 'b', text: '$f\'(g(x)) \\cdot g\'(x)$' },
                      { id: 'c', text: '$f(g\'(x))$' },
                      { id: 'd', text: '$f\'(g\'(x))$' }
                    ],
                    answer: 'b',
                    hint: 'The outer derivative is evaluated at the inner function.',
                    steps: [
                      'Differentiate the outer, keeping the inside: $f\'(g(x))$.',
                      'Multiply by the inner derivative $g\'(x)$.',
                      'Result: $f\'(g(x)) \\cdot g\'(x)$.'
                    ],
                    answerText: "f'(g(x)) · g'(x)"
                  },
                  {
                    type: 'numeric',
                    prompt: 'If $f(x) = (x^2 + 3)^2$, find $f\'(2)$.',
                    answer: 56,
                    tolerance: 0.001,
                    hint: 'Inner derivative is 2x; evaluate at x = 2.',
                    steps: [
                      '$f\'(x) = 2(x^2 + 3) \\cdot 2x$.',
                      'At $x = 2$: $2(7) \\cdot 4 = 56$.'
                    ],
                    answerText: '56'
                  }
                ]
              }
            },
            {
              id: 'applications-of-derivatives',
              title: 'Applications of derivatives',
              minutes: 10,
              summary: 'Tangent lines, critical points, and optimization: the derivative turns slopes into answers.',
              tags: ['calculus', 'derivatives', 'optimization'],
              blocks: [
                { type: 'p', text: 'The derivative is more than a formula — it is a detector. Since $f\'(x)$ is the slope of the tangent, the equation of that tangent is $y = f(a) + f\'(a)(x - a)$: point-slope with the derivative supplying the slope.' },
                { type: 'example', title: 'Tangent line to x² at (1, 1)', text: '$f\'(x) = 2x$, so $f\'(1) = 2$. Tangent: $y = 1 + 2(x - 1) = 2x - 1$ — the line that just grazes the parabola at that point.' },
                { type: 'callout', kind: 'key', text: 'A **critical point** occurs where $f\'(x) = 0$ or $f\'$ is undefined. Local maxima and minima hide among them — the tangent is horizontal at the top of a hill.' },
                { type: 'p', text: 'The sign of $f\'$ maps the function\'s motion: $f\' > 0$ means increasing, $f\' < 0$ means decreasing. Crossing from positive to negative marks a maximum; negative to positive, a minimum.' },
                { type: 'example', title: 'Maximize f(x) = 10x − x²', text: '$f\'(x) = 10 - 2x = 0$ gives $x = 5$. Since $f\'$ goes $+$ to $-$ there, $x = 5$ is a maximum with value $f(5) = 25$.' },
                { type: 'p', text: 'This is why calculus matters outside exams: profit maximization, lowest-cost packaging, the highest point of a thrown ball — each becomes "set the derivative to zero and solve."' },
                { type: 'callout', kind: 'warning', text: '$f\'(x) = 0$ is not automatically a max or min — $f(x) = x^3$ has $f\'(0) = 0$ with no extremum. Always check the sign change (or the second derivative) before declaring victory.' }
              ],
              skill: {
                id: 'derivative-applications',
                name: 'Applications of derivatives',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'What is the slope of the tangent line to $f(x) = x^2$ at $x = 3$?',
                    answer: 6,
                    tolerance: 0.001,
                    hint: 'The tangent slope is f\'(3).',
                    steps: [
                      '$f\'(x) = 2x$.',
                      '$f\'(3) = 6$.'
                    ],
                    answerText: '6'
                  },
                  {
                    type: 'choice',
                    prompt: 'Critical points of a function occur where:',
                    choices: [
                      { id: 'a', text: '$f(x) = 0$' },
                      { id: 'b', text: '$f\'(x) > 0$' },
                      { id: 'c', text: '$f\'(x) = 0$ or $f\'(x)$ is undefined' },
                      { id: 'd', text: 'the function is continuous' }
                    ],
                    answer: 'c',
                    hint: 'Think horizontal tangent — or no tangent at all.',
                    steps: [
                      'A horizontal tangent means $f\' = 0$.',
                      'Corners and cusps have undefined derivatives.',
                      'Both cases produce critical points.'
                    ],
                    answerText: "f'(x) = 0 or undefined"
                  },
                  {
                    type: 'numeric',
                    prompt: 'Find the $x$-coordinate of the minimum of $f(x) = x^2 - 4x + 3$.',
                    answer: 2,
                    tolerance: 0.001,
                    hint: 'Set the derivative to zero.',
                    steps: [
                      '$f\'(x) = 2x - 4$.',
                      '$2x - 4 = 0$ gives $x = 2$.',
                      '$f\'$ changes $-$ to $+$ there, so it is a minimum.'
                    ],
                    answerText: 'x = 2'
                  },
                  {
                    type: 'choice',
                    prompt: 'A function is increasing exactly where:',
                    choices: [
                      { id: 'a', text: '$f(x) > 0$' },
                      { id: 'b', text: '$f\'(x) > 0$' },
                      { id: 'c', text: '$f\'(x) = 0$' },
                      { id: 'd', text: '$f\'\'(x) > 0$' }
                    ],
                    answer: 'b',
                    hint: 'Increasing means the slope is positive.',
                    steps: [
                      'The derivative is the slope.',
                      'Positive slope means the function rises.',
                      'So increasing corresponds to $f\'(x) > 0$.'
                    ],
                    answerText: "f'(x) > 0"
                  },
                  {
                    type: 'numeric',
                    prompt: 'Find the maximum value of $f(x) = 10x - x^2$.',
                    answer: 25,
                    tolerance: 0.001,
                    hint: 'Find the critical point, then compute f there.',
                    steps: [
                      '$f\'(x) = 10 - 2x = 0$ gives $x = 5$.',
                      'Maximum value: $f(5) = 50 - 25 = 25$.'
                    ],
                    answerText: '25'
                  },
                  {
                    type: 'choice',
                    prompt: 'The tangent line to $f(x) = x^2$ at the point $(1, 1)$ is:',
                    choices: [
                      { id: 'a', text: '$y = 2x + 1$' },
                      { id: 'b', text: '$y = x$' },
                      { id: 'c', text: '$y = 2x - 2$' },
                      { id: 'd', text: '$y = 2x - 1$' }
                    ],
                    answer: 'd',
                    hint: 'Use point-slope form with slope f\'(1).',
                    steps: [
                      'Slope: $f\'(1) = 2$.',
                      'Point-slope: $y - 1 = 2(x - 1)$.',
                      'Simplify: $y = 2x - 1$.'
                    ],
                    answerText: 'y = 2x − 1'
                  },
                  {
                    type: 'numeric',
                    prompt: 'The function $f(x) = x^3 - 3x$ has two critical points. What is the **positive** one?',
                    answer: 1,
                    tolerance: 0.001,
                    hint: 'Solve 3x² − 3 = 0.',
                    steps: [
                      '$f\'(x) = 3x^2 - 3$.',
                      '$3x^2 - 3 = 0$ gives $x^2 = 1$, so $x = \\pm 1$.',
                      'The positive critical point is $x = 1$.'
                    ],
                    answerText: '1'
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
