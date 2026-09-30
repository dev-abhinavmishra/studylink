// Computing, part 2: data structures.
// Registered via content/index.js SUBJECT_FILES; merges into the computing subject.

module.exports = {
  id: 'computing',
  name: 'Computing',
  icon: 'cpu',
  color: '#7c3aed',
  tagline: 'From first lines of code to how the internet works',
  description: 'Programming fundamentals, web development, computer science principles, and data structures.',
  courses: [
    {
      id: 'data-structures',
      title: 'Data Structures',
      subtitle: 'Intro college',
      summary: 'How programs organize information: arrays, linked lists, stacks, queues, hash tables, trees, and graphs — plus when each wins.',
      units: [
        {
          id: 'linear-structures',
          title: 'Linear structures',
          lessons: [
            {
              id: 'how-computers-count',
              title: 'How computers count: binary',
              minutes: 6,
              summary: 'Every number in memory is a row of switches — binary is counting with only 0 and 1.',
              tags: ['binary', 'number systems'],
              blocks: [
                { type: 'p', text: 'Computers store everything as **bits** — switches that are on (1) or off (0). With two symbols per place, counting works exactly like decimal, except each place is worth a *power of 2* instead of a power of 10: $1, 2, 4, 8, 16, 32, \\ldots$' },
                { type: 'example', title: 'Read a binary number', text: '$1011_2 = 1\\cdot 8 + 0\\cdot 4 + 1\\cdot 2 + 1\\cdot 1 = 11$. The rightmost bit is worth $2^0 = 1$, then $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, doubling leftward.' },
                { type: 'p', text: 'To go the other way, **divide by 2 and keep the remainders**: $13 \\to 6$ r$1$; $6 \\to 3$ r$0$; $3 \\to 1$ r$1$; $1 \\to 0$ r$1$. Reading remainders bottom-up gives $1101_2$.' },
                { type: 'callout', kind: 'key', text: 'Eight bits make a **byte** (values $0$–$255$); $2^{10} = 1024$ bytes make a kilobyte, and so on up to terabytes. Memory sizes are powers of two because addresses are binary.' },
                { type: 'callout', kind: 'tip', text: 'Checking parity is instant in binary: a number is even exactly when its last bit is 0.' }
              ],
              skill: { id: 'how-computers-count', name: 'Binary conversion', generator: 'binaryConvert' }
            },
            {
              id: 'arrays-and-linked-lists',
              title: 'Arrays and linked lists',
              minutes: 7,
              summary: 'Contiguous memory versus chained nodes — the trade-off at the heart of data structures.',
              tags: ['arrays', 'linked lists', 'data structures'],
              blocks: [
                { type: 'p', text: 'An **array** stores items in one contiguous block of memory. Reaching element #1000 takes the same time as #1 — the address is just `start + index × size`. Reading and writing by index are both $O(1)$.' },
                { type: 'callout', kind: 'key', text: 'The array\'s weakness is **insertion in the middle**: to insert at position 3 of a 1,000,000-item array, nearly a million elements must shift right — $O(n)$. Appending is fast only because arrays keep spare capacity.' },
                { type: 'p', text: 'A **linked list** stores items as separate nodes scattered in memory; each node holds a value plus a pointer to the next. You can insert or delete in the middle by rewiring two pointers — $O(1)$ once you\'re there — but reaching element #1000 means following 999 pointers: $O(n)$ lookup.' },
                { type: 'example', title: 'The trade-off in one line', text: 'Need random access → array. Need constant middle insertions → linked list. "Fast read" and "fast insert" pull in opposite directions.' },
                { type: 'callout', kind: 'tip', text: 'Arrays also win on **cache**: contiguous memory means one fetch grabs several elements. Linked list nodes are scattered, so real-world list operations are often slower than Big-O suggests.' }
              ],
              skill: {
                id: 'arrays-and-linked-lists', name: 'Arrays vs. linked lists',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'Accessing the 500th element of an array of 10,000 items takes:',
                    choices: [
                      { id: 'a', text: 'Constant time — $O(1)$' },
                      { id: 'b', text: 'Linear time — $O(n)$' },
                      { id: 'c', text: 'Logarithmic time — $O(\\log n)$' },
                      { id: 'd', text: '500 steps' }
                    ],
                    answer: 'a',
                    hint: 'The address is computed, not searched.',
                    steps: ['Arrays compute the element\'s address directly: `start + 499 × size`. No traversal is needed, regardless of array size.'],
                    answerText: 'O(1)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Inserting an element at the front of a 1,000,000-item array costs about:',
                    choices: [
                      { id: 'a', text: '$O(1)$ — it is just one insert' },
                      { id: 'b', text: '$O(n)$ — every element must shift one slot' },
                      { id: 'c', text: '$O(\\log n)$' },
                      { id: 'd', text: 'Nothing — arrays grow instantly' }
                    ],
                    answer: 'b',
                    hint: 'What happens to the existing elements?',
                    steps: ['Making room at index 0 forces every existing element to move right one position — a million copies. Linked lists do this in O(1) by rewiring a pointer.'],
                    answerText: 'O(n)'
                  },
                  {
                    type: 'choice',
                    prompt: 'The main advantage of a linked list over an array is:',
                    choices: [
                      { id: 'a', text: 'Faster random access' },
                      { id: 'b', text: 'Uses less memory' },
                      { id: 'c', text: 'Constant-time insertion/deletion when you have the node' },
                      { id: 'd', text: 'Better cache performance' }
                    ],
                    answer: 'c',
                    hint: 'No shifting required — just rewire.',
                    steps: ['Inserting into a linked list means updating two pointers — O(1). Arrays win on access speed, memory, and cache; lists win on flexible insertion.'],
                    answerText: 'O(1) insertion/deletion'
                  },
                  {
                    type: 'choice',
                    prompt: 'Finding a value inside an unsorted linked list of n nodes requires:',
                    choices: [
                      { id: 'a', text: '$O(1)$' },
                      { id: 'b', text: '$O(\\log n)$' },
                      { id: 'c', text: '$O(n)$ — walk the chain' },
                      { id: 'd', text: '$O(n^2)$' }
                    ],
                    answer: 'c',
                    hint: 'There is no index — the only path is pointer to pointer.',
                    steps: ['Linked lists have no random access: you must follow next-pointers from the head, possibly visiting every node.'],
                    answerText: 'O(n)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Each node in a linked list typically stores:',
                    choices: [
                      { id: 'a', text: 'Only a value' },
                      { id: 'b', text: 'A value plus a pointer to the next node' },
                      { id: 'c', text: 'A value plus its index' },
                      { id: 'd', text: 'A hash of the value' }
                    ],
                    answer: 'b',
                    hint: 'What replaces the array\'s contiguous layout?',
                    steps: ['A node = data + `next` pointer (doubly linked lists add `prev`). The pointers are the "glue" that replaces adjacency in memory.'],
                    answerText: 'Value + next pointer'
                  },
                  {
                    type: 'choice',
                    prompt: 'Appending to a dynamic array is "amortized O(1)" because:',
                    choices: [
                      { id: 'a', text: 'It is literally always instant' },
                      { id: 'b', text: 'Occasional doubling-resize copies everything, but spread over many appends the average is constant' },
                      { id: 'c', text: 'The OS allocates infinite space' },
                      { id: 'd', text: 'Elements are never copied' }
                    ],
                    answer: 'b',
                    hint: 'What happens when the array fills?',
                    steps: ['When capacity is exhausted the array allocates roughly double the space and copies all elements — an O(n) burst, rare enough that n appends cost ~2n copies total: O(1) each on average.'],
                    answerText: 'Rare resizes amortize to O(1)'
                  }
                ]
              }
            },
            {
              id: 'stacks-and-queues',
              title: 'Stacks and queues',
              minutes: 6,
              summary: 'Two ordering rules — last-in-first-out and first-in-first-out — that power undo, BFS, and everything in between.',
              tags: ['stacks', 'queues', 'data structures'],
              blocks: [
                { type: 'p', text: 'A **stack** is LIFO — *last in, first out* — like a pile of plates: `push` adds on top, `pop` removes from the top. A **queue** is FIFO — *first in, first out* — like a checkout line: `enqueue` adds at the back, `dequeue` removes from the front.' },
                { type: 'callout', kind: 'key', text: 'Your browser\'s back button is a stack: every page you visit is pushed; Back pops the most recent one. Undo in any editor works the same way — reverse order matters.' },
                { type: 'p', text: 'Stacks also run every function call you\'ve ever made: calling `a()` which calls `b()` pushes `a`\'s state, runs `b`, then pops back — the **call stack**. Recursive functions are stacks all the way down, which is why infinite recursion causes a **stack overflow**.' },
                { type: 'example', title: 'Queues in practice', text: 'Print queues, the line of tasks a web server processes, and breadth-first search all use FIFO order — whoever arrived first gets served first, which is the natural notion of "fair."' },
                { type: 'callout', kind: 'tip', text: 'DFS (depth-first search) uses a stack — plunge deep, backtrack. BFS uses a queue — explore every neighbor before going deeper. Same graph, two orders, two algorithms.' }
              ],
              skill: {
                id: 'stacks-and-queues', name: 'Stacks and queues',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'You push 1, 2, 3 onto a stack (in that order), then pop twice. What do you get, and what remains?',
                    choices: [
                      { id: 'a', text: 'Pop 1 then 2; stack holds [3]' },
                      { id: 'b', text: 'Pop 3 then 2; stack holds [1]' },
                      { id: 'c', text: 'Pop 3 then 3; stack is empty' },
                      { id: 'd', text: 'Pop 1 then 1; stack holds [2, 3]' }
                    ],
                    answer: 'b',
                    hint: 'LIFO: the last thing pushed comes off first.',
                    steps: ['Pushes leave [1,2,3] with 3 on top. First pop → 3, second → 2, leaving [1].'],
                    answerText: '3, then 2; [1] remains'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which everyday structure is a queue (FIFO)?',
                    choices: [
                      { id: 'a', text: 'A stack of books' },
                      { id: 'b', text: 'A line at a coffee shop' },
                      { id: 'c', text: 'A browser\'s Back button' },
                      { id: 'd', text: 'An undo history' }
                    ],
                    answer: 'b',
                    hint: 'Who is served next — the most recent arrival or the earliest?',
                    steps: ['A coffee line serves the earliest arrival first — FIFO. Stacks (books, back button, undo) reverse order — LIFO.'],
                    answerText: 'A coffee-shop line'
                  },
                  {
                    type: 'choice',
                    prompt: 'A "stack overflow" error means:',
                    choices: [
                      { id: 'a', text: 'A queue ran out of memory' },
                      { id: 'b', text: 'Too many nested function calls filled the call stack — usually infinite recursion' },
                      { id: 'c', text: 'An array exceeded its capacity' },
                      { id: 'd', text: 'A hard disk filled up' }
                    ],
                    answer: 'b',
                    hint: 'Every call pushes a frame onto the call stack.',
                    steps: ['Each function call pushes a frame; when it returns the frame pops. Recursion without a working base case pushes frames forever → the finite call stack overflows.'],
                    answerText: 'Call stack exhausted (recursion)'
                  },
                  {
                    type: 'choice',
                    prompt: 'Breadth-first search (BFS) explores a graph using which structure?',
                    choices: [
                      { id: 'a', text: 'A stack' },
                      { id: 'b', text: 'A queue' },
                      { id: 'c', text: 'A hash table' },
                      { id: 'd', text: 'An array' }
                    ],
                    answer: 'b',
                    hint: 'BFS visits every neighbor before going deeper — which order does that need?',
                    steps: ['BFS processes nodes in arrival order — dequeue the front, enqueue its neighbors. DFS instead uses a stack to dive deep first.'],
                    answerText: 'A queue'
                  },
                  {
                    type: 'choice',
                    prompt: 'Checking whether every `(` has a matching `)` is a classic job for:',
                    choices: [
                      { id: 'a', text: 'A queue' },
                      { id: 'b', text: 'A stack — push opens, pop on closes' },
                      { id: 'c', text: 'A hash table' },
                      { id: 'd', text: 'A linked list used linearly' }
                    ],
                    answer: 'b',
                    hint: 'The most recent open paren must close first.',
                    steps: ['Nesting is inherently LIFO: `)` matches the *most recent* unmatched `(`. Push on open, pop on close; a pop on an empty stack or leftover opens means the string is unbalanced.'],
                    answerText: 'A stack'
                  },
                  {
                    type: 'choice',
                    prompt: 'A printer serves jobs in submission order. The right structure is:',
                    choices: [
                      { id: 'a', text: 'A stack' },
                      { id: 'b', text: 'A queue' },
                      { id: 'c', text: 'A binary tree' },
                      { id: 'd', text: 'A hash set' }
                    ],
                    answer: 'b',
                    hint: 'First submitted = first printed.',
                    steps: ['FIFO order = queue: enqueue on submit, dequeue to print. A stack would print the newest job first and starve old ones.'],
                    answerText: 'A queue'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'nonlinear-structures',
          title: 'Maps, trees, and graphs',
          lessons: [
            {
              id: 'hash-tables',
              title: 'Hash tables: O(1) lookup',
              minutes: 7,
              summary: 'The structure behind every dictionary, cache, and set — constant-time lookups by scattering keys.',
              tags: ['hash tables', 'dictionaries', 'data structures'],
              blocks: [
                { type: 'p', text: 'A **hash table** stores key-value pairs by running the key through a **hash function** — a deterministic scrambler that turns `' + '"alice"' + '` into a number — and using that number as an index into an array. Result: `table[key]` is nearly always $O(1)$, because you jump straight to the slot instead of scanning.' },
                { type: 'callout', kind: 'key', text: 'Two different keys can hash to the same slot — a **collision**. Two common fixes: *chaining* (each slot holds a small list) and *open addressing* (probe the next empty slot). A good hash function keeps collisions rare.' },
                { type: 'example', title: 'Why it matters', text: 'Checking "is this email already registered?" against a million users: a list scan is $O(n)$ — a million comparisons. A hash table answers in one jump, roughly a million times faster.' },
                { type: 'p', text: 'The $O(1)$ is amortized — when the table fills past its load factor, it **rehashes**: allocate a bigger array and reinsert every key. Rare but expensive, so the average stays constant.' },
                { type: 'callout', kind: 'warning', text: 'Hash tables give up ordering entirely — there is no "next" key. If you need sorted iteration or range queries ("all users aged 20–30"), use a sorted structure like a tree instead.' }
              ],
              skill: {
                id: 'hash-tables', name: 'Hash tables',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'A hash table looks up a key by:',
                    choices: [
                      { id: 'a', text: 'Scanning every slot until the key is found' },
                      { id: 'b', text: 'Hashing the key to an array index and jumping straight there' },
                      { id: 'c', text: 'Binary search over sorted keys' },
                      { id: 'd', text: 'Following pointers from a head node' }
                    ],
                    answer: 'b',
                    hint: 'The hash function turns the key into an address.',
                    steps: ['$h(\\text{key})$ computes a slot index directly — the lookup is one hash + one array access = O(1) typical.'],
                    answerText: 'Hash → index → jump'
                  },
                  {
                    type: 'choice',
                    prompt: 'Two different keys hash to the same slot. This is called a ____ and one standard fix is ____.',
                    choices: [
                      { id: 'a', text: 'collision; chaining (store a small list per slot)' },
                      { id: 'b', text: 'rehash; sorting the table' },
                      { id: 'c', text: 'deadlock; deleting the oldest key' },
                      { id: 'd', text: 'cache miss; retrying' }
                    ],
                    answer: 'a',
                    hint: 'The slot can hold more than one entry.',
                    steps: ['Collisions are inevitable (pigeonhole principle). Chaining gives each slot a mini-list; open addressing probes onward for an empty slot.'],
                    answerText: 'Collision; chaining'
                  },
                  {
                    type: 'choice',
                    prompt: 'Hash table lookup is "amortized O(1)" because:',
                    choices: [
                      { id: 'a', text: 'Hardware is fast' },
                      { id: 'b', text: 'Occasional rehashing — resizing and reinserting everything — is rare enough that the average stays constant' },
                      { id: 'c', text: 'Collisions never happen' },
                      { id: 'd', text: 'Keys are always small' }
                    ],
                    answer: 'b',
                    hint: 'What happens when the table gets full?',
                    steps: ['When load factor crosses a threshold the table doubles in size and rehashes all keys — an O(n) burst. Spread across many cheap inserts, the average per operation stays O(1).'],
                    answerText: 'Rare O(n) rehashes amortize away'
                  },
                  {
                    type: 'choice',
                    prompt: 'A hash table is a poor choice when you need to:',
                    choices: [
                      { id: 'a', text: 'Check membership fast' },
                      { id: 'b', text: 'Iterate keys in sorted order or answer range queries' },
                      { id: 'c', text: 'Map names to values' },
                      { id: 'd', text: 'Count occurrences' }
                    ],
                    answer: 'b',
                    hint: 'What does hashing destroy?',
                    steps: ['Hashing deliberately scrambles key order, so sorted traversal and "all keys between X and Y" are impossible — use a tree/sorted structure instead.'],
                    answerText: 'Sorted/range access'
                  },
                  {
                    type: 'choice',
                    prompt: 'A good hash function should be:',
                    choices: [
                      { id: 'a', text: 'Random — different result every call' },
                      { id: 'b', text: 'Deterministic — the same key always hashes to the same value — and spread keys evenly' },
                      { id: 'c', text: 'Slow, to discourage lookups' },
                      { id: 'd', text: 'Secret, like an encryption key' }
                    ],
                    answer: 'b',
                    hint: 'You must find the key again later in the same slot.',
                    steps: ['Determinism makes lookup possible: hash the key again to find where it was stored. Even distribution minimizes collisions. (Slow + secret describes a *password* hash like bcrypt — different goal.)'],
                    answerText: 'Deterministic + uniform'
                  },
                  {
                    type: 'choice',
                    prompt: 'Checking whether a username is taken in a system with millions of users is fastest with:',
                    choices: [
                      { id: 'a', text: 'An array scan' },
                      { id: 'b', text: 'A linked list' },
                      { id: 'c', text: 'A hash set containing all registered names' },
                      { id: 'd', text: 'A stack' }
                    ],
                    answer: 'c',
                    hint: 'Membership check → one jump, not a scan.',
                    steps: ['A hash set answers "is X present" in ~O(1): hash the name, check the slot. Array/list scans are O(n) — millions of comparisons per signup.'],
                    answerText: 'A hash set'
                  }
                ]
              }
            },
            {
              id: 'trees-and-bst',
              title: 'Trees and binary search',
              minutes: 7,
              summary: 'Hierarchies in memory — and how ordering a tree turns search into logarithmic bisection.',
              tags: ['trees', 'BST', 'binary search'],
              blocks: [
                { type: 'p', text: 'A **tree** is nodes connected by parent-child links, with one root and no cycles. File systems, HTML documents, and org charts are all trees — anything hierarchical. In a **binary tree** each node has at most two children.' },
                { type: 'callout', kind: 'key', text: 'A **binary search tree (BST)** keeps a rule at every node: everything in the left subtree is smaller, everything right is larger. Search = repeated halving, like guessing a number with "higher/lower" hints: $O(\\log n)$.' },
                { type: 'example', title: 'Search for 14', text: 'Root is 10 → 14 > 10, go right → hit 20 → 14 < 20, go left → find 14. Three comparisons instead of scanning all values.' },
                { type: 'p', text: 'The catch: a BST is only $\\log n$ when it is **balanced**. Inserting already-sorted data grows a single chain — $1 \\to 2 \\to 3 \\to 4 \\ldots$ — degrading to $O(n)$, a disguised linked list. Real implementations (AVL, red-black) add rotations that keep the tree balanced automatically.' },
                { type: 'callout', kind: 'tip', text: 'BSTs give you sorted order *and* fast lookup: an in-order traversal (left, node, right) visits values in ascending order — something a hash table cannot do.' }
              ],
              skill: {
                id: 'trees-and-bst', name: 'Trees and BSTs',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'In a BST, all values in a node\'s LEFT subtree are:',
                    choices: [
                      { id: 'a', text: 'Larger than the node' },
                      { id: 'b', text: 'Smaller than the node' },
                      { id: 'c', text: 'Randomly placed' },
                      { id: 'd', text: 'Always leaf nodes' }
                    ],
                    answer: 'b',
                    hint: 'The BST rule: left < node < right.',
                    steps: ['The defining BST invariant: left subtree < node < right subtree. It is what lets search discard half the tree at every step.'],
                    answerText: 'Smaller'
                  },
                  {
                    type: 'choice',
                    prompt: 'Searching a balanced BST of $1{,}000{,}000$ elements takes about how many comparisons?',
                    choices: [
                      { id: 'a', text: 'About $20$' },
                      { id: 'b', text: 'About $500{,}000$' },
                      { id: 'c', text: 'About $1{,}000$' },
                      { id: 'd', text: 'Exactly $1{,}000{,}000$' }
                    ],
                    answer: 'a',
                    hint: '$\\log_2$ of a million…',
                    steps: ['Each step halves the candidates: $2^{20} \\approx 1{,}048{,}576$, so $\\log_2(10^6) \\approx 20$ comparisons. That is the power of $O(\\log n)$.'],
                    answerText: '≈ 20'
                  },
                  {
                    type: 'choice',
                    prompt: 'Inserting values 1, 2, 3, 4, 5 (in that order) into an empty BST produces:',
                    choices: [
                      { id: 'a', text: 'A balanced tree of height 3' },
                      { id: 'b', text: 'A single right-leaning chain — every node has only a right child' },
                      { id: 'c', text: 'A tree with 5 as the root' },
                      { id: 'd', text: 'A heap' }
                    ],
                    answer: 'b',
                    hint: 'Each new value is bigger than every existing node — where does it go?',
                    steps: ['Every insert walks right and attaches at the bottom-right: $1 \\to 2 \\to 3 \\to 4 \\to 5$ as a chain. Height 5, search O(n) — this is why self-balancing trees exist.'],
                    answerText: 'A degenerate chain'
                  },
                  {
                    type: 'choice',
                    prompt: 'An in-order traversal of a BST (left, node, right) visits values:',
                    choices: [
                      { id: 'a', text: 'In insertion order' },
                      { id: 'b', text: 'In ascending sorted order' },
                      { id: 'c', text: 'In random order' },
                      { id: 'd', text: 'Largest first' }
                    ],
                    answer: 'b',
                    hint: 'Left is smaller, right is bigger — what order is left→node→right?',
                    steps: ['Visiting smaller (left), then the node, then larger (right) — recursively — yields values in ascending order. BSTs are sorted data structures, unlike hash tables.'],
                    answerText: 'Sorted ascending'
                  },
                  {
                    type: 'choice',
                    prompt: 'In a BST with root 15, where does the value 8 go?',
                    choices: [
                      { id: 'a', text: 'Somewhere in the left subtree' },
                      { id: 'b', text: 'Somewhere in the right subtree' },
                      { id: 'c', text: 'As the new root' },
                      { id: 'd', text: 'It cannot be inserted — duplicates only' }
                    ],
                    answer: 'a',
                    hint: '8 < 15.',
                    steps: ['The BST rule sends smaller values left: 8 belongs somewhere in the left subtree of 15 (exact position depends on nodes below).'],
                    answerText: 'Left subtree'
                  },
                  {
                    type: 'choice',
                    prompt: 'A tree where every parent is smaller than its children, so the minimum sits at the root, is a:',
                    choices: [
                      { id: 'a', text: 'Binary search tree' },
                      { id: 'b', text: 'Min-heap — the structure behind priority queues' },
                      { id: 'c', text: 'A linked list' },
                      { id: 'd', text: 'A graph' }
                    ],
                    answer: 'b',
                    hint: 'That is not the BST rule — the root is just the smallest.',
                    steps: ['A min-heap only guarantees parent < children, so the minimum is always at the root — perfect for "give me the next smallest" priority queues, which is how schedulers and Dijkstra\'s algorithm pick what to do next.'],
                    answerText: 'Min-heap'
                  }
                ]
              }
            },
            {
              id: 'graphs-basics',
              title: 'Graphs: the most general structure',
              minutes: 7,
              summary: 'Nodes plus edges model networks — friends, roads, the web itself.',
              tags: ['graphs', 'networks', 'data structures'],
              blocks: [
                { type: 'p', text: 'A **graph** is a set of **vertices** (nodes) connected by **edges** — nothing more. That minimalism is its power: social networks (people + friendships), maps (intersections + roads), the internet (routers + links), and recommendation engines (you + everything you liked) are all graphs.' },
                { type: 'callout', kind: 'key', text: 'Edges can be **undirected** (friendship goes both ways) or **directed** (a "follows" on social media, a one-way street), and **weighted** (each road has a distance). The flavor of edge decides which questions you can ask.' },
                { type: 'p', text: 'The two fundamental explorations: **BFS** visits nodes in expanding rings — it finds the *shortest path in number of hops* (the "degrees of separation" question). **DFS** dives down one path before backtracking — used for cycle detection, maze solving, and topological ordering.' },
                { type: 'example', title: 'Shortest path', text: 'In a friend network, "how are Alice and Carol connected?" BFS from Alice explores her friends, then friends-of-friends, ring by ring — the first time it reaches Carol, it has found the shortest connection.' },
                { type: 'callout', kind: 'tip', text: 'Most graph algorithms on a weighted graph — Dijkstra\'s shortest path, minimum spanning trees — are what run your map app\'s directions and network routing.' }
              ],
              skill: {
                id: 'graphs-basics', name: 'Graph fundamentals',
                bank: [
                  {
                    type: 'choice',
                    prompt: 'In a social network, "find the shortest chain of connections between two people" calls for:',
                    choices: [
                      { id: 'a', text: 'Depth-first search' },
                      { id: 'b', text: 'Breadth-first search' },
                      { id: 'c', text: 'Hashing' },
                      { id: 'd', text: 'Sorting' }
                    ],
                    answer: 'b',
                    hint: 'You want the fewest hops — explore ring by ring.',
                    steps: ['BFS expands level by level: depth 1 = direct friends, depth 2 = friends of friends. Reaching the target at depth d proves no shorter connection exists.'],
                    answerText: 'BFS'
                  },
                  {
                    type: 'choice',
                    prompt: 'A "directed" edge means:',
                    choices: [
                      { id: 'a', text: 'The edge has a distance label' },
                      { id: 'b', text: 'The connection goes one way — A→B does not imply B→A' },
                      { id: 'c', text: 'The edge forms a cycle' },
                      { id: 'd', text: 'The graph must be drawn left to right' }
                    ],
                    answer: 'b',
                    hint: 'Think "follows" on social media vs. "friends".',
                    steps: ['Directed edges are one-way: Alice can follow Bob without Bob following back. Undirected edges (like Facebook friendship) are mutual by definition.'],
                    answerText: 'One-way connection'
                  },
                  {
                    type: 'choice',
                    prompt: 'Which is NOT naturally modeled as a graph?',
                    choices: [
                      { id: 'a', text: 'A city\'s road network' },
                      { id: 'b', text: 'A sorted list of exam scores' },
                      { id: 'c', text: 'The web (pages + links)' },
                      { id: 'd', text: 'Airline routes' }
                    ],
                    answer: 'b',
                    hint: 'Graphs model *relationships* — which one has no relationships?',
                    steps: ['A sorted list is linear data, not a network of connections. Roads, links, and routes are all "vertices connected by edges."'],
                    answerText: 'A sorted score list'
                  },
                  {
                    type: 'choice',
                    prompt: 'Your map app finding the fastest route home is, at heart, a problem of:',
                    choices: [
                      { id: 'a', text: 'Searching a weighted graph — intersections as vertices, roads as edges with travel times' },
                      { id: 'b', text: 'Sorting city names' },
                      { id: 'c', text: 'Hash table lookup' },
                      { id: 'd', text: 'Balancing a BST' }
                    ],
                    answer: 'a',
                    hint: 'Each road has a cost (distance/time).',
                    steps: ['Weighted-graph shortest path — Dijkstra\'s algorithm and relatives — is exactly what navigation runs on: minimize total edge weight between two vertices.'],
                    answerText: 'Weighted shortest path'
                  },
                  {
                    type: 'choice',
                    prompt: 'An undirected graph has 4 vertices and every vertex connects to every other. How many edges does it have?',
                    choices: [
                      { id: 'a', text: '4' },
                      { id: 'b', text: '6' },
                      { id: 'c', text: '8' },
                      { id: 'd', text: '12' }
                    ],
                    answer: 'b',
                    hint: 'Each edge needs 2 of the 4 vertices: $\\binom{4}{2}$.',
                    steps: ['Every pair of vertices forms one edge: $\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$ edges (AB, AC, AD, BC, BD, CD).'],
                    answerText: '6'
                  },
                  {
                    type: 'choice',
                    prompt: 'Detecting whether a task graph has a circular dependency (A needs B, B needs C, C needs A) is a job for:',
                    choices: [
                      { id: 'a', text: 'BFS counting degrees' },
                      { id: 'b', text: 'DFS tracking the current path — reaching a node already on your path means a cycle' },
                      { id: 'c', text: 'Hashing node names' },
                      { id: 'd', text: 'Sorting edges' }
                    ],
                    answer: 'b',
                    hint: 'A cycle means you can get back to where you started.',
                    steps: ['DFS marks nodes on the current exploration path; bumping into a marked-but-unfinished node reveals a back edge = a cycle. Build tools and package managers run exactly this check.'],
                    answerText: 'DFS cycle detection'
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
