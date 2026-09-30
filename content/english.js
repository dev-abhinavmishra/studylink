// Subject: English & Writing — grammar, mechanics, and academic composition.
// See content/SPEC.md for the full schema.

module.exports = {
  id: 'english',
  name: 'English & Writing',
  icon: 'pen',
  color: '#ec4899',
  tagline: 'Grammar, punctuation, and the craft of the essay',
  description: 'Build clean, correct sentences and strong academic arguments. Learn the grammar rules behind good prose, then apply them to thesis-driven essays with properly integrated evidence.',
  courses: [
    {
      id: 'grammar-essentials',
      title: 'Grammar Essentials',
      subtitle: 'Grades 6–10 · Core',
      summary: 'The working parts of a sentence: how words function, how subjects and predicates carry meaning, and how punctuation keeps readers on track.',
      units: [
        {
          id: 'sentence-mechanics',
          title: 'Sentence mechanics',
          lessons: [
            {
              id: 'parts-of-speech',
              title: 'Parts of speech',
              minutes: 7,
              summary: 'The eight word classes that every sentence is built from.',
              tags: ['grammar', 'parts of speech', 'foundations'],
              blocks: [
                { type: 'p', text: 'Every word in a sentence has a job. Traditional grammar sorts English words into **eight parts of speech**: nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections.' },
                { type: 'callout', kind: 'key', text: 'A word\'s part of speech depends on what it is *doing* in that sentence, not on the word itself. In "They fish every weekend," *fish* is a verb; in "The fish swam away," it is a noun.' },
                { type: 'list', items: ['**Nouns** name people, places, things, and ideas (city, honesty). **Pronouns** stand in for nouns (she, it, everyone).', '**Verbs** express action or state of being (run, is). **Adjectives** modify nouns (tall, blue); **adverbs** modify verbs, adjectives, or other adverbs (quickly, very).', '**Prepositions** show relationships (under, between), **conjunctions** join elements (and, but), and **interjections** express sudden feeling (wow, ouch).'] },
                { type: 'h2', text: 'How to identify a part of speech' },
                { type: 'p', text: 'Ask what the word does. If it answers *what kind?* or *which one?* about a noun, it is an adjective. If it answers *how?*, *when?*, or *to what degree?* about a verb or adjective, it is an adverb — and adverbs often end in *-ly*, though not always (*fast*, *very*, *not*).' },
                { type: 'example', title: 'Label each word', text: 'In "The hungry cat quickly knocked the glass," *The* is an article (a type of determiner), *hungry* is an adjective describing the noun *cat*, *quickly* is an adverb describing the verb *knocked*, and *glass* is a noun.' },
                { type: 'callout', kind: 'warning', text: 'Do not assume a word keeps one label forever. *Light* is a noun in "the light faded," a verb in "light the candle," and an adjective in "a light jacket."' }
              ],
              skill: {
                id: 'identify-parts-of-speech',
                name: 'Identifying parts of speech',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'In "The hungry cat quickly knocked the glass off the counter," the word *quickly* is a(n)…',
                    choices: [
                      { id: 'a', text: 'adjective' },
                      { id: 'b', text: 'adverb' },
                      { id: 'c', text: 'verb' },
                      { id: 'd', text: 'conjunction' }
                    ],
                    answer: 'b',
                    hint: 'It tells *how* the cat knocked.',
                    steps: ['Find the verb: *knocked*.', '*Quickly* describes how the knocking happened — words that modify verbs are adverbs.'],
                    answerText: 'adverb'
                  },
                  {
                    type: 'choice',
                    prompt: '"Wow, that shot was incredible!" The word *wow* functions as a(n)…',
                    choices: [
                      { id: 'a', text: 'interjection' },
                      { id: 'b', text: 'pronoun' },
                      { id: 'c', text: 'adjective' },
                      { id: 'd', text: 'preposition' }
                    ],
                    answer: 'a',
                    hint: 'It is a burst of feeling, standing alone.',
                    steps: ['*Wow* carries emotion and is grammatically independent of the rest of the sentence.', 'A standalone word of sudden feeling is an interjection.'],
                    answerText: 'interjection'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which word is a preposition in "The keys are under the mat"?',
                    choices: [
                      { id: 'a', text: 'keys' },
                      { id: 'b', text: 'are' },
                      { id: 'c', text: 'under' },
                      { id: 'd', text: 'mat' }
                    ],
                    answer: 'c',
                    hint: 'Look for the word showing a spatial relationship.',
                    steps: ['*Under* introduces the phrase "under the mat" and shows where the keys are in relation to the mat.', 'Words that relate a noun to the rest of the sentence are prepositions.'],
                    answerText: 'under'
                  },
                  {
                    type: 'choice',
                    prompt: 'In "Maya gave her brother the controller," the word *her* is a…',
                    choices: [
                      { id: 'a', text: 'noun' },
                      { id: 'b', text: 'pronoun' },
                      { id: 'c', text: 'verb' },
                      { id: 'd', text: 'adverb' }
                    ],
                    answer: 'b',
                    hint: 'It stands in for Maya\'s name.',
                    steps: ['*Her* points back to Maya without naming her again.', 'Words that take the place of nouns are pronouns (here used possessively).'],
                    answerText: 'pronoun'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which word is a conjunction in "I wanted pizza, but the oven was broken"?',
                    choices: [
                      { id: 'a', text: 'wanted' },
                      { id: 'b', text: 'pizza' },
                      { id: 'c', text: 'but' },
                      { id: 'd', text: 'was' }
                    ],
                    answer: 'c',
                    hint: 'It joins two complete thoughts.',
                    steps: ['*But* links "I wanted pizza" and "the oven was broken" while signaling contrast.', 'Words that join clauses or phrases are conjunctions.'],
                    answerText: 'but'
                  },
                  {
                    type: 'choice',
                    prompt: 'In "The astronomer gazed at the luminous moon," what part of speech is *luminous*?',
                    choices: [
                      { id: 'a', text: 'adverb' },
                      { id: 'b', text: 'noun' },
                      { id: 'c', text: 'adjective' },
                      { id: 'd', text: 'verb' }
                    ],
                    answer: 'c',
                    hint: 'It describes a noun: which kind of moon?',
                    steps: ['*Luminous* answers "what kind of moon?" — it modifies the noun *moon*.', 'Words that modify nouns are adjectives.'],
                    answerText: 'adjective'
                  },
                  {
                    type: 'choice',
                    prompt: 'In "They fish every weekend," the word *fish* is a…',
                    choices: [
                      { id: 'a', text: 'noun' },
                      { id: 'b', text: 'adjective' },
                      { id: 'c', text: 'verb' },
                      { id: 'd', text: 'preposition' }
                    ],
                    answer: 'c',
                    hint: 'What do *they* do?',
                    steps: ['The sentence\'s action belongs to *fish* — "they" perform the action of fishing.', 'A word naming the action the subject performs is a verb, even though *fish* is a noun in other sentences.'],
                    answerText: 'verb'
                  },
                  {
                    type: 'choice',
                    prompt: 'In "The extremely tall player dunked easily," which adverb modifies an adjective?',
                    choices: [
                      { id: 'a', text: 'The' },
                      { id: 'b', text: 'extremely' },
                      { id: 'c', text: 'tall' },
                      { id: 'd', text: 'easily' }
                    ],
                    answer: 'b',
                    hint: 'Which word intensifies *tall*?',
                    steps: ['*Extremely* answers "how tall?" — it modifies the adjective *tall*.', 'Adverbs can modify adjectives as well as verbs; *easily* here modifies the verb *dunked* instead.'],
                    answerText: 'extremely'
                  }
                ]
              }
            },
            {
              id: 'subjects-and-predicates',
              title: 'Subjects and predicates',
              minutes: 8,
              summary: 'Find who or what the sentence is about and what happens.',
              tags: ['grammar', 'subjects', 'predicates', 'sentence structure'],
              blocks: [
                { type: 'p', text: 'Every complete sentence has two halves. The **subject** names who or what the sentence is about; the **predicate** tells what the subject does or is. In "The tired musicians packed their instruments," the subject is *the musicians* and the predicate is *packed their instruments*.' },
                { type: 'callout', kind: 'key', text: 'The **simple subject** is the bare noun or pronoun (*musicians*); the **complete subject** includes all its modifiers (*the tired musicians*). The **simple predicate** is the verb itself (*packed*); the **complete predicate** is the verb plus everything attached to it.' },
                { type: 'h2', text: 'Tricky hiding places' },
                { type: 'p', text: 'Subjects do not always come first. In "Into the cave wandered the lost explorer," the word order is flipped: *explorer* is still the subject. In commands like "Close the door," the subject is the unstated *you*. And in "There were three ducks," *there* is only a placeholder — the real subject is *ducks*.' },
                { type: 'example', title: 'Unpack a long sentence', text: '"The tall player with the red shoes scored the winning basket." Ignore the prepositional phrases: the simple subject is *player* (not *shoes* — shoes cannot score), and the simple predicate is *scored*.' },
                { type: 'list', items: ['Cross out prepositional phrases to expose the core.', 'Find the verb first, then ask "who or what does this?"', 'Two subjects joined by *and* form a **compound subject**: "Maria and her brother run."'] },
                { type: 'callout', kind: 'warning', text: 'A group of words with no working verb — like "Running down the long, dark hallway" — is a **fragment**, not a sentence. *-ing* forms need a helping verb (*was running*) or they cannot carry a predicate.' }
              ],
              skill: {
                id: 'find-subject-and-predicate',
                name: 'Finding subjects and predicates',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is the simple subject of "The tall player with the red shoes scored the winning basket"?',
                    choices: [
                      { id: 'a', text: 'shoes' },
                      { id: 'b', text: 'basket' },
                      { id: 'c', text: 'player' },
                      { id: 'd', text: 'The tall player with the red shoes' }
                    ],
                    answer: 'c',
                    hint: 'Strip away every prepositional phrase first.',
                    steps: ['Remove "with the red shoes" — a prepositional phrase that only describes.', 'The remaining noun doing the action is *player*; the full phrase is the *complete* subject.'],
                    answerText: 'player'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the simple predicate of "After the concert, the tired musicians packed their instruments"?',
                    choices: [
                      { id: 'a', text: 'packed' },
                      { id: 'b', text: 'musicians' },
                      { id: 'c', text: 'packed their instruments' },
                      { id: 'd', text: 'After the concert' }
                    ],
                    answer: 'a',
                    hint: 'The simple predicate is just the verb.',
                    steps: ['The action word is *packed*.', '"Packed their instruments" is the *complete* predicate; the simple predicate is the verb alone.'],
                    answerText: 'packed'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the subject of "There were three ducks on the pond"?',
                    choices: [
                      { id: 'a', text: 'there' },
                      { id: 'b', text: 'pond' },
                      { id: 'c', text: 'three' },
                      { id: 'd', text: 'ducks' }
                    ],
                    answer: 'd',
                    hint: '*There* is a placeholder, not the thing being described.',
                    steps: ['The verb *were* is plural — so the subject must be plural.', '*Ducks* is what the sentence is about; *there* is an expletive that just delays it.'],
                    answerText: 'ducks'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the subject of the command "Close the door"?',
                    choices: [
                      { id: 'a', text: 'door' },
                      { id: 'b', text: 'close' },
                      { id: 'c', text: '(you), understood' },
                      { id: 'd', text: 'the sentence has no subject' }
                    ],
                    answer: 'c',
                    hint: 'Commands are addressed to someone.',
                    steps: ['Imperatives leave the subject unstated.', 'The implied subject is *you* — "(You) close the door."'],
                    answerText: '(you), understood'
                  },
                  {
                    type: 'choice',
                    prompt: 'In "Maria and her brother run every morning," what is the subject?',
                    choices: [
                      { id: 'a', text: 'Maria' },
                      { id: 'b', text: 'her brother' },
                      { id: 'c', text: 'Maria and her brother' },
                      { id: 'd', text: 'morning' }
                    ],
                    answer: 'c',
                    hint: 'Two people are doing the running.',
                    steps: ['*Maria* and *her brother* are joined by *and* — a compound subject.', 'The plural verb *run* agrees with the whole compound subject, not either half alone.'],
                    answerText: 'Maria and her brother'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the complete predicate of "The students in the back row quietly opened their laptops"?',
                    choices: [
                      { id: 'a', text: 'opened' },
                      { id: 'b', text: 'quietly opened their laptops' },
                      { id: 'c', text: 'The students in the back row' },
                      { id: 'd', text: 'in the back row' }
                    ],
                    answer: 'b',
                    hint: 'The complete predicate is the verb plus everything that follows the subject.',
                    steps: ['The complete subject is "The students in the back row."', 'Everything else — *quietly opened their laptops* — belongs to the predicate.'],
                    answerText: 'quietly opened their laptops'
                  },
                  {
                    type: 'choice',
                    prompt: 'In the inverted sentence "Into the cave wandered the lost explorer," what is the subject?',
                    choices: [
                      { id: 'a', text: 'cave' },
                      { id: 'b', text: 'explorer' },
                      { id: 'c', text: 'wandered' },
                      { id: 'd', text: 'Into the cave' }
                    ],
                    answer: 'b',
                    hint: 'Ask who did the wandering.',
                    steps: ['The verb is *wandered*; the one doing the wandering is the *explorer*.', 'Subjects can follow the verb when writers invert normal order for effect.'],
                    answerText: 'explorer'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which of these is a fragment (not a complete sentence)?',
                    choices: [
                      { id: 'a', text: 'She ran down the hallway.' },
                      { id: 'b', text: 'Running down the long, dark hallway.' },
                      { id: 'c', text: 'She was running down the hallway.' },
                      { id: 'd', text: 'Run down the hallway!' }
                    ],
                    answer: 'b',
                    hint: 'Look for the group of words with no working verb and no subject.',
                    steps: ['"Running down the long, dark hallway" has no subject and no helping verb — *running* alone cannot serve as a predicate.', 'Adding *She was* fixes it, as in choice c; d works because commands imply *you*.'],
                    answerText: 'Running down the long, dark hallway.'
                  }
                ]
              }
            },
            {
              id: 'pronoun-agreement',
              title: 'Pronoun agreement',
              minutes: 8,
              summary: 'Pronouns must match their antecedents — and point to just one.',
              tags: ['grammar', 'pronouns', 'agreement'],
              blocks: [
                { type: 'p', text: 'A **pronoun** takes the place of a noun called its **antecedent**. The two must **agree**: singular antecedents take singular pronouns, plural take plural. "The dog wagged *its* tail" works; "the dog wagged *their* tail" mismatches number (unless the dog\'s identity calls for *they*).' },
                { type: 'callout', kind: 'key', text: 'Indefinite pronouns like *each, everyone, somebody,* and *neither* are **singular**: "Each of the girls brought *her* lunch." Modern style guides (MLA, APA, Chicago) also accept singular *they*: "Somebody left *their* phone."' },
                { type: 'h2', text: 'Ambiguity: the second pronoun problem' },
                { type: 'p', text: 'Agreement is not enough — the antecedent must be **clear**. In "When the bat hit the window, it broke," does *it* mean the bat or the window? Two possible antecedents make the pronoun ambiguous; rewrite so only one reading survives.' },
                { type: 'example', title: 'Choose the right pronoun', text: '"Neither of the boys remembered ___ cleats." *Neither* is singular, and the antecedent group is male — so *his* completes it correctly: "Neither of the boys remembered his cleats." ✓' },
                { type: 'list', items: ['Collective nouns (*committee, team*) are singular when the group acts as one: "The committee reached *its* decision."', '*Who* is a subject; *whom* is an object: "Who wrote it?" but "Whom did you invite?"', 'Vague *it/this/which* starting a sentence is a common source of confusion.'] },
                { type: 'callout', kind: 'warning', text: '"Everyone should bring their own pencil" is accepted usage today — but "*their*" still cannot refer to a specific singular noun like "the dog." Singular *they* works for people, not for arbitrary objects.' }
              ],
              skill: {
                id: 'pronoun-antecedent-agreement',
                name: 'Pronoun-antecedent agreement',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Choose the pronoun that completes the sentence: "Each of the girls brought ___ lunch."',
                    choices: [
                      { id: 'a', text: 'their' },
                      { id: 'b', text: 'her' },
                      { id: 'c', text: 'its' },
                      { id: 'd', text: 'our' }
                    ],
                    answer: 'b',
                    hint: '*Each* is singular even though a plural noun follows it.',
                    steps: ['The antecedent is *each*, an indefinite pronoun that is grammatically singular.', 'The group is girls, so the singular possessive is *her*.'],
                    answerText: 'her'
                  },
                  {
                    type: 'choice',
                    prompt: 'Choose the clearest pronoun for formal writing: "Someone left ___ phone on the desk."',
                    choices: [
                      { id: 'a', text: 'its' },
                      { id: 'b', text: 'their' },
                      { id: 'c', text: 'our' },
                      { id: 'd', text: 'them' }
                    ],
                    answer: 'b',
                    hint: 'The owner\'s gender is unknown — what pronoun do modern style guides accept?',
                    steps: ['*Someone* is a singular indefinite pronoun with an unspecified gender.', 'Singular *their* is endorsed by MLA, APA, and Chicago for exactly this case.'],
                    answerText: 'their'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the problem in "The trophy sat next to the photo because it was valuable"?',
                    choices: [
                      { id: 'a', text: 'pronoun-antecedent disagreement in number' },
                      { id: 'b', text: 'ambiguous pronoun reference' },
                      { id: 'c', text: 'the pronoun should be *they*' },
                      { id: 'd', text: 'no problem — the sentence is clear' }
                    ],
                    answer: 'b',
                    hint: 'What does *it* refer to?',
                    steps: ['*It* could mean the trophy or the photo — two singular antecedents.', 'Agreement in number is fine; the failure is a unique, clear antecedent.'],
                    answerText: 'ambiguous pronoun reference'
                  },
                  {
                    type: 'choice',
                    prompt: 'Choose the correct pronoun: "Neither of the boys remembered ___ cleats."',
                    choices: [
                      { id: 'a', text: 'their' },
                      { id: 'b', text: 'his' },
                      { id: 'c', text: 'its' },
                      { id: 'd', text: 'them' }
                    ],
                    answer: 'b',
                    hint: '*Neither* is singular.',
                    steps: ['*Neither* means "not the one and not the other" — grammatically singular.', 'The boys are male, so the singular possessive pronoun is *his*.'],
                    answerText: 'his'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which pronoun is best in modern usage? "Everybody should bring ___ own pencil."',
                    choices: [
                      { id: 'a', text: 'his' },
                      { id: 'b', text: 'its' },
                      { id: 'c', text: 'their' },
                      { id: 'd', text: 'her' }
                    ],
                    answer: 'c',
                    hint: '*Everybody* includes people of any gender.',
                    steps: ['*Everybody* is singular, but picking *his* or *her* arbitrarily excludes readers.', 'Singular *their* is the standard inclusive choice in current style guides.'],
                    answerText: 'their'
                  },
                  {
                    type: 'choice',
                    prompt: 'Complete the sentence: "___ wrote the letter?"',
                    choices: [
                      { id: 'a', text: 'Who' },
                      { id: 'b', text: 'Whom' },
                      { id: 'c', text: 'Whose' },
                      { id: 'd', text: 'Which' }
                    ],
                    answer: 'a',
                    hint: 'Try answering with *he* or *him*.',
                    steps: ['Answer the question: "**He** wrote the letter" — a subject, not an object.', 'Subjects take *who*; objects take *whom* ("You invited **him**" → "Whom did you invite?").'],
                    answerText: 'Who'
                  },
                  {
                    type: 'choice',
                    prompt: 'Complete the sentence: "___ did you invite to dinner?"',
                    choices: [
                      { id: 'a', text: 'Who' },
                      { id: 'b', text: 'Whom' },
                      { id: 'c', text: 'Whose' },
                      { id: 'd', text: 'Whoever' }
                    ],
                    answer: 'b',
                    hint: 'The word is the object of *invite*, not the subject.',
                    steps: ['The subject is *you* — *you* did the inviting.', 'The invited person receives the action, so the object form *whom* is correct.'],
                    answerText: 'Whom'
                  },
                  {
                    type: 'choice',
                    prompt: 'Choose the correct pronoun: "The committee reached ___ decision unanimously."',
                    choices: [
                      { id: 'a', text: 'their' },
                      { id: 'b', text: 'its' },
                      { id: 'c', text: 'his' },
                      { id: 'd', text: 'them' }
                    ],
                    answer: 'b',
                    hint: 'Is the committee acting as one body or as individuals?',
                    steps: ['A collective noun is singular when the group acts as a unit — a unanimous decision is one act.', 'The singular possessive for a thing or group is *its*.'],
                    answerText: 'its'
                  }
                ]
              }
            },
            {
              id: 'active-and-passive-voice',
              title: 'Active and passive voice',
              minutes: 7,
              summary: 'Put the doer in the driver\'s seat — and know when not to.',
              tags: ['grammar', 'voice', 'style'],
              blocks: [
                { type: 'p', text: 'In the **active voice**, the subject performs the action: "Maria baked the cake." In the **passive voice**, the subject *receives* the action: "The cake was baked by Maria." The passive is built from a form of *to be* plus a past participle — *was baked, is written, were chosen* — with the agent demoted to an optional *by* phrase.' },
                { type: 'callout', kind: 'key', text: 'Spot the passive by the pattern **be-verb + past participle**: "The ball **was thrown**." Then ask who did it — in a passive sentence, the doer often appears after *by* or not at all.' },
                { type: 'h2', text: 'Why writers prefer the active' },
                { type: 'p', text: 'Active sentences are shorter, clearer, and assign responsibility: "The committee approved the budget" beats "The budget was approved by the committee" — eight words for twelve. Worse, agentless passive can dodge accountability: "Mistakes were made" never says by whom.' },
                { type: 'p', text: 'The passive is not wrong — it is a tool. Use it when the doer is unknown or irrelevant ("The Mona Lisa was painted in the early 1500s") or when the receiver matters more than the actor ("The suspect was arrested").' },
                { type: 'example', title: 'Convert passive to active', text: '"The experiment was completed, and the results were published" hides the scientists. Flip the actors into subject position: "**The researchers** completed the experiment and published the results." ✓' },
                { type: 'callout', kind: 'warning', text: 'Not every *be* verb signals passive. "She was tired" is still active — *was* is a linking verb, not part of a passive construction. There must be a **past participle receiving an action**.' }
              ],
              skill: {
                id: 'identify-active-passive',
                name: 'Identifying active vs. passive voice',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which sentence is in the passive voice?',
                    choices: [
                      { id: 'a', text: 'The catcher threw the ball.' },
                      { id: 'b', text: 'The ball was thrown by the catcher.' },
                      { id: 'c', text: 'The catcher was tired.' },
                      { id: 'd', text: 'The catcher had a strong arm.' }
                    ],
                    answer: 'b',
                    hint: 'Look for a be-verb plus a past participle receiving the action.',
                    steps: ['In b, the subject *ball* does not act — it receives the action *was thrown*.', 'The doer is relegated to a *by* phrase. Choices c and d use *was*/*had* as linking verbs, not passive constructions.'],
                    answerText: 'The ball was thrown by the catcher.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is in the active voice?',
                    choices: [
                      { id: 'a', text: 'The budget was approved by the committee.' },
                      { id: 'b', text: 'The committee approved the budget.' },
                      { id: 'c', text: 'Approval was given to the budget.' },
                      { id: 'd', text: 'It was decided that the budget be approved.' }
                    ],
                    answer: 'b',
                    hint: 'Find the sentence where the subject performs the action.',
                    steps: ['In b, the subject *committee* performs the verb *approved* directly.', 'Every other choice buries or omits the actor behind a passive construction.'],
                    answerText: 'The committee approved the budget.'
                  },
                  {
                    type: 'choice',
                    prompt: 'In the passive sentence "The novel was read by millions," who is the agent (the doer)?',
                    choices: [
                      { id: 'a', text: 'the novel' },
                      { id: 'b', text: 'millions' },
                      { id: 'c', text: 'no agent exists' },
                      { id: 'd', text: 'the reader' }
                    ],
                    answer: 'b',
                    hint: 'The agent usually follows *by*.',
                    steps: ['The pattern is be-verb + past participle + *by* + agent.', 'The ones doing the reading are the *millions*; the subject *novel* receives the action.'],
                    answerText: 'millions'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which revision of "The wall was covered by thick vines" best emphasizes the vines?',
                    choices: [
                      { id: 'a', text: 'Thick vines covered the wall.' },
                      { id: 'b', text: 'The wall was covered thickly by vines.' },
                      { id: 'c', text: 'By the wall, thick vines were covering.' },
                      { id: 'd', text: 'The wall, it was covered by thick vines.' }
                    ],
                    answer: 'a',
                    hint: 'Make the actor the subject.',
                    steps: ['To spotlight the vines, put them in subject position.', 'Choice a is active: the vines act, the wall receives — direct and emphatic.'],
                    answerText: 'Thick vines covered the wall.'
                  },
                  {
                    type: 'choice',
                    prompt: 'When is the passive voice the better choice?',
                    choices: [
                      { id: 'a', text: 'whenever you want shorter sentences' },
                      { id: 'b', text: 'when the doer is unknown or unimportant, as in "The painting was stolen last night"' },
                      { id: 'c', text: 'whenever you need to name who did something' },
                      { id: 'd', text: 'never — passive is always an error' }
                    ],
                    answer: 'b',
                    hint: 'Think about where the reader\'s attention should go.',
                    steps: ['Passive moves the receiver into the spotlight and drops the actor.', 'That is exactly right when the actor is unknown (a theft) or irrelevant to the point.'],
                    answerText: 'when the actor is unknown or unimportant'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence uses the passive voice?',
                    choices: [
                      { id: 'a', text: 'Mistakes happened.' },
                      { id: 'b', text: 'A mistake was made.' },
                      { id: 'c', text: 'Everyone makes mistakes.' },
                      { id: 'd', text: 'The mistake worried us.' }
                    ],
                    answer: 'b',
                    hint: 'Look for was/were + past participle with no doer.',
                    steps: ['*Was made* is be-verb + past participle — the passive pattern.', 'Choice a is active intransitive (mistakes "did" the happening); c and d are ordinary active sentences.'],
                    answerText: 'A mistake was made.'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the active revision of "The cake was baked by Maria"?',
                    choices: [
                      { id: 'a', text: 'Maria baked the cake.' },
                      { id: 'b', text: 'The cake baked Maria.' },
                      { id: 'c', text: 'Maria was baking the cake.' },
                      { id: 'd', text: 'By Maria, the cake was baked.' }
                    ],
                    answer: 'a',
                    hint: 'Move the agent from the *by* phrase into subject position.',
                    steps: ['The agent *Maria* becomes the subject.', 'The receiver *cake* becomes the object: "Maria baked the cake."'],
                    answerText: 'Maria baked the cake.'
                  },
                  {
                    type: 'choice',
                    prompt: '"The experiment was completed, and the results were published." Which revision centers the scientists?',
                    choices: [
                      { id: 'a', text: 'It was the experiment that was completed and the results that were published.' },
                      { id: 'b', text: 'The scientists completed the experiment and published the results.' },
                      { id: 'c', text: 'The experiment and the results were completed and published.' },
                      { id: 'd', text: 'There was a completed experiment and published results.' }
                    ],
                    answer: 'b',
                    hint: 'The doers must become the grammatical subject.',
                    steps: ['Both clauses are agentless passives — the scientists never appear.', 'Choice b makes *the scientists* the subject of both actions, which is why it centers them.'],
                    answerText: 'The scientists completed the experiment and published the results.'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'punctuation',
          title: 'Punctuation',
          lessons: [
            {
              id: 'common-comma-errors',
              title: 'Common comma errors',
              minutes: 9,
              summary: 'Splices, missing commas, and the commas that do not belong.',
              tags: ['punctuation', 'commas', 'comma splice'],
              blocks: [
                { type: 'p', text: 'The comma\'s main job is to mark a small pause where sentence parts meet. Used well, it guides readers; used badly, it either welds two sentences together or chops one apart.' },
                { type: 'callout', kind: 'key', text: 'A **comma splice** joins two independent clauses with only a comma: "I finished my homework, I went to bed." Fix it with a period, a semicolon, or a comma plus a conjunction (*and, but, so*): "I finished my homework, and I went to bed."' },
                { type: 'list', items: ['**Introductory elements** take a comma: "After the movie ended, we drove home."', '**Independent clauses joined by *and/but/or/so*** take a comma *before* the conjunction: "The rain stopped, and the sun came out."', '**Nonrestrictive information** is set off by commas: "My brother, who lives in Austin, is a drummer."', '**Series** items get commas: "We bought apples, oranges, and pears."', '**City/state and direct quotations**: "She lives in Portland, Oregon" and \'The teacher announced, "Class is dismissed."\''] },
                { type: 'h2', text: 'Where commas do not go' },
                { type: 'p', text: 'Do not split a compound predicate: "She swam across the lake and hiked home" takes **no** comma — one subject is doing both verbs. And do not separate a subject from its verb ("The winner of the race, was my friend" is wrong).' },
                { type: 'example', title: 'Fix the splice', text: '"It rained all night, the field was flooded" splices two clauses. Three correct repairs: a period, a semicolon, or a conjunction — "It rained all night, so the field was flooded." ✓' },
                { type: 'callout', kind: 'warning', text: 'Adding a comma *after* the conjunction does not fix a splice: "I ran fast, but, I still missed the bus" is still wrong — the comma belongs **before** *but*.' }
              ],
              skill: {
                id: 'comma-placement',
                name: 'Correct comma use',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'I finished my homework, I went to bed.' },
                      { id: 'b', text: 'I finished my homework, and I went to bed.' },
                      { id: 'c', text: 'I finished, my homework and I went to bed.' },
                      { id: 'd', text: 'I finished my homework and, I went to bed.' }
                    ],
                    answer: 'b',
                    hint: 'Two complete clauses need a comma plus a conjunction.',
                    steps: ['"I finished my homework" and "I went to bed" are both independent clauses.', 'Joining them needs comma + conjunction (b); a alone is a comma splice, and c/d put the comma in the wrong place.'],
                    answerText: 'I finished my homework, and I went to bed.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'After the movie ended, we drove home.' },
                      { id: 'b', text: 'After the movie ended we drove, home.' },
                      { id: 'c', text: 'After, the movie ended we drove home.' },
                      { id: 'd', text: 'After the movie, ended we drove home.' }
                    ],
                    answer: 'a',
                    hint: 'The comma belongs after the whole introductory phrase.',
                    steps: ['"After the movie ended" is a dependent clause introducing the main clause.', 'Introductory elements take one comma at their end — not inside them.'],
                    answerText: 'After the movie ended, we drove home.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'My brother who lives in Austin is a drummer.' },
                      { id: 'b', text: 'My brother, who lives in Austin, is a drummer.' },
                      { id: 'c', text: 'My brother who, lives in Austin, is a drummer.' },
                      { id: 'd', text: 'My brother, who lives in Austin is a drummer.' }
                    ],
                    answer: 'b',
                    hint: 'Nonrestrictive clauses need commas on *both* ends.',
                    steps: ['"Who lives in Austin" is extra information — remove it and the sentence still works.', 'Nonrestrictive clauses are enclosed by a comma pair: one before *who* and one after *Austin*.'],
                    answerText: 'My brother, who lives in Austin, is a drummer.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'She swam across the lake, and hiked home.' },
                      { id: 'b', text: 'She swam, across the lake and hiked home.' },
                      { id: 'c', text: 'She swam across the lake and hiked home.' },
                      { id: 'd', text: 'She swam across the lake and, hiked home.' }
                    ],
                    answer: 'c',
                    hint: 'Is there a second subject after *and*?',
                    steps: ['"Hiked home" has no subject of its own — one subject (*she*) does both verbs.', 'A compound predicate takes no comma, so c is correct as written.'],
                    answerText: 'She swam across the lake and hiked home.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'We bought apples, oranges, and pears.' },
                      { id: 'b', text: 'We bought, apples, oranges, and pears.' },
                      { id: 'c', text: 'We bought apples oranges and, pears.' },
                      { id: 'd', text: 'We bought apples, oranges and, pears.' }
                    ],
                    answer: 'a',
                    hint: 'Commas separate items in a series.',
                    steps: ['The list is *apples / oranges / pears* — commas go between items.', 'The comma before *and* (the Oxford comma) is recommended by most academic style guides.'],
                    answerText: 'We bought apples, oranges, and pears.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'She lives in Portland Oregon.' },
                      { id: 'b', text: 'She lives in, Portland, Oregon.' },
                      { id: 'c', text: 'She lives in Portland, Oregon.' },
                      { id: 'd', text: 'She lives, in Portland, Oregon.' }
                    ],
                    answer: 'c',
                    hint: 'City and state are separated by one comma.',
                    steps: ['Convention places a comma between a city and its state.', 'No comma goes between the preposition *in* and the city name.'],
                    answerText: 'She lives in Portland, Oregon.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'The teacher announced "Class is dismissed."' },
                      { id: 'b', text: 'The teacher announced, "Class is dismissed."' },
                      { id: 'c', text: 'The teacher, announced "Class is dismissed."' },
                      { id: 'd', text: 'The teacher announced "Class, is dismissed."' }
                    ],
                    answer: 'b',
                    hint: 'A comma introduces a quotation after a speech verb.',
                    steps: ['A comma sits between the attribution (*The teacher announced*) and the quotation.', 'The quoted sentence itself keeps its own normal punctuation.'],
                    answerText: 'The teacher announced, "Class is dismissed."'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which revision correctly fixes the comma splice in "It rained all night, the field was flooded"?',
                    choices: [
                      { id: 'a', text: 'It rained all night, the field, was flooded.' },
                      { id: 'b', text: 'It rained, all night the field was flooded.' },
                      { id: 'c', text: 'It rained all night; the field was flooded.' },
                      { id: 'd', text: 'It rained all night, and, the field was flooded.' }
                    ],
                    answer: 'c',
                    hint: 'A semicolon can join two related independent clauses.',
                    steps: ['The splice welds two independent clauses with a comma.', 'A semicolon replaces the comma legally (c); a conjunction after the comma (d) doubles the error.'],
                    answerText: 'It rained all night; the field was flooded.'
                  }
                ]
              }
            },
            {
              id: 'semicolons-and-colons',
              title: 'Semicolons and colons',
              minutes: 8,
              summary: 'Two strong punctuation marks — where they belong and where they fail.',
              tags: ['punctuation', 'semicolons', 'colons'],
              blocks: [
                { type: 'p', text: 'The **semicolon** and the **colon** are stronger than a comma but weaker than a period — and each has a narrow, precise job.' },
                { type: 'callout', kind: 'key', text: 'A **semicolon** joins two *independent clauses* that are closely related: "I have a big test tomorrow; I can\'t go out tonight." It is also the connector before words like *however, therefore,* and *moreover*: "It rained all day; however, we still hiked."' },
                { type: 'p', text: 'A **colon** announces that something is coming — a list, an explanation, or a quote. Its one hard rule: **the clause before the colon must be a complete sentence**. "Bring three things: a tent, a sleeping bag, and a flashlight" works; "The ingredients are: flour, sugar, eggs" does not — *are* already introduces the list.' },
                { type: 'example', title: 'Choose the right mark', text: '"He had one goal_ win the championship." The first part is a complete clause and the second explains it — a colon: "He had one goal: win the championship." ✓' },
                { type: 'list', items: ['Semicolons also separate list items that already contain commas: "We visited Boise, Idaho; Portland, Oregon; and Seattle, Washington."', 'A semicolon between a dependent clause and a main clause is wrong: "Because it rained; we stayed inside."', 'Never put a colon directly after a verb or a preposition like *such as* or *including*.'] },
                { type: 'callout', kind: 'tip', text: 'Test a semicolon by swapping in a period. If both halves can stand alone as sentences, the semicolon is legal.' }
              ],
              skill: {
                id: 'semicolon-and-colon-use',
                name: 'Using semicolons and colons',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'I have a big test tomorrow, I can\'t go out tonight.' },
                      { id: 'b', text: 'I have a big test tomorrow; I can\'t go out tonight.' },
                      { id: 'c', text: 'I have; a big test tomorrow I can\'t go out tonight.' },
                      { id: 'd', text: 'I have a big test tomorrow: I can\'t go out tonight.' }
                    ],
                    answer: 'b',
                    hint: 'Both halves are complete sentences.',
                    steps: ['Each side could stand alone as a sentence.', 'A semicolon joins two closely related independent clauses; a alone is a comma splice, and a colon is used to introduce lists or explanations, not another clause here.'],
                    answerText: 'I have a big test tomorrow; I can\'t go out tonight.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'Bring: a tent, a sleeping bag, and a flashlight.' },
                      { id: 'b', text: 'Bring three things: a tent, a sleeping bag, and a flashlight.' },
                      { id: 'c', text: 'Bring three things a tent, a sleeping bag: and a flashlight.' },
                      { id: 'd', text: 'Bring three things; a tent, a sleeping bag, and a flashlight.' }
                    ],
                    answer: 'b',
                    hint: 'A colon needs a complete clause in front of it.',
                    steps: ['"Bring three things" is a complete independent clause.', 'The colon then introduces the list of the three things; a alone leaves an incomplete clause before the colon.'],
                    answerText: 'Bring three things: a tent, a sleeping bag, and a flashlight.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why is "The ingredients are: flour, sugar, and eggs" incorrect?',
                    choices: [
                      { id: 'a', text: 'colons cannot introduce lists' },
                      { id: 'b', text: 'a colon should not directly follow a verb' },
                      { id: 'c', text: 'the list needs semicolons' },
                      { id: 'd', text: 'it should use a dash instead' }
                    ],
                    answer: 'b',
                    hint: 'What comes right before the colon?',
                    steps: ['A colon must follow a complete independent clause; "The ingredients are" stops mid-thought — *are* expects its complement.', 'The verb itself already introduces the list, so the colon should simply be deleted.'],
                    answerText: 'a colon should not directly follow a verb'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'It rained all day, however, we still hiked.' },
                      { id: 'b', text: 'It rained all day; however, we still hiked.' },
                      { id: 'c', text: 'It rained all day, however; we still hiked.' },
                      { id: 'd', text: 'It rained all day however, we still hiked.' }
                    ],
                    answer: 'b',
                    hint: '*However* between two clauses is a conjunctive adverb — it needs a semicolon before it.',
                    steps: ['Both halves are independent clauses.', 'A conjunctive adverb like *however* takes a semicolon before it and a comma after it — the pattern in b.'],
                    answerText: 'It rained all day; however, we still hiked.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence correctly fixes "The library was quiet, everyone was studying"?',
                    choices: [
                      { id: 'a', text: 'The library was quiet; everyone was studying.' },
                      { id: 'b', text: 'The library; was quiet everyone was studying.' },
                      { id: 'c', text: 'The library was quiet, everyone; was studying.' },
                      { id: 'd', text: 'The library was quiet everyone was studying.' }
                    ],
                    answer: 'a',
                    hint: 'Both halves are complete — what mark joins related independent clauses?',
                    steps: ['The original is a comma splice.', 'Replacing the comma with a semicolon legally joins the two related clauses.'],
                    answerText: 'The library was quiet; everyone was studying.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'He had one goal; win the championship.' },
                      { id: 'b', text: 'He had one goal: win the championship.' },
                      { id: 'c', text: 'He had: one goal, win the championship.' },
                      { id: 'd', text: 'He had one goal win, the championship.' }
                    ],
                    answer: 'b',
                    hint: 'The second part explains the first.',
                    steps: ['"He had one goal" is complete, and the rest states what the goal was.', 'A colon introduces an explanation or elaboration — exactly this case.'],
                    answerText: 'He had one goal: win the championship.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'Because it rained; we stayed inside.' },
                      { id: 'b', text: 'Because it rained, we stayed inside.' },
                      { id: 'c', text: 'Because; it rained we stayed inside.' },
                      { id: 'd', text: 'Because it rained we stayed; inside.' }
                    ],
                    answer: 'b',
                    hint: '"Because it rained" cannot stand alone.',
                    steps: ['A dependent clause cannot join a main clause with a semicolon — semicolons require independence on both sides.', 'An introductory dependent clause takes a comma instead.'],
                    answerText: 'Because it rained, we stayed inside.'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is punctuated correctly?',
                    choices: [
                      { id: 'a', text: 'We visited Boise, Idaho, Portland, Oregon, and Seattle, Washington.' },
                      { id: 'b', text: 'We visited Boise; Idaho, Portland; Oregon, and Seattle; Washington.' },
                      { id: 'c', text: 'We visited Boise, Idaho; Portland, Oregon; and Seattle, Washington.' },
                      { id: 'd', text: 'We visited: Boise, Idaho, Portland, Oregon, and Seattle, Washington.' }
                    ],
                    answer: 'c',
                    hint: 'When list items contain their own commas, upgrade the separators.',
                    steps: ['Each item ("Boise, Idaho") already has an internal comma.', 'Semicolons between the items keep the boundaries clear — commas alone blur them.'],
                    answerText: 'We visited Boise, Idaho; Portland, Oregon; and Seattle, Washington.'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'academic-writing',
      title: 'Academic Writing',
      subtitle: 'Grades 9–12 · Composition',
      summary: 'From blank page to polished essay: arguing a thesis, building paragraphs on evidence, and revising like a professional.',
      units: [
        {
          id: 'the-essay',
          title: 'The essay',
          lessons: [
            {
              id: 'thesis-statements',
              title: 'Thesis statements',
              minutes: 8,
              summary: 'One sentence that stakes a claim your whole essay defends.',
              tags: ['writing', 'thesis', 'essays'],
              blocks: [
                { type: 'p', text: 'A **thesis statement** is the essay\'s contract with the reader: one or two sentences that state your **argument** — not your topic. "This essay is about school uniforms" announces a topic; "School uniforms reduce socioeconomic pressure but suppress student identity" argues something a reasonable reader could dispute.' },
                { type: 'callout', kind: 'key', text: 'A strong thesis is **arguable** (someone could disagree), **specific** (it names what and why), and **significant** (it answers "so what?"). Facts and announcements fail the first test.' },
                { type: 'h2', text: 'From weak to strong' },
                { type: 'p', text: '"Pollution is bad" is weak — nobody disputes it and it says nothing. "Pollution is a problem" is barely better. "Cities should replace diesel buses with electric fleets because diesel exhaust causes most urban childhood asthma" is a real thesis: a claim plus reasoning, with a preview of the essay\'s logic built in.' },
                { type: 'example', title: 'Test three candidates', text: 'For a paper on *The Great Gatsby*: "Gatsby is rich" is a fact; "This essay will analyze Gatsby" is an announcement; "Gatsby\'s wealth fails to buy him belonging because Fitzgerald ties his fortune to criminality" is arguable and specific. The third is the thesis. ✓' },
                { type: 'list', items: ['Ask: could a smart reader write a counterargument? If not, it is a fact, not a thesis.', 'Aim your thesis at the *smallest* claim your evidence can fully support.', 'Place it at the end of the introduction as a launching point for the body.'] },
                { type: 'callout', kind: 'warning', text: 'A thesis is a commitment, not a guess. If your draft drifts from it, revise the thesis to match the argument you actually made — revising the thesis is normal, not cheating.' }
              ],
              skill: {
                id: 'evaluate-thesis-statements',
                name: 'Evaluating thesis statements',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which is the strongest thesis statement for an essay about school uniforms?',
                    choices: [
                      { id: 'a', text: 'This essay will discuss school uniforms.' },
                      { id: 'b', text: 'School uniforms are a policy in many schools.' },
                      { id: 'c', text: 'School uniforms reduce bullying but limit self-expression, so schools should pair them with free-dress days.' },
                      { id: 'd', text: 'Do school uniforms help students?' }
                    ],
                    answer: 'c',
                    hint: 'Look for a claim a reasonable reader could dispute.',
                    steps: ['a only announces a topic; b states an uncontested fact; d is a question, not a claim.', 'c argues a position, acknowledges a tradeoff, and proposes a specific compromise — arguable and specific.'],
                    answerText: 'School uniforms reduce bullying but limit self-expression…'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is an arguable claim rather than a fact?',
                    choices: [
                      { id: 'a', text: 'World War II ended in 1945.' },
                      { id: 'b', text: 'Homework should be capped at one hour per night because heavier loads show no learning gains.' },
                      { id: 'c', text: 'The library is open until 9 p.m.' },
                      { id: 'd', text: 'Many students have phones.' }
                    ],
                    answer: 'b',
                    hint: 'A claim can be disputed; a fact can be looked up.',
                    steps: ['Facts (a, c, d) are either true or false — no essay needed.', 'b takes a position and supplies a reason someone could challenge, which is what a thesis requires.'],
                    answerText: 'Homework should be capped at one hour per night…'
                  },
                  {
                    type: 'choice',
                    prompt: 'Why is "Pollution is bad" a weak thesis?',
                    choices: [
                      { id: 'a', text: 'it uses informal language' },
                      { id: 'b', text: 'it is not specific or contestable — nobody disagrees, and it says nothing about what or why' },
                      { id: 'c', text: 'it is too long' },
                      { id: 'd', text: 'it states an opinion instead of a fact' }
                    ],
                    answer: 'b',
                    hint: 'Could anyone write a counterargument against it?',
                    steps: ['A thesis must stake out disputable ground.', '"Pollution is bad" names no pollutant, place, or remedy, and nobody argues the opposite — there is nothing to prove.'],
                    answerText: 'it is not specific or contestable'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is the best thesis for an analytical essay on *The Great Gatsby*?',
                    choices: [
                      { id: 'a', text: 'Gatsby is a rich man who throws parties.' },
                      { id: 'b', text: 'This essay will analyze Jay Gatsby\'s character.' },
                      { id: 'c', text: 'Gatsby\'s wealth fails to buy belonging because Fitzgerald ties his fortune to criminality rather than inheritance.' },
                      { id: 'd', text: 'The Great Gatsby was published in 1925.' }
                    ],
                    answer: 'c',
                    hint: 'Eliminate the summary, the announcement, and the fact.',
                    steps: ['a summarizes plot; b announces the essay\'s activity; d is a bibliographic fact.', 'c makes an interpretive claim with a supporting reason — the shape of a real thesis.'],
                    answerText: 'Gatsby\'s wealth fails to buy belonging…'
                  },
                  {
                    type: 'choice',
                    prompt: 'What question should a thesis statement answer for the reader?',
                    choices: [
                      { id: 'a', text: '"What topic does this essay mention?"' },
                      { id: 'b', text: '"What is this essay arguing, and why should I believe it?"' },
                      { id: 'c', text: '"How many paragraphs will this essay have?"' },
                      { id: 'd', text: '"What sources did the writer read?"' }
                    ],
                    answer: 'b',
                    hint: 'A thesis is a promise about an argument.',
                    steps: ['The thesis tells the reader the claim and the reasoning to come.', 'Topic coverage (a) is the job of an introduction generally; the thesis itself argues a position.'],
                    answerText: '"What is this essay arguing, and why should I believe it?"'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which thesis best previews the essay\'s structure?',
                    choices: [
                      { id: 'a', text: 'Recycling is good for many reasons.' },
                      { id: 'b', text: 'Curbside recycling programs should be expanded because they cut landfill volume, save municipal money, and reduce household waste.' },
                      { id: 'c', text: 'I will prove that recycling matters.' },
                      { id: 'd', text: 'Recycling has been practiced for decades.' }
                    ],
                    answer: 'b',
                    hint: 'A roadmap thesis lists the points the body will cover.',
                    steps: ['b names three distinct reasons — landfill volume, cost, household waste — each of which can anchor a body paragraph.', 'a is vague, c is an announcement, and d is a fact.'],
                    answerText: 'Curbside recycling programs should be expanded…'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is a summary rather than an argument?',
                    choices: [
                      { id: 'a', text: 'The novel frames the river as a force that corrupts every institution it touches.' },
                      { id: 'b', text: 'In chapter three, the characters raft down the river and reach the trading post.' },
                      { id: 'c', text: 'The author deliberately slows the pacing at the midpoint to mirror the journey\'s exhaustion.' },
                      { id: 'd', text: 'Fitzgerald uses color imagery to expose the emptiness beneath glamour.' }
                    ],
                    answer: 'b',
                    hint: 'Which choice only retells events?',
                    steps: ['a, c, and d each interpret the text — claims about what the author does and why.', 'b merely recounts plot with no interpretive stake, so it is summary.'],
                    answerText: 'In chapter three, the characters raft down the river…'
                  },
                  {
                    type: 'choice',
                    prompt: '"Video games are fun" → which revision makes it a viable thesis?',
                    choices: [
                      { id: 'a', text: 'Video games are very fun for everyone.' },
                      { id: 'b', text: 'This essay argues that video games are fun.' },
                      { id: 'c', text: 'Puzzle games train spatial reasoning more effectively than classroom exercises, so schools should pilot them in geometry courses.' },
                      { id: 'd', text: 'Fun video games are popular.' }
                    ],
                    answer: 'c',
                    hint: 'Add a disputable claim plus a reason.',
                    steps: ['The original states a mild preference with nothing to prove.', 'c swaps the vague "fun" for a testable claim (training spatial reasoning) and a specific proposal — disputable and significant.'],
                    answerText: 'Puzzle games train spatial reasoning…'
                  }
                ]
              }
            },
            {
              id: 'paragraph-structure',
              title: 'Paragraph structure',
              minutes: 8,
              summary: 'Topic sentence, evidence, analysis — the anatomy of a body paragraph.',
              tags: ['writing', 'paragraphs', 'structure'],
              blocks: [
                { type: 'p', text: 'A body paragraph is a miniature essay: it makes one claim, backs it up, and explains why the backup matters. Teachers often use the **MEAL plan** — **M**ain idea, **E**vidence, **A**nalysis, **L**ink — to remember the order.' },
                { type: 'callout', kind: 'key', text: 'The **topic sentence** (usually first) states the paragraph\'s single point and connects it to the thesis. Every following sentence must serve that point — a paragraph has **unity** only if nothing in it could be cut without losing the argument.' },
                { type: 'h2', text: 'Evidence needs analysis' },
                { type: 'p', text: 'The most common paragraph failure is the evidence dump: quote, quote, quote, done. Evidence proves nothing by itself — **analysis** explains *how* the evidence supports the claim. A useful ratio is at least two sentences of analysis for every piece of evidence.' },
                { type: 'example', title: 'MEAL in action', text: '*Main idea:* "The essay argues cities should fund night buses." *Evidence:* a ridership statistic. *Analysis:* what the statistic implies about who depends on late transit. *Link:* a sentence that hands the reader off to the next paragraph\'s point. ✓' },
                { type: 'list', items: ['**Transitions** are the link: "In contrast," "Building on this," "The deeper problem is…"', 'A new point needs a new paragraph — do not let one paragraph carry two ideas.', 'End with a "so what" sentence, not a restatement of the evidence.'] },
                { type: 'callout', kind: 'warning', text: 'A paragraph without a topic sentence forces readers to guess its point. If you cannot underline one sentence as the claim, the paragraph probably needs to be split or cut.' }
              ],
              skill: {
                id: 'build-body-paragraphs',
                name: 'Building body paragraphs',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is the job of a topic sentence?',
                    choices: [
                      { id: 'a', text: 'to provide the paragraph\'s evidence' },
                      { id: 'b', text: 'to state the paragraph\'s main point and tie it to the thesis' },
                      { id: 'c', text: 'to summarize the previous paragraph' },
                      { id: 'd', text: 'to introduce the conclusion' }
                    ],
                    answer: 'b',
                    hint: 'It is the paragraph\'s own mini-thesis.',
                    steps: ['A topic sentence makes the claim the rest of the paragraph will support.', 'It also signals how that claim advances the essay\'s overall thesis.'],
                    answerText: 'to state the paragraph\'s main point and tie it to the thesis'
                  },
                  {
                    type: 'choice',
                    prompt: 'In the MEAL paragraph model, what does the order stand for?',
                    choices: [
                      { id: 'a', text: 'Main idea, Evidence, Analysis, Link' },
                      { id: 'b', text: 'Method, Explanation, Argument, Logic' },
                      { id: 'c', text: 'Meaning, Example, Answer, Lead' },
                      { id: 'd', text: 'Main point, Example, Application, Link' }
                    ],
                    answer: 'a',
                    hint: 'Think claim → proof → interpretation → handoff.',
                    steps: ['MEAL = Main idea, Evidence, Analysis, Link.', 'The paragraph states a point, supports it, explains the support, and links onward.'],
                    answerText: 'Main idea, Evidence, Analysis, Link'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where does evidence belong in a body paragraph?',
                    choices: [
                      { id: 'a', text: 'before the topic sentence' },
                      { id: 'b', text: 'after the topic sentence and before the analysis' },
                      { id: 'c', text: 'in the conclusion only' },
                      { id: 'd', text: 'anywhere — order does not matter' }
                    ],
                    answer: 'b',
                    hint: 'The claim must exist before something can support it.',
                    steps: ['The topic sentence first stakes the claim.', 'Evidence follows to back it, then analysis explains how it backs it.'],
                    answerText: 'after the topic sentence and before the analysis'
                  },
                  {
                    type: 'choice',
                    prompt: 'A paragraph argues that exercise improves memory and ends with "Dietary supplements are a billion-dollar industry." What is wrong?',
                    choices: [
                      { id: 'a', text: 'the last sentence is too long' },
                      { id: 'b', text: 'the paragraph lacks unity — the final sentence is off-topic' },
                      { id: 'c', text: 'the paragraph needs more evidence' },
                      { id: 'd', text: 'nothing — variety keeps readers interested' }
                    ],
                    answer: 'b',
                    hint: 'Every sentence must serve the topic sentence.',
                    steps: ['The supplement industry fact does not support the exercise-memory claim.', 'Cutting it loses nothing — a sentence removable without damage to the argument breaks unity.'],
                    answerText: 'the paragraph lacks unity'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does the analysis in a paragraph do that evidence cannot?',
                    choices: [
                      { id: 'a', text: 'it provides statistics' },
                      { id: 'b', text: 'it explains how the evidence supports the paragraph\'s claim' },
                      { id: 'c', text: 'it cites the source correctly' },
                      { id: 'd', text: 'it transitions to the conclusion' }
                    ],
                    answer: 'b',
                    hint: 'Evidence shows; analysis says what it means.',
                    steps: ['A quotation or fact is raw material — it does not argue on its own.', 'Analysis draws the inference that connects the evidence back to the topic sentence and thesis.'],
                    answerText: 'it explains how the evidence supports the claim'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the function of a transition like "In contrast" or "Building on this point"?',
                    choices: [
                      { id: 'a', text: 'to add evidence' },
                      { id: 'b', text: 'to show how the new idea relates to the previous one' },
                      { id: 'c', text: 'to signal the essay is ending' },
                      { id: 'd', text: 'to introduce the thesis' }
                    ],
                    answer: 'b',
                    hint: 'Transitions are the link in MEAL.',
                    steps: ['They name the logical relationship — contrast, continuation, consequence — between ideas.', 'That relationship tells readers how to file the new paragraph relative to the last.'],
                    answerText: 'to show how the new idea relates to the previous one'
                  },
                  {
                    type: 'choice',
                    prompt: 'A paragraph\'s details are: "bees pollinate one-third of crops," "bee populations fell 30% in a decade," and "fewer bees means less fruit." Which topic sentence best unifies them?',
                    choices: [
                      { id: 'a', text: 'Bees are fascinating insects.' },
                      { id: 'b', text: 'Declining bee populations threaten the food supply.' },
                      { id: 'c', text: 'There are over 20,000 species of bees.' },
                      { id: 'd', text: 'Honey is produced by bees.' }
                    ],
                    answer: 'b',
                    hint: 'The topic sentence must cover all three details.',
                    steps: ['All three details concern bees declining and crops suffering.', 'Only b names both the decline and its consequence for food; a and c are too broad, d is unrelated.'],
                    answerText: 'Declining bee populations threaten the food supply.'
                  },
                  {
                    type: 'choice',
                    prompt: 'How should a body paragraph end?',
                    choices: [
                      { id: 'a', text: 'by repeating the evidence word for word' },
                      { id: 'b', text: 'with a "so what" sentence that ties the point back to the thesis or bridges to the next paragraph' },
                      { id: 'c', text: 'with a new, unrelated topic to keep interest' },
                      { id: 'd', text: 'with a rhetorical question, always' }
                    ],
                    answer: 'b',
                    hint: 'Think about the L in MEAL.',
                    steps: ['The link gives the paragraph a reason to exist: it either connects the analysis to the thesis or hands off to the next point.', 'Repeating evidence adds nothing, and a new topic belongs in a new paragraph.'],
                    answerText: 'with a "so what" sentence tying back to the thesis'
                  }
                ]
              }
            },
            {
              id: 'argument-vs-summary',
              title: 'Argument vs. summary',
              minutes: 7,
              summary: 'Retell less — interpret more.',
              tags: ['writing', 'argument', 'analysis', 'summary'],
              blocks: [
                { type: 'p', text: 'Academic essays live or die on **argument**: your interpretive claim about a text, issue, or dataset. **Summary** is what supports it — a compressed retelling of the source\'s content. Readers mark essays down for summarizing when they should be arguing.' },
                { type: 'callout', kind: 'key', text: 'Summary answers *what does it say?* Argument answers *what does it mean and why does it matter?* "Gatsby throws lavish parties" is summary. "Gatsby\'s parties stage wealth as a spectacle that substitutes for intimacy" is argument.' },
                { type: 'h2', text: 'Where each belongs' },
                { type: 'p', text: 'Summary earns its place in two spots: orienting the reader early (a sentence or two of context in the introduction) and setting up a piece of evidence before you analyze it. Everywhere else, your own claim should be doing the driving.' },
                { type: 'example', title: 'Same passage, two moves', text: 'Summary: "The mayor announces the factory will close, and workers protest." Argument: "The author cuts between the mayor\'s polished announcement and the workers\' improvised chants to show that official language cannot contain the damage it causes." The second interprets *how* the scene works. ✓' },
                { type: 'list', items: ['Verbs signal the mode: *says, writes, describes* = summary; *argues, contends, demonstrates, implies* = argument.', 'Apply the "so what" test — if a sentence could appear in a plot summary or book report, it is probably not arguing.', 'Quote, then spend at least two sentences interpreting what the quote *does*, not what it *says*.'] },
                { type: 'callout', kind: 'warning', text: 'Rearranging the events of a text in your own words is still summary — paraphrase without interpretation is just summary with extra steps.' }
              ],
              skill: {
                id: 'argument-or-summary',
                name: 'Distinguishing argument from summary',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which sentence argues rather than summarizes?',
                    choices: [
                      { id: 'a', text: 'In the second chapter, the protagonist moves to the city.' },
                      { id: 'b', text: 'The protagonist\'s move to the city is framed as a loss of innocence, signaled by the shift from pastoral to industrial imagery.' },
                      { id: 'c', text: 'The novel has twelve chapters.' },
                      { id: 'd', text: 'The author was born in Ohio.' }
                    ],
                    answer: 'b',
                    hint: 'Which sentence interprets rather than reports?',
                    steps: ['a and c report plot or structure; d reports biography.', 'b makes an interpretive claim — it explains *how* the move is framed and points to textual evidence for it.'],
                    answerText: 'The protagonist\'s move to the city is framed as a loss of innocence…'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the purpose of summary inside an academic essay?',
                    choices: [
                      { id: 'a', text: 'to prove the writer read the text' },
                      { id: 'b', text: 'to give the reader just enough context to follow the argument and evidence' },
                      { id: 'c', text: 'to fill space between quotations' },
                      { id: 'd', text: 'to replace an argument when the writer is unsure' }
                    ],
                    answer: 'b',
                    hint: 'Summary serves the argument — not the reverse.',
                    steps: ['Readers need orientation: which text, which passage, what happened.', 'That context exists so the writer\'s claim and evidence can land — not as an end in itself.'],
                    answerText: 'to give context for the argument and evidence'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which sentence is analysis rather than plot summary?',
                    choices: [
                      { id: 'a', text: 'The character visits the graveyard in chapter eight.' },
                      { id: 'b', text: 'The graveyard scene recurs three times, and each visit shrinks the imagery from marble monuments to bare stones, tracking the character\'s fading illusions.' },
                      { id: 'c', text: 'Then she goes home and writes a letter.' },
                      { id: 'd', text: 'The book was published in 1960.' }
                    ],
                    answer: 'b',
                    hint: 'Look for a pattern noticed and interpreted.',
                    steps: ['b identifies repetition (three visits) and explains what the changing imagery *means*.', 'a and c retell events; d is a publishing fact — none of them interpret.'],
                    answerText: 'The graveyard scene recurs three times…'
                  },
                  {
                    type: 'choice',
                    prompt: '"Gatsby throws enormous parties every weekend." This sentence is…',
                    choices: [
                      { id: 'a', text: 'an argument' },
                      { id: 'b', text: 'a summary' },
                      { id: 'c', text: 'a thesis' },
                      { id: 'd', text: 'a citation' }
                    ],
                    answer: 'b',
                    hint: 'Does it interpret or just retell?',
                    steps: ['The sentence states something the text itself says — anyone who read the book agrees.', 'No interpretive claim means it is summary (usable as context, not as an argument).'],
                    answerText: 'a summary'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which verb most signals an argumentative sentence?',
                    choices: [
                      { id: 'a', text: 'says' },
                      { id: 'b', text: 'demonstrates' },
                      { id: 'c', text: 'writes' },
                      { id: 'd', text: 'includes' }
                    ],
                    answer: 'b',
                    hint: 'Which verb already implies a claim about what the text does?',
                    steps: ['*Says, writes,* and *includes* merely report content.', '*Demonstrates* asserts that the text accomplishes something — the hallmark of argument.'],
                    answerText: 'demonstrates'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where is summary most appropriate in an essay?',
                    choices: [
                      { id: 'a', text: 'in every body paragraph as the main content' },
                      { id: 'b', text: 'briefly, in the introduction and right before a piece of evidence' },
                      { id: 'c', text: 'only in the conclusion' },
                      { id: 'd', text: 'never — essays should contain no summary' }
                    ],
                    answer: 'b',
                    hint: 'Summary orients; it should not dominate.',
                    steps: ['A sentence or two of context in the introduction tells the reader what is being discussed.', 'One line before a quotation situates it — then analysis takes over.'],
                    answerText: 'briefly, in the introduction and before evidence'
                  },
                  {
                    type: 'choice',
                    prompt: 'A paragraph quotes the text, paraphrases the quote, then quotes another passage. What is missing?',
                    choices: [
                      { id: 'a', text: 'a topic sentence' },
                      { id: 'b', text: 'analysis — nothing interprets what the quotes mean or how they support a claim' },
                      { id: 'c', text: 'a transition word' },
                      { id: 'd', text: 'a citation' }
                    ],
                    answer: 'b',
                    hint: 'Quoting and paraphrasing both stay at the level of *what it says*.',
                    steps: ['Paraphrase repeats content; quotation presents content.', 'Neither explains *why* the evidence matters — the paragraph needs analysis connecting evidence to claim.'],
                    answerText: 'analysis — nothing interprets the quotes'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does the "so what" test catch?',
                    choices: [
                      { id: 'a', text: 'grammatical errors' },
                      { id: 'b', text: 'sentences that retell content without staking a claim' },
                      { id: 'c', text: 'missing page numbers' },
                      { id: 'd', text: 'unfamiliar vocabulary' }
                    ],
                    answer: 'b',
                    hint: 'Ask whether a skeptical reader could shrug.',
                    steps: ['If a sentence merely restates something in the source, a reader can ask "so what?" — nothing is being claimed.', 'The test flags those sentences for conversion into analysis or deletion.'],
                    answerText: 'sentences that retell without a claim'
                  }
                ]
              }
            },
            {
              id: 'revision-strategies',
              title: 'Revision strategies',
              minutes: 8,
              summary: 'Fix the argument first, the commas last.',
              tags: ['writing', 'revision', 'editing', 'drafting'],
              blocks: [
                { type: 'p', text: '**Revision** — literally "seeing again" — is not proofreading. Proofreading catches typos; revision can delete whole sections, reorder arguments, and replace the thesis. Writers who edit commas in paragraph three while the argument is broken are polishing a ship that is still sinking.' },
                { type: 'callout', kind: 'key', text: 'Revise in order of **higher-order concerns**: thesis and claim first, then structure and paragraph order, then evidence and analysis — and only then sentence-level style and grammar.' },
                { type: 'h2', text: 'Tools that work' },
                { type: 'p', text: 'A **reverse outline** exposes structure: write one sentence next to each paragraph summarizing what it actually does. If two paragraphs do the same job, or none advance the thesis, you have found the structural flaw before touching a word.' },
                { type: 'example', title: 'Higher-order first', text: 'Draft problem: the conclusion argues a different claim than the introduction. Fixing every comma in the draft would be wasted work — the right revision is rewriting the thesis to match where the essay actually lands, then aligning each paragraph to it. ✓' },
                { type: 'list', items: ['**Read aloud** — ear catches what the eye glides over: missing words, run-ons, dead spots.', '**Cut wordiness**: "due to the fact that" → "because"; "in order to" → "to".', '**Peer feedback** works best on content questions ("where did I lose you?") before grammar questions.', 'Let a draft sit — even overnight distance restores objectivity.'] },
                { type: 'callout', kind: 'warning', text: '"Editing" and "revising" are different passes. Doing them at once means fixing sentences that might be deleted — always revise content before polishing prose.' }
              ],
              skill: {
                id: 'revise-for-content',
                name: 'Revising for content',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is the difference between revising and editing?',
                    choices: [
                      { id: 'a', text: 'revising fixes spelling; editing fixes argument' },
                      { id: 'b', text: 'revising changes ideas, structure, and evidence; editing fixes surface errors like grammar and punctuation' },
                      { id: 'c', text: 'they are two names for the same process' },
                      { id: 'd', text: 'editing happens first; revising happens last' }
                    ],
                    answer: 'b',
                    hint: 'Think global vs. surface.',
                    steps: ['Revision re-sees the essay\'s argument — claims, order, evidence.', 'Editing is the surface pass that only makes sense once the content is final.'],
                    answerText: 'revising changes content; editing fixes surface errors'
                  },
                  {
                    type: 'choice',
                    prompt: 'A draft has a weak thesis and several comma splices. What should be fixed first?',
                    choices: [
                      { id: 'a', text: 'the comma splices — errors are more visible' },
                      { id: 'b', text: 'the thesis — higher-order concerns come before sentence-level fixes' },
                      { id: 'c', text: 'both at the same time' },
                      { id: 'd', text: 'neither — submit the draft as is' }
                    ],
                    answer: 'b',
                    hint: 'Fix the skeleton before the skin.',
                    steps: ['A weak thesis can force whole paragraphs to be rewritten or deleted.', 'Polishing commas in passages that may not survive is wasted effort — revise claims first, mechanics last.'],
                    answerText: 'the thesis — higher-order concerns first'
                  },
                  {
                    type: 'choice',
                    prompt: 'What does a reverse outline do?',
                    choices: [
                      { id: 'a', text: 'plans the essay before drafting' },
                      { id: 'b', text: 'summarizes each existing paragraph in one line to expose structural problems' },
                      { id: 'c', text: 'lists sources in reverse order' },
                      { id: 'd', text: 'rearranges the conclusion to the front' }
                    ],
                    answer: 'b',
                    hint: 'It is built *after* the draft exists.',
                    steps: ['You write one sentence per paragraph describing what the paragraph actually does.', 'Gaps, repetitions, and paragraphs that do not serve the thesis become visible immediately.'],
                    answerText: 'summarizes each paragraph to expose structure'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is a substantive (higher-order) revision?',
                    choices: [
                      { id: 'a', text: 'fixing a typo' },
                      { id: 'b', text: 'moving paragraph four to the front because the argument works better chronologically' },
                      { id: 'c', text: 'adding a missing apostrophe' },
                      { id: 'd', text: 'changing "very good" to "excellent"' }
                    ],
                    answer: 'b',
                    hint: 'Which change alters what the essay *does*?',
                    steps: ['Reordering paragraphs changes the argument\'s architecture.', 'Typo, apostrophe, and word-swap fixes are all surface-level editing.'],
                    answerText: 'moving a paragraph to improve the argument\'s order'
                  },
                  {
                    type: 'choice',
                    prompt: 'A reverse outline reveals that paragraphs 3 and 5 make the same point. What is the right revision?',
                    choices: [
                      { id: 'a', text: 'keep both — repetition reinforces ideas' },
                      { id: 'b', text: 'merge them or cut one — each paragraph should advance the thesis once' },
                      { id: 'c', text: 'fix the commas in both' },
                      { id: 'd', text: 'move one to the conclusion' }
                    ],
                    answer: 'b',
                    hint: 'Two paragraphs doing one job is structural redundancy.',
                    steps: ['Duplicate points stall the argument and waste the reader\'s patience.', 'Merge the strongest material from both into a single paragraph that earns its place.'],
                    answerText: 'merge them or cut one'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which revision best tightens "Due to the fact that the library was closed, in order to study, we went to the café"?',
                    choices: [
                      { id: 'a', text: 'Due to the fact that the library was closed, in order to study we went to the café.' },
                      { id: 'b', text: 'Because the library was closed, we went to the café to study.' },
                      { id: 'c', text: 'The library was closed due to the fact that we went to the café to study.' },
                      { id: 'd', text: 'Due to the fact of closure, we went to the café, in order to study.' }
                    ],
                    answer: 'b',
                    hint: 'Kill the filler phrases.',
                    steps: ['"Due to the fact that" → "because"; "in order to" → "to".', 'b removes both padded phrases while keeping the meaning — the sentence loses six words and gains clarity.'],
                    answerText: 'Because the library was closed, we went to the café to study.'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the most useful question to ask a peer reviewer?',
                    choices: [
                      { id: 'a', text: '"Are there any typos?"' },
                      { id: 'b', text: '"Where did the argument lose you, and what do you think my thesis is?"' },
                      { id: 'c', text: '"Is my handwriting neat?"' },
                      { id: 'd', text: '"Did you like it?"' }
                    ],
                    answer: 'b',
                    hint: 'Content questions exploit what only another reader can see.',
                    steps: ['A peer\'s reading of your thesis — versus what you intended — tests whether the argument lands.', 'Typos can be caught alone later; "did you like it" returns no actionable information.'],
                    answerText: '"Where did the argument lose you?"'
                  },
                  {
                    type: 'choice',
                    prompt: 'When should grammar and spelling be corrected?',
                    choices: [
                      { id: 'a', text: 'before writing the draft' },
                      { id: 'b', text: 'in the final polishing pass, after content and structure are settled' },
                      { id: 'c', text: 'only if the teacher requires it' },
                      { id: 'd', text: 'during the first draft, so it stays clean' }
                    ],
                    answer: 'b',
                    hint: 'Surface fixes on doomed sentences are wasted.',
                    steps: ['Revising later can delete or rewrite sentences entirely.', 'Editing first means re-editing after every structural change — the final pass is the efficient one.'],
                    answerText: 'in the final polishing pass'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'evidence-and-style',
          title: 'Evidence and style',
          lessons: [
            {
              id: 'integrating-evidence-and-citations',
              title: 'Integrating evidence and citations',
              minutes: 9,
              summary: 'The quote sandwich, signal phrases, and clean MLA citations.',
              tags: ['writing', 'evidence', 'citations', 'MLA'],
              blocks: [
                { type: 'p', text: 'Evidence cannot speak for itself. Dropped into a paragraph bare — a "quote bomb" — it confuses readers and wastes the source. The fix is the **quote sandwich**: introduce the quote, present it, then analyze what it shows.' },
                { type: 'callout', kind: 'key', text: 'A **signal phrase** names who said it and frames it: *As Smith argues, "…" (24).* The reader should always know whose words they are reading and why the quote is there.' },
                { type: 'h2', text: 'MLA in-text citations' },
                { type: 'p', text: 'MLA cites **author\'s last name and page number** in parentheses — **(Smith 24)**, no comma, no "p." If the signal phrase already names the author, the parenthetical holds only the page: *Smith argues "…" (24).* The sentence\'s period goes **after** the closing parenthesis.' },
                { type: 'list', items: ['Prose quotations longer than four lines become **block quotes**: indented half an inch, no quotation marks.', 'Use **ellipses** (…) to omit words inside a quote and **brackets** to alter it: "[he] left early."', 'Paraphrases and summaries need citations too — citation is about ideas, not just quoted words.'] },
                { type: 'example', title: 'Build the sandwich', text: '*Top bread:* "Frost frames doubt as a fork in the road." *Filling:* \'he writes that the choice "has made all the difference" (20).\' *Bottom bread:* "The past tense implies the narrator is mythologizing the choice in retrospect — not celebrating decisiveness but constructing it." ✓' },
                { type: 'callout', kind: 'warning', text: 'Do not end a paragraph with a quotation. If the source gets the last word, your analysis never happened.' }
              ],
              skill: {
                id: 'integrate-evidence-citations',
                name: 'Integrating evidence and citations',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'What is the correct order of the "quote sandwich"?',
                    choices: [
                      { id: 'a', text: 'quote → analysis → introduction' },
                      { id: 'b', text: 'introduction → quote → analysis' },
                      { id: 'c', text: 'analysis → quote → introduction' },
                      { id: 'd', text: 'quote → quote → quote' }
                    ],
                    answer: 'b',
                    hint: 'The reader needs context before, and interpretation after.',
                    steps: ['A signal or framing sentence introduces who is speaking and why.', 'The quotation follows, then at least a sentence of analysis explains what it proves.'],
                    answerText: 'introduction → quote → analysis'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which MLA in-text citation is formatted correctly?',
                    choices: [
                      { id: 'a', text: '(Smith, 24)' },
                      { id: 'b', text: '(Smith p. 24)' },
                      { id: 'c', text: '(Smith 24)' },
                      { id: 'd', text: '(John Smith, 24)' }
                    ],
                    answer: 'c',
                    hint: 'Last name and page number only.',
                    steps: ['MLA parenthetical = author\'s last name + page number.', 'No comma, no "p.", and no first name — (Smith 24) is correct.'],
                    answerText: '(Smith 24)'
                  },
                  {
                    type: 'choice',
                    prompt: 'If the signal phrase already names the author — "Smith argues that the data are incomplete" — what goes in the parentheses?',
                    choices: [
                      { id: 'a', text: '(Smith 24)' },
                      { id: 'b', text: '(24)' },
                      { id: 'c', text: '(Smith, p. 24)' },
                      { id: 'd', text: 'nothing — no citation needed' }
                    ],
                    answer: 'b',
                    hint: 'Do not repeat what the sentence already says.',
                    steps: ['MLA requires author + page, but the author is already named in the signal phrase.', 'Only the page number remains in parentheses: (24).'],
                    answerText: '(24)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is a properly integrated quotation?',
                    choices: [
                      { id: 'a', text: 'The poem is sad. "The darkness surrounds me" (Lee 5). This is depressing.' },
                      { id: 'b', text: 'Lee compresses grief into a single image when the speaker says the darkness "surrounds" her (5).' },
                      { id: 'c', text: '"The darkness surrounds me." The poem is about darkness.' },
                      { id: 'd', text: 'The darkness surrounds me (Lee 5).' }
                    ],
                    answer: 'b',
                    hint: 'Look for a signal phrase with the quote woven into the sentence.',
                    steps: ['b integrates a short quotation grammatically into the writer\'s own sentence, names the author, cites the page, and interprets (*compresses grief into an image*).', 'a and c drop quotes between flat sentences; d plagiarizes the phrasing without quotation marks.'],
                    answerText: 'Lee compresses grief into a single image…'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is a "quote bomb"?',
                    choices: [
                      { id: 'a', text: 'a quotation that is too short to be useful' },
                      { id: 'b', text: 'a quotation dropped into a paragraph with no introduction or analysis' },
                      { id: 'c', text: 'a quotation from an unreliable source' },
                      { id: 'd', text: 'a quotation longer than one line' }
                    ],
                    answer: 'b',
                    hint: 'It lands without warning.',
                    steps: ['A bare quote forces the reader to guess who is speaking and why it matters.', 'Every quotation needs a signal phrase before it and analysis after it.'],
                    answerText: 'a quotation with no introduction or analysis'
                  },
                  {
                    type: 'choice',
                    prompt: 'In MLA style, when must a quotation be set off as a block quote?',
                    choices: [
                      { id: 'a', text: 'whenever it is important' },
                      { id: 'b', text: 'when it is prose longer than four lines' },
                      { id: 'c', text: 'when it is the paper\'s main evidence' },
                      { id: 'd', text: 'block quotes are never allowed' }
                    ],
                    answer: 'b',
                    hint: 'The rule is about length, not importance.',
                    steps: ['MLA sets prose quotations of more than four lines as block quotes.', 'They are indented half an inch and appear without quotation marks — the formatting itself signals quotation.'],
                    answerText: 'when prose is longer than four lines'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where does the period go in this sentence? According to Ruiz, the results "changed the field" (88).',
                    choices: [
                      { id: 'a', text: 'before the closing quotation mark' },
                      { id: 'b', text: 'inside the quotation, before the citation' },
                      { id: 'c', text: 'after the closing parenthesis — just as shown' },
                      { id: 'd', text: 'no period is needed' }
                    ],
                    answer: 'c',
                    hint: 'The citation is part of the sentence, so the sentence still needs its end punctuation.',
                    steps: ['The parenthetical belongs to the sentence, so it comes before the sentence\'s final period.', 'Pattern: quote, space, (page), period — "…field" (88).'],
                    answerText: 'after the closing parenthesis'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is the correct use of an ellipsis (…) in a quotation?',
                    choices: [
                      { id: 'a', text: 'to mark words omitted from inside the quoted passage' },
                      { id: 'b', text: 'to make the quote sound dramatic' },
                      { id: 'c', text: 'to show the source was hard to find' },
                      { id: 'd', text: 'to replace the citation' }
                    ],
                    answer: 'a',
                    hint: 'It signals an omission to the reader.',
                    steps: ['Ellipses tell the reader material was cut from the middle of a quotation.', 'The omission must not change the source\'s meaning — cutting a "not" is still dishonest quoting.'],
                    answerText: 'to mark words omitted inside the quote'
                  }
                ]
              }
            },
            {
              id: 'avoiding-plagiarism',
              title: 'Avoiding plagiarism',
              minutes: 8,
              summary: 'Citation rules, paraphrase done right, and what counts as common knowledge.',
              tags: ['writing', 'plagiarism', 'citations', 'academic honesty'],
              blocks: [
                { type: 'p', text: '**Plagiarism** is presenting someone else\'s words *or ideas* as your own — whether or not you intended to. Copying a paragraph is the obvious case, but changing a few words while keeping the source\'s structure and phrasing is plagiarism too.' },
                { type: 'callout', kind: 'key', text: 'You must cite (1) all **direct quotations** (with quotation marks), (2) all **paraphrases and summaries** of a source\'s ideas, and (3) **specific facts, statistics, and arguments** that are not common knowledge.' },
                { type: 'h2', text: 'Paraphrase means rethink, not reword' },
                { type: 'p', text: 'A legal paraphrase changes both the **words and the sentence structure**, then cites the source. **Patchwriting** — swapping synonyms into the original sentence frame — keeps the author\'s fingerprint and counts as plagiarism even with a citation.' },
                { type: 'p', text: '**Common knowledge** needs no citation: facts a general reader knows or can find in any reference ("The Earth orbits the Sun," "World War II ended in 1945"). A source\'s *interpretation* of those facts still requires a citation.' },
                { type: 'example', title: 'Spot the difference', text: 'Source: "Pollinators enable roughly one-third of global crop production." Patchwriting: "Pollinators make possible about one-third of worldwide crop production" — same skeleton, still plagiarism. True paraphrase: "A large share of agriculture depends on insect pollination (Ortiz 12)" — new structure, cited. ✓' },
                { type: 'list', items: ['Reusing your own previously submitted work without permission is **self-plagiarism**.', 'Patchwriting with a citation is still misconduct — the wording is borrowed even if the idea is credited.', 'When unsure whether something is common knowledge, cite it — over-citing is never punished.'] },
                { type: 'callout', kind: 'warning', text: 'Intent does not matter. Accidental plagiarism — sloppy notes, a forgotten quote, a paraphrase that hugs the original — is treated the same as deliberate copying.' }
              ],
              skill: {
                id: 'paraphrase-and-attribute',
                name: 'Paraphrasing and attributing sources',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which of these requires a citation?',
                    choices: [
                      { id: 'a', text: 'a direct quotation from an article' },
                      { id: 'b', text: 'the fact that water boils at 100°C at sea level' },
                      { id: 'c', text: 'your own original observation' },
                      { id: 'd', text: 'the fact that Earth orbits the Sun' }
                    ],
                    answer: 'a',
                    hint: 'Citation covers borrowed words *and* borrowed ideas.',
                    steps: ['Direct quotations always need quotation marks plus a citation.', 'Widely known facts (b, d) are common knowledge; your own observations (c) are yours.'],
                    answerText: 'a direct quotation from an article'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which statement is common knowledge and needs no citation?',
                    choices: [
                      { id: 'a', text: 'a historian\'s claim that the war\'s turning point was economic' },
                      { id: 'b', text: 'the finding that a specific drug cut infection rates by 40% in a 2019 trial' },
                      { id: 'c', text: 'the fact that World War II ended in 1945' },
                      { id: 'd', text: 'a critic\'s reading of a poem' }
                    ],
                    answer: 'c',
                    hint: 'Could a general reader find it in any encyclopedia?',
                    steps: ['Common knowledge = facts any reference work states, like dates of well-known events.', 'a, b, and d are specific claims belonging to particular authors — all citeable.'],
                    answerText: 'World War II ended in 1945'
                  },
                  {
                    type: 'choice',
                    prompt: 'A writer keeps a source\'s sentence structure but replaces several words with synonyms and adds a citation. This is…',
                    choices: [
                      { id: 'a', text: 'an acceptable paraphrase' },
                      { id: 'b', text: 'patchwriting — still a form of plagiarism' },
                      { id: 'c', text: 'a correct block quote' },
                      { id: 'd', text: 'common knowledge' }
                    ],
                    answer: 'b',
                    hint: 'Whose sentence frame is it?',
                    steps: ['Swapping synonyms into the original structure keeps the author\'s expression.', 'A citation credits the idea but not the borrowed phrasing — patchwriting is misconduct either way.'],
                    answerText: 'patchwriting — still plagiarism'
                  },
                  {
                    type: 'choice',
                    prompt: 'Source: "Pollinators enable roughly one-third of global crop production" (Ortiz 12). Which is an acceptable paraphrase?',
                    choices: [
                      { id: 'a', text: 'Pollinators make possible about one-third of worldwide crop production (Ortiz 12).' },
                      { id: 'b', text: 'A large share of the world\'s agriculture depends on insects for pollination (Ortiz 12).' },
                      { id: 'c', text: 'Pollinators enable roughly one-third of global crop production.' },
                      { id: 'd', text: 'One-third of crops need pollinators.' }
                    ],
                    answer: 'b',
                    hint: 'New words *and* new structure, with the idea credited.',
                    steps: ['a changes only vocabulary — same skeleton, so it is patchwriting.', 'b restructures the claim entirely and cites the source; c drops the citation; d drops the citation and garbles the number.'],
                    answerText: 'A large share of agriculture depends on insects for pollination (Ortiz 12).'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which action is plagiarism?',
                    choices: [
                      { id: 'a', text: 'quoting a source with quotation marks and a citation' },
                      { id: 'b', text: 'paraphrasing a source\'s idea in your own structure with a citation' },
                      { id: 'c', text: 'copying two sentences and changing a few words, without citing' },
                      { id: 'd', text: 'stating that water freezes at 0°C' }
                    ],
                    answer: 'c',
                    hint: 'No citation plus near-original wording.',
                    steps: ['c borrows both expression and idea with no attribution — the definition of plagiarism.', 'a and b are proper citation; d is common knowledge.'],
                    answerText: 'copying sentences with small changes, uncited'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is self-plagiarism?',
                    choices: [
                      { id: 'a', text: 'forgetting to cite a source' },
                      { id: 'b', text: 'reusing your own previously submitted work without permission' },
                      { id: 'c', text: 'quoting yourself with a citation' },
                      { id: 'd', text: 'writing about a topic you already studied' }
                    ],
                    answer: 'b',
                    hint: 'The work is yours — the submission is the problem.',
                    steps: ['Each submission is expected to be new work unless an instructor allows reuse.', 'Resubmitting your old paper misrepresents the assignment even though no other author is involved.'],
                    answerText: 'reusing your own submitted work without permission'
                  },
                  {
                    type: 'choice',
                    prompt: 'A paraphrase of a source\'s argument…',
                    choices: [
                      { id: 'a', text: 'needs no citation because the words are new' },
                      { id: 'b', text: 'needs a citation because the *idea* is borrowed' },
                      { id: 'c', text: 'needs quotation marks' },
                      { id: 'd', text: 'is always plagiarism' }
                    ],
                    answer: 'b',
                    hint: 'Citation credits ideas, not just wording.',
                    steps: ['Quotation marks are for exact words; a paraphrase takes the idea without the wording.', 'The underlying idea still belongs to the source — omitting the citation presents it as yours.'],
                    answerText: 'needs a citation — the idea is borrowed'
                  },
                  {
                    type: 'choice',
                    prompt: 'You are unsure whether a fact counts as common knowledge. What should you do?',
                    choices: [
                      { id: 'a', text: 'leave it uncited — doubt favors no citation' },
                      { id: 'b', text: 'cite it — over-citing is never penalized' },
                      { id: 'c', text: 'delete the fact' },
                      { id: 'd', text: 'put it in quotation marks' }
                    ],
                    answer: 'b',
                    hint: 'Which mistake is harmless, and which is misconduct?',
                    steps: ['An unnecessary citation costs nothing; a missing one is plagiarism.', 'Default to citing whenever the fact\'s status is uncertain.'],
                    answerText: 'cite it — over-citing is safe'
                  }
                ]
              }
            },
            {
              id: 'counterarguments',
              title: 'Counterarguments and rebuttals',
              minutes: 6,
              summary: 'Strong essays concede the best opposing point — then answer it. Steelmanning builds credibility; strawmanning destroys it.',
              tags: ['writing', 'argument', 'rhetoric'],
              blocks: [
                { type: 'p', text: 'A one-sided argument invites the reader to supply the objection you ignored. A **counterargument paragraph** does the opposite: it names the strongest opposing claim, concedes whatever part of it is true, and then *rebuts* it with reasoning or evidence. Far from weakening your essay, it proves you have examined the question honestly.' },
                { type: 'callout', kind: 'key', text: 'The structure is three moves: **concede** ("Critics rightly note that…"), **rebut** ("However, the evidence shows…"), **return** ("The thesis stands because…"). Each move gets at least a sentence — skipping the concession makes the paragraph a strawman.' },
                { type: 'example', title: 'Skeleton paragraph', text: '*"Some argue that school uniforms suppress self-expression. That concern is real — clothing is a genuine outlet for adolescents. However, studies find uniforms reduce visible economic stratification and morning-decision fatigue, and students retain expression through hairstyle, art, and speech. On balance, the gains in equity outweigh the limited cost."*' },
                { type: 'callout', kind: 'warning', text: 'A **strawman** misstates the opposing view to make it easy to defeat — readers who hold the real position notice immediately and discount everything else you wrote. If your version of the other side would make its own advocates wince, rewrite it until they would sign it.' },
                { type: 'callout', kind: 'tip', text: 'Choose the **strongest** objection, not the weakest. Rebutting "uniforms are ugly" persuades nobody; rebutting "uniforms suppress identity" does real work. Also hedge precisely — "frequently", "in controlled studies" — rather than hedging vaguely or not at all.' },
                { type: 'p', text: 'Placement matters: in a short essay the counterargument usually sits between your strongest point and the conclusion, where it still has room to breathe. In longer arguments you may concede-and-rebut once per major section.' }
              ],
              skill: {
                id: 'counterarguments',
                name: 'Handle counterarguments',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Which sentence is a proper **rebuttal** move?',
                    choices: [
                      { id: 'a', text: '"Critics argue that remote work weakens mentorship."' },
                      { id: 'b', text: '"However, distributed teams in the cited study retained mentorship quality through structured pairing."' },
                      { id: 'c', text: '"This essay has three parts."' },
                      { id: 'd', text: '"In conclusion, remote work is good."' }
                    ],
                    answer: 'b',
                    hint: 'The rebuttal answers the objection with evidence.',
                    steps: [
                      'a is the concession — it states the objection.',
                      'b answers it with evidence — that is the rebuttal.',
                      'The full sequence is concede → rebut → return to thesis.'
                    ],
                    answerText: 'the "However…" sentence with evidence'
                  },
                  {
                    type: 'choice',
                    prompt: 'What is a strawman argument?',
                    choices: [
                      { id: 'a', text: 'Quoting an opponent exactly' },
                      { id: 'b', text: 'Admitting the opposing view has merit' },
                      { id: 'c', text: 'Misrepresenting the opposing view so it is easy to defeat' },
                      { id: 'd', text: 'Using too many statistics' }
                    ],
                    answer: 'c',
                    hint: 'It looks like the real argument but is made of straw.',
                    steps: [
                      'A strawman substitutes a weaker, distorted version of the opposition for the real one.',
                      'It fails rhetorically: informed readers reject the whole essay once they spot it.'
                    ],
                    answerText: 'misrepresenting the opposing view'
                  },
                  {
                    type: 'choice',
                    prompt: 'Where does a counterargument paragraph usually belong in a short essay?',
                    choices: [
                      { id: 'a', text: 'Before the thesis statement' },
                      { id: 'b', text: 'Between the strongest body point and the conclusion' },
                      { id: 'c', text: 'In the introduction, as the hook' },
                      { id: 'd', text: 'In a footnote' }
                    ],
                    answer: 'b',
                    hint: 'It needs room to breathe but must not end the essay on the opponent\'s terms.',
                    steps: [
                      'After your main argument is established, the counterargument gets answered — then the conclusion lands your thesis.',
                      'Leading with it buries your claim; ending with it ends the essay on the objection.'
                    ],
                    answerText: 'before the conclusion, after the main argument'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which objection is the STRONGEST choice to rebut in an essay favoring four-day school weeks?',
                    choices: [
                      { id: 'a', text: '"Some people just dislike change."' },
                      { id: 'b', text: '"Four-day weeks can compress instructional time and strain childcare for working families."' },
                      { id: 'c', text: '"A five-day week is what we have always done."' },
                      { id: 'd', text: '"Students might be bored on Fridays."' }
                    ],
                    answer: 'b',
                    hint: 'Pick the objection that serious opponents actually make.',
                    steps: [
                      'b raises real stakes — learning time and childcare — that advocates must genuinely answer.',
                      'a, c, and d are weak targets: rebutting them persuades no one.'
                    ],
                    answerText: 'the childcare/instructional-time objection'
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
