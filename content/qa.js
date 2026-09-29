// Seeded homework-help board (Chegg-style "expert answers").
// Each entry becomes a question with one accepted expert answer.

module.exports = [
  {
    subjectId: 'math',
    title: 'Why does the quadratic formula have a ± sign?',
    body: "I get that the quadratic formula solves ax²+bx+c=0, but I don't understand where the ± comes from. If we're just taking a square root, why are there suddenly two answers?",
    tags: ['quadratics', 'algebra'],
    author: 'Priya K.',
    answer: `Great question — the ± is doing real work, not decoration.

**1.** Solving $ax^2 + bx + c = 0$ by completing the square leads to $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.

**2.** The ± appears because every positive number has **two** square roots: $\\sqrt{9}$ as "the principal root" is 3, but the equation $u^2 = 9$ is solved by $u = 3$ **and** $u = -3$.

**3.** During completing the square you reach a step like $(x + \\tfrac{b}{2a})^2 = \\text{something}$. Undoing the square means $x + \\tfrac{b}{2a}$ could equal *either* root — hence $+$ and $-$.

**4.** Geometrically: a parabola can cross the x-axis twice, once (tangent, when the discriminant is 0), or never. The two roots from ± are exactly those two crossing points.`
  },
  {
    subjectId: 'math',
    title: 'Solve 3(x − 4) = 2x + 5 step by step',
    body: 'Homework problem: 3(x − 4) = 2x + 5. I distributed and got 3x − 4 = 2x + 5 but my answer came out wrong. Where did I mess up?',
    tags: ['linear-equations', 'algebra'],
    author: 'Marcus T.',
    answer: `Your error is in the distribution — a very common slip.

**Step 1.** Distribute the 3 to **every** term inside the parentheses:
$$3(x - 4) = 3x - 12$$
You wrote $3x - 4$; the 3 must multiply the $-4$ too, giving $-12$.

**Step 2.** The equation is now $3x - 12 = 2x + 5$. Collect x-terms on one side — subtract $2x$ from both sides:
$$x - 12 = 5$$

**Step 3.** Add 12 to both sides:
$$x = 17$$

**Check:** $3(17 - 4) = 3(13) = 39$ and $2(17) + 5 = 39$ ✓`
  },
  {
    subjectId: 'math',
    title: 'Is 0.999... really equal to 1?',
    body: "My teacher said 0.999 repeating equals exactly 1. That can't be right — there's always a tiny bit missing, isn't there?",
    tags: ['number-theory', 'limits'],
    author: 'Jasmine L.',
    answer: `It really is exactly 1 — here's the classic proof.

**1.** Let $x = 0.999\\ldots$

**2.** Then $10x = 9.999\\ldots$

**3.** Subtract: $10x - x = 9.999\\ldots - 0.999\\ldots$, so $9x = 9$.

**4.** Therefore $x = 1$.

The intuition that "a tiny bit is missing" assumes the decimal *stops* — but $0.999\\ldots$ never stops. The difference between it and 1 is smaller than any number you can name, which means the difference is zero. Two different decimal expansions can name the same number, just like $\\frac{1}{2} = 0.5$.`
  },
  {
    subjectId: 'science',
    title: 'Difference between speed, velocity, and acceleration?',
    body: 'These three terms all seem to mean "how fast something goes." What actually distinguishes them? Physics class is confusing me.',
    tags: ['physics', 'kinematics'],
    author: 'Dev R.',
    answer: `They're related but distinct — the difference is *direction* and *change*.

**1. Speed** — how fast: distance ÷ time. A scalar (number only). "60 mph" is a speed.

**2. Velocity** — speed **with direction**: displacement ÷ time. A vector. "60 mph north" is a velocity. Two cars at 60 mph in opposite directions have equal speeds but opposite velocities.

**3. Acceleration** — how fast **velocity changes**: $\\Delta v \\div t$. Also a vector. Cruising at a steady 60 mph = zero acceleration. Speeding up, braking, or turning (direction change!) all count as acceleration.

**Key insight:** you can accelerate without changing *speed* — a car going a constant 60 mph around a curve is accelerating because its velocity direction changes.`
  },
  {
    subjectId: 'science',
    title: 'Balance this equation: C₃H₈ + O₂ → CO₂ + H₂O',
    body: "Combustion of propane. I keep getting fractional coefficients and I'm not sure that's allowed.",
    tags: ['chemistry', 'balancing-equations'],
    author: 'Elena M.',
    answer: `Fractions are allowed mid-calculation but the final answer should be whole numbers. Here's the systematic way.

**Step 1.** Unbalanced: $\\mathrm{C_3H_8 + O_2 \\rightarrow CO_2 + H_2O}$

**Step 2.** Balance C first: 3 carbons on the left → put 3 in front of $\\mathrm{CO_2}$.
$$\\mathrm{C_3H_8 + O_2 \\rightarrow 3CO_2 + H_2O}$$

**Step 3.** Balance H: 8 hydrogens on the left → 4 in front of $\\mathrm{H_2O}$.
$$\\mathrm{C_3H_8 + O_2 \\rightarrow 3CO_2 + 4H_2O}$$

**Step 4.** Count O on the right: $3 \\times 2 + 4 \\times 1 = 10$ oxygens → need 5 $\\mathrm{O_2}$.
$$\\mathrm{C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O}$$

**Check:** C: 3=3 ✓, H: 8=8 ✓, O: 10=10 ✓. Done — no fractions needed here because the O count came out even.`
  },
  {
    subjectId: 'science',
    title: 'Why is the sky blue? (asking for a real explanation)',
    body: "Everyone says 'Rayleigh scattering' but nobody explains it. What is actually happening to the light?",
    tags: ['physics', 'light'],
    author: 'Sam W.',
    answer: `Here's what's actually happening, step by step.

**1.** Sunlight looks white but is a mix of all colors — different colors = different wavelengths (blue ~450 nm, red ~650 nm).

**2.** Air molecules (N₂, O₂) are far smaller than light's wavelength. Light hitting them gets absorbed and re-radiated in random directions — that's **scattering**.

**3.** Rayleigh's key result: scattering intensity scales as $1/\\lambda^4$. Blue light (~450 nm) scatters about $(650/450)^4 \\approx 4.3$ times more strongly than red.

**4.** So looking anywhere but directly at the sun, you're seeing preferentially-scattered light — which is mostly blue/violet. (It looks blue rather than violet because your eyes are less sensitive to violet.)

**Bonus:** at sunset, light travels through more air; blue gets scattered away entirely, leaving reds and oranges — same physics, opposite direction.`
  },
  {
    subjectId: 'computing',
    title: 'What is the difference between let, const, and var in JavaScript?',
    body: 'Three ways to declare variables seems like too many. When do I actually use each one?',
    tags: ['javascript', 'programming'],
    author: 'Tyler N.',
    answer: `Short version: **use \`const\` by default, \`let\` when the value must change, never \`var\`.**

**1. \`var\`** — the old way. Function-scoped, hoisted (usable before declaration = undefined), and allows re-declaration. These quirks cause bugs; modern code avoids it.

**2. \`let\`** — block-scoped, reassignable:
\`\`\`js
let count = 0;
count = 1;   // fine
if (true) { let count = 99; }  // separate variable inside the block
\`\`\`

**3. \`const\`** — block-scoped, binding cannot be reassigned:
\`\`\`js
const LIMIT = 100;
LIMIT = 200;            // TypeError!
const list = [1, 2];
list.push(3);           // fine — contents can change, the binding can't
\`\`\`

**Why it matters:** \`const\` tells readers "this name won't be repointed," which removes a whole class of reasoning you have to do.`
  },
  {
    subjectId: 'computing',
    title: 'How do I reverse a string in Python? Need it for a coding interview.',
    body: "Interviewer asked me to reverse a string and I blanked. What's the idiomatic way and the manual way?",
    tags: ['python', 'algorithms', 'interviews'],
    author: 'Aisha B.',
    answer: `The idiomatic one-liner, then the manual version they'll want to see you reason through.

**Idiomatic — slicing:**
\`\`\`python
s = "hello"
rev = s[::-1]   # 'olleh'
\`\`\`
The slice \`[start:stop:step]\` with step −1 walks the string backward.

**Manual — the interview answer:**
\`\`\`python
def reverse(s):
    chars = list(s)          # strings are immutable → work on a list
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    return ''.join(chars)
\`\`\`

**Complexity to mention:** $O(n)$ time, $O(n)$ space (Python strings are immutable, so you can't do a true in-place reverse — say this; interviewers love it).`
  },
  {
    subjectId: 'computing',
    title: 'Why does 0.1 + 0.2 !== 0.3 in JavaScript?',
    body: 'I found a bug where my total was off by a cent. Turns out 0.1 + 0.2 = 0.30000000000000004. Is JavaScript broken?',
    tags: ['javascript', 'floating-point'],
    author: 'Leo F.',
    answer: `Not broken — this is binary floating-point, and it happens in Python, Java, C, everywhere.

**1.** Numbers are stored in binary. Just as $\\frac{1}{3}$ can't be written exactly in decimal ($0.333\\ldots$), $\\frac{1}{10}$ can't be written exactly in binary — it's a repeating binary fraction $0.0001100110011\\ldots_2$.

**2.** The computer stores the closest representable value. The errors in $0.1$ and $0.2$ accumulate, so the sum is the closest double to $0.30000000000000004$ — which is *not* the closest double to $0.3$.

**3.** For money, never use floats: store **integer cents** ($2999$ cents, not $29.99$) or use a decimal library.

**4.** For comparisons, never use \`===\`; check if values are close: \`Math.abs(a - b) < 1e-9\`.`
  },
  {
    subjectId: 'humanities',
    title: 'Was the Civil War about states\' rights or slavery?',
    body: "I've seen people argue both. What does the actual historical evidence say?",
    tags: ['us-history', 'civil-war'],
    author: 'Hannah G.',
    answer: `The primary sources are unambiguous: the immediate cause was slavery.

**1. The secession documents say so.** Mississippi's declaration: "Our position is thoroughly identified with the institution of slavery." South Carolina, Georgia, and Texas likewise name slavery as their reason for leaving.

**2. Which "right" was at issue?** The specific states' right being defended was the right to hold enslaved people — and ironically, Southern states had *opposed* states' rights when Northern states resisted the Fugitive Slave Act.

**3. The Confederate Constitution** explicitly prohibited any state from banning slavery — removing the very "states' rights" choice claimed.

**4. Where the confusion comes from:** "states' rights" framing was promoted during the post-war "Lost Cause" revision of the war's memory, and later by opponents of civil rights.

Historians' consensus (and the documentary record): slavery was the central cause.`
  },
  {
    subjectId: 'humanities',
    title: 'Why did Rome fall? I need a thesis for an essay.',
    body: 'Everyone gives a different reason — lead pipes, barbarians, decadence. What should a strong thesis actually argue?',
    tags: ['world-history', 'rome', 'essay-writing'],
    author: 'Chris D.',
    answer: `A strong thesis treats it as **multiple interacting causes over a long period**, not one dramatic reason.

**Evidence to use:**

- **Political instability:** the Crisis of the Third Century saw ~25 emperors in 50 years; civil war consumed the army's strength.
- **Economic strain:** debased currency (denarius went from ~90% silver to ~5%), crushing taxation, and shrinking trade.
- **Military overextension:** the empire's borders required more legions than revenues could fund; reliance on foederati (allied) troops grew.
- **Division:** splitting into Western and Eastern empires (285 CE) let the richer East survive — the West fell in 476 CE while Byzantium lasted until 1453.

**Sample thesis:** *"Rome's fall was not a single collapse but a slow institutional failure: chronic civil war and economic mismanagement hollowed out the state until the Western half could no longer fund its own defense."*

That claim is specific, arguable, and lets you use all four causes as supporting evidence — stronger than picking one "gotcha" cause.`
  },
  {
    subjectId: 'economics',
    title: 'Compound interest problem: $2000 at 6% for 10 years',
    body: 'I put $2000 in an account earning 6% compounded annually. How much after 10 years? Also what does "compounded annually" even mean vs just 6%?',
    tags: ['personal-finance', 'compound-interest'],
    author: 'Nina P.',
    answer: `**The formula:** $A = P(1 + r)^t$

**Step 1.** Identify: $P = 2000$, $r = 0.06$, $t = 10$.

**Step 2.** Compute the growth factor: $(1.06)^{10} \\approx 1.7908$.

**Step 3.** $A = 2000 \\times 1.7908 \\approx \\$3581.70$.

**What "compounded" means:** each year you earn 6% not on your *original* $2000 but on the *current balance* — interest earns interest. After year 1: $2120. Year 2 earns 6% of $2120 = $127.20 (not $120).

**The contrast:** simple interest would pay $120 every year → $3200 total. Compounding earned you an extra $381.70 "for free." Over longer periods the gap explodes — this is why starting to invest early beats investing more later.`
  },
  {
    subjectId: 'economics',
    title: 'Supply and demand: why do concert tickets sell out instantly?',
    body: "Taylor Swift tickets vanished in minutes at $150, then resold for $2000. Doesn't high demand mean the price should have been higher to start?",
    tags: ['microeconomics', 'supply-demand'],
    author: 'Jordan H.',
    answer: `You've spotted the puzzle correctly — this is a real economics case study.

**1. Fixed supply:** a stadium has a fixed number of seats; supply is a vertical line at that quantity.

**2. Price set below equilibrium:** at $150, quantity demanded far exceeded seats available → instant sellout. The market-clearing price (where demand meets that fixed supply) was evidently closer to what resale showed.

**3. Why sellers underprice anyway:** artists deliberately price below market for fairness optics and fan goodwill — being seen as gouging fans has reputational costs that exceed the extra revenue.

**4. Scalpers capture the gap:** the $150 → $2000 spread is the difference between the administered price and the market price. Resellers harvest it because the venue left it on the table.

**5. The debate:** dynamic pricing (ticket prices adjusting like airline seats) would capture that value for the artist — some now do exactly this, which is why you see "platinum" pricing tiers.`
  },
  {
    subjectId: 'english',
    title: 'Semicolon vs comma — when do I actually use a semicolon?',
    body: "Teachers say 'don't use a comma splice' but never explain what a semicolon is FOR. Is it just a fancy comma?",
    tags: ['grammar', 'punctuation', 'writing'],
    author: 'Maya S.',
    answer: `A semicolon has exactly two everyday jobs — it's a connector with rules, not decoration.

**Job 1 — join two complete sentences** that are closely related, where a period feels too abrupt:
- "The experiment failed; the results were still useful."
- Each side must be able to stand alone as a sentence. If one side can't, use a comma or restructure.

**Job 2 — separate items in a list when the items contain commas:**
- "We visited Portland, Maine; Boston, Massachusetts; and Providence, Rhode Island."

**The comma splice it prevents:** "The experiment failed, the results were useful." Two complete sentences joined by only a comma is grammatically wrong — that's the splice. Fix it with a semicolon, a period, or a conjunction ("but").

**Rule of thumb:** semicolon = soft period between related complete thoughts. If you're unsure whether each side is complete, read each side aloud alone — both must sound like finished sentences.`
  },
  {
    subjectId: 'english',
    title: 'How do I write a thesis statement that isn\'t obvious/boring?',
    body: "My essays always get 'thesis is too general' comments. What do teachers actually want?",
    tags: ['writing', 'essays'],
    author: 'Owen R.',
    answer: `They want a thesis that is **specific and arguable** — someone could reasonably disagree.

**The upgrade formula:** weak thesis + because/however + specific mechanism = strong thesis.

**Weak → strong examples:**

- Weak: "Social media is bad for teens."
  Strong: "Social media harms teen mental health not through screen time itself, but by replacing sleep and in-person friendship — the two inputs depression research actually predicts."

- Weak: "Macbeth is about ambition."
  Strong: "Macbeth's tragedy is not that he is ambitious, but that he is self-aware: his soliloquies show he understands the cost of murdering Duncan and does it anyway, making the play about the failure of conscience, not the sin of ambition."

**Why it works:** the strong versions name a *mechanism* (how), acknowledge a *counter-reading* (not X but Y), and map the essay's structure — every body paragraph can now prove one piece of the claim.

**Litmus test:** could a smart person write an essay arguing the opposite? If not, it's a fact, not a thesis.`
  },
  {
    subjectId: 'math',
    title: 'Difference between correlation and causation with an example?',
    body: "Stats class keeps hammering this. I sort of get it but can't explain WHY they differ.",
    tags: ['statistics', 'reasoning'],
    author: 'Fatima A.',
    answer: `Correlation = two things move together. Causation = one *makes* the other move. The first never proves the second.

**The classic example:** ice cream sales and drowning deaths correlate strongly. Eating ice cream doesn't cause drowning — a hidden third factor (hot weather) causes both. That hidden cause is a **confounder**.

**Three reasons correlation can exist without causation:**

1. **Confounding:** a third variable drives both (weather above).
2. **Reverse causation:** does stress cause poor sleep, or does poor sleep cause stress? The correlation alone can't say which direction the arrow points.
3. **Coincidence:** with enough data, unrelated things correlate by chance (the famous "Margarine consumption correlates with divorce in Maine" examples).

**How we actually establish causation:** randomized controlled experiments — randomly assign groups so confounders are balanced — or careful causal inference when experiments are impossible.

**Mental habit:** whenever you see "X linked to Y," ask *what else could explain both?* before believing X caused Y.`
  }
];
