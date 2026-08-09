import { ROUTES } from "@/lib/constants";
import type {
  FaqItem,
  ProcessStep,
  ServiceItem,
  TerminalLine,
  ValueItem,
  WhyItem,
} from "@/types";

/**
 * Single source of truth for all site copy.
 * Section components are presentational and import from here — no
 * component should hardcode marketing copy.
 */

/** Per-page metadata used by each route's exported Metadata object. */
export const PAGE_META = {
  home: {
    title: "Ship fast. Don't ship bugs.",
    description:
      "Verico is a QA testing agency for teams shipping at AI speed. Manual QA, API testing, and developer-ready bug reports with fast turnaround.",
  },
  about: {
    title: "About",
    description:
      "Verico is an independent QA partner for teams shipping at AI speed. Meet the people and principles behind the testing.",
  },
  services: {
    title: "Services",
    description:
      "Manual QA testing, API testing, and bug reporting & retesting — scoped to your build and delivered as reports your developers can act on.",
  },
  contact: {
    title: "Contact",
    description:
      "Tell us what you're shipping and where you'd like more confidence. We'll reply with a scope and next steps, usually within one business day.",
  },
} as const;

export const HERO_CONTENT = {
  eyebrow: "QA for teams shipping at AI speed",
  heading: "Ship fast. Don't ship bugs.",
  subhead:
    "AI-assisted development lets your team ship features faster than ever — and faster than QA can keep up. Verico is the independent testing layer that catches what slips through, before your users do.",
  primaryCta: { label: "Get a scope call", href: ROUTES.contact },
  secondaryCta: { label: "See our services", href: ROUTES.services },
} as const;

/** Command shown at the top of the animated terminal panel. */
export const TERMINAL_COMMAND = "verico scan ./staging" as const;

export const TERMINAL_LINES: readonly TerminalLine[] = [
  { label: "auth / login flow", status: "passed" },
  { label: "checkout / payment", status: "passed" },
  { label: "search & filters", status: "passed" },
  { label: "empty cart edge case", status: "flagged" },
  { label: "password reset", status: "passed" },
] as const;

export const TERMINAL_SUMMARY = "4 passed · 1 flagged · retest scheduled" as const;

export const SERVICES_CONTENT = {
  eyebrow: "Services",
  heading: "Full-spectrum QA that fits how you already work",
  description:
    "From manual and API testing to automation, performance, and security — independent QA scoped to your build. No dashboards to babysit, no seats to manage, just thorough testing and reports your developers can act on.",
} as const;

/**
 * Header for the detailed services grid on the /services page — worded
 * differently from the PageHero above it so the two don't read as
 * duplicates.
 */
export const SERVICES_CONTENT_DETAILED = {
  eyebrow: "What we do",
  heading: "Six services, one goal: nothing broken ships",
  description:
    "Every service below is delivered hands-on and scoped to your product. Engage one, several, or all six — coverage grows with what you're shipping.",
} as const;

export const SERVICES: readonly ServiceItem[] = [
  {
    number: "01",
    title: "Manual QA Testing",
    description:
      "Real people exercising your app the way users actually do — across flows, devices, and browsers. We find the broken states, dead ends, and edge cases automated checks miss.",
    includes: [
      "End-to-end testing of your core user journeys",
      "Cross-browser and responsive checks (mobile through desktop)",
      "Exploratory testing to surface unexpected edge cases",
      "Usability and broken-state observations noted along the way",
    ],
  },
  {
    number: "02",
    title: "API Testing",
    description:
      "We validate your endpoints against their contracts: status codes, payloads, auth, error handling, and edge inputs — so your backend holds up under everything your frontend throws at it.",
    includes: [
      "Endpoint validation against the expected contract",
      "Status codes, response shapes, and schema checks",
      "Authentication, authorization, and permission boundaries",
      "Error handling and edge-input / invalid-payload cases",
    ],
  },
  {
    number: "03",
    title: "Bug Reporting & Retesting",
    description:
      "Clear, reproducible reports with steps, environment, and expected vs. actual — filed the way developers want them. Once you ship a fix, we retest and confirm it's genuinely closed.",
    includes: [
      "Reproducible steps with environment and severity",
      "Expected vs. actual behavior, with screenshots or recordings",
      "Prioritized so your team knows what to fix first",
      "Retesting after each fix to confirm the issue is closed",
    ],
  },
  {
    number: "04",
    title: "Automation Testing",
    description:
      "We build and maintain automated test suites for your critical flows, so regressions get caught the moment they appear — on every deploy, without slowing your team down.",
    includes: [
      "Automated regression suites for your core user journeys",
      "Tests wired to run on each deploy or pull request",
      "Cross-browser automated coverage where it pays off",
      "Ongoing maintenance so suites stay green as your app evolves",
    ],
  },
  {
    number: "05",
    title: "Performance Testing",
    description:
      "Load, stress, and responsiveness testing that shows exactly where your product slows down or breaks under real traffic — before your users are the ones who find out.",
    includes: [
      "Load and stress testing against realistic traffic",
      "Response-time and throughput measurement",
      "Bottleneck and breaking-point identification",
      "Actionable findings with clear before/after benchmarks",
    ],
  },
  {
    number: "06",
    title: "Security Testing",
    description:
      "Practical, hands-on security checks across authentication, access control, and common web vulnerabilities — so risks are caught and fixed long before anyone can exploit them.",
    includes: [
      "Authentication and access-control validation",
      "Input validation and common injection risks",
      "Review against common web vulnerabilities (OWASP Top 10)",
      "Clear, prioritized remediation notes for your developers",
    ],
  },
] as const;

