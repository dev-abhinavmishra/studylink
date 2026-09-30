// Subject: Science — physics, chemistry, and biology essentials.
// See content/SPEC.md for the full schema.

module.exports = {
  id: 'science',
  name: 'Science',
  icon: 'flask',
  color: '#2ea96b',
  tagline: 'Physics, chemistry, and biology foundations',
  description: 'Explore how the physical and living world works — motion, atoms, reactions, and cells. Learn the core laws and models with worked examples and practice that builds real intuition.',
  courses: [
    {
      id: 'physics-essentials',
      title: 'Physics Essentials',
      subtitle: 'Grades 9–12 · Core',
      summary: 'The rules that govern motion and energy: speed, acceleration, Newton\'s laws, free fall, work, and momentum.',
      units: [
        {
          id: 'motion-forces',
          title: 'Motion and forces',
          lessons: [
            {
              id: 'speed-vs-velocity',
              title: 'Speed vs. velocity',
              minutes: 7,
              summary: 'Speed tells you how fast; velocity tells you how fast and in which direction.',
              tags: ['physics', 'motion', 'vectors'],
              blocks: [
                { type: 'p', text: '**Speed** measures how quickly something covers distance: $v = \\frac{d}{t}$, where $d$ is distance traveled and $t$ is elapsed time. Its SI unit is meters per second (m/s). **Velocity** uses the same formula but replaces distance with **displacement** — the straight-line change in position — so velocity is a *vector*: it has a size and a direction.' },
                { type: 'callout', kind: 'key', text: 'Speed is a **scalar** (size only). Velocity is a **vector** (size + direction). Two objects can share a speed but have different velocities if they move in different directions.' },
                { type: 'p', text: 'Distance and displacement diverge whenever the path is not straight. A runner who completes one lap of a 400 m track covers 400 m of distance, but their displacement is **zero** — they end where they started.' },
                { type: 'example', title: 'Average speed vs. average velocity', text: 'A runner goes 100 m east in 20 s, then returns in 20 s. Average speed: $\\frac{200\\ \\text{m}}{40\\ \\text{s}} = 5\\ \\text{m/s}$. Average velocity: $\\frac{0\\ \\text{m}}{40\\ \\text{s}} = 0\\ \\text{m/s}$, because total displacement is zero.' },
                { type: 'list', items: ['**Average** speed or velocity summarizes a whole trip', '**Instantaneous** speed is what a speedometer shows right now', 'Velocity changes when speed changes *or* when direction changes'] },
                { type: 'callout', kind: 'warning', text: 'A car circling a roundabout at a constant 30 km/h has constant **speed** but a continuously changing **velocity**, because its direction keeps changing.' }
              ],
              skill: {
                id: 'speed-and-velocity',
                name: 'Speed vs. velocity',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which quantity includes a direction?',
                    choices: [
                      { id: 'a', text: 'Distance' },
                      { id: 'b', text: 'Speed' },
                      { id: 'c', text: 'Velocity' },
                      { id: 'd', text: 'Time' }
                    ],
                    answer: 'c',
                    hint: 'Only one of these is a vector.',
                    steps: [
                      'Distance, speed, and time are scalars — size only.',
                      'Velocity is displacement divided by time, and displacement has a direction.',
                      'So velocity is the vector quantity.'
                    ],
                    answerText: 'Velocity'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A cyclist covers 150 m in 30 s. What is her average speed in m/s?',
                    answer: 5,
                    tolerance: 0.001,
                    hint: 'Average speed = total distance / total time.',
                    steps: [
                      '$v = \\frac{d}{t} = \\frac{150\\ \\text{m}}{30\\ \\text{s}}$',
                      '$v = 5\\ \\text{m/s}$'
                    ],
                    answerText: '5 m/s'
                  },
                  {
                    type: 'choice',
                    prompt: 'A hiker walks a 6 km loop and returns to the start after 1.5 hours. What is her average velocity?',
                    choices: [
                      { id: 'a', text: '0 km/h' },
                      { id: 'b', text: '4 km/h' },
                      { id: 'c', text: '6 km/h' },
                      { id: 'd', text: '9 km/h' }
                    ],
                    answer: 'a',
                    hint: 'Average velocity uses displacement, not distance traveled.',
                    steps: [
                      'Average velocity $= \\frac{\\text{displacement}}{\\text{time}}$.',
                      'The hiker ends where she started, so displacement = 0 km.',
                      '$\\frac{0}{1.5} = 0\\ \\text{km/h}$, even though her average *speed* was 4 km/h.'
                    ],
                    answerText: '0 km/h'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which situation shows a *change* in velocity?',
                    choices: [
                      { id: 'a', text: 'A car parked on a hill' },
                      { id: 'b', text: 'A plane cruising straight at a steady 800 km/h' },
                      { id: 'c', text: 'A train holding 60 km/h on a straight track' },
                      { id: 'd', text: 'A car turning a corner at a steady 30 km/h' }
                    ],
                    answer: 'd',
                    hint: 'Velocity is a vector — changing direction counts as changing it.',
                    steps: [
                      'Velocity changes if its magnitude (speed) or its direction changes.',
                      'Turning a corner changes the direction, so the velocity changes even though the speed is constant.',
                      'The other three options keep both speed and direction fixed (or zero).'
                    ],
                    answerText: 'Turning a corner at constant speed'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A car travels 90 km along a highway in 1.5 hours. What is its average speed in km/h?',
                    answer: 60,
                    tolerance: 0.001,
                    hint: 'Divide total distance by total time.',
                    steps: [
                      '$v = \\frac{d}{t} = \\frac{90\\ \\text{km}}{1.5\\ \\text{h}}$',
                      '$v = 60\\ \\text{km/h}$'
                    ],
                    answerText: '60 km/h'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which of these is a vector quantity?',
                    choices: [
                      { id: 'a', text: 'Distance' },
                      { id: 'b', text: 'Displacement' },
                      { id: 'c', text: 'Mass' },
                      { id: 'd', text: 'Temperature' }
                    ],
                    answer: 'b',
                    hint: 'A vector needs both a size and a direction.',
                    steps: [
                      'Distance is how much ground is covered — no direction.',
                      'Displacement is the straight-line change in position, e.g. "5 m east".',
                      'Mass and temperature have no direction either, so displacement is the vector.'
                    ],
                    answerText: 'Displacement'
                  }
                ]
              }
            },
            {
              id: 'acceleration',
              title: 'Acceleration',
              minutes: 8,
              summary: 'Acceleration is the rate of change of velocity — speeding up, slowing down, or turning.',
              tags: ['physics', 'motion', 'acceleration'],
              blocks: [
                { type: 'p', text: '**Acceleration** measures how quickly velocity changes, in meters per second squared ($\\text{m/s}^2$). Because velocity is a vector, an object accelerates when it speeds up, when it slows down, *or* when it changes direction — even at constant speed.' },
                { type: 'formula', text: 'a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - u}{t}' },
                { type: 'p', text: 'Here $u$ is the initial velocity, $v$ the final velocity, and $t$ the time taken. Rearranged, this gives the first kinematic equation $v = u + at$, which predicts the velocity after any period of *constant* acceleration. It is the workhorse formula for most straight-line motion problems, from cars merging onto highways to balls dropped from towers.' },
                { type: 'graph', caption: 'Play with it: velocity vs. time is just a line — the **slope** is acceleration and the **intercept** is the initial velocity $u$. Drag $a$ negative: that\'s braking.', expr: 'a*x+b', xrange: [0, 10], yrange: [-10, 60], sliders: { a: { min: -10, max: 10, step: 0.5, value: 4, label: 'acceleration a' }, b: { min: -20, max: 20, step: 1, value: 0, label: 'initial velocity u' } } },
                { type: 'example', title: 'A car pulling away', text: 'A car goes from rest to $20\\ \\text{m/s}$ in 5 s: $a = \\frac{20 - 0}{5} = 4\\ \\text{m/s}^2$. Each second, its velocity grows by 4 m/s.' },
                { type: 'example', title: 'Braking', text: 'Braking from $15\\ \\text{m/s}$ to a stop in 3 s gives $a = \\frac{0 - 15}{3} = -5\\ \\text{m/s}^2$. A negative acceleration points opposite the motion — it is deceleration.' },
                { type: 'callout', kind: 'warning', text: 'High speed is not high acceleration. A jet cruising at a steady 250 m/s has **zero** acceleration; a sprinter exploding off the blocks at only 4 m/s may be accelerating at several $\\text{m/s}^2$.' }
              ],
              skill: { id: 'acceleration-kinematics', name: 'Kinematics: final velocity', generator: 'kinematics' }
            },
            {
              id: 'newtons-laws',
              title: "Newton's laws of motion",
              minutes: 9,
              summary: "Three laws — inertia, F = ma, and action–reaction — explain nearly all everyday motion.",
              tags: ['physics', 'forces', 'Newton'],
              blocks: [
                { type: 'p', text: 'In 1687 Isaac Newton published three laws in the *Principia* that still describe everyday motion. **First law** (inertia): an object keeps its velocity — including staying at rest — unless a net force acts on it.' },
                { type: 'callout', kind: 'key', text: '**Second law:** a net force produces acceleration in proportion to the force and inverse to the mass: $F_{net} = ma$.' },
                { type: 'p', text: '**Third law:** forces come in pairs. When object A pushes on B, B pushes back on A with an equal, opposite force. The pair acts on *different* bodies, which is why they never cancel out for a single object.' },
                { type: 'example', title: 'Using F = ma', text: 'A net force of $10\\ \\text{N}$ pushes a $2\\ \\text{kg}$ cart: $a = \\frac{F}{m} = \\frac{10}{2} = 5\\ \\text{m/s}^2$.' },
                { type: 'example', title: 'Rocket flight', text: 'A rocket pushes exhaust gas backward (action); the gas pushes the rocket forward (reaction). No air is needed — rockets work better in a vacuum.' },
                { type: 'callout', kind: 'warning', text: 'Action–reaction pairs never cancel because they act on different objects. "You pull Earth up while Earth pulls you down" is literally true — Earth just accelerates imperceptibly because of its enormous mass.' }
              ],
              skill: {
                id: 'newtons-laws',
                name: "Applying Newton's laws",
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A book rests on a table with no net force acting on it. According to the first law, it will…',
                    choices: [
                      { id: 'a', text: 'Slowly slide to a stop' },
                      { id: 'b', text: 'Remain at rest' },
                      { id: 'c', text: 'Accelerate gently' },
                      { id: 'd', text: 'Drift sideways' }
                    ],
                    answer: 'b',
                    hint: 'Inertia means velocity — including zero velocity — stays constant without a net force.',
                    steps: [
                      'The first law: an object maintains its velocity unless a net force acts.',
                      'The book\'s velocity is zero and the net force is zero.',
                      'So it stays at rest.'
                    ],
                    answerText: 'Remain at rest'
                  },
                  {
                    type: 'choice',
                    prompt: 'A net force of $12\\ \\text{N}$ acts on a $3\\ \\text{kg}$ box. What is its acceleration?',
                    choices: [
                      { id: 'a', text: '$36\\ \\text{m/s}^2$' },
                      { id: 'b', text: '$9\\ \\text{m/s}^2$' },
                      { id: 'c', text: '$4\\ \\text{m/s}^2$' },
                      { id: 'd', text: '$0.25\\ \\text{m/s}^2$' }
                    ],
                    answer: 'c',
                    hint: 'Rearrange F = ma to a = F/m.',
                    steps: [
                      'Second law: $F_{net} = ma$.',
                      '$a = \\frac{F}{m} = \\frac{12\\ \\text{N}}{3\\ \\text{kg}}$',
                      '$a = 4\\ \\text{m/s}^2$'
                    ],
                    answerText: '4 m/s²'
                  },
                  {
                    type: 'choice',
                    prompt: 'You push the ground backward with your foot. Which is the reaction force that moves you forward?',
                    choices: [
                      { id: 'a', text: 'Friction pushing your foot backward' },
                      { id: 'b', text: 'The ground pushing your foot forward' },
                      { id: 'c', text: 'Gravity pulling you down' },
                      { id: 'd', text: 'Air resistance on your body' }
                    ],
                    answer: 'b',
                    hint: 'The reaction acts on YOU, from the object you pushed.',
                    steps: [
                      'Third law pairs: your foot exerts a backward force on the ground.',
                      'The ground exerts an equal, opposite forward force on your foot.',
                      'That forward push from the ground is what accelerates you.'
                    ],
                    answerText: 'The ground pushes your foot forward'
                  },
                  {
                    type: 'choice',
                    prompt: 'Inertia — the tendency to resist changes in motion — depends directly on an object\'s…',
                    choices: [
                      { id: 'a', text: 'Speed' },
                      { id: 'b', text: 'Color' },
                      { id: 'c', text: 'Temperature' },
                      { id: 'd', text: 'Mass' }
                    ],
                    answer: 'd',
                    hint: 'Which property makes a loaded truck harder to stop than a bicycle?',
                    steps: [
                      'Inertia is measured by mass: more massive objects resist acceleration more.',
                      'From $a = F/m$, the same force produces less acceleration on a larger mass.',
                      'Speed, color, and temperature do not determine inertia.'
                    ],
                    answerText: 'Mass'
                  },
                  {
                    type: 'choice',
                    prompt: 'The same net force is applied to a 1 kg cart and a 4 kg cart. The 4 kg cart accelerates…',
                    choices: [
                      { id: 'a', text: 'Four times as fast' },
                      { id: 'b', text: 'At the same rate' },
                      { id: 'c', text: 'One quarter as fast' },
                      { id: 'd', text: 'Twice as fast' }
                    ],
                    answer: 'c',
                    hint: 'Acceleration is inversely proportional to mass at fixed force.',
                    steps: [
                      'With $a = F/m$, quadrupling $m$ divides $a$ by 4.',
                      'So the 4 kg cart accelerates at one quarter the rate of the 1 kg cart.'
                    ],
                    answerText: 'One quarter as fast'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which everyday event is a clean example of Newton\'s third law?',
                    choices: [
                      { id: 'a', text: 'A ball speeding up as it falls' },
                      { id: 'b', text: 'A rocket rising as it expels exhaust gas downward' },
                      { id: 'c', text: 'A puck gliding frictionlessly at constant speed' },
                      { id: 'd', text: 'A heavy box being hard to start moving' }
                    ],
                    answer: 'b',
                    hint: 'Look for a pair of forces between two different objects.',
                    steps: [
                      'The rocket pushes gas downward (action).',
                      'The gas pushes the rocket upward (reaction) — a classic third-law pair.',
                      'Falling is second law (net force), coasting is first law (inertia), and a hard-to-start box is inertia again.'
                    ],
                    answerText: 'Rocket expelling exhaust gas'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the approximate weight (the force of gravity) of a $10\\ \\text{kg}$ mass on Earth, using $g \\approx 9.8\\ \\text{m/s}^2$?',
                    choices: [
                      { id: 'a', text: '$9.8\\ \\text{N}$' },
                      { id: 'b', text: '$10\\ \\text{N}$' },
                      { id: 'c', text: '$98\\ \\text{N}$' },
                      { id: 'd', text: '$980\\ \\text{N}$' }
                    ],
                    answer: 'c',
                    hint: 'Weight is a force: W = mg.',
                    steps: [
                      'Weight is the gravitational force, $W = mg$.',
                      '$W = 10\\ \\text{kg} \\times 9.8\\ \\text{m/s}^2 = 98\\ \\text{N}$'
                    ],
                    answerText: '98 N'
                  }
                ]
              }
            },
            {
              id: 'free-fall',
              title: 'Free fall',
              minutes: 8,
              summary: 'When only gravity acts, every object falls with the same acceleration: g ≈ 9.8 m/s².',
              tags: ['physics', 'gravity', 'acceleration'],
              blocks: [
                { type: 'p', text: 'An object is in **free fall** when the only force on it is gravity. Near Earth\'s surface, gravity produces a downward acceleration of $g \\approx 9.8\\ \\text{m/s}^2$ — often rounded to $10\\ \\text{m/s}^2$ for estimates — regardless of the object\'s mass.' },
                { type: 'callout', kind: 'key', text: 'In a vacuum, a hammer and a feather hit the ground together. Mass cancels out: heavier objects are pulled harder ($F = mg$) but resist acceleration equally more ($a = F/m$).' },
                { type: 'p', text: 'In air, drag complicates things: light or flat objects reach **terminal velocity** when air resistance balances weight and acceleration stops. In 1971, Apollo 15 astronaut David Scott famously dropped a hammer and a feather on the airless Moon — they landed simultaneously.' },
                { type: 'formula', text: 'v = gt \\qquad h = \\frac{1}{2}gt^2' },
                { type: 'example', title: 'Dropping a ball from 45 m', text: 'Using $g = 10\\ \\text{m/s}^2$: $45 = \\frac{1}{2}(10)t^2$ gives $t^2 = 9$, so $t = 3\\ \\text{s}$. Impact velocity: $v = gt = 10 \\times 3 = 30\\ \\text{m/s}$.' },
                { type: 'callout', kind: 'warning', text: 'A heavier object does NOT fall faster. In everyday life the *feather* falls slower only because air resistance is large compared to its tiny weight.' }
              ],
              skill: {
                id: 'free-fall',
                name: 'Free-fall motion',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'An object is dropped from rest. Using $g = 10\\ \\text{m/s}^2$, what is its velocity after 3 seconds of free fall, in m/s?',
                    answer: 30,
                    tolerance: 0.001,
                    hint: 'Use v = gt for a drop from rest.',
                    steps: [
                      'From rest, $v = gt$.',
                      '$v = 10\\ \\text{m/s}^2 \\times 3\\ \\text{s} = 30\\ \\text{m/s}$'
                    ],
                    answerText: '30 m/s'
                  },
                  {
                    type: 'choice',
                    prompt: 'In a vacuum, a 2 kg brick and a 0.5 kg stone are dropped from the same height. Which lands first?',
                    choices: [
                      { id: 'a', text: 'The brick — it is heavier' },
                      { id: 'b', text: 'The stone — it has less air resistance' },
                      { id: 'c', text: 'They land together' },
                      { id: 'd', text: 'The brick — gravity pulls harder on it' }
                    ],
                    answer: 'c',
                    hint: 'What does "free fall" say about the role of mass?',
                    steps: [
                      'Gravitational acceleration $g$ is the same for all masses.',
                      'The extra force on the brick is exactly offset by its extra inertia ($a = F/m$).',
                      'With no air resistance, both land at the same instant.'
                    ],
                    answerText: 'They land together'
                  },
                  {
                    type: 'numeric',
                    prompt: 'How long does a dropped object take to fall 20 m? Use $g = 10\\ \\text{m/s}^2$ and give the time in seconds.',
                    answer: 2,
                    tolerance: 0.001,
                    hint: 'Solve h = ½gt² for t.',
                    steps: [
                      '$h = \\frac{1}{2}gt^2 \\Rightarrow 20 = 5t^2$',
                      '$t^2 = 4$, so $t = 2\\ \\text{s}$'
                    ],
                    answerText: '2 s'
                  },
                  {
                    type: 'choice',
                    prompt: 'An object in true free fall experiences…',
                    choices: [
                      { id: 'a', text: 'Gravity and air resistance' },
                      { id: 'b', text: 'Only the force of gravity' },
                      { id: 'c', text: 'No forces at all' },
                      { id: 'd', text: 'A constant upward buoyant force' }
                    ],
                    answer: 'b',
                    hint: '"Free" means free of every force except one.',
                    steps: [
                      'Free fall is defined as motion under gravity alone.',
                      'Air resistance must be absent (or negligible); otherwise the fall is not "free".'
                    ],
                    answerText: 'Only gravity'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A ball is dropped and falls for 5 s before landing. Using $g = 10\\ \\text{m/s}^2$, from what height (in meters) was it dropped?',
                    answer: 125,
                    tolerance: 0.001,
                    hint: 'Use h = ½gt².',
                    steps: [
                      '$h = \\frac{1}{2}gt^2 = \\frac{1}{2}(10)(5^2)$',
                      '$h = 5 \\times 25 = 125\\ \\text{m}$'
                    ],
                    answerText: '125 m'
                  },
                  {
                    type: 'choice',
                    prompt: 'A skydiver eventually stops accelerating and falls at a steady speed. This is because…',
                    choices: [
                      { id: 'a', text: 'Gravity switched off at high speed' },
                      { id: 'b', text: 'Terminal velocity is reached when air resistance balances weight' },
                      { id: 'c', text: 'The skydiver\'s mass decreased' },
                      { id: 'd', text: 'Gravity weakens near the ground' }
                    ],
                    answer: 'b',
                    hint: 'Acceleration stops when the NET force becomes zero — what grows with speed?',
                    steps: [
                      'Air resistance grows with falling speed.',
                      'When drag upward equals weight downward, the net force is zero.',
                      'By Newton\'s first law, the skydiver then falls at constant terminal velocity.'
                    ],
                    answerText: 'Terminal velocity from balanced forces'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'energy',
          title: 'Energy and momentum',
          lessons: [
            {
              id: 'work-and-energy',
              title: 'Work and energy',
              minutes: 9,
              summary: 'Work transfers energy; kinetic and potential energy are the currencies of motion.',
              tags: ['physics', 'energy', 'work'],
              blocks: [
                { type: 'p', text: 'In physics, **work** is done only when a force moves something along its direction: $W = Fd$. The unit is the **joule** (J), where $1\\ \\text{J} = 1\\ \\text{N} \\cdot \\text{m}$. Work is the mechanism by which energy is transferred into or out of a system.' },
                { type: 'formula', text: 'KE = \\frac{1}{2}mv^2 \\qquad PE = mgh \\qquad W = Fd' },
                { type: 'p', text: '**Kinetic energy** is the energy of motion; **gravitational potential energy** is stored energy of position waiting to fall. Energy is conserved — it converts between forms but is never created or destroyed, so a roller coaster trades height for speed and back again. **Power**, measured in watts, is the rate of energy transfer: $P = \\frac{W}{t}$.' },
                { type: 'example', title: 'Pushing a crate', text: 'A steady $20\\ \\text{N}$ push moves a crate $5\\ \\text{m}$: $W = Fd = 20 \\times 5 = 100\\ \\text{J}$ of energy transferred to the crate.' },
                { type: 'example', title: 'Kinetic energy of a bicycle', text: 'A $2\\ \\text{kg}$ ball at $3\\ \\text{m/s}$ carries $KE = \\frac{1}{2}(2)(3^2) = 9\\ \\text{J}$. Note the square: doubling speed *quadruples* kinetic energy.' },
                { type: 'callout', kind: 'warning', text: 'Holding a heavy box still does **zero** work in the physics sense — no displacement, no work — even though your muscles get tired.' }
              ],
              skill: {
                id: 'work-energy',
                name: 'Work and energy calculations',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'A $30\\ \\text{N}$ force pushes a box $4\\ \\text{m}$ in the direction of the force. How much work is done, in joules?',
                    answer: 120,
                    tolerance: 0.001,
                    hint: 'W = Fd.',
                    steps: [
                      '$W = Fd = 30\\ \\text{N} \\times 4\\ \\text{m}$',
                      '$W = 120\\ \\text{J}$'
                    ],
                    answerText: '120 J'
                  },
                  {
                    type: 'numeric',
                    prompt: 'What is the kinetic energy of a $3\\ \\text{kg}$ object moving at $4\\ \\text{m/s}$, in joules?',
                    answer: 24,
                    tolerance: 0.001,
                    hint: 'KE = ½mv² — square the velocity first.',
                    steps: [
                      '$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(3)(4^2)$',
                      '$KE = \\frac{1}{2}(3)(16) = 24\\ \\text{J}$'
                    ],
                    answerText: '24 J'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A $2\\ \\text{kg}$ book sits on a shelf $5\\ \\text{m}$ above the floor. Using $g = 10\\ \\text{m/s}^2$, what is its gravitational potential energy in joules?',
                    answer: 100,
                    tolerance: 0.001,
                    hint: 'PE = mgh.',
                    steps: [
                      '$PE = mgh = 2 \\times 10 \\times 5$',
                      '$PE = 100\\ \\text{J}$'
                    ],
                    answerText: '100 J'
                  },
                  {
                    type: 'choice',
                    prompt: 'If a moving object doubles its speed, its kinetic energy becomes…',
                    choices: [
                      { id: 'a', text: 'Twice as large' },
                      { id: 'b', text: 'Half as large' },
                      { id: 'c', text: 'Four times as large' },
                      { id: 'd', text: 'Unchanged' }
                    ],
                    answer: 'c',
                    hint: 'Velocity is squared in KE = ½mv².',
                    steps: [
                      '$KE = \\frac{1}{2}mv^2$ depends on $v^2$.',
                      'Doubling $v$ gives $(2v)^2 = 4v^2$.',
                      'So kinetic energy quadruples — which is why highway speed crashes are so much more destructive.'
                    ],
                    answerText: 'Four times as large'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A motor does $600\\ \\text{J}$ of work in $30\\ \\text{s}$. What is its power output in watts?',
                    answer: 20,
                    tolerance: 0.001,
                    hint: 'Power is work divided by time.',
                    steps: [
                      '$P = \\frac{W}{t} = \\frac{600\\ \\text{J}}{30\\ \\text{s}}$',
                      '$P = 20\\ \\text{W}$'
                    ],
                    answerText: '20 W'
                  },
                  {
                    type: 'choice',
                    prompt: 'A weightlifter holds a 100 kg barbell motionless overhead. The work done on the barbell is…',
                    choices: [
                      { id: 'a', text: 'Very large, because it is heavy' },
                      { id: 'b', text: 'Zero, because there is no displacement' },
                      { id: 'c', text: 'Equal to its weight' },
                      { id: 'd', text: '100 J per second' }
                    ],
                    answer: 'b',
                    hint: 'Work needs force AND displacement in the force\'s direction.',
                    steps: [
                      '$W = Fd$ requires displacement $d$ along the force.',
                      'A stationary barbell has $d = 0$, so $W = 0$.',
                      'Muscles burn energy internally, but no work is done *on the barbell*.'
                    ],
                    answerText: 'Zero — no displacement'
                  }
                ]
              }
            },
            {
              id: 'momentum-and-collisions',
              title: 'Momentum and collisions',
              minutes: 9,
              summary: 'Momentum p = mv is conserved in collisions — the master key for analyzing impacts.',
              tags: ['physics', 'momentum', 'collisions'],
              blocks: [
                { type: 'p', text: '**Momentum** is "mass in motion": $p = mv$, in $\\text{kg} \\cdot \\text{m/s}$. Like velocity it is a vector — a heavy truck crawling at 2 m/s can carry more momentum than a baseball flying fast.' },
                { type: 'callout', kind: 'key', text: '**Conservation of momentum:** in a system with no external forces (like friction), the total momentum before a collision equals the total momentum after. It holds for both bouncy (elastic) and sticky (inelastic) collisions.' },
                { type: 'p', text: '**Impulse** connects force to momentum: $F\\,\\Delta t = \\Delta p$. The same momentum change hurts less when spread over more time — that is why airbags, crash mats, and "giving" with a catch all reduce injury.' },
                { type: 'example', title: 'Momentum of a car', text: 'A $1500\\ \\text{kg}$ car at $20\\ \\text{m/s}$: $p = mv = 1500 \\times 20 = 30{,}000\\ \\text{kg} \\cdot \\text{m/s}$.' },
                { type: 'example', title: 'Sticky carts', text: 'A $2\\ \\text{kg}$ cart at $3\\ \\text{m/s}$ hits and sticks to a stationary $1\\ \\text{kg}$ cart. Total $p = 6\\ \\text{kg} \\cdot \\text{m/s}$ over a combined $3\\ \\text{kg}$: $v = \\frac{6}{3} = 2\\ \\text{m/s}$.' },
                { type: 'callout', kind: 'warning', text: 'Momentum is conserved only for an **isolated** system. Once external forces like friction or a wall join in, total momentum of the objects alone is not conserved.' }
              ],
              skill: {
                id: 'momentum',
                name: 'Momentum and impulse',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'A $0.5\\ \\text{kg}$ ball travels at $12\\ \\text{m/s}$. What is its momentum in kg·m/s?',
                    answer: 6,
                    tolerance: 0.001,
                    hint: 'p = mv.',
                    steps: [
                      '$p = mv = 0.5 \\times 12$',
                      '$p = 6\\ \\text{kg} \\cdot \\text{m/s}$'
                    ],
                    answerText: '6 kg·m/s'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A $2\\ \\text{kg}$ cart moving at $4\\ \\text{m/s}$ strikes a stationary $1\\ \\text{kg}$ cart, and they stick together. What is their shared velocity in m/s? (Round to two decimals.)',
                    answer: 2.67,
                    tolerance: 0.01,
                    hint: 'Conserve momentum: total p before = total p after.',
                    steps: [
                      'Before: $p = (2)(4) + (1)(0) = 8\\ \\text{kg} \\cdot \\text{m/s}$.',
                      'After: combined mass $= 3\\ \\text{kg}$ moving at $v$.',
                      '$v = \\frac{8}{3} \\approx 2.67\\ \\text{m/s}$'
                    ],
                    answerText: '≈ 2.67 m/s'
                  },
                  {
                    type: 'choice',
                    prompt: 'Airbags reduce injuries mainly because they…',
                    choices: [
                      { id: 'a', text: 'Reduce the change in momentum' },
                      { id: 'b', text: 'Eliminate the impulse entirely' },
                      { id: 'c', text: 'Increase the stopping time, lowering the force' },
                      { id: 'd', text: 'Make the passenger lighter' }
                    ],
                    answer: 'c',
                    hint: 'Impulse FΔt = Δp — the momentum change is fixed; what can the airbag change?',
                    steps: [
                      'The passenger\'s $\\Delta p$ in a crash is fixed by their speed.',
                      'Since $F = \\frac{\\Delta p}{\\Delta t}$, stretching $\\Delta t$ shrinks the peak force.',
                      'The airbag lengthens the stop from milliseconds to tens of milliseconds.'
                    ],
                    answerText: 'Increase stopping time, lowering force'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A $20\\ \\text{N}$ net force pushes a cart for $3\\ \\text{s}$. What impulse (change in momentum) does it deliver, in N·s?',
                    answer: 60,
                    tolerance: 0.001,
                    hint: 'Impulse = FΔt.',
                    steps: [
                      '$J = F\\,\\Delta t = 20 \\times 3$',
                      '$J = 60\\ \\text{N} \\cdot \\text{s}$, which equals $\\Delta p = 60\\ \\text{kg} \\cdot \\text{m/s}$'
                    ],
                    answerText: '60 N·s'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which object has the largest momentum?',
                    choices: [
                      { id: 'a', text: 'A $1000\\ \\text{kg}$ car at $2\\ \\text{m/s}$' },
                      { id: 'b', text: 'A $50\\ \\text{kg}$ cyclist at $10\\ \\text{m/s}$' },
                      { id: 'c', text: 'A $0.05\\ \\text{kg}$ bullet at $400\\ \\text{m/s}$' },
                      { id: 'd', text: 'A $3000\\ \\text{kg}$ parked truck' }
                    ],
                    answer: 'a',
                    hint: 'Compute p = mv for each.',
                    steps: [
                      'Car: $1000 \\times 2 = 2000$ kg·m/s.',
                      'Cyclist: $50 \\times 10 = 500$; bullet: $0.05 \\times 400 = 20$; parked truck: 0.',
                      'The slow but massive car wins: momentum scales with mass AND speed.'
                    ],
                    answerText: 'The 1000 kg car at 2 m/s'
                  },
                  {
                    type: 'choice',
                    prompt: 'A stationary cannon fires a shell forward. Why does the cannon recoil backward?',
                    choices: [
                      { id: 'a', text: 'Air pushes it backward' },
                      { id: 'b', text: 'Gravity pulls it backward' },
                      { id: 'c', text: 'The shell drags it back' },
                      { id: 'd', text: 'Conservation of momentum — the shell\'s forward momentum is balanced by the cannon\'s backward momentum' }
                    ],
                    answer: 'd',
                    hint: 'Total momentum was zero before firing.',
                    steps: [
                      'Initially cannon + shell have total momentum zero.',
                      'After firing, momentum must still sum to zero.',
                      'The shell\'s forward momentum forces an equal backward momentum on the cannon — recoil.'
                    ],
                    answerText: 'Conservation of momentum'
                  }
                ]
              }
            },
            {
              id: 'conservation-of-energy',
              title: 'Conservation of energy',
              minutes: 8,
              summary: 'Energy is never created or destroyed — only transformed. When only gravity acts, potential and kinetic trade cleanly: mgh + ½mv² stays constant.',
              tags: ['physics', 'energy', 'conservation'],
              blocks: [
                { type: 'p', text: 'Energy is the universe\'s most careful accountant: it is never created or destroyed, only **transformed**. Drop a ball and gravitational potential energy becomes kinetic energy; slam the brakes and kinetic becomes heat; charge a phone and electrical energy becomes chemical. The bookkeeping rule is conservation: in a closed system, the total is constant.' },
                { type: 'formula', text: 'mgh_i + \\tfrac{1}{2}mv_i^2 = mgh_f + \\tfrac{1}{2}mv_f^2' },
                { type: 'callout', kind: 'key', text: 'When **only gravity does work**, mechanical energy is conserved: whatever potential energy $PE = mgh$ is lost becomes kinetic energy $KE = \\frac{1}{2}mv^2$, and vice versa. Mass often cancels entirely — which is why a dropped hammer and feather fall together in vacuum.' },
                { type: 'example', title: 'Speed of a dropped ball', text: 'A ball falls 5 m from rest. With $g = 9.8$ m/s²: $mgh = \\frac{1}{2}mv^2$ gives $v = \\sqrt{2gh} = \\sqrt{2 \\cdot 9.8 \\cdot 5} = \\sqrt{98} \\approx 9.9$ m/s. Notice $m$ vanished — the answer never depended on the ball\'s mass.' },
                { type: 'example', title: 'Roller coaster sanity check', text: 'A coaster cresting a 30 m hill at 2 m/s drops to ground level. $v_f = \\sqrt{v_i^2 + 2gh} = \\sqrt{4 + 2 \\cdot 9.8 \\cdot 30} \\approx 24.4$ m/s — the deepest point is always the fastest, because the most PE has converted to KE.' },
                { type: 'callout', kind: 'warning', text: 'Conservation applies to the **total**, not to mechanical energy alone. Friction and air resistance drain mechanical energy into heat, so real-world coasters end each hill slightly slower than the ideal $v = \\sqrt{2gh}$ predicts. "Energy loss" always means "energy moved somewhere else."' }
              ],
              skill: {
                id: 'conservation-energy',
                name: 'Apply conservation of energy',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'A $2$ kg book sits on a shelf $10$ m high. Using $g = 10$ m/s², what is its gravitational potential energy in joules?',
                    answer: 200,
                    tolerance: 0.001,
                    hint: 'PE = mgh.',
                    steps: [
                      '$PE = mgh = 2 \\times 10 \\times 10 = 200$ J.'
                    ],
                    answerText: '200 J'
                  },
                  {
                    type: 'numeric',
                    prompt: 'A ball is dropped from rest at $h = 5$ m. Using $g = 10$ m/s² and ignoring air resistance, what is its speed at the ground, in m/s?',
                    answer: 10,
                    tolerance: 0.001,
                    hint: 'Set mgh = ½mv² and solve for v.',
                    steps: [
                      'Conservation: $mgh = \\frac{1}{2}mv^2$, so $v = \\sqrt{2gh}$.',
                      '$v = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10$ m/s.'
                    ],
                    answerText: '10 m/s'
                  },
                  {
                    type: 'choice',
                    prompt: 'A pendulum at the highest point of its swing has maximum…',
                    choices: [
                      { id: 'a', text: 'kinetic energy' },
                      { id: 'b', text: 'potential energy' },
                      { id: 'c', text: 'speed' },
                      { id: 'd', text: 'momentum' }
                    ],
                    answer: 'b',
                    hint: 'It is momentarily at rest up there.',
                    steps: [
                      'At the top of the swing the pendulum is momentarily stationary — zero KE.',
                      'All its energy is gravitational potential energy at that instant.'
                    ],
                    answerText: 'potential energy'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why is a roller coaster fastest at the LOWEST point of its track?',
                    choices: [
                      { id: 'a', text: 'Gravity is stronger at low altitudes' },
                      { id: 'b', text: 'The track is smoothest there' },
                      { id: 'c', text: 'The most potential energy has converted to kinetic energy' },
                      { id: 'd', text: 'The cars are lightest there' }
                    ],
                    answer: 'c',
                    hint: 'Where has the height loss been largest?',
                    steps: [
                      'Every meter of height lost becomes kinetic energy: $\\frac{1}{2}mv^2 = mg\\Delta h$.',
                      'The lowest point has seen the most conversion — hence the highest speed.'
                    ],
                    answerText: 'Most PE converted to KE'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'chemistry-essentials',
      title: 'Chemistry Essentials',
      subtitle: 'Grades 9–12 · Core',
      summary: 'The language of matter: atoms, the periodic table, bonding, balanced reactions, the mole, and acids and bases.',
      units: [
        {
          id: 'atoms-matter',
          title: 'Atoms and matter',
          lessons: [
            {
              id: 'atomic-structure',
              title: 'Atomic structure',
              minutes: 8,
              summary: 'Atoms are built from protons, neutrons, and electrons — and the proton count defines the element.',
              tags: ['chemistry', 'atoms', 'structure'],
              blocks: [
                { type: 'p', text: 'Every atom has a tiny dense **nucleus** of protons and neutrons surrounded by a cloud of **electrons**. Protons carry charge $+1$, electrons $-1$, neutrons $0$. The nucleus holds nearly all the mass yet occupies only about a trillionth of the atom\'s volume.' },
                { type: 'callout', kind: 'key', text: 'The **atomic number** $Z$ is the count of protons — it alone defines the element. The **mass number** $A$ counts protons + neutrons.' },
                { type: 'p', text: 'Atoms of the same element with different neutron counts are **isotopes**: carbon-12 and carbon-14 both have 6 protons, but 6 vs. 8 neutrons. Atoms that gain or lose electrons become **ions** — losing electrons leaves a positive cation; gaining them leaves a negative anion.' },
                { type: 'list', items: ['Proton: $+1$ charge, $\\approx 1$ u, in the nucleus', 'Neutron: $0$ charge, $\\approx 1$ u, in the nucleus', 'Electron: $-1$ charge, $\\approx \\frac{1}{1836}$ u, in the surrounding cloud'] },
                { type: 'example', title: 'Count the particles in sodium-23', text: 'Na-23 has atomic number 11: $11$ protons, $23 - 11 = 12$ neutrons, and — since the neutral atom is uncharged — 11 electrons.' },
                { type: 'callout', kind: 'warning', text: 'The mass number $A$ is a whole number for one specific atom; the atomic mass on the periodic table (e.g. Cl 35.45) is a weighted **average** over natural isotopes — it is not a count.' }
              ],
              skill: {
                id: 'atomic-structure',
                name: 'Protons, neutrons, electrons',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is the electric charge of a proton?',
                    choices: [
                      { id: 'a', text: '0' },
                      { id: 'b', text: '+1' },
                      { id: 'c', text: '−1' },
                      { id: 'd', text: '+2' }
                    ],
                    answer: 'b',
                    hint: 'Think of the three particles: positive, neutral, negative.',
                    steps: [
                      'Protons are the positive particles of the nucleus.',
                      'Each proton carries charge +1; each electron −1; neutrons are neutral.'
                    ],
                    answerText: '+1'
                  },
                  {
                    type: 'choice',
                    prompt: 'An atom has 11 protons and 12 neutrons. What is its mass number?',
                    choices: [
                      { id: 'a', text: '11' },
                      { id: 'b', text: '12' },
                      { id: 'c', text: '1' },
                      { id: 'd', text: '23' }
                    ],
                    answer: 'd',
                    hint: 'Mass number counts BOTH kinds of nucleons.',
                    steps: [
                      'Mass number $A = \\text{protons} + \\text{neutrons}$.',
                      '$A = 11 + 12 = 23$ (this is sodium-23).'
                    ],
                    answerText: '23'
                  },
                  {
                    type: 'choice',
                    prompt: 'Two atoms are isotopes of the same element. They must differ in their number of…',
                    choices: [
                      { id: 'a', text: 'Protons' },
                      { id: 'b', text: 'Neutrons' },
                      { id: 'c', text: 'Electrons in a neutral atom' },
                      { id: 'd', text: 'Atomic number' }
                    ],
                    answer: 'b',
                    hint: 'Same element means same proton count — so what is left to vary?',
                    steps: [
                      'Isotopes share the element, so proton count (atomic number) is identical.',
                      'They differ only in neutron count — e.g. carbon-12 vs. carbon-14 have 6 vs. 8 neutrons.'
                    ],
                    answerText: 'Neutrons'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where are an atom\'s electrons found?',
                    choices: [
                      { id: 'a', text: 'Inside the nucleus' },
                      { id: 'b', text: 'Bound to the neutrons' },
                      { id: 'c', text: 'In a cloud of orbitals around the nucleus' },
                      { id: 'd', text: 'Shared equally between nucleus and shell' }
                    ],
                    answer: 'c',
                    hint: 'The nucleus holds only protons and neutrons.',
                    steps: [
                      'The nucleus contains protons and neutrons only.',
                      'Electrons occupy orbitals — regions of probability — surrounding the nucleus.'
                    ],
                    answerText: 'In the electron cloud / orbitals'
                  },
                  {
                    type: 'choice',
                    prompt: 'What single property determines which element an atom is?',
                    choices: [
                      { id: 'a', text: 'Number of protons' },
                      { id: 'b', text: 'Number of neutrons' },
                      { id: 'c', text: 'Number of electrons' },
                      { id: 'd', text: 'Total mass' }
                    ],
                    answer: 'a',
                    hint: 'The "atomic number" is literally the count of one particle.',
                    steps: [
                      'The atomic number $Z$ = proton count, and it defines the element.',
                      'Neutrons vary among isotopes; electrons vary among ions; only the proton count is fixed.'
                    ],
                    answerText: 'Number of protons'
                  },
                  {
                    type: 'choice',
                    prompt: 'A neutral atom gains an extra electron. It becomes…',
                    choices: [
                      { id: 'a', text: 'A cation (positive ion)' },
                      { id: 'b', text: 'An isotope' },
                      { id: 'c', text: 'An anion (negative ion)' },
                      { id: 'd', text: 'A new element' }
                    ],
                    answer: 'c',
                    hint: 'Electrons are negative — add one and the net charge tips negative.',
                    steps: [
                      'Gaining an electron adds one unit of negative charge.',
                      'The atom becomes a negative ion, called an anion.',
                      'It stays the same element — the proton count never changed.'
                    ],
                    answerText: 'An anion'
                  },
                  {
                    type: 'choice',
                    prompt: 'Nearly all of an atom\'s mass is concentrated in…',
                    choices: [
                      { id: 'a', text: 'The electron cloud' },
                      { id: 'b', text: 'The nucleus' },
                      { id: 'c', text: 'The outermost shell' },
                      { id: 'd', text: 'Empty space' }
                    ],
                    answer: 'b',
                    hint: 'Which particles are ~1800× heavier than electrons?',
                    steps: [
                      'Protons and neutrons each weigh ~1 u; an electron weighs only ~1/1836 u.',
                      'All protons and neutrons sit in the nucleus, so ~99.97% of the mass is there.'
                    ],
                    answerText: 'The nucleus'
                  }
                ]
              }
            },
            {
              id: 'the-periodic-table',
              title: 'The periodic table',
              minutes: 8,
              summary: 'One chart encodes every element: rows are energy shells, columns are chemical families.',
              tags: ['chemistry', 'periodic table', 'elements'],
              blocks: [
                { type: 'p', text: 'In 1869 Dmitri Mendeleev arranged the known elements by mass and behavior, famously leaving gaps that predicted undiscovered elements. The modern table orders elements by **atomic number** and now holds 118 confirmed elements.' },
                { type: 'callout', kind: 'key', text: 'A **period** is a row — elements gain an electron shell as you go down. A **group** is a column — its members share the same count of **valence electrons**, so they behave chemically alike.' },
                { type: 'p', text: '**Metals** fill the left and center (shiny, conductive, malleable); **nonmetals** sit on the right; **metalloids** like silicon hug the staircase boundary. Key families: group 1 alkali metals (violently reactive), group 17 halogens (reactive nonmetals), group 18 noble gases (nearly inert — full outer shells).' },
                { type: 'example', title: 'Reading an element\'s position', text: 'Sodium (Na, $Z = 11$) sits in period 3, group 1: it has 3 electron shells and 1 valence electron — which it sheds eagerly, making Na explosively reactive in water.' },
                { type: 'callout', kind: 'warning', text: 'Chemistry runs down **columns**, not rows. Neighbors in a period can be wildly different (Na is a soft reactive metal; its period-mate Ar is an inert gas).' }
              ],
              skill: {
                id: 'periodic-table',
                name: 'Reading the periodic table',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Elements in the same GROUP (column) of the periodic table are similar because they have the same…',
                    choices: [
                      { id: 'a', text: 'Atomic mass' },
                      { id: 'b', text: 'Number of electron shells' },
                      { id: 'c', text: 'Number of valence electrons' },
                      { id: 'd', text: 'Number of neutrons' }
                    ],
                    answer: 'c',
                    hint: 'Chemistry happens at the outermost shell.',
                    steps: [
                      'A column shares the same count of outer-shell (valence) electrons.',
                      'Valence electrons control bonding, so group members react alike — all group 1 metals react violently with water.'
                    ],
                    answerText: 'Valence electron count'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which family is famously UNREACTIVE because its members have full outer shells?',
                    choices: [
                      { id: 'a', text: 'Alkali metals' },
                      { id: 'b', text: 'Halogens' },
                      { id: 'c', text: 'Transition metals' },
                      { id: 'd', text: 'Noble gases' }
                    ],
                    answer: 'd',
                    hint: 'They are the rightmost column — group 18.',
                    steps: [
                      'Group 18 (He, Ne, Ar, Kr, Xe, Rn) has complete valence shells.',
                      'With no tendency to gain, lose, or share electrons, they are nearly inert.'
                    ],
                    answerText: 'Noble gases'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where are the metals located on the periodic table?',
                    choices: [
                      { id: 'a', text: 'The left side and center' },
                      { id: 'b', text: 'The far right' },
                      { id: 'c', text: 'Only the bottom row' },
                      { id: 'd', text: 'The staircase line' }
                    ],
                    answer: 'a',
                    hint: 'Nonmetals cluster on the right; metalloids on the staircase.',
                    steps: [
                      'Metals occupy the left and central regions — including alkali, alkaline earth, and transition metals.',
                      'Nonmetals sit at the upper right; metalloids form the staircase between them.'
                    ],
                    answerText: 'Left side and center'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does an element\'s PERIOD number (the row) tell you?',
                    choices: [
                      { id: 'a', text: 'How many valence electrons it has' },
                      { id: 'b', text: 'How many electron shells its atoms have' },
                      { id: 'c', text: 'Whether it is a metal' },
                      { id: 'd', text: 'Its reactivity' }
                    ],
                    answer: 'b',
                    hint: 'Each new row starts filling a new energy level.',
                    steps: [
                      'Period $n$ elements have electrons filling $n$ shells.',
                      'Sodium in period 3 has 3 shells; calcium in period 4 has 4.'
                    ],
                    answerText: 'Number of electron shells'
                  },
                  {
                    type: 'choice',
                    prompt: 'Halogens like fluorine and chlorine sit in group 17. Their high reactivity comes from…',
                    choices: [
                      { id: 'a', text: 'Having full outer shells' },
                      { id: 'b', text: 'Needing just one more electron to fill the outer shell' },
                      { id: 'c', text: 'Being metals that lose electrons' },
                      { id: 'd', text: 'Having the largest atoms' }
                    ],
                    answer: 'b',
                    hint: 'Group 17 = 7 valence electrons.',
                    steps: [
                      'Group 17 elements have 7 valence electrons — one short of a full octet.',
                      'They aggressively grab an electron (often from a metal), which is why NaCl forms so eagerly.'
                    ],
                    answerText: 'One electron short of a full shell'
                  },
                  {
                    type: 'choice',
                    prompt: 'Mendeleev\'s 1869 table is celebrated partly because he…',
                    choices: [
                      { id: 'a', text: 'Discovered the electron' },
                      { id: 'b', text: 'Listed every element that exists today' },
                      { id: 'c', text: 'Left gaps that correctly predicted undiscovered elements' },
                      { id: 'd', text: 'Arranged elements alphabetically' }
                    ],
                    answer: 'c',
                    hint: 'His genius was trusting the pattern over the gaps.',
                    steps: [
                      'Mendeleev ordered elements by mass and recurring properties.',
                      'He left empty slots and predicted the properties of elements like gallium and germanium — later found to match almost exactly.'
                    ],
                    answerText: 'He predicted missing elements'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which element is a metalloid — showing properties of both metals and nonmetals?',
                    choices: [
                      { id: 'a', text: 'Sodium' },
                      { id: 'b', text: 'Silicon' },
                      { id: 'c', text: 'Chlorine' },
                      { id: 'd', text: 'Helium' }
                    ],
                    answer: 'b',
                    hint: 'Think of the element computer chips are made of.',
                    steps: [
                      'Metalloids sit on the staircase line: B, Si, Ge, As, Sb, Te.',
                      'Silicon conducts electricity poorly — a *semi*conductor — the classic metalloid trait.'
                    ],
                    answerText: 'Silicon'
                  }
                ]
              }
            },
            {
              id: 'chemical-bonds',
              title: 'Chemical bonds',
              minutes: 8,
              summary: 'Ionic bonds transfer electrons, covalent bonds share them — both aiming at full outer shells.',
              tags: ['chemistry', 'bonding', 'ionic', 'covalent'],
              blocks: [
                { type: 'p', text: 'Atoms bond to reach a stable electron arrangement — usually eight valence electrons, the **octet rule**. Two main strategies do the job: transferring electrons or sharing them.' },
                { type: 'callout', kind: 'key', text: '**Ionic bonds** form when a metal *transfers* electrons to a nonmetal, creating ions that attract. **Covalent bonds** form when nonmetals *share* electron pairs. **Metallic bonds** pool electrons in a shared "sea" around metal ions.' },
                { type: 'p', text: 'In covalent bonds, atoms can share one pair (single bond), two pairs (double), or three (triple). Water has two single bonds; carbon dioxide has two double bonds ($\\text{O}=\\text{C}=\\text{O}$); nitrogen gas has a triple bond.' },
                { type: 'example', title: 'How NaCl forms', text: 'Sodium (1 valence e⁻) transfers its outer electron to chlorine (7 valence e⁻). Na becomes $\\text{Na}^+$, Cl becomes $\\text{Cl}^-$, and the opposite charges lock together as an ionic crystal — table salt.' },
                { type: 'callout', kind: 'warning', text: 'Covalent compounds contain no ions — atoms share electrons, they do not swap them. And "octet" refers to the *outer* shell only, not the total electron count.' }
              ],
              skill: {
                id: 'chemical-bonds',
                name: 'Ionic vs. covalent bonds',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'An ionic bond forms when…',
                    choices: [
                      { id: 'a', text: 'Two atoms share electron pairs' },
                      { id: 'b', text: 'Electrons are transferred between atoms, and the resulting ions attract' },
                      { id: 'c', text: 'Protons are exchanged between nuclei' },
                      { id: 'd', text: 'Metals pool their electrons' }
                    ],
                    answer: 'b',
                    hint: 'Think NaCl — what happens between the metal and the nonmetal?',
                    steps: [
                      'A metal loses electrons (→ cation); a nonmetal gains them (→ anion).',
                      'The opposite charges attract — that electrostatic attraction IS the ionic bond.'
                    ],
                    answerText: 'Electron transfer + ionic attraction'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which compound is held together by covalent bonds?',
                    choices: [
                      { id: 'a', text: 'NaCl' },
                      { id: 'b', text: 'MgO' },
                      { id: 'c', text: 'H₂O' },
                      { id: 'd', text: 'CaCl₂' }
                    ],
                    answer: 'c',
                    hint: 'Covalent bonds join nonmetals to nonmetals.',
                    steps: [
                      'Covalent bonding = sharing between nonmetals.',
                      'H and O are both nonmetals → water is covalent.',
                      'NaCl, MgO, and CaCl₂ are metal + nonmetal → ionic.'
                    ],
                    answerText: 'H₂O'
                  },
                  {
                    type: 'choice',
                    prompt: 'In a double covalent bond, the two atoms share…',
                    choices: [
                      { id: 'a', text: 'One electron' },
                      { id: 'b', text: 'Two electrons (one pair)' },
                      { id: 'c', text: 'Four electrons (two pairs)' },
                      { id: 'd', text: 'Six electrons (three pairs)' }
                    ],
                    answer: 'c',
                    hint: 'Each bond "line" is one shared pair.',
                    steps: [
                      'A single bond shares 1 pair (2 electrons).',
                      'A double bond shares 2 pairs — 4 electrons total, as in $\\text{O}=\\text{C}=\\text{O}$.'
                    ],
                    answerText: 'Four electrons (two pairs)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Metals conduct electricity and bend without breaking because their bonding features…',
                    choices: [
                      { id: 'a', text: 'Rigid ionic crystals' },
                      { id: 'b', text: 'Directional shared pairs' },
                      { id: 'c', text: 'A "sea" of delocalized electrons flowing past metal cations' },
                      { id: 'd', text: 'Full octets with no free charges' }
                    ],
                    answer: 'c',
                    hint: 'What carries current so well in a copper wire?',
                    steps: [
                      'Metallic bonding releases valence electrons into a mobile "sea".',
                      'Free electrons carry current; non-directional bonding lets layers slide — metals are malleable and conductive.'
                    ],
                    answerText: 'Delocalized electron sea'
                  },
                  {
                    type: 'choice',
                    prompt: 'What drives atoms to form bonds in the first place?',
                    choices: [
                      { id: 'a', text: 'To increase their mass' },
                      { id: 'b', text: 'To reach a stable (usually full) outer electron shell' },
                      { id: 'c', text: 'To reduce the number of protons' },
                      { id: 'd', text: 'To become noble gases' }
                    ],
                    answer: 'b',
                    hint: 'The octet rule describes the destination.',
                    steps: [
                      'Bonding lets atoms gain, lose, or share electrons until the outer shell is filled (8 for most atoms, 2 for H and He).',
                      'A full valence shell is lower-energy and more stable.',
                      'Atoms do not become noble gases — they only copy the noble-gas electron *configuration*.'
                    ],
                    answerText: 'A full outer electron shell'
                  },
                  {
                    type: 'choice',
                    prompt: 'When chlorine gains one electron in the reaction that forms NaCl, it becomes…',
                    choices: [
                      { id: 'a', text: 'Cl⁺, a cation' },
                      { id: 'b', text: 'Cl⁻, an anion' },
                      { id: 'c', text: 'A new element' },
                      { id: 'd', text: 'A noble gas' }
                    ],
                    answer: 'b',
                    hint: 'Gaining a negative particle makes the ion…?',
                    steps: [
                      'Chlorine (7 valence e⁻) gains one electron → 8, filling its octet.',
                      'The extra electron makes it Cl⁻, a negatively charged anion.',
                      'Still chlorine — the proton count is untouched.'
                    ],
                    answerText: 'Cl⁻, an anion'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'reactions',
          title: 'Reactions',
          lessons: [
            {
              id: 'balancing-equations',
              title: 'Balancing chemical equations',
              minutes: 9,
              summary: 'Conservation of mass demands the same atoms on both sides — coefficients do the balancing.',
              tags: ['chemistry', 'reactions', 'equations'],
              blocks: [
                { type: 'p', text: 'A chemical reaction rearranges atoms — it never creates or destroys them. So a valid equation must show the **same number of each element** on both sides of the arrow; an unbalanced equation violates conservation of mass. We fix the counts with **coefficients** written in front of whole formulas, which multiply every atom in that formula.' },
                { type: 'callout', kind: 'key', text: 'You may only change **coefficients** — never the **subscripts** inside a formula. Changing H₂O to H₂O₂ turns water into hydrogen peroxide: a different substance entirely.' },
                { type: 'example', title: 'Balance H₂ + O₂ → H₂O', text: 'Left has 2 O, right has 1. Double the water: H₂ + O₂ → 2H₂O. Now hydrogen is off (2 vs. 4), so double the H₂: **2H₂ + O₂ → 2H₂O** ✓ (4 H and 2 O on each side).' },
                { type: 'p', text: 'A reliable order: balance metals first, then nonmetals, then hydrogen, and oxygen last — because oxygen often appears in several compounds at once. If a coefficient lands as a fraction, double every coefficient to clear it. When finished, verify every element by counting atoms on both sides.' },
                { type: 'example', title: 'Balance CH₄ + O₂ → CO₂ + H₂O', text: 'C is already balanced (1 each). H: 4 left → need 2H₂O. O now totals 4 right → need 2O₂. Result: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$ ✓' }
              ],
              skill: {
                id: 'balancing-equations',
                name: 'Balancing equations',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Balance: N₂ + H₂ → NH₃. What coefficient goes in front of H₂?',
                    choices: [
                      { id: 'a', text: '1' },
                      { id: 'b', text: '2' },
                      { id: 'c', text: '3' },
                      { id: 'd', text: '4' }
                    ],
                    answer: 'c',
                    hint: 'First balance N with 2 NH₃, then count the hydrogens needed.',
                    steps: [
                      'Put 2 in front of NH₃ to balance the 2 N on the left.',
                      'That gives 6 H on the right, so we need 3 H₂ on the left.',
                      'Balanced: N₂ + 3H₂ → 2NH₃ ✓'
                    ],
                    answerText: '3'
                  },
                  {
                    type: 'choice',
                    prompt: 'Balance: Fe + O₂ → Fe₂O₃. What coefficient goes in front of O₂?',
                    choices: [
                      { id: 'a', text: '2' },
                      { id: 'b', text: '3' },
                      { id: 'c', text: '4' },
                      { id: 'd', text: '6' }
                    ],
                    answer: 'b',
                    hint: 'Get the O counts to match with 2 Fe₂O₃ first.',
                    steps: [
                      'Put 2 Fe₂O₃ on the right: that is 6 O atoms.',
                      'To supply 6 O, use 3 O₂ on the left.',
                      'Then balance Fe with 4 Fe: 4Fe + 3O₂ → 2Fe₂O₃ ✓'
                    ],
                    answerText: '3'
                  },
                  {
                    type: 'choice',
                    prompt: 'In the balanced equation CH₄ + ?O₂ → CO₂ + 2H₂O, what is the O₂ coefficient?',
                    choices: [
                      { id: 'a', text: '1' },
                      { id: 'b', text: '2' },
                      { id: 'c', text: '3' },
                      { id: 'd', text: '4' }
                    ],
                    answer: 'b',
                    hint: 'Count total oxygens on the right side.',
                    steps: [
                      'Right side: CO₂ has 2 O, plus 2H₂O has 2 O → 4 O total.',
                      'Each O₂ supplies 2, so the coefficient is $\\frac{4}{2} = 2$.',
                      'Balanced: CH₄ + 2O₂ → CO₂ + 2H₂O ✓'
                    ],
                    answerText: '2'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which of these equations is balanced as written?',
                    choices: [
                      { id: 'a', text: 'H₂ + O₂ → H₂O' },
                      { id: 'b', text: '2Mg + O₂ → 2MgO' },
                      { id: 'c', text: 'CH₄ + O₂ → CO₂ + H₂O' },
                      { id: 'd', text: 'Al + O₂ → Al₂O₃' }
                    ],
                    answer: 'b',
                    hint: 'Count each element on both sides of each option.',
                    steps: [
                      'Option b: 2 Mg and 2 O on each side ✓.',
                      'a fails on oxygen (2 vs 1); c fails on H (4 vs 2) and O; d fails on both counts.'
                    ],
                    answerText: '2Mg + O₂ → 2MgO'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why is changing a SUBSCRIPT (e.g. H₂O → H₂O₂) NOT allowed when balancing?',
                    choices: [
                      { id: 'a', text: 'Subscripts are only decorative' },
                      { id: 'b', text: 'It changes the substance itself — H₂O₂ is hydrogen peroxide, not water' },
                      { id: 'c', text: 'It is allowed, just discouraged' },
                      { id: 'd', text: 'Subscripts only affect liquids' }
                    ],
                    answer: 'b',
                    hint: 'A formula names a specific substance.',
                    steps: [
                      'Subscripts are part of a compound\'s identity.',
                      'Editing them means describing a different reaction — only coefficients may be adjusted.'
                    ],
                    answerText: 'It changes the substances'
                  },
                  {
                    type: 'choice',
                    prompt: 'Balance: Al + O₂ → Al₂O₃. What is the SUM of all coefficients in the balanced equation?',
                    choices: [
                      { id: 'a', text: '5' },
                      { id: 'b', text: '7' },
                      { id: 'c', text: '9' },
                      { id: 'd', text: '12' }
                    ],
                    answer: 'c',
                    hint: 'The balanced equation is 4Al + 3O₂ → 2Al₂O₃.',
                    steps: [
                      'Balance O: lcm of 2 and 3 is 6 → 3O₂ and 2Al₂O₃.',
                      'Balance Al: 4 on the right → 4Al on the left.',
                      'Sum: $4 + 3 + 2 = 9$ ✓'
                    ],
                    answerText: '9'
                  }
                ]
              }
            },
            {
              id: 'moles-and-molar-mass',
              title: 'Moles and molar mass',
              minutes: 9,
              summary: 'The mole connects the atomic scale to the gram scale: 6.022 × 10²³ particles per mole.',
              tags: ['chemistry', 'moles', 'stoichiometry'],
              blocks: [
                { type: 'p', text: 'Atoms are far too small to count one by one, so chemists use the **mole**: $1\\ \\text{mol} = 6.022 \\times 10^{23}$ particles — **Avogadro\'s number**. It is a counting unit like "a dozen", scaled up enormously.' },
                { type: 'callout', kind: 'key', text: '**Molar mass** $M$ (in g/mol) is the mass of one mole of a substance — numerically the same as the atomic or formula mass from the periodic table. The master conversion is $n = \\frac{m}{M}$.' },
                { type: 'example', title: 'Molar mass of water', text: '$M(\\text{H}_2\\text{O}) = 2(1.008) + 16.00 \\approx 18.02\\ \\text{g/mol}$. So $36\\ \\text{g}$ of water is $n = \\frac{36}{18.02} \\approx 2\\ \\text{mol}$ — about $1.2 \\times 10^{24}$ molecules.' },
                { type: 'p', text: 'For a compound, add the atomic masses of all atoms in the formula: $\\text{CO}_2$ gives $12.01 + 2(16.00) = 44.01\\ \\text{g/mol}$. Multiplying moles by Avogadro\'s number converts to particle counts.' },
                { type: 'callout', kind: 'warning', text: 'A mole of feathers and a mole of lead contain the same *number* of particles but wildly different masses — the mole counts particles, not weight.' }
              ],
              skill: {
                id: 'moles-molar-mass',
                name: 'Mole calculations',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'How many moles are in 44 g of CO₂? (Molar mass of CO₂ = 44 g/mol.)',
                    answer: 1,
                    tolerance: 0.001,
                    hint: 'n = m/M.',
                    steps: [
                      '$n = \\frac{m}{M} = \\frac{44\\ \\text{g}}{44\\ \\text{g/mol}}$',
                      '$n = 1\\ \\text{mol}$'
                    ],
                    answerText: '1 mol'
                  },
                  {
                    type: 'numeric',
                    prompt: 'What is the mass, in grams, of 2 mol of water? (Molar mass of H₂O ≈ 18 g/mol.)',
                    answer: 36,
                    tolerance: 0.01,
                    hint: 'Rearrange n = m/M to m = n·M.',
                    steps: [
                      '$m = n \\times M = 2\\ \\text{mol} \\times 18\\ \\text{g/mol}$',
                      '$m = 36\\ \\text{g}$'
                    ],
                    answerText: '36 g'
                  },
                  {
                    type: 'choice',
                    prompt: 'How many particles are in 0.5 mol of a substance?',
                    choices: [
                      { id: 'a', text: '$6.022 \\times 10^{23}$' },
                      { id: 'b', text: '$3.011 \\times 10^{23}$' },
                      { id: 'c', text: '$1.204 \\times 10^{24}$' },
                      { id: 'd', text: '$0.5$' }
                    ],
                    answer: 'b',
                    hint: 'Multiply moles by Avogadro\'s number.',
                    steps: [
                      'Particles $= n \\times N_A$.',
                      '$0.5 \\times 6.022 \\times 10^{23} = 3.011 \\times 10^{23}$ particles.'
                    ],
                    answerText: '3.011 × 10²³ particles'
                  },
                  {
                    type: 'choice',
                    prompt: 'Avogadro\'s number is…',
                    choices: [
                      { id: 'a', text: '$6.022 \\times 10^{23}$' },
                      { id: 'b', text: '$3.00 \\times 10^{8}$' },
                      { id: 'c', text: '$9.8$' },
                      { id: 'd', text: '$1.6 \\times 10^{-19}$' }
                    ],
                    answer: 'a',
                    hint: 'It is the count of particles in one mole.',
                    steps: [
                      '$N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$.',
                      'The other numbers are the speed of light ($3.00 \\times 10^8$ m/s), $g$ (9.8), and the electron charge ($1.6 \\times 10^{-19}$ C).'
                    ],
                    answerText: '6.022 × 10²³'
                  },
                  {
                    type: 'numeric',
                    prompt: 'What is the molar mass of O₂ gas, in g/mol? (Atomic mass of O = 16.)',
                    answer: 32,
                    tolerance: 0.001,
                    hint: 'O₂ has TWO oxygen atoms.',
                    steps: [
                      '$M(\\text{O}_2) = 2 \\times 16\\ \\text{g/mol}$',
                      '$M = 32\\ \\text{g/mol}$'
                    ],
                    answerText: '32 g/mol'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the molar mass of CO₂? (C = 12, O = 16 g/mol.)',
                    choices: [
                      { id: 'a', text: '28 g/mol' },
                      { id: 'b', text: '32 g/mol' },
                      { id: 'c', text: '44 g/mol' },
                      { id: 'd', text: '56 g/mol' }
                    ],
                    answer: 'c',
                    hint: 'Add one carbon and two oxygens.',
                    steps: [
                      '$M = 12 + 2(16) = 12 + 32$',
                      '$M = 44\\ \\text{g/mol}$'
                    ],
                    answerText: '44 g/mol'
                  }
                ]
              }
            },
            {
              id: 'acids-and-bases',
              title: 'Acids and bases',
              minutes: 8,
              summary: 'Acids donate H⁺, bases accept it — and the pH scale keeps score on a 10× ladder.',
              tags: ['chemistry', 'acids', 'bases', 'pH'],
              blocks: [
                { type: 'p', text: 'In the Arrhenius picture, **acids** release $\\text{H}^+$ ions in water (lemon juice, vinegar, stomach acid) and **bases** release $\\text{OH}^-$ or accept $\\text{H}^+$ (soap, baking soda, bleach). Acids taste sour and turn litmus red; bases feel slippery and turn litmus blue.' },
                { type: 'callout', kind: 'key', text: 'pH measures acidity on a log scale: $\\text{pH} = -\\log_{10}[\\text{H}^+]$. Below 7 is acidic, 7 is neutral, above 7 is basic — and **each step is a 10× change** in $\\text{H}^+$ concentration.' },
                { type: 'example', title: 'How much stronger is pH 3 than pH 5?', text: 'pH 3 has $10^{-3}$ mol/L of $\\text{H}^+$; pH 5 has $10^{-5}$. Ratio: $\\frac{10^{-3}}{10^{-5}} = 10^2 = 100$× more acidic.' },
                { type: 'p', text: '**Neutralization** pairs an acid with a base to make salt and water — e.g. $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ — which is how antacid tablets calm stomach acid.' },
                { type: 'list', items: ['Lemon juice: pH ≈ 2', 'Pure water: pH 7', 'Blood: pH ≈ 7.4', 'Household bleach: pH ≈ 13'] },
                { type: 'callout', kind: 'warning', text: 'Diluting a strong acid raises its pH *toward* 7 — it can never pass 7 and become basic, because water adds no excess $\\text{OH}^-$.' }
              ],
              skill: {
                id: 'acids-bases',
                name: 'Acids, bases, and pH',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A solution has a pH of 3. It is…',
                    choices: [
                      { id: 'a', text: 'Basic' },
                      { id: 'b', text: 'Neutral' },
                      { id: 'c', text: 'Acidic' },
                      { id: 'd', text: 'A salt solution' }
                    ],
                    answer: 'c',
                    hint: 'The midpoint of the pH scale is 7.',
                    steps: [
                      'pH < 7 is acidic, pH = 7 neutral, pH > 7 basic.',
                      'pH 3 is well below 7 — acidic.'
                    ],
                    answerText: 'Acidic'
                  },
                  {
                    type: 'choice',
                    prompt: 'An Arrhenius acid is a substance that…',
                    choices: [
                      { id: 'a', text: 'Releases OH⁻ in water' },
                      { id: 'b', text: 'Releases H⁺ in water' },
                      { id: 'c', text: 'Always contains oxygen' },
                      { id: 'd', text: 'Turns litmus blue' }
                    ],
                    answer: 'b',
                    hint: 'Acids are proton (H⁺) sources.',
                    steps: [
                      'Acids increase $\\text{H}^+$ concentration in water — e.g. HCl → H⁺ + Cl⁻.',
                      'Releasing OH⁻ defines an Arrhenius base instead.'
                    ],
                    answerText: 'Releases H⁺ in water'
                  },
                  {
                    type: 'choice',
                    prompt: 'Solution A has pH 4 and solution B has pH 6. How many times greater is the H⁺ concentration of A?',
                    choices: [
                      { id: 'a', text: '2×' },
                      { id: 'b', text: '20×' },
                      { id: 'c', text: '100×' },
                      { id: 'd', text: '1000×' }
                    ],
                    answer: 'c',
                    hint: 'Each pH unit is a factor of 10.',
                    steps: [
                      'pH is logarithmic: each step is a 10× change in $[\\text{H}^+]$.',
                      'Two units (6 − 4 = 2) means $10^2 = 100$×.'
                    ],
                    answerText: '100×'
                  },
                  {
                    type: 'choice',
                    prompt: 'Acid + base → ___ + ___. The products of a neutralization are…',
                    choices: [
                      { id: 'a', text: 'Salt and water' },
                      { id: 'b', text: 'Hydrogen and oxygen gas' },
                      { id: 'c', text: 'A stronger acid' },
                      { id: 'd', text: 'Two salts' }
                    ],
                    answer: 'a',
                    hint: 'HCl + NaOH → ?',
                    steps: [
                      'The $\\text{H}^+$ from the acid and $\\text{OH}^-$ from the base make water.',
                      'The remaining ions (e.g. Na⁺ and Cl⁻) form a salt.',
                      'Example: $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$.'
                    ],
                    answerText: 'Salt and water'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which of these everyday substances is a BASE?',
                    choices: [
                      { id: 'a', text: 'Lemon juice (pH ≈ 2)' },
                      { id: 'b', text: 'Vinegar (pH ≈ 3)' },
                      { id: 'c', text: 'Pure water (pH 7)' },
                      { id: 'd', text: 'Baking soda solution (pH ≈ 8–9)' }
                    ],
                    answer: 'd',
                    hint: 'Bases sit above pH 7.',
                    steps: [
                      'Lemon juice and vinegar are acids (pH < 7).',
                      'Pure water is neutral. Baking soda solution is mildly basic — pH above 7.'
                    ],
                    answerText: 'Baking soda solution'
                  },
                  {
                    type: 'choice',
                    prompt: 'What happens to the pH of a strong acid solution as you add pure water?',
                    choices: [
                      { id: 'a', text: 'It rises toward 7 but cannot exceed 7' },
                      { id: 'b', text: 'It falls below 0' },
                      { id: 'c', text: 'It rises past 7 and becomes basic' },
                      { id: 'd', text: 'It stays exactly the same' }
                    ],
                    answer: 'a',
                    hint: 'Dilution lowers [H⁺] toward that of pure water.',
                    steps: [
                      'Adding water lowers $[\\text{H}^+]$, so pH climbs.',
                      'Pure water caps it at 7 — dilution alone can never produce a base.'
                    ],
                    answerText: 'Rises toward 7'
                  },
                  {
                    type: 'choice',
                    prompt: 'Red litmus paper turns blue when dipped in a solution. The solution is…',
                    choices: [
                      { id: 'a', text: 'Acidic' },
                      { id: 'b', text: 'Neutral' },
                      { id: 'c', text: 'Basic' },
                      { id: 'd', text: 'Impossible to classify' }
                    ],
                    answer: 'c',
                    hint: 'Litmus: red in acid, blue in base.',
                    steps: [
                      'Litmus is a classic indicator: it is red in acid and blue in base.',
                      'Red → blue means the solution is basic.'
                    ],
                    answerText: 'Basic'
                  }
                ]
              }
            },
            {
              id: 'stoichiometry',
              title: 'Stoichiometry: the recipe math of chemistry',
              minutes: 9,
              summary: 'Grams → moles → ratio → moles → grams. A balanced equation is a recipe, and the mole ratio is how you scale it.',
              tags: ['chemistry', 'stoichiometry', 'moles'],
              blocks: [
                { type: 'p', text: 'A balanced equation like $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$ is a **recipe**: 2 molecules of hydrogen plus 1 of oxygen make 2 of water. **Stoichiometry** scales that recipe to real quantities — how many grams of water from 10 g of hydrogen?' },
                { type: 'callout', kind: 'key', text: 'The universal path is **grams → moles → mole ratio → moles → grams**. You cannot compare grams directly — the coefficients count *particles*, and only moles count particles.' },
                { type: 'formula', text: '\\text{mass}_A \\xrightarrow{\\div M_A} \\text{mol}_A \\xrightarrow{\\times\\ \\tfrac{\\text{coef}_B}{\\text{coef}_A}} \\text{mol}_B \\xrightarrow{\\times\\ M_B} \\text{mass}_B' },
                { type: 'example', title: 'Water from hydrogen', text: 'How much O₂ is needed for 4 g of H₂? Step 1, to moles: $4\\ \\text{g} \\div 2\\ \\text{g/mol} = 2$ mol H₂. Step 2, ratio $1:2$: $2 \\times \\frac{1}{2} = 1$ mol O₂. Step 3, back to grams: $1 \\times 32 = 32$ g O₂.' },
                { type: 'callout', kind: 'warning', text: 'The mole ratio uses the equation\'s **coefficients**, not subscripts or masses. In $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, the H₂:O₂ ratio is 2:1 — even though oxygen is 16× heavier per atom.' },
                { type: 'p', text: 'The limiting piece is the **limiting reactant** — the ingredient that runs out first caps how much product forms, exactly like running out of eggs caps a recipe. Compute product from EACH reactant; the smaller answer is what actually forms.' }
              ],
              skill: {
                id: 'stoichiometry',
                name: 'Stoichiometric calculations',
                bank: [
                  {
                    type: 'numeric',
                    prompt: 'For $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$: how many grams of O₂ react with 4 g of H₂? (H₂ = 2 g/mol, O₂ = 32 g/mol)',
                    answer: 32,
                    tolerance: 0.001,
                    hint: 'Grams → moles → ratio → moles → grams.',
                    steps: [
                      '$4\\ \\text{g}\\ \\text{H}_2 \\div 2\\ \\text{g/mol} = 2$ mol H₂.',
                      'Ratio O₂:H₂ is 1:2 → $2 \\times \\frac{1}{2} = 1$ mol O₂.',
                      '$1 \\times 32 = 32$ g O₂.'
                    ],
                    answerText: '32 g'
                  },
                  {
                    type: 'numeric',
                    prompt: '$\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$. How many moles of NH₃ form from 6 mol of H₂ (N₂ unlimited)?',
                    answer: 4,
                    tolerance: 0.001,
                    hint: 'The NH₃:H₂ ratio is 2:3.',
                    steps: [
                      '$6\\ \\text{mol}\\ \\text{H}_2 \\times \\frac{2}{3} = 4$ mol NH₃.',
                      'Already in moles — no gram conversions needed.'
                    ],
                    answerText: '4 mol'
                  },
                  {
                    type: 'choice',
                    prompt: 'In stoichiometry, why convert grams to moles before using the equation\'s coefficients?',
                    choices: [
                      { id: 'a', text: 'Moles are easier to write' },
                      { id: 'b', text: 'Coefficients count particles, and only moles count particles — grams weigh differently per substance' },
                      { id: 'c', text: 'Grams are always wrong' },
                      { id: 'd', text: 'No reason — grams work directly' }
                    ],
                    answer: 'b',
                    hint: 'A gram of hydrogen and a gram of uranium hold wildly different particle counts.',
                    steps: [
                      'Coefficients say "2 molecules H₂ per 1 molecule O₂" — a particle recipe.',
                      'Grams measure mass, not count. The mole bridge (6.022×10²³) converts mass into particle count so the ratio applies.'
                    ],
                    answerText: 'Coefficients count particles; moles count particles'
                  },
                  {
                    type: 'choice',
                    prompt: 'A recipe needs 2 eggs per cake. You have 6 eggs and flour for 10 cakes. The limiting reactant is…',
                    choices: [
                      { id: 'a', text: 'Flour' },
                      { id: 'b', text: 'Eggs — they cap you at 3 cakes' },
                      { id: 'c', text: 'Both equally' },
                      { id: 'd', text: 'Neither' }
                    ],
                    answer: 'b',
                    hint: 'Whichever runs out first wins.',
                    steps: [
                      'Eggs support $6 \\div 2 = 3$ cakes; flour supports 10.',
                      'The smaller capacity limits production — eggs are limiting, flour is in excess.'
                    ],
                    answerText: 'Eggs (cap: 3 cakes)'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'biology-essentials',
      title: 'Biology Essentials',
      subtitle: 'Grades 9–12 · Core',
      summary: 'Life from the inside out: how cells work, how traits pass down, and how populations evolve.',
      units: [
        {
          id: 'cells',
          title: 'Cells',
          lessons: [
            {
              id: 'cell-structure',
              title: 'Cell structure',
              minutes: 8,
              summary: 'Every living thing is made of cells — and each organelle inside does a specialized job.',
              tags: ['biology', 'cells', 'organelles'],
              blocks: [
                { type: 'p', text: '**Cell theory** states that all organisms are made of cells, the cell is the basic unit of life, and new cells come from existing cells. **Prokaryotic** cells (bacteria, archaea) lack a nucleus; **eukaryotic** cells (animals, plants, fungi, protists) keep their DNA inside a membrane-bound **nucleus**.' },
                { type: 'callout', kind: 'key', text: '**Organelles** are specialized structures inside a cell — like organs for a body — each performing one job the cell needs to survive.' },
                { type: 'list', items: ['**Nucleus**: stores DNA; the control center', '**Mitochondria**: run cellular respiration, releasing ATP energy', '**Ribosomes**: build proteins', '**Cell membrane**: selective barrier controlling what enters and exits', '**Cytoplasm**: the gel filling the cell where organelles sit'] },
                { type: 'p', text: 'Plant cells add three structures animal cells lack: a rigid **cell wall** of cellulose for support, **chloroplasts** for photosynthesis, and a large **central vacuole** for water storage and turgor pressure that keeps leaves firm. Fungal cells have walls too, but made of chitin, and no chloroplasts.' },
                { type: 'example', title: 'Cheek cell vs. onion cell', text: 'Your cheek (animal) cell has a membrane and nucleus but no wall or chloroplasts. An onion (plant) cell shows a boxy wall around each cell — shape dictated by cellulose.' },
                { type: 'callout', kind: 'warning', text: 'Plant cells DO have mitochondria — plants respire too. Chloroplasts make sugar; mitochondria still burn it for usable energy.' }
              ],
              skill: {
                id: 'cell-structure',
                name: 'Cell structures and functions',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which organelle stores the cell\'s DNA in eukaryotes?',
                    choices: [
                      { id: 'a', text: 'Ribosome' },
                      { id: 'b', text: 'Nucleus' },
                      { id: 'c', text: 'Mitochondrion' },
                      { id: 'd', text: 'Vacuole' }
                    ],
                    answer: 'b',
                    hint: 'It is often called the "control center".',
                    steps: [
                      'In eukaryotes, DNA is housed inside the membrane-bound nucleus.',
                      'Mitochondria have a little DNA of their own, but the genome lives in the nucleus.'
                    ],
                    answerText: 'The nucleus'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which structures are found in plant cells but NOT in animal cells?',
                    choices: [
                      { id: 'a', text: 'Mitochondria and ribosomes' },
                      { id: 'b', text: 'Nucleus and membrane' },
                      { id: 'c', text: 'Cell wall and chloroplasts' },
                      { id: 'd', text: 'Cytoplasm and vacuoles' }
                    ],
                    answer: 'c',
                    hint: 'Think of what makes a leaf green and a stem stiff.',
                    steps: [
                      'Plants add a cellulose cell wall (support) and chloroplasts (photosynthesis).',
                      'Animal cells lack both. Mitochondria, ribosomes, nucleus, and membrane are shared.'
                    ],
                    answerText: 'Cell wall and chloroplasts'
                  },
                  {
                    type: 'choice',
                    prompt: 'The main job of mitochondria is to…',
                    choices: [
                      { id: 'a', text: 'Store DNA' },
                      { id: 'b', text: 'Make proteins' },
                      { id: 'c', text: 'Digest waste' },
                      { id: 'd', text: 'Release usable energy (ATP) via cellular respiration' }
                    ],
                    answer: 'd',
                    hint: 'They are nicknamed the powerhouse of the cell.',
                    steps: [
                      'Mitochondria run cellular respiration: glucose + O₂ → CO₂ + H₂O + ATP.',
                      'ATP is the energy currency cells spend on work.'
                    ],
                    answerText: 'Producing ATP by respiration'
                  },
                  {
                    type: 'choice',
                    prompt: 'What distinguishes a prokaryotic cell from a eukaryotic one?',
                    choices: [
                      { id: 'a', text: 'It has no cell membrane' },
                      { id: 'b', text: 'It has no nucleus — its DNA floats free' },
                      { id: 'c', text: 'It cannot reproduce' },
                      { id: 'd', text: 'It has chloroplasts' }
                    ],
                    answer: 'b',
                    hint: 'Prokaryote literally means "before the kernel".',
                    steps: [
                      'Prokaryotes (bacteria, archaea) lack a membrane-bound nucleus.',
                      'Their DNA sits in a nucleoid region of the cytoplasm — they still have membranes and ribosomes.'
                    ],
                    answerText: 'No nucleus'
                  },
                  {
                    type: 'choice',
                    prompt: 'Ribosomes are responsible for…',
                    choices: [
                      { id: 'a', text: 'Protein synthesis' },
                      { id: 'b', text: 'Photosynthesis' },
                      { id: 'c', text: 'Pumping water out' },
                      { id: 'd', text: 'Storing genetic information' }
                    ],
                    answer: 'a',
                    hint: 'They translate genetic instructions into molecules that do work.',
                    steps: [
                      'Ribosomes read messenger RNA and link amino acids into proteins.',
                      'Every cell — prokaryote or eukaryote — needs ribosomes to build proteins.'
                    ],
                    answerText: 'Protein synthesis'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is one of the three statements of cell theory?',
                    choices: [
                      { id: 'a', text: 'All cells have a nucleus' },
                      { id: 'b', text: 'New cells arise from pre-existing cells' },
                      { id: 'c', text: 'Cells are the largest unit of life' },
                      { id: 'd', text: 'All cells photosynthesize' }
                    ],
                    answer: 'b',
                    hint: 'The theory covers what cells are and where they come from.',
                    steps: [
                      'Cell theory: all organisms are made of cells; the cell is the basic unit of life; cells come from cells.',
                      'Prokaryotes have no nucleus, so "all cells have a nucleus" is false.'
                    ],
                    answerText: 'Cells come from existing cells'
                  },
                  {
                    type: 'choice',
                    prompt: 'The cell membrane is described as "selectively permeable" because it…',
                    choices: [
                      { id: 'a', text: 'Lets everything through freely' },
                      { id: 'b', text: 'Controls which substances enter and leave the cell' },
                      { id: 'c', text: 'Is completely solid' },
                      { id: 'd', text: 'Only exists in plant cells' }
                    ],
                    answer: 'b',
                    hint: 'Its phospholipid bilayer is picky about passage.',
                    steps: [
                      'The membrane is a phospholipid bilayer studded with transport proteins.',
                      'It admits nutrients and expels waste while blocking many substances — selective permeability.'
                    ],
                    answerText: 'It controls what enters/exits'
                  }
                ]
              }
            },
            {
              id: 'photosynthesis',
              title: 'Photosynthesis',
              minutes: 8,
              summary: 'Plants capture light energy and lock it into sugar — releasing the oxygen we breathe.',
              tags: ['biology', 'photosynthesis', 'energy'],
              blocks: [
                { type: 'p', text: '**Photosynthesis** converts light energy into chemical energy stored in glucose. It runs inside **chloroplasts**, where the green pigment **chlorophyll** absorbs mainly red and blue light — reflecting green, which is why leaves look green.' },
                { type: 'formula', text: '6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2' },
                { type: 'callout', kind: 'key', text: 'Inputs: carbon dioxide + water + light. Outputs: glucose + oxygen. The oxygen in Earth\'s atmosphere — including what you just breathed — was made by photosynthesis.' },
                { type: 'p', text: 'The process has two stages. **Light reactions** on the thylakoid membranes split water, releasing O₂ and building the energy carriers ATP and NADPH. The **Calvin cycle** in the stroma then fixes CO₂ into sugar — "light-independent" but powered by the first stage\'s products.' },
                { type: 'example', title: 'Where does the O₂ come from?', text: 'Isotope-tracing experiments show the oxygen released comes from splitting **water** molecules, not from CO₂: the O in glucose and CO₂ stays in the sugar.' },
                { type: 'callout', kind: 'warning', text: 'Plants do NOT get all their food from the soil — most of a tree\'s mass is built from carbon pulled out of thin air as CO₂. And plants still respire day and night; photosynthesis only runs in light.' }
              ],
              skill: {
                id: 'photosynthesis',
                name: 'Photosynthesis inputs and outputs',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What are the reactants (inputs) of photosynthesis?',
                    choices: [
                      { id: 'a', text: 'Glucose and oxygen' },
                      { id: 'b', text: 'Carbon dioxide, water, and light energy' },
                      { id: 'c', text: 'Nitrogen and sugar' },
                      { id: 'd', text: 'Oxygen and water' }
                    ],
                    answer: 'b',
                    hint: 'Read the equation: what goes on the left of the arrow?',
                    steps: [
                      'Photosynthesis: $6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{light} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$.',
                      'Inputs are CO₂, water, and light; glucose and O₂ are products.'
                    ],
                    answerText: 'CO₂ + water + light'
                  },
                  {
                    type: 'choice',
                    prompt: 'Inside which organelle does photosynthesis take place?',
                    choices: [
                      { id: 'a', text: 'Mitochondrion' },
                      { id: 'b', text: 'Nucleus' },
                      { id: 'c', text: 'Chloroplast' },
                      { id: 'd', text: 'Ribosome' }
                    ],
                    answer: 'c',
                    hint: 'It contains the green pigment chlorophyll.',
                    steps: [
                      'Chloroplasts house chlorophyll and the thylakoid membranes where the light reactions run.',
                      'Mitochondria do the opposite job — respiration.'
                    ],
                    answerText: 'Chloroplast'
                  },
                  {
                    type: 'choice',
                    prompt: 'Chlorophyll appears green because it…',
                    choices: [
                      { id: 'a', text: 'Absorbs green light best' },
                      { id: 'b', text: 'Reflects green light while absorbing red and blue' },
                      { id: 'c', text: 'Emits green light' },
                      { id: 'd', text: 'Uses green light for energy' }
                    ],
                    answer: 'b',
                    hint: 'The color you see is the light NOT absorbed.',
                    steps: [
                      'Pigments look like the wavelengths they reflect.',
                      'Chlorophyll absorbs red and blue strongly; green is reflected to our eyes.'
                    ],
                    answerText: 'Reflects green light'
                  },
                  {
                    type: 'choice',
                    prompt: 'The oxygen released by photosynthesis comes from splitting which molecule?',
                    choices: [
                      { id: 'a', text: 'Carbon dioxide' },
                      { id: 'b', text: 'Glucose' },
                      { id: 'c', text: 'Water' },
                      { id: 'd', text: 'Chlorophyll' }
                    ],
                    answer: 'c',
                    hint: 'The light reactions tear apart a very abundant molecule.',
                    steps: [
                      'In the light reactions, water is split (photolysis): $\\text{H}_2\\text{O} \\rightarrow \\text{H}^+ + \\text{O}_2$.',
                      'The O₂ we breathe is liberated from water, not from CO₂.'
                    ],
                    answerText: 'Water'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where does the Calvin cycle — the carbon-fixing stage — occur?',
                    choices: [
                      { id: 'a', text: 'On the thylakoid membranes' },
                      { id: 'b', text: 'In the stroma of the chloroplast' },
                      { id: 'c', text: 'In the cytoplasm' },
                      { id: 'd', text: 'In the mitochondria' }
                    ],
                    answer: 'b',
                    hint: 'The fluid-filled space around the thylakoids.',
                    steps: [
                      'Light reactions run on the thylakoid membranes.',
                      'The Calvin cycle runs in the stroma — the chloroplast\'s fluid interior — where CO₂ is fixed into sugar.'
                    ],
                    answerText: 'The stroma'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the main purpose of photosynthesis for the plant?',
                    choices: [
                      { id: 'a', text: 'To produce oxygen for animals' },
                      { id: 'b', text: 'To absorb water from air' },
                      { id: 'c', text: 'To convert light energy into stored chemical energy (glucose)' },
                      { id: 'd', text: 'To cool the leaf' }
                    ],
                    answer: 'c',
                    hint: 'Oxygen is a byproduct — what does the plant keep?',
                    steps: [
                      'Photosynthesis stores light energy in the bonds of glucose.',
                      'The plant later burns that glucose in respiration; O₂ release is incidental (but lucky for us).'
                    ],
                    answerText: 'Making glucose from light'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement about plants is correct?',
                    choices: [
                      { id: 'a', text: 'Plants only photosynthesize and never respire' },
                      { id: 'b', text: 'Plants respire only at night' },
                      { id: 'c', text: 'Plants respire day and night, and photosynthesize only in light' },
                      { id: 'd', text: 'Plants get most of their mass from the soil' }
                    ],
                    answer: 'c',
                    hint: 'Respiration supplies ATP — would a plant only need energy at night?',
                    steps: [
                      'Cells need ATP around the clock, so plant mitochondria respire continuously.',
                      'Photosynthesis needs light, so it runs only when illuminated — in daylight it typically outpaces respiration.',
                      'And most plant mass comes from CO₂, not soil minerals.'
                    ],
                    answerText: 'Respire always, photosynthesize in light'
                  }
                ]
              }
            },
            {
              id: 'cellular-respiration',
              title: 'Cellular respiration',
              minutes: 8,
              summary: 'Cells harvest the energy in glucose, step by step, to make the ATP that powers life.',
              tags: ['biology', 'respiration', 'ATP', 'mitochondria'],
              blocks: [
                { type: 'p', text: '**Cellular respiration** transfers energy from glucose to **ATP** — the molecule cells actually spend. With oxygen available, aerobic respiration runs the full pathway:' },
                { type: 'formula', text: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{ATP}' },
                { type: 'callout', kind: 'key', text: 'Three stages: **glycolysis** (cytoplasm — splits glucose into pyruvate, nets 2 ATP), the **Krebs cycle** (mitochondrial matrix — releases CO₂, loads energy carriers), and the **electron transport chain** (inner membrane — makes the bulk of the ATP).' },
                { type: 'p', text: 'Aerobic respiration yields roughly 30–32 ATP per glucose — a huge return. Without oxygen, cells switch to **fermentation**, which skips the mitochondria entirely: muscles produce lactic acid, yeast produces ethanol and CO₂ — but only the 2 ATP from glycolysis.' },
                { type: 'example', title: 'Fermentation at work', text: 'Yeast in dough ferments sugars: the CO₂ bubbles make bread rise and the ethanol bakes off. Your burning muscles after a sprint? Lactic acid fermentation keeping up when O₂ runs short.' },
                { type: 'callout', kind: 'warning', text: 'Breathing and cellular respiration are different things: breathing exchanges gases at the lungs; cellular respiration is the chemistry inside every cell that turns glucose into ATP.' }
              ],
              skill: {
                id: 'cellular-respiration',
                name: 'Cellular respiration',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is the main purpose of cellular respiration?',
                    choices: [
                      { id: 'a', text: 'To make glucose' },
                      { id: 'b', text: 'To produce ATP — usable cellular energy' },
                      { id: 'c', text: 'To absorb oxygen for fun' },
                      { id: 'd', text: 'To produce light' }
                    ],
                    answer: 'b',
                    hint: 'Think of the molecule that powers cellular work.',
                    steps: [
                      'Respiration transfers energy stored in glucose into ATP.',
                      'ATP then powers muscle contraction, transport, synthesis — everything cells do.'
                    ],
                    answerText: 'Producing ATP'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where does glycolysis — the first stage of respiration — occur?',
                    choices: [
                      { id: 'a', text: 'In the mitochondrial matrix' },
                      { id: 'b', text: 'On the inner mitochondrial membrane' },
                      { id: 'c', text: 'In the cytoplasm' },
                      { id: 'd', text: 'Inside the nucleus' }
                    ],
                    answer: 'c',
                    hint: 'It is the only stage that does NOT need mitochondria.',
                    steps: [
                      'Glycolysis splits glucose into pyruvate in the cytoplasm — no organelles required.',
                      'That is why even bacteria (no mitochondria) can do it.'
                    ],
                    answerText: 'The cytoplasm'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which stage of aerobic respiration produces the MOST ATP?',
                    choices: [
                      { id: 'a', text: 'Glycolysis' },
                      { id: 'b', text: 'The Krebs (citric acid) cycle' },
                      { id: 'c', text: 'The electron transport chain' },
                      { id: 'd', text: 'Fermentation' }
                    ],
                    answer: 'c',
                    hint: 'It runs on the inner mitochondrial membrane with oxygen as the final acceptor.',
                    steps: [
                      'Glycolysis nets ~2 ATP; the Krebs cycle mostly loads carriers.',
                      'The electron transport chain uses O₂ and those carriers to make the great majority of the ~30–32 ATP.'
                    ],
                    answerText: 'Electron transport chain'
                  },
                  {
                    type: 'choice',
                    prompt: 'During intense exercise, muscles run short of O₂ and switch to fermentation. The product that builds up is…',
                    choices: [
                      { id: 'a', text: 'Ethanol' },
                      { id: 'b', text: 'Lactic acid' },
                      { id: 'c', text: 'Oxygen' },
                      { id: 'd', text: 'Glucose' }
                    ],
                    answer: 'b',
                    hint: 'It is what makes muscles burn after a sprint.',
                    steps: [
                      'Human muscle cells perform lactic acid fermentation when O₂ is scarce.',
                      'Yeast instead makes ethanol + CO₂ — that is alcoholic fermentation.'
                    ],
                    answerText: 'Lactic acid'
                  },
                  {
                    type: 'choice',
                    prompt: 'How does the ATP yield of fermentation compare to aerobic respiration per glucose?',
                    choices: [
                      { id: 'a', text: 'Far less — about 2 ATP vs ~30–32' },
                      { id: 'b', text: 'About the same' },
                      { id: 'c', text: 'Fermentation makes more ATP' },
                      { id: 'd', text: 'Fermentation makes zero ATP' }
                    ],
                    answer: 'a',
                    hint: 'Fermentation only includes glycolysis.',
                    steps: [
                      'Fermentation keeps only the 2 net ATP from glycolysis.',
                      'Aerobic respiration extracts ~30–32 ATP total by finishing glucose breakdown in the mitochondria.'
                    ],
                    answerText: '≈ 2 vs ~30–32 ATP'
                  },
                  {
                    type: 'choice',
                    prompt: 'What are the waste PRODUCTS of aerobic cellular respiration?',
                    choices: [
                      { id: 'a', text: 'Oxygen and glucose' },
                      { id: 'b', text: 'Carbon dioxide and water' },
                      { id: 'c', text: 'Lactic acid and ethanol' },
                      { id: 'd', text: 'Nitrogen and methane' }
                    ],
                    answer: 'b',
                    hint: 'You exhale both of them.',
                    steps: [
                      'Respiration: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{ATP}$.',
                      'The CO₂ you breathe out was made inside your mitochondria.'
                    ],
                    answerText: 'CO₂ and water'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why is yeast fermentation essential to baking bread?',
                    choices: [
                      { id: 'a', text: 'It makes the dough sweet' },
                      { id: 'b', text: 'The CO₂ produced forms bubbles that make the dough rise' },
                      { id: 'c', text: 'It sterilizes the flour' },
                      { id: 'd', text: 'It releases oxygen into the dough' }
                    ],
                    answer: 'b',
                    hint: 'Alcoholic fermentation has two products — one is a gas.',
                    steps: [
                      'Yeast fermentation: glucose → ethanol + CO₂ + 2 ATP.',
                      'CO₂ gas inflates bubbles in the dough; the ethanol evaporates during baking.'
                    ],
                    answerText: 'CO₂ makes dough rise'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'genetics',
          title: 'Genetics',
          lessons: [
            {
              id: 'dna-and-replication',
              title: 'DNA and replication',
              minutes: 9,
              summary: 'DNA is a double helix of base pairs — and it copies itself one old strand, one new strand at a time.',
              tags: ['biology', 'DNA', 'genetics'],
              blocks: [
                { type: 'p', text: '**DNA** is a **double helix**: two strands twisted together, each built from a sugar-phosphate backbone carrying one of four bases — adenine (A), thymine (T), guanine (G), cytosine (C). Watson and Crick described the structure in 1953 using Rosalind Franklin\'s X-ray diffraction data (the famous Photo 51).' },
                { type: 'callout', kind: 'key', text: 'Base pairing is strict: **A pairs with T** (two hydrogen bonds), **G pairs with C** (three). Because the rules never vary, each strand fully determines its partner — the secret to faithful copying.' },
                { type: 'p', text: 'Before a cell divides, **replication** copies the whole genome. **Helicase** unzips the helix, and **DNA polymerase** builds a new complementary strand on each exposed template, always extending in the 5′→3′ direction — continuously on the leading strand, in Okazaki fragments on the lagging strand.' },
                { type: 'example', title: 'Complement a strand', text: 'Template ATGCC → complement TACGG (A→T, T→A, G→C, C→C, C→G).' },
                { type: 'callout', kind: 'warning', text: 'Replication is **semiconservative**: each daughter molecule keeps ONE old strand plus one new strand — not two old strands in one molecule and two new in the other.' }
              ],
              skill: {
                id: 'dna-replication',
                name: 'DNA structure and replication',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'In DNA, adenine (A) always pairs with…',
                    choices: [
                      { id: 'a', text: 'Guanine (G)' },
                      { id: 'b', text: 'Cytosine (C)' },
                      { id: 'c', text: 'Thymine (T)' },
                      { id: 'd', text: 'Uracil (U)' }
                    ],
                    answer: 'c',
                    hint: 'A–T and G–C. Uracil belongs to RNA.',
                    steps: [
                      'Strict pairing: A with T, G with C.',
                      'Uracil replaces thymine in RNA — it is not in DNA.'
                    ],
                    answerText: 'Thymine'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the complementary strand for the template sequence GCTA?',
                    choices: [
                      { id: 'a', text: 'GCTA' },
                      { id: 'b', text: 'CGAT' },
                      { id: 'c', text: 'CGAU' },
                      { id: 'd', text: 'TAGC' }
                    ],
                    answer: 'b',
                    hint: 'Replace each base with its partner: G→C, C→G, T→A, A→T.',
                    steps: [
                      'G→C, C→G, T→A, A→T.',
                      'So GCTA pairs with CGAT.'
                    ],
                    answerText: 'CGAT'
                  },
                  {
                    type: 'choice',
                    prompt: 'What holds the two strands of the double helix together?',
                    choices: [
                      { id: 'a', text: 'Covalent bonds between sugars' },
                      { id: 'b', text: 'Hydrogen bonds between base pairs' },
                      { id: 'c', text: 'Ionic bonds between phosphates' },
                      { id: 'd', text: 'Protein glue' }
                    ],
                    answer: 'b',
                    hint: 'The rungs of the ladder are weak enough to unzip.',
                    steps: [
                      'Bases on opposite strands hydrogen-bond: A–T with 2 bonds, G–C with 3.',
                      'Weak H-bonds let helicase unzip the strands during replication.'
                    ],
                    answerText: 'Hydrogen bonds between bases'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which enzyme unzips the DNA double helix during replication?',
                    choices: [
                      { id: 'a', text: 'DNA polymerase' },
                      { id: 'b', text: 'Ligase' },
                      { id: 'c', text: 'Helicase' },
                      { id: 'd', text: 'Ribosome' }
                    ],
                    answer: 'c',
                    hint: 'Its name says what it does to the helix.',
                    steps: [
                      'Helicase breaks the hydrogen bonds and unwinds the double helix.',
                      'DNA polymerase then adds complementary nucleotides to each template strand.'
                    ],
                    answerText: 'Helicase'
                  },
                  {
                    type: 'choice',
                    prompt: '"Semiconservative" replication means each new DNA molecule has…',
                    choices: [
                      { id: 'a', text: 'Two brand-new strands' },
                      { id: 'b', text: 'Two old strands' },
                      { id: 'c', text: 'One old strand and one new strand' },
                      { id: 'd', text: 'A mix of fragments on both strands' }
                    ],
                    answer: 'c',
                    hint: '"Semi" = half conserved.',
                    steps: [
                      'Each template strand guides one new complementary strand.',
                      'Every daughter molecule is half old, half new — confirmed by the Meselson–Stahl experiment (1958).'
                    ],
                    answerText: 'One old + one new strand'
                  },
                  {
                    type: 'choice',
                    prompt: 'DNA polymerase can only add nucleotides in which direction?',
                    choices: [
                      { id: 'a', text: '3′→5′' },
                      { id: 'b', text: '5′→3′' },
                      { id: 'c', text: 'Either direction equally' },
                      { id: 'd', text: 'Only on the lagging strand' }
                    ],
                    answer: 'b',
                    hint: 'It always extends the 3′ end of a growing strand.',
                    steps: [
                      'Polymerase adds nucleotides to the free 3′-OH, so synthesis runs 5′→3′.',
                      'Because the two strands are antiparallel, this forces the lagging strand to grow in fragments.'
                    ],
                    answerText: '5′→3′'
                  },
                  {
                    type: 'choice',
                    prompt: 'Whose X-ray diffraction work (Photo 51) was crucial evidence for the double helix?',
                    choices: [
                      { id: 'a', text: 'Rosalind Franklin' },
                      { id: 'b', text: 'Barbara McClintock' },
                      { id: 'c', text: 'Marie Curie' },
                      { id: 'd', text: 'Gregor Mendel' }
                    ],
                    answer: 'a',
                    hint: 'She worked at King\'s College London and died in 1958.',
                    steps: [
                      'Franklin\'s Photo 51 revealed the helix\'s dimensions.',
                      'Watson and Crick used it to build their 1953 model — Franklin died before the 1962 Nobel was awarded.'
                    ],
                    answerText: 'Rosalind Franklin'
                  }
                ]
              }
            },
            {
              id: 'heredity-and-punnett-squares',
              title: 'Heredity and Punnett squares',
              minutes: 9,
              summary: 'Genes come in versions (alleles) — and a 2×2 grid predicts how they combine in offspring.',
              tags: ['biology', 'genetics', 'heredity', 'Punnett'],
              blocks: [
                { type: 'p', text: 'A **gene** is a DNA segment coding for a trait; **alleles** are its different versions. Your **genotype** is the pair of alleles you carry; your **phenotype** is the trait that shows up. Gregor Mendel worked out the rules in the 1860s by cross-breeding pea plants — decades before DNA was known.' },
                { type: 'callout', kind: 'key', text: 'A **dominant** allele (written capital, B) masks a **recessive** one (b) in the heterozygote. **Homozygous** means two identical alleles (BB or bb); **heterozygous** means mixed (Bb).' },
                { type: 'p', text: 'A **Punnett square** lays each parent\'s possible gametes along the edges and fills in the combinations — giving the probability of each genotype in the offspring.' },
                { type: 'example', title: 'Cross two heterozygotes: Bb × Bb', text: 'Offspring: $\\frac{1}{4}$ BB, $\\frac{2}{4}$ Bb, $\\frac{1}{4}$ bb — a 1:2:1 genotype ratio. Since B is dominant, phenotypes come out **3 dominant : 1 recessive**.' },
                { type: 'example', title: 'Cross a heterozygote with a recessive: Bb × bb', text: 'Offspring: $\\frac{1}{2}$ Bb (dominant phenotype) and $\\frac{1}{2}$ bb (recessive) — a 1:1 split. This "test cross" reveals whether a dominant-looking parent carries a hidden recessive.' },
                { type: 'callout', kind: 'warning', text: 'Dominant ≠ common or better — it only means "shows in heterozygotes". Huntington\'s disease is caused by a dominant allele, yet it is rare.' }
              ],
              skill: {
                id: 'punnett-squares',
                name: 'Punnett square genetics',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A pea plant has genotype Bb, where B (purple flowers) is dominant over b (white). Its phenotype is…',
                    choices: [
                      { id: 'a', text: 'White flowers' },
                      { id: 'b', text: 'Purple flowers' },
                      { id: 'c', text: 'Half purple, half white' },
                      { id: 'd', text: 'Cannot be determined' }
                    ],
                    answer: 'b',
                    hint: 'One dominant allele is enough.',
                    steps: [
                      'B is dominant, so Bb shows the dominant phenotype.',
                      'The recessive b is carried silently — it only shows as bb.'
                    ],
                    answerText: 'Purple flowers'
                  },
                  {
                    type: 'choice',
                    prompt: 'Two heterozygotes are crossed: Bb × Bb. What fraction of offspring are expected to be homozygous recessive (bb)?',
                    choices: [
                      { id: 'a', text: '1/4 (25%)' },
                      { id: 'b', text: '1/2 (50%)' },
                      { id: 'c', text: '3/4 (75%)' },
                      { id: 'd', text: '0' }
                    ],
                    answer: 'a',
                    hint: 'Fill the 2×2 grid: each parent gives B or b.',
                    steps: [
                      'Each parent contributes B or b with equal chance.',
                      'The four squares: BB, Bb, Bb, bb.',
                      'bb appears in 1 of 4 boxes = 25%.'
                    ],
                    answerText: '1/4 (25%)'
                  },
                  {
                    type: 'choice',
                    prompt: 'An organism\'s GENOTYPE refers to…',
                    choices: [
                      { id: 'a', text: 'The trait it displays' },
                      { id: 'b', text: 'The pair of alleles it carries' },
                      { id: 'c', text: 'Its physical appearance' },
                      { id: 'd', text: 'Its chromosome count' }
                    ],
                    answer: 'b',
                    hint: 'Geno-type = the gene type, not the visible type.',
                    steps: [
                      'Genotype = the allele combination (BB, Bb, or bb).',
                      'Phenotype = the observable trait those alleles produce.'
                    ],
                    answerText: 'Its allele combination'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which genotype is heterozygous?',
                    choices: [
                      { id: 'a', text: 'BB' },
                      { id: 'b', text: 'bb' },
                      { id: 'c', text: 'Bb' },
                      { id: 'd', text: 'b' }
                    ],
                    answer: 'c',
                    hint: '"Hetero" means different.',
                    steps: [
                      'Homozygous = two identical alleles (BB or bb).',
                      'Heterozygous = one of each: Bb.',
                      'A single b is a gamete\'s allele, not a genotype.'
                    ],
                    answerText: 'Bb'
                  },
                  {
                    type: 'choice',
                    prompt: 'A Bb parent is crossed with a bb parent. What fraction of offspring show the recessive phenotype?',
                    choices: [
                      { id: 'a', text: '25%' },
                      { id: 'b', text: '50%' },
                      { id: 'c', text: '75%' },
                      { id: 'd', text: '100%' }
                    ],
                    answer: 'b',
                    hint: 'The bb parent can only pass on b.',
                    steps: [
                      'Squares: Bb, Bb, bb, bb.',
                      'Half the offspring are bb → 50% show the recessive trait.',
                      'This Bb × bb pairing is the classic test cross.'
                    ],
                    answerText: '50%'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement about dominant vs. recessive alleles is TRUE?',
                    choices: [
                      { id: 'a', text: 'Dominant alleles are always more common in a population' },
                      { id: 'b', text: 'Recessive alleles are destroyed by dominant ones' },
                      { id: 'c', text: 'A recessive trait can only appear when both alleles are recessive' },
                      { id: 'd', text: 'Dominant traits are always healthier' }
                    ],
                    answer: 'c',
                    hint: 'Think of what bb means for a heterozygous carrier.',
                    steps: [
                      'In a heterozygote (Bb), only the dominant allele\'s trait shows.',
                      'The recessive allele is hidden, not destroyed — it resurfaces in bb offspring.',
                      'Dominance says nothing about frequency or fitness.'
                    ],
                    answerText: 'Recessive shows only when homozygous'
                  },
                  {
                    type: 'choice',
                    prompt: 'Gregor Mendel discovered the basic rules of inheritance by experimenting with…',
                    choices: [
                      { id: 'a', text: 'Fruit flies' },
                      { id: 'b', text: 'Pea plants' },
                      { id: 'c', text: 'Mice' },
                      { id: 'd', text: 'Bacteria' }
                    ],
                    answer: 'b',
                    hint: 'He was a monk with a monastery garden in the 1860s.',
                    steps: [
                      'Mendel cross-bred pea plants and counted traits across generations.',
                      'His ratios (3:1, 1:1) revealed dominant/recessive inheritance — published 1866, ignored until ~1900.'
                    ],
                    answerText: 'Pea plants'
                  }
                ]
              }
            },
            {
              id: 'evolution-natural-selection',
              title: 'Evolution by natural selection',
              minutes: 9,
              summary: 'Populations change over generations because the best-adapted individuals leave more offspring.',
              tags: ['biology', 'evolution', 'natural selection', 'Darwin'],
              blocks: [
                { type: 'p', text: '**Evolution** is the change in heritable traits within a *population* over generations. Charles Darwin laid out the mechanism in *On the Origin of Species* (1859): **natural selection**.' },
                { type: 'callout', kind: 'key', text: 'Three ingredients: **variation** (individuals differ heritably), **overproduction** (more offspring are born than survive), and **differential success** (the best-adapted leave more offspring). Favorable traits then spread through the population.' },
                { type: 'p', text: '**Fitness** means reproductive success, not strength — a camouflaged moth can be fitter than a faster one. Traits that boost survival or reproduction become more common each generation; over long spans, populations accumulate **adaptations**.' },
                { type: 'example', title: 'The peppered moth', text: 'In polluted 19th-century England, dark moths were better camouflaged on soot-darkened bark than peppered ones — so dark morphs surged from rare to ~98% of the population near Manchester. When clean-air laws lightened the trees, the trend reversed.' },
                { type: 'p', text: 'Supporting evidence converges from fossils (transitional forms like *Tiktaalik*), homologous structures (same bones in a bat wing and a whale flipper), DNA similarity between related species, and fast modern cases like antibiotic resistance.' },
                { type: 'callout', kind: 'warning', text: 'Individuals do not evolve — **populations** do. And mutations are not summoned by need: a bacterium does not "try" to resist antibiotics; random variation exists first, selection then filters it.' }
              ],
              skill: {
                id: 'natural-selection',
                name: 'Natural selection',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Natural selection acts on…',
                    choices: [
                      { id: 'a', text: 'Genes inside a single cell' },
                      { id: 'b', text: 'Heritable variation among individuals in a population' },
                      { id: 'c', text: 'Acquired traits learned during life' },
                      { id: 'd', text: 'Only the strongest individuals' }
                    ],
                    answer: 'b',
                    hint: 'Selection needs differences that can be passed to offspring.',
                    steps: [
                      'Selection requires heritable variation — traits must be transmissible.',
                      'Individuals with advantageous variants leave more offspring, shifting the population.'
                    ],
                    answerText: 'Heritable variation'
                  },
                  {
                    type: 'choice',
                    prompt: 'In evolutionary biology, "fitness" means…',
                    choices: [
                      { id: 'a', text: 'Physical strength' },
                      { id: 'b', text: 'Speed' },
                      { id: 'c', text: 'Reproductive success — leaving more surviving offspring' },
                      { id: 'd', text: 'Longevity' }
                    ],
                    answer: 'c',
                    hint: 'Evolution counts descendants, not gym stats.',
                    steps: [
                      'A trait is "fit" if it increases the number of surviving offspring.',
                      'A slow, well-camouflaged animal can outscore a fast, visible one.'
                    ],
                    answerText: 'Reproductive success'
                  },
                  {
                    type: 'choice',
                    prompt: 'Antibiotic resistance in bacteria is best explained by…',
                    choices: [
                      { id: 'a', text: 'Bacteria mutating on purpose to survive' },
                      { id: 'b', text: 'The antibiotic teaching bacteria to resist' },
                      { id: 'c', text: 'Random resistant variants surviving and multiplying after the antibiotic kills the rest' },
                      { id: 'd', text: 'Bacteria growing thicker cell walls by choice' }
                    ],
                    answer: 'c',
                    hint: 'The variation existed before the drug arrived.',
                    steps: [
                      'Mutations arise randomly — a few bacteria may already resist the drug.',
                      'The antibiotic is the selector: it kills susceptible cells, leaving resistant ones to multiply.',
                      'Evolution filters existing variation; it does not create it on demand.'
                    ],
                    answerText: 'Selection of pre-existing resistance'
                  },
                  {
                    type: 'choice',
                    prompt: 'Darwin\'s book laying out the theory of natural selection was published in…',
                    choices: [
                      { id: 'a', text: '1687' },
                      { id: 'b', text: '1776' },
                      { id: 'c', text: '1859' },
                      { id: 'd', text: '1905' }
                    ],
                    answer: 'c',
                    hint: 'Same decade as the American Civil War\'s eve.',
                    steps: [
                      '*On the Origin of Species* appeared in 1859.',
                      'Darwin had gathered evidence on the HMS Beagle voyage (1831–1836) and spent two decades refining the theory.'
                    ],
                    answerText: '1859'
                  },
                  {
                    type: 'choice',
                    prompt: 'A bat\'s wing and a whale\'s flipper share the same underlying bone pattern. This is evidence of…',
                    choices: [
                      { id: 'a', text: 'Identical lifestyles' },
                      { id: 'b', text: 'Homologous structures inherited from a common ancestor' },
                      { id: 'c', text: 'Random coincidence' },
                      { id: 'd', text: 'Different evolutionary paths with no link' }
                    ],
                    answer: 'b',
                    hint: 'Same parts, different jobs.',
                    steps: [
                      'Homologous structures share an ancestral plan modified for different uses.',
                      'A shared skeleton plan in wing, flipper, and arm points to common descent.'
                    ],
                    answerText: 'Common ancestry (homology)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement about evolution is CORRECT?',
                    choices: [
                      { id: 'a', text: 'Individuals evolve during their lifetime' },
                      { id: 'b', text: 'Populations evolve across generations' },
                      { id: 'c', text: 'Evolution has a goal of perfection' },
                      { id: 'd', text: 'Traits acquired by exercise are inherited' }
                    ],
                    answer: 'b',
                    hint: 'Evolution is measured in allele frequencies across a population.',
                    steps: [
                      'Individuals keep their genes for life; only populations\' allele frequencies change.',
                      'Evolution has no goal — it rewards whatever works now, not perfection.'
                    ],
                    answerText: 'Populations evolve'
                  },
                  {
                    type: 'choice',
                    prompt: 'Dark-colored peppered moths became common in polluted industrial England mainly because…',
                    choices: [
                      { id: 'a', text: 'Soot turned their wings dark' },
                      { id: 'b', text: 'They ate coal particles' },
                      { id: 'c', text: 'Dark moths were better camouflaged on soot-darkened trees and were eaten less' },
                      { id: 'd', text: 'Dark pigment is always dominant' }
                    ],
                    answer: 'c',
                    hint: 'Who eats moths, and what do they see?',
                    steps: [
                      'Soot darkened tree bark, so light moths stood out to birds.',
                      'Dark morphs survived more, reproduced more — the population shifted.',
                      'The dark color was heritable, not painted on by soot.'
                    ],
                    answerText: 'Better camouflage → more survivors'
                  }
                ]
              }
            },
            {
              id: 'protein-synthesis',
              title: 'Protein synthesis: DNA to protein',
              minutes: 8,
              summary: 'The central dogma: DNA is transcribed to mRNA in the nucleus, then translated codon-by-codon into a protein at the ribosome.',
              tags: ['biology', 'genetics', 'proteins'],
              blocks: [
                { type: 'p', text: 'Genes do nothing until they are **expressed**. The journey from gene to working molecule follows the **central dogma**: DNA is *transcribed* into a messenger RNA copy, and that mRNA is *translated* into a chain of amino acids — a protein.' },
                { type: 'callout', kind: 'key', text: '**Transcription** happens in the nucleus: the enzyme RNA polymerase reads a DNA strand and builds a complementary mRNA, swapping T for U (RNA uses uracil instead of thymine). The mRNA then exits to the cytoplasm.' },
                { type: 'callout', kind: 'key', text: '**Translation** happens at the ribosome: the mRNA is read three bases at a time — each three-letter **codon** specifies one amino acid. tRNA molecules deliver the matching amino acids, which link into a growing protein chain.' },
                { type: 'formula', text: '\\text{DNA} \\xrightarrow{\\text{transcription}} \\text{mRNA} \\xrightarrow{\\text{translation}} \\text{protein}' },
                { type: 'example', title: 'Read a short gene', text: 'DNA template strand **TAC AAA GGT** transcribes to mRNA **AUG UUU CCA** (A↔U, T↔A, G↔C). AUG is the universal **start codon** (methionine), UUU codes phenylalanine, CCA codes proline — the ribosome builds Met–Phe–Pro.' },
                { type: 'list', items: ['1. Transcription: RNA polymerase copies one gene into mRNA', '2. Processing: the mRNA is edited and exported from the nucleus', '3. Translation: ribosome reads codons, tRNA brings amino acids', '4. Folding: the amino acid chain folds into a working protein'] },
                { type: 'callout', kind: 'warning', text: 'A single **point mutation** changes one codon, which can swap one amino acid — usually harmless, occasionally devastating. Sickle-cell disease traces to exactly one such substitution: GAG (glutamate) → GUG (valine) in the hemoglobin gene.' }
              ],
              skill: {
                id: 'protein-synthesis',
                name: 'Trace DNA → mRNA → protein',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A DNA template strand reads TAC. What mRNA codon is transcribed from it?',
                    choices: [
                      { id: 'a', text: 'ATG' },
                      { id: 'b', text: 'TAC' },
                      { id: 'c', text: 'AUG' },
                      { id: 'd', text: 'UAC' }
                    ],
                    answer: 'c',
                    hint: 'Pair each base — and remember RNA uses U, not T.',
                    steps: [
                      'Base pairing: T→A, A→U, C→G.',
                      'TAC transcribes to AUG — conveniently, the start codon.'
                    ],
                    answerText: 'AUG'
                  },
                  {
                    type: 'choice',
                    prompt: 'One codon — one amino acid — is made of how many mRNA bases?',
                    choices: [
                      { id: 'a', text: '1' },
                      { id: 'b', text: '2' },
                      { id: 'c', text: '3' },
                      { id: 'd', text: '4' }
                    ],
                    answer: 'c',
                    hint: '4 bases must encode 20 amino acids — how many per group?',
                    steps: [
                      'Singles give only 4 codes; pairs give $4^2 = 16$ — not enough for 20 amino acids.',
                      'Triplets give $4^3 = 64$ codes — enough, with redundancy. Codons are 3 bases.'
                    ],
                    answerText: '3 bases'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where in the cell does translation occur?',
                    choices: [
                      { id: 'a', text: 'In the nucleus' },
                      { id: 'b', text: 'At the ribosome in the cytoplasm' },
                      { id: 'c', text: 'In the mitochondria only' },
                      { id: 'd', text: 'On the cell membrane' }
                    ],
                    answer: 'b',
                    hint: 'mRNA has to leave the nucleus first.',
                    steps: [
                      'Transcription is nuclear; translation is not.',
                      'mRNA exits to the cytoplasm, where ribosomes read it codon by codon.'
                    ],
                    answerText: 'the ribosome'
                  },
                  {
                    type: 'choice',
                    prompt: 'The codon AUG is special because it…',
                    choices: [
                      { id: 'a', text: 'stops the protein chain' },
                      { id: 'b', text: 'codes for the final amino acid' },
                      { id: 'c', text: 'is the start codon, coding for methionine' },
                      { id: 'd', text: 'is found only in DNA' }
                    ],
                    answer: 'c',
                    hint: 'Every protein begins the same way.',
                    steps: [
                      'AUG signals "start here" AND adds methionine as the first amino acid.',
                      'Stop codons are the opposite role: UAA, UAG, UGA end the chain.'
                    ],
                    answerText: 'start codon → methionine'
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
