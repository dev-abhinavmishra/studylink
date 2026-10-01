// Subject: Mathematics — exemplar content file.
// See content/SPEC.md for the full schema.

module.exports = {
  id: 'math',
  name: 'Mathematics',
  icon: 'sigma',
  color: '#4f7cff',
  tagline: 'From arithmetic to calculus',
  description: 'Build fluency in algebra, geometry, and calculus with worked examples and unlimited practice.',
  courses: [
    {
      id: 'algebra-foundations',
      title: 'Algebra Foundations',
      subtitle: 'Grades 7–9 · Beginner friendly',
      summary: 'The core moves of algebra: solving equations, working with exponents, and factoring — the skills every later math course depends on.',
      units: [
        {
          id: 'equations',
          title: 'Solving equations',
          lessons: [
            {
              id: 'what-is-a-variable',
              title: 'What is a variable?',
              minutes: 6,
              summary: 'Variables let us talk about unknown or changing quantities.',
              tags: ['algebra', 'foundations'],
              blocks: [
                { type: 'p', text: 'Algebra begins with a simple idea: use a **letter** to stand for a number we do not know yet, or a number that can change. That letter is called a **variable**.' },
                { type: 'p', text: 'If a movie ticket costs $t$ dollars, then two tickets cost $2t$ dollars. The expression $2t$ means "2 times whatever $t$ is." Once we learn $t = 12$, the cost is $2 \\times 12 = 24$ dollars.' },
                { type: 'callout', kind: 'key', text: 'A **variable** is a symbol (usually a letter like $x$, $n$, or $t$) that represents a number. An **expression** like $2t + 5$ combines variables, numbers, and operations.' },
                { type: 'h2', text: 'Why letters?' },
                { type: 'p', text: 'Variables let us write rules once instead of repeating arithmetic. "Tickets cost $12 each" only describes one price. "Tickets cost $t$ dollars each" describes every possible price — and lets us solve for the one we want.' },
                { type: 'example', title: 'Translate words to algebra', text: '"A number increased by 7 is 15" becomes $n + 7 = 15$. This is an **equation** — a statement that two expressions are equal — and solving it means finding the value of $n$ that makes it true (here, $n = 8$).' },
                { type: 'list', items: ['$3x$ means $3 \\times x$', '$\\frac{x}{4}$ means $x$ divided by 4', '$x^2$ means $x \\times x$'] }
              ],
              skill: { id: 'evaluate-expressions', name: 'Evaluating expressions', generator: 'evaluateExpression' }
            },
            {
              id: 'one-step-equations',
              title: 'One-step equations',
              minutes: 8,
              summary: 'Undo a single operation to isolate the variable.',
              tags: ['algebra', 'equations'],
              blocks: [
                { type: 'p', text: 'Solving an equation means finding the value of the variable that makes both sides equal. The golden rule: **whatever you do to one side, do to the other** — the equation stays balanced.' },
                { type: 'p', text: 'For a one-step equation, a single inverse operation isolates the variable. Addition and subtraction undo each other; multiplication and division undo each other.' },
                { type: 'example', title: 'Solve x + 7 = 15', text: 'The $+7$ is added to $x$, so we subtract 7 from **both** sides: $x + 7 - 7 = 15 - 7$, giving $x = 8$. Check: $8 + 7 = 15$ ✓' },
                { type: 'example', title: 'Solve 4x = 36', text: 'The 4 multiplies $x$, so we divide both sides by 4: $\\frac{4x}{4} = \\frac{36}{4}$, giving $x = 9$. Check: $4 \\times 9 = 36$ ✓' },
                { type: 'callout', kind: 'tip', text: 'Always **check** your answer by substituting it back into the original equation. It takes ten seconds and catches most mistakes.' },
                { type: 'h2', text: 'The inverse-operations map' },
                { type: 'list', items: ['$x + a = b \\Rightarrow$ subtract $a$', '$x - a = b \\Rightarrow$ add $a$', '$ax = b \\Rightarrow$ divide by $a$', '$\\frac{x}{a} = b \\Rightarrow$ multiply by $a$'] }
              ],
              skill: { id: 'one-step-equations', name: 'One-step equations', generator: 'oneStepLinear' }
            },
            {
              id: 'two-step-equations',
              title: 'Two-step equations',
              minutes: 9,
              summary: 'Peel away operations in reverse order: constants first, then coefficients.',
              tags: ['algebra', 'equations'],
              blocks: [
                { type: 'p', text: 'A two-step equation like $3x + 5 = 20$ wraps $x$ in **two** operations: multiplication by 3, then addition of 5. To undo them, we reverse the order — just like taking off a jacket before the shirt underneath.' },
                { type: 'callout', kind: 'key', text: 'Undo operations in **reverse order of operations**: handle the added/subtracted constant first, then the multiplied/divided coefficient.' },
                { type: 'example', title: 'Solve 3x + 5 = 20', text: '**Step 1:** subtract 5 from both sides → $3x = 15$. **Step 2:** divide both sides by 3 → $x = 5$. Check: $3(5) + 5 = 20$ ✓' },
                { type: 'p', text: 'Why constants first? Because $3x + 5$ is a *sum*; dividing the whole thing by 3 immediately would force fractions through the $+5$ term. Clearing the constant keeps every step clean.' },
                { type: 'example', title: 'Solve (x/2) − 4 = 6', text: 'Add 4 to both sides: $\\frac{x}{2} = 10$. Multiply both sides by 2: $x = 20$. Check: $20/2 - 4 = 6$ ✓' },
                { type: 'callout', kind: 'warning', text: 'A common error is dividing only part of a side: from $3x + 5 = 20$, writing $x + 5 = \\frac{20}{3}$. Every operation must apply to the **entire side**.' }
              ],
              skill: { id: 'two-step-equations', name: 'Two-step equations', generator: 'twoStepLinear' }
            },
            {
              id: 'equations-with-parentheses',
              title: 'Equations with parentheses',
              minutes: 10,
              summary: 'Distribute first, then solve like a two-step equation.',
              tags: ['algebra', 'equations', 'distributive property'],
              blocks: [
                { type: 'p', text: 'When an equation contains parentheses like $2(x + 3) = 14$, the **distributive property** unwraps it: $a(b + c) = ab + ac$.' },
                { type: 'example', title: 'Distribute correctly', text: '$2(x + 3) = 2x + 6$. The factor outside multiplies **every** term inside — a common mistake is writing $2x + 3$ (forgetting to multiply the 3).' },
                { type: 'example', title: 'Solve 2(x + 3) = 14', text: 'Distribute: $2x + 6 = 14$. Subtract 6: $2x = 8$. Divide by 2: $x = 4$. Check: $2(4 + 3) = 2(7) = 14$ ✓' },
                { type: 'h2', text: 'Variables on both sides' },
                { type: 'p', text: 'Equations like $5x - 3 = 2x + 9$ have $x$ on **both** sides. First collect all $x$-terms on one side (subtract $2x$ from both sides → $3x - 3 = 9$), then solve normally.' },
                { type: 'callout', kind: 'tip', text: 'Collect variable terms on the side that keeps the coefficient positive — it is not required, but it avoids sign errors.' }
              ],
              skill: { id: 'equations-parentheses', name: 'Equations with parentheses', generator: 'linearDistribute' }
            }
          ]
        },
        {
          id: 'exponents',
          title: 'Exponents and powers',
          lessons: [
            {
              id: 'exponent-basics',
              title: 'Exponent basics',
              minutes: 7,
              summary: 'Repeated multiplication written compactly — and the rules that follow.',
              tags: ['algebra', 'exponents'],
              blocks: [
                { type: 'p', text: 'An **exponent** counts repeated multiplication: $x^4 = x \\cdot x \\cdot x \\cdot x$. The base is $x$, the exponent is 4.' },
                { type: 'callout', kind: 'key', text: '$x^1 = x$, and any nonzero base to the zero power is 1: $x^0 = 1$.' },
                { type: 'p', text: 'Exponents grow fast — that is why they model population growth, compound interest, and the spread of viruses. $2^{10} = 1024$, not 20.' },
                { type: 'example', title: 'Evaluate 5³', text: '$5^3 = 5 \\times 5 \\times 5 = 125$. Note the difference: $3^5 = 243$ while $5^3 = 125$ — base and exponent are not interchangeable.' },
                { type: 'callout', kind: 'warning', text: '$-3^2 = -(3^2) = -9$, but $(-3)^2 = 9$. Parentheses decide whether the negative is inside the power.' }
              ],
              skill: { id: 'order-of-operations', name: 'Order of operations', generator: 'orderOfOperations' }
            },
            {
              id: 'exponent-rules',
              title: 'Rules of exponents',
              minutes: 9,
              summary: 'Multiply powers by adding exponents; divide by subtracting them.',
              tags: ['algebra', 'exponents'],
              blocks: [
                { type: 'p', text: 'Three rules handle almost every exponent problem, and all of them come from just counting multiplied factors.' },
                { type: 'formula', text: 'x^a \\cdot x^b = x^{a+b} \\qquad \\frac{x^a}{x^b} = x^{a-b} \\qquad (x^a)^b = x^{ab}' },
                { type: 'example', title: 'Why the product rule works', text: '$x^2 \\cdot x^3 = (x \\cdot x)(x \\cdot x \\cdot x) = x^5$. Two factors times three factors is five factors — that is the whole proof.' },
                { type: 'example', title: 'Simplify x⁷/x³', text: '$\\frac{x^7}{x^3} = x^{7-3} = x^4$. Seven factors in the numerator, three cancel in the denominator, four remain.' },
                { type: 'callout', kind: 'warning', text: 'The rules only apply to the **same base**. $x^2 \\cdot y^3$ cannot be simplified. And $x^a + x^b$ is not a power rule at all: $x^2 + x^3 \\ne x^5$.' }
              ],
              skill: { id: 'exponent-product', name: 'Product rule for exponents', generator: 'exponentProduct' }
            },
            {
              id: 'negative-zero-exponents',
              title: 'Zero and negative exponents',
              minutes: 8,
              summary: 'Negative powers mean reciprocals: x⁻ⁿ = 1/xⁿ.',
              tags: ['algebra', 'exponents'],
              blocks: [
                { type: 'p', text: 'The quotient rule quietly forces two definitions on us. $\\frac{x^3}{x^3} = x^{3-3} = x^0$, but the fraction is clearly 1 — so $x^0 = 1$ must be true for consistency.' },
                { type: 'formula', text: 'x^{-n} = \\frac{1}{x^n}' },
                { type: 'p', text: 'A negative exponent does not make a number negative — it flips it to the reciprocal. $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$, not $-8$.' },
                { type: 'example', title: 'Evaluate 10⁻²', text: '$10^{-2} = \\frac{1}{10^2} = \\frac{1}{100} = 0.01$. Negative powers of 10 are how we write small numbers in scientific notation.' },
                { type: 'callout', kind: 'tip', text: 'To remove a negative exponent, move the factor to the other side of the fraction bar: $\\frac{1}{x^{-2}} = x^2$.' }
              ],
              skill: { id: 'exponent-quotient', name: 'Quotient rule for exponents', generator: 'exponentQuotient' }
            }
          ]
        },
        {
          id: 'factoring',
          title: 'Factoring and quadratics',
          lessons: [
            {
              id: 'factoring-trinomials',
              title: 'Factoring x² + bx + c',
              minutes: 10,
              summary: 'Reverse the distributive property: find two numbers that multiply to c and add to b.',
              tags: ['algebra', 'factoring', 'quadratics'],
              blocks: [
                { type: 'p', text: 'Expanding $(x + 2)(x + 5)$ gives $x^2 + 7x + 10$. **Factoring** runs that backward: given $x^2 + 7x + 10$, recover $(x + 2)(x + 5)$.' },
                { type: 'callout', kind: 'key', text: 'To factor $x^2 + bx + c$, find two numbers whose **product is $c$** and whose **sum is $b$**.' },
                { type: 'example', title: 'Factor x² + 7x + 10', text: 'Which pair multiplies to 10 and adds to 7? Factor pairs of 10: (1,10) sum 11; (2,5) sum 7 ✓. So $x^2 + 7x + 10 = (x+2)(x+5)$.' },
                { type: 'example', title: 'Factor x² − 5x + 6', text: 'Product $+6$, sum $-5$: the pair must both be negative. $(-2)(-3) = 6$ and $-2 + -3 = -5$ ✓. Answer: $(x-2)(x-3)$.' },
                { type: 'callout', kind: 'tip', text: 'Sign trick: if $c$ is positive, both numbers share the sign of $b$; if $c$ is negative, the numbers have opposite signs and the bigger one takes the sign of $b$.' }
              ],
              skill: { id: 'factor-trinomials', name: 'Factoring trinomials', generator: 'factorTrinomial' }
            },
            {
              id: 'solving-quadratics',
              title: 'Solving quadratics by factoring',
              minutes: 9,
              summary: 'If a product is zero, one of the factors must be zero.',
              tags: ['algebra', 'quadratics'],
              blocks: [
                { type: 'p', text: 'The **zero-product property** is the reason factoring matters: if $A \\cdot B = 0$, then $A = 0$ or $B = 0$ (or both). Nothing else works that way — if $A \\cdot B = 6$, neither factor has to be 6.' },
                { type: 'example', title: 'Solve x² + 7x + 10 = 0', text: 'Factor: $(x+2)(x+5) = 0$. Set each factor to zero: $x + 2 = 0$ or $x + 5 = 0$, so $x = -2$ or $x = -5$.' },
                { type: 'p', text: 'A quadratic can have two solutions, one repeated solution (when both factors are identical, like $(x-3)^2 = 0$), or no real solutions at all.' },
                { type: 'callout', kind: 'warning', text: 'The equation must equal **zero** before factoring helps. For $x^2 + 5x = 14$, first move the 14: $x^2 + 5x - 14 = 0$, then factor.' },
                { type: 'graph', caption: 'Play with it: solutions of $ax^2+bx+c=0$ are exactly where the parabola crosses the $x$-axis. Slide $c$ until the curve lifts off the axis — no real solutions left.', expr: 'a*x^2+b*x+c', xrange: [-10, 10], yrange: [-20, 20], sliders: { a: { min: -2, max: 2, step: 0.5, value: 1, label: 'a' }, b: { min: -8, max: 8, step: 0.5, value: 1, label: 'b' }, c: { min: -15, max: 10, step: 0.5, value: -6, label: 'c' } } }
              ],
              skill: { id: 'solve-quadratics', name: 'Solving quadratics', generator: 'quadraticSolve' }
            }
          ]
        }
      ]
    }
  ]
};