export const PROCESS_CONTENT = {
  eyebrow: "Process",
  heading: "From build to verified fix in four steps",
  description:
    "A tight loop designed to add confidence without adding overhead to your release cycle.",
} as const;

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Share your build",
    description:
      "Send us a staging link or build and tell us what matters most. We scope the coverage together — no lengthy onboarding.",
  },
  {
    number: "02",
    title: "We test",
    description:
      "Our testers work through your flows and APIs by hand, documenting everything as we go across the environments you care about.",
  },
  {
    number: "03",
    title: "Get the report",
    description:
      "You receive a prioritized, reproducible bug report your developers can act on immediately — no triage overhead on your side.",
  },
  {
    number: "04",
    title: "Verified fix",
    description:
      "After you ship fixes, we retest each issue and confirm it's resolved, so you release knowing it's genuinely closed.",
  },
] as const;

export const WHY_CONTENT = {
  eyebrow: "Why Verico",
  heading: "An extension of your team, not another tool",
  description:
    "We keep the loop short and the signal high — the opposite of a testing platform you have to manage.",
} as const;

export const WHY_ITEMS: readonly WhyItem[] = [
  {
    title: "Fast turnaround",
    description:
      "We test on your timeline, not a queue. Get results back in days, so QA never becomes the bottleneck between finished and shipped.",
  },
  {
    title: "Reports developers use",
    description:
      "Every issue comes with clear steps, environment details, and expected vs. actual behavior — structured so your team can reproduce and fix it fast.",
  },
  {
    title: "Direct line to your tester",
    description:
      "Talk to the person actually testing your product. No account managers, no ticket relay — just a direct channel to clarify and move quickly.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* About page                                                                 */
/* -------------------------------------------------------------------------- */

export const ABOUT_CONTENT = {
  eyebrow: "About Verico",
  heading: "Independent QA, built for how software gets shipped now",
  subhead:
    "Verico is a QA testing agency working with startups and product teams around the world. We're an outside set of eyes on your product — thorough, fast, and honest about what we find.",
  story: {
    heading: "Why we started Verico",
    paragraphs: [
      "AI-assisted development has changed the pace of shipping. Teams write and merge more code, faster, than ever before — and quality assurance is quietly left behind. Bugs that used to be caught in review now reach staging, and sometimes production.",
      "We started Verico to be the testing layer that keeps up. Not a platform to configure or a dashboard to maintain, but real testers who work through your product by hand and tell you plainly what's broken.",
      "As a new agency, we don't have a wall of client logos to show you — and we won't pretend otherwise. What we offer is focused attention, fast turnaround, and reports your developers actually want to receive.",
    ],
  },
  values: {
    eyebrow: "How we work",
    heading: "Principles we test by",
    description:
      "A short list we actually hold ourselves to — not a poster on the wall.",
  },
} as const;

/** Mission & Vision block on the About page. */
export const MISSION_VISION = {
  eyebrow: "Mission & Vision",
  heading: "What drives Verico",
  mission: {
    label: "Our mission",
    text: "To take QA off your plate entirely — so your team can build at full speed and hand off testing with complete confidence. We deliver thorough, end-to-end testing with professional reports and data, always within the timeline you set.",
  },
  vision: {
    label: "Our vision",
    text: "A world where everyone shipping software — solo builders, freelancers, agencies, and companies big and small — can move fast without gambling on quality. You focus on building; Verico makes sure it works.",
  },
} as const;

/**
 * The core "hand off your QA" pitch, shown on Home and Services.
 * Convincing but honest — it describes what we offer, not fabricated proof.
 */
export const MANAGED_QA = {
  eyebrow: "Your QA team, handled",
  heading: "Don't stress about building a QA team — that's our job",
  lead: "Focus on what you do best: building. Develop your product at full speed — vibe-code your way to a finished build — and hand it to Verico. We run complete, end-to-end QA on your projects and products, then hand them back with professional reports and data, within the timeline you give us.",
  points: [
    {
      title: "We manage the QA, you keep momentum",
      description:
        "No hiring, no in-house QA function to stand up. Verico acts as the QA team for a single project or for your whole company.",
    },
    {
      title: "End-to-end, professionally reported",
      description:
        "Complete testing across your product, handed over with clear reports and data your developers and stakeholders can act on immediately.",
    },
    {
      title: "Work the way that suits you",
      description:
        "Engage us hourly, monthly, or per project — scale up or down whenever you need, with no long lock-in.",
    },
    {
      title: "Built for everyone who ships",
      description:
        "From solo builders and freelancers to agencies and companies big and small — if you ship software, Verico can test it.",
    },
  ] as readonly ValueItem[],
  closing:
    "When our customers are happy, we grow — so your success is genuinely the whole point.",
  cta: { label: "Hand off your QA", href: ROUTES.contact },
} as const;

export const VALUES: readonly ValueItem[] = [
  {
    title: "Thoroughness over theater",
    description:
      "We'd rather find the quiet edge-case bug than pad a report with noise. Every issue we file is real, reproducible, and worth your team's time.",
  },
  {
    title: "Honesty, always",
    description:
      "No fabricated reviews, inflated metrics, or scope we can't deliver. If something is outside what we do well, we'll tell you and point you in the right direction.",
  },
  {
    title: "Speed that respects your cycle",
    description:
      "QA should shorten the distance between finished and shipped, not stretch it. We move quickly and communicate clearly so you're never left waiting.",
  },
  {
    title: "Developer-first reporting",
    description:
      "We write reports the way engineers want to read them: clear steps, environment, expected vs. actual — so fixing is faster than triaging.",
  },
] as const;

export const WHO_WE_HELP = {
  eyebrow: "Who we work with",
  heading: "Built for lean teams shipping quickly",
  description:
    "If your team is moving fast and QA is the thing that keeps slipping, we're built for you.",
  items: [
    "Startups shipping an MVP who need a confidence check before launch",
    "Product teams using AI-assisted development to move faster than their QA",
    "Dev teams without a dedicated QA function or in-house tester",
    "Founders who want an independent, honest read on product quality",
  ] as readonly string[],
} as const;

/* -------------------------------------------------------------------------- */
/* Services page                                                              */
/* -------------------------------------------------------------------------- */

export const SERVICES_PAGE = {
  hero: {
    eyebrow: "Services",
    heading: "Hands-on QA, scoped to your build",
    subhead:
      "Six focused services that cover the ground automated checks miss — from manual and API testing to automation, performance, and security. Engage them individually or together; we scope coverage to what your product needs.",
  },
  engagement: {
    eyebrow: "Engagement",
    heading: "Flexible by design",
    description:
      "No long contracts or per-seat pricing. We scope each engagement to your build and timeline.",
    items: [
      {
        title: "Hourly",
        description:
          "Bring us in by the hour for a focused set of eyes on something specific — pay for exactly what you need, no commitment.",
      },
      {
        title: "Monthly",
        description:
          "A recurring QA partner plugged into your release rhythm — a dedicated tester or team available every month.",
      },
      {
        title: "Project-based",
        description:
          "A complete, scoped test pass on a release, feature, or full product — agreed up front and delivered by your deadline.",
      },
    ] as readonly WhyItem[],
  },
} as const;

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const FAQ_CONTENT = {
  eyebrow: "FAQ",
  heading: "Questions teams usually ask",
  description:
    "If your question isn't here, just send it over — we're happy to talk specifics.",
} as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "How quickly can you start?",
    answer:
      "Usually within a few days of a short scope call. There's no lengthy onboarding — once we agree on coverage and you share access, we begin.",
  },
  {
    question: "What do you need from us to test?",
    answer:
      "A staging link or build, any test credentials, and a quick note on what matters most. If there are areas you're especially unsure about, tell us and we'll focus there.",
  },
  {
    question: "How do you deliver bug reports?",
    answer:
      "As clear, prioritized, reproducible reports with steps, environment, and expected vs. actual behavior. We can deliver in your issue tracker or as a standalone document — whatever fits your workflow.",
  },
  {
    question: "Do you do automated testing?",
    answer:
      "Our focus is hands-on manual and API testing, where human judgment finds the most. We complement your automated checks rather than replace them.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "We scope each engagement to your build and timeline rather than charging per seat. Reach out with what you're shipping and we'll come back with a clear scope and price.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Contact & shared CTA / footer                                              */
/* -------------------------------------------------------------------------- */

export const CONTACT_CONTENT = {
  eyebrow: "Get in touch",
  heading: "Tell us what you're shipping",
  description:
    "Send a note about your product and where you'd like more confidence. We'll reply with a scope and next steps — usually within one business day.",
  successMessage:
    "Thanks — your message is on its way. We'll get back to you within one business day.",
  errorMessage:
    "Something went wrong sending your message. Please try again, or reach us directly using the links below.",
} as const;

/** Reusable call-to-action band shown at the foot of most pages. */
export const CTA_BAND = {
  heading: "Ready to ship with confidence?",
  description:
    "Book a short scope call and we'll map out exactly how Verico can help — no commitment, no sales script.",
  primaryCta: { label: "Get a scope call", href: ROUTES.contact },
  secondaryCta: { label: "Explore services", href: ROUTES.services },
} as const;

export const FOOTER_CONTENT = {
  tagline: "QA testing for teams shipping at AI speed.",
} as const;
