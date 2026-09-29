import { icon } from './icons.js';
import { esc } from './ui.js';
import { state } from './api.js';

export function pageLanding(catalog) {
  const subjectCards = (catalog.subjects || []).map((s) => `
    <a class="card card-hover card-pad subject-card card-link" href="/subjects/${s.id}" data-nav>
      <span class="subj-icon" style="background:${s.color}1a;color:${s.color}">${icon(s.icon, 22)}</span>
      <h3 class="card-title" style="margin-bottom:2px">${esc(s.name)}</h3>
      <div class="muted small">${esc(s.tagline)}</div>
      <div class="course-count mt-1">${s.courses.length} course${s.courses.length === 1 ? '' : 's'} · ${s.courses.reduce((n, c) => n + (c.lessons || 0), 0)} lessons</div>
    </a>`).join('');

  return `
  <section class="hero">
    <div class="hero-bg">
      <div class="blob" style="width:480px;height:480px;background:#4f46e5;top:-140px;right:-80px"></div>
      <div class="blob" style="width:380px;height:380px;background:#f59e0b;bottom:-160px;left:-100px;opacity:.35"></div>
    </div>
    <div class="wrap hero-grid">
      <div>
        <span class="hero-eyebrow">${icon('spark', 13)} Free. Forever. For everyone.</span>
        <h1>Learn it. <span class="gradient-word">Solve it.</span> Master it.</h1>
        <p class="lede">Lumina pairs a full course library with unlimited practice and step-by-step homework help — so "I'm stuck" becomes "I get it" in minutes.</p>
        <div class="hero-actions">
          <a class="btn btn-amber btn-lg" href="/signup" data-nav>Start learning — it's free ${icon('arrowR', 17)}</a>
          <a class="btn btn-outline btn-lg" href="/help" data-nav>Browse solved problems</a>
        </div>
        <div class="hero-proof">
          <span><b>${catalog.totals?.courses || '—'}</b> courses</span>
          <span><b>${catalog.totals?.lessons || '—'}</b> lessons</span>
          <span><b>Unlimited</b> practice questions</span>
          <span><b>Step-by-step</b> expert answers</span>
        </div>
      </div>
      <div>
        <div class="mock-window">
          <div class="mock-bar"><i></i><i></i><i></i></div>
          <div class="mock-body">
            <div class="small muted mb-1" style="text-transform:uppercase;letter-spacing:.07em;font-weight:700">Practice · Algebra</div>
            <div style="font-weight:650;font-size:1.05rem;margin-bottom:14px">Solve for x: 3x + 7 = 22</div>
            <div class="choice-list">
              <div class="choice"><span class="choice-letter">A</span> x = 4</div>
              <div class="choice correct"><span class="choice-letter">B</span> x = 5</div>
              <div class="choice dim"><span class="choice-letter">C</span> x = 7</div>
              <div class="choice dim"><span class="choice-letter">D</span> x = 15</div>
            </div>
            <div class="feedback ok mt-2">${icon('check', 16)} Correct! +10 XP &nbsp;·&nbsp; <u style="font-weight:600">Show steps</u></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:20px">
    <div class="wrap">
      <div class="page-head" style="padding-top:0"><div class="eyebrow">Three ways Lumina works for you</div><h2>Everything you need to actually understand</h2></div>
      <div class="pillar-grid">
        <div class="pillar">
          <div class="pillar-icon" style="background:var(--primary-soft);color:var(--primary-ink)">${icon('book', 24)}</div>
          <h3>Learn</h3>
          <p>Short, readable lessons with worked examples — built like the best teacher you ever had. No walls of video.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon" style="background:var(--amber-soft);color:var(--amber-deep)">${icon('target', 24)}</div>
          <h3>Practice</h3>
          <p>Adaptive question generators give you infinite reps. Master a skill by stringing correct answers together — we track every step.</p>
        </div>
        <div class="pillar">
          <div class="pillar-icon" style="background:var(--green-soft);color:var(--green)">${icon('chat', 24)}</div>
          <h3>Solve</h3>
          <p>Stuck on homework? Search thousands of step-by-step solutions, or ask the community. Coach helps anytime.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background:var(--surface);border-block:1px solid var(--border)">
    <div class="wrap">
      <div class="page-head" style="padding-top:0"><div class="eyebrow">The library</div><h2>Pick a subject. Go deep.</h2></div>
      <div class="grid grid-3">${subjectCards}</div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="quote-strip">
        <div class="card quote-card">"The step-by-step breakdowns are what Chegg charges for — except I actually learn the method, not just the answer."<div class="who">— Priya, AP Calculus</div></div>
        <div class="card quote-card">"Went from dreading algebra homework to a 23-day streak. The mastery system makes progress visible."<div class="who">— Marcus, 9th grade</div></div>
        <div class="card quote-card">"I recommend Lumina to my students because it explains <em>why</em>, not just <em>what</em>."<div class="who">— Ms. Delgado, physics teacher</div></div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:10px">
    <div class="wrap">
      <div class="cta-band">
        <h2>Your homework doesn't stand a chance.</h2>
        <p>Join thousands of students learning for free.</p>
        <div class="mt-3"><a class="btn btn-amber btn-lg" href="/signup" data-nav>Create a free account</a></div>
      </div>
    </div>
  </section>`;
}

