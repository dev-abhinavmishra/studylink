import asyncio

REPO = "/home/ubuntu/repos/studylink"

META = {
    "name": "lumina-content-fanout",
    "description": "Author the remaining curriculum subject files for the Lumina learning platform, each into its own non-overlapping file",
    "soft_time_limit_minutes": 40,
    "phases": [
        {"title": "author", "detail": "Each agent writes one content/<file>.js to the shared spec",
         "labels": ["math2", "science", "computing", "humanities", "economics", "english"]},
    ],
}

SCHEMA = {
    "type": "object",
    "properties": {
        "file": {"type": "string"},
        "lessons": {"type": "integer"},
        "courses": {"type": "integer"},
        "validated": {"type": "boolean"},
        "notes": {"type": "string"},
    },
    "required": ["file", "lessons", "courses", "validated", "notes"],
}

ASSIGNMENTS = {
    "math2": {
        "file": "math2.js",
        "subject": "Mathematics (part 2)",
        "note": "IMPORTANT: export subject id 'math', name 'Mathematics', icon 'sigma', color '#4f7cff' — the registry merges your courses into the existing math subject automatically.",
        "courses": "3 courses: 'geometry-essentials' (units: triangles & congruence; circles; coordinate geometry — lessons on angle sums, Pythagorean theorem, similar triangles, circle area/circumference, arc, slope, distance formula, midpoint), 'precalculus' (units: functions; exponential & logarithmic — lessons on function notation, domain/range, composition, inverse functions, exponential growth, logarithms intro, log laws), 'calculus-i' (units: limits; derivatives — lessons on intuitive limits, limit laws, continuity, derivative as slope, power rule, chain rule intro, applications of derivatives).",
        "skills": "Use generators where they fit (pythagorean, circleArea, triangleAngles, trigSolve, slopeFromPoints, functionEval, logarithmEval, derivativePower). For others write a bank of 6-10 questions.",
    },
    "science": {
        "file": "science.js",
        "subject": "Science",
        "icon": "flask", "color": "#2ea96b",
        "courses": "3 courses: 'physics-essentials' (units: motion & forces; energy — lessons on speed vs velocity, acceleration, Newton's laws, free fall, work & energy, momentum), 'chemistry-essentials' (units: atoms & matter; reactions — lessons on atomic structure, periodic table, chemical bonds, balancing equations, moles & molar mass, acids & bases), 'biology-essentials' (units: cells; genetics — lessons on cell structure, photosynthesis, cellular respiration, DNA & replication, heredity & Punnett squares, evolution by natural selection).",
        "skills": "Numeric lessons can use ohmsLaw, kinematics, density, percentYield generators. Conceptual lessons need bank pools of 6-10 choice questions with worked steps.",
    },
    "computing": {
        "file": "computing.js",
        "subject": "Computing",
        "icon": "chip", "color": "#8b5cf6",
        "courses": "3 courses: 'intro-to-programming' (units: fundamentals in JavaScript; data & logic — lessons on variables & types, operators, conditionals, loops, functions, arrays & objects), 'web-development' (units: HTML & CSS; JavaScript on the web — lessons on HTML structure, CSS selectors & box model, flexbox, DOM manipulation, events, fetch & APIs), 'computer-science-principles' (units: how computers think; data — lessons on binary & bits, algorithms & Big-O intro, sorting basics, how the internet works, encryption & security, databases & SQL basics).",
        "skills": "Mostly bank pools (conceptual + predict-the-output choice questions). Include code blocks in lessons (type 'code', lang 'js' or 'python').",
    },
    "humanities": {
        "file": "humanities.js",
        "subject": "Humanities",
        "icon": "globe", "color": "#e08544",
        "courses": "3 courses: 'world-history' (units: ancient civilizations; the modern world — lessons on Mesopotamia & Egypt, Ancient Greece, Rome's rise & fall, medieval world, Renaissance, Industrial Revolution, World Wars overview), 'us-history' (units: founding; the 20th century — lessons on colonies & revolution, the Constitution, Civil War & Reconstruction, industrialization, the Great Depression, Civil Rights Movement), 'civics-government' (units: foundations; branches & rights — lessons on why government, separation of powers, the Bill of Rights, how a bill becomes law, elections & voting, federalism).",
        "skills": "All bank pools (8-10 choice questions each). Steps should explain WHY the answer is right, not just state it.",
    },
    "economics": {
        "file": "economics.js",
        "subject": "Economics & Finance",
        "icon": "dollar", "color": "#14b8a6",
        "courses": "2 courses: 'microeconomics' (units: markets; decisions — lessons on supply & demand, elasticity, equilibrium & shifts, opportunity cost, marginal thinking, market failures), 'personal-finance' (units: money fundamentals; investing — lessons on budgeting, compound interest, credit & debt, savings vs investing, stocks & index funds, retirement basics).",
        "skills": "Use percentOf, ratioScale for numeric ones; otherwise bank pools. Personal finance lessons can use percentOf for interest.",
    },
    "english": {
        "file": "english.js",
        "subject": "English & Writing",
        "icon": "pen", "color": "#ec4899",
        "courses": "2 courses: 'grammar-essentials' (units: sentence mechanics; punctuation — lessons on parts of speech, subjects & predicates, common comma errors, semicolons & colons, pronoun agreement, active vs passive voice), 'academic-writing' (units: the essay; evidence & style — lessons on thesis statements, paragraph structure, integrating evidence & citations, argument vs summary, revision strategies, avoiding plagiarism).",
        "skills": "All bank pools (8-10 choice questions each — e.g. 'which sentence is punctuated correctly?' with 4 sentence options).",
    },
}

