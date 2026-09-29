// Parameterized question generators.
// Each generator returns a question object:
//   { type: 'choice'|'numeric'|'text', prompt, choices?, answer, tolerance?,
//     hint, steps: [], answerText }
// `steps` is the worked, Chegg-style solution shown after answering / on demand.

function rint(min, max) { // inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick(arr) { return arr[rint(0, arr.length - 1)]; }
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = rint(0, i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function nonZero(min, max) {
  let v = 0;
  while (v === 0) v = rint(min, max);
  return v;
}
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a || 1;
}
function frac(n, d) { // reduced fraction string, handles sign + whole numbers
  if (d === 0) return 'undefined';
  let s = '';
  if ((n < 0) !== (d < 0)) s = '-';
  n = Math.abs(n); d = Math.abs(d);
  const g = gcd(n, d); n /= g; d /= g;
  if (d === 1) return `${s}${n}`;
  return `${s}\\frac{${n}}{${d}}`;
}
function signed(n) { return n < 0 ? `- ${Math.abs(n)}` : `+ ${n}`; } // " - 4" / " + 4"
function termCoef(c, v) { // "3x", "-x", "x", "5", "-2" (for v='' constant)
  if (!v) return `${c}`;
  if (c === 1) return v;
  if (c === -1) return `-${v}`;
  return `${c}${v}`;
}

// Build a multiple-choice question from a correct value + distractors.
// Distractors that collide with the answer or each other are dropped, so a
// question may ship 3 options instead of 4 — never two identical choices.
function choiceQ(prompt, correctDisplay, wrongs, extra = {}) {
  const distinct = [...new Set(wrongs.filter((w) => w !== correctDisplay))];
  const opts = shuffle([correctDisplay, ...distinct.slice(0, 3)]);
  const letters = ['a', 'b', 'c', 'd'];
  const choices = opts.map((text, i) => ({ id: letters[i], text }));
  return {
    type: 'choice', prompt, choices,
    answer: letters[opts.indexOf(correctDisplay)],
    answerText: correctDisplay,
    ...extra
  };
}

const GENERATORS = {

  // ---- Algebra ----------------------------------------------------------

  oneStepLinear() {
    const a = nonZero(2, 9), x = rint(-9, 9), b = a * x;
    return {
      type: 'numeric',
      prompt: `Solve for $x$: $$${a}x = ${b}$$`,
      answer: x, tolerance: 0.001,
      hint: 'Undo the multiplication by dividing both sides by the same number.',
      steps: [
        `Divide both sides by $${a}$: $$x = \\frac{${b}}{${a}}$$`,
        `Simplify: $$x = ${x}$$`
      ],
      answerText: `x = ${x}`
    };
  },

  twoStepLinear() {
    const a = nonZero(2, 9), b = nonZero(-9, 9), x = rint(-9, 9);
    const c = a * x + b;
    return {
      type: 'numeric',
      prompt: `Solve for $x$: $$${a}x ${signed(b)} = ${c}$$`,
      answer: x, tolerance: 0.001,
      hint: 'Isolate the term with x first: subtract the constant from both sides, then divide.',
      steps: [
        `Subtract $${b}$ from both sides: $$${a}x = ${c} ${signed(-b)} = ${c - b}$$`,
        `Divide both sides by $${a}$: $$x = \\frac{${c - b}}{${a}} = ${x}$$`
      ],
      answerText: `x = ${x}`
    };
  },

  linearDistribute() {
    const a = nonZero(2, 6), b = nonZero(-8, 8), x = rint(-6, 6);
    let c = nonZero(2, 9);
    while (c === a) c = nonZero(2, 9); // a === c would produce an identity with no unique answer
    const rhs = c * x + a * b; // a(x + b) = c*x + a*b → (a-c)x = a*b ... wait use form a(x+b)=cx+d style
    // Form: a(x + b) = c * x + d  → choose d so x lands integer: a*x + a*b = c*x + d → d = (a-c)x + a*b
    const d = (a - c) * x + a * b;
    return {
      type: 'numeric',
      prompt: `Solve for $x$: $$${a}(x ${signed(b)}) = ${c}x ${signed(d)}$$`,
      answer: x, tolerance: 0.001,
      hint: 'Distribute on the left, then collect the x-terms on one side.',
      steps: [
        `Distribute: $$${a}x ${signed(a * b)} = ${c}x ${signed(d)}$$`,
        `Subtract $${c}x$ from both sides: $$${a - c}x ${signed(a * b)} = ${d}$$`,
        `Subtract $${a * b}$: $$${a - c}x = ${d - a * b}$$`,
        `Divide by $${a - c}$: $$x = ${x}$$`
      ],
      answerText: `x = ${x}`
    };
  },

  slopeFromPoints() {
    const x1 = rint(-6, 6), y1 = rint(-6, 6), x2 = rint(-6, 6), y2 = rint(-6, 6);
    if (x1 === x2) return GENERATORS.slopeFromPoints();
    const dy = y2 - y1, dx = x2 - x1;
    const m = frac(dy, dx);
    // Distractors must stay distinct from the answer — e.g. |dy| = |dx| makes the
    // reciprocal identical to the correct slope.
    const correct = `$${m}$`;
    const pool = [`$${frac(dx, dy)}$`, `$${frac(-dy, dx)}$`, `$${frac(dy, y2 - x1 || dx + 1)}$`];
    const wrongs = [...new Set(pool.filter((w) => w !== correct))];
    let bump = 1;
    while (wrongs.length < 3) { // backfill with near-answer slopes if pool ran dry
      const cand = `$${frac(dy + bump, dx)}$`;
      if (cand !== correct && !wrongs.includes(cand)) wrongs.push(cand);
      bump += 1;
    }
    return choiceQ(
      `What is the slope of the line through $(${x1}, ${y1})$ and $(${x2}, ${y2})$?`,
      correct,
      wrongs,
      {
        hint: 'Slope is rise over run: change in y divided by change in x.',
        steps: [
          `Slope formula: $$m = \\frac{y_2 - y_1}{x_2 - x_1}$$`,
          `Substitute: $$m = \\frac{${y2} - (${y1})}{${x2} - (${x1})} = \\frac{${dy}}{${dx}} = ${m}$$`
        ]
      }
    );
  },

  slopeIntercept() {
    const m = nonZero(-6, 6), b = rint(-9, 9);
    const x = rint(-5, 5), y = m * x + b;
    return {
      type: 'numeric',
      prompt: `A line is $y = ${termCoef(m, 'x')} ${signed(b)}$. What is $y$ when $x = ${x}$?`,
      answer: y, tolerance: 0.001,
      hint: `Substitute x = ${x} into the equation and simplify.`,
      steps: [
        `Substitute: $$y = ${m}(${x}) ${signed(b)}$$`,
        `$$y = ${m * x} ${signed(b)} = ${y}$$`
      ],
      answerText: `${y}`
    };
  },

  exponentProduct() {
    const v = pick(['x', 'a', 'n']);
    const p = rint(2, 8), q = rint(2, 8);
    return choiceQ(
      `Simplify: $${v}^{${p}} \\cdot ${v}^{${q}}$`,
      `$${v}^{${p + q}}$`,
      [`$${v}^{${p * q}}$`, `$${v}^{${Math.abs(p - q)}}$`, `$${v}^{${p + q + 1}}$`],
      {
        hint: 'When multiplying powers with the same base, add the exponents.',
        steps: [
          `Same base, so add exponents: $${v}^{${p}} \\cdot ${v}^{${q}} = ${v}^{${p} + ${q}}$`,
          `$$= ${v}^{${p + q}}$$`
        ]
      }
    );
  },

  exponentQuotient() {
    const v = pick(['x', 'b', 'm']);
    const q = rint(2, 5), p = q + rint(1, 7);
    return choiceQ(
      `Simplify: $\\frac{${v}^{${p}}}{${v}^{${q}}}$`,
      `$${v}^{${p - q}}$`,
      [`$${v}^{${p + q}}$`, `$${v}^{${Math.round(p / q)}}$`, `$${v}^{${p - q - 1}}$`],
      {
        hint: 'When dividing powers with the same base, subtract the exponents.',
        steps: [
          `Same base, so subtract exponents: $\\frac{${v}^{${p}}}{${v}^{${q}}} = ${v}^{${p} - ${q}}$`,
          `$$= ${v}^{${p - q}}$$`
        ]
      }
    );
  },

  factorTrinomial() {
    const r = nonZero(-7, 7), s = nonZero(-7, 7);
    const b = r + s, c = r * s;
    const bStr = b === 0 ? '' : ` ${signed(b)}x`;
    const prompt = `Factor: $x^2${bStr} ${signed(c)}$`;
    const correct = `$(x ${signed(r)})(x ${signed(s)})$`;
    return choiceQ(prompt, correct, [
      `$(x ${signed(r)})(x ${signed(-s)})$`,
      `$(x ${signed(-r)})(x ${signed(-s)})$`,
      `$(x ${signed(r + 1)})(x ${signed(s - 1)})$`
    ], {
      hint: `Find two numbers that multiply to ${c} and add to ${b}.`,
      steps: [
        `We need two numbers with product $${c}$ and sum $${b}$.`,
        `The numbers are $${r}$ and $${s}$: $${r} \\times ${s} = ${r * s}$ and $${r} + ${s} = ${r + s}$.`,
        `So $x^2${bStr} ${signed(c)} = (x ${signed(r)})(x ${signed(s)})$.`
      ]
    });
  },

  quadraticSolve() {
    const r = rint(-6, 6), s = rint(-6, 6);
    const b = -(r + s), c = r * s; // x^2 + bx + c = 0 has roots r, s
    const [lo, hi] = [Math.min(r, s), Math.max(r, s)];
    const bStr = b === 0 ? '' : ` ${signed(b)}x`;
    const prompt = `Solve: $x^2${bStr} ${signed(c)} = 0$`;
    const correct = lo === hi ? `$x = ${lo}$` : `$x = ${lo}$ or $x = ${hi}$`;
    return choiceQ(prompt, correct, [
      `$x = ${-lo}$ or $x = ${-hi}$`,
      `$x = ${lo - 1}$ or $x = ${hi + 1}$`,
      `$x = ${-b}$ only`
    ], {
      hint: 'Factor the trinomial, then set each factor equal to zero.',
      steps: [
        `Factor: $(x ${signed(-r)})(x ${signed(-s)}) = 0$`,
        `Set each factor to zero: $x ${signed(-r)} = 0$ or $x ${signed(-s)} = 0$`,
        lo === hi ? `So $x = ${lo}$ (a repeated root).` : `So $x = ${lo}$ or $x = ${hi}$.`
      ]
    });
  },

  evaluateExpression() {
    const a = nonZero(-6, 6), b = nonZero(-5, 5), c = rint(-5, 5);
    const x = rint(-4, 4);
    const val = a * x * x + b * x + c;
    return {
      type: 'numeric',
      prompt: `Evaluate $${termCoef(a, 'x^2')} ${signed(b)}x ${signed(c)}$ when $x = ${x}$.`,
      answer: val, tolerance: 0.001,
      hint: 'Substitute the value of x and follow order of operations (square first).',
      steps: [
        `Substitute: $${termCoef(a, `(${x})^2`)} ${signed(b)}(${x}) ${signed(c)}$`,
        `Compute the square: $${termCoef(a, `(${x * x})`)} ${signed(b * x)} ${signed(c)}$`,
        `$$${a * x * x} ${signed(b * x)} ${signed(c)} = ${val}$$`
      ],
      answerText: `${val}`
    };
  },

  orderOfOperations() {
    const a = rint(2, 9), b = rint(2, 9), c = rint(2, 9), d = rint(2, 6);
    const val = a + b * c - d;
    return choiceQ(
      `Evaluate: $${a} + ${b} \\times ${c} - ${d}$`,
      `$${val}$`,
      [`$${(a + b) * c - d}$`, `$${a + b * (c - d)}$`, `$${(a + b) * (c - d)}$`],
      {
        hint: 'Multiply before adding or subtracting.',
        steps: [
          `Multiplication first: $${b} \\times ${c} = ${b * c}$`,
          `Then left to right: $${a} + ${b * c} - ${d} = ${val}$`
        ]
      }
    );
  },

  percentOf() {
    const p = pick([5, 10, 12, 15, 20, 25, 30, 40, 50, 60, 75, 80]);
    const base = rint(2, 40) * pick([4, 5, 10, 20]);
    const val = (p / 100) * base;
    return {
      type: 'numeric',
      prompt: `What is $${p}\\%$ of $${base}$?`,
      answer: val, tolerance: 0.01,
      hint: `Convert the percent to a decimal by dividing by 100, then multiply.`,
      steps: [
        `$${p}\\% = ${frac(p, 100)}$ as a fraction, or $${p / 100}$ as a decimal.`,
        `Multiply: $${p / 100} \\times ${base} = ${val}$`
      ],
      answerText: `${val}`
    };
  },

  ratioScale() {
    const a = rint(2, 9), b = rint(2, 9), k = rint(2, 9);
    const val = (b * k) / a;
    return {
      type: 'numeric',
      prompt: `If $\\frac{${a}}{${b}} = \\frac{${k}}{x}$, what is $x$?`,
      answer: val, tolerance: 0.001,
      hint: 'Cross-multiply: a · x = b · k, then solve for x.',
      steps: [
        `Cross-multiply: $${a} \\cdot x = ${b} \\cdot ${k} = ${b * k}$`,
        `Divide by $${a}$: $x = \\frac{${b * k}}{${a}} = ${frac(b * k, a)}$`
      ],
      answerText: `${frac(b * k, a)}`
    };
  },

  // ---- Geometry ----------------------------------------------------------

  pythagorean() {
    const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [12, 16, 20]];
    const [a, b, c] = pick(triples);
    const missing = pick(['a', 'b', 'c']);
    let prompt, answer, steps, answerText;
    if (missing === 'c') {
      prompt = `A right triangle has legs $${a}$ and $${b}$. What is the hypotenuse?`;
      answer = c; answerText = `${c}`;
      steps = [
        `Pythagorean theorem: $a^2 + b^2 = c^2$`,
        `$${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${a * a + b * b} = c^2$`,
        `$c = \\sqrt{${a * a + b * b}} = ${c}$`
      ];
    } else {
      const leg = missing === 'a' ? a : b;
      const other = missing === 'a' ? b : a;
      prompt = `A right triangle has hypotenuse $${c}$ and one leg $${other}$. What is the other leg?`;
      answer = leg; answerText = `${leg}`;
      steps = [
        `Pythagorean theorem: $\\text{leg}^2 = c^2 - \\text{other}^2$`,
        `$\\text{leg}^2 = ${c}^2 - ${other}^2 = ${c * c} - ${other * other} = ${c * c - other * other}$`,
        `$\\text{leg} = \\sqrt{${c * c - other * other}} = ${leg}$`
      ];
    }
    return { type: 'numeric', prompt, answer, tolerance: 0.001, hint: 'Use $a^2 + b^2 = c^2$.', steps, answerText };
  },

  circleArea() {
    const r = rint(2, 12);
    const val = Math.PI * r * r;
    return {
      type: 'numeric',
      prompt: `A circle has radius $${r}$. What is its area? (Round to two decimals; use $\\pi \\approx 3.14159$)`,
      answer: Math.round(val * 100) / 100, tolerance: 0.02,
      hint: 'Area of a circle is $A = \\pi r^2$.',
      steps: [
        `$A = \\pi r^2 = \\pi (${r})^2 = ${r * r}\\pi$`,
        `$A \\approx ${r * r} \\times 3.14159 \\approx ${(Math.round(val * 100) / 100)}$ square units`
      ],
      answerText: `${r * r}\\pi \\approx ${Math.round(val * 100) / 100}`
    };
  },

  triangleAngles() {
    const a = rint(30, 80), b = rint(30, 80);
    const c = 180 - a - b;
    if (c < 20) return GENERATORS.triangleAngles();
    return {
      type: 'numeric',
      prompt: `Two angles of a triangle measure $${a}^\\circ$ and $${b}^\\circ$. What is the third angle, in degrees?`,
      answer: c, tolerance: 0.001,
      hint: 'The angles of a triangle sum to 180°.',
      steps: [
        `$${a} + ${b} + x = 180$`,
        `$x = 180 - ${a + b} = ${c}^\\circ$`
      ],
      answerText: `${c}°`
    };
  },

  trigSolve() {
    const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
    const [opp, adj, hyp] = pick(triples);
    const which = pick(['sin', 'cos', 'tan']);
    let num, den, prompt;
    if (which === 'sin') { num = opp; den = hyp; prompt = `In a right triangle, the side opposite angle $\\theta$ is $${opp}$ and the hypotenuse is $${hyp}$. Find $\\sin\\theta$.`; }
    if (which === 'cos') { num = adj; den = hyp; prompt = `In a right triangle, the side adjacent to angle $\\theta$ is $${adj}$ and the hypotenuse is $${hyp}$. Find $\\cos\\theta$.`; }
    if (which === 'tan') { num = opp; den = adj; prompt = `In a right triangle, the side opposite angle $\\theta$ is $${opp}$ and the side adjacent is $${adj}$. Find $\\tan\\theta$.`; }
    return choiceQ(prompt, `$${frac(num, den)}$`, [
      `$${frac(den, num)}$`, `$${frac(opp + adj, hyp)}$`, `$${frac(Math.max(1, den - num), den)}$`
    ], {
      hint: 'Remember SOH-CAH-TOA.',
      steps: [
        which === 'sin' ? `$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{${opp}}{${hyp}} = ${frac(num, den)}$`
          : which === 'cos' ? `$\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{${adj}}{${hyp}} = ${frac(num, den)}$`
          : `$\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{${opp}}{${adj}} = ${frac(num, den)}$`
      ]
    });
  },

  // ---- Precalculus / Calculus -------------------------------------------

  functionEval() {
    const a = nonZero(-4, 4), b = rint(-5, 5), x = rint(-3, 3);
    const val = a * x * x + b;
    return {
      type: 'numeric',
      prompt: `If $f(x) = ${termCoef(a, 'x^2')} ${signed(b)}$, what is $f(${x})$?`,
      answer: val, tolerance: 0.001,
      hint: `Substitute ${x} for every x in the formula.`,
      steps: [
        `$f(${x}) = ${a}(${x})^2 ${signed(b)}$`,
        `$= ${a * x * x} ${signed(b)} = ${val}$`
      ],
      answerText: `${val}`
    };
  },

  derivativePower() {
    const a = nonZero(-6, 6), n = rint(2, 5);
    return choiceQ(
      `Find the derivative of $f(x) = ${termCoef(a, `x^{${n}}`)}$`,
      `$f'(x) = ${termCoef(a * n, `x^{${n - 1}}`)}$`,
      [`$f'(x) = ${termCoef(a, `x^{${n - 1}}`)}$`, `$f'(x) = ${termCoef(a * n, `x^{${n}}`)}$`, `$f'(x) = ${termCoef(a * (n - 1), `x^{${n - 1}}`)}$`],
      {
        hint: 'Power rule: bring the exponent down as a multiplier, then subtract 1 from the exponent.',
        steps: [
          `Power rule: $\\frac{d}{dx}x^n = nx^{n-1}$`,
          `$f'(x) = ${a} \\cdot ${n} \\cdot x^{${n}-1} = ${termCoef(a * n, `x^{${n - 1}}`)}$`
        ]
      }
    );
  },

  logarithmEval() {
    const bases = [[2, [3, 4, 5, 6]], [3, [2, 3, 4]], [5, [2, 3]], [10, [2, 3]], [4, [2, 3]]];
    const [b, exps] = pick(bases);
    const e = pick(exps), val = Math.pow(b, e);
    return choiceQ(
      `Evaluate: $\\log_{${b}}(${val})$`,
      `$${e}$`,
      [`$${e + 1}$`, `$${b}$`, `$${val / b}$`, `$${e - 1}$`, `$${e + 2}$`, `$${val}$`],
      {
        hint: `Ask: ${b} raised to what power equals ${val}?`,
        steps: [
          `$\\log_{${b}}(${val}) = ?$ means "to what power must $${b}$ be raised to get $${val}$?"`,
          `$${b}^{${e}} = ${val}$, so the answer is $${e}$.`
        ]
      }
    );
  },

  // ---- Physics / Chemistry numerics --------------------------------------

  ohmsLaw() {
    const r = pick([2, 4, 5, 8, 10, 20, 25, 50, 100]), i = rint(2, 12);
    const v = r * i;
    return {
      type: 'numeric',
      prompt: `A circuit has a resistor of $${r}\\ \\Omega$ carrying $${i}\\ \\text{A}$ of current. What is the voltage across it, in volts?`,
      answer: v, tolerance: 0.001,
      hint: "Use Ohm's law: V = I·R.",
      steps: [`$V = I \\times R = ${i} \\times ${r} = ${v}\\ \\text{V}$`],
      answerText: `${v} V`
    };
  },

  kinematics() {
    const u = rint(0, 20), a = rint(1, 10), t = rint(1, 8);
    const v = u + a * t;
    return {
      type: 'numeric',
      prompt: `An object accelerates from $${u}\\ \\text{m/s}$ at $${a}\\ \\text{m/s}^2$ for $${t}$ seconds. What is its final velocity in m/s?`,
      answer: v, tolerance: 0.001,
      hint: 'Use $v = u + at$.',
      steps: [
        `$v = u + at$`,
        `$v = ${u} + ${a}(${t}) = ${u} + ${a * t} = ${v}\\ \\text{m/s}$`
      ],
      answerText: `${v} m/s`
    };
  },

  density() {
    const v = rint(2, 20) * 5, d = rint(2, 19);
    const m = v * d;
    return {
      type: 'numeric',
      prompt: `A sample has a mass of $${m}$ grams and a volume of $${v}$ mL. What is its density in g/mL?`,
      answer: d, tolerance: 0.001,
      hint: 'Density = mass / volume.',
      steps: [`$\\rho = \\frac{m}{V} = \\frac{${m}}{${v}} = ${d}\\ \\text{g/mL}$`],
      answerText: `${d} g/mL`
    };
  },

  percentYield() {
    const theory = rint(2, 20) * 2, actual = Math.round(theory * pick([50, 60, 70, 75, 80, 85, 90]) / 100);
    const pct = Math.round((actual / theory) * 1000) / 10;
    return {
      type: 'numeric',
      prompt: `A reaction was expected to produce $${theory}$ g of product, but only $${actual}$ g was collected. What is the percent yield? (Round to one decimal.)`,
      answer: pct, tolerance: 0.15,
      hint: 'Percent yield = (actual / theoretical) × 100.',
      steps: [`$\\text{yield} = \\frac{${actual}}{${theory}} \\times 100 = ${pct}\\%$`],
      answerText: `${pct}%`
    };
  }
};

function generate(name) {
  const gen = GENERATORS[name];
  if (!gen) return null;
  try {
    const q = gen();
    if (!q || q.prompt == null || q.answer == null) return null;
    return q;
  } catch (e) {
    return null;
  }
}

module.exports = { GENERATORS, generate, helpers: { rint, pick, shuffle, gcd, frac } };