export function pageAbout() {
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">About</div><h1>Learning that treats you like a person</h1></div>
    <div class="prose">
      <p>Lumina started as a simple idea: students deserve tools that make them <em>smarter</em>, not just tools that hand over answers.</p>
      <p>So we combined two worlds. From the best learning platforms, we took structured courses, bite-sized lessons, and mastery-based practice. From homework-help sites, we took the thing students actually need at 11pm: a clear, worked, step-by-step solution to the exact problem they're stuck on.</p>
      <p>Every lesson on Lumina is written to teach — short on lecture, long on worked examples and "watch out for this" moments. Every practice skill gives you unlimited generated questions with instant, explained feedback. And our homework-help board pairs real questions with expert-verified step-by-step answers.</p>
      <h2>Our promise</h2>
      <p>Lumina is free for learners. We're building the study tool we wish existed: honest about what it does, rigorous about being correct, and designed to make "I don't get it" a temporary state.</p>
      <p class="mt-3"><a class="btn btn-primary" href="/signup" data-nav>Join free</a> <a class="btn btn-outline" href="/subjects" data-nav style="margin-left:8px">Browse the library</a></p>
    </div>
  </div>`;
}

export function pageFaq() {
  const faqs = [
    ['Is Lumina really free?', 'Yes. Courses, practice, and homework help are free for learners. We may add optional premium features later, but the core library stays free.'],
    ['How does mastery work?', 'Each skill tracks your correct answers. Get 1 in a row for Familiar, 3 for Proficient, 5 for Mastered. Wrong answers reset your streak — but never your total progress.'],
    ['Can I use Lumina without an account?', 'Yes — browse and practice as a guest and progress is kept on your device. Create an account to sync progress across devices and post on the help board.'],
    ['How is this different from Chegg?', 'Homework help is one piece — not the whole product. Lumina teaches the underlying skill too: every solved problem links back to lessons and practice so the answer sticks.'],
    ['What is Coach?', 'Coach is a built-in study assistant that solves equations step-by-step, explains topics from our lesson library, finds you practice, and builds a study plan from your progress.'],
    ['Who writes the content?', 'Lessons and expert answers are authored and reviewed for accuracy. Community answers on the help board are marked separately from expert-verified ones.']
  ];
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">FAQ</div><h1>Questions? Good — that's the whole point.</h1></div>
    ${faqs.map(([q, a]) => `<div class="card card-pad mb-2"><h3 style="font-size:1.02rem;margin-bottom:8px">${esc(q)}</h3><p class="muted" style="margin:0">${esc(a)}</p></div>`).join('')}
  </div>`;
}

export function pageTerms() {
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">Legal</div><h1>Terms of Service</h1><p class="sub">Last updated ${new Date().toLocaleDateString()}</p></div>
    <div class="prose">
      <h2>1. What Lumina is</h2>
      <p>Lumina is an educational platform offering lessons, practice exercises, a homework-help community, and a study assistant. Content is provided for learning purposes.</p>
      <h2>2. Your account</h2>
      <p>You are responsible for your account credentials and activity. You must be at least 13 years old (or have parental consent) to create an account.</p>
      <h2>3. Acceptable use</h2>
      <p>Do not post unlawful, harmful, or harassing content; do not attempt to cheat academic-integrity policies of your institution; do not scrape or overload the service. Homework help is meant to teach methods — misuse for plagiarism is your responsibility.</p>
      <h2>4. Community content</h2>
      <p>You keep rights to what you post; by posting you grant Lumina a license to display and distribute it on the platform. We may remove content that violates these terms.</p>
      <h2>5. Accuracy</h2>
      <p>We work hard to be correct, but lessons and answers are provided "as is" — always verify critical work. Community answers are not guaranteed.</p>
      <h2>6. Liability</h2>
      <p>To the maximum extent permitted by law, Lumina is not liable for indirect or consequential damages arising from use of the service.</p>
    </div>
  </div>`;
}

export function pagePrivacy() {
  return `
  <div class="wrap-narrow page">
    <div class="page-head"><div class="eyebrow">Legal</div><h1>Privacy Policy</h1><p class="sub">Last updated ${new Date().toLocaleDateString()}</p></div>
    <div class="prose">
      <h2>What we collect</h2>
      <p>Account details (name, email, password — stored only as a hash), your learning activity (attempts, mastery, XP, streaks), and community content you post (questions, answers). Guest progress stays in your browser's local storage until you create an account.</p>
      <h2>How we use it</h2>
      <p>To run the product: track progress, compute streaks, power the dashboard, personalize Coach's study plan, and display your posts on the help board. We do not sell personal data and do not run third-party ad networks.</p>
      <h2>Cookies</h2>
      <p>We use a session cookie for sign-in and local storage for preferences (theme) and guest progress. No tracking cookies.</p>
      <h2>Retention & deletion</h2>
      <p>Your data lives in your account until you delete it. Contact support to export or delete your account data.</p>
      <h2>Security</h2>
      <p>Passwords are bcrypt-hashed; sessions are server-side. No system is perfectly secure — report issues to us and we'll respond promptly.</p>
    </div>
  </div>`;
}

export function pageNotFound() {
  return `
  <div class="wrap page">
    <div class="empty-state" style="padding-top:110px">
      <div class="empty-icon">${icon('compass', 52)}</div>
      <h2>This page doesn't exist</h2>
      <p>The link may be old, or the page moved. Let's get you back to learning.</p>
      <div class="mt-2"><a class="btn btn-primary" href="/" data-nav>Go home</a> <a class="btn btn-outline" href="/subjects" data-nav>Browse subjects</a></div>
    </div>
  </div>`;
}
