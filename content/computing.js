// Subject: Computing — programming, web development, and CS principles.
// See content/SPEC.md for the full schema.

module.exports = {
  id: 'computing',
  name: 'Computing',
  icon: 'chip',
  color: '#8b5cf6',
  tagline: 'From first lines of code to how the internet works',
  description: 'Learn to program in JavaScript, build real web pages with HTML, CSS, and the DOM, and understand the computer science ideas — binary, algorithms, networks, encryption, and databases — underneath it all.',
  courses: [
    {
      id: 'intro-to-programming',
      title: 'Intro to Programming',
      subtitle: 'Grades 8–12 · Beginner friendly',
      summary: 'Write your first JavaScript programs: variables, operators, conditionals, loops, functions, and the collections that hold data.',
      units: [
        {
          id: 'js-fundamentals',
          title: 'Fundamentals in JavaScript',
          lessons: [
            {
              id: 'js-variables-and-types',
              title: 'Variables and types',
              minutes: 8,
              summary: 'Store values in named variables and learn the types every JavaScript value has.',
              tags: ['javascript', 'variables', 'types', 'fundamentals'],
              blocks: [
                { type: 'p', text: 'A program is mostly the art of remembering things and changing them. A **variable** is a name that points at a value — think of it as a labeled box you can look inside and refill. In JavaScript you create one with `let` (a box you can refill) or `const` (a box sealed after the first fill).' },
                { type: 'code', lang: 'js', text: `let score = 0;        // a box labeled "score"
score = score + 10;   // refill it: now 10
const player = 'Ada'; // sealed — can't be reassigned
console.log(score);   // 10` },
                { type: 'callout', kind: 'key', text: 'Use `const` by default and `let` only when the value must change. The older keyword `var` still works but has quirky scoping rules — modern code avoids it.' },
                { type: 'p', text: 'Every value has a **type**. The everyday ones are `number` (like `42` or `3.5` — JavaScript has just one number type), `string` (text in quotes, like `\'hello\'`), and `boolean` (`true` or `false`). Two special values round out the list: `undefined` means "no value was ever assigned" and `null` means "deliberately empty." The `typeof` operator reports a value\'s type as a string.' },
                { type: 'example', title: 'Strings vs numbers', text: '`\'5\' + 3` gives the string `\'53\'` — `+` glues text together when either side is a string. But `5 + 3` gives the number `8`. Same symbol, different behavior: the types of the values decide what `+` means.' },
                { type: 'callout', kind: 'warning', text: 'JavaScript freely converts types behind your back (**coercion**). `\'5\' * 2` is `10` but `\'5\' + 2` is `\'52\'`. When output looks wrong, check the types with `typeof` first.' }
              ],
              skill: {
                id: 'js-variables-and-types-practice',
                name: 'Variables and types',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which line declares a variable you CAN reassign later?',
                    choices: [
                      { id: 'a', text: '`const score = 10`' },
                      { id: 'b', text: '`let score = 10`' },
                      { id: 'c', text: '`variable score = 10`' },
                      { id: 'd', text: '`int score = 10`' }
                    ],
                    answer: 'b',
                    hint: 'Two of these are real JavaScript keywords; only one allows reassignment.',
                    steps: [
                      '`let` and `const` are the real declaration keywords — `variable` and `int` do not exist in JavaScript.',
                      '`const` creates a binding that cannot be reassigned.',
                      '`let` creates a binding you can refill, so `let score = 10` is correct.'
                    ],
                    answerText: 'let score = 10'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does this code print? `let n = 4; n = n + 6; console.log(n)`',
                    choices: [
                      { id: 'a', text: '4' },
                      { id: 'b', text: '6' },
                      { id: 'c', text: '10' },
                      { id: 'd', text: '46' }
                    ],
                    answer: 'c',
                    hint: 'The second line reads the current value of n, adds 6, and stores the result back.',
                    steps: [
                      'Start: `n` holds `4`.',
                      '`n = n + 6` evaluates the right side first: `4 + 6 = 10`.',
                      'The result overwrites `n`, so `console.log(n)` prints `10`.'
                    ],
                    answerText: '10'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `typeof "hello"` evaluate to?',
                    choices: [
                      { id: 'a', text: '`\'text\'`' },
                      { id: 'b', text: '`\'string\'`' },
                      { id: 'c', text: '`\'word\'`' },
                      { id: 'd', text: '`\'char\'`' }
                    ],
                    answer: 'b',
                    hint: 'typeof returns the name of the value\'s type as a string.',
                    steps: [
                      '`"hello"` is text in quotes, so its type is string.',
                      '`typeof` returns that type name: the value `\'string\'`.'
                    ],
                    answerText: "'string'"
                  },
                  {
                    type: 'choice',
                    prompt: 'What happens when this runs? `const x = 9; x = 10;`',
                    choices: [
                      { id: 'a', text: '`x` becomes `10`' },
                      { id: 'b', text: '`x` stays `9` and nothing else happens' },
                      { id: 'c', text: 'A `TypeError` is thrown: assignment to a constant variable' },
                      { id: 'd', text: '`x` becomes `undefined`' }
                    ],
                    answer: 'c',
                    hint: 'const seals the binding — reassigning it is not silently ignored.',
                    steps: [
                      '`const x = 9` creates a constant binding.',
                      '`x = 10` tries to repoint that binding, which is illegal.',
                      'JavaScript throws `TypeError: Assignment to constant variable`.'
                    ],
                    answerText: 'TypeError'
                  },
                  {
                    type: 'choice',
                    prompt: 'You run `let a;` and then read `a`. What is its value?',
                    choices: [
                      { id: 'a', text: '`0`' },
                      { id: 'b', text: '`null`' },
                      { id: 'c', text: '`\'empty\'`' },
                      { id: 'd', text: '`undefined`' }
                    ],
                    answer: 'd',
                    hint: 'Declared but never assigned — JavaScript has a specific value for that.',
                    steps: [
                      'A `let` declaration without `=` leaves the variable declared but unassigned.',
                      'Unassigned variables hold `undefined` — not `0`, not `null`, not an error.',
                      '`null` would mean someone deliberately stored "empty"; nobody did.'
                    ],
                    answerText: 'undefined'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the value of `\'5\' + 3` in JavaScript?',
                    choices: [
                      { id: 'a', text: '`8`' },
                      { id: 'b', text: '`\'53\'`' },
                      { id: 'c', text: '`NaN`' },
                      { id: 'd', text: 'It throws an error' }
                    ],
                    answer: 'b',
                    hint: 'When either side of + is a string, + glues instead of adds.',
                    steps: [
                      '`\'5\'` is a string, `3` is a number.',
                      'With a string on one side, `+` means string concatenation: the number is converted to `\'3\'`.',
                      'The result is the string `\'53\'`, not the number `8`.'
                    ],
                    answerText: "'53'"
                  },
                  {
                    type: 'choice',
                    prompt: 'Which of these values has type `number`?',
                    choices: [
                      { id: 'a', text: '`\'42\'`' },
                      { id: 'b', text: '`true`' },
                      { id: 'c', text: '`NaN`' },
                      { id: 'd', text: '`undefined`' }
                    ],
                    answer: 'c',
                    hint: 'One of these is a surprising member of the number family.',
                    steps: [
                      '`\'42\'` is in quotes, so it is a string. `true` is a boolean. `undefined` is its own type.',
                      '`NaN` means "not a number," but it is produced by numeric operations like `0 / 0`.',
                      '`typeof NaN` is `\'number\'` — a famous JavaScript quirk worth memorizing.'
                    ],
                    answerText: 'NaN'
                  }
                ]
              }
            },
            {
              id: 'js-operators',
              title: 'Operators: math, comparison, and logic',
              minutes: 9,
              summary: 'Combine values with arithmetic, compare them safely, and chain conditions with logic operators.',
              tags: ['javascript', 'operators', 'operators-and-expressions'],
              blocks: [
                { type: 'p', text: '**Operators** are the verbs of JavaScript — they take values and produce new ones. Arithmetic gives you `+`, `-`, `*`, `/`, plus two worth memorizing: `%` (**remainder**) and `**` (**exponent**). `17 % 5` is `2` because 17 is three 5s with 2 left over.' },
                { type: 'code', lang: 'js', text: `console.log(17 % 5);    // 2  (remainder)
console.log(2 ** 10);   // 1024 (2 to the 10th)
console.log(7 === '7'); // false (strict: types differ)
console.log(7 == '7');  // true  (loose: coerces first)` },
                { type: 'callout', kind: 'key', text: '`===` is the **strict** equal: same value AND same type. `==` is loose — it converts types first, so `\'7\' == 7` is `true`. Always use `===` (and `!==`) unless you have a specific reason not to.' },
                { type: 'p', text: 'Comparisons like `>` and `<=` produce booleans. **Logical operators** combine them: `&&` (both must be true), `||` (at least one true), and `!` (flips true/false). These are the raw material of every `if` statement you will ever write.' },
                { type: 'example', title: 'Even or odd?', text: 'The remainder operator is the classic test: `n % 2 === 0` is `true` exactly when `n` is even, because even numbers have nothing left after dividing by 2. For `n = 14`: `14 % 2` is `0`, so the check passes.' },
                { type: 'callout', kind: 'warning', text: '`+` does double duty. `\'a\' + 1 + 2` is `\'a12\'` (string first, so everything glues), but `1 + 2 + \'a\'` is `\'3a\'` (numbers add before the string is reached). Evaluation is strictly left to right.' }
              ],
              skill: {
                id: 'js-operators-practice',
                name: 'Operators and expressions',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is `17 % 5`?',
                    choices: [
                      { id: 'a', text: '`3`' },
                      { id: 'b', text: '`2`' },
                      { id: 'c', text: '`3.4`' },
                      { id: 'd', text: '`0`' }
                    ],
                    answer: 'b',
                    hint: '% is remainder — what is left after dividing as many whole 5s as possible.',
                    steps: [
                      '5 goes into 17 three whole times: `3 * 5 = 15`.',
                      'The leftover is `17 - 15 = 2`.',
                      'So `17 % 5` is `2`. The `3` is what `17 / 5` rounds down to — a common mix-up.'
                    ],
                    answerText: '2'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is `2 ** 3`?',
                    choices: [
                      { id: 'a', text: '`6`' },
                      { id: 'b', text: '`9`' },
                      { id: 'c', text: '`8`' },
                      { id: 'd', text: '`5`' }
                    ],
                    answer: 'c',
                    hint: '** is the exponent operator: base raised to a power.',
                    steps: [
                      '`2 ** 3` means $2^3$: multiply 2 by itself 3 times.',
                      '$2 \\times 2 \\times 2 = 8$.'
                    ],
                    answerText: '8'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement is TRUE?',
                    choices: [
                      { id: 'a', text: '`\'7\' === 7` is `true`' },
                      { id: 'b', text: '`\'7\' == 7` is `false`' },
                      { id: 'c', text: '`\'7\' === 7` is `false` but `\'7\' == 7` is `true`' },
                      { id: 'd', text: 'Both comparisons throw errors' }
                    ],
                    answer: 'c',
                    hint: 'One of the two checks converts types before comparing.',
                    steps: [
                      '`===` compares type AND value: string vs number differ, so `\'7\' === 7` is `false`.',
                      '`==` coerces first: `\'7\'` becomes `7`, so `\'7\' == 7` is `true`.',
                      'This is why style guides insist on `===` — no hidden conversions.'
                    ],
                    answerText: "'7' === 7 is false, '7' == 7 is true"
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `console.log(3 + 4 * 2)` print?',
                    choices: [
                      { id: 'a', text: '`14`' },
                      { id: 'b', text: '`11`' },
                      { id: 'c', text: '`10`' },
                      { id: 'd', text: '`24`' }
                    ],
                    answer: 'b',
                    hint: 'JavaScript follows order of operations — multiplication before addition.',
                    steps: [
                      'Multiplication binds tighter: `4 * 2 = 8` happens first.',
                      'Then `3 + 8 = 11`.',
                      'Choosing `14` means accidentally evaluating left to right.'
                    ],
                    answerText: '11'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is `5 > 3 && 2 > 4`?',
                    choices: [
                      { id: 'a', text: '`true`' },
                      { id: 'b', text: '`false`' },
                      { id: 'c', text: '`undefined`' },
                      { id: 'd', text: '`5`' }
                    ],
                    answer: 'b',
                    hint: '&& needs BOTH sides to be true.',
                    steps: [
                      'Left side: `5 > 3` is `true`.',
                      'Right side: `2 > 4` is `false`.',
                      '`true && false` is `false` — one false side sinks the whole `&&`.'
                    ],
                    answerText: 'false'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `console.log(1 + 2 + \'a\')` print?',
                    choices: [
                      { id: 'a', text: '`\'12a\'`' },
                      { id: 'b', text: '`\'1a2\'`' },
                      { id: 'c', text: '`\'3a\'`' },
                      { id: 'd', text: '`NaN`' }
                    ],
                    answer: 'c',
                    hint: 'Evaluation is left to right — the numbers meet before the string appears.',
                    steps: [
                      '`1 + 2` runs first: two numbers, so it adds → `3`.',
                      'Then `3 + \'a\'`: a number meets a string → concatenation.',
                      'Result: the string `\'3a\'`. Compare with `\'a\' + 1 + 2`, which is `\'a12\'`.'
                    ],
                    answerText: "'3a'"
                  },
                  {
                    type: 'choice',
                    prompt: 'What is `!true || false`?',
                    choices: [
                      { id: 'a', text: '`true`' },
                      { id: 'b', text: '`false`' },
                      { id: 'c', text: '`null`' },
                      { id: 'd', text: 'It throws an error' }
                    ],
                    answer: 'b',
                    hint: '! applies first — flip the true, then evaluate the ||.',
                    steps: [
                      '`!true` is `false`.',
                      'Now evaluate `false || false`.',
                      '`||` needs at least one `true`; both are false → `false`.'
                    ],
                    answerText: 'false'
                  }
                ]
              }
            },
            {
              id: 'js-conditionals',
              title: 'Conditionals: if, else, and truthiness',
              minutes: 9,
              summary: 'Run code only when a condition holds — and learn which values JavaScript treats as false.',
              tags: ['javascript', 'conditionals', 'control-flow'],
              blocks: [
                { type: 'p', text: 'A program that does the same thing every time is a calculator. **Conditionals** let code make decisions: `if` runs a block only when its condition is `true`, `else if` offers a next condition to try, and `else` catches everything left over. JavaScript checks the conditions in order and runs **only the first one** that is true.' },
                { type: 'code', lang: 'js', text: `const temp = 72;
if (temp > 80) {
  console.log('Hot');
} else if (temp > 60) {
  console.log('Nice');   // this one runs
} else {
  console.log('Cold');
}` },
                { type: 'callout', kind: 'key', text: 'Conditions do not have to be booleans — JavaScript asks whether the value is **truthy** or **falsy**. Exactly six values are falsy: `false`, `0`, `\'\'` (empty string), `null`, `undefined`, and `NaN`. Everything else — including `\'0\'`, `[]`, and `{}` — is truthy.' },
                { type: 'example', title: 'Letter grades', text: '`if (score >= 90) grade = \'A\'; else if (score >= 80) grade = \'B\';` — order matters. If `score` is 85, the first test fails, the second passes, and `grade` is `\'B\'`. Writing the `80` check first would wrongly award a B to a 95.' },
                { type: 'p', text: 'For a quick either/or, the **ternary** operator packs an if-else into one expression: `const label = age >= 18 ? \'adult\' : \'minor\';` — condition, question mark, value-if-true, colon, value-if-false.' },
                { type: 'callout', kind: 'warning', text: '`if (x = 0)` assigns `0` to `x` instead of comparing — and since `0` is falsy, the block never runs. You wanted `x === 0`. One `=` assigns; three compare.' }
              ],
              skill: {
                id: 'js-conditionals-practice',
                name: 'Conditionals and truthiness',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What does this print? `let s = 85; if (s >= 90) { console.log(\'A\') } else if (s >= 80) { console.log(\'B\') } else { console.log(\'C\') }`',
                    choices: [
                      { id: 'a', text: `'A'` },
                      { id: 'b', text: `'B'` },
                      { id: 'c', text: `'C'` },
                      { id: 'd', text: `'B' then 'C'` }
                    ],
                    answer: 'b',
                    hint: 'Conditions run top to bottom; the first true one wins and the rest are skipped.',
                    steps: [
                      '`85 >= 90` is `false`, so the `A` branch is skipped.',
                      '`85 >= 80` is `true` → prints `\'B\'`.',
                      'The `else` is skipped entirely — an if/else chain runs at most one branch.'
                    ],
                    answerText: 'B'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which of these values is falsy?',
                    choices: [
                      { id: 'a', text: '`\'0\'`' },
                      { id: 'b', text: '`0`' },
                      { id: 'c', text: '`[]` (empty array)' },
                      { id: 'd', text: '`\'false\'`' }
                    ],
                    answer: 'b',
                    hint: 'Only six values are falsy — check each against the list.',
                    steps: [
                      'Falsy list: `false`, `0`, `\'\'`, `null`, `undefined`, `NaN`.',
                      '`\'0\'` and `\'false\'` are non-empty strings → truthy. `[]` is an object → truthy.',
                      '`0` is on the list → falsy.'
                    ],
                    answerText: '0'
                  },
                  {
                    type: 'choice',
                    prompt: 'Does `if (\'\') { console.log(\'hi\') }` print anything?',
                    choices: [
                      { id: 'a', text: 'Yes — `\'hi\'` prints' },
                      { id: 'b', text: 'No — the empty string is falsy' },
                      { id: 'c', text: 'No — it throws an error' },
                      { id: 'd', text: 'Yes — strings are always truthy' }
                    ],
                    answer: 'b',
                    hint: 'An empty string is one of the six falsy values.',
                    steps: [
                      'The condition is the string `\'\'`.',
                      '`\'\'` is falsy, so the `if` block is skipped.',
                      'Nothing prints — and no error occurs; falsy is not an error.'
                    ],
                    answerText: 'Nothing prints'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is `label` after: `const label = 16 >= 18 ? \'adult\' : \'minor\'`?',
                    choices: [
                      { id: 'a', text: `'adult'` },
                      { id: 'b', text: `'minor'` },
                      { id: 'c', text: '`true`' },
                      { id: 'd', text: '`undefined`' }
                    ],
                    answer: 'b',
                    hint: 'Ternary: condition ? value-if-true : value-if-false.',
                    steps: [
                      'The condition `16 >= 18` is `false`.',
                      'A false condition yields the value after the colon.',
                      'So `label` is `\'minor\'`.'
                    ],
                    answerText: "'minor'"
                  },
                  {
                    type: 'choice',
                    prompt: 'What does this print? `let x = 5; if (x = 0) { console.log(\'zero\') } else { console.log(\'other\') }`',
                    choices: [
                      { id: 'a', text: `'zero'` },
                      { id: 'b', text: `'other'` },
                      { id: 'c', text: 'SyntaxError — you cannot assign inside an if' },
                      { id: 'd', text: '`5`' }
                    ],
                    answer: 'b',
                    hint: 'Look closely: one = is assignment, not comparison.',
                    steps: [
                      '`x = 0` is an assignment — it sets `x` to `0` and evaluates to `0`.',
                      '`0` is falsy, so the `if` branch is skipped.',
                      'The `else` runs and prints `\'other\'`. No error — this bug compiles cleanly, which is what makes it dangerous.'
                    ],
                    answerText: 'other'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which check correctly tests "x equals 0"?',
                    choices: [
                      { id: 'a', text: '`if (x = 0)`' },
                      { id: 'b', text: '`if (x == 0)`' },
                      { id: 'c', text: '`if (x === 0)`' },
                      { id: 'd', text: '`if (x := 0)`' }
                    ],
                    answer: 'c',
                    hint: 'One operator assigns, one is loose equality, one is strict equality.',
                    steps: [
                      '`x = 0` assigns; it does not compare.',
                      '`x == 0` compares but coerces — `\'0\' == 0` and `false == 0` are also true.',
                      '`x === 0` is strict: true only when `x` is the number `0`. `:=` is not JavaScript at all.'
                    ],
                    answerText: 'if (x === 0)'
                  },
                  {
                    type: 'choice',
                    prompt: 'What prints? `if (\'0\') { console.log(\'yes\') } else { console.log(\'no\') }`',
                    choices: [
                      { id: 'a', text: `'no' — 0 is falsy` },
                      { id: 'b', text: `'yes' — '0' is a non-empty string` },
                      { id: 'c', text: 'A type error' },
                      { id: 'd', text: `'no' — only booleans work in if` }
                    ],
                    answer: 'b',
                    hint: 'The condition is a string containing a character, not the number zero.',
                    steps: [
                      '`\'0\'` is a string of length 1.',
                      'Only the EMPTY string is falsy — non-empty strings are truthy.',
                      'So the `if` branch runs and prints `\'yes\'`. This trips up almost everyone once.'
                    ],
                    answerText: 'yes'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'data-and-logic',
          title: 'Data & logic',
          lessons: [
            {
              id: 'js-loops',
              title: 'Loops: repeating work',
              minutes: 9,
              summary: 'Repeat code with for, while, and for...of — and control the repetition with break and continue.',
              tags: ['javascript', 'loops', 'iteration'],
              blocks: [
                { type: 'p', text: 'Loops exist because computers are fast at boring things. A **`for` loop** packs three controls into one line: where to start, when to stop, and how to step. `for (let i = 0; i < 5; i++)` reads as "start `i` at 0, keep going while `i < 5`, add 1 after each pass."' },
                { type: 'code', lang: 'js', text: `for (let i = 0; i < 5; i++) {
  console.log(i);   // prints 0, 1, 2, 3, 4
}

for (const color of ['red', 'green']) {
  console.log(color);  // prints 'red', then 'green'
}` },
                { type: 'callout', kind: 'key', text: 'Three loop flavors: `for` when you know the count, `while` when you know the stopping condition but not the count, and `for...of` to visit every item in a collection. Inside any of them, `break` exits immediately and `continue` skips to the next iteration.' },
                { type: 'example', title: 'Sum 1 to 100', text: '`let sum = 0; for (let i = 1; i <= 100; i++) { sum += i; }` — the accumulator `sum` starts at 0 and each pass adds the current `i`. After the last pass, `sum` is `5050`. This accumulate-in-a-variable pattern shows up everywhere.' },
                { type: 'callout', kind: 'warning', text: 'A loop whose condition never becomes false runs forever. `for (let i = 0; i < 5; i--)` counts *down*, so `i` is always less than 5 — an infinite loop that freezes the tab. Check the step direction matches the stop condition.' },
                { type: 'callout', kind: 'tip', text: 'Off-by-one errors are the classic loop bug: `i < 5` gives 5 iterations (0–4), while `i <= 5` gives 6 (0–5). When a loop runs one too many or too few times, look at the `<` vs `<=` first.' }
              ],
              skill: {
                id: 'js-loops-practice',
                name: 'Loop tracing',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'How many times does this loop body run? `for (let i = 0; i < 4; i++) { console.log(i) }`',
                    answer: 4,
                    hint: 'Count the values of i for which i < 4 is true.',
                    steps: [
                      '`i` takes the values 0, 1, 2, 3 — each passes `i < 4`.',
                      'At `i = 4` the condition fails and the loop stops.',
                      'That is 4 iterations (the off-by-one trap: the body never sees `i = 4`).'
                    ],
                    answerText: '4'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `for (let i = 1; i <= 3; i++) { console.log(i) }` print?',
                    choices: [
                      { id: 'a', text: '`0 1 2`' },
                      { id: 'b', text: '`1 2 3`' },
                      { id: 'c', text: '`1 2`' },
                      { id: 'd', text: '`1 2 3 4`' }
                    ],
                    answer: 'b',
                    hint: 'Start value is 1, and <= keeps the boundary value.',
                    steps: [
                      '`i` starts at 1, not 0.',
                      '`i <= 3` stays true for `i = 1, 2, 3`.',
                      'So it prints `1 2 3` — starting and ending values both shifted by one from the usual pattern.'
                    ],
                    answerText: '1 2 3'
                  },
                  {
                    type: 'choice',
                    prompt: 'After this runs, what is `n`? `let n = 1; while (n < 10) { n = n * 2 }`',
                    choices: [
                      { id: 'a', text: '`10`' },
                      { id: 'b', text: '`8`' },
                      { id: 'c', text: '`16`' },
                      { id: 'd', text: 'The loop never ends' }
                    ],
                    answer: 'c',
                    hint: 'The loop exits only after n crosses 10 — trace the values.',
                    steps: [
                      '`n` goes 1 → 2 → 4 → 8 → 16.',
                      'At `n = 8`, `8 < 10` is still true, so it doubles once more to `16`.',
                      'Now `16 < 10` is false — the loop ends with `n = 16`. Loops overshoot; they do not land on the boundary.'
                    ],
                    answerText: '16'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `break` do inside a loop?',
                    choices: [
                      { id: 'a', text: 'Skips the rest of this iteration and starts the next one' },
                      { id: 'b', text: 'Exits the loop entirely' },
                      { id: 'c', text: 'Restarts the loop from iteration 0' },
                      { id: 'd', text: 'Pauses the loop for one second' }
                    ],
                    answer: 'b',
                    hint: 'break is an emergency exit; continue is a skip button.',
                    steps: [
                      '`break` terminates the loop immediately — control jumps to the line after it.',
                      'Skipping to the next iteration is what `continue` does.',
                      'Example: `for (...) { if (found) break; }` stops searching early.'
                    ],
                    answerText: 'Exits the loop entirely'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `for (const c of \'abc\') { console.log(c) }` print?',
                    choices: [
                      { id: 'a', text: '`abc` once' },
                      { id: 'b', text: '`a`, then `b`, then `c`' },
                      { id: 'c', text: '`0 1 2`' },
                      { id: 'd', text: 'An error — strings are not iterable' }
                    ],
                    answer: 'b',
                    hint: 'for...of visits each element of an iterable — and strings are iterable.',
                    steps: [
                      '`for...of` loops over the items of a collection.',
                      'A string\'s "items" are its characters.',
                      'So it prints `a`, `b`, `c` on three separate lines.'
                    ],
                    answerText: 'a b c (each on its own line)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why does `for (let i = 0; i < 5; i--)` never stop?',
                    choices: [
                      { id: 'a', text: 'You cannot use `i--` in a for loop' },
                      { id: 'b', text: '`i` decreases forever, so `i < 5` never becomes false' },
                      { id: 'c', text: 'The condition runs before `i` exists' },
                      { id: 'd', text: 'JavaScript forbids counting down' }
                    ],
                    answer: 'b',
                    hint: 'Check whether the step moves i toward or away from the stop condition.',
                    steps: [
                      'The condition is `i < 5` — the loop should stop when `i` reaches 5.',
                      'But `i--` makes `i` go down: 0, -1, -2, ... — always less than 5.',
                      'A finite countdown loop needs `i > 0` as the condition. Step direction must match the exit.'
                    ],
                    answerText: 'i decreases, so i < 5 is always true'
                  },
                  {
                    type: 'numeric',
                    prompt: 'What is `s` after this runs? `let s = 0; for (let i = 1; i <= 4; i++) { s = s + i }`',
                    answer: 10,
                    hint: 's accumulates: add each i one at a time.',
                    steps: [
                      '`i` runs 1, 2, 3, 4.',
                      '`s` becomes `0+1=1`, then `1+2=3`, then `3+3=6`, then `6+4=10`.',
                      'Final value: `10` — the sum $1+2+3+4$.'
                    ],
                    answerText: '10'
                  }
                ]
              }
            },
            {
              id: 'js-functions',
              title: 'Functions: reusable logic',
              minutes: 10,
              summary: 'Package steps into named, reusable functions with inputs (parameters) and outputs (return values).',
              tags: ['javascript', 'functions', 'abstraction'],
              blocks: [
                { type: 'p', text: 'A **function** is a named bundle of steps you can run on demand. Declare it once, then **call** it as many times as you like — the recipe is written once and cooked forever. The inputs are called **parameters**; the specific values you pass in are **arguments**.' },
                { type: 'code', lang: 'js', text: `function greet(name) {      // 'name' is a parameter
  return 'Hi ' + name + '!';
}

const square = (n) => n * n;  // arrow shorthand

console.log(greet('Ada'));    // 'Ada' is an argument → 'Hi Ada!'
console.log(square(5));       // 25` },
                { type: 'callout', kind: 'key', text: '`return` hands a value back to the caller AND ends the function — any lines after it never run. A function without `return` still gives something back: `undefined`.' },
                { type: 'p', text: 'The arrow syntax `(n) => n * n` is a compact function — parameters, an arrow, and the returned expression. Meanwhile, variables declared **inside** a function live only inside it (local **scope**): the outside world cannot see them, which is exactly what keeps functions self-contained.' },
                { type: 'example', title: 'return vs console.log', text: '`function add(a, b) { console.log(a + b) }` *prints* the sum but returns `undefined` — so `let r = add(1, 2)` leaves `r` empty. Printing shows a human a value; returning hands the program a value it can keep computing with.' },
                { type: 'callout', kind: 'tip', text: 'Functions are values in JavaScript — you can store them in variables, pass them to other functions, and return them. That is why callbacks and event handlers work.' }
              ],
              skill: {
                id: 'js-functions-practice',
                name: 'Functions and return values',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'What does `double(4)` return? `function double(n) { return n * 2 }`',
                    answer: 8,
                    hint: 'Substitute the argument for the parameter.',
                    steps: [
                      'The argument `4` binds to the parameter `n`.',
                      '`return n * 2` computes `4 * 2`.',
                      'The call evaluates to `8`.'
                    ],
                    answerText: '8'
                  },
                  {
                    type: 'choice',
                    prompt: 'What prints? `function hi() { console.log(\'x\') } hi(); hi();`',
                    choices: [
                      { id: 'a', text: '`x` once — a function runs only when defined' },
                      { id: 'b', text: '`x` twice — once per call' },
                      { id: 'c', text: 'Nothing — `hi` is never called' },
                      { id: 'd', text: 'An error — functions can only be called once' }
                    ],
                    answer: 'b',
                    hint: 'Each call is an independent run of the body.',
                    steps: [
                      'Defining `hi` does not run it — only `hi()` does.',
                      'It is called twice, so the body runs twice.',
                      'Output: `x` then `x`.'
                    ],
                    answerText: 'x twice'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is `r`? `function add(a, b) { console.log(a + b) } let r = add(1, 2);`',
                    choices: [
                      { id: 'a', text: '`3`' },
                      { id: 'b', text: '`undefined`' },
                      { id: 'c', text: '`0`' },
                      { id: 'd', text: 'An error' }
                    ],
                    answer: 'b',
                    hint: 'console.log displays a value; it does not give one back.',
                    steps: [
                      '`add(1, 2)` prints `3` — but the function has no `return`.',
                      'A function with no `return` evaluates to `undefined`.',
                      'So `r` is `undefined` even though `3` appeared on screen.'
                    ],
                    answerText: 'undefined'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `f(10, 3)` return? `function f(a, b) { return a - b }`',
                    choices: [
                      { id: 'a', text: '`7`' },
                      { id: 'b', text: '`-7`' },
                      { id: 'c', text: '`13`' },
                      { id: 'd', text: '`103`' }
                    ],
                    answer: 'a',
                    hint: 'Arguments bind to parameters in order: first to first.',
                    steps: [
                      '`a` gets `10`, `b` gets `3`.',
                      '`a - b` is `10 - 3 = 7`.',
                      'Order matters: `f(3, 10)` would give `-7`.'
                    ],
                    answerText: '7'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which arrow function is equivalent to `function inc(x) { return x + 1 }`?',
                    choices: [
                      { id: 'a', text: '`x -> x + 1`' },
                      { id: 'b', text: '`(x) => x + 1`' },
                      { id: 'c', text: '`x = { x + 1 }`' },
                      { id: 'd', text: '`arrow(x): x + 1`' }
                    ],
                    answer: 'b',
                    hint: 'Arrow syntax: parameters, a fat arrow, then the result expression.',
                    steps: [
                      'JavaScript arrows use `=>`, not `->` (that is Python/Java lambda territory).',
                      '`(x) => x + 1` means: take `x`, return `x + 1`.',
                      'With a single expression the `return` and braces are implied.'
                    ],
                    answerText: '(x) => x + 1'
                  },
                  {
                    type: 'choice',
                    prompt: 'What happens here? `function f() { let secret = 42 } f(); console.log(secret)`',
                    choices: [
                      { id: 'a', text: 'Prints `42`' },
                      { id: 'b', text: 'Prints `undefined`' },
                      { id: 'c', text: '`ReferenceError: secret is not defined`' },
                      { id: 'd', text: 'Prints `null`' }
                    ],
                    answer: 'c',
                    hint: 'let inside a function is scoped to that function.',
                    steps: [
                      '`secret` is declared inside `f` — it is a local variable.',
                      'Local variables stop existing when the function finishes.',
                      'Reading `secret` outside is a `ReferenceError`, not `undefined`.'
                    ],
                    answerText: 'ReferenceError'
                  },
                  {
                    type: 'choice',
                    prompt: 'A function reaches the end without hitting `return`. What does it produce?',
                    choices: [
                      { id: 'a', text: '`null`' },
                      { id: 'b', text: '`0`' },
                      { id: 'c', text: 'The last value it computed' },
                      { id: 'd', text: '`undefined`' }
                    ],
                    answer: 'd',
                    hint: 'JavaScript does not guess — it has a default return value.',
                    steps: [
                      'Every function call evaluates to some value.',
                      'Without an explicit `return`, the default is `undefined`.',
                      'Unlike some languages, JavaScript does NOT return the last computed value automatically.'
                    ],
                    answerText: 'undefined'
                  }
                ]
              }
            },
            {
              id: 'js-arrays-and-objects',
              title: 'Arrays and objects',
              minutes: 10,
              summary: 'Store ordered lists in arrays and labeled data in objects — the two structures almost all data takes.',
              tags: ['javascript', 'arrays', 'objects', 'data-structures'],
              blocks: [
                { type: 'p', text: 'Single values are not enough — real programs handle lists of users, scores, and settings. An **array** is an ordered list in square brackets; each slot has a numeric **index** starting at **0**. An **object** is a set of labeled slots — **key–value pairs** — accessed by name instead of position.' },
                { type: 'code', lang: 'js', text: `const colors = ['red', 'green', 'blue'];
colors[0];          // 'red' — first index is 0
colors.push('cyan');
colors.length;      // 4

const user = { name: 'Ada', age: 36 };
user.name;          // 'Ada'   (dot notation)
user['age'];        // 36      (bracket notation)` },
                { type: 'callout', kind: 'key', text: 'Arrays answer "what is the nth thing?"; objects answer "what is the thing called X?". Most real data combines them: an array of objects, like a list of users where each user has `name` and `age`.' },
                { type: 'example', title: 'Last element', text: 'For `colors` of length 4, the last valid index is `3` — always `length - 1`. `colors[colors.length]` asks for index 4 and gets `undefined`, not an error. Read `.length` as "how many," not "last index."' },
                { type: 'p', text: 'Arrays come with built-in verbs: `push` adds to the end, `pop` removes and returns the last item, `includes` checks membership. Objects use dot notation (`user.name`) when the key is a fixed name and bracket notation (`user[key]`) when the key lives in a variable.' },
                { type: 'callout', kind: 'warning', text: 'Reading past the end gives `undefined` — JavaScript does not throw an index-out-of-range error like some languages. Silent `undefined`s propagate far before they crash, so check `.length` before assuming an index exists.' }
              ],
              skill: {
                id: 'js-arrays-objects-practice',
                name: 'Arrays and objects',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is `[\'a\', \'b\', \'c\'][1]`?',
                    choices: [
                      { id: 'a', text: `'a'` },
                      { id: 'b', text: `'b'` },
                      { id: 'c', text: `'c'` },
                      { id: 'd', text: '`1`' }
                    ],
                    answer: 'b',
                    hint: 'Indexes start at 0.',
                    steps: [
                      'Index 0 is `\'a\'`, index 1 is `\'b\'`, index 2 is `\'c\'`.',
                      'So `[1]` reads `\'b\'` — the SECOND element, because counting starts at 0.'
                    ],
                    answerText: "'b'"
                  },
                  {
                    type: 'numeric',
                    prompt: 'What is `arr.length` after this? `const arr = [\'x\', \'y\']; arr.push(\'z\');`',
                    answer: 3,
                    hint: 'push adds one element to the end.',
                    steps: [
                      'The array starts with 2 elements.',
                      '`push(\'z\')` appends one more → `[\'x\', \'y\', \'z\']`.',
                      '`.length` is `3`.'
                    ],
                    answerText: '3'
                  },
                  {
                    type: 'numeric',
                    prompt: 'An array has length 5. What is the index of its LAST element?',
                    answer: 4,
                    hint: 'Indexes run from 0 to length − 1.',
                    steps: [
                      'Valid indexes are `0, 1, 2, 3, 4`.',
                      'The last index is `5 - 1 = 4`.',
                      'Asking for index `5` is the classic off-by-one — it returns `undefined`.'
                    ],
                    answerText: '4'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `arr[10]` return when `arr` is `[1, 2, 3]`?',
                    choices: [
                      { id: 'a', text: 'An `IndexError`' },
                      { id: 'b', text: '`null`' },
                      { id: 'c', text: '`undefined`' },
                      { id: 'd', text: '`3`' }
                    ],
                    answer: 'c',
                    hint: 'JavaScript is permissive about out-of-range reads.',
                    steps: [
                      'Valid indexes are 0–2; `10` is out of range.',
                      'JavaScript does not throw — it quietly returns `undefined`.',
                      'That silence is why `undefined` bugs are so common.'
                    ],
                    answerText: 'undefined'
                  },
                  {
                    type: 'choice',
                    prompt: 'Given `const user = { name: \'Ada\', age: 36 }`, what is `user.name`?',
                    choices: [
                      { id: 'a', text: `'name'` },
                      { id: 'b', text: `'Ada'` },
                      { id: 'c', text: '`{ name: \'Ada\' }`' },
                      { id: 'd', text: '`undefined`' }
                    ],
                    answer: 'b',
                    hint: 'Dot notation reads the property with that exact key.',
                    steps: [
                      '`user.name` looks up the key `\'name\'` in the object.',
                      'Its value is `\'Ada\'`.',
                      '`\'name\'` itself would be the key, not the value.'
                    ],
                    answerText: "'Ada'"
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `Object.keys({ a: 1, b: 2 })` return?',
                    choices: [
                      { id: 'a', text: '`[1, 2]`' },
                      { id: 'b', text: '`[\'a\', \'b\']`' },
                      { id: 'c', text: '`\'ab\'`' },
                      { id: 'd', text: '`{ a: 1, b: 2 }`' }
                    ],
                    answer: 'b',
                    hint: 'Object.keys collects the KEYS, not the values.',
                    steps: [
                      'The object has keys `\'a\'` and `\'b\'` with values `1` and `2`.',
                      '`Object.keys` returns an array of the keys: `[\'a\', \'b\']`.',
                      '(`Object.values` would give `[1, 2]`.)'
                    ],
                    answerText: "['a', 'b']"
                  },
                  {
                    type: 'choice',
                    prompt: 'What does this code leave in `arr`? `const arr = [\'a\', \'b\', \'c\']; arr.pop();`',
                    choices: [
                      { id: 'a', text: '`[\'a\', \'b\', \'c\']`' },
                      { id: 'b', text: '`[\'b\', \'c\']`' },
                      { id: 'c', text: '`[\'a\', \'b\']`' },
                      { id: 'd', text: '`[\'c\']`' }
                    ],
                    answer: 'c',
                    hint: 'pop removes from the END of the array.',
                    steps: [
                      '`pop()` removes the last element, `\'c\'`, and returns it.',
                      'The array itself is mutated to `[\'a\', \'b\']`.',
                      'Removing from the front would be `shift()` — a different method.'
                    ],
                    answerText: "['a', 'b']"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      subtitle: 'Grades 9–12 · Project based',
      summary: 'Build real pages: structure with HTML, style with CSS and flexbox, then make them interactive with the DOM, events, and fetch.',
      units: [
        {
          id: 'html-and-css',
          title: 'HTML & CSS',
          lessons: [
            {
              id: 'html-structure',
              title: 'HTML structure and elements',
              minutes: 8,
              summary: 'Pages are trees of nested elements — learn tags, attributes, and the document skeleton.',
              tags: ['html', 'markup', 'web'],
              blocks: [
                { type: 'p', text: 'HTML is not a programming language — it is a **markup language**: it labels what each piece of a page *is*. Content lives inside **elements**: an opening tag like `<p>`, the content, and a closing tag `</p>`. Elements nest inside each other, forming the tree the browser draws.' },
                { type: 'code', lang: 'html', text: `<!DOCTYPE html>
<html>
  <head>
    <title>My page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>My first <a href="https://example.com">link</a>.</p>
    <img src="cat.jpg" alt="A cat">
  </body>
</html>` },
                { type: 'callout', kind: 'key', text: 'Every page has the same skeleton: `<!DOCTYPE html>` declares the document type, `<head>` holds metadata (title, styles, scripts — invisible stuff), and `<body>` holds everything the visitor actually sees.' },
                { type: 'p', text: 'Tags carry extra information in **attributes** — `name="value"` pairs inside the opening tag. `<a href="...">` needs `href` to know where the link goes; `<img>` needs `src` for the image file and `alt` for text shown to screen readers and when the image fails to load.' },
                { type: 'example', title: 'Anatomy of a link', text: 'In `<a href="https://example.com">Click me</a>`, the element is `a` (anchor), the attribute is `href` with value `https://example.com`, and the visible text is "Click me". Reading any tag means spotting those three parts.' },
                { type: 'callout', kind: 'warning', text: 'A few elements are **void** — they never have content or a closing tag: `<img>`, `<br>`, `<input>`. And nesting must be proper: `<b><i>x</i></b>` is fine, but `<b><i>x</b></i>` crosses the tags and is invalid.' }
              ],
              skill: {
                id: 'html-structure-practice',
                name: 'HTML structure',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which is a correctly formed paragraph element?',
                    choices: [
                      { id: 'a', text: '`<p>Hello</p>`' },
                      { id: 'b', text: '`<p>Hello<p>`' },
                      { id: 'c', text: '`<p>Hello</p`' },
                      { id: 'd', text: '`{p}Hello{/p}`' }
                    ],
                    answer: 'a',
                    hint: 'An element is opening tag + content + closing tag with a slash.',
                    steps: [
                      'Opening tag: `<p>`; closing tag must include the slash: `</p>`.',
                      'Choice a has all three parts in order.',
                      'The others drop the slash, the `>`, or use braces — none are valid HTML.'
                    ],
                    answerText: '<p>Hello</p>'
                  },
                  {
                    type: 'choice',
                    prompt: 'The `href` attribute belongs on which element?',
                    choices: [
                      { id: 'a', text: '`<img>`' },
                      { id: 'b', text: '`<link>`' },
                      { id: 'c', text: '`<a>`' },
                      { id: 'd', text: '`<p>`' }
                    ],
                    answer: 'c',
                    hint: 'href = hypertext reference — the destination of a link.',
                    steps: [
                      '`<a>` is the anchor element — the thing users click to navigate.',
                      '`href` names the destination URL, so it lives on `<a>`.',
                      '`<img>` uses `src`, not `href`.'
                    ],
                    answerText: '<a>'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which heading is the largest and most important?',
                    choices: [
                      { id: 'a', text: '`<h6>`' },
                      { id: 'b', text: '`<h1>`' },
                      { id: 'c', text: '`<head>`' },
                      { id: 'd', text: '`<header>`' }
                    ],
                    answer: 'b',
                    hint: 'Heading levels run opposite to intuition — small number, big heading.',
                    steps: [
                      'Headings run `<h1>` (largest) down to `<h6>` (smallest).',
                      '`<head>` and `<header>` are different elements entirely — document metadata and page layout, not text headings.',
                      'Every page should have exactly one `<h1>`.'
                    ],
                    answerText: '<h1>'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where does visible page content belong?',
                    choices: [
                      { id: 'a', text: '`<head>`' },
                      { id: 'b', text: '`<body>`' },
                      { id: 'c', text: '`<title>`' },
                      { id: 'd', text: '`<!DOCTYPE>`' }
                    ],
                    answer: 'b',
                    hint: 'One section is metadata for the browser; the other is what users see.',
                    steps: [
                      '`<head>` holds metadata: `<title>`, stylesheets, meta tags — none rendered on the page.',
                      '`<body>` holds the rendered content: text, images, links.',
                      'So all visible content goes inside `<body>`.'
                    ],
                    answerText: '<body>'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which pair correctly makes a bulleted list with one item?',
                    choices: [
                      { id: 'a', text: '`<ul><li>Milk</li></ul>`' },
                      { id: 'b', text: '`<li><ul>Milk</ul></li>`' },
                      { id: 'c', text: '`<list><item>Milk</item></list>`' },
                      { id: 'd', text: '`<ul>Milk<li></li></ul>`' }
                    ],
                    answer: 'a',
                    hint: 'The list wraps the items; li is a list item.',
                    steps: [
                      '`<ul>` is the unordered (bulleted) list container.',
                      'Each item inside it must be an `<li>` (list item).',
                      'So `<ul><li>Milk</li></ul>` is the valid nesting — the item goes inside the list, not the reverse.'
                    ],
                    answerText: '<ul><li>Milk</li></ul>'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which attributes does a well-formed `<img>` need?',
                    choices: [
                      { id: 'a', text: '`href` and `title`' },
                      { id: 'b', text: '`src` and `alt`' },
                      { id: 'c', text: '`link` and `caption`' },
                      { id: 'd', text: '`file` and `desc`' }
                    ],
                    answer: 'b',
                    hint: 'One points at the image file; the other describes it for accessibility.',
                    steps: [
                      '`src` tells the browser which image file to fetch.',
                      '`alt` provides a text alternative for screen readers and broken images.',
                      'Together: `<img src="cat.jpg" alt="A cat">`.'
                    ],
                    answerText: 'src and alt'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which nesting is valid HTML?',
                    choices: [
                      { id: 'a', text: '`<b><i>text</b></i>`' },
                      { id: 'b', text: '`<b><i>text</i></b>`' },
                      { id: 'c', text: '`<b><i></b>text</i>`' },
                      { id: 'd', text: 'All of them are valid' }
                    ],
                    answer: 'b',
                    hint: 'Tags must close in reverse order — last opened, first closed.',
                    steps: [
                      'Nesting is like parentheses: the most recently opened tag closes first.',
                      '`<b>` opens, `<i>` opens, `</i>` closes, `</b>` closes — choice b.',
                      'Crossing tags like `</b></i>` confuses the parser and produces unpredictable DOMs.'
                    ],
                    answerText: '<b><i>text</i></b>'
                  }
                ]
              }
            },
            {
              id: 'css-selectors-box-model',
              title: 'CSS selectors and the box model',
              minutes: 10,
              summary: 'Target elements with selectors, and understand the padding–border–margin box every element lives in.',
              tags: ['css', 'selectors', 'box-model', 'web'],
              blocks: [
                { type: 'p', text: 'CSS is a list of rules: a **selector** picks which elements to style, and a block of **declarations** (`property: value;`) says how. `p { color: navy; }` paints every paragraph navy. The two selector symbols to memorize are `.` for **classes** (reusable labels you invent, like `.card`) and `#` for **ids** (one-of-a-kind labels, like `#header`).' },
                { type: 'code', lang: 'css', text: `.card {
  padding: 16px;
  border: 1px solid #ccc;
  margin: 8px;
  background: white;
}
#checkout { color: #e11d48; }   /* ids win ties */` },
                { type: 'callout', kind: 'key', text: 'When rules conflict, **specificity** decides: `#id` beats `.class`, which beats a bare element name. That ordering — id > class > element — resolves nearly every "why is my style ignored" mystery.' },
                { type: 'p', text: 'Every element is a nested set of boxes called the **box model**. At the center is the **content**; **padding** is breathing room *inside* the border; the **border** is the visible edge; **margin** is empty space *outside* the border that pushes neighbors away.' },
                { type: 'example', title: 'How wide is the box?', text: 'With `width: 100px; padding: 10px; border: 2px;`, the total footprint is `100 + 10 + 10 + 2 + 2 = 124px` — padding and border are added on *both* sides. (Margin adds space beyond that but is not part of the element itself.) This is why `box-sizing: border-box`, which folds padding and border *into* the width, is so popular.' },
                { type: 'callout', kind: 'warning', text: 'Padding vs margin is the eternal mix-up. Padding is inside the border (it takes the element\'s background); margin is outside (always transparent, separating the element from its neighbors).' }
              ],
              skill: {
                id: 'css-selectors-box-model-practice',
                name: 'Selectors and the box model',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which selector targets every element with `class="card"`?',
                    choices: [
                      { id: 'a', text: '`card`' },
                      { id: 'b', text: '`#card`' },
                      { id: 'c', text: '`.card`' },
                      { id: 'd', text: '`@card`' }
                    ],
                    answer: 'c',
                    hint: 'Classes use a dot; ids use a hash.',
                    steps: [
                      'A bare name like `card` would target `<card>` elements.',
                      '`#card` targets `id="card"`.',
                      '`.card` is the class selector — it hits every element with `class="card"`.'
                    ],
                    answerText: '.card'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which selector targets the single element with `id="nav"`?',
                    choices: [
                      { id: 'a', text: '`.nav`' },
                      { id: 'b', text: '`#nav`' },
                      { id: 'c', text: '`nav`' },
                      { id: 'd', text: '`*nav*`' }
                    ],
                    answer: 'b',
                    hint: 'The id selector mirrors the # used in URL fragments.',
                    steps: [
                      'Ids are selected with `#`.',
                      '`#nav` matches the one element carrying `id="nav"`.',
                      '`.nav` would match `class="nav"`, and bare `nav` matches `<nav>` elements.'
                    ],
                    answerText: '#nav'
                  },
                  {
                    type: 'choice',
                    prompt: 'Two rules target the same element. Which wins?',
                    choices: [
                      { id: 'a', text: '`p { color: red }`' },
                      { id: 'b', text: '`.text { color: blue }`' },
                      { id: 'c', text: '`#main { color: green }`' },
                      { id: 'd', text: 'Whichever appears first in the file' }
                    ],
                    answer: 'c',
                    hint: 'Specificity order: id > class > element.',
                    steps: [
                      'Specificity ranks selectors: an id beats a class, a class beats an element name.',
                      '`#main` is an id selector — the most specific here — so green wins.',
                      'Source order only breaks ties between selectors of EQUAL specificity.'
                    ],
                    answerText: '#main { color: green }'
                  },
                  {
                    type: 'choice',
                    prompt: 'Inside to outside, what is the box model order?',
                    choices: [
                      { id: 'a', text: 'content → margin → border → padding' },
                      { id: 'b', text: 'content → padding → border → margin' },
                      { id: 'c', text: 'margin → border → padding → content' },
                      { id: 'd', text: 'content → border → padding → margin' }
                    ],
                    answer: 'b',
                    hint: 'Padding hugs the content; margin is outermost.',
                    steps: [
                      'Content is the core.',
                      'Padding sits inside the border, surrounding the content.',
                      'Border wraps the padding; margin pushes neighboring boxes away — outermost layer.'
                    ],
                    answerText: 'content → padding → border → margin'
                  },
                  {
                    type: 'choice',
                    prompt: 'You want space BETWEEN a card and its neighbors. Which property?',
                    choices: [
                      { id: 'a', text: '`padding`' },
                      { id: 'b', text: '`border`' },
                      { id: 'c', text: '`margin`' },
                      { id: 'd', text: '`spacing`' }
                    ],
                    answer: 'c',
                    hint: 'Think "margin is the moat around the castle."',
                    steps: [
                      'Padding is space inside the border — it inflates the element itself.',
                      'Margin is space outside the border — it separates the element from others.',
                      'Space between elements = `margin`.'
                    ],
                    answerText: 'margin'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A box has `width: 100px`, `padding: 10px`, and `border: 2px` (content-box sizing). What is its total width in pixels?',
                    answer: 124,
                    hint: 'Padding and border are added on both the left and right.',
                    steps: [
                      'Content width: `100px`.',
                      'Padding adds `10px` on each side: `+20px`.',
                      'Border adds `2px` on each side: `+4px`. Total: `100 + 20 + 4 = 124px`.'
                    ],
                    answerText: '124px'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does the declaration `color: blue;` style?',
                    choices: [
                      { id: 'a', text: 'The background color' },
                      { id: 'b', text: 'The text color' },
                      { id: 'c', text: 'The border color' },
                      { id: 'd', text: 'The margin color' }
                    ],
                    answer: 'b',
                    hint: 'In CSS, plain "color" always means the foreground text.',
                    steps: [
                      '`color` sets the foreground — the text color.',
                      'Background is `background-color`; borders take `border-color`.',
                      'Margin is invisible space and has no color at all.'
                    ],
                    answerText: 'text color'
                  }
                ]
              }
            },
            {
              id: 'css-flexbox',
              title: 'Flexbox: one-dimensional layout',
              minutes: 9,
              summary: 'Line items up, space them out, and center anything with display: flex.',
              tags: ['css', 'flexbox', 'layout', 'web'],
              blocks: [
                { type: 'p', text: 'For twenty years, centering an element on a page was a running joke — it took hacks with tables and negative margins. **Flexbox** ended that. Add `display: flex` to a container and its children become **flex items** laid out along a single line, with every spacing problem handled by a handful of properties.' },
                { type: 'code', lang: 'css', text: `.toolbar {
  display: flex;
  flex-direction: row;          /* main axis: horizontal */
  justify-content: space-between; /* spread along main axis */
  align-items: center;          /* center on cross axis */
  gap: 12px;                    /* space between items */
}` },
                { type: 'callout', kind: 'key', text: 'Flexbox has two axes. The **main axis** follows `flex-direction` (`row` = horizontal, `column` = vertical); the **cross axis** is the perpendicular one. `justify-content` distributes items along the main axis; `align-items` positions them on the cross axis.' },
                { type: 'example', title: 'The famous centering recipe', text: 'To center a child both ways, give the *container* `display: flex; justify-content: center; align-items: center;` — main-axis center plus cross-axis center. Two lines replace what used to take a page of tricks.' },
                { type: 'p', text: '`justify-content` values describe where leftover space goes: `center` collects it on both ends, `space-between` puts it all between items (first and last items flush to the edges), and `space-around` gives each item equal space on both sides. `gap` then adds guaranteed space between every pair of items.' },
                { type: 'callout', kind: 'warning', text: 'Flex properties go on the **container**, not the children. `justify-content` on a child does nothing — it is the parent that owns the layout. Similarly, `display: flex` on an item only affects *its* children.' }
              ],
              skill: {
                id: 'css-flexbox-practice',
                name: 'Flexbox layout',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'How do you turn a container into a flex container?',
                    choices: [
                      { id: 'a', text: '`flex: on`' },
                      { id: 'b', text: '`display: flex`' },
                      { id: 'c', text: '`layout: flex`' },
                      { id: 'd', text: '`position: flex`' }
                    ],
                    answer: 'b',
                    hint: 'It is a value of the display property.',
                    steps: [
                      'Flexbox is activated through the `display` property.',
                      '`display: flex` on the container makes its children flex items.',
                      '`flex: on`, `layout: flex`, and `position: flex` do not exist.'
                    ],
                    answerText: 'display: flex'
                  },
                  {
                    type: 'choice',
                    prompt: 'By default (`flex-direction: row`), which way does the main axis point?',
                    choices: [
                      { id: 'a', text: 'Vertically, top to bottom' },
                      { id: 'b', text: 'Horizontally, left to right' },
                      { id: 'c', text: 'Diagonally' },
                      { id: 'd', text: 'Whichever way the content is taller' }
                    ],
                    answer: 'b',
                    hint: 'Rows run sideways — think rows of seats.',
                    steps: [
                      '`row` lays items out in a horizontal row.',
                      'So the main axis is horizontal (left to right in English layouts).',
                      '`flex-direction: column` would flip it to vertical.'
                    ],
                    answerText: 'horizontally'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which axis does `justify-content` control?',
                    choices: [
                      { id: 'a', text: 'The cross axis' },
                      { id: 'b', text: 'The main axis' },
                      { id: 'c', text: 'Both axes' },
                      { id: 'd', text: 'Neither — it aligns text' }
                    ],
                    answer: 'b',
                    hint: 'justify = along the flow direction.',
                    steps: [
                      'The main axis is the direction items flow (set by `flex-direction`).',
                      '`justify-content` distributes items along that main axis.',
                      'The cross axis is `align-items`\' territory.'
                    ],
                    answerText: 'the main axis'
                  },
                  {
                    type: 'choice',
                    prompt: 'A row-direction flex container should center its items horizontally. Which declaration does it?',
                    choices: [
                      { id: 'a', text: '`align-items: center`' },
                      { id: 'b', text: '`justify-content: center`' },
                      { id: 'c', text: '`text-align: center`' },
                      { id: 'd', text: '`margin: center`' }
                    ],
                    answer: 'b',
                    hint: 'In a row, horizontal is the main axis.',
                    steps: [
                      'With `flex-direction: row`, the main axis is horizontal.',
                      '`justify-content` controls the main axis → `justify-content: center` centers horizontally.',
                      '`align-items: center` would center vertically (the cross axis).'
                    ],
                    answerText: 'justify-content: center'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `justify-content: space-between` do?',
                    choices: [
                      { id: 'a', text: 'Puts equal space on both sides of every item' },
                      { id: 'b', text: 'Pushes the first and last items to the edges with equal space between items' },
                      { id: 'c', text: 'Centers all items as one group' },
                      { id: 'd', text: 'Adds margin to the container itself' }
                    ],
                    answer: 'b',
                    hint: 'Think of leftover space being poured into the gaps between items.',
                    steps: [
                      '`space-between` sends the first item to the start edge and the last to the end edge.',
                      'The remaining free space is distributed evenly between adjacent items.',
                      'Equal space on BOTH sides of each item (so edge items get a half-gap) is `space-around` — a classic mix-up.'
                    ],
                    answerText: 'edges flush, equal gaps between'
                  },
                  {
                    type: 'choice',
                    prompt: 'In a row flex container, `align-items: center` centers items on which axis?',
                    choices: [
                      { id: 'a', text: 'Horizontal' },
                      { id: 'b', text: 'Vertical' },
                      { id: 'c', text: 'Both' },
                      { id: 'd', text: 'The z-axis' }
                    ],
                    answer: 'b',
                    hint: 'align-items works on the cross axis — perpendicular to flow.',
                    steps: [
                      'In `row` direction the main axis is horizontal, so the cross axis is vertical.',
                      '`align-items` positions items on the cross axis.',
                      'So `align-items: center` centers them vertically.'
                    ],
                    answerText: 'vertical (cross axis)'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `gap: 12px` do in a flex container?',
                    choices: [
                      { id: 'a', text: 'Adds 12px of padding around the container' },
                      { id: 'b', text: 'Forces 12px of space between each pair of items' },
                      { id: 'c', text: 'Sets each item\'s width to 12px' },
                      { id: 'd', text: 'Adds space before the first item only' }
                    ],
                    answer: 'b',
                    hint: 'gap replaces the old trick of margins on every item except the last.',
                    steps: [
                      '`gap` sets the minimum space between adjacent items.',
                      'It applies between every pair — never before the first or after the last item.',
                      'That is exactly what item margins could not do cleanly.'
                    ],
                    answerText: 'space between items'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'js-on-the-web',
          title: 'JavaScript on the web',
          lessons: [
            {
              id: 'dom-manipulation',
              title: 'DOM manipulation',
              minutes: 10,
              summary: 'JavaScript can rewrite a live page — find elements, change their text, and build new ones.',
              tags: ['javascript', 'dom', 'web'],
              blocks: [
                { type: 'p', text: 'When a browser loads HTML it builds a live, editable model of the page: the **DOM** (Document Object Model). Every element becomes a node in a tree that JavaScript can reach into through the global `document` object. Change the DOM and the page on screen changes with it — that is how every modern web app works.' },
                { type: 'code', lang: 'js', text: `// find elements with CSS selectors
const msg = document.querySelector('#status');
const items = document.querySelectorAll('.item');

// change what they show
msg.textContent = 'Saved!';        // safe, plain text
msg.classList.add('success');      // restyle via CSS

// build a new element and attach it
const li = document.createElement('li');
li.textContent = 'New item';
document.querySelector('ul').appendChild(li);` },
                { type: 'callout', kind: 'key', text: '`querySelector` takes any CSS selector — `\'#id\'`, `\'.class\'`, `\'tag\'` — and returns the FIRST match (or `null`). `querySelectorAll` returns every match as a list you can loop over.' },
                { type: 'example', title: 'textContent vs innerHTML', text: 'Setting `el.textContent = \'<b>hi</b>\'` displays the literal characters `<b>hi</b>` — it inserts text, not markup. Setting `el.innerHTML = \'<b>hi</b>\'` renders bold. That is exactly why `textContent` is the safe default for anything a user typed.' },
                { type: 'callout', kind: 'warning', text: 'Never put user input into `innerHTML`. If a user types `<img src=x onerror=...>` it becomes real markup and can run a script — an **XSS** (cross-site scripting) attack. `textContent` can never create elements, so it cannot be exploited that way.' },
                { type: 'callout', kind: 'tip', text: 'Prefer `classList.add(\'active\')` / `remove` / `toggle` over editing `el.style` directly — the styles stay in CSS where they belong, and JavaScript just flips the switch.' }
              ],
              skill: {
                id: 'dom-manipulation-practice',
                name: 'DOM manipulation',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'How do you select the element with `id="msg"`?',
                    choices: [
                      { id: 'a', text: '`document.getElement(\'msg\')`' },
                      { id: 'b', text: '`document.querySelector(\'#msg\')`' },
                      { id: 'c', text: '`document.querySelector(\'msg\')`' },
                      { id: 'd', text: '`document.selectId(\'msg\')`' }
                    ],
                    answer: 'b',
                    hint: 'querySelector takes a full CSS selector — including the #.',
                    steps: [
                      '`querySelector` accepts any CSS selector.',
                      'An id selector in CSS is `#msg` — the hash is required.',
                      '`querySelector(\'msg\')` would look for a `<msg>` element instead.'
                    ],
                    answerText: "document.querySelector('#msg')"
                  },
                  {
                    type: 'choice',
                    prompt: 'What does the page show after `el.textContent = \'<b>bold</b>\'`?',
                    choices: [
                      { id: 'a', text: 'The word **bold** rendered in bold' },
                      { id: 'b', text: 'The literal text `<b>bold</b>`' },
                      { id: 'c', text: 'Nothing — the tags are stripped' },
                      { id: 'd', text: 'An error' }
                    ],
                    answer: 'b',
                    hint: 'textContent inserts text — it never parses markup.',
                    steps: [
                      '`textContent` treats the whole string as plain text.',
                      'The angle brackets are displayed, not interpreted.',
                      'Only `innerHTML` parses the string as markup — and that is exactly the risk.'
                    ],
                    answerText: 'the literal text <b>bold</b>'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the correct order to add a new `<li>` to a `<ul>`?',
                    choices: [
                      { id: 'a', text: 'appendChild first, then createElement' },
                      { id: 'b', text: 'createElement the li, set its content, then appendChild it to the ul' },
                      { id: 'c', text: 'Set innerHTML on the li, then createElement' },
                      { id: 'd', text: 'Elements appear automatically when created' }
                    ],
                    answer: 'b',
                    hint: 'Create, fill, attach — in that order.',
                    steps: [
                      '`document.createElement(\'li\')` makes a detached element — not on the page yet.',
                      'Set its `textContent` while it is detached.',
                      '`ul.appendChild(li)` attaches it, and only then is it visible.'
                    ],
                    answerText: 'create → fill → append'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `el.classList.toggle(\'active\')` do?',
                    choices: [
                      { id: 'a', text: 'Always adds `active`' },
                      { id: 'b', text: 'Always removes `active`' },
                      { id: 'c', text: 'Adds `active` if absent, removes it if present' },
                      { id: 'd', text: 'Renames the class to `active`' }
                    ],
                    answer: 'c',
                    hint: 'toggle = flip the switch.',
                    steps: [
                      '`toggle` checks whether the class is already there.',
                      'Present → removes it; absent → adds it.',
                      'It is the standard way to build show/hide and on/off UI states.'
                    ],
                    answerText: 'flips the active class on/off'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `document.querySelectorAll(\'.item\')` return?',
                    choices: [
                      { id: 'a', text: 'The first element with class `item`' },
                      { id: 'b', text: 'A list of ALL elements with class `item`' },
                      { id: 'c', text: 'A single string of element names' },
                      { id: 'd', text: 'The number of matching elements' }
                    ],
                    answer: 'b',
                    hint: '"All" in the name is the giveaway.',
                    steps: [
                      '`querySelectorAll` never stops at the first match.',
                      'It returns a NodeList — a list-like collection of every element matching `.item`.',
                      'You can loop over it with `for...of` or `forEach`.'
                    ],
                    answerText: 'a list of all matches'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why is `el.textContent = userInput` safer than `el.innerHTML = userInput`?',
                    choices: [
                      { id: 'a', text: 'textContent is faster' },
                      { id: 'b', text: 'textContent cannot create markup, so injected tags become harmless text' },
                      { id: 'c', text: 'innerHTML is deprecated' },
                      { id: 'd', text: 'They are equally safe' }
                    ],
                    answer: 'b',
                    hint: 'The danger is a user typing actual HTML or script.',
                    steps: [
                      'A malicious user could input `<img src=x onerror=evil()>`.',
                      '`innerHTML` would parse that into a real element and run its script — XSS.',
                      '`textContent` renders it as literal characters. No markup, no exploit.'
                    ],
                    answerText: 'user input stays plain text'
                  },
                  {
                    type: 'choice',
                    prompt: 'If no element matches, `document.querySelector(\'.nope\')` returns…',
                    choices: [
                      { id: 'a', text: '`undefined`' },
                      { id: 'b', text: '`null`' },
                      { id: 'c', text: '`false`' },
                      { id: 'd', text: 'It throws an error' }
                    ],
                    answer: 'b',
                    hint: 'DOM lookups return a specific "nothing found" value.',
                    steps: [
                      'A missing match is not an error — the call succeeds.',
                      'The DOM API\'s "no element" value is `null`.',
                      'Calling `.textContent` on the result would throw — always check for `null` first.'
                    ],
                    answerText: 'null'
                  }
                ]
              }
            },
            {
              id: 'web-events',
              title: 'Events: reacting to the user',
              minutes: 9,
              summary: 'Run code on clicks, typing, and submits with addEventListener and the event object.',
              tags: ['javascript', 'events', 'dom', 'web'],
              blocks: [
                { type: 'p', text: 'Web pages are quiet until the user acts — then everything is an **event**: `click`, `input` (typing in a field), `submit` (a form sent), `keydown`, `scroll`, `mouseover`. JavaScript does not poll for these; it **registers a listener** — a function the browser promises to call when the event happens.' },
                { type: 'code', lang: 'js', text: `const btn = document.querySelector('#save');

btn.addEventListener('click', (event) => {
  console.log('Clicked at', event.clientX, event.clientY);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();   // stop the page reload
  saveForm();
});` },
                { type: 'callout', kind: 'key', text: '`addEventListener(\'click\', handler)` takes the event name and a function. The handler does not run when you attach it — it runs later, each time the event fires. That deferred call is why the function is called a **callback**.' },
                { type: 'p', text: 'The browser hands the callback an **event object** describing what happened: `event.target` is the element that triggered it, `event.clientX/Y` are click coordinates, `event.key` is the pressed key. You do not create this object — you just read it.' },
                { type: 'example', title: 'Forms reload by default', text: 'Submitting a `<form>` normally navigates to a new page — wiping your JavaScript state. `event.preventDefault()` inside the `submit` handler cancels that built-in behavior so the page stays put and you can send the data with `fetch` instead.' },
                { type: 'callout', kind: 'warning', text: 'A subtle bug: `addEventListener(\'click\', fn())` *calls* `fn` immediately and registers its return value — nothing happens on click. Pass the function itself: `addEventListener(\'click\', fn)` — no parentheses.' },
                { type: 'callout', kind: 'tip', text: 'Events **bubble**: a click on a button inside a `<div>` also reaches listeners on the `<div>`. One listener on a parent can handle events from many children — check `event.target` to see who actually fired it.' }
              ],
              skill: {
                id: 'web-events-practice',
                name: 'DOM events',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'How do you run `handleSave` when a button is clicked?',
                    choices: [
                      { id: 'a', text: '`btn.onClick(handleSave)`' },
                      { id: 'b', text: '`btn.addEventListener(\'click\', handleSave)`' },
                      { id: 'c', text: '`btn.addEventListener(\'click\', handleSave())`' },
                      { id: 'd', text: '`whenClick(btn).run(handleSave)`' }
                    ],
                    answer: 'b',
                    hint: 'Register the function itself — no parentheses.',
                    steps: [
                      '`addEventListener` takes the event name and a function reference.',
                      '`handleSave` (no `()`) is the function itself — the browser calls it later.',
                      '`handleSave()` would run it NOW and register the result — the classic mistake in choice c.'
                    ],
                    answerText: "addEventListener('click', handleSave)"
                  },
                  {
                    type: 'choice',
                    prompt: 'Inside a `submit` handler, what does `event.preventDefault()` do?',
                    choices: [
                      { id: 'a', text: 'Stops the form\'s built-in page reload' },
                      { id: 'b', text: 'Clears the form fields' },
                      { id: 'c', text: 'Prevents other events from ever firing' },
                      { id: 'd', text: 'Cancels the user\'s click' }
                    ],
                    answer: 'a',
                    hint: 'Forms have a default action — navigation — you usually want to cancel.',
                    steps: [
                      'A form submit\'s default behavior is to navigate/reload the page.',
                      'A reload destroys your JavaScript state.',
                      '`preventDefault()` cancels that default so your code stays in control.'
                    ],
                    answerText: 'stops the default reload'
                  },
                  {
                    type: 'choice',
                    prompt: 'When does a click callback actually run?',
                    choices: [
                      { id: 'a', text: 'When addEventListener is called' },
                      { id: 'b', text: 'When the page finishes loading' },
                      { id: 'c', text: 'Each time the element is clicked' },
                      { id: 'd', text: 'Once, on the first click only' }
                    ],
                    answer: 'c',
                    hint: 'The listener is a standing order, not a one-time run.',
                    steps: [
                      '`addEventListener` only registers the function — it does not invoke it.',
                      'The browser invokes it every time a click lands on that element.',
                      'Click three times → the callback runs three times.'
                    ],
                    answerText: 'on every click'
                  },
                  {
                    type: 'choice',
                    prompt: 'Inside a handler, `event.target` refers to…',
                    choices: [
                      { id: 'a', text: 'The element the listener was attached to' },
                      { id: 'b', text: 'The element that actually triggered the event' },
                      { id: 'c', text: 'The `<body>` element' },
                      { id: 'd', text: 'The browser window' }
                    ],
                    answer: 'b',
                    hint: 'With bubbling, the triggering element can be a child of the listening element.',
                    steps: [
                      'Events bubble up through ancestors.',
                      '`event.target` is the innermost element where the event originated.',
                      'That is why one listener on a `<ul>` can report which `<li>` was clicked.'
                    ],
                    answerText: 'the element that triggered it'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which event fires while a user types in a text field?',
                    choices: [
                      { id: 'a', text: '`\'type\'`' },
                      { id: 'b', text: '`\'input\'`' },
                      { id: 'c', text: '`\'submit\'`' },
                      { id: 'd', text: '`\'change\'` only, after every keystroke' }
                    ],
                    answer: 'b',
                    hint: 'It fires on every keystroke, not just when the field loses focus.',
                    steps: [
                      '`input` fires each time the field\'s value changes — every keystroke, paste, or deletion.',
                      '`change` fires only when the field loses focus with a changed value.',
                      '`type` and `submit` are not field-typing events.'
                    ],
                    answerText: 'input'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the bug in `btn.addEventListener(\'click\', save())`?',
                    choices: [
                      { id: 'a', text: '`save` needs parentheses to be registered' },
                      { id: 'b', text: '`save()` runs immediately and registers its return value instead of the function' },
                      { id: 'c', text: 'Strings like `\'click\'` are not allowed' },
                      { id: 'd', text: 'No bug — this is correct' }
                    ],
                    answer: 'b',
                    hint: '() means "call now" — which is not what "call later" needs.',
                    steps: [
                      '`save()` invokes the function during setup.',
                      'Its return value (usually `undefined`) is what gets registered as the listener.',
                      'The fix: pass the function itself — `save`, without `()`.'
                    ],
                    answerText: 'save() runs now; pass save instead'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which event name listens for a key being pressed down?',
                    choices: [
                      { id: 'a', text: '`\'keydown\'`' },
                      { id: 'b', text: '`\'press\'`' },
                      { id: 'c', text: '`\'key\'`' },
                      { id: 'd', text: '`\'typekey\'`' }
                    ],
                    answer: 'a',
                    hint: 'Keyboard events come as down/up pairs.',
                    steps: [
                      'The standard keyboard events are `keydown` and `keyup`.',
                      '`keydown` fires the moment the key goes down (repeating if held).',
                      '`press`/`typekey` are not standard DOM event names.'
                    ],
                    answerText: 'keydown'
                  }
                ]
              }
            },
            {
              id: 'fetch-and-apis',
              title: 'fetch and APIs',
              minutes: 10,
              summary: 'Talk to servers from the browser: fetch data over HTTP, wait on promises, and parse JSON.',
              tags: ['javascript', 'fetch', 'apis', 'json', 'web'],
              blocks: [
                { type: 'p', text: 'An **API** is a service\'s front door for programs — an agreed set of URLs that return data instead of pages. The browser\'s tool for this is `fetch(url)`, which sends an HTTP request and immediately hands back a **Promise**: a placeholder for a value that will arrive later.' },
                { type: 'code', lang: 'js', text: `async function loadUser() {
  const res = await fetch('https://api.example.com/user/1');
  if (!res.ok) {
    throw new Error('HTTP ' + res.status);
  }
  const data = await res.json();   // parse the JSON body
  console.log(data.name);
}` },
                { type: 'callout', kind: 'key', text: '`await` pauses the function until the promise resolves — and can only be used inside an `async` function. Two awaits are needed: one for the response headers/status (`fetch`), another for the body (`res.json()`, which itself is asynchronous).' },
                { type: 'p', text: '**JSON** — JavaScript Object Notation — is the universal data format of web APIs. It looks like an object literal (`{"name": "Ada", "age": 36}`) but travels as a string, which is why `res.json()` must parse it back into a real object. Status codes tell you how the request went: `200` OK, `404` not found, `500` server exploded.' },
                { type: 'example', title: 'GET vs POST', text: '`fetch(url)` sends a **GET** — "give me data," safe to repeat. Sending data uses `fetch(url, { method: \'POST\', body: JSON.stringify(obj) })` — "please store this." A login form POSTs; a search bar GETs.' },
                { type: 'callout', kind: 'warning', text: '`fetch` does NOT throw on a 404 or 500 — the promise resolves normally, because an HTTP error is still a valid response. Check `res.ok` (true for 200–299) or `res.status` yourself before trusting the body.' }
              ],
              skill: {
                id: 'fetch-and-apis-practice',
                name: 'fetch and JSON',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What does `fetch(\'https://api.example.com/u\')` return immediately?',
                    choices: [
                      { id: 'a', text: 'The response data' },
                      { id: 'b', text: 'A Promise that resolves to the response' },
                      { id: 'c', text: 'A JSON object' },
                      { id: 'd', text: 'The HTTP status code' }
                    ],
                    answer: 'b',
                    hint: 'The network request takes time — fetch cannot hand you data synchronously.',
                    steps: [
                      'fetch fires the request and returns right away — it does not wait.',
                      'What it returns is a Promise: a placeholder for the future response.',
                      'You unwrap it with `await` or `.then()`.'
                    ],
                    answerText: 'a Promise'
                  },
                  {
                    type: 'choice',
                    prompt: 'How do you read a JSON response body?',
                    choices: [
                      { id: 'a', text: '`res.body`' },
                      { id: 'b', text: '`await res.json()`' },
                      { id: 'c', text: '`res.parse()`' },
                      { id: 'd', text: '`JSON.read(res)`' }
                    ],
                    answer: 'b',
                    hint: 'Parsing the body is itself asynchronous.',
                    steps: [
                      'The body arrives as raw text and may still be streaming in.',
                      '`res.json()` returns a promise that resolves to the parsed object — hence `await`.',
                      '`res.body` is a stream, not the data itself.'
                    ],
                    answerText: 'await res.json()'
                  },
                  {
                    type: 'choice',
                    prompt: 'A response has status 404. What does that mean?',
                    choices: [
                      { id: 'a', text: 'The server crashed' },
                      { id: 'b', text: 'The requested resource was not found' },
                      { id: 'c', text: 'The request was malformed' },
                      { id: 'd', text: 'Success — four items returned' }
                    ],
                    answer: 'b',
                    hint: 'The famous status code: 4xx means the client asked for something wrong.',
                    steps: [
                      'Status classes: 2xx success, 3xx redirect, 4xx client error, 5xx server error.',
                      '404 is the 4xx "not found" — the URL does not match any resource.',
                      'A server crash would be a 5xx code like 500.'
                    ],
                    answerText: 'not found'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where is `await fetch(...)` allowed?',
                    choices: [
                      { id: 'a', text: 'Anywhere in any file' },
                      { id: 'b', text: 'Only inside a function declared `async`' },
                      { id: 'c', text: 'Only inside a `.then()` callback' },
                      { id: 'd', text: 'Only at the top level of a script' }
                    ],
                    answer: 'b',
                    hint: 'The keyword pair is async/await — one permits the other.',
                    steps: [
                      '`await` inside a normal function is a SyntaxError.',
                      'Marking the function `async` grants `await` inside it — and makes the function return a promise.',
                      '(Modern browsers do allow top-level await in modules, but inside ordinary functions the rule is: async required.)'
                    ],
                    answerText: 'inside an async function'
                  },
                  {
                    type: 'choice',
                    prompt: '`res.ok` is true when the status is…',
                    choices: [
                      { id: 'a', text: 'Any status at all' },
                      { id: 'b', text: '200–299' },
                      { id: 'c', text: 'Exactly 200' },
                      { id: 'd', text: '400–599' }
                    ],
                    answer: 'b',
                    hint: 'It is a range check covering every success code.',
                    steps: [
                      'Success statuses span 200–299 (200 OK, 201 Created, 204 No Content, ...).',
                      '`res.ok` is `true` for that whole range.',
                      'Checking it matters because fetch resolves even on 404/500.'
                    ],
                    answerText: 'status 200–299'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `JSON.stringify({ a: 1 })` produce?',
                    choices: [
                      { id: 'a', text: 'The object `{ a: 1 }`' },
                      { id: 'b', text: 'The string `\'{"a":1}\'`' },
                      { id: 'c', text: 'An array `["a", 1]`' },
                      { id: 'd', text: '`\'a=1\'`' }
                    ],
                    answer: 'b',
                    hint: 'stringify goes object → string; parse goes the other way.',
                    steps: [
                      '`JSON.stringify` serializes a value into a JSON string.',
                      'The result is text: `\'{"a":1}\'` — note the required double quotes in JSON.',
                      'That string is what you put in a POST body; `JSON.parse` reverses it.'
                    ],
                    answerText: "'{\"a\":1}'"
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `d` hold in `fetch(url).then(r => r.json()).then(d => console.log(d))`?',
                    choices: [
                      { id: 'a', text: 'The raw response object' },
                      { id: 'b', text: 'The parsed body — a JavaScript object/array' },
                      { id: 'c', text: 'The response status' },
                      { id: 'd', text: 'The response headers' }
                    ],
                    answer: 'b',
                    hint: 'Each .then receives whatever the previous step resolved to.',
                    steps: [
                      'The first `.then` gets the Response and calls `r.json()` — which returns a promise.',
                      'The next `.then` receives that promise\'s resolved value: the parsed body.',
                      'So `d` is the data — an object or array, not the Response.'
                    ],
                    answerText: 'the parsed JSON body'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'computer-science-principles',
      title: 'Computer Science Principles',
      subtitle: 'Grades 9–12 · Concepts first',
      summary: 'The ideas underneath the code: binary, algorithms and Big-O, sorting, the internet, encryption, and databases.',
      units: [
        {
          id: 'how-computers-think',
          title: 'How computers think',
          lessons: [
            {
              id: 'binary-and-bits',
              title: 'Binary and bits',
              minutes: 9,
              summary: 'Everything in a computer is 0s and 1s — learn to read binary and why hardware demands it.',
              tags: ['binary', 'bits', 'data-representation', 'cs-principles'],
              blocks: [
                { type: 'p', text: 'A computer is a swarm of switches. Each switch is stable in two states — on or off — which maps to the digits **1** and **0**: a **bit**, the smallest unit of information. Eight bits make a **byte**, enough to hold $2^8 = 256$ distinct values.' },
                { type: 'callout', kind: 'key', text: 'Binary is base 2: each place is worth a power of 2 instead of a power of 10. From the right, the places are 1, 2, 4, 8, 16, ... — so $n$ bits can represent $2^n$ different values (0 through $2^n - 1$).' },
                { type: 'formula', text: '1011_2 = 1 \\cdot 2^3 + 0 \\cdot 2^2 + 1 \\cdot 2^1 + 1 \\cdot 2^0 = 8 + 0 + 2 + 1 = 11' },
                { type: 'p', text: 'Why binary and not base 10? Hardware that must distinguish ten voltage levels is fragile — a little noise flips a 7 into an 8. Two states, far apart, survive static and heat. Reliability is the whole reason.' },
                { type: 'example', title: 'Convert 13 to binary', text: 'Largest power of 2 in 13 is 8 → a 1 in the 8s place, 5 left. 5 takes the 4 → 1 left. 1 takes the 1s place. Filling the gaps: $1101_2$. Check: $8 + 4 + 1 = 13$ ✓' },
                { type: 'p', text: 'Text rides on binary too: **ASCII** assigns each character a byte (`\'A\'` is 65), and **Unicode** extends the idea to every human alphabet plus emoji — `U+1F600` is the 😀 that costs 4 bytes in UTF-8. Images, sound, and video are the same trick at larger scales.' },
                { type: 'callout', kind: 'tip', text: 'Units: KB = 1,000 bytes (KiB = 1,024 — the binary version), MB = a million, GB = a billion. A single byte maxes out at 255 — the same cap you see on RGB color channels.' }
              ],
              skill: {
                id: 'binary-and-bits-practice',
                name: 'Binary conversion',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'What is $101_2$ in decimal?',
                    answer: 5,
                    hint: 'Places are 4, 2, 1 from the left.',
                    steps: [
                      'Place values: $1 \\cdot 4 + 0 \\cdot 2 + 1 \\cdot 1$.',
                      '$4 + 0 + 1 = 5$.'
                    ],
                    answerText: '5'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is decimal 6 in binary?',
                    choices: [
                      { id: 'a', text: '`110`' },
                      { id: 'b', text: '`101`' },
                      { id: 'c', text: '`011`' },
                      { id: 'd', text: '`111`' }
                    ],
                    answer: 'a',
                    hint: '6 = 4 + 2 — which place values does it use?',
                    steps: [
                      '$6 = 4 + 2$, so the 4s and 2s places are 1, the 1s place is 0.',
                      'Reading places 4-2-1: `110`.',
                      'Check: $1 \\cdot 4 + 1 \\cdot 2 + 0 \\cdot 1 = 6$ ✓'
                    ],
                    answerText: '110'
                  },
                  {
                    type: 'numeric',
                    prompt: 'How many distinct values can 4 bits represent?',
                    answer: 16,
                    hint: 'n bits give 2^n values.',
                    steps: [
                      'Each bit doubles the count: $2^4$.',
                      '$2^4 = 16$ values (0–15).'
                    ],
                    answerText: '16'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why do computers use binary instead of decimal?',
                    choices: [
                      { id: 'a', text: 'Binary is faster to type' },
                      { id: 'b', text: 'Two states are far easier to distinguish reliably in hardware than ten' },
                      { id: 'c', text: 'Binary uses less memory' },
                      { id: 'd', text: 'It is required by math' }
                    ],
                    answer: 'b',
                    hint: 'Think about telling 10 voltage levels apart on a noisy wire.',
                    steps: [
                      'Hardware stores values as voltages/charges.',
                      'Separating on/off into just two states gives a huge error margin.',
                      'Ten levels would confuse 7 and 8 under noise — binary wins on reliability, not speed or math.'
                    ],
                    answerText: 'hardware reliability'
                  },
                  {
                    type: 'numeric',
                    prompt: 'In an 8-bit byte, what is the place value of the leftmost bit?',
                    answer: 128,
                    hint: 'Places double: 1, 2, 4, 8, ... keep going to the eighth.',
                    steps: [
                      'Places from the right: 1, 2, 4, 8, 16, 32, 64, 128.',
                      'The eighth (leftmost) place is $2^7 = 128$.'
                    ],
                    answerText: '128'
                  },
                  {
                    type: 'numeric',
                    prompt: 'What is the largest decimal number a single byte (8 bits) can hold?',
                    answer: 255,
                    hint: 'All eight bits on: 2^8 values, counting from 0.',
                    steps: [
                      '$2^8 = 256$ distinct values.',
                      'Since counting starts at 0, the max is $256 - 1 = 255$.'
                    ],
                    answerText: '255'
                  },
                  {
                    type: 'choice',
                    prompt: 'ASCII and Unicode exist because…',
                    choices: [
                      { id: 'a', text: 'Computers store letters natively and need a way to print numbers' },
                      { id: 'b', text: 'Computers only store numbers, so text needs a number↔character code' },
                      { id: 'c', text: 'They compress images' },
                      { id: 'd', text: 'They encrypt messages' }
                    ],
                    answer: 'b',
                    hint: 'Everything is numbers underneath — even letters.',
                    steps: [
                      'Memory holds bits — numbers — and nothing else.',
                      'A character encoding assigns each symbol a number (A = 65 in ASCII).',
                      'Unicode extends the same idea to all scripts and emoji.'
                    ],
                    answerText: 'text is numbers via an encoding'
                  }
                ]
              }
            },
            {
              id: 'algorithms-and-big-o',
              title: 'Algorithms and Big-O',
              minutes: 10,
              summary: 'An algorithm is a precise recipe; Big-O measures how its cost grows as input grows.',
              tags: ['algorithms', 'big-o', 'complexity', 'cs-principles'],
              blocks: [
                { type: 'p', text: 'An **algorithm** is a finite set of precise steps that solves a problem — a recipe so exact a machine can follow it. There is never just one: dozens of algorithms sort a list, and picking between them is a real engineering decision.' },
                { type: 'callout', kind: 'key', text: '**Big-O notation** describes how an algorithm\'s work grows with input size $n$, ignoring constants and small terms. $O(1)$ constant → $O(\\log n)$ → $O(n)$ linear → $O(n \\log n)$ → $O(n^2)$ quadratic — each step up grows dramatically faster.' },
                { type: 'example', title: 'Search: linear vs binary', text: 'Checking a list item-by-item is $O(n)$ — 1,000 items, up to 1,000 checks. **Binary search** on a *sorted* list halves the remainder each step: $O(\\log n)$, so 1,000 items need at most $\\lceil \\log_2 1000 \\rceil = 10$ checks. Same answer, 100× fewer steps.' },
                { type: 'p', text: 'Big-O usually describes the **worst case** — the pessimist\'s guarantee. Constants vanish because they stop mattering at scale: $O(2n)$ is just $O(n)$, since doubling a huge input doubles work either way, and a faster computer only shifts the constant.' },
                { type: 'example', title: 'Why quadratic hurts', text: 'Comparing every pair in a list is $O(n^2)$: at $n = 10^6$ that is $10^{12}$ pair-checks — hours even at a billion operations per second, while an $O(n \\log n)$ approach finishes in milliseconds.' },
                { type: 'callout', kind: 'warning', text: 'Big-O is not a speed measurement — it is a *growth* measurement. An $O(n)$ algorithm can lose to an $O(n^2)$ one on small inputs; Big-O tells you who wins as $n$ gets big.' }
              ],
              skill: {
                id: 'algorithms-big-o-practice',
                name: 'Reading Big-O',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which complexity grows the SLOWEST as n increases?',
                    choices: [
                      { id: 'a', text: '$O(n^2)$' },
                      { id: 'b', text: '$O(n)$' },
                      { id: 'c', text: '$O(\\log n)$' },
                      { id: 'd', text: '$O(n \\log n)$' }
                    ],
                    answer: 'c',
                    hint: 'Halving beats proportional growth.',
                    steps: [
                      '$\\log n$ grows incredibly slowly — it is the exponent you would need to reach $n$.',
                      'Ordering: $O(\\log n) < O(n) < O(n \\log n) < O(n^2)$.',
                      'So $O(\\log n)$ is the slowest-growing of the four.'
                    ],
                    answerText: 'O(log n)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Looking up `arr[i]` in an array by index is…',
                    choices: [
                      { id: 'a', text: '$O(1)$' },
                      { id: 'b', text: '$O(\\log n)$' },
                      { id: 'c', text: '$O(n)$' },
                      { id: 'd', text: '$O(n^2)$' }
                    ],
                    answer: 'a',
                    hint: 'The index jumps straight to the slot — no scanning.',
                    steps: [
                      'An array index computes the memory address directly.',
                      'The work does not depend on how long the array is.',
                      'Constant work = $O(1)$.'
                    ],
                    answerText: 'O(1)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Checking every element of a list once takes…',
                    choices: [
                      { id: 'a', text: '$O(1)$' },
                      { id: 'b', text: '$O(\\log n)$' },
                      { id: 'c', text: '$O(n)$' },
                      { id: 'd', text: '$O(n^2)$' }
                    ],
                    answer: 'c',
                    hint: 'Work grows in direct proportion to the input.',
                    steps: [
                      'Each element gets a fixed amount of work.',
                      'Double the list → double the checks.',
                      'Proportional growth = linear = $O(n)$.'
                    ],
                    answerText: 'O(n)'
                  },
                  {
                    type: 'choice',
                    prompt: 'A nested loop — for each of n items, loop over all n — is…',
                    choices: [
                      { id: 'a', text: '$O(n)$' },
                      { id: 'b', text: '$O(n \\log n)$' },
                      { id: 'c', text: '$O(n^2)$' },
                      { id: 'd', text: '$O(2n)$' }
                    ],
                    answer: 'c',
                    hint: 'n outer iterations times n inner iterations.',
                    steps: [
                      'The outer loop runs $n$ times.',
                      'For EACH of those, the inner loop runs $n$ times.',
                      'Total work $n \\times n = n^2$ → $O(n^2)$.'
                    ],
                    answerText: 'O(n^2)'
                  },
                  {
                    type: 'numeric',
                    prompt: 'Binary search on a sorted list of 1,024 items needs at most how many checks? (Give the number.)',
                    answer: 10,
                    hint: 'Each check halves the list — how many halvings to reach 1?',
                    steps: [
                      '1024 → 512 → 256 → 128 → 64 → 32 → 16 → 8 → 4 → 2 → 1.',
                      'That is 10 halvings, i.e. $\\log_2 1024 = 10$.',
                      'At most 10 checks — versus up to 1,024 for linear search.'
                    ],
                    answerText: '10'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does $O(2n)$ simplify to?',
                    choices: [
                      { id: 'a', text: '$O(2n)$ — constants matter' },
                      { id: 'b', text: '$O(n)$' },
                      { id: 'c', text: '$O(n^2)$' },
                      { id: 'd', text: '$O(2)$' }
                    ],
                    answer: 'b',
                    hint: 'Big-O cares about the SHAPE of growth, not the multiplier.',
                    steps: [
                      'Constants are dropped: doubling work does not change the growth class.',
                      '$2n$ still grows linearly with $n$.',
                      'So $O(2n) = O(n)$.'
                    ],
                    answerText: 'O(n)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Big-O notation describes…',
                    choices: [
                      { id: 'a', text: 'Exact running time in seconds' },
                      { id: 'b', text: 'How an algorithm\'s work grows as input size grows' },
                      { id: 'c', text: 'How much memory a program uses' },
                      { id: 'd', text: 'The number of lines of code' }
                    ],
                    answer: 'b',
                    hint: 'It is about the growth curve, not a stopwatch.',
                    steps: [
                      'Big-O bounds how work scales with $n$ — the shape of the growth curve.',
                      'It says nothing about seconds, which depend on hardware and constants.',
                      'Memory growth is a separate measure (space complexity).'
                    ],
                    answerText: 'growth of work with input size'
                  }
                ]
              }
            },
            {
              id: 'sorting-basics',
              title: 'Sorting basics',
              minutes: 9,
              summary: 'Bubble and selection sort show how ordering works — and why real systems use faster algorithms.',
              tags: ['sorting', 'algorithms', 'cs-principles'],
              blocks: [
                { type: 'p', text: 'Sorting — putting data in order — is the most-studied problem in computing because so much depends on it: binary search needs sorted input, leaderboards need ranks, search engines need relevance order. Two beginner algorithms expose the whole idea.' },
                { type: 'callout', kind: 'key', text: '**Bubble sort** scans the list repeatedly; whenever two neighbors are out of order it swaps them. Each full pass pushes the largest remaining value to the end — it "bubbles up." **Selection sort** finds the smallest remaining item and swaps it into the next front position.' },
                { type: 'code', lang: 'python', text: `def bubble_sort(a):
    n = len(a)
    for i in range(n):
        swapped = False
        for j in range(n - 1 - i):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
                swapped = True
        if not swapped:      # nothing moved → already sorted
            break
    return a` },
                { type: 'example', title: 'One pass of bubble sort', text: 'On `[5, 2, 4, 1]`: compare 5–2 → swap → `[2, 5, 4, 1]`; compare 5–4 → swap → `[2, 4, 5, 1]`; compare 5–1 → swap → `[2, 4, 1, 5]`. After one pass, the largest (5) is fixed at the end ✓ — but the rest still needs more passes.' },
                { type: 'p', text: 'Both algorithms do roughly $n$ passes of $n$ comparisons: $O(n^2)$, which crawls on a million items. Real library sorts — Python\'s Timsort, most `Array.prototype.sort` engines — use $O(n \\log n)$ algorithms like merge sort. At $n = 10^6$, that is the difference between a trillion steps and about 20 million.' },
                { type: 'callout', kind: 'tip', text: 'A pass with zero swaps means the list is already sorted — the `swapped` flag above lets bubble sort quit early, making it nearly $O(n)$ on almost-sorted input.' }
              ],
              skill: {
                id: 'sorting-basics-practice',
                name: 'Sorting algorithms',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Bubble sort works by repeatedly…',
                    choices: [
                      { id: 'a', text: 'Picking the smallest element and moving it to the front' },
                      { id: 'b', text: 'Swapping adjacent elements that are out of order' },
                      { id: 'c', text: 'Splitting the list in half' },
                      { id: 'd', text: 'Randomly shuffling until sorted' }
                    ],
                    answer: 'b',
                    hint: 'It only ever compares neighbors.',
                    steps: [
                      'Bubble sort scans left to right comparing each adjacent pair.',
                      'Out-of-order neighbors get swapped — nothing else moves.',
                      'Repeated passes carry larger elements to the end.'
                    ],
                    answerText: 'swapping adjacent out-of-order pairs'
                  },
                  {
                    type: 'choice',
                    prompt: 'After ONE complete pass of bubble sort over `[4, 2, 3, 1]`, what is guaranteed?',
                    choices: [
                      { id: 'a', text: 'The list is fully sorted' },
                      { id: 'b', text: 'The smallest element is first' },
                      { id: 'c', text: 'The largest element is last' },
                      { id: 'd', text: 'Nothing is guaranteed' }
                    ],
                    answer: 'c',
                    hint: 'Trace where the biggest value ends up after every possible swap.',
                    steps: [
                      'Whenever the largest value is in a pair, it swaps rightward.',
                      'It can never be left behind — it bubbles all the way to the end.',
                      'So after one pass the largest is last; earlier positions may still be unsorted.'
                    ],
                    answerText: 'largest element is last'
                  },
                  {
                    type: 'choice',
                    prompt: 'Selection sort works by repeatedly…',
                    choices: [
                      { id: 'a', text: 'Swapping adjacent out-of-order pairs' },
                      { id: 'b', text: 'Finding the smallest remaining element and placing it next' },
                      { id: 'c', text: 'Halving the list recursively' },
                      { id: 'd', text: 'Inserting into a binary tree' }
                    ],
                    answer: 'b',
                    hint: 'The name says it: it selects.',
                    steps: [
                      'Selection sort scans the unsorted region for its minimum.',
                      'That minimum is swapped into the position right after the sorted region.',
                      'The sorted region grows by one each round.'
                    ],
                    answerText: 'select the minimum, place it next'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the worst-case complexity of both bubble sort and selection sort?',
                    choices: [
                      { id: 'a', text: '$O(n)$' },
                      { id: 'b', text: '$O(n \\log n)$' },
                      { id: 'c', text: '$O(n^2)$' },
                      { id: 'd', text: '$O(\\log n)$' }
                    ],
                    answer: 'c',
                    hint: 'Each does about n passes of n work.',
                    steps: [
                      'Bubble: up to $n$ passes, each scanning $n$ elements.',
                      'Selection: $n$ rounds, each scanning the remaining $n$ elements.',
                      'Both multiply out to $O(n^2)$.'
                    ],
                    answerText: 'O(n^2)'
                  },
                  {
                    type: 'choice',
                    prompt: 'What do real library sorts (Python\'s `sorted()`, JS `sort()`) typically achieve?',
                    choices: [
                      { id: 'a', text: '$O(n)$' },
                      { id: 'b', text: '$O(n \\log n)$' },
                      { id: 'c', text: '$O(n^2)$' },
                      { id: 'd', text: '$O(1)$' }
                    ],
                    answer: 'b',
                    hint: 'Faster than quadratic, but not linear — sorting provably cannot beat n log n by comparisons.',
                    steps: [
                      'Comparison-based sorting has a proven lower bound of $O(n \\log n)$.',
                      'Timsort (Python) and similar engines hit that bound.',
                      'They crush the $O(n^2)$ beginner algorithms at scale.'
                    ],
                    answerText: 'O(n log n)'
                  },
                  {
                    type: 'choice',
                    prompt: 'One pass of bubble sort on `[3, 1, 2]` produces…',
                    choices: [
                      { id: 'a', text: '`[1, 3, 2]`' },
                      { id: 'b', text: '`[1, 2, 3]`' },
                      { id: 'c', text: '`[3, 2, 1]`' },
                      { id: 'd', text: '`[2, 1, 3]`' }
                    ],
                    answer: 'b',
                    hint: 'Trace each adjacent pair left to right.',
                    steps: [
                      'Compare 3–1: out of order → swap → `[1, 3, 2]`.',
                      'Compare 3–2: out of order → swap → `[1, 2, 3]`.',
                      'One pass happened to fully sort this input — the largest (3) bubbled to the end and fixed the middle too.'
                    ],
                    answerText: '[1, 2, 3]'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why does sorting matter beyond neatness?',
                    choices: [
                      { id: 'a', text: 'It saves memory' },
                      { id: 'b', text: 'Sorted data enables binary search and makes comparisons/ranking easy' },
                      { id: 'c', text: 'It makes data easier to encrypt' },
                      { id: 'd', text: 'It does not really matter' }
                    ],
                    answer: 'b',
                    hint: 'What fast search algorithm requires sorted input?',
                    steps: [
                      'Binary search — $O(\\log n)$ — only works on sorted data.',
                      'Ranking, deduplication, and finding min/max all get trivial once ordered.',
                      'Sorting is prep work that pays off on every later query.'
                    ],
                    answerText: 'enables fast search and ranking'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'cs-data',
          title: 'Data',
          lessons: [
            {
              id: 'how-the-internet-works',
              title: 'How the internet works',
              minutes: 9,
              summary: 'Packets, IP addresses, DNS, and HTTP — what actually happens when you load a page.',
              tags: ['internet', 'networking', 'http', 'dns', 'cs-principles'],
              blocks: [
                { type: 'p', text: 'The internet is a **network of networks**: billions of devices linked by routers that pass messages along. Nothing travels as one piece — every message is chopped into **packets**, each stamped with the destination, routed independently, and reassembled at the far end. That design, **packet switching**, is why the internet survives broken links: packets just route around damage.' },
                { type: 'callout', kind: 'key', text: 'Every device is found by an **IP address** (like `93.184.216.34`). Humans prefer names, so **DNS** — the internet\'s phone book — translates `example.com` into an IP address before any data moves.' },
                { type: 'p', text: 'On top of addressing sit **protocols** — shared rules. **TCP** chops data into packets, numbers them, resends lost ones, and reassembles them in order (reliability). **HTTP** is the web\'s request–response language: your browser asks for a resource, a **web server** answers with a status code and content.' },
                { type: 'example', title: 'Loading a page, step by step', text: 'Type `example.com` → 1) DNS lookup turns the name into an IP → 2) the browser opens a TCP connection → 3) an HTTP `GET /` request is sent → 4) the server returns `200 OK` plus the HTML → 5) the browser renders it, then repeats the cycle for each image and script.' },
                { type: 'callout', kind: 'warning', text: 'The **internet is not the web**. The internet is the plumbing (packets, IP, TCP) built in the 1970s; the World Wide Web — HTTP and pages — is just one service running on top, invented in 1989 at CERN. Email and video calls are fellow passengers, not the web.' },
                { type: 'list', items: ['**IP address**: where a device lives on the network', '**DNS**: name → address lookup', '**TCP**: reliable, ordered delivery', '**HTTP**: request/response language of the web'] }
              ],
              skill: {
                id: 'internet-basics-practice',
                name: 'Internet fundamentals',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What does DNS do?',
                    choices: [
                      { id: 'a', text: 'Encrypts web traffic' },
                      { id: 'b', text: 'Translates domain names into IP addresses' },
                      { id: 'c', text: 'Splits data into packets' },
                      { id: 'd', text: 'Assigns you a password' }
                    ],
                    answer: 'b',
                    hint: 'It is the phone book of the internet.',
                    steps: [
                      'Computers locate each other by IP address, not by name.',
                      'DNS resolves `example.com` → its IP address.',
                      'Without it you would type numbers for every site.'
                    ],
                    answerText: 'domain names → IP addresses'
                  },
                  {
                    type: 'choice',
                    prompt: 'Data crossing the internet travels as…',
                    choices: [
                      { id: 'a', text: 'One continuous stream that occupies a wire' },
                      { id: 'b', text: 'Packets routed independently and reassembled at the destination' },
                      { id: 'c', text: 'Radio waves only' },
                      { id: 'd', text: 'Whole files sent in a single burst' }
                    ],
                    answer: 'b',
                    hint: 'The design is called packet switching.',
                    steps: [
                      'Messages are split into small addressed packets.',
                      'Each packet may take a different route — whichever is fast or working.',
                      'The receiver reorders and reassembles them (TCP\'s job).'
                    ],
                    answerText: 'independently routed packets'
                  },
                  {
                    type: 'choice',
                    prompt: 'HTTP is best described as…',
                    choices: [
                      { id: 'a', text: 'The protocol for requesting and serving web resources' },
                      { id: 'b', text: 'A programming language for web pages' },
                      { id: 'c', text: 'The physical cables of the internet' },
                      { id: 'd', text: 'A kind of database' }
                    ],
                    answer: 'a',
                    hint: 'HyperText Transfer Protocol — it moves web documents.',
                    steps: [
                      'HTTP defines how a client asks (GET, POST, ...) and how a server answers (status + body).',
                      'It is a protocol — rules for communication — not a language or a wire.',
                      'Browsers use it to fetch every page, image, and API response.'
                    ],
                    answerText: 'request/response protocol for the web'
                  },
                  {
                    type: 'choice',
                    prompt: 'When a browser requests a page, who answers?',
                    choices: [
                      { id: 'a', text: 'A DNS resolver' },
                      { id: 'b', text: 'A web server' },
                      { id: 'c', text: 'A router' },
                      { id: 'd', text: 'Another browser' }
                    ],
                    answer: 'b',
                    hint: 'Clients ask; servers serve.',
                    steps: [
                      'The browser is the client — it sends the HTTP request.',
                      'A web server hosts the site\'s files and responds with them.',
                      'DNS only finds the server\'s address; routers only forward packets.'
                    ],
                    answerText: 'a web server'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement about the internet and the web is TRUE?',
                    choices: [
                      { id: 'a', text: 'They are two names for the same thing' },
                      { id: 'b', text: 'The web is one service that runs on top of the internet' },
                      { id: 'c', text: 'The internet runs on top of the web' },
                      { id: 'd', text: 'The web is older than the internet' }
                    ],
                    answer: 'b',
                    hint: 'One is plumbing, the other is something the plumbing carries.',
                    steps: [
                      'The internet (1970s) is the packet network itself.',
                      'The web (1989, CERN) is HTTP + pages — an application using that network.',
                      'Email and gaming also ride the internet without using the web.'
                    ],
                    answerText: 'web = a service on the internet'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does TCP add on top of raw packet delivery?',
                    choices: [
                      { id: 'a', text: 'Faster cables' },
                      { id: 'b', text: 'Reliable, in-order delivery — lost packets get resent' },
                      { id: 'c', text: 'Encryption' },
                      { id: 'd', text: 'Domain names' }
                    ],
                    answer: 'b',
                    hint: 'Packets can be lost or arrive scrambled — somebody has to fix that.',
                    steps: [
                      'IP just forwards packets; it does not promise arrival.',
                      'TCP numbers packets, detects losses, requests retransmission, and reorders arrivals.',
                      'The result looks like a clean, reliable stream to the application.'
                    ],
                    answerText: 'reliability and ordering'
                  },
                  {
                    type: 'choice',
                    prompt: 'In `https://example.com/page`, what is `example.com`?',
                    choices: [
                      { id: 'a', text: 'The protocol' },
                      { id: 'b', text: 'The domain name of the host' },
                      { id: 'c', text: 'The file path' },
                      { id: 'd', text: 'The port number' }
                    ],
                    answer: 'b',
                    hint: 'Break the URL into scheme, host, path.',
                    steps: [
                      '`https://` is the scheme (protocol).',
                      '`example.com` is the domain — the host to contact (DNS resolves it).',
                      '`/page` is the path — which resource on that host to get.'
                    ],
                    answerText: 'the domain (host)'
                  }
                ]
              }
            },
            {
              id: 'encryption-and-security',
              title: 'Encryption and security',
              minutes: 10,
              summary: 'From Caesar ciphers to HTTPS: keys, public-key crypto, and why passwords are hashed.',
              tags: ['encryption', 'security', 'https', 'cs-principles'],
              blocks: [
                { type: 'p', text: '**Encryption** scrambles a message so only someone holding the **key** can read it — anyone intercepting it sees gibberish. The oldest example is the **Caesar cipher**: shift every letter by a fixed amount. With a shift of 3, `CAT` becomes `FDW` (C→F, A→D, T→W).' },
                { type: 'example', title: 'Caesar is trivially weak', text: 'There are only 25 possible shifts. An attacker just tries all of them — a **brute-force** search that takes a computer microseconds. Real ciphers like AES use 128-bit or 256-bit keys: $2^{128}$ possibilities, more than the atoms needed to count them.' },
                { type: 'callout', kind: 'key', text: '**Symmetric** encryption uses one shared key to lock and unlock — fast, but the key itself has to be delivered safely. **Asymmetric** (public-key) encryption uses a matched pair: the **public key** locks, the **private key** unlocks. Publish the public key to the world; only the private key you keep can open what it seals.' },
                { type: 'p', text: 'HTTPS uses both: asymmetric crypto verifies the server and safely exchanges a temporary symmetric key, then fast symmetric crypto carries the actual page. The padlock icon means the connection is encrypted via **TLS** — eavesdroppers on the Wi-Fi see ciphertext, not your password.' },
                { type: 'p', text: 'Passwords use a different trick: **hashing**. A hash function is one-way — `SHA-256("password123")` always gives the same fingerprint, and there is no way back from it. Sites store the hash, not the password, so a stolen database does not leak your actual password. A random per-user **salt** is added first so identical passwords produce different hashes and precomputed "rainbow tables" fail.' },
                { type: 'callout', kind: 'warning', text: 'Hashing is not encryption: encryption is reversible with the key; a hash is a one-way fingerprint. Storing encrypted passwords is wrong; storing salted hashes is right.' }
              ],
              skill: {
                id: 'encryption-security-practice',
                name: 'Encryption concepts',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'With a Caesar cipher shift of 2, `DOG` becomes…',
                    choices: [
                      { id: 'a', text: '`EQI`' },
                      { id: 'b', text: '`FQI`' },
                      { id: 'c', text: '`EPH`' },
                      { id: 'd', text: '`DOG`' }
                    ],
                    answer: 'b',
                    hint: 'Shift each letter forward by 2 in the alphabet.',
                    steps: [
                      'D + 2 = F',
                      'O + 2 = Q',
                      'G + 2 = I → `FQI`.'
                    ],
                    answerText: 'FQI'
                  },
                  {
                    type: 'choice',
                    prompt: 'Symmetric encryption means…',
                    choices: [
                      { id: 'a', text: 'Two different keys: one public, one private' },
                      { id: 'b', text: 'The same key encrypts and decrypts' },
                      { id: 'c', text: 'No key is needed' },
                      { id: 'd', text: 'The key changes every letter' }
                    ],
                    answer: 'b',
                    hint: '"Symmetric" = the same on both sides.',
                    steps: [
                      'In symmetric crypto one secret key locks and unlocks the data.',
                      'It is fast — that is why HTTPS uses it for the bulk data.',
                      'The hard part is sharing the key securely first.'
                    ],
                    answerText: 'same key both ways'
                  },
                  {
                    type: 'choice',
                    prompt: 'In public-key cryptography, the PUBLIC key…',
                    choices: [
                      { id: 'a', text: 'Decrypts messages — keep it secret' },
                      { id: 'b', text: 'Encrypts messages anyone can send you — share it openly' },
                      { id: 'c', text: 'Signs you out of sessions' },
                      { id: 'd', text: 'Hashes passwords' }
                    ],
                    answer: 'b',
                    hint: 'Like a padlock you hand out — anyone can click it shut, only you can open it.',
                    steps: [
                      'The public key encrypts; the matching private key decrypts.',
                      'You give the public key to everyone — it only locks, so sharing it is safe.',
                      'Only the holder of the private key can read what was sealed.'
                    ],
                    answerText: 'encrypts; shared openly'
                  },
                  {
                    type: 'choice',
                    prompt: 'A cryptographic hash function is…',
                    choices: [
                      { id: 'a', text: 'Reversible with the right key' },
                      { id: 'b', text: 'One-way — the output cannot be undone' },
                      { id: 'c', text: 'Slower than encryption' },
                      { id: 'd', text: 'Only used for compression' }
                    ],
                    answer: 'b',
                    hint: 'A fingerprint, not a lock.',
                    steps: [
                      'A hash maps input to a fixed-size fingerprint (e.g. SHA-256 → 256 bits).',
                      'Knowing the hash does not let you recover the input — there is no inverse.',
                      'That one-way property is exactly why passwords are hashed, not encrypted.'
                    ],
                    answerText: 'one-way'
                  },
                  {
                    type: 'choice',
                    prompt: 'The padlock icon in the address bar means…',
                    choices: [
                      { id: 'a', text: 'The site is trustworthy and virus-free' },
                      { id: 'b', text: 'The connection is encrypted with TLS (HTTPS)' },
                      { id: 'c', text: 'The site uses strong passwords' },
                      { id: 'd', text: 'The government certified the site' }
                    ],
                    answer: 'b',
                    hint: 'It says something about the pipe, not the content flowing through it.',
                    steps: [
                      'The padlock means your browser verified the server and set up TLS encryption.',
                      'Traffic between you and that server is ciphertext to any eavesdropper.',
                      'It does NOT vouch for the site\'s honesty — a scam site can have a padlock too.'
                    ],
                    answerText: 'encrypted HTTPS connection'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why do sites add a salt before hashing your password?',
                    choices: [
                      { id: 'a', text: 'To make the hash reversible' },
                      { id: 'b', text: 'So identical passwords get different hashes and rainbow tables fail' },
                      { id: 'c', text: 'To speed up hashing' },
                      { id: 'd', text: 'To shorten the stored value' }
                    ],
                    answer: 'b',
                    hint: 'Without it, every "password123" hashes identically everywhere.',
                    steps: [
                      'A salt is a random per-user string mixed into the password before hashing.',
                      'Two users with the same password now produce different hashes.',
                      'Attackers cannot use a precomputed table of common-password hashes — each salt must be attacked separately.'
                    ],
                    answerText: 'unique hashes per user'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why is the Caesar cipher useless for real security?',
                    choices: [
                      { id: 'a', text: 'It cannot handle letters' },
                      { id: 'b', text: 'Only 25 shifts exist — brute force tries them all instantly' },
                      { id: 'c', text: 'It uses the same key twice' },
                      { id: 'd', text: 'It requires the internet' }
                    ],
                    answer: 'b',
                    hint: 'Count the possible keys.',
                    steps: [
                      'A shift of 26 returns the original text, so only 1–25 do anything.',
                      'Brute force = try all 25 and keep the one that reads as words.',
                      'Modern ciphers use $2^{128}$+ keys precisely so brute force is hopeless.'
                    ],
                    answerText: 'key space is tiny'
                  }
                ]
              }
            },
            {
              id: 'databases-and-sql',
              title: 'Databases and SQL',
              minutes: 10,
              summary: 'Data lives in tables of rows and columns — query it declaratively with SELECT, WHERE, and ORDER BY.',
              tags: ['databases', 'sql', 'data', 'cs-principles'],
              blocks: [
                { type: 'p', text: 'A program\'s variables vanish when it exits; a **database** keeps data safe and queryable for years. The dominant model is the **relational database**: data lives in **tables**, each row a record and each column a field — like a spreadsheet with strict types. Every row gets a **primary key**, a value guaranteed unique so that row can be pinpointed forever.' },
                { type: 'code', lang: 'sql', text: `CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price REAL
);

SELECT name, price
FROM products
WHERE price < 20
ORDER BY price ASC;` },
                { type: 'callout', kind: 'key', text: '**SQL** is *declarative*: you describe the result you want — which columns, which rows, in what order — and the database engine figures out how to find it. `SELECT` picks columns, `FROM` picks the table, `WHERE` filters rows, `ORDER BY` sorts.' },
                { type: 'example', title: 'Reading a query', text: '`SELECT name FROM users WHERE age > 18;` reads top-down as a filter: walk the `users` table, keep only rows where `age > 18`, and return just the `name` column of those rows. The answer is a smaller table — query results are always tables themselves.' },
                { type: 'p', text: 'The rest of the vocabulary: `INSERT INTO` adds rows, `UPDATE` edits them, `DELETE` removes them. Under the hood, an **index** on a column acts like a book\'s index — the engine jumps straight to matching rows instead of scanning every page, turning an $O(n)$ scan into something close to $O(\\log n)$.' },
                { type: 'callout', kind: 'warning', text: 'A database beats a pile of files because it enforces types, prevents duplicate keys, survives crashes mid-write (transactions), and answers filtered questions without reading everything. Files are for documents; databases are for data you will query.' }
              ],
              skill: {
                id: 'databases-sql-practice',
                name: 'SQL basics',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which query returns every column of every row in `users`?',
                    choices: [
                      { id: 'a', text: '`GET * FROM users`' },
                      { id: 'b', text: '`SELECT * FROM users`' },
                      { id: 'c', text: '`SELECT users FROM *`' },
                      { id: 'd', text: '`FETCH ALL users`' }
                    ],
                    answer: 'b',
                    hint: 'SQL starts with SELECT; * means "all columns".',
                    steps: [
                      'Queries begin with `SELECT`, followed by the columns wanted.',
                      '`*` is the wildcard for all columns; `FROM users` names the table.',
                      '`GET` and `FETCH` are not SQL keywords.'
                    ],
                    answerText: 'SELECT * FROM users'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which clause filters which rows appear in the result?',
                    choices: [
                      { id: 'a', text: '`FILTER`' },
                      { id: 'b', text: '`SELECT`' },
                      { id: 'c', text: '`WHERE`' },
                      { id: 'd', text: '`ORDER BY`' }
                    ],
                    answer: 'c',
                    hint: 'It comes after FROM and holds the condition.',
                    steps: [
                      '`SELECT` chooses columns; `WHERE` chooses rows.',
                      '`WHERE price < 20` keeps only rows satisfying the condition.',
                      '`ORDER BY` sorts but does not filter.'
                    ],
                    answerText: 'WHERE'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which clause sorts the result?',
                    choices: [
                      { id: 'a', text: '`SORT BY`' },
                      { id: 'b', text: '`ORDER BY`' },
                      { id: 'c', text: '`GROUP BY`' },
                      { id: 'd', text: '`ARRANGE`' }
                    ],
                    answer: 'b',
                    hint: 'Two words, and it takes ASC or DESC.',
                    steps: [
                      '`ORDER BY price ASC` sorts ascending; `DESC` descending.',
                      '`GROUP BY` aggregates rows (counts, sums) — a different job.',
                      '`SORT BY` and `ARRANGE` are not SQL.'
                    ],
                    answerText: 'ORDER BY'
                  },
                  {
                    type: 'choice',
                    prompt: 'In a `users` table, one row represents…',
                    choices: [
                      { id: 'a', text: 'One column' },
                      { id: 'b', text: 'One record — a single user' },
                      { id: 'c', text: 'One database' },
                      { id: 'd', text: 'One query' }
                    ],
                    answer: 'b',
                    hint: 'Rows are records; columns are fields.',
                    steps: [
                      'A table is a collection of records.',
                      'Each row is one complete record — e.g., one user with all their fields.',
                      'Each column is one field that every row shares (name, age, ...).'
                    ],
                    answerText: 'one record'
                  },
                  {
                    type: 'choice',
                    prompt: 'A primary key is…',
                    choices: [
                      { id: 'a', text: 'The first column of the table' },
                      { id: 'b', text: 'A value guaranteed unique that identifies each row' },
                      { id: 'c', text: 'The table\'s password' },
                      { id: 'd', text: 'The largest column' }
                    ],
                    answer: 'b',
                    hint: 'It is about identification, not position.',
                    steps: [
                      'The primary key uniquely labels each row — like a student ID.',
                      'The database rejects duplicates, so a key always pinpoints exactly one row.',
                      'It need not be first or numeric by rule (though integer ids are common).'
                    ],
                    answerText: 'unique row identifier'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does `SELECT name FROM users WHERE age > 18` return?',
                    choices: [
                      { id: 'a', text: 'All columns of users over 18' },
                      { id: 'b', text: 'Only the `name` column, only for users older than 18' },
                      { id: 'c', text: 'All users, sorted by age' },
                      { id: 'd', text: 'The count of adult users' }
                    ],
                    answer: 'b',
                    hint: 'SELECT picks columns; WHERE picks rows.',
                    steps: [
                      '`WHERE age > 18` keeps only rows of users older than 18.',
                      '`SELECT name` returns only the `name` column of those rows.',
                      'The result is a smaller table — one column, some rows.'
                    ],
                    answerText: 'names of users over 18'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement adds a new row to `products`?',
                    choices: [
                      { id: 'a', text: '`ADD ROW INTO products`' },
                      { id: 'b', text: '`INSERT INTO products (name, price) VALUES (\'Pen\', 1.5)`' },
                      { id: 'c', text: '`UPDATE products SET price = 1.5`' },
                      { id: 'd', text: '`CREATE ROW products`' }
                    ],
                    answer: 'b',
                    hint: 'INSERT INTO ... VALUES is the standard form.',
                    steps: [
                      'New rows are added with `INSERT INTO`.',
                      'The column list is followed by `VALUES` with matching data.',
                      '`UPDATE` edits existing rows; `ADD ROW`/`CREATE ROW` are not SQL.'
                    ],
                    answerText: 'INSERT INTO ... VALUES'
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
