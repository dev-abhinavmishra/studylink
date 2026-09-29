// Subject: Humanities — world history, U.S. history, and civics.
// See content/SPEC.md for the full schema.

module.exports = {
  id: 'humanities',
  name: 'Humanities',
  icon: 'globe',
  color: '#e08544',
  tagline: 'History and civics, explained',
  description: 'Trace the big arcs of world and U.S. history, then learn how government actually works. Every lesson pairs narrative with cause-and-effect reasoning and practice that explains why the right answer is right.',
  courses: [
    {
      id: 'world-history',
      title: 'World History',
      subtitle: 'Grades 9–12 · Survey',
      summary: 'From the first river-valley cities to the World Wars — the people, ideas, and turning points that shaped the modern world.',
      units: [
        {
          id: 'ancient-civilizations',
          title: 'Ancient civilizations',
          lessons: [
            {
              id: 'mesopotamia-egypt',
              title: 'Mesopotamia and Egypt',
              minutes: 9,
              summary: 'The first cities, the first writing, and the first law codes grew out of two great river valleys.',
              tags: ['ancient history', 'mesopotamia', 'egypt', 'civilization'],
              blocks: [
                { type: 'p', text: 'Around 3500–3000 BCE, the world\'s first cities appeared in two river valleys: **Mesopotamia** (Greek for "the land between the rivers" — the Tigris and Euphrates) and **Egypt** along the Nile. Rivers supplied water, deposited fertile silt, and moved goods — and food surpluses freed some people to become scribes, priests, and builders instead of farmers.' },
                { type: 'p', text: 'In Mesopotamia, Sumerian city-states like Ur and Uruk invented **cuneiform**, the earliest known writing system (~3200 BCE), pressed as wedge-shaped marks into clay. They built ziggurat temples, and their base-60 math survives in our 60-minute hour and 360-degree circle.' },
                { type: 'p', text: 'Egypt unified around 3100 BCE under **pharaohs** — kings treated as living gods. Egyptians wrote **hieroglyphics**, engineered the pyramids at Giza during the Old Kingdom (~2560 BCE), and farmed on the Nile\'s famously predictable flood cycle — a stability Mesopotamia\'s erratic rivers never had.' },
                { type: 'callout', kind: 'key', text: 'A **civilization** needs cities, specialized labor, government, shared religion, and usually writing — all of which an agricultural surplus makes possible.' },
                { type: 'h2', text: 'Writing down the rules' },
                { type: 'example', title: 'Hammurabi\'s Code (~1754 BCE)', text: 'Babylon\'s King Hammurabi had ~282 laws carved on a stone pillar, including "an eye for an eye." Penalties differed by social class — unfair by our standards, but revolutionary because the law was **written and public**: anyone could read what power claimed to be.' },
                { type: 'list', items: ['**Mesopotamia gave us**: the wheel, the plow, cuneiform, written law codes', '**Egypt gave us**: monumental stonework, a solar calendar, papyrus, mummification medicine', '**Both gave us**: the template of city + river + government + records'] }
              ],
              skill: {
                id: 'ancient-river-valleys',
                name: 'River-valley civilizations',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Mesopotamia developed between which two rivers?',
                    choices: [
                      { id: 'a', text: 'The Nile and the Jordan' },
                      { id: 'b', text: 'The Tigris and the Euphrates' },
                      { id: 'c', text: 'The Indus and the Ganges' },
                      { id: 'd', text: 'The Yellow and the Yangtze' }
                    ],
                    answer: 'b',
                    hint: 'The name itself means "land between the rivers" — which pair runs through modern Iraq?',
                    steps: [
                      '**Mesopotamia** is Greek for "the land between the rivers," referring to the Tigris and Euphrates in modern Iraq and Syria.',
                      'The other pairs named their own civilizations: the Nile fed Egypt, the Indus fed the Indus Valley cities, and the Yellow and Yangtze fed early China.'
                    ],
                    answerText: 'The Tigris and the Euphrates'
                  },
                  {
                    type: 'choice',
                    prompt: 'Cuneiform is best described as:',
                    choices: [
                      { id: 'a', text: 'A code of laws carved on stone' },
                      { id: 'b', text: 'An Egyptian form of picture writing' },
                      { id: 'c', text: 'A stepped temple tower' },
                      { id: 'd', text: 'Wedge-shaped marks pressed into clay tablets' }
                    ],
                    answer: 'd',
                    hint: 'Think about what Sumerians wrote *on*, not what they wrote *about*.',
                    steps: [
                      'Cuneiform (from Latin *cuneus*, "wedge") is the **writing system** the Sumerians developed around 3200 BCE by pressing a reed stylus into wet clay.',
                      'Hammurabi\'s Code (choice a) is a law code that was *written in* cuneiform, and a ziggurat (choice c) is a temple building — not a script.'
                    ],
                    answerText: 'Wedge-shaped marks pressed into clay tablets'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why were river valleys ideal locations for the first civilizations?',
                    choices: [
                      { id: 'a', text: 'Regular floods deposited fertile silt, allowing food surpluses' },
                      { id: 'b', text: 'They contained rich deposits of gold and silver' },
                      { id: 'c', text: 'Rivers provided natural walls against all invaders' },
                      { id: 'd', text: 'The climate stayed warm all year' }
                    ],
                    answer: 'a',
                    hint: 'Civilization requires that not everyone has to farm. What made that possible?',
                    steps: [
                      'Flood cycles left behind **nutrient-rich silt**, so a small farming population could grow far more food than it needed.',
                      'That **surplus** freed people for specialized work — scribes, soldiers, builders — which is what turns a village into a civilization. Gold and walls mattered far less than food.'
                    ],
                    answerText: 'Regular floods deposited fertile silt, allowing food surpluses'
                  },
                  {
                    type: 'choice',
                    prompt: 'Egyptian pharaohs were:',
                    choices: [
                      { id: 'a', text: 'Elected councils of elders' },
                      { id: 'b', text: 'Military governors appointed by Babylon' },
                      { id: 'c', text: 'Kings treated as living gods' },
                      { id: 'd', text: 'Priests chosen for one-year terms' }
                    ],
                    answer: 'c',
                    hint: 'Pharaohs were buried with far more than a politician would need.',
                    steps: [
                      'The pharaoh held **political and religious authority together**: Egyptians believed their king was a god (associated with Horus) whose rule kept cosmic order, *ma\'at*.',
                      'That divine status explains the pyramids — massive royal tombs built to launch the king into the afterlife.'
                    ],
                    answerText: 'Kings treated as living gods'
                  },
                  {
                    type: 'choice',
                    prompt: 'Hammurabi\'s Code is historically significant because it:',
                    choices: [
                      { id: 'a', text: 'Established the world\'s first democracy' },
                      { id: 'b', text: 'Was one of the earliest written, publicly displayed law codes' },
                      { id: 'c', text: 'Abolished social classes in Babylon' },
                      { id: 'd', text: 'Introduced cuneiform writing' }
                    ],
                    answer: 'b',
                    hint: 'Its importance is about the law being *visible*, not about the punishments being fair.',
                    steps: [
                      'Carved on a stone stele around 1754 BCE, Hammurabi\'s ~282 laws made rules **public and uniform** instead of arbitrary — a landmark in legal history.',
                      'Its punishments actually *reinforced* class distinctions (harsher for harming elites), and cuneiform already existed for over a thousand years before Hammurabi.'
                    ],
                    answerText: 'One of the earliest written, publicly displayed law codes'
                  },
                  {
                    type: 'choice',
                    prompt: 'Compared with Egypt\'s Nile, Mesopotamia\'s rivers:',
                    choices: [
                      { id: 'a', text: 'Froze for half the year' },
                      { id: 'b', text: 'Were too small to support farming' },
                      { id: 'c', text: 'Flowed only through desert' },
                      { id: 'd', text: 'Flooded unpredictably, sometimes destructively' }
                    ],
                    answer: 'd',
                    hint: 'Historians link the Nile\'s reliability to Egypt\'s famously stable outlook — the Tigris and Euphrates offered no such comfort.',
                    steps: [
                      'The Nile flooded on a gentle, predictable schedule that farmers could plan around; the Tigris and Euphrates could **flood suddenly and violently**.',
                      'Many historians connect this to worldview: Egyptian religion leaned optimistic, while Mesopotamian myths (like the flood story in Gilgamesh) portray a harsher world.'
                    ],
                    answerText: 'Flooded unpredictably, sometimes destructively'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which everyday system descends directly from Sumerian base-60 mathematics?',
                    choices: [
                      { id: 'a', text: 'The 60-minute hour and 360-degree circle' },
                      { id: 'b', text: 'The alphabet' },
                      { id: 'c', text: 'Paper currency' },
                      { id: 'd', text: 'Gunpowder' }
                    ],
                    answer: 'a',
                    hint: 'Check your clock and your geometry class.',
                    steps: [
                      'Sumerians and Babylonians counted in **base 60** (sexagesimal), a system that divides beautifully — 60 is divisible by 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30.',
                      'We still use their convention in **minutes and seconds** and in the 360° circle; the alphabet came from Phoenicia, paper money and gunpowder from China.'
                    ],
                    answerText: 'The 60-minute hour and 360-degree circle'
                  },
                  {
                    type: 'choice',
                    prompt: 'The great pyramids at Giza were built during which period of Egyptian history?',
                    choices: [
                      { id: 'a', text: 'The New Kingdom' },
                      { id: 'b', text: 'The Middle Kingdom' },
                      { id: 'c', text: 'The Old Kingdom' },
                      { id: 'd', text: 'The Ptolemaic period' }
                    ],
                    answer: 'c',
                    hint: 'The age of the pyramid-builders came earliest — the famous warrior pharaohs like Ramses II came much later.',
                    steps: [
                      'The **Old Kingdom** (~2686–2181 BCE) is called "the Age of the Pyramids" — Giza\'s Great Pyramid went up around 2560 BCE for Pharaoh Khufu.',
                      'The New Kingdom (~1550–1077 BCE) is when Egypt became an empire under pharaohs like Hatshepsut and Ramses II — more than a thousand years after Giza was built.'
                    ],
                    answerText: 'The Old Kingdom'
                  }
                ]
              }
            },
            {
              id: 'ancient-greece',
              title: 'Ancient Greece',
              minutes: 9,
              summary: 'Independent city-states invented democracy, drama, and philosophy — and spent much of their energy fighting each other.',
              tags: ['ancient history', 'greece', 'democracy', 'athens', 'sparta'],
              blocks: [
                { type: 'p', text: 'Greece\'s mountains and scattered islands divided its people into independent **city-states** (*poleis*) rather than one empire. The two greatest — Athens and Sparta — could not have been more different, and their rivalry shaped the classical era (~800–323 BCE).' },
                { type: 'p', text: '**Athens** pioneered **direct democracy**: male citizens debated and voted on laws themselves in the Assembly, and the Council of 500 was chosen by lottery. But "citizen" excluded women, enslaved people, and foreigners — perhaps only 10–20% of the population could participate.' },
                { type: 'p', text: '**Sparta** was a militarized oligarchy ruled by two kings and a council of elders. Its entire society revolved around training soldiers — boys entered military schooling at age 7 — to control the *helots*, the enslaved population that far outnumbered Spartan citizens.' },
                { type: 'callout', kind: 'key', text: 'A **polis** was a self-governing city plus its surrounding farmland — think "small independent country," not just "city."' },
                { type: 'h2', text: 'Victory abroad, exhaustion at home' },
                { type: 'p', text: 'Greek city-states united to repel two Persian invasions — Marathon (490 BCE) and Thermopylae/Salamis (480 BCE) — which launched Athens\' Golden Age under Pericles. But the **Peloponnesian War (431–404 BCE)** between Athens and Sparta drained both, leaving Greece open to Macedon\'s kings. **Alexander the Great (336–323 BCE)** then carried Greek culture across Egypt and southwest Asia — the "Hellenistic" world.' },
                { type: 'example', title: 'Direct vs. representative democracy', text: 'In Athens, a quorum of about 6,000 citizens might vote on a law directly in a single day. Modern democracies instead elect representatives to vote for us — closer to Rome\'s republic than Athens\' assembly.' },
                { type: 'list', items: ['**Socrates** — taught by questioning everything; executed by Athens in 399 BCE', '**Plato** — Socrates\' student; wrote *The Republic*, founded the Academy', '**Aristotle** — Plato\'s student; tutored Alexander; systematized logic and science'] }
              ],
              skill: {
                id: 'greek-city-states',
                name: 'Greek city-states and democracy',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Why did ancient Greece develop many independent city-states rather than a unified empire?',
                    choices: [
                      { id: 'a', text: 'Greeks had no language in common' },
                      { id: 'b', text: 'Constant foreign occupation prevented unification' },
                      { id: 'c', text: 'Mountains and seas physically divided communities' },
                      { id: 'd', text: 'A single king ruled all of Greece' }
                    ],
                    answer: 'c',
                    hint: 'Look at a topographic map of Greece — what dominates the landscape?',
                    steps: [
                      'Greece\'s **mountain ranges and island geography** isolated communities, so each grew into its own self-governing *polis*.',
                      'Greeks did share language and religion (they competed together at Olympia) — so "no common language" is wrong, and no single king ever ruled all the city-states.'
                    ],
                    answerText: 'Mountains and seas physically divided communities'
                  },
                  {
                    type: 'choice',
                    prompt: 'Athenian democracy is called "direct" democracy because:',
                    choices: [
                      { id: 'a', text: 'Citizens voted on laws and decisions themselves, not through representatives' },
                      { id: 'b', text: 'Every resident of Athens could vote' },
                      { id: 'c', text: 'Officials were appointed directly by the king' },
                      { id: 'd', text: 'Votes were counted immediately without delay' }
                    ],
                    answer: 'a',
                    hint: 'Contrast it with how laws get made in a modern republic.',
                    steps: [
                      'In a direct democracy, citizens **vote on the issue itself** — in Athens\' Assembly, a show of hands decided laws, wars, and ostracisms.',
                      'Choice b fails because women, enslaved people, and foreigners could not vote; choice c describes monarchy, the opposite of democracy.'
                    ],
                    answerText: 'Citizens voted on laws themselves, not through representatives'
                  },
                  {
                    type: 'choice',
                    prompt: 'Who could participate in Athenian democracy?',
                    choices: [
                      { id: 'a', text: 'All residents of Athens' },
                      { id: 'b', text: 'All adult men and women' },
                      { id: 'c', text: 'Anyone who owned property' },
                      { id: 'd', text: 'Only free adult male citizens' }
                    ],
                    answer: 'd',
                    hint: 'Athens was radically democratic *for its citizens* — but citizenship was narrow.',
                    steps: [
                      'Athenian citizenship required being a **free adult male** born to citizen parents; women, enslaved people, and resident foreigners (metics) were all excluded.',
                      'That means only about **10–20%** of the population participated — a reminder that "democracy" in Athens was both revolutionary and deeply limited.'
                    ],
                    answerText: 'Only free adult male citizens'
                  },
                  {
                    type: 'choice',
                    prompt: 'Sparta is best described as:',
                    choices: [
                      { id: 'a', text: 'A commercial center of philosophy and art' },
                      { id: 'b', text: 'A militarized oligarchy built on control of enslaved helots' },
                      { id: 'c', text: 'A democracy that elected two presidents' },
                      { id: 'd', text: 'A peaceful farming society' }
                    ],
                    answer: 'b',
                    hint: 'Sparta\'s whole society existed to keep its army — and to control the population that outnumbered it.',
                    steps: [
                      'Sparta was ruled by **two hereditary kings** plus a council of elders — an oligarchy, not a democracy — and every male citizen trained as a soldier from age 7.',
                      'The military existed largely to suppress the **helots**, enslaved people who outnumbered citizens many times over. Art and commerce belonged to Athens, not Sparta.'
                    ],
                    answerText: 'A militarized oligarchy built on control of enslaved helots'
                  },
                  {
                    type: 'choice',
                    prompt: 'What was the main outcome of the Persian Wars (490–480 BCE)?',
                    choices: [
                      { id: 'a', text: 'Persia conquered mainland Greece' },
                      { id: 'b', text: 'Sparta was destroyed by Persia' },
                      { id: 'c', text: 'The Greek city-states repelled Persia, ushering in Athens\' Golden Age' },
                      { id: 'd', text: 'Alexander the Great conquered Persia in response' }
                    ],
                    answer: 'c',
                    hint: 'The Parthenon was built with confidence gained from these victories.',
                    steps: [
                      'Victories at **Marathon (490 BCE)** and **Salamis (480 BCE)** repelled two massive Persian invasions.',
                      'Athens emerged as the leading naval power, entered its Golden Age under Pericles, and Alexander\'s conquest of Persia came **150 years later** — a consequence of Greek strength, not of the wars themselves.'
                    ],
                    answerText: 'The Greeks repelled Persia, ushering in Athens\' Golden Age'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Peloponnesian War (431–404 BCE) was fought primarily between:',
                    choices: [
                      { id: 'a', text: 'Athens and Sparta' },
                      { id: 'b', text: 'Greece and Persia' },
                      { id: 'c', text: 'Rome and Carthage' },
                      { id: 'd', text: 'Athens and Macedon' }
                    ],
                    answer: 'a',
                    hint: 'It was a Greek civil war between the two superpowers of the age.',
                    steps: [
                      'Thucydides\' history of the war describes a struggle between **Athens\' naval empire** and **Sparta\'s land-based Peloponnesian League**.',
                      'Sparta\'s victory in 404 BCE exhausted *both* sides, leaving Greece too weak to resist Philip of Macedon decades later — which is why historians treat the war as the beginning of Greece\'s decline.'
                    ],
                    answerText: 'Athens and Sparta'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which correctly orders the great Greek philosophers by teacher-student relationship?',
                    choices: [
                      { id: 'a', text: 'Plato → Socrates → Aristotle' },
                      { id: 'b', text: 'Aristotle → Plato → Socrates' },
                      { id: 'c', text: 'Socrates → Aristotle → Plato' },
                      { id: 'd', text: 'Socrates → Plato → Aristotle' }
                    ],
                    answer: 'd',
                    hint: 'Each taught the next — and the last of them tutored Alexander the Great.',
                    steps: [
                      '**Socrates taught Plato** (who wrote Socrates\' dialogues), and **Plato taught Aristotle** at the Academy.',
                      'Aristotle then tutored the young Alexander the Great — connecting philosophy\'s chain directly to the spread of Greek culture.'
                    ],
                    answerText: 'Socrates → Plato → Aristotle'
                  },
                  {
                    type: 'choice',
                    prompt: 'The term "Hellenistic" refers to:',
                    choices: [
                      { id: 'a', text: 'Greece\'s earliest Bronze Age cities' },
                      { id: 'b', text: 'The spread of Greek culture across the lands Alexander conquered' },
                      { id: 'c', text: 'The Persian Empire\'s official religion' },
                      { id: 'd', text: 'The period of Spartan military dominance' }
                    ],
                    answer: 'b',
                    hint: 'It comes from "Hellas," the Greek name for Greece — think of Greek culture spreading far beyond Greece itself.',
                    steps: [
                      'Between 336 and 323 BCE, Alexander the Great conquered an empire stretching from Greece to Egypt and India.',
                      'The centuries that followed are called the **Hellenistic Age** because Greek language, art, and ideas blended with local cultures — the "spread of Greekness."'
                    ],
                    answerText: 'The spread of Greek culture after Alexander\'s conquests'
                  }
                ]
              }
            },
            {
              id: 'rome-rise-and-fall',
              title: "Rome's rise and fall",
              minutes: 10,
              summary: 'How a small Italian city built a Mediterranean empire — a republic that became an empire, then split and fell.',
              tags: ['ancient history', 'rome', 'republic', 'empire'],
              blocks: [
                { type: 'p', text: 'Rome began as a city on the Tiber River and grew to rule the entire Mediterranean world. In **509 BCE** Romans expelled their last king and founded the **Republic**: citizens elected two **consuls** for one-year terms and a Senate advised — a "mixed constitution" balancing people, elites, and executives.' },
                { type: 'p', text: 'Expansion made Rome rich and unstable. In the **Punic Wars (264–146 BCE)** Rome destroyed its rival Carthage — surviving Hannibal\'s elephants crossing the Alps — and dominated the Mediterranean. But victorious generals commanded armies loyal to themselves, not the state.' },
                { type: 'p', text: '**Julius Caesar** crossed the Rubicon in 49 BCE (defying the Senate — "the die is cast"), won a civil war, and was assassinated in **44 BCE**. His heir Octavian became **Augustus** in 27 BCE, Rome\'s first emperor, launching the **Pax Romana** — roughly two centuries of relative peace and prosperity (to 180 CE).' },
                { type: 'callout', kind: 'key', text: 'The **Pax Romana** ("Roman Peace") was the ~200-year stretch when the empire was stable enough for trade, roads, and cities to flourish.' },
                { type: 'h2', text: 'Why did Rome fall?' },
                { type: 'p', text: 'No single cause ended Rome: overexpansion, crushing taxes, political murder as routine succession, and dependence on hired foreign troops all played a part. Constantine moved the capital east to **Constantinople in 330 CE**; the **Western Empire fell in 476 CE** when the last emperor was deposed. The Eastern (Byzantine) Empire survived until 1453 — nearly a thousand years longer.' },
                { type: 'example', title: 'Reading the century labels', text: 'Century numbers run one ahead of the year: 476 CE is in the *5th century*, and dates in BCE count backward — the 1st century BCE ends in year 1 BCE. Keeping that straight prevents century-off-by-one errors on every timeline you read.' },
                { type: 'list', items: ['**Infrastructure**: roads, aqueducts, concrete — "all roads lead to Rome"', '**Language**: Latin evolved into Italian, French, Spanish, Portuguese, Romanian', '**Law**: ideas like "innocent until proven guilty" trace to Roman legal codes'] }
              ],
              skill: {
                id: 'rome-republic-empire',
                name: 'Rome: republic to empire',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The Roman Republic began around 509 BCE when Romans:',
                    choices: [
                      { id: 'a', text: 'Defeated Carthage in the First Punic War' },
                      { id: 'b', text: 'Overthrew their last king and created elected offices' },
                      { id: 'c', text: 'Crowned Augustus as emperor' },
                      { id: 'd', text: 'Moved the capital to Constantinople' }
                    ],
                    answer: 'b',
                    hint: 'The Republic is defined by what it replaced: monarchy.',
                    steps: [
                      'Romans expelled the Etruscan king **Tarquin the Proud** and swore never to be ruled by kings again — replacing him with two elected consuls.',
                      'The Punic Wars came centuries later (264 BCE), Augustus ended the Republic in 27 BCE, and Constantinople was founded in 330 CE.'
                    ],
                    answerText: 'Overthrew their last king and created elected offices'
                  },
                  {
                    type: 'choice',
                    prompt: 'In the Roman Republic, two consuls:',
                    choices: [
                      { id: 'a', text: 'Ruled for life' },
                      { id: 'b', text: 'Were appointed by the king' },
                      { id: 'c', text: 'Judged all legal cases' },
                      { id: 'd', text: 'Shared executive power and served one-year terms' }
                    ],
                    answer: 'd',
                    hint: 'Romans feared one-man rule — how would *two* executives help?',
                    steps: [
                      'Two consuls held executive power **jointly** — each could veto the other — and served only **one-year terms**, so no one could consolidate power.',
                      'This design directly reflects Rome\'s fear of kings: dividing power and shortening terms were the Republic\'s core safeguards.'
                    ],
                    answerText: 'Shared executive power and served one-year terms'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Punic Wars were fought between Rome and:',
                    choices: [
                      { id: 'a', text: 'Carthage' },
                      { id: 'b', text: 'Persia' },
                      { id: 'c', text: 'Greece' },
                      { id: 'd', text: 'Egypt' }
                    ],
                    answer: 'a',
                    hint: '"Punic" comes from the Latin word for this rival\'s people — a sea power based in North Africa.',
                    steps: [
                      'Carthage, a wealthy trading empire in modern Tunisia, fought Rome in three wars (264–146 BCE) for control of the western Mediterranean.',
                      'Rome survived Hannibal\'s invasion over the Alps, then **destroyed Carthage completely in 146 BCE** — the moment Rome became the Mediterranean\'s only superpower.'
                    ],
                    answerText: 'Carthage'
                  },
                  {
                    type: 'choice',
                    prompt: 'When we say someone has "crossed the Rubicon," we mean:',
                    choices: [
                      { id: 'a', text: 'They traveled to a distant province' },
                      { id: 'b', text: 'They won a great military victory' },
                      { id: 'c', text: 'They passed a point of no return' },
                      { id: 'd', text: 'They made a legal appeal' }
                    ],
                    answer: 'c',
                    hint: 'Caesar\'s army was legally forbidden to cross that small river — crossing it meant civil war.',
                    steps: [
                      'In 49 BCE Caesar led his army across the **Rubicon River**, the legal boundary beyond which a general could not bring troops — an act of rebellion against the Senate.',
                      'He reportedly said *alea iacta est* — "the die is cast." Crossing could not be undone, so the phrase now means an **irreversible, fateful decision**.'
                    ],
                    answerText: 'They passed a point of no return'
                  },
                  {
                    type: 'choice',
                    prompt: 'Augustus is significant in Roman history because he:',
                    choices: [
                      { id: 'a', text: 'Founded the city of Rome' },
                      { id: 'b', text: 'Became the first emperor, ending the Republic and beginning the Pax Romana' },
                      { id: 'c', text: 'Wrote Rome\'s first law code' },
                      { id: 'd', text: 'Divided the empire into East and West' }
                    ],
                    answer: 'b',
                    hint: 'He was Julius Caesar\'s heir — and he held power the Republic was designed to prevent.',
                    steps: [
                      'Octavian defeated Mark Antony, took the name **Augustus** in 27 BCE, and accumulated the powers of consul, general, and tribune for life — emperor in all but name.',
                      'His ~40-year reign began the **Pax Romana**, two centuries of stability that became Rome\'s golden age.'
                    ],
                    answerText: 'Became the first emperor, ending the Republic'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Western Roman Empire is conventionally dated to have "fallen" in:',
                    choices: [
                      { id: 'a', text: '27 BCE' },
                      { id: 'b', text: '180 CE' },
                      { id: 'c', text: '330 CE' },
                      { id: 'd', text: '476 CE' }
                    ],
                    answer: 'd',
                    hint: 'It happened when the last Western emperor was deposed — the year ends in 76.',
                    steps: [
                      'In **476 CE** the Germanic general Odoacer deposed Romulus Augustulus, the last Western emperor — the date textbooks use for Rome\'s fall.',
                      '180 CE marks the end of the Pax Romana and 330 CE the founding of Constantinople — milestones on the way, but not the fall itself.'
                    ],
                    answerText: '476 CE'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why do some historians question the simple story of Rome\'s "fall" in 476 CE?',
                    choices: [
                      { id: 'a', text: 'The eastern half of the empire survived as the Byzantine Empire until 1453' },
                      { id: 'b', text: 'Rome was actually destroyed by earthquake in 476' },
                      { id: 'c', text: 'The empire had already moved its capital to Egypt' },
                      { id: 'd', text: 'Roman records from that year were all lost' }
                    ],
                    answer: 'a',
                    hint: 'Only half the empire ended in 476 — what happened to the other half?',
                    steps: [
                      'The empire was formally divided in 395 CE; while the **West collapsed in 476**, the **East** — ruled from Constantinople — continued for nearly a thousand more years.',
                      'The Byzantine Empire preserved Roman law, government, and culture until the Ottomans took Constantinople in **1453**, so "Rome fell in 476" describes only the Western half.'
                    ],
                    answerText: 'The Eastern (Byzantine) half survived until 1453'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is a direct legacy of Rome visible today?',
                    choices: [
                      { id: 'a', text: 'The invention of the alphabet' },
                      { id: 'b', text: 'The 360-degree circle' },
                      { id: 'c', text: 'Legal principles like "innocent until proven guilty" and the Romance languages' },
                      { id: 'd', text: 'The Olympic Games' }
                    ],
                    answer: 'c',
                    hint: 'Think about what Italian, Spanish, and French have in common — and where modern legal presumptions come from.',
                    steps: [
                      'Latin evolved into the **Romance languages** (Italian, French, Spanish, Portuguese, Romanian), and Roman law contributed ideas like the **presumption of innocence** still used in courts.',
                      'The alphabet came from the Phoenicians (Greeks and Romans adapted it), the 360° circle from Babylon, and the Olympics from Greece.'
                    ],
                    answerText: 'Roman law ideas and the Romance languages'
                  }
                ]
              }
            },
            {
              id: 'medieval-world',
              title: 'The medieval world',
              minutes: 9,
              summary: 'After Rome fell, Europe reorganized around feudalism while Byzantine, Islamic, and Mongol empires connected a wider world.',
              tags: ['middle ages', 'feudalism', 'byzantine', 'mongols'],
              blocks: [
                { type: 'p', text: 'The **Middle Ages** (~500–1500 CE) bridge ancient and modern. In Western Europe, the collapse of Roman government produced **feudalism**: kings granted land to nobles, nobles to knights, and all of it was worked by **serfs** — peasants bound to a lord\'s land in exchange for protection.' },
                { type: 'p', text: 'The **Catholic Church** was medieval Europe\'s unifying institution — running schools, preserving texts in monasteries, and sometimes rivaling kings for power (a struggle dramatized when Henry IV begged Pope Gregory VII\'s forgiveness at Canossa in 1077).' },
                { type: 'p', text: 'Meanwhile, the wider world flourished. The **Byzantine Empire** preserved Roman law through Justinian\'s Code (529 CE); **Islamic caliphates** built centers like Baghdad\'s House of Wisdom, translating Greek texts and advancing algebra; and the **Mongol Empire** (Genghis Khan, from 1206) made the Silk Road safe enough for East–West trade to surge.' },
                { type: 'callout', kind: 'key', text: '**Feudalism** = land exchanged for loyalty and service. A serf was *bound to the land* — not owned like a slave, but not free to leave either.' },
                { type: 'h2', text: 'Turning points' },
                { type: 'p', text: 'The **Crusades** (1096–1291) sent European armies east and reopened contact with Islamic and Greek learning. The **Magna Carta** (1215) established that even England\'s king was subject to law. Then the **Black Death** (1347–1351) killed roughly a third of Europe — and the resulting labor shortage let surviving peasants demand wages, weakening serfdom itself.' },
                { type: 'example', title: 'How the plague shifted power', text: 'Before 1347, labor was abundant and land scarce — lords held the leverage. After the plague killed a third of workers, the equation flipped: lords competed for scarce laborers, wages rose, and serfs gained bargaining power. A demographic catastrophe became an economic lever — a classic cause-and-effect chain.' }
              ],
              skill: {
                id: 'medieval-era',
                name: 'Medieval world systems',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Feudalism organized medieval European society around:',
                    choices: [
                      { id: 'a', text: 'Free trade between city-states' },
                      { id: 'b', text: 'Exchanges of land for loyalty and military service' },
                      { id: 'c', text: 'Elected parliaments' },
                      { id: 'd', text: 'A single European emperor' }
                    ],
                    answer: 'b',
                    hint: 'Knights served lords, lords served kings — what did each level receive in return?',
                    steps: [
                      'Feudalism was a **pyramid of obligations**: land (a fief) flowed downward from king → nobles → knights; military service and loyalty flowed upward.',
                      'There was no European emperor ruling the whole continent — power was fragmented into thousands of local arrangements, which is exactly why feudalism emerged after Rome fell.'
                    ],
                    answerText: 'Exchanges of land for loyalty and military service'
                  },
                  {
                    type: 'choice',
                    prompt: 'A medieval serf differed from a slave because serfs:',
                    choices: [
                      { id: 'a', text: 'Could vote in local elections' },
                      { id: 'b', text: 'Were paid wages for their labor' },
                      { id: 'c', text: 'Could freely move between manors' },
                      { id: 'd', text: 'Were bound to the land rather than owned as property' }
                    ],
                    answer: 'd',
                    hint: 'A serf could not be sold individually — but also could not leave. The land itself was the tie.',
                    steps: [
                      'Serfs owed labor to their lord and **could not leave the manor**, but they also could not be sold separately from the land — a real, if narrow, legal difference from slavery.',
                      'They had customary rights (a plot to farm, the lord\'s protection) that slaves lacked — which is why historians treat serfdom as distinct from chattel slavery.'
                    ],
                    answerText: 'Bound to the land rather than owned as property'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which institution unified medieval European life more than any kingdom did?',
                    choices: [
                      { id: 'a', text: 'The Catholic Church' },
                      { id: 'b', text: 'The merchant guilds' },
                      { id: 'c', text: 'The Byzantine army' },
                      { id: 'd', text: 'The university system' }
                    ],
                    answer: 'a',
                    hint: 'It was the only organization present in every village from Ireland to Poland.',
                    steps: [
                      'With no strong states, the **Catholic Church** provided shared faith, education, charity, and law (canon law courts) across all of Latin Christendom.',
                      'Popes could excommunicate kings — real political leverage — and monasteries preserved the texts that fed the later Renaissance.'
                    ],
                    answerText: 'The Catholic Church'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Byzantine Emperor Justinian is best remembered for:',
                    choices: [
                      { id: 'a', text: 'Conquering China' },
                      { id: 'b', text: 'Founding Constantinople' },
                      { id: 'c', text: 'Codifying Roman law in the Corpus Juris Civilis' },
                      { id: 'd', text: 'Converting the empire to Islam' }
                    ],
                    answer: 'c',
                    hint: 'His greatest monument was not a building but a book of law.',
                    steps: [
                      'In 529 CE Justinian\'s jurists compiled and organized a thousand years of Roman law into the **Corpus Juris Civilis (Justinian\'s Code)**.',
                      'That code became the foundation of **civil-law legal systems** still used across Europe and Latin America — an influence far outlasting his reconquests.'
                    ],
                    answerText: 'Codifying Roman law (Justinian\'s Code)'
                  },
                  {
                    type: 'choice',
                    prompt: 'The House of Wisdom, where scholars preserved and advanced Greek, Persian, and Indian learning, was located in:',
                    choices: [
                      { id: 'a', text: 'Athens' },
                      { id: 'b', text: 'Baghdad' },
                      { id: 'c', text: 'Cairo' },
                      { id: 'd', text: 'Constantinople' }
                    ],
                    answer: 'b',
                    hint: 'It was the intellectual capital of the Abbasid Caliphate during the Islamic Golden Age.',
                    steps: [
                      'The Abbasid caliphate made **Baghdad** its capital, and the House of Wisdom (Bayt al-Hikma) became its translation and research center under caliphs like al-Ma\'mun.',
                      'Scholars there preserved Aristotle and Euclid and produced original work — al-Khwarizmi\'s name gave us both "**algebra**" and "**algorithm**."'
                    ],
                    answerText: 'Baghdad'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Magna Carta (1215) is significant because it established that:',
                    choices: [
                      { id: 'a', text: 'England became a democracy' },
                      { id: 'b', text: 'Serfs were freed' },
                      { id: 'c', text: 'The pope ruled England directly' },
                      { id: 'd', text: 'Even the king was subject to the law' }
                    ],
                    answer: 'd',
                    hint: 'Rebellious barons forced King John to sign it — what did they want from him?',
                    steps: [
                      'English barons forced King John to accept limits: no taxation without the council\'s consent and no imprisonment without lawful judgment.',
                      'It was a deal between king and nobles — not democracy — but its principle that **rulers are bound by law** seeded later constitutional government.'
                    ],
                    answerText: 'Even the king was subject to the law'
                  },
                  {
                    type: 'choice',
                    prompt: 'How did the Black Death (1347–1351) weaken feudalism in Europe?',
                    choices: [
                      { id: 'a', text: 'Massive deaths created a labor shortage, giving surviving peasants bargaining power' },
                      { id: 'b', text: 'The plague killed only the nobility' },
                      { id: 'c', text: 'The Church bought all the abandoned land' },
                      { id: 'd', text: 'It forced Europe to adopt a single currency' }
                    ],
                    answer: 'a',
                    hint: 'What happens to the price of labor when a third of workers die?',
                    steps: [
                      'Killing roughly a third of Europe\'s population made labor **scarce** — and scarce labor is valuable labor.',
                      'Surviving peasants could demand wages, refuse old obligations, or simply walk away to better offers; serfdom never fully recovered in Western Europe.'
                    ],
                    answerText: 'Labor shortage gave surviving peasants bargaining power'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Mongol Empire\'s most significant effect on world history was:',
                    choices: [
                      { id: 'a', text: 'Destroying the Silk Road permanently' },
                      { id: 'b', text: 'Converting Asia to Christianity' },
                      { id: 'c', text: 'Securing trade routes and accelerating East–West exchange' },
                      { id: 'd', text: 'Colonizing the Americas early' }
                    ],
                    answer: 'c',
                    hint: 'The *Pax Mongolica* made one road safe from China to Europe — think of what flows along safe roads.',
                    steps: [
                      'Under Genghis Khan and his successors, Mongol rule created the **Pax Mongolica** — a unified zone in which Silk Road trade became safer than ever.',
                      'Goods, technologies (like gunpowder and printing moving west), and ideas crossed Eurasia — though so did the plague bacteria that later devastated Europe.'
                    ],
                    answerText: 'Securing trade routes and accelerating East–West exchange'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'the-modern-world',
          title: 'The modern world',
          lessons: [
            {
              id: 'renaissance',
              title: 'The Renaissance',
              minutes: 9,
              summary: 'A "rebirth" of classical learning and art in Italy that changed how Europeans thought about themselves.',
              tags: ['renaissance', 'art', 'humanism', 'printing press'],
              blocks: [
                { type: 'p', text: 'The **Renaissance** — French for "rebirth" — began around 1300–1400 in Italy\'s wealthy city-states and spread across Europe by 1600. Trade had made cities like Florence rich, and banking families like the **Medici** spent their fortunes patronizing artists, architects, and scholars.' },
                { type: 'p', text: 'Its engine was **humanism**: a renewed focus on human potential and worldly achievement, driven by studying Greek and Roman texts in their original languages. Artists embraced realism — linear perspective created convincing depth, and anatomical study made bodies look alive.' },
                { type: 'p', text: 'Then came the multiplier: **Gutenberg\'s printing press (~1440)**. A monk needed about three years to copy one Bible; a print shop could produce hundreds of books a year. Ideas spread at unprecedented speed — literacy rose, vernacular writing thrived, and reformers gained an audience.' },
                { type: 'callout', kind: 'key', text: '**Humanism** celebrated human reason, creativity, and achievement — a shift from medieval culture\'s almost exclusively religious focus.' },
                { type: 'h2', text: 'Ripples' },
                { type: 'p', text: 'Printing amplified every debate. Martin Luther\'s **95 Theses (1517)** spread through Europe in weeks, sparking the **Protestant Reformation**. The same spirit of inquiry fed the Scientific Revolution and the Age of Exploration — Columbus sailed in 1492, the same century Florence peaked.' },
                { type: 'example', title: 'The press as a multiplier', text: 'Estimate the change: a skilled scribe produced ~4 books per decade; an early print shop could produce thousands. That is roughly a **1000× increase** in the rate ideas could spread — and it explains why the Reformation succeeded where earlier critiques fizzled.' },
                { type: 'list', items: ['**Leonardo da Vinci** — *Mona Lisa*, notebooks full of inventions: the "Renaissance man"', '**Michelangelo** — Sistine Chapel ceiling, the statue of David', '**Petrarch** — "father of humanism"; **Shakespeare** — Northern Renaissance literature'] }
              ],
              skill: {
                id: 'renaissance-rebirth',
                name: 'Renaissance ideas and spread',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The Renaissance began in which region?',
                    choices: [
                      { id: 'a', text: 'The Italian city-states, such as Florence' },
                      { id: 'b', text: 'The French countryside' },
                      { id: 'c', text: 'England' },
                      { id: 'd', text: 'The Holy Roman Empire\'s monasteries' }
                    ],
                    answer: 'a',
                    hint: 'It started where trade wealth was concentrated — on the Mediterranean.',
                    steps: [
                      'Italian cities like **Florence, Venice, and Milan** grew rich on Mediterranean trade, giving merchants and bankers the money to patronize art and scholarship.',
                      'Italy also sat amid Roman ruins — classical models were literally visible on the street — which is why the "rebirth" of antiquity started there.'
                    ],
                    answerText: 'The Italian city-states, such as Florence'
                  },
                  {
                    type: 'choice',
                    prompt: 'Renaissance humanism emphasized:',
                    choices: [
                      { id: 'a', text: 'Rejecting all non-religious study' },
                      { id: 'b', text: 'Collective farming' },
                      { id: 'c', text: 'Military conquest' },
                      { id: 'd', text: 'Human potential and the study of classical texts' }
                    ],
                    answer: 'd',
                    hint: 'Humanists asked what humans could achieve — and looked backward to Greece and Rome for models.',
                    steps: [
                      '**Humanism** valued human reason, creativity, and worldly achievement — a shift from medieval scholarship\'s nearly exclusive focus on theology.',
                      'Humanists studied Greek and Roman classics in their original languages, believing ancient works held wisdom worth recovering — hence "rebirth."'
                    ],
                    answerText: 'Human potential and the study of classical texts'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Medici family is famous in Renaissance history for:',
                    choices: [
                      { id: 'a', text: 'Conquering Rome' },
                      { id: 'b', text: 'Using banking wealth to patronize artists and scholars' },
                      { id: 'c', text: 'Inventing the printing press' },
                      { id: 'd', text: 'Leading the Protestant Reformation' }
                    ],
                    answer: 'b',
                    hint: 'Their money came from finance; their fame came from what they funded.',
                    steps: [
                      'The Medici built Europe\'s most successful **bank** in Florence, then funded Botticelli, Michelangelo, Brunelleschi\'s dome, and generations of scholars.',
                      'Their patronage shows how the Renaissance ran on commercial wealth — art was paid for by bankers, not just popes and kings.'
                    ],
                    answerText: 'Banking wealth used to patronize the arts'
                  },
                  {
                    type: 'choice',
                    prompt: 'Gutenberg\'s printing press (~1440) mattered most because it:',
                    choices: [
                      { id: 'a', text: 'Invented written language' },
                      { id: 'b', text: 'Was used mainly to print money' },
                      { id: 'c', text: 'Made books dramatically cheaper and faster to produce' },
                      { id: 'd', text: 'Allowed the Church to control all published texts' }
                    ],
                    answer: 'c',
                    hint: 'Compare one monk copying one Bible for three years to a press printing hundreds.',
                    steps: [
                      'Movable type meant one workshop could produce in months what a monastery needed **years** to copy — book prices fell and print runs rose from one copy to hundreds or thousands.',
                      'That speed is what let Luther\'s pamphlets and scientific works reach a mass audience — the Reformation and Scientific Revolution both ran on print.'
                    ],
                    answerText: 'Books became dramatically cheaper and faster to produce'
                  },
                  {
                    type: 'choice',
                    prompt: 'Linear perspective in Renaissance art allowed painters to:',
                    choices: [
                      { id: 'a', text: 'Create convincing depth on a flat surface' },
                      { id: 'b', text: 'Paint outdoors' },
                      { id: 'c', text: 'Use brighter pigments' },
                      { id: 'd', text: 'Paint on canvas for the first time' }
                    ],
                    answer: 'a',
                    hint: 'Think of parallel lines — like a road — seeming to meet at a point on the horizon.',
                    steps: [
                      'Linear perspective organizes a scene so parallel lines converge at a **vanishing point** on the horizon, and objects shrink with distance.',
                      'This mathematical technique made flat paintings look like windows into three-dimensional space — a signature of Renaissance realism perfected by artists like Brunelleschi and Raphael.'
                    ],
                    answerText: 'Create convincing depth on a flat surface'
                  },
                  {
                    type: 'choice',
                    prompt: 'Martin Luther\'s 95 Theses (1517) sparked:',
                    choices: [
                      { id: 'a', text: 'The Crusades' },
                      { id: 'b', text: 'The Black Death' },
                      { id: 'c', text: 'The Hundred Years\' War' },
                      { id: 'd', text: 'The Protestant Reformation' }
                    ],
                    answer: 'd',
                    hint: 'Luther objected to the sale of indulgences — a dispute inside the Christian Church.',
                    steps: [
                      'Luther\'s list of objections to Church practices — especially **selling indulgences** — spread through print within weeks of being posted in 1517.',
                      'The result was the **Protestant Reformation**: permanent schism in Western Christianity and new churches rejecting papal authority.'
                    ],
                    answerText: 'The Protestant Reformation'
                  },
                  {
                    type: 'choice',
                    prompt: 'The ideal of the "Renaissance man," embodied by Leonardo da Vinci, meant:',
                    choices: [
                      { id: 'a', text: 'Deep specialization in a single craft' },
                      { id: 'b', text: 'Curiosity and skill across many fields — art, science, engineering' },
                      { id: 'c', text: 'Devotion to a monastic life' },
                      { id: 'd', text: 'Noble birth and knightly training' }
                    ],
                    answer: 'b',
                    hint: 'Da Vinci painted the Mona Lisa *and* designed flying machines in his notebooks.',
                    steps: [
                      'The Renaissance ideal valued **versatility**: a complete person cultivated art, letters, science, and civic life rather than mastering only one trade.',
                      'Da Vinci exemplifies it — anatomist, engineer, painter — reflecting humanism\'s belief in the full range of human capability.'
                    ],
                    answerText: 'Curiosity and skill across many fields'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why did Renaissance scholars value ancient Greek and Roman texts so highly?',
                    choices: [
                      { id: 'a', text: 'Church law required it' },
                      { id: 'b', text: 'They were written on indestructible paper' },
                      { id: 'c', text: 'They believed classical works held knowledge and models of excellence worth recovering' },
                      { id: 'd', text: 'No other texts existed in Europe' }
                    ],
                    answer: 'c',
                    hint: '"Rebirth" implies something had been lost — what did they think they were recovering?',
                    steps: [
                      'Humanists believed the classical world had achieved a **height of reason and beauty** that the intervening centuries had neglected.',
                      'Recovering Roman law, Greek philosophy, and classical Latin style was not nostalgia — it was their toolkit for improving their own world.'
                    ],
                    answerText: 'Classical works held knowledge worth recovering'
                  }
                ]
              }
            },
            {
              id: 'industrial-revolution',
              title: 'The Industrial Revolution',
              minutes: 10,
              summary: 'Steam, steel, and factories transformed production, cities, and daily life starting in Britain around 1760.',
              tags: ['industrial revolution', 'britain', 'factories', 'steam engine'],
              blocks: [
                { type: 'p', text: 'The **Industrial Revolution** began in **Britain around 1760** and shifted production from hand tools at home to **machines in factories**. Britain had the right ingredients: abundant coal, rivers and canals, colonial markets for goods, a stable banking system, and an agricultural revolution that freed workers to move to towns.' },
                { type: 'p', text: '**Textiles mechanized first**: the spinning jenny (1764) and power loom multiplied weavers\' output. **James Watt\'s improved steam engine (1776)** freed factories from riverside waterwheels — mills could now run anywhere coal could be hauled. Cheap iron and, later, **Bessemer steel (1856)** built the machines and rails.' },
                { type: 'p', text: 'Railroads and steamships shrank distance — the Liverpool–Manchester railway opened in **1830**. Cities exploded; Manchester became "Cottonopolis." Work moved to factories with 12–14 hour shifts, and children labored in mills and mines.' },
                { type: 'callout', kind: 'key', text: 'The **factory system** concentrated workers and powered machinery under one roof — replacing scattered home workshops and reorganizing daily life around the clock and the shift.' },
                { type: 'callout', kind: 'warning', text: 'Industrialization was not pure progress: polluted air, deadly machines, child labor, and crowded slums provoked Factory Acts, unions, and sanitation reform — most gains in worker welfare were won, not given.' },
                { type: 'example', title: 'The scale of the change', text: 'A skilled hand spinner produced thread one spindle at a time; a spinning mule ran **hundreds of spindles** at once. Multiply that across an entire industry and you get falling cloth prices, rising exports — and a flood of displaced handworkers (the Luddites smashed machines in protest).' },
                { type: 'list', items: ['**1760s–1840s**: steam, textiles, iron, canals in Britain', '**1830s onward**: railroads stitch continents together', '**Late 1800s**: the revolution spreads to the U.S., Germany, and Japan — steel, electricity, chemicals'] }
              ],
              skill: {
                id: 'industrial-change',
                name: 'Industrial Revolution causes and effects',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The Industrial Revolution began in which country and era?',
                    choices: [
                      { id: 'a', text: 'France in the 1680s' },
                      { id: 'b', text: 'The United States in the 1820s' },
                      { id: 'c', text: 'Britain in the 1760s' },
                      { id: 'd', text: 'Japan in the 1900s' }
                    ],
                    answer: 'c',
                    hint: 'It started in the island nation with coal, colonies, and capital.',
                    steps: [
                      'Industrialization began in **Britain around 1760**, driven by coal reserves, colonial markets, and available labor and capital.',
                      'France, the U.S., Germany, and Japan industrialized **decades later**, largely by adopting British-developed technology.'
                    ],
                    answerText: 'Britain in the 1760s'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which natural resource gave Britain its biggest industrial advantage?',
                    choices: [
                      { id: 'a', text: 'Oil' },
                      { id: 'b', text: 'Coal' },
                      { id: 'c', text: 'Uranium' },
                      { id: 'd', text: 'Timber' }
                    ],
                    answer: 'b',
                    hint: 'The steam engine ran on it — and Britain sat on enormous deposits.',
                    steps: [
                      '**Coal** powered steam engines, smelted iron, and drove the entire early industrial economy.',
                      'Britain\'s coal seams were large and near the surface; oil did not matter industrially until the 20th century, and timber shortages actually *pushed* Britain toward coal.'
                    ],
                    answerText: 'Coal'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why was James Watt\'s improved steam engine (1776) a turning point?',
                    choices: [
                      { id: 'a', text: 'It powered the first airplanes' },
                      { id: 'b', text: 'It eliminated the need for coal' },
                      { id: 'c', text: 'It was the first engine ever built' },
                      { id: 'd', text: 'It freed factories from needing to sit beside rivers for waterpower' }
                    ],
                    answer: 'd',
                    hint: 'Before steam, power came from moving water — geography limited where factories could go.',
                    steps: [
                      'Earlier mills relied on **waterwheels**, which meant factories had to cluster on fast rivers — often far from workers and markets.',
                      'Watt\'s efficient steam engine turned coal into **portable power**: factories could locate in cities near labor and transport, accelerating urbanization.'
                    ],
                    answerText: 'It freed factories from riverside waterpower'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which industry mechanized first during the Industrial Revolution?',
                    choices: [
                      { id: 'a', text: 'Textiles' },
                      { id: 'b', text: 'Automobiles' },
                      { id: 'c', text: 'Steel' },
                      { id: 'd', text: 'Chemicals' }
                    ],
                    answer: 'a',
                    hint: 'The spinning jenny and power loom — what were they making?',
                    steps: [
                      '**Cloth production** mechanized first: the spinning jenny (1764) spun multiple threads at once, and the power loom automated weaving.',
                      'Textiles made sense as the pioneer — cotton cloth had huge global demand, and the process broke cleanly into mechanical steps. Cars and chemicals came a century later.'
                    ],
                    answerText: 'Textiles'
                  },
                  {
                    type: 'choice',
                    prompt: 'The "factory system" describes:',
                    choices: [
                      { id: 'a', text: 'Families weaving cloth at home' },
                      { id: 'b', text: 'Government-run farms' },
                      { id: 'c', text: 'Workers and powered machinery concentrated under one roof for wage labor' },
                      { id: 'd', text: 'Merchants trading goods by ship' }
                    ],
                    answer: 'c',
                    hint: 'It reorganized *where* and *how* people worked — think shifts, clocks, and a single building.',
                    steps: [
                      'The factory system gathered **machines, power sources, and wage workers in one building**, replacing the scattered "putting-out" home-workshop model.',
                      'It imposed industrial time — fixed shifts instead of task-based days — which is why historians treat it as a social transformation, not just a technical one.'
                    ],
                    answerText: 'Workers and machinery concentrated under one roof for wages'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which was a serious negative consequence of early industrialization?',
                    choices: [
                      { id: 'a', text: 'A global shortage of cloth' },
                      { id: 'b', text: 'Child labor, dangerous machines, and crowded polluted cities' },
                      { id: 'c', text: 'The collapse of world trade' },
                      { id: 'd', text: 'Widespread unemployment among factory owners' }
                    ],
                    answer: 'b',
                    hint: 'Reform laws (like the Factory Acts) exist because something needed fixing — what?',
                    steps: [
                      'Early factories ran 12–14 hour shifts with **children working beside dangerous, unguarded machinery**, and cities grew faster than sanitation or housing could handle.',
                      'These conditions provoked reform — Factory Acts limiting child labor, union organizing, and public-health laws — the origin of much modern labor law.'
                    ],
                    answerText: 'Child labor, danger, and polluted crowded cities'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Bessemer process (1856) made possible the cheap mass production of:',
                    choices: [
                      { id: 'a', text: 'Steel' },
                      { id: 'b', text: 'Plastic' },
                      { id: 'c', text: 'Paper' },
                      { id: 'd', text: 'Aluminum' }
                    ],
                    answer: 'a',
                    hint: 'Skyscrapers, rails, and bridges are made of it.',
                    steps: [
                      'Henry Bessemer\'s process blew air through molten iron to burn out impurities, cutting the cost of **steel** by roughly 80–90%.',
                      'Cheap steel enabled railroads, ships, bridges, and later skyscrapers — the structural backbone of the industrial world.'
                    ],
                    answerText: 'Steel'
                  },
                  {
                    type: 'choice',
                    prompt: 'Railroads most changed industrial society by:',
                    choices: [
                      { id: 'a', text: 'Replacing ships for ocean travel' },
                      { id: 'b', text: 'Eliminating the need for factories' },
                      { id: 'c', text: 'Slowing the spread of cities' },
                      { id: 'd', text: 'Moving goods, people, and information overland faster and cheaper than ever before' }
                    ],
                    answer: 'd',
                    hint: 'Before rails, everything on land moved at the speed of a horse.',
                    steps: [
                      'Railroads cut inland travel from days to hours and freight costs to a fraction — creating **national markets** for the first time.',
                      'They also forced the invention of **standard time zones** (1883) because schedules demanded synchronized clocks — a change in daily life as profound as the travel itself.'
                    ],
                    answerText: 'Moving goods and people faster and cheaper overland'
                  }
                ]
              }
            },
            {
              id: 'world-wars-overview',
              title: 'The World Wars: an overview',
              minutes: 10,
              summary: 'Two global conflicts in thirty years reshaped every border, economy, and international institution.',
              tags: ['world war i', 'world war ii', '20th century'],
              blocks: [
                { type: 'p', text: '**World War I (1914–1918)** was triggered by the assassination of Archduke Franz Ferdinand in June 1914, but its fuel ran deeper: rival alliances, militarism, imperial competition, and nationalism. The Central Powers (Germany, Austria-Hungary, Ottomans) fought the Allies (Britain, France, Russia, and later the U.S.). Trench warfare and industrial weapons — machine guns, artillery, poison gas — killed millions for yards of mud.' },
                { type: 'p', text: 'The U.S. entered in 1917; an armistice ended fighting on **November 11, 1918**. The **Treaty of Versailles (1919)** imposed crushing reparations and a "war guilt" clause on Germany — resentment that helped power Hitler\'s rise. The new League of Nations lacked the strength to prevent what came next.' },
                { type: 'p', text: '**World War II (1939–1945)** began when Germany invaded Poland on September 1, 1939. It became the deadliest conflict in history (~70–85 million dead): the **Holocaust** systematically murdered ~6 million Jews and millions of others; **Pearl Harbor (Dec 7, 1941)** brought the U.S. in; **D-Day (June 6, 1944)** began Germany\'s defeat in the west; atomic bombs on Hiroshima and Nagasaki ended the Pacific war in August 1945.' },
                { type: 'callout', kind: 'key', text: '**Total war** mobilizes entire economies and civilian populations — factories, food rationing, and cities themselves become targets.' },
                { type: 'callout', kind: 'warning', text: 'Versailles taught a hard lesson: a punitive peace can seed the next war. Post-1945 planners deliberately chose reconstruction (the Marshall Plan) over punishment.' },
                { type: 'h2', text: 'The world after 1945' },
                { type: 'p', text: 'The **United Nations** was founded in 1945 to replace the failed League. Weakened European empires gave way to **decolonization** across Asia and Africa, and the U.S. and USSR emerged as rival superpowers — the Cold War.' },
                { type: 'example', title: 'Comparing the two wars', text: 'WWI killed roughly 15–20 million people; WWII killed 70–85 million — about four times as many, with civilians outnumbering soldiers. The jump shows what "total war" means: bombers, occupation, and genocide put whole populations on the front line.' }
              ],
              skill: {
                id: 'two-world-wars',
                name: 'World Wars causes and consequences',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The immediate trigger of World War I was:',
                    choices: [
                      { id: 'a', text: 'The assassination of Archduke Franz Ferdinand' },
                      { id: 'b', text: 'Germany\'s invasion of Poland' },
                      { id: 'c', text: 'The bombing of Pearl Harbor' },
                      { id: 'd', text: 'The Russian Revolution' }
                    ],
                    answer: 'a',
                    hint: 'A young nationalist shot an heir to a throne in Sarajevo, June 1914.',
                    steps: [
                      'Gavrilo Princip assassinated **Franz Ferdinand**, heir to Austria-Hungary, in Sarajevo on June 28, 1914.',
                      'The assassination was the *spark* — alliances and mobilization plans then converted a regional crisis into a continental war. Poland (1939) and Pearl Harbor (1941) belong to WWII.'
                    ],
                    answerText: 'The assassination of Archduke Franz Ferdinand'
                  },
                  {
                    type: 'choice',
                    prompt: 'Trench warfare on the Western Front produced:',
                    choices: [
                      { id: 'a', text: 'Rapid, decisive battles' },
                      { id: 'b', text: 'Mostly naval combat' },
                      { id: 'c', text: 'A quick Allied victory in 1914' },
                      { id: 'd', text: 'A bloody stalemate with massive casualties for tiny gains' }
                    ],
                    answer: 'd',
                    hint: 'Machine guns and artillery made defense far stronger than offense.',
                    steps: [
                      'Defensive weapons — **machine guns, barbed wire, artillery** — slaughtered attacking infantry, so both sides dug in along hundreds of miles of trenches.',
                      'The result was years of stalemate: battles like the Somme (1916) cost a million casualties to move the line a few miles.'
                    ],
                    answerText: 'A bloody stalemate with massive casualties'
                  },
                  {
                    type: 'choice',
                    prompt: 'The United States entered World War I in:',
                    choices: [
                      { id: 'a', text: '1914' },
                      { id: 'b', text: '1917' },
                      { id: 'c', text: '1919' },
                      { id: 'd', text: '1941' }
                    ],
                    answer: 'b',
                    hint: 'It came three years into the war — the same year as the Russian Revolution.',
                    steps: [
                      'The U.S. declared war in **April 1917**, pushed by Germany\'s unrestricted submarine warfare (e.g., the Lusitania sinking) and the Zimmermann Telegram.',
                      'Fresh American troops and supplies tipped the exhausted balance; 1941 is the U.S. entry into **World War II**, not the first war.'
                    ],
                    answerText: '1917'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Treaty of Versailles (1919):',
                    choices: [
                      { id: 'a', text: 'Created the United Nations' },
                      { id: 'b', text: 'Invited Germany to help draft it' },
                      { id: 'c', text: 'Blamed Germany for the war and imposed heavy reparations' },
                      { id: 'd', text: 'Gave Germany new territory' }
                    ],
                    answer: 'c',
                    hint: 'Hitler later campaigned on overturning it — that tells you how Germany experienced it.',
                    steps: [
                      'Versailles assigned Germany the "**war guilt**" clause, massive reparations, territorial losses, and military restrictions — drafted largely without German participation.',
                      'That humiliation became fuel for extremist politics; the UN came after **WWII** (1945), as the League of Nations\' successor.'
                    ],
                    answerText: 'Blamed Germany and imposed heavy reparations'
                  },
                  {
                    type: 'choice',
                    prompt: 'World War II in Europe began when:',
                    choices: [
                      { id: 'a', text: 'Germany invaded Poland on September 1, 1939' },
                      { id: 'b', text: 'Japan attacked Pearl Harbor' },
                      { id: 'c', text: 'The Treaty of Versailles was signed' },
                      { id: 'd', text: 'D-Day began' }
                    ],
                    answer: 'a',
                    hint: 'Britain and France declared war two days after this invasion.',
                    steps: [
                      'Germany\'s invasion of **Poland** on September 1, 1939 triggered British and French declarations of war — the official start of WWII in Europe.',
                      'Pearl Harbor (1941) brought the U.S. in; D-Day (1944) opened the western front near the war\'s end — not its beginning.'
                    ],
                    answerText: 'Germany invaded Poland, September 1, 1939'
                  },
                  {
                    type: 'choice',
                    prompt: 'The significance of Pearl Harbor (December 7, 1941) is that it:',
                    choices: [
                      { id: 'a', text: 'Ended World War II' },
                      { id: 'b', text: 'Began the war in Europe' },
                      { id: 'c', text: 'Was a German attack on Britain' },
                      { id: 'd', text: 'Brought the United States into World War II' }
                    ],
                    answer: 'd',
                    hint: 'Until then, the U.S. had stayed officially neutral — a surprise attack changed that overnight.',
                    steps: [
                      'Japan\'s surprise attack on the U.S. naval base at Pearl Harbor, Hawaii killed ~2,400 Americans and destroyed much of the Pacific fleet.',
                      'Congress declared war on Japan the next day, and Germany declared war on the U.S. days later — turning a European/Asian war into a fully **global** conflict with American industrial power committed.'
                    ],
                    answerText: 'Brought the United States into World War II'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Holocaust was:',
                    choices: [
                      { id: 'a', text: 'A famine caused by the war' },
                      { id: 'b', text: 'The Nazis\' systematic genocide of approximately 6 million Jews and millions of other victims' },
                      { id: 'c', text: 'The Allied bombing campaign' },
                      { id: 'd', text: 'A series of battles in the Pacific' }
                    ],
                    answer: 'b',
                    hint: 'It was a state-organized program of mass murder, not a battle or natural disaster.',
                    steps: [
                      'Nazi Germany and its collaborators systematically murdered **~6 million Jews**, along with Roma, disabled people, political prisoners, and others.',
                      'Recognizing it as *deliberate genocide* — distinct from wartime casualties — is essential both to historical accuracy and to understanding why the UN and human-rights law were built afterward.'
                    ],
                    answerText: 'The systematic genocide of ~6 million Jews'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which international organization was founded in 1945 in response to World War II?',
                    choices: [
                      { id: 'a', text: 'The League of Nations' },
                      { id: 'b', text: 'NATO' },
                      { id: 'c', text: 'The United Nations' },
                      { id: 'd', text: 'The European Union' }
                    ],
                    answer: 'c',
                    hint: 'The League failed to prevent the war — this body was built to succeed where it failed.',
                    steps: [
                      'The **United Nations** was founded at the San Francisco Conference in 1945, designed to keep peace with real great-power participation (the Security Council).',
                      'The League of Nations (1920) had failed precisely because powers like the U.S. never joined; NATO (1949) and the EU came later, as Cold War and integration projects.'
                    ],
                    answerText: 'The United Nations'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'us-history',
      title: 'U.S. History',
      subtitle: 'Grades 9–12 · Survey',
      summary: 'From thirteen colonies to superpower — revolution, civil war, industrialization, and the long struggle for civil rights.',
      units: [
        {
          id: 'founding',
          title: 'Founding the nation',
          lessons: [
            {
              id: 'colonies-and-revolution',
              title: 'Colonies and revolution',
              minutes: 10,
              summary: 'How thirteen British colonies went from self-governing settlements to an independent republic.',
              tags: ['colonial america', 'american revolution', 'independence'],
              blocks: [
                { type: 'p', text: 'Thirteen British colonies grew along the Atlantic coast after **Jamestown (1607)** and **Plymouth (1620)**. For generations Britain practiced "salutary neglect," letting colonial assemblies manage local taxes and laws — habits of self-government that would matter enormously.' },
                { type: 'p', text: 'The expensive **French and Indian War (1754–1763)** changed the relationship. To pay debts, Parliament taxed the colonies directly: the **Stamp Act (1765)**, then duties on tea and more. Colonists objected — "**no taxation without representation**" — since they elected no members of Parliament. Protest escalated: the Boston Massacre (1770), the **Boston Tea Party (1773)**, and Britain\'s punitive Intolerable Acts.' },
                { type: 'p', text: 'Fighting began at Lexington and Concord in April 1775. On **July 4, 1776**, the Second Continental Congress adopted the **Declaration of Independence**, grounding the break in Locke\'s natural rights: governments exist to protect life, liberty, and the pursuit of happiness, and rule only by consent.' },
                { type: 'callout', kind: 'key', text: '"No taxation without representation" meant colonists rejected Parliament\'s right to tax them **because they had no seats in it** — not that they refused all taxes.' },
                { type: 'h2', text: 'Winning the war' },
                { type: 'p', text: 'The American victory at **Saratoga (1777)** convinced France the colonists could actually win — and French money, ships, and troops followed. Washington\'s endurance plus French power cornered Cornwallis at **Yorktown (1781)**; the **Treaty of Paris (1783)** recognized American independence.' },
                { type: 'example', title: 'Why Saratoga mattered more than any battle', text: 'France had been watching for proof the rebellion could succeed. A decisive American win at Saratoga supplied that proof → France signed an alliance (1778) → French fleets could challenge the Royal Navy → Cornwallis was trapped at Yorktown because a French fleet, not an American one, blocked his escape. One battle changed the war\'s arithmetic.' }
              ],
              skill: {
                id: 'revolution-causes',
                name: 'Road to revolution',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The first permanent English settlement in North America was:',
                    choices: [
                      { id: 'a', text: 'Plymouth (1620)' },
                      { id: 'b', text: 'Jamestown (1607)' },
                      { id: 'c', text: 'Roanoke (1585)' },
                      { id: 'd', text: 'Boston (1630)' }
                    ],
                    answer: 'b',
                    hint: 'It was a Virginia Company venture — and it nearly starved before tobacco saved it.',
                    steps: [
                      '**Jamestown, Virginia (1607)** was the first permanent English colony, established by the Virginia Company.',
                      'Plymouth (1620) came thirteen years later, and Roanoke (1585) famously **vanished** — so it was a settlement attempt, not a permanent one.'
                    ],
                    answerText: 'Jamestown (1607)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why did Britain begin taxing the American colonies after 1763?',
                    choices: [
                      { id: 'a', text: 'To punish Boston merchants' },
                      { id: 'b', text: 'To fund a war against Spain' },
                      { id: 'c', text: 'To pay the massive debt from the French and Indian War' },
                      { id: 'd', text: 'To pay off the royal family\'s debts' }
                    ],
                    answer: 'c',
                    hint: 'The war that ended in 1763 doubled Britain\'s national debt — and it had been fought partly *for* the colonies.',
                    steps: [
                      'The **French and Indian War (1754–1763)** removed France from North America but left Britain deeply in debt.',
                      'Parliament reasoned the colonies should help pay for their own defense — hence the Stamp Act (1765) and later duties. Colonists, lacking seats in Parliament, saw it differently.'
                    ],
                    answerText: 'To pay debt from the French and Indian War'
                  },
                  {
                    type: 'choice',
                    prompt: '"No taxation without representation" expressed the colonists\' belief that:',
                    choices: [
                      { id: 'a', text: 'Only assemblies they elected could legitimately tax them' },
                      { id: 'b', text: 'All taxes are immoral' },
                      { id: 'c', text: 'Colonists should pay no taxes to anyone' },
                      { id: 'd', text: 'The king should appoint colonial governors' }
                    ],
                    answer: 'a',
                    hint: 'The objection was constitutional — about *who* had the right to tax, not about taxes themselves.',
                    steps: [
                      'Colonists argued that because they elected **no members of Parliament**, Parliament lacked legitimate authority to tax them — a principle from English law itself.',
                      'They still paid taxes to their own elected **colonial assemblies**, which is why this is about representation, not tax rates.'
                    ],
                    answerText: 'Only their elected assemblies could legitimately tax them'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Boston Tea Party (1773) protested:',
                    choices: [
                      { id: 'a', text: 'The closing of Boston Harbor' },
                      { id: 'b', text: 'A ban on drinking tea' },
                      { id: 'c', text: 'High prices on coffee' },
                      { id: 'd', text: 'The Tea Act, which colonists saw as a trick to accept Parliament\'s tax' }
                    ],
                    answer: 'd',
                    hint: 'The Tea Act actually *lowered* the price of tea — the protest was about the principle, not the cost.',
                    steps: [
                      'The Tea Act gave the struggling East India Company a near-monopoly and confirmed Parliament\'s **right to tax** the colonies.',
                      'Colonists dumped 342 chests of tea into Boston Harbor because accepting cheap tea meant accepting the tax principle — Britain answered with the Intolerable Acts, which *then* closed the harbor.'
                    ],
                    answerText: 'The Tea Act and Parliament\'s claimed right to tax'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Declaration of Independence drew most directly on the philosophy of:',
                    choices: [
                      { id: 'a', text: 'John Locke — natural rights and consent of the governed' },
                      { id: 'b', text: 'Thomas Hobbes — absolute monarchy' },
                      { id: 'c', text: 'Machiavelli — power politics' },
                      { id: 'd', text: 'Plato — rule by philosophers' }
                    ],
                    answer: 'a',
                    hint: '"Life, liberty, and the pursuit of happiness" echoes Locke\'s "life, liberty, and property."',
                    steps: [
                      '**Locke** argued government rests on the **consent of the governed** and exists to protect natural rights — and may be replaced when it fails them.',
                      'Jefferson adapted Locke\'s triad into "life, liberty and the pursuit of happiness"; the Declaration is essentially a Lockean argument applied to King George III.'
                    ],
                    answerText: 'John Locke\'s natural rights philosophy'
                  },
                  {
                    type: 'choice',
                    prompt: 'The turning point of the Revolutionary War was:',
                    choices: [
                      { id: 'a', text: 'The Boston Tea Party' },
                      { id: 'b', text: 'The crossing of the Delaware' },
                      { id: 'c', text: 'The victory at Saratoga, which won the French alliance' },
                      { id: 'd', text: 'The signing of the Declaration' }
                    ],
                    answer: 'c',
                    hint: 'It\'s the victory that convinced a European superpower to join the American side.',
                    steps: [
                      'The American victory at **Saratoga (October 1777)** proved the rebellion could defeat British armies in the field.',
                      'France then signed a formal alliance (1778), supplying the navy and troops that made Yorktown possible — which is why historians call Saratoga the turning point even though the war continued four more years.'
                    ],
                    answerText: 'Saratoga, which won the French alliance'
                  },
                  {
                    type: 'choice',
                    prompt: 'Major fighting in the Revolutionary War effectively ended with the British surrender at:',
                    choices: [
                      { id: 'a', text: 'Lexington' },
                      { id: 'b', text: 'Yorktown (1781)' },
                      { id: 'c', text: 'Saratoga' },
                      { id: 'd', text: 'Gettysburg' }
                    ],
                    answer: 'b',
                    hint: 'A French fleet sealed the escape route while Washington\'s army closed in on land.',
                    steps: [
                      'At **Yorktown (1781)**, Washington\'s army and the French fleet trapped General Cornwallis, forcing the surrender of an entire British army.',
                      'Lexington *started* the war (1775), Saratoga was the turning point (1777), and Gettysburg belongs to the Civil War (1863).'
                    ],
                    answerText: 'Yorktown (1781)'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Treaty of Paris (1783):',
                    choices: [
                      { id: 'a', text: 'Ended the French and Indian War' },
                      { id: 'b', text: 'Established the U.S. Constitution' },
                      { id: 'c', text: 'Ended WWI' },
                      { id: 'd', text: 'Formally recognized American independence from Britain' }
                    ],
                    answer: 'd',
                    hint: 'Signed two years after Yorktown — the war\'s legal conclusion.',
                    steps: [
                      'The 1783 Treaty of Paris formally **recognized the United States as independent** and set its boundaries west to the Mississippi River.',
                      'Note there are *two* Treaties of Paris: 1763 ended the French and Indian War; **1783** ended the Revolution — dates matter.'
                    ],
                    answerText: 'Recognized American independence (1783)'
                  }
                ]
              }
            },
            {
              id: 'the-constitution',
              title: 'The Constitution',
              minutes: 10,
              summary: 'Why the Articles of Confederation failed and how the 1787 Convention built a durable frame of government.',
              tags: ['constitution', 'founding', 'federalism', 'bill of rights'],
              blocks: [
                { type: 'p', text: 'The **Articles of Confederation (1781)** created a deliberately weak national government — no power to tax, no executive, no national courts, and unanimous consent required for amendments. **Shays\' Rebellion (1786–87)** — a farmers\' uprising the government struggled to put down — convinced leaders the frame was too weak to survive.' },
                { type: 'p', text: 'In summer 1787, delegates met in Philadelphia and wrote a new **Constitution**. The **Great Compromise** resolved the big fight between large and small states: the House of Representatives by population, the Senate with two seats per state. Three branches — legislative, executive, judicial — would check each other.' },
                { type: 'p', text: 'Ratification was close. **Federalists** (Hamilton, Madison, Jay) argued for the Constitution in the **Federalist Papers**; **Anti-Federalists** feared a strong national government without enumerated rights. The promise to add a **Bill of Rights** won the votes — the first ten amendments were ratified in **1791**.' },
                { type: 'callout', kind: 'key', text: 'The Constitution combines **federalism** (power split between nation and states) with **separation of powers** (power split among three branches) — a double firewall against tyranny.' },
                { type: 'example', title: 'The hardest compromise', text: 'The Three-Fifths Compromise counted each enslaved person as three-fifths of a person for representation and taxation. It kept the convention from collapsing — by embedding slavery\'s political protection into the Constitution, a moral failure with consequences that led toward civil war.' },
                { type: 'p', text: 'The frame endures partly because amendment is deliberately hard: two-thirds of both houses plus three-quarters of the states. In 230+ years, only **27 amendments** have succeeded — yet the document\'s flexibility (the "necessary and proper" clause) lets it adapt without being rewritten.' }
              ],
              skill: {
                id: 'constitution-convention',
                name: 'Constitution and ratification',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The most crippling weakness of the Articles of Confederation was that Congress:',
                    choices: [
                      { id: 'a', text: 'Could not tax — it could only request money from the states' },
                      { id: 'b', text: 'Had too many members' },
                      { id: 'c', text: 'Could declare war too easily' },
                      { id: 'd', text: 'Met too often' }
                    ],
                    answer: 'a',
                    hint: 'A government that cannot raise money cannot do much of anything.',
                    steps: [
                      'Under the Articles, Congress could only **request** funds from states — which often refused — leaving the government unable to pay debts or an army.',
                      'With no executive, no courts, and amendments needing unanimity, the whole structure was designed to be weak; the tax power was simply the most damaging gap.'
                    ],
                    answerText: 'Could not tax — only request money from states'
                  },
                  {
                    type: 'choice',
                    prompt: 'Shays\' Rebellion (1786–87) mattered because it:',
                    choices: [
                      { id: 'a', text: 'Started the Revolutionary War' },
                      { id: 'b', text: 'Freed enslaved people in Massachusetts' },
                      { id: 'c', text: 'Led to the Bill of Rights' },
                      { id: 'd', text: 'Exposed the Confederation government\'s inability to maintain order' }
                    ],
                    answer: 'd',
                    hint: 'It was a crisis the weak government visibly could not handle.',
                    steps: [
                      'Farmers led by Daniel Shays rose against debt collection and foreclosure; the Confederation Congress could not even fund a force to stop them — Massachusetts had to handle it alone.',
                      'Watching a state suppress a rebellion **without** federal help convinced leaders the Articles had to be replaced — a direct cause of the 1787 Convention.'
                    ],
                    answerText: 'Showed the government could not maintain order'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Great Compromise resolved the dispute over representation by creating:',
                    choices: [
                      { id: 'a', text: 'A single all-powerful legislature' },
                      { id: 'b', text: 'A House apportioned by population and a Senate with equal votes per state' },
                      { id: 'c', text: 'Three presidents sharing power' },
                      { id: 'd', text: 'An electoral college' }
                    ],
                    answer: 'b',
                    hint: 'It is why California and Wyoming both have two senators, but very different House delegations.',
                    steps: [
                      'Large states wanted representation by **population**; small states wanted **equal** representation. The compromise gave each a chamber.',
                      'The House satisfies population; the Senate (two seats per state) satisfies equality — the structure of Congress to this day.'
                    ],
                    answerText: 'House by population, Senate equal per state'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Federalists were those who:',
                    choices: [
                      { id: 'a', text: 'Opposed the Constitution' },
                      { id: 'b', text: 'Wanted a monarchy' },
                      { id: 'c', text: 'Supported ratifying the Constitution and a stronger national government' },
                      { id: 'd', text: 'Supported the Articles of Confederation' }
                    ],
                    answer: 'c',
                    hint: 'Hamilton and Madison wrote the Federalist Papers to persuade skeptics — persuade them of what?',
                    steps: [
                      '**Federalists** supported the new Constitution, arguing a stronger federal government was necessary for the union to survive.',
                      'Their opponents — **Anti-Federalists** — feared centralized power and demanded explicit protections for rights, which produced the Bill of Rights.'
                    ],
                    answerText: 'Supported ratifying the Constitution'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Federalist Papers were written by:',
                    choices: [
                      { id: 'a', text: 'Alexander Hamilton, James Madison, and John Jay' },
                      { id: 'b', text: 'Thomas Jefferson and Benjamin Franklin' },
                      { id: 'c', text: 'George Washington alone' },
                      { id: 'd', text: 'Patrick Henry and Samuel Adams' }
                    ],
                    answer: 'a',
                    hint: 'Three men, one shared pen name: "Publius."',
                    steps: [
                      '**Hamilton, Madison, and Jay** wrote 85 essays under the name "Publius" to argue for ratification in New York.',
                      'Jefferson was in France as ambassador during the convention, and Henry and Adams were leading *Anti-Federalists* — the opposing side.'
                    ],
                    answerText: 'Hamilton, Madison, and Jay'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Bill of Rights exists primarily because:',
                    choices: [
                      { id: 'a', text: 'George Washington demanded it' },
                      { id: 'b', text: 'Britain required it in the Treaty of Paris' },
                      { id: 'c', text: 'The Supreme Court ordered it' },
                      { id: 'd', text: 'Anti-Federalists made its promise a condition for ratifying the Constitution' }
                    ],
                    answer: 'd',
                    hint: 'It was a political deal: "ratify now, amend immediately after."',
                    steps: [
                      'Anti-Federalists refused to support a Constitution that **lacked enumerated rights**; Federalists promised amendments as the price of ratification.',
                      'Madison kept that promise in the first Congress, and the states ratified the first ten amendments in **1791**.'
                    ],
                    answerText: 'Anti-Federalists demanded it during ratification'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Bill of Rights consists of:',
                    choices: [
                      { id: 'a', text: 'The first three articles of the Constitution' },
                      { id: 'b', text: 'The first ten amendments, ratified in 1791' },
                      { id: 'c', text: 'The Declaration of Independence' },
                      { id: 'd', text: 'All 27 amendments' }
                    ],
                    answer: 'b',
                    hint: 'Think of the famous list: speech, religion, trial by jury...',
                    steps: [
                      'The Bill of Rights is specifically the **first ten amendments** — the deal struck at ratification — listing freedoms and protections the federal government may not violate.',
                      'Articles I–III create the three branches of government; amendments 11–27 came later and are not part of "the Bill of Rights."'
                    ],
                    answerText: 'The first ten amendments (1791)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why have only 27 amendments been added in over 230 years?',
                    choices: [
                      { id: 'a', text: 'Amendments expire after ten years' },
                      { id: 'b', text: 'Americans stopped proposing amendments' },
                      { id: 'c', text: 'The process is deliberately hard — two-thirds of Congress plus three-quarters of the states' },
                      { id: 'd', text: 'Only the Supreme Court may propose them' }
                    ],
                    answer: 'c',
                    hint: 'Each amendment needs supermajorities at two levels of government.',
                    steps: [
                      'Article V requires **two-thirds** of both houses to propose an amendment and **three-quarters** of states to ratify — supermajorities that filter out all but the most broadly supported changes.',
                      'The difficulty is a feature: it makes the Constitution stable while the elastic "necessary and proper" clause supplies flexibility without formal amendment.'
                    ],
                    answerText: 'The amendment process is deliberately difficult'
                  }
                ]
              }
            },
            {
              id: 'civil-war-reconstruction',
              title: 'Civil War and Reconstruction',
              minutes: 10,
              summary: 'The deadliest American war ended slavery — and the fragile peace that followed decided what freedom would mean.',
              tags: ['civil war', 'reconstruction', 'slavery', 'lincoln'],
              blocks: [
                { type: 'p', text: 'The Civil War\'s central cause was **slavery** — above all the question of its expansion into western territories. Decades of compromise (Missouri Compromise 1820, Compromise of 1850, Kansas–Nebraska Act 1854\'s "Bleeding Kansas," Dred Scott 1857) each failed. When **Lincoln** — opposed to slavery\'s expansion — won in 1860, South Carolina seceded that December.' },
                { type: 'p', text: 'War began at **Fort Sumter (April 1861)** and lasted until 1865, killing roughly **620,000 soldiers** — the deadliest conflict in U.S. history. The **Emancipation Proclamation (January 1, 1863)** transformed the war into a fight to end slavery and deterred Britain from aiding the South; **Gettysburg (July 1863)** repelled Lee\'s northern invasion.' },
                { type: 'p', text: 'Lee surrendered at **Appomattox on April 9, 1865**; Lincoln was assassinated five days later. **Reconstruction (1865–1877)** followed: three constitutional amendments rebuilt citizenship — the **13th** abolished slavery (1865), the **14th** guaranteed citizenship and equal protection (1868), and the **15th** barred racial discrimination in voting (1870). Black men voted and held office across the South.' },
                { type: 'callout', kind: 'key', text: 'Memory aid for the Reconstruction Amendments: **13 freed, 14 defined citizenship, 15 protected the vote**.' },
                { type: 'callout', kind: 'warning', text: 'When federal troops withdrew in 1877, enforcement collapsed and **Jim Crow segregation** took hold for nearly a century — a lesson that rights on paper need enforcement to be real.' },
                { type: 'example', title: 'Why Emancipation changed the war', text: 'Before 1863, European powers flirted with recognizing the Confederacy. The Proclamation made Union victory synonymous with ending slavery — and Britain, which had abolished slavery in 1833, could not politically support a slaveholders\' republic. One document turned a war for union into a war for freedom and locked out foreign intervention.' }
              ],
              skill: {
                id: 'civil-war-era',
                name: 'Civil War and Reconstruction',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The central cause of the Civil War was:',
                    choices: [
                      { id: 'a', text: 'Slavery — especially its expansion into new territories' },
                      { id: 'b', text: 'A dispute over tariffs on tea' },
                      { id: 'c', text: 'The location of the national capital' },
                      { id: 'd', text: 'Religious differences' }
                    ],
                    answer: 'a',
                    hint: 'The seceding states said so themselves — read their own declarations of secession.',
                    steps: [
                      'Southern states\' secession declarations named **slavery** as the cause, and every crisis of the 1850s — Kansas-Nebraska, Dred Scott, John Brown — centered on whether slavery could expand.',
                      'Tariffs and "states\' rights" were real debates, but the specific right being defended was slavery; no other issue produced secession.'
                    ],
                    answerText: 'Slavery and its expansion'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Civil War began with the attack on:',
                    choices: [
                      { id: 'a', text: 'Gettysburg' },
                      { id: 'b', text: 'Richmond' },
                      { id: 'c', text: 'Fort Sumter in April 1861' },
                      { id: 'd', text: 'Washington, D.C.' }
                    ],
                    answer: 'c',
                    hint: 'The first shots were fired at a federal fort in Charleston Harbor, South Carolina.',
                    steps: [
                      'Confederate batteries fired on **Fort Sumter** on April 12, 1861 — the first shots of the war.',
                      'Gettysburg came two years later as the war\'s turning point; Richmond was the Confederate capital taken near the end in 1865.'
                    ],
                    answerText: 'Fort Sumter, April 1861'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Emancipation Proclamation (January 1, 1863):',
                    choices: [
                      { id: 'a', text: 'Abolished slavery everywhere in the United States' },
                      { id: 'b', text: 'Declared freedom for enslaved people in the rebelling states, making abolition a war aim' },
                      { id: 'c', text: 'Gave formerly enslaved people the right to vote' },
                      { id: 'd', text: 'Ended the Civil War' }
                    ],
                    answer: 'b',
                    hint: 'Lincoln\'s power as commander-in-chief reached only into enemy territory — the Proclamation\'s scope matched that.',
                    steps: [
                      'As a war measure, the Proclamation freed enslaved people **only in the rebelling states** — not in loyal border states.',
                      'Its power was strategic: it made abolition the Union\'s cause, encouraged Black enlistment, and made British intervention on the South\'s side politically impossible. Full abolition came with the **13th Amendment** (1865).'
                    ],
                    answerText: 'Freed the enslaved in rebelling states, making abolition a war aim'
                  },
                  {
                    type: 'choice',
                    prompt: 'Gettysburg (July 1863) is considered a turning point because:',
                    choices: [
                      { id: 'a', text: 'It was the war\'s first battle' },
                      { id: 'b', text: 'It freed the slaves' },
                      { id: 'c', text: 'It ended the war' },
                      { id: 'd', text: 'It repelled Lee\'s invasion of the North, after which the South never again went on the offensive' }
                    ],
                    answer: 'd',
                    hint: 'Lee gambled on carrying the war into Union territory — what happened to that gamble?',
                    steps: [
                      'Lee\'s second invasion of the North was crushed at Gettysburg over three days — ~50,000 combined casualties, the war\'s bloodiest battle.',
                      'Afterward the Confederacy could only defend, never invade; combined with Vicksburg\'s fall the same week (giving the Union the Mississippi), the war\'s momentum turned decisively.'
                    ],
                    answerText: 'Lee\'s northern invasion was repelled'
                  },
                  {
                    type: 'choice',
                    prompt: 'The 13th Amendment (1865):',
                    choices: [
                      { id: 'a', text: 'Abolished slavery throughout the United States' },
                      { id: 'b', text: 'Granted citizenship' },
                      { id: 'c', text: 'Protected voting rights' },
                      { id: 'd', text: 'Gave women the vote' }
                    ],
                    answer: 'a',
                    hint: 'Remember: "13 freed, 14 defined citizenship, 15 protected the vote."',
                    steps: [
                      'The **13th Amendment** abolished slavery and involuntary servitude (except as criminal punishment) across the entire United States.',
                      'It completed what the Emancipation Proclamation began as a war measure — freedom now rested in the Constitution itself.'
                    ],
                    answerText: 'Abolished slavery throughout the U.S.'
                  },
                  {
                    type: 'choice',
                    prompt: 'The 14th Amendment (1868):',
                    choices: [
                      { id: 'a', text: 'Abolished slavery' },
                      { id: 'b', text: 'Ended Reconstruction' },
                      { id: 'c', text: 'Defined citizenship and guaranteed equal protection of the laws' },
                      { id: 'd', text: 'Lowered the voting age to 18' }
                    ],
                    answer: 'c',
                    hint: 'It reversed Dred Scott and became the most-litigated amendment in the Constitution.',
                    steps: [
                      'The 14th Amendment made anyone born on U.S. soil a **citizen** (overturning Dred Scott) and required states to provide **due process and equal protection**.',
                      'Its equal-protection clause later powered rulings from *Brown v. Board* onward — arguably the Constitution\'s most consequential single sentence.'
                    ],
                    answerText: 'Citizenship and equal protection of the laws'
                  },
                  {
                    type: 'choice',
                    prompt: 'The 15th Amendment (1870):',
                    choices: [
                      { id: 'a', text: 'Guaranteed equal pay for women' },
                      { id: 'b', text: 'Prohibited denying the vote based on race' },
                      { id: 'c', text: 'Abolished the Electoral College' },
                      { id: 'd', text: 'Established public schools' }
                    ],
                    answer: 'b',
                    hint: 'It\'s the last of the three Reconstruction amendments — what gap in Black men\'s rights remained?',
                    steps: [
                      'The 15th Amendment barred denying the vote "**on account of race, color, or previous condition of servitude.**"',
                      'Its enforcement later collapsed under Jim Crow — poll taxes, literacy tests, and terror suppressed Black voting until the **Voting Rights Act of 1965** finally enforced it.'
                    ],
                    answerText: 'Prohibited racial discrimination in voting'
                  },
                  {
                    type: 'choice',
                    prompt: 'After federal troops left the South in 1877, Reconstruction was followed by:',
                    choices: [
                      { id: 'a', text: 'The immediate granting of full civil rights' },
                      { id: 'b', text: 'The second American Revolution' },
                      { id: 'c', text: 'Immediate industrialization of the South' },
                      { id: 'd', text: 'Jim Crow segregation laws lasting nearly a century' }
                    ],
                    answer: 'd',
                    hint: 'Without federal enforcement, what happened to the rights on paper?',
                    steps: [
                      'The Compromise of 1877 withdrew federal troops; Southern states then built **Jim Crow** — segregation laws, poll taxes, and violence that disenfranchised Black citizens.',
                      'The legal framework lasted until the Civil Rights Act (1964) and Voting Rights Act (1965) — nearly ninety years of second-class citizenship under law.'
                    ],
                    answerText: 'Jim Crow segregation lasting nearly a century'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'the-20th-century',
          title: 'The 20th century',
          lessons: [
            {
              id: 'industrialization',
              title: 'Industrialization and the Progressive Era',
              minutes: 9,
              summary: 'Railroads, steel, and immigration remade America — and reformers pushed back against the costs.',
              tags: ['gilded age', 'progressive era', 'immigration', 'labor'],
              blocks: [
                { type: 'p', text: 'After the Civil War, America industrialized at breakneck speed. The **transcontinental railroad** was completed in 1869, Carnegie made steel cheap, Rockefeller consolidated oil, and Edison\'s bulb (1879) lit the cities. Mark Twain dubbed the era the **Gilded Age** — glittering wealth on the surface, inequality and corruption beneath.' },
                { type: 'p', text: 'Millions of immigrants arrived — **Ellis Island** opened in 1892 — crowding into tenements and staffing the factories. Workers organized: the Pullman Strike (1894) and other clashes marked violent struggles between labor and capital.' },
                { type: 'p', text: 'The **Progressive Era (~1900–1920)** responded. **Muckrakers** exposed abuses — Upton Sinclair\'s *The Jungle* (1906) prompted the Pure Food and Drug and Meat Inspection Acts the same year. Political reforms included the **17th Amendment (1913)** for direct election of senators, and the **19th Amendment (1920)** finally guaranteed women\'s suffrage.' },
                { type: 'callout', kind: 'key', text: 'A **muckraker** is an investigative journalist who exposes corruption — reform\'s research arm. Journalism → public outrage → legislation is the Progressive Era formula.' },
                { type: 'callout', kind: 'warning', text: 'Industrial growth had real costs: child labor, twelve-hour days, and disasters like the **Triangle Shirtwaist fire (1911)** — 146 dead behind locked doors — drove safety reforms.' },
                { type: 'example', title: 'From exposé to law in one year', text: 'Sinclair wrote *The Jungle* to expose worker exploitation, but readers fixated on its descriptions of rotten meat. Public disgust → congressional hearings → the Pure Food and Drug Act and Meat Inspection Act passed in 1906. "I aimed at the public\'s heart," Sinclair said, "and by accident I hit it in the stomach."' }
              ],
              skill: {
                id: 'gilded-progressive',
                name: 'Gilded Age and Progressive reforms',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The transcontinental railroad was completed in:',
                    choices: [
                      { id: 'a', text: '1849' },
                      { id: 'b', text: '1869' },
                      { id: 'c', text: '1898' },
                      { id: 'd', text: '1920' }
                    ],
                    answer: 'b',
                    hint: 'Two railroads met at Promontory Summit, Utah, right after the Civil War.',
                    steps: [
                      'The Central Pacific (building east from California) and Union Pacific (building west) met at **Promontory Summit, Utah, on May 10, 1869**.',
                      'Coast-to-coast travel collapsed from months to about a week — binding the national market together and opening the West to settlement.'
                    ],
                    answerText: '1869'
                  },
                  {
                    type: 'choice',
                    prompt: 'Mark Twain called the era "The Gilded Age" because:',
                    choices: [
                      { id: 'a', text: 'Everyone prospered equally' },
                      { id: 'b', text: 'It was America\'s golden age of farming' },
                      { id: 'c', text: 'The currency was made of gold' },
                      { id: 'd', text: 'Glittering wealth on the surface hid corruption and poverty underneath' }
                    ],
                    answer: 'd',
                    hint: '"Gilded" means covered in a thin layer of gold — what\'s underneath?',
                    steps: [
                      '**Gilding** covers cheap material with a thin gold layer — Twain\'s metaphor for an era that looked prosperous while hiding inequality, bribery, and machine politics.',
                      'Calling it a "golden age" would mean the prosperity was real through and through; Twain\'s point is precisely that it was not.'
                    ],
                    answerText: 'Surface wealth hid corruption and poverty'
                  },
                  {
                    type: 'choice',
                    prompt: 'John D. Rockefeller built his fortune controlling which industry?',
                    choices: [
                      { id: 'a', text: 'Oil' },
                      { id: 'b', text: 'Steel' },
                      { id: 'c', text: 'Railroads' },
                      { id: 'd', text: 'Banking' }
                    ],
                    answer: 'a',
                    hint: 'His company, Standard ___, was broken up in 1911 as an illegal monopoly.',
                    steps: [
                      'Rockefeller\'s **Standard Oil** controlled about 90% of U.S. oil refining through ruthless consolidation — the archetypal "trust."',
                      'The 1911 Supreme Court breakup of Standard Oil under the Sherman Antitrust Act became the defining case in American monopoly law. (Steel was Carnegie; railroads, Vanderbilt.)'
                    ],
                    answerText: 'Oil'
                  },
                  {
                    type: 'choice',
                    prompt: 'Muckrakers were:',
                    choices: [
                      { id: 'a', text: 'Factory owners' },
                      { id: 'b', text: 'Union organizers' },
                      { id: 'c', text: 'Journalists who exposed corruption and social problems' },
                      { id: 'd', text: 'Government inspectors' }
                    ],
                    answer: 'c',
                    hint: 'Sinclair, Tarbell, and Riis wrote for magazines — their tool was exposure.',
                    steps: [
                      '**Muckrakers** were investigative journalists — Ida Tarbell on Standard Oil, Upton Sinclair on meatpacking, Jacob Riis on tenements — who published exposés in mass-circulation magazines.',
                      'Their reporting converted private abuses into public scandals, creating the political pressure that produced Progressive Era laws.'
                    ],
                    answerText: 'Journalists exposing corruption and social problems'
                  },
                  {
                    type: 'choice',
                    prompt: 'Upton Sinclair\'s *The Jungle* (1906) led directly to:',
                    choices: [
                      { id: 'a', text: 'The Pure Food and Drug Act and Meat Inspection Act' },
                      { id: 'b', text: 'The 19th Amendment' },
                      { id: 'c', text: 'The end of the Civil War' },
                      { id: 'd', text: 'The Sherman Antitrust Act' }
                    ],
                    answer: 'a',
                    hint: 'Readers were more horrified by what was *in* the meat than by the workers\' conditions.',
                    steps: [
                      'The novel\'s nauseating descriptions of Chicago meatpacking disgusted the public; within the year Congress passed the **Pure Food and Drug Act** and **Meat Inspection Act (1906)** — ancestors of the FDA.',
                      'The Sherman Act (1890) predates the book; women\'s suffrage came in 1920 through a separate decades-long movement.'
                    ],
                    answerText: 'The Pure Food and Drug Act and Meat Inspection Act'
                  },
                  {
                    type: 'choice',
                    prompt: 'The 17th Amendment (1913) provided for:',
                    choices: [
                      { id: 'a', text: 'Prohibition of alcohol' },
                      { id: 'b', text: 'Direct election of U.S. senators by voters' },
                      { id: 'c', text: 'The federal income tax' },
                      { id: 'd', text: 'Women\'s suffrage' }
                    ],
                    answer: 'b',
                    hint: 'Before it, senators were chosen by state legislatures — a system famous for bribery.',
                    steps: [
                      'The 17th Amendment took Senate selection from **state legislatures** (rife with corruption and deadlocks) and gave it to **voters**.',
                      'For reference: 16th = income tax, 18th = prohibition, 19th = women\'s suffrage — all Progressive Era amendments, easy to confuse.'
                    ],
                    answerText: 'Direct election of senators'
                  },
                  {
                    type: 'choice',
                    prompt: 'The 19th Amendment (1920):',
                    choices: [
                      { id: 'a', text: 'Abolished slavery' },
                      { id: 'b', text: 'Banned alcohol' },
                      { id: 'c', text: 'Lowered the voting age' },
                      { id: 'd', text: 'Prohibited denying the vote on account of sex — women\'s suffrage' }
                    ],
                    answer: 'd',
                    hint: 'It was the culmination of a movement launched at Seneca Falls in 1848.',
                    steps: [
                      'The 19th Amendment forbids denying the vote "**on account of sex**" — the result of 70+ years of organizing by suffragists from Seneca Falls through the National Woman\'s Party.',
                      'Note its wording: like the 15th Amendment it *prohibits discrimination*, rather than granting a positive right — a distinction lawyers still argue over.'
                    ],
                    answerText: 'Women\'s suffrage'
                  },
                  {
                    type: 'choice',
                    prompt: 'Early labor unions primarily sought:',
                    choices: [
                      { id: 'a', text: 'Government ownership of all factories' },
                      { id: 'b', text: 'An end to immigration' },
                      { id: 'c', text: 'Higher wages, shorter hours, and safer conditions' },
                      { id: 'd', text: 'The abolition of the factory system' }
                    ],
                    answer: 'c',
                    hint: 'Think of the famous demand: "eight hours for work, eight hours for rest, eight hours for what we will."',
                    steps: [
                      'Unions like the Knights of Labor and AFL pursued concrete improvements: **the 8-hour day, better wages, safety rules, and limits on child labor**.',
                      'Most mainstream unions wanted a better deal *within* capitalism — not government ownership (a socialist position) or abolishing factories outright.'
                    ],
                    answerText: 'Higher wages, shorter hours, safer conditions'
                  }
                ]
              }
            },
            {
              id: 'great-depression',
              title: 'The Great Depression and the New Deal',
              minutes: 10,
              summary: 'The worst economic collapse in American history — and the federal response that redefined government\'s role.',
              tags: ['great depression', 'new deal', 'fdr', 'economy'],
              blocks: [
                { type: 'p', text: 'The 1920s boom rested on weak foundations: farmers had struggled all decade, buying on easy credit was everywhere, and stocks were bid up on borrowed money ("margin"). The crash of **October 1929** — Black Tuesday on the 29th — was the trigger, not the sole cause.' },
                { type: 'p', text: 'The collapse cascaded. With no deposit insurance, rumors triggered **bank runs** — thousands of banks failed, taking savings with them. Unemployment reached roughly **25% by 1933**. In the Plains, drought and poor farming practices produced the **Dust Bowl**, sending thousands of families west. Shantytowns were bitterly nicknamed "**Hoovervilles**" after the president blamed for doing too little.' },
                { type: 'p', text: '**Franklin D. Roosevelt**, elected in 1932, answered with the **New Deal (1933–)**: "relief, recovery, reform." The CCC and WPA put millions to work; the **FDIC** insured deposits; the SEC regulated markets; **Social Security (1935)** created old-age pensions and unemployment insurance. The New Deal didn\'t end the Depression — World War II\'s massive spending did — but it rebuilt confidence and remade the federal government\'s role.' },
                { type: 'callout', kind: 'key', text: 'The New Deal\'s lasting change was philosophical: Americans came to expect the **federal government** to manage the economy and provide a safety net.' },
                { type: 'example', title: 'How a bank run cascades', text: 'Banks lend out most deposits, keeping only a fraction in reserve. A rumor → depositors line up to withdraw → the bank can\'t pay everyone → it collapses → panic spreads to the next bank. FDIC insurance breaks the cycle: if deposits are guaranteed, there\'s no reason to run — which is why bank panics largely stopped after 1933.' },
                { type: 'callout', kind: 'warning', text: 'Policy deepened the crash: the **Smoot-Hawley Tariff (1930)** triggered retaliatory tariffs that strangled world trade, and tight money let failing banks multiply. The Depression was an economic event made worse by political choices.' }
              ],
              skill: {
                id: 'depression-new-deal',
                name: 'Depression and New Deal',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Historians view the October 1929 stock market crash as:',
                    choices: [
                      { id: 'a', text: 'The sole cause of the Depression' },
                      { id: 'b', text: 'A trigger that exposed deeper weaknesses, not the whole cause' },
                      { id: 'c', text: 'Unrelated to the Depression' },
                      { id: 'd', text: 'A minor event with no lasting effects' }
                    ],
                    answer: 'b',
                    hint: 'Farmers were already struggling, banks were already fragile, and credit was already overextended *before* the crash.',
                    steps: [
                      'The crash destroyed confidence and wealth, but **farm depression, weak banks, and debt-fueled speculation** had existed all through the 1920s.',
                      'Treating the crash as the only cause misses the point: it lit the fuse on an economy already loaded with problems.'
                    ],
                    answerText: 'A trigger exposing deeper weaknesses'
                  },
                  {
                    type: 'choice',
                    prompt: 'By 1933, U.S. unemployment had reached approximately:',
                    choices: [
                      { id: 'a', text: '5%' },
                      { id: 'b', text: '10%' },
                      { id: 'c', text: '15%' },
                      { id: 'd', text: '25%' }
                    ],
                    answer: 'd',
                    hint: 'Roughly one worker in four had no job.',
                    steps: [
                      'Unemployment peaked at about **25% in 1933** — roughly 12–13 million Americans — the highest in U.S. history.',
                      'That scale explains the New Deal\'s ambition: one in four workers idle meant the crisis could not be handled by private charity or local relief alone.'
                    ],
                    answerText: 'About 25%'
                  },
                  {
                    type: 'choice',
                    prompt: 'Bank failures spread during the Depression because:',
                    choices: [
                      { id: 'a', text: 'Deposit insurance did not exist, so panic withdrawals broke solvent banks' },
                      { id: 'b', text: 'Banks refused to lend money' },
                      { id: 'c', text: 'The government closed banks on purpose' },
                      { id: 'd', text: 'Foreign banks bought out American ones' }
                    ],
                    answer: 'a',
                    hint: 'Banks keep only a fraction of deposits on hand — what happens when everyone demands their money at once?',
                    steps: [
                      'Without insurance, any rumor sent depositors rushing to withdraw; since banks lend most deposits out, even **healthy banks collapsed under runs** — about 9,000 failed in the 1930s.',
                      'The **FDIC (1933)** fixed this by guaranteeing deposits, removing the reason to panic — bank runs nearly disappeared afterward.'
                    ],
                    answerText: 'No deposit insurance meant panic broke solvent banks'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Dust Bowl resulted from:',
                    choices: [
                      { id: 'a', text: 'A single hurricane' },
                      { id: 'b', text: 'Volcanic ash' },
                      { id: 'c', text: 'Severe drought combined with farming practices that stripped the land of anchoring grasses' },
                      { id: 'd', text: 'Factory pollution' }
                    ],
                    answer: 'c',
                    hint: 'It happened in the Great Plains, where deep-rooted prairie grass had held the soil for millennia.',
                    steps: [
                      'Farmers had plowed up the Plains\' deep-rooted grasses for wheat; when severe **drought** hit in the 1930s, nothing held the topsoil.',
                      'Massive dust storms buried farms and sent thousands of "Okie" families migrating west — a human disaster layered onto the economic one.'
                    ],
                    answerText: 'Drought plus farming that removed anchoring grasses'
                  },
                  {
                    type: 'choice',
                    prompt: 'The New Deal\'s three goals are usually summarized as:',
                    choices: [
                      { id: 'a', text: 'Relief, recovery, reform' },
                      { id: 'b', text: 'Tax, spend, regulate' },
                      { id: 'c', text: 'War, peace, prosperity' },
                      { id: 'd', text: 'Tariffs, trade, treaties' }
                    ],
                    answer: 'a',
                    hint: 'The "three R\'s" — help people now, restart the economy, prevent a repeat.',
                    steps: [
                      '**Relief** for the suffering (CCC, WPA jobs), **recovery** for the economy (AAA, industrial codes), and **reform** to prevent recurrence (FDIC, SEC, Social Security).',
                      'The three R\'s map to cause: immediate pain, broken economy, and the structural weaknesses that allowed both.'
                    ],
                    answerText: 'Relief, recovery, reform'
                  },
                  {
                    type: 'choice',
                    prompt: 'The FDIC was created to:',
                    choices: [
                      { id: 'a', text: 'Regulate the stock market' },
                      { id: 'b', text: 'Provide farm subsidies' },
                      { id: 'c', text: 'Build public housing' },
                      { id: 'd', text: 'Insure bank deposits so that runs would stop' }
                    ],
                    answer: 'd',
                    hint: 'It exists because of what happened to depositors in 1930–33.',
                    steps: [
                      'The **Federal Deposit Insurance Corporation** guarantees deposits (today up to $250,000), so depositors have no reason to panic and start a run.',
                      'It targeted the Depression\'s contagion mechanism directly — distinguishing it from the SEC (stock markets) and farm programs like the AAA.'
                    ],
                    answerText: 'Insure bank deposits'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Social Security Act (1935) established:',
                    choices: [
                      { id: 'a', text: 'Free college for veterans' },
                      { id: 'b', text: 'Pensions for the elderly plus unemployment insurance' },
                      { id: 'c', text: 'National health insurance' },
                      { id: 'd', text: 'The 8-hour workday' }
                    ],
                    answer: 'b',
                    hint: 'It is the program your paycheck\'s FICA deduction still funds today.',
                    steps: [
                      'Social Security created **old-age pensions** funded by payroll taxes, plus **unemployment insurance** and aid to dependent families — the core of the American safety net.',
                      'It was deliberately structured as a contributory insurance program, which is why it survived politically where pure welfare proposals failed.'
                    ],
                    answerText: 'Elderly pensions and unemployment insurance'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Depression finally ended primarily because of:',
                    choices: [
                      { id: 'a', text: 'The New Deal\'s agricultural programs' },
                      { id: 'b', text: 'A return to the gold standard' },
                      { id: 'c', text: 'Massive government spending for World War II' },
                      { id: 'd', text: 'Foreign investment' }
                    ],
                    answer: 'c',
                    hint: 'Unemployment only fell below pre-crash levels once the economy was put on a war footing.',
                    steps: [
                      'Despite real relief, unemployment stayed in double digits through the 1930s; only **WWII mobilization** — factories running flat out, 12+ million in uniform — restored full employment.',
                      'This is the strongest evidence for the Keynesian lesson: the earlier New Deal spending helped but was simply too *small* for a hole that deep.'
                    ],
                    answerText: 'World War II spending'
                  }
                ]
              }
            },
            {
              id: 'civil-rights-movement',
              title: 'The Civil Rights Movement',
              minutes: 10,
              summary: 'A generation of organizers dismantled legal segregation through courts, boycotts, and disciplined nonviolence.',
              tags: ['civil rights', 'segregation', 'mlk', 'voting rights'],
              blocks: [
                { type: 'p', text: 'After Reconstruction collapsed, **Jim Crow** laws enforced segregation across the South, blessed by *Plessy v. Ferguson* (1896)\'s doctrine of "separate but equal." Schools, buses, restaurants, and voting were all segregated or denied.' },
                { type: 'p', text: 'The legal attack came first: ***Brown v. Board of Education* (1954)** unanimously ruled school segregation unconstitutional — "separate educational facilities are inherently unequal." Then mass action: Rosa Parks\'s arrest launched the **Montgomery Bus Boycott (1955–56)** and made **Martin Luther King Jr.** a national leader; federal troops escorted the **Little Rock Nine** into school in 1957.' },
                { type: 'p', text: 'Nonviolent direct action escalated: **Greensboro sit-ins (1960)**, Freedom Riders (1961), Birmingham (1963) — and the **March on Washington (August 1963)**, where King delivered "I Have a Dream." The victories were legislative: the **Civil Rights Act of 1964** outlawed segregation and employment discrimination, and the **Voting Rights Act of 1965** destroyed the tools of disenfranchisement.' },
                { type: 'callout', kind: 'key', text: '**Nonviolent resistance** means deliberately breaking an unjust law — while accepting the penalty — to expose injustice and pressure the public conscience.' },
                { type: 'example', title: 'Why the bus boycott worked', text: 'Black riders supplied roughly three-quarters of Montgomery\'s bus fares. A ~381-day boycott bled the company dry while carpools and walking demonstrated discipline. Economic leverage plus moral pressure — the template for every campaign that followed.' },
                { type: 'p', text: 'The struggle continued: King was assassinated in 1968, and legal equality left de facto inequality in housing, schools, and wealth — debates that continue today. The movement\'s playbook inspired later campaigns for women\'s, farmworkers\' (Cesar Chávez), and disability rights.' }
              ],
              skill: {
                id: 'civil-rights',
                name: 'Civil Rights Movement',
                bank: [
                  {
                    type: 'choice',
                    prompt: '"Separate but equal" — the legal basis for segregation — came from:',
                    choices: [
                      { id: 'a', text: 'The Civil Rights Act' },
                      { id: 'b', text: 'Brown v. Board of Education' },
                      { id: 'c', text: 'Plessy v. Ferguson (1896)' },
                      { id: 'd', text: 'The Emancipation Proclamation' }
                    ],
                    answer: 'c',
                    hint: 'It was a Supreme Court decision about railroad cars in Louisiana.',
                    steps: [
                      'In ***Plessy v. Ferguson* (1896)**, the Supreme Court upheld a Louisiana law segregating train cars, ruling separate facilities constitutional if "equal."',
                      'That doctrine legitimized Jim Crow for 58 years, until *Brown v. Board* (1954) declared that in education, "separate... is inherently unequal."'
                    ],
                    answerText: 'Plessy v. Ferguson (1896)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Brown v. Board of Education (1954) ruled that:',
                    choices: [
                      { id: 'a', text: 'School segregation is unconstitutional' },
                      { id: 'b', text: 'Segregation is acceptable if facilities are equal' },
                      { id: 'c', text: 'Busing is required everywhere' },
                      { id: 'd', text: 'Private schools must integrate' }
                    ],
                    answer: 'a',
                    hint: 'Chief Justice Warren\'s unanimous opinion targeted schools as the foundation of opportunity.',
                    steps: [
                      'The Court ruled unanimously that "separate educational facilities are **inherently unequal**" — segregated schooling stigmatizes Black children regardless of building quality.',
                      'It overturned Plessy\'s doctrine *in education* specifically; resistance was fierce enough that President Eisenhower sent troops to integrate Little Rock Central High in 1957.'
                    ],
                    answerText: 'School segregation is unconstitutional'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Montgomery Bus Boycott began after:',
                    choices: [
                      { id: 'a', text: 'The March on Washington' },
                      { id: 'b', text: 'Rosa Parks was arrested for refusing to give up her seat' },
                      { id: 'c', text: 'The Civil Rights Act passed' },
                      { id: 'd', text: 'The Little Rock Nine integrated schools' }
                    ],
                    answer: 'b',
                    hint: 'December 1955: a seamstress, a city bus, and a year-long boycott.',
                    steps: [
                      'On December 1, 1955, **Rosa Parks** refused to surrender her seat to a white passenger and was arrested — within days, the Black community organized a boycott.',
                      'The boycott ran ~381 days until courts desegregated the buses, and it introduced the movement\'s young pastor-leader, **Martin Luther King Jr.**'
                    ],
                    answerText: 'Rosa Parks\'s arrest'
                  },
                  {
                    type: 'choice',
                    prompt: '"I Have a Dream" was delivered at:',
                    choices: [
                      { id: 'a', text: 'The Selma bridge' },
                      { id: 'b', text: 'The Birmingham jail' },
                      { id: 'c', text: 'The Lincoln Memorial dedication' },
                      { id: 'd', text: 'The 1963 March on Washington' }
                    ],
                    answer: 'd',
                    hint: 'King spoke before a quarter-million people gathered at the Lincoln Memorial.',
                    steps: [
                      'The **March on Washington for Jobs and Freedom (August 1963)** drew ~250,000 people to pressure Congress to pass civil rights legislation.',
                      'King\'s closing address — "I Have a Dream" — framed the movement as redeeming America\'s founding promises; the Civil Rights Act passed the next year.'
                    ],
                    answerText: 'The 1963 March on Washington'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Civil Rights Act of 1964:',
                    choices: [
                      { id: 'a', text: 'Outlawed segregation in public places and banned employment discrimination' },
                      { id: 'b', text: 'Only addressed voting rights' },
                      { id: 'c', text: 'Ended slavery' },
                      { id: 'd', text: 'Created affirmative action' }
                    ],
                    answer: 'a',
                    hint: 'It was the broadest civil rights law since Reconstruction — think hotels, restaurants, and employers.',
                    steps: [
                      'The Act **outlawed segregation in public accommodations** (hotels, restaurants, theaters) and banned **employment discrimination** by race, color, religion, sex, or national origin.',
                      'Voting rights needed separate legislation — the Voting Rights Act (1965) — because suppression used tools (literacy tests) the 1964 Act did not reach.'
                    ],
                    answerText: 'Outlawed segregation and employment discrimination'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Voting Rights Act of 1965 primarily:',
                    choices: [
                      { id: 'a', text: 'Created the Electoral College' },
                      { id: 'b', text: 'Lowered the voting age to 18' },
                      { id: 'c', text: 'Outlawed literacy tests and sent federal examiners to protect registration' },
                      { id: 'd', text: 'Required photo ID at polls' }
                    ],
                    answer: 'c',
                    hint: 'It targeted the specific tools — literacy tests, poll taxes, intimidation — used to suppress Black voters in the South.',
                    steps: [
                      'The Act banned **literacy tests** and other discriminatory devices, and sent **federal examiners** to register voters where local officials had refused.',
                      'Results were immediate: Black registration in Mississippi jumped from ~7% to ~60% within a few years — the clearest demonstration that rights need enforcement.'
                    ],
                    answerText: 'Outlawed literacy tests and enforced registration'
                  },
                  {
                    type: 'choice',
                    prompt: 'The movement\'s central tactic, nonviolent direct action, means:',
                    choices: [
                      { id: 'a', text: 'Winning elections' },
                      { id: 'b', text: 'Deliberately breaking unjust laws while accepting the consequences, to expose injustice' },
                      { id: 'c', text: 'Armed self-defense' },
                      { id: 'd', text: 'Lobbying Congress quietly' }
                    ],
                    answer: 'b',
                    hint: 'Think of the sit-ins: students sat where they were forbidden — and took the beating without striking back.',
                    steps: [
                      'King and organizers adapted Gandhi\'s approach: **openly disobey unjust rules**, endure the response without violence, and let the spectacle of peaceful protesters beaten or jailed awaken the public.',
                      'The discipline was strategic — violence by protesters would have justified crackdowns; instead, images of attacked nonviolent demonstrators (Birmingham, Selma) turned national opinion.'
                    ],
                    answerText: 'Deliberately breaking unjust laws while accepting consequences'
                  },
                  {
                    type: 'choice',
                    prompt: '"Jim Crow" refers to:',
                    choices: [
                      { id: 'a', text: 'A Confederate general' },
                      { id: 'b', text: 'A New Deal program' },
                      { id: 'c', text: 'A Supreme Court justice' },
                      { id: 'd', text: 'The system of state and local laws enforcing racial segregation in the South' }
                    ],
                    answer: 'd',
                    hint: 'The name came from a minstrel-show caricature — it labels laws, not a person.',
                    steps: [
                      '**Jim Crow** names the web of state and local statutes (roughly 1877–1965) that segregated schools, transport, restaurants, and voting in the South.',
                      'It was a *legal system*, not a person — and its dismantling required both court victories (Brown) and statutes (the 1964/1965 acts).'
                    ],
                    answerText: 'Laws enforcing racial segregation in the South'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'civics-government',
      title: 'Civics & Government',
      subtitle: 'Grades 8–12 · Core',
      summary: 'How American government is designed — the ideas behind it, the machinery of lawmaking, and the rights that limit it.',
      units: [
        {
          id: 'foundations',
          title: 'Foundations of government',
          lessons: [
            {
              id: 'why-government',
              title: 'Why do we have government?',
              minutes: 8,
              summary: 'The social contract: what life without government looks like, and what governments are actually for.',
              tags: ['civics', 'political philosophy', 'social contract'],
              blocks: [
                { type: 'p', text: 'A **government** is the set of institutions that makes and enforces collective decisions for a society. Every community needs rules about safety, property, and disputes — the question is *who decides*, and where that authority comes from.' },
                { type: 'p', text: 'The classic thought experiment is the **state of nature** — life with no government at all. **Thomas Hobbes** imagined it as "solitary, poor, nasty, brutish, and short," arguing we accept authority to escape chaos. **John Locke** answered differently: governments exist to protect **natural rights** — life, liberty, property — and rule only by the **consent of the governed**; a government that violates its purpose may be replaced.' },
                { type: 'p', text: 'In practice, governments keep order and security, provide **public goods** no market supplies well (roads, defense), protect rights, and resolve disputes. **Democracies** put power in citizens\' hands — directly, or through elected representatives — while authoritarian systems concentrate it.' },
                { type: 'callout', kind: 'key', text: 'The **social contract**: people give up some freedom and accept authority in exchange for security and the protection of their rights.' },
                { type: 'example', title: 'The four-way stop test', text: 'At an unsigned intersection everyone stops and goes by turns — a tiny social contract. Scale that up to 330 million strangers sharing roads, airwaves, and waterways and you can see why we delegate rule-making to governments rather than negotiating each encounter.' },
                { type: 'list', items: ['**Preamble goals**: union, justice, domestic tranquility, defense, general welfare, liberty', '**Direct democracy**: citizens vote on issues themselves (town meetings, Athens)', '**Republic/representative**: citizens elect people to decide (the U.S. system)'] }
              ],
              skill: {
                id: 'purpose-of-government',
                name: 'Purpose of government',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A "social contract" is the idea that:',
                    choices: [
                      { id: 'a', text: 'All laws must be written down' },
                      { id: 'b', text: 'People surrender some freedom in exchange for protection and order' },
                      { id: 'c', text: 'Contracts between citizens need government approval' },
                      { id: 'd', text: 'The wealthy should rule' }
                    ],
                    answer: 'b',
                    hint: 'It\'s an implicit deal between a people and their government — each side gives something.',
                    steps: [
                      'The social contract is an **implicit bargain**: individuals accept limits on their freedom (laws, taxes) and in return receive security and protected rights.',
                      'It\'s "social" because it binds a whole community — not a literal signed document, but the logic that justifies government\'s authority.'
                    ],
                    answerText: 'People trade some freedom for protection and order'
                  },
                  {
                    type: 'choice',
                    prompt: 'Thomas Hobbes described life in the state of nature as:',
                    choices: [
                      { id: 'a', text: 'Peaceful and cooperative' },
                      { id: 'b', text: 'A golden age of freedom' },
                      { id: 'c', text: 'Organized around villages' },
                      { id: 'd', text: '"Solitary, poor, nasty, brutish, and short"' }
                    ],
                    answer: 'd',
                    hint: 'Hobbes wrote during civil war — he was a pessimist about life without authority.',
                    steps: [
                      'In *Leviathan* (1651), Hobbes argued that without a power to enforce rules, life becomes a "war of all against all" — **nasty, brutish, and short**.',
                      'His conclusion: even strong authority beats chaos — the pessimistic version of the social contract, which Locke would later answer with rights and consent.'
                    ],
                    answerText: '"Solitary, poor, nasty, brutish, and short"'
                  },
                  {
                    type: 'choice',
                    prompt: 'John Locke\'s natural rights were:',
                    choices: [
                      { id: 'a', text: 'Life, liberty, and property' },
                      { id: 'b', text: 'Faith, hope, and charity' },
                      { id: 'c', text: 'Speech, press, and assembly' },
                      { id: 'd', text: 'Peace, order, and good government' }
                    ],
                    answer: 'a',
                    hint: 'Jefferson borrowed the formula and changed the last word.',
                    steps: [
                      'Locke held that people possess rights to **life, liberty, and property** before government exists — government\'s job is to protect them, not grant them.',
                      'Jefferson adapted this into "life, liberty and the pursuit of happiness" in the Declaration — speech and assembly came later, in the First Amendment.'
                    ],
                    answerText: 'Life, liberty, and property'
                  },
                  {
                    type: 'choice',
                    prompt: '"Consent of the governed" means a government\'s legitimate power comes from:',
                    choices: [
                      { id: 'a', text: 'Military strength' },
                      { id: 'b', text: 'Wealth' },
                      { id: 'c', text: 'The agreement of the people it rules' },
                      { id: 'd', text: 'Religious authority' }
                    ],
                    answer: 'c',
                    hint: 'Think about what elections are *for*, philosophically.',
                    steps: [
                      'The phrase means authority flows **up from the people**, not down from a crown, army, or church — legitimacy comes from the governed agreeing to be governed.',
                      'It\'s the principle that justified revolution: a government that loses consent (as the colonists argued Britain had) loses its right to rule.'
                    ],
                    answerText: 'The agreement of the people it rules'
                  },
                  {
                    type: 'choice',
                    prompt: 'A "public good" like national defense is special because it is:',
                    choices: [
                      { id: 'a', text: 'Always free to produce' },
                      { id: 'b', text: 'Shared by everyone and cannot easily exclude non-payers' },
                      { id: 'c', text: 'Funded entirely by donations' },
                      { id: 'd', text: 'Provided by private companies' }
                    ],
                    answer: 'b',
                    hint: 'Try selling defense to only your paying customers — you can\'t protect one house without protecting the neighbor\'s.',
                    steps: [
                      'Public goods are **non-excludable** (everyone gets them whether they pay or not) and **non-rival** (my use doesn\'t reduce yours) — defense and lighthouses are classic cases.',
                      'Because non-payers can\'t be excluded, markets underprovide them — "free riders" — which is the economic argument for government supplying them through taxes.'
                    ],
                    answerText: 'Shared by all; non-payers cannot be excluded'
                  },
                  {
                    type: 'choice',
                    prompt: 'A direct democracy is one in which:',
                    choices: [
                      { id: 'a', text: 'Citizens vote on issues themselves, without representatives' },
                      { id: 'b', text: 'The military rules directly' },
                      { id: 'c', text: 'Elections happen every week' },
                      { id: 'd', text: 'Laws apply directly to individuals' }
                    ],
                    answer: 'a',
                    hint: 'Ancient Athens and a New England town meeting are the classic examples.',
                    steps: [
                      'In direct democracy, citizens **decide each question personally** — Athens\' assembly voted on laws; town meetings still vote budgets line by line.',
                      'It doesn\'t scale to millions of voters, which is why modern democracies use representatives — a *republic* — instead.'
                    ],
                    answerText: 'Citizens vote on issues themselves'
                  },
                  {
                    type: 'choice',
                    prompt: 'A republic (representative democracy) differs from direct democracy in that:',
                    choices: [
                      { id: 'a', text: 'There are no elections' },
                      { id: 'b', text: 'A king rules' },
                      { id: 'c', text: 'It must be a small country' },
                      { id: 'd', text: 'Citizens elect officials who make decisions on their behalf' }
                    ],
                    answer: 'd',
                    hint: 'When you vote for a senator, you are practicing republican government.',
                    steps: [
                      'In a republic, citizens delegate decision-making to **elected representatives** who are accountable at the next election.',
                      'The U.S. is a republic — we elect Congress rather than voting on each bill — which lets large, diverse populations govern themselves.'
                    ],
                    answerText: 'Citizens elect officials to decide for them'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is a core function of government?',
                    choices: [
                      { id: 'a', text: 'Eliminating all disagreement' },
                      { id: 'b', text: 'Deciding which religion citizens follow' },
                      { id: 'c', text: 'Keeping order, providing services, and protecting rights' },
                      { id: 'd', text: 'Choosing winners in the marketplace' }
                    ],
                    answer: 'c',
                    hint: 'Match it to the Preamble: order, justice, defense, welfare, liberty.',
                    steps: [
                      'Governments **keep order and security** (laws, courts, defense), **provide public services** (roads, schools), and **protect rights**.',
                      'Controlling belief or eliminating disagreement is the mark of authoritarianism, not a legitimate function — the Preamble lists the genuine purposes.'
                    ],
                    answerText: 'Order, services, and rights protection'
                  }
                ]
              }
            },
            {
              id: 'separation-of-powers',
              title: 'Separation of powers and checks and balances',
              minutes: 9,
              summary: 'Three branches that restrain each other — by design, efficiency is sacrificed to prevent tyranny.',
              tags: ['civics', 'constitution', 'checks and balances'],
              blocks: [
                { type: 'p', text: 'The Framers feared concentrated power above all. So the Constitution splits the federal government into three branches: **legislative** (Congress, Article I) makes laws; **executive** (the President, Article II) enforces them; **judicial** (courts, Article III) interprets them.' },
                { type: 'p', text: '**Checks and balances** let each branch restrain the others: the President can **veto** bills; Congress can **override** with two-thirds of both chambers; courts exercise **judicial review** (established in *Marbury v. Madison*, 1803) to strike unconstitutional laws; the Senate confirms judges and treaties; Congress can **impeach** and remove officials.' },
                { type: 'callout', kind: 'key', text: 'Separation of powers divides power; **checks and balances** are the mechanisms that keep it divided — each branch holds a piece of the others\' jobs.' },
                { type: 'example', title: 'The veto dance', text: 'A bill passes the House 290–145 and Senate 60–40. The President vetoes it. Congress overrides — needing 2/3: exactly ≥290 House votes and ≥67 Senate votes, so the Senate vote falls short and the veto stands... unless supporters flip seven senators. Every stage is a new gate where a minority can still be heard.' },
                { type: 'p', text: 'Madison explained the logic in **Federalist 51**: "ambition must be made to counteract ambition." The system is deliberately slow — friction is the feature, since laws that survive every veto point carry broad support and sudden majorities cannot seize the whole machine.' },
                { type: 'callout', kind: 'warning', text: 'Judges aren\'t elected — lifetime tenure protects their independence from politics but makes them the least accountable branch. That trade-off was deliberate: courts must sometimes say "no" to popular majorities.' }
              ],
              skill: {
                id: 'branches-and-checks',
                name: 'Branches and checks',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The legislative branch\'s core job is to:',
                    choices: [
                      { id: 'a', text: 'Make laws' },
                      { id: 'b', text: 'Enforce laws' },
                      { id: 'c', text: 'Interpret laws' },
                      { id: 'd', text: 'Command the military' }
                    ],
                    answer: 'a',
                    hint: 'Congress sits under Article I — the longest article, and the one listed first.',
                    steps: [
                      '**Congress** (House + Senate) writes and passes legislation — the law-*making* function, listed first in Article I.',
                      'Enforcing laws is the executive\'s job (Article II) and interpreting them is the judiciary\'s (Article III) — the three verbs are the fastest way to keep the branches straight.'
                    ],
                    answerText: 'Make laws'
                  },
                  {
                    type: 'choice',
                    prompt: 'Article II of the Constitution establishes:',
                    choices: [
                      { id: 'a', text: 'Congress' },
                      { id: 'b', text: 'The courts' },
                      { id: 'c', text: 'The states\' powers' },
                      { id: 'd', text: 'The presidency and executive branch' }
                    ],
                    answer: 'd',
                    hint: 'The articles run in order: I = legislature, II = ?, III = judiciary.',
                    steps: [
                      'Article I creates Congress, **Article II the presidency**, Article III the courts — matching the order "make, enforce, interpret."',
                      'Remembering the sequence (I, II, III ↔ legislative, executive, judicial) is the reliable way to answer any article-number question.'
                    ],
                    answerText: 'The presidency and executive branch'
                  },
                  {
                    type: 'choice',
                    prompt: 'Congress can override a presidential veto with:',
                    choices: [
                      { id: 'a', text: 'A simple majority of the House' },
                      { id: 'b', text: 'Two-thirds of both chambers' },
                      { id: 'c', text: 'A Supreme Court ruling' },
                      { id: 'd', text: 'Three-quarters of the states' }
                    ],
                    answer: 'b',
                    hint: 'It\'s a supermajority — deliberately harder than passing the bill the first time.',
                    steps: [
                      'The Constitution requires **two-thirds of both the House and Senate** to override a veto — a high bar that makes most vetoes stick.',
                      'That supermajority is the check on the check: it lets Congress defeat a veto only when a bill\'s support is overwhelming, not merely majority.'
                    ],
                    answerText: 'Two-thirds of both chambers'
                  },
                  {
                    type: 'choice',
                    prompt: 'Judicial review is the power of courts to:',
                    choices: [
                      { id: 'a', text: 'Write new laws' },
                      { id: 'b', text: 'Veto executive orders' },
                      { id: 'c', text: 'Declare laws unconstitutional' },
                      { id: 'd', text: 'Appoint judges' }
                    ],
                    answer: 'c',
                    hint: 'It\'s the judiciary\'s check on the other two branches — reviewing what they produce.',
                    steps: [
                      '**Judicial review** lets courts strike down laws and executive actions that violate the Constitution.',
                      'It isn\'t mentioned by name in the Constitution — Chief Justice Marshall established it in *Marbury v. Madison* (1803), reasoning that a written constitution must be the supreme law courts enforce.'
                    ],
                    answerText: 'Declare laws unconstitutional'
                  },
                  {
                    type: 'choice',
                    prompt: 'Judicial review was established as precedent in:',
                    choices: [
                      { id: 'a', text: 'Marbury v. Madison (1803)' },
                      { id: 'b', text: 'Brown v. Board (1954)' },
                      { id: 'c', text: 'McCulloch v. Maryland (1819)' },
                      { id: 'd', text: 'Plessy v. Ferguson (1896)' }
                    ],
                    answer: 'a',
                    hint: 'The earliest case on the list — decided under Chief Justice Marshall, about a technicality in the Judiciary Act.',
                    steps: [
                      '***Marbury v. Madison* (1803)** struck down a section of a federal law for conflicting with the Constitution — the first time the Court claimed that power.',
                      'The ruling was cunning: Marshall *denied* Marbury his remedy, yet in doing so claimed the far larger power to review laws — establishing the judiciary as a co-equal branch.'
                    ],
                    answerText: 'Marbury v. Madison (1803)'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Senate\'s "advice and consent" role covers:',
                    choices: [
                      { id: 'a', text: 'Writing tax bills' },
                      { id: 'b', text: 'Commanding troops' },
                      { id: 'c', text: 'Issuing pardons' },
                      { id: 'd', text: 'Confirming judges, ambassadors, and treaties' }
                    ],
                    answer: 'd',
                    hint: 'The President *nominates* — but the Senate decides whether the nominee serves.',
                    steps: [
                      'The President nominates federal judges, ambassadors, and top officials, and negotiates treaties — but all require **Senate approval** (treaties by two-thirds).',
                      'This check prevents the executive from staffing the government or committing the nation alone; failed nominations (like rejected Supreme Court picks) show the check in action.'
                    ],
                    answerText: 'Confirming judges, ambassadors, and treaties'
                  },
                  {
                    type: 'choice',
                    prompt: 'In impeachment, the roles are divided so that:',
                    choices: [
                      { id: 'a', text: 'The Supreme Court conducts the trial' },
                      { id: 'b', text: 'The House impeaches (charges) and the Senate holds the trial' },
                      { id: 'c', text: 'The President appoints the prosecutor' },
                      { id: 'd', text: 'State governors vote on removal' }
                    ],
                    answer: 'b',
                    hint: '"Impeachment" is only the accusation — like an indictment, not a conviction.',
                    steps: [
                      'The **House impeaches** — approves articles of impeachment by majority — then the **Senate tries** the case; removal requires a two-thirds vote.',
                      'Splitting accusation from verdict between the two chambers makes removal deliberately difficult: presidents have been impeached four times, but none convicted.'
                    ],
                    answerText: 'House charges, Senate tries'
                  },
                  {
                    type: 'choice',
                    prompt: 'The fundamental purpose of checks and balances is to:',
                    choices: [
                      { id: 'a', text: 'Make government more efficient' },
                      { id: 'b', text: 'Speed up lawmaking' },
                      { id: 'c', text: 'Prevent any single branch or faction from gaining unchecked power' },
                      { id: 'd', text: 'Reduce the number of elected officials' }
                    ],
                    answer: 'c',
                    hint: 'Madison: "ambition must be made to counteract ambition." The system accepts slowness in exchange for safety.',
                    steps: [
                      'The design assumes power-seeking is human nature — so it sets **each branch\'s ambition against the others\'**, making tyranny structurally difficult.',
                      'Efficiency is actually sacrificed, not served: every veto point slows things down, and that friction is the intended protection.'
                    ],
                    answerText: 'Prevent any branch from gaining unchecked power'
                  }
                ]
              }
            },
            {
              id: 'bill-of-rights',
              title: 'The Bill of Rights',
              minutes: 9,
              summary: 'Ten amendments that list what the government may not do — the original guardrails on federal power.',
              tags: ['bill of rights', 'amendments', 'rights', 'constitution'],
              blocks: [
                { type: 'p', text: 'The **Bill of Rights** — the first ten amendments, ratified in **1791** — was the price of ratification: Anti-Federalists demanded explicit limits on the new federal government before trusting it.' },
                { type: 'p', text: 'The **First Amendment** alone packs five freedoms: religion (no establishment + free exercise), **speech, press, assembly, and petition**. The Second protects bearing arms; the Third (rarely litigated) bars quartering soldiers in homes.' },
                { type: 'p', text: 'Amendments Four through Eight form the criminal-justice core: the **Fourth** requires warrants based on probable cause; the **Fifth** guarantees due process and bars double jeopardy and self-incrimination; the **Sixth** promises a speedy public jury trial and a lawyer; the **Eighth** forbids excessive bail and cruel and unusual punishment.' },
                { type: 'callout', kind: 'key', text: 'The **Ninth** Amendment says listing some rights doesn\'t deny others retained by the people; the **Tenth** reserves unlisted powers to the states — together they warn against reading the list as exhaustive.' },
                { type: 'h2', text: 'Whom does it bind?' },
                { type: 'p', text: 'Originally the Bill of Rights limited only the **federal** government. After the Civil War, the **Fourteenth Amendment**\'s due-process clause was read to apply ("incorporate") most protections against **state** governments too — the change that made the Bill of Rights matter in daily life.' },
                { type: 'example', title: 'Why you hear "read me my rights"', text: 'The Miranda warning — "you have the right to remain silent" — operationalizes the Fifth Amendment\'s protection against self-incrimination: *Miranda v. Arizona* (1966) ruled that confessions are only valid if suspects were warned first.' },
                { type: 'callout', kind: 'warning', text: 'Rights aren\'t absolute: speech can\'t include true threats or direct incitement, and courts constantly balance liberty against safety. The amendment sets the floor — its edges are argued case by case.' }
              ],
              skill: {
                id: 'first-ten-amendments',
                name: 'The Bill of Rights',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'The Bill of Rights was added to the Constitution mainly to:',
                    choices: [
                      { id: 'a', text: 'Create the federal courts' },
                      { id: 'b', text: 'Address fears that the new government would abuse individual liberties' },
                      { id: 'c', text: 'Establish the amendment process' },
                      { id: 'd', text: 'Describe the duties of citizenship' }
                    ],
                    answer: 'b',
                    hint: 'Anti-Federalists refused to ratify without it — what was their central worry?',
                    steps: [
                      'Anti-Federalists warned a strong central government could **trample individual and state rights** without explicit limits.',
                      'The first ten amendments answered that worry — a list of things the federal government may *not* do, ratified in 1791 as the ratification bargain promised.'
                    ],
                    answerText: 'Protect liberties against federal abuse'
                  },
                  {
                    type: 'choice',
                    prompt: 'The First Amendment protects all of the following EXCEPT:',
                    choices: [
                      { id: 'a', text: 'Freedom of religion' },
                      { id: 'b', text: 'Freedom of speech' },
                      { id: 'c', text: 'Freedom of the press' },
                      { id: 'd', text: 'Freedom from unreasonable searches' }
                    ],
                    answer: 'd',
                    hint: 'Count the five freedoms: religion, speech, press, assembly, petition — which option is missing from that list?',
                    steps: [
                      'The First Amendment\'s five freedoms are **religion, speech, press, assembly, and petition**.',
                      'Freedom from unreasonable searches belongs to the **Fourth Amendment** — a different protection entirely, about warrants and privacy.'
                    ],
                    answerText: 'Freedom from unreasonable searches (that\'s the 4th)'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Fourth Amendment protects people from:',
                    choices: [
                      { id: 'a', text: 'Self-incrimination' },
                      { id: 'b', text: 'Cruel punishments' },
                      { id: 'c', text: 'Unfair taxes' },
                      { id: 'd', text: 'Unreasonable searches and seizures' }
                    ],
                    answer: 'd',
                    hint: 'It\'s why police generally need a warrant — and a warrant needs probable cause.',
                    steps: [
                      'The Fourth Amendment requires that searches be **reasonable** — normally meaning a warrant issued on **probable cause** describing what\'s sought.',
                      'It exists because colonists suffered under British "writs of assistance" — general warrants allowing ransacking at will — a grievance baked into constitutional memory.'
                    ],
                    answerText: 'Unreasonable searches and seizures'
                  },
                  {
                    type: 'choice',
                    prompt: '"Pleading the Fifth" invokes the protection against:',
                    choices: [
                      { id: 'a', text: 'Double jeopardy' },
                      { id: 'b', text: 'Excessive bail' },
                      { id: 'c', text: 'Self-incrimination' },
                      { id: 'd', text: 'Unreasonable search' }
                    ],
                    answer: 'c',
                    hint: 'It\'s the right behind "you have the right to remain silent."',
                    steps: [
                      'The Fifth Amendment says no person "shall be compelled in any criminal case **to be a witness against himself**" — the right not to be forced into self-incriminating testimony.',
                      'Double jeopardy is also in the Fifth (no retrial for the same offense after acquittal), but the phrase "pleading the Fifth" specifically means **silence**.'
                    ],
                    answerText: 'Self-incrimination'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Sixth Amendment guarantees:',
                    choices: [
                      { id: 'a', text: 'A speedy, public jury trial and the right to counsel' },
                      { id: 'b', text: 'Freedom of assembly' },
                      { id: 'c', text: 'The right to vote' },
                      { id: 'd', text: 'Protection from quartering soldiers' }
                    ],
                    answer: 'a',
                    hint: 'It\'s the trial amendment — speed, publicity, jury, and a lawyer.',
                    steps: [
                      'The Sixth Amendment secures the mechanics of a fair criminal trial: it must be **speedy and public**, before an **impartial jury**, with the right to confront witnesses and to **counsel**.',
                      'The Supreme Court later applied it to require free lawyers for defendants who can\'t afford them (*Gideon v. Wainwright*, 1963).'
                    ],
                    answerText: 'Speedy public trial and right to counsel'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Eighth Amendment prohibits:',
                    choices: [
                      { id: 'a', text: 'Double jeopardy' },
                      { id: 'b', text: 'Excessive bail and cruel and unusual punishment' },
                      { id: 'c', text: 'Unreasonable searches' },
                      { id: 'd', text: 'Self-incrimination' }
                    ],
                    answer: 'b',
                    hint: 'It\'s the amendment lawyers cite in death-penalty and prison-conditions cases.',
                    steps: [
                      'The Eighth Amendment bars **excessive bail, excessive fines, and cruel and unusual punishments** — limits on what the state may do even to the convicted.',
                      'Its vagueness is deliberate: "cruel and unusual" evolves with "evolving standards of decency," which is why it anchors modern debates over punishment.'
                    ],
                    answerText: 'Excessive bail and cruel and unusual punishment'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Ninth Amendment tells us that:',
                    choices: [
                      { id: 'a', text: 'Only written rights exist' },
                      { id: 'b', text: 'States can ignore federal rights' },
                      { id: 'c', text: 'The amendments expire' },
                      { id: 'd', text: 'The people retain rights beyond those explicitly listed' }
                    ],
                    answer: 'd',
                    hint: 'Madison\'s worry: what if listing rights implied the unlisted ones didn\'t exist?',
                    steps: [
                      'The Ninth Amendment says the enumeration of rights "shall not be construed to **deny or disparage others retained by the people**" — the list is a floor, not a ceiling.',
                      'It was Madison\'s answer to a drafting dilemma: listing rights was meant to *protect* liberty, not imply that anything unlisted was unprotected.'
                    ],
                    answerText: 'Unlisted rights are retained by the people'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Tenth Amendment reserves to the states or the people:',
                    choices: [
                      { id: 'a', text: 'All judicial powers' },
                      { id: 'b', text: 'The right to declare war' },
                      { id: 'c', text: 'Powers not delegated to the federal government' },
                      { id: 'd', text: 'The power to coin money' }
                    ],
                    answer: 'c',
                    hint: 'It\'s the foundation of federalism — the default rule for unassigned powers.',
                    steps: [
                      'The Tenth Amendment: powers "**not delegated** to the United States... are reserved to the States respectively, or to the people."',
                      'Declaring war and coining money ARE delegated (Congress\'s enumerated powers), so they\'re federal — education and local policing are the classic reserved state powers.'
                    ],
                    answerText: 'Powers not delegated to the federal government'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'branches-and-rights',
          title: 'Branches and rights in action',
          lessons: [
            {
              id: 'how-a-bill-becomes-law',
              title: 'How a bill becomes a law',
              minutes: 9,
              summary: 'The long gauntlet from idea to statute — and why most bills never finish it.',
              tags: ['civics', 'congress', 'lawmaking'],
              blocks: [
                { type: 'p', text: 'The path from idea to law is deliberately hard — the Framers built in many gates so only broadly supported proposals survive. Any member of Congress may introduce a bill; **bills raising revenue must start in the House**.' },
                { type: 'p', text: 'Most bills die in **committee**: experts hold hearings, the committee "marks up" (edits) the text, then votes. Survivors go to the floor — the House strictly limits debate, while the Senate permits unlimited debate: a **filibuster** can only be ended by **60 votes** (cloture).' },
                { type: 'p', text: 'Both chambers must pass **identical text** — different versions go to a **conference committee** to reconcile. Then the President: **signs** it into law; **vetoes** it (a two-thirds override in both chambers revives it); or ignores it — unsigned, it becomes law after 10 days, *unless* Congress adjourns first, in which case it dies silently (a **pocket veto**).' },
                { type: 'callout', kind: 'key', text: 'A bill becomes law only when **both chambers pass identical text** *and* the President signs (or a veto is overridden).' },
                { type: 'example', title: 'The odds are the point', text: 'In a typical Congress, **10,000+ bills** are introduced and only a few hundred become law. That ~3–5% survival rate isn\'t a bug — every gate (committee, two floors, two signatures of agreement, the President\'s desk) is a place where a minority with strong objections can be heard.' },
                { type: 'callout', kind: 'warning', text: 'A pocket veto only works if Congress **adjourns** within the 10-day window — if Congress stays in session, an unsigned bill becomes law automatically. Presidents can\'t quietly kill bills while Congress watches.' },
                { type: 'list', items: ['Introduced → assigned to **committee** (most bills die here)', '**Floor debate + vote** in both chambers', '**Conference committee** reconciles differences', '**President**: sign, veto, or pocket veto'] }
              ],
              skill: {
                id: 'lawmaking-process',
                name: 'How a bill becomes law',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Who may formally introduce a bill in Congress?',
                    choices: [
                      { id: 'a', text: 'Only a member of Congress' },
                      { id: 'b', text: 'The President' },
                      { id: 'c', text: 'Any citizen' },
                      { id: 'd', text: 'Federal judges' }
                    ],
                    answer: 'a',
                    hint: 'The President can *propose* legislation, but someone else must do the formal introducing.',
                    steps: [
                      'Only a **senator or representative** can formally introduce a bill — the Constitution makes lawmaking Congress\'s exclusive job.',
                      'Presidents and citizens propose ideas all the time (the State of the Union is largely an agenda), but a member must sponsor the actual bill.'
                    ],
                    answerText: 'Only a member of Congress'
                  },
                  {
                    type: 'choice',
                    prompt: 'Bills for raising revenue (taxes) must originate in:',
                    choices: [
                      { id: 'a', text: 'The Senate' },
                      { id: 'b', text: 'The Supreme Court' },
                      { id: 'c', text: 'The House of Representatives' },
                      { id: 'd', text: 'State legislatures' }
                    ],
                    answer: 'c',
                    hint: 'Which chamber is apportioned by population — closest to the people who pay?',
                    steps: [
                      'Article I requires revenue bills to begin in the **House**, the chamber elected every two years and apportioned by population.',
                      'The logic dates to "no taxation without representation" — the chamber most directly accountable to voters should initiate taking their money.'
                    ],
                    answerText: 'The House of Representatives'
                  },
                  {
                    type: 'choice',
                    prompt: 'The majority of bills die at which stage?',
                    choices: [
                      { id: 'a', text: 'Presidential veto' },
                      { id: 'b', text: 'In committee, never reaching a floor vote' },
                      { id: 'c', text: 'The Supreme Court' },
                      { id: 'd', text: 'The Electoral College' }
                    ],
                    answer: 'b',
                    hint: 'Thousands are introduced; most are never even debated on the floor.',
                    steps: [
                      'Bills go first to **committee**, where most are simply never scheduled — the "pigeonhole" where ~95% of legislation quietly dies.',
                      'This filtering is intentional: committees let Congress triage 10,000+ proposals per session down to the few hundred worth floor time.'
                    ],
                    answerText: 'In committee'
                  },
                  {
                    type: 'choice',
                    prompt: 'A filibuster is:',
                    choices: [
                      { id: 'a', text: 'A type of federal tax' },
                      { id: 'b', text: 'A military maneuver' },
                      { id: 'c', text: 'A House rule limiting debate' },
                      { id: 'd', text: 'Extended Senate debate used to delay or block a vote' }
                    ],
                    answer: 'd',
                    hint: 'It exploits the Senate\'s tradition of unlimited debate — talk long enough and a vote never happens.',
                    steps: [
                      'Because Senate rules allow unlimited debate, a determined minority can **hold the floor indefinitely** to block a vote — the filibuster.',
                      'Ending debate requires **cloture — 60 votes** — which is why a 41-vote minority can stop most legislation in the Senate.'
                    ],
                    answerText: 'Extended Senate debate to block a vote'
                  },
                  {
                    type: 'choice',
                    prompt: 'Ending a Senate filibuster (cloture) requires:',
                    choices: [
                      { id: 'a', text: '60 votes' },
                      { id: 'b', text: 'A simple majority' },
                      { id: 'c', text: 'Unanimous consent' },
                      { id: 'd', text: 'The President\'s signature' }
                    ],
                    answer: 'a',
                    hint: 'It\'s three-fifths of the Senate — the number that defines modern Senate math.',
                    steps: [
                      '**Cloture — a motion to end debate — needs 60 votes** under Senate rules (Rule XXII).',
                      'That 60-vote threshold, not the 51-vote majority, is what actually determines whether most bills pass the modern Senate.'
                    ],
                    answerText: '60 votes'
                  },
                  {
                    type: 'choice',
                    prompt: 'If the House and Senate pass different versions of the same bill:',
                    choices: [
                      { id: 'a', text: 'The Senate version automatically wins' },
                      { id: 'b', text: 'A conference committee reconciles the differences into identical text' },
                      { id: 'c', text: 'The President chooses one' },
                      { id: 'd', text: 'The bill is dead' }
                    ],
                    answer: 'b',
                    hint: 'Both chambers must approve the *identical* text — so the differences have to be negotiated.',
                    steps: [
                      'A **conference committee** of members from both chambers negotiates a single compromise version.',
                      'Both chambers then vote on that identical text — no amendments allowed — which is why identical wording is the Constitution\'s hard requirement.'
                    ],
                    answerText: 'A conference committee reconciles differences'
                  },
                  {
                    type: 'choice',
                    prompt: 'A presidential veto can be overridden by:',
                    choices: [
                      { id: 'a', text: 'A simple majority in the House' },
                      { id: 'b', text: 'The Supreme Court' },
                      { id: 'c', text: 'A national referendum' },
                      { id: 'd', text: 'A two-thirds vote in both chambers' }
                    ],
                    answer: 'd',
                    hint: 'Same supermajority logic as elsewhere — beating a veto is meant to be rare.',
                    steps: [
                      'Overriding a veto requires **two-thirds of the House and two-thirds of the Senate** — harder than passing the bill originally.',
                      'Only ~7% of vetoes in U.S. history have been overridden, which shows how strong a check the veto is.'
                    ],
                    answerText: 'Two-thirds of both chambers'
                  },
                  {
                    type: 'choice',
                    prompt: 'A pocket veto occurs when:',
                    choices: [
                      { id: 'a', text: 'The President signs a bill secretly' },
                      { id: 'b', text: 'Congress ignores a bill' },
                      { id: 'c', text: 'The President doesn\'t sign within 10 days while Congress is adjourned, so the bill dies' },
                      { id: 'd', text: 'The Senate refuses to vote' }
                    ],
                    answer: 'c',
                    hint: 'It\'s a veto that can\'t be overridden — because there\'s no one in session to override it.',
                    steps: [
                      'If the President takes no action for 10 days, a bill normally becomes law — **but if Congress adjourns within those 10 days**, the bill dies instead.',
                      'Unlike a regular veto, a pocket veto **cannot be overridden** — Congress would have to start the bill over entirely when it returns.'
                    ],
                    answerText: 'Unsigned during adjournment — the bill dies'
                  }
                ]
              }
            },
            {
              id: 'elections-and-voting',
              title: 'Elections and voting',
              minutes: 9,
              summary: 'The Electoral College, staggered terms, and the long expansion of the right to vote.',
              tags: ['elections', 'electoral college', 'voting rights'],
              blocks: [
                { type: 'p', text: 'Americans don\'t elect the president directly — the **Electoral College** does. There are **538 electors**: each state gets its number of House seats plus two senators, plus 3 for D.C. Winning the presidency takes **270 electoral votes** — a majority.' },
                { type: 'p', text: 'Nearly every state awards **all its electors** to the statewide popular-vote winner (winner-take-all). That\'s how a candidate can win the presidency while losing the national popular vote — it happened in 2000 and 2016 — and why campaigns obsess over swing states.' },
                { type: 'p', text: 'Other offices run on different clocks: **House members serve 2 years** (every seat is up each even year); **senators serve 6 years**, staggered in thirds; the **president serves 4 years**, limited to two elected terms by the **22nd Amendment (1951)**. **Primaries and caucuses** choose party nominees; the **general election** chooses the officeholder.' },
                { type: 'callout', kind: 'key', text: 'Primary = pick the party\'s nominee. General = pick the officeholder. Many races are decided in the primary of the dominant party.' },
                { type: 'h2', text: 'Who can vote — and how that changed' },
                { type: 'p', text: 'The franchise expanded amendment by amendment: the **15th (1870)** barred denial by race; the **19th (1920)** by sex; the **24th (1964)** banned poll taxes in federal elections; the **26th (1971)** set the voting age at 18. The **Voting Rights Act (1965)** put federal muscle behind the promises — and states still run their own registration rules.' },
                { type: 'example', title: 'Why 270 is the magic number', text: 'Majority of 538: $538 \\div 2 = 269$, plus 1 = **270**. A 269–269 tie sends the election to the House, where each state delegation casts one vote — the arithmetic behind every "path to 270" graphic on election night.' }
              ],
              skill: {
                id: 'elections-mechanics',
                name: 'Elections and voting',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'How many total electors are in the Electoral College?',
                    choices: [
                      { id: 'a', text: '435' },
                      { id: 'b', text: '538' },
                      { id: 'c', text: '270' },
                      { id: 'd', text: '100' }
                    ],
                    answer: 'b',
                    hint: 'Add it up: 435 House seats + 100 senators + 3 for D.C.',
                    steps: [
                      '435 (House) + 100 (Senate) + 3 (District of Columbia, per the 23rd Amendment) = **538**.',
                      'Each state\'s electors equal its congressional delegation — that\'s why California has 54 and Wyoming has 3.'
                    ],
                    answerText: '538'
                  },
                  {
                    type: 'choice',
                    prompt: 'How many electoral votes are needed to win the presidency?',
                    choices: [
                      { id: 'a', text: '270' },
                      { id: 'b', text: '269' },
                      { id: 'c', text: '538' },
                      { id: 'd', text: 'A plurality of the popular vote' }
                    ],
                    answer: 'a',
                    hint: 'It must be a *majority* — half plus one.',
                    steps: [
                      'A majority of 538 is $538 \\div 2 = 269$, plus 1 = **270**.',
                      'If nobody reaches 270 (a 269–269 tie or a third-party spoiler), the Constitution sends the election to the House, where each state delegation casts one vote.'
                    ],
                    answerText: '270'
                  },
                  {
                    type: 'choice',
                    prompt: 'Members of the House of Representatives serve terms of:',
                    choices: [
                      { id: 'a', text: '4 years' },
                      { id: 'b', text: '6 years' },
                      { id: 'c', text: 'Life, with good behavior' },
                      { id: 'd', text: '2 years' }
                    ],
                    answer: 'd',
                    hint: 'The "people\'s house" faces voters most often.',
                    steps: [
                      'Representatives serve **2-year terms** — the entire House is reelected every even-numbered year.',
                      'The Framers designed it as the most responsive chamber: constant reelection keeps House members closest to public opinion, while 6-year Senate terms give insulation.'
                    ],
                    answerText: '2 years'
                  },
                  {
                    type: 'choice',
                    prompt: 'Senators serve terms that are:',
                    choices: [
                      { id: 'a', text: '4 years, all elected together' },
                      { id: 'b', text: '2 years' },
                      { id: 'c', text: '6 years, staggered so about a third face election every two years' },
                      { id: 'd', text: '8 years' }
                    ],
                    answer: 'c',
                    hint: 'The Senate was designed for continuity — it never turns over all at once.',
                    steps: [
                      'Senate terms are **6 years**, with seats divided into three "classes" — only ~a third of the Senate is up in any election.',
                      'Staggering makes the Senate the "cooling" body: slower to change, insulated from single-election swings — exactly the deliberative role the Framers intended.'
                    ],
                    answerText: '6 years, staggered in thirds'
                  },
                  {
                    type: 'choice',
                    prompt: 'A primary election\'s purpose is to:',
                    choices: [
                      { id: 'a', text: 'Elect the president directly' },
                      { id: 'b', text: 'Choose each party\'s nominee for the general election' },
                      { id: 'c', text: 'Ratify amendments' },
                      { id: 'd', text: 'Settle ties in the Electoral College' }
                    ],
                    answer: 'b',
                    hint: 'It narrows the field *within* parties before parties compete against each other.',
                    steps: [
                      'Primaries (and caucuses) are **intra-party contests**: they decide who carries the party\'s name into the general election.',
                      'In one-party-dominant districts, winning the majority party\'s primary is effectively winning the seat — which is why low-turnout primaries matter so much.'
                    ],
                    answerText: 'Choose the party\'s nominee'
                  },
                  {
                    type: 'choice',
                    prompt: 'The 26th Amendment (1971) set the national voting age at:',
                    choices: [
                      { id: 'a', text: '18' },
                      { id: 'b', text: '16' },
                      { id: 'c', text: '21' },
                      { id: 'd', text: '25' }
                    ],
                    answer: 'a',
                    hint: 'Vietnam-era logic: "old enough to fight, old enough to vote."',
                    steps: [
                      'The 26th Amendment lowered the voting age from 21 to **18**, driven by the argument that draft-age soldiers deserved the vote.',
                      'It was ratified faster than any other amendment — under four months — because the argument had overwhelming wartime resonance.'
                    ],
                    answerText: '18'
                  },
                  {
                    type: 'choice',
                    prompt: '"Winner-take-all" in the Electoral College means:',
                    choices: [
                      { id: 'a', text: 'The national popular-vote winner automatically wins' },
                      { id: 'b', text: 'The winner must take every state' },
                      { id: 'c', text: 'Congress chooses if there\'s a dispute' },
                      { id: 'd', text: 'In nearly all states, the statewide vote winner gets all of that state\'s electoral votes' }
                    ],
                    answer: 'd',
                    hint: 'Win Florida by one vote, get all of Florida\'s electors.',
                    steps: [
                      'In 48 states + D.C., whichever candidate wins the most votes in the state takes **all** its electors — even by a single vote margin.',
                      'That\'s why 2000 and 2016 produced presidents who lost the national popular vote — electoral votes are won **state by state**, not in one national count. (Maine and Nebraska split theirs by congressional district.)'
                    ],
                    answerText: 'Statewide winner gets all that state\'s electors'
                  },
                  {
                    type: 'choice',
                    prompt: 'The 19th Amendment (1920):',
                    choices: [
                      { id: 'a', text: 'Set the voting age at 18' },
                      { id: 'b', text: 'Banned poll taxes' },
                      { id: 'c', text: 'Prohibited denying the vote on account of sex — women\'s suffrage' },
                      { id: 'd', text: 'Allowed voting by mail' }
                    ],
                    answer: 'c',
                    hint: 'It closed the longest-running exclusion in the franchise — half the population.',
                    steps: [
                      'The 19th Amendment bars denying the vote "**on account of sex**" — women\'s suffrage, won after a 70-year movement.',
                      'Keep the suffrage amendments straight: 15th = race (1870), 19th = sex (1920), 24th = poll tax (1964), 26th = age 18 (1971).'
                    ],
                    answerText: 'Women\'s suffrage'
                  }
                ]
              }
            },
            {
              id: 'federalism',
              title: 'Federalism: national and state power',
              minutes: 9,
              summary: 'Two levels of government, one people — how the Constitution divides power vertically.',
              tags: ['federalism', 'states rights', 'supremacy clause'],
              blocks: [
                { type: 'p', text: '**Federalism** divides power between national and state governments — a *vertical* separation of powers alongside the horizontal one among branches. **Delegated (enumerated) powers** belong to Washington: coining money, declaring war, regulating interstate commerce.' },
                { type: 'p', text: 'The **Tenth Amendment** reserves everything else to states or the people: education, elections, licensing, local police, intrastate matters. **Concurrent powers** belong to both — taxing, building roads, running courts.' },
                { type: 'callout', kind: 'key', text: 'The **Supremacy Clause** (Article VI): when a valid federal law conflicts with state law, federal law wins.' },
                { type: 'h2', text: 'Stretchy powers' },
                { type: 'p', text: 'The **Necessary and Proper Clause** ("elastic clause") lets Congress choose means to carry out its enumerated powers. ***McCulloch v. Maryland* (1819)** confirmed it: Congress could charter a national bank even though "bank" isn\'t in the Constitution — and Maryland could not tax that bank, since state taxes would let states nullify federal functions.' },
                { type: 'p', text: 'The balance has swung over time: **dual federalism** (a "layer cake" of separate spheres) in the 19th century gave way to **cooperative federalism** (a "marble cake" of shared programs) after the New Deal. Federal **grants-in-aid** — money with strings attached — let Washington shape state policy without formally ordering it.' },
                { type: 'example', title: 'Strings attached: the drinking age', text: 'Congress can\'t directly set a national drinking age — but in *South Dakota v. Dole* (1987) the Court upheld withholding 10% of federal highway funds from states under 21. The money did the persuading: within a few years every state set its age at 21. Grants are power by another name.' }
              ],
              skill: {
                id: 'federal-balance',
                name: 'Federalism and state power',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Federalism divides power between:',
                    choices: [
                      { id: 'a', text: 'National and state governments' },
                      { id: 'b', text: 'The three branches' },
                      { id: 'c', text: 'Congress and the President' },
                      { id: 'd', text: 'Voters and elected officials' }
                    ],
                    answer: 'a',
                    hint: 'Think vertical — levels of government, not the branches within one level.',
                    steps: [
                      '**Federalism** splits sovereignty between the **national government and the states** — two levels governing the same people.',
                      'Separation of powers (choice b) is the *horizontal* division among branches; federalism is the *vertical* division between levels.'
                    ],
                    answerText: 'National and state governments'
                  },
                  {
                    type: 'choice',
                    prompt: 'Coining money and declaring war are examples of:',
                    choices: [
                      { id: 'a', text: 'Reserved powers' },
                      { id: 'b', text: 'Concurrent powers' },
                      { id: 'c', text: 'Implied state powers' },
                      { id: 'd', text: 'Delegated (enumerated) federal powers' }
                    ],
                    answer: 'd',
                    hint: 'These are powers the Constitution *lists* — and explicitly denies to states.',
                    steps: [
                      'Coining money and declaring war appear in **Article I, Section 8** as explicit powers of Congress — delegated/enumerated.',
                      'States are *forbidden* these powers by Article I, Section 10 — that\'s why they\'re purely federal, not concurrent.'
                    ],
                    answerText: 'Delegated (enumerated) federal powers'
                  },
                  {
                    type: 'choice',
                    prompt: 'Running public schools is mainly:',
                    choices: [
                      { id: 'a', text: 'An enumerated federal power' },
                      { id: 'b', text: 'A reserved state power under the 10th Amendment' },
                      { id: 'c', text: 'A power of the judiciary' },
                      { id: 'd', text: 'Forbidden to all governments' }
                    ],
                    answer: 'b',
                    hint: 'The Constitution never mentions education — so where does the 10th Amendment put it?',
                    steps: [
                      'Education is **not listed** among federal powers, so the Tenth Amendment makes it a **reserved power** of the states.',
                      'That\'s why America has ~13,000 local school districts and no national curriculum — the federal role (funding, civil-rights rules) operates through grants, not direct control.'
                    ],
                    answerText: 'A reserved state power'
                  },
                  {
                    type: 'choice',
                    prompt: 'Concurrent powers — exercised by both federal and state governments — include:',
                    choices: [
                      { id: 'a', text: 'Declaring war' },
                      { id: 'b', text: 'Coining money' },
                      { id: 'c', text: 'Taxing' },
                      { id: 'd', text: 'Signing treaties' }
                    ],
                    answer: 'c',
                    hint: 'Your paycheck may show both federal and state withholding.',
                    steps: [
                      '**Taxation** is concurrent: both levels tax (income, sales, property), plus building roads and running courts.',
                      'War, treaties, and currency are exclusive to the federal government — states are constitutionally barred from them.'
                    ],
                    answerText: 'Taxing'
                  },
                  {
                    type: 'choice',
                    prompt: 'The Supremacy Clause establishes that:',
                    choices: [
                      { id: 'a', text: 'Valid federal law prevails over conflicting state law' },
                      { id: 'b', text: 'States can nullify federal laws' },
                      { id: 'c', text: 'The Supreme Court is the largest court' },
                      { id: 'd', text: 'Federal courts always win every case' }
                    ],
                    answer: 'a',
                    hint: 'Article VI calls the Constitution and federal law "the supreme Law of the Land."',
                    steps: [
                      '**Article VI** makes the Constitution, federal laws, and treaties "the supreme Law of the Land" — when a valid federal rule and a state rule conflict, federal wins.',
                      'This is what makes the union one country rather than a league: without supremacy, states could veto national policy by noncompliance (the Articles of Confederation\'s fatal flaw).'
                    ],
                    answerText: 'Valid federal law beats conflicting state law'
                  },
                  {
                    type: 'choice',
                    prompt: 'The "elastic clause" is another name for:',
                    choices: [
                      { id: 'a', text: 'The Supremacy Clause' },
                      { id: 'b', text: 'The Commerce Clause' },
                      { id: 'c', text: 'The Full Faith and Credit Clause' },
                      { id: 'd', text: 'The Necessary and Proper Clause' }
                    ],
                    answer: 'd',
                    hint: 'It\'s called "elastic" because it lets Congress *stretch* its listed powers to cover implied ones.',
                    steps: [
                      'Article I, Section 8 ends by granting Congress power to make all laws "**necessary and proper**" for executing its enumerated powers.',
                      'It\'s "elastic" because it stretches authority to reasonable means — like chartering a bank to manage currency — without needing a new amendment.'
                    ],
                    answerText: 'The Necessary and Proper Clause'
                  },
                  {
                    type: 'choice',
                    prompt: 'McCulloch v. Maryland (1819) established that:',
                    choices: [
                      { id: 'a', text: 'States can tax federal institutions' },
                      { id: 'b', text: 'Congress has implied powers (a national bank is constitutional) and states cannot tax the federal government' },
                      { id: 'c', text: 'The Supreme Court can review executive orders' },
                      { id: 'd', text: 'Paper money is unconstitutional' }
                    ],
                    answer: 'b',
                    hint: 'Two holdings in one case: yes to implied powers, no to the state tax — "the power to tax involves the power to destroy."',
                    steps: [
                      'Marshall ruled that the elastic clause let Congress charter a **national bank** — an implied power serving enumerated ones.',
                      'He then struck down Maryland\'s tax on that bank: letting states tax federal operations would let them **nullify** national policy — "the power to tax involves the power to destroy."'
                    ],
                    answerText: 'Implied powers exist; states can\'t tax the federal government'
                  },
                  {
                    type: 'choice',
                    prompt: '"Marble cake" (cooperative) federalism describes:',
                    choices: [
                      { id: 'a', text: 'States having no role at all' },
                      { id: 'b', text: 'Strict separation of federal and state functions' },
                      { id: 'c', text: 'Federal and state governments sharing functions and working together' },
                      { id: 'd', text: 'The end of federalism' }
                    ],
                    answer: 'c',
                    hint: 'Marble cake has swirled layers — unlike a layer cake, where the layers stay separate.',
                    steps: [
                      '**Cooperative federalism** blends the levels: federal money funds state-run programs (Medicaid, highways), and shared goals are administered jointly.',
                      'The metaphor is the contrast: "layer cake" dual federalism keeps spheres strictly separate; "marble cake" swirls them — the norm since the New Deal.'
                    ],
                    answerText: 'Shared, blended federal-state functions'
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