PROMPT_TMPL = """You are authoring curriculum content for Lumina, a Khan Academy x Chegg style learning platform. Work ONLY inside {repo}.

FIRST read these files carefully — they are the contract and the quality bar:
- {repo}/content/SPEC.md   (the full schema)
- {repo}/content/math.js   (the exemplar: Algebra Foundations — match this depth and voice)
- {repo}/content/generators.js  (available question generators you can reference by name)

YOUR ASSIGNMENT: write {repo}/content/{file}
Subject: {subject}
{extra}
Courses to author:
{courses}

Skills guidance:
{skills}

HARD REQUIREMENTS:
- Exactly ONE file: {repo}/content/{file} — do not touch any other file. Do not run git commands, do not modify shared files, do not start servers.
- 120-250 words of teaching prose per lesson PLUS worked examples — this is real instructional content, not filler. Accuracy matters: verify every fact, date, and formula.
- Every lesson needs exactly one skill (generator name or a bank of 6-10 questions). Every question needs a hint and worked 'steps'.
- All ids kebab-case and globally unique (lesson ids, skill ids, unit ids, course ids — do not reuse ids that appear in math.js).
- Escape backslashes in KaTeX strings (\\\\frac) and backticks inside template literals.

VALIDATE before finishing — from {repo} run:
  node --check content/{file}
  node scripts/validate-content.js {file}
It must pass with 0 errors (warnings about short banks are okay if you have >=6).

Report: file name, lesson count, course count, whether validation passed, brief notes."""

async def main():
    await register_workflow(META)

    async def author(key):
        a = ASSIGNMENTS[key]
        prompt = PROMPT_TMPL.format(
            repo=REPO, file=a["file"], subject=a["subject"],
            extra=a.get("note", f"icon: '{a.get('icon','book')}', color: '{a.get('color','#4f7cff')}'"),
            courses=a["courses"], skills=a["skills"])
        try:
            r = await agent(prompt, phase="author", schema=SCHEMA, label=key, vm_mode="shared")
            log(f"{key}: {r.get('lessons')} lessons, validated={r.get('validated')}")
            return r
        except Exception as e:
            log(f"{key}: FAILED {e}")
            return {"file": a["file"], "lessons": 0, "courses": 0, "validated": False, "notes": str(e)}

    # Shared-VM: agents write non-overlapping content files into my uncommitted
    # working tree — there is no pushed branch to hand off through.
    results = await parallel([lambda k=k: author(k) for k in ASSIGNMENTS])
    for k, r in zip(ASSIGNMENTS, results):
        log(f"done {k}: {r}")

asyncio.run(main())
