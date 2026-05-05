import notionData from "./notion-data.json";

// ─── Legacy Types (kept for Contact page compatibility) ───────────────────────

export interface Work {
  id: string;
  title: string;
  description: string;
  image: string;
  tech?: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  category?: string;
  outcome?: string;
  problem?: string;
  what_i_did?: string;
}

export interface SiteContent {
  hero_name: string;
  hero_subtitle: string;
  hero_secondary?: string;
  hero_availability?: string;
  hero_testimonial_quote?: string;
  hero_testimonial_author?: string;
  info_what_i_do: string;
  info_background: string;
  info_approach: string;
  info_career: string;
  info_tools?: string;
  info_services?: string;
  info_clients?: string;
  contact_headline: string;
  contact_tagline_1: string;
  contact_tagline_2: string;
  contact_email: string;
  contact_phone: string;
  footer_headline: string;
  footer_copyright: string;
  footer_email: string;
  footer_linkedin: string;
  footer_github: string;
  footer_medium: string;
  footer_brands?: string;
  site_name: string;
}

// ─── Agency Types ─────────────────────────────────────────────────────────────

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  industryBadge: string;
  company: string;
  stage: string;
  timeline: string;
  investment: string;
  teamSize: string;
  status: string;
  heroImage: string;
  problem: string;
  solutionHeadline: string;
  solutionDetails: string;
  results: string[];
  techStack: string[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  approach: {
    strategy: { title: string; body: string };
    build: { title: string; body: string };
    launch: { title: string; body: string };
    postLaunch: { title: string; body: string };
  };
  stats: { value: string; label: string }[];
  lessons: { title: string; body: string }[];
}

export interface ServiceTier {
  id: string;
  title: string;
  icon: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
  notIncluded?: string[];
  exampleScope?: string[];
  bestFor: string;
  ctaText: string;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  body: string;
  deliverables: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyType: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  mediumUrl: string;
}

// ─── Default SiteContent ──────────────────────────────────────────────────────

const defaultContent: SiteContent = {
  hero_name: "AI PRODUCT STRATEGY + RAPID PROTOTYPING FOR FOUNDERS",
  hero_subtitle: "We ship AI-powered products in 8 weeks, not 8 months.",
  hero_secondary: "For founders at the intersection of ambition and technical uncertainty.",
  hero_availability: "AVAILABLE FOR NEW PROJECTS · 2026",
  hero_testimonial_quote:
    "Shashank's team de-risked our entire product strategy. We went from zero ML capability to production in 12 weeks.",
  hero_testimonial_author: "Founder & CEO, Series A AgriTech",
  info_what_i_do:
    "We help founders at the intersection of ambition and technical uncertainty build AI-powered products — from strategy to production.",
  info_background:
    "Based in India, shipped AI products for startups across AgriTech, D2C, Climate Tech, and SaaS. We combine AI engineering with product thinking and brand design.",
  info_approach:
    "Full-stack: strategy, design, engineering, and launch. One team, one conversation, eight weeks to production.",
  info_career:
    "(2025 – NOW) SHAS LAB — Founder\nShipped 6 AI MVPs for Series A startups\n\n(2024 – 2025) PRODUCT ENGINEER\nDeveloped scalable AI applications",
  info_tools: "Python · PyTorch · LangChain · Next.js · AWS · GCP",
  info_services: "AI Strategy Audit · AI MVP Development · AI Feature Integration",
  info_clients: "Series A Startups · D2C Brands · Climate Tech · SaaS Founders",
  contact_headline: "CONTACT",
  contact_tagline_1: "Ready to ship your AI product?",
  contact_tagline_2: "Let's spend 30 minutes understanding your opportunity.",
  contact_email: "shashank1341@gmail.com",
  contact_phone: "+91 7338970698",
  footer_headline: "LET'S BUILD",
  footer_copyright: "© 2026 SHAS LAB. BUILT WITH AI. SHIPPING REAL PRODUCTS.",
  footer_email: "shashank1341@gmail.com",
  footer_linkedin: "https://www.linkedin.com/in/shashank-p-044a7b288/",
  footer_github: "https://github.com/shaasank",
  footer_medium: "https://medium.com/@shas21ad303",
  footer_brands: "SVASTHA · STONKZZ · LUXELOOM · COSMA ACCADAMY · TENSKETCH",
  site_name: "SHAS LAB",
};

// ─── Case Studies ─────────────────────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  {
    id: "agritech-ai-platform",
    title: "Crop Health AI Platform",
    industry: "AgriTech",
    industryBadge: "AgriTech",
    company: "Series A AgriTech Startup",
    stage: "Series A",
    timeline: "12 weeks",
    investment: "$65,000",
    teamSize: "3 engineers",
    status: "Live in Production",
    heroImage:
      "https://framerusercontent.com/images/WEdUzezFqC4J9tdglBttno1HIE.png?width=1376&height=768",
    problem:
      "Our farmers needed disease detection from photos. Competitors were shipping AI-powered tools. We had 12 weeks to go from concept to market or lose customers.",
    solutionHeadline: "Built AI inference engine + mobile app",
    solutionDetails:
      "Custom ML model trained on 50K crop disease images. Real-time inference API running on AWS Lambda. Mobile-first React Native app for on-field diagnosis in under 2 seconds.",
    results: [
      "95% disease detection accuracy (validation set)",
      "Shipped MVP in 10 weeks — 2 weeks ahead of timeline",
      "5,000 beta farmers in first 30 days",
      "Helped client raise $2M Series A (product demo was critical)",
      "Now serving 50K+ farmers, 99.9% uptime in production",
    ],
    techStack: ["Python", "PyTorch", "AWS Lambda", "SageMaker", "Next.js", "React Native"],
    testimonialQuote:
      "Shashank's team de-risked our entire product strategy. We went from zero ML capability to production in 12 weeks. The product literally helped us raise Series A.",
    testimonialAuthor: "Founder & CEO",
    testimonialRole: "Series A AgriTech",
    approach: {
      strategy: {
        title: "Discovery & Strategy (Weeks 1–2)",
        body: "3-day discovery sprint. Sourced 50K+ labeled crop disease images from open ag datasets. Chose EfficientNet for high accuracy on mobile. Decided on AWS Lambda + on-device inference for offline functionality. Defined MVP as photo diagnosis + severity level.",
      },
      build: {
        title: "Rapid Prototyping (Weeks 3–6)",
        body: "Three parallel workstreams: ML model (fine-tuned EfficientNet, 95% accuracy by Week 4), Backend API (FastAPI + AWS Lambda, <2s inference), Mobile App (React Native with offline capability and on-field UI).",
      },
      launch: {
        title: "Launch to Production (Weeks 7–8)",
        body: "Deployed to AWS SageMaker + Lambda with 99.9% SLA. Load tested at 1,000 concurrent requests. Set up CloudWatch monitoring and custom alerts. 40-page team training and handoff documentation.",
      },
      postLaunch: {
        title: "Post-Launch (Week 9+)",
        body: "5,000 beta farmers onboarded in first 30 days. Two critical bug fixes deployed within 48 hours. Model retrained on new disease variants in Week 12. Full features roadmap handed off to client product team.",
      },
    },
    stats: [
      { value: "95%", label: "Detection Accuracy" },
      { value: "10 wks", label: "Shipped Ahead of Schedule" },
      { value: "5,000+", label: "Beta Farmers Month 1" },
    ],
    lessons: [
      {
        title: "Domain Expertise is Underrated",
        body: "Spending time with agronomists in Week 1 saved us from building the wrong model. Domain expertise should inform your technical decisions from day one.",
      },
      {
        title: "Scope Discipline Drives Speed",
        body: "Saying no to 5 features in Week 2 is why we shipped in 12 weeks instead of 16. MVP means minimum viable, not everything the customer asked for.",
      },
      {
        title: "Mobile-First Deployment is Different",
        body: "On-device inference changes everything. You can't rely on cloud connectivity in agriculture. Plan for offline-first from architecture day.",
      },
      {
        title: "Knowledge Transfer is Part of the Delivery",
        body: "Handing off code is not the same as handing off ownership. Budget 2 weeks for training and documentation from the start.",
      },
    ],
  },
  {
    id: "content-generation-at-scale",
    title: "AI Content Generation at Scale",
    industry: "D2C / Content",
    industryBadge: "D2C / Content",
    company: "D2C Consumer Brand",
    stage: "Growth Stage",
    timeline: "8 weeks",
    investment: "$42,000",
    teamSize: "2 engineers",
    status: "Live in Production",
    heroImage:
      "https://framerusercontent.com/images/MJbZW81lC3ekTVgYP7V6GReLd3A.png?width=1408&height=768",
    problem:
      "Creating 10K unique recipe variations monthly was manual and expensive. We needed an AI system to generate variations from base recipes in real-time.",
    solutionHeadline: "LLM-powered content generation pipeline",
    solutionDetails:
      "Fine-tuned GPT-3.5 model on brand voice + recipe templates. Built Next.js dashboard for editors to generate variations. Integrated with CMS for auto-publishing.",
    results: [
      "10,000+ recipes generated monthly (was 200 before)",
      "50% faster content production workflow",
      "Reduced content team from 5 to 2 people",
      "Saved $80K annually in freelancer costs",
      "15% increase in recipe page SEO traffic",
    ],
    techStack: ["OpenAI API", "LangChain", "Next.js", "PostgreSQL", "Vercel"],
    testimonialQuote:
      "From a technical standpoint, we had zero LLM experience. Shashank's team built a production system that our content team uses daily. ROI was immediate.",
    testimonialAuthor: "VP of Product",
    testimonialRole: "D2C Consumer Brand",
    approach: {
      strategy: {
        title: "Discovery & Strategy (Weeks 1–2)",
        body: "Audited the existing content workflow end-to-end. Identified 3 high-leverage automation points. Decided fine-tuning over generic prompting for brand voice fidelity. Chose Next.js editor dashboard over Notion-based approach for better UX.",
      },
      build: {
        title: "Rapid Prototyping (Weeks 3–6)",
        body: "Fine-tuned GPT-3.5 on 500 brand-voice examples. Built generation pipeline with LangChain. Created editor dashboard with approval workflow. Integrated with existing CMS via REST API. Weekly editor feedback sessions.",
      },
      launch: {
        title: "Launch to Production (Weeks 7–8)",
        body: "Deployed to Vercel with auto-scaling. Set up OpenAI API rate limiting and cost monitoring dashboards. Editor onboarding sessions. Built generation quality analytics for continuous improvement.",
      },
      postLaunch: {
        title: "Post-Launch (Week 9+)",
        body: "Content team fully adopted within 2 weeks. Expanded scope to include social captions and email copy. Feedback loop from editors improving output quality month over month.",
      },
    },
    stats: [
      { value: "10K+", label: "Recipes/Month" },
      { value: "50%", label: "Faster Workflow" },
      { value: "15%", label: "SEO Traffic Lift" },
    ],
    lessons: [
      {
        title: "Brand Voice is a Technical Problem",
        body: "Fine-tuning on brand examples outperformed generic prompting by 3x. Invest in curating quality training examples before building the pipeline.",
      },
      {
        title: "Editor UX Drives Adoption",
        body: "The best AI pipeline fails if editors don't use it. We spent all of Week 4 on UX testing with the content team before writing a line of production code.",
      },
      {
        title: "Cost Monitoring is Non-Negotiable",
        body: "LLM costs can spiral without controls. Set hard limits per generation type before launch, and build dashboards so your team can see spend in real-time.",
      },
    ],
  },
  {
    id: "climate-prediction-api",
    title: "Real-Time Climate Prediction API",
    industry: "Climate Tech",
    industryBadge: "Climate Tech",
    company: "Series A AgriTech SaaS",
    stage: "Series A",
    timeline: "10 weeks",
    investment: "$58,000",
    teamSize: "3 engineers",
    status: "Live in Production",
    heroImage:
      "https://framerusercontent.com/images/veuEX7EWKH8st7lAt2LmNetkvFU.png?width=1376&height=768",
    problem:
      "Organic farmers face 30% crop loss to climate-related diseases. We needed predictive analytics to alert farmers 7 days in advance of high-risk weather patterns.",
    solutionHeadline: "Real-time ML prediction engine + mobile alerts",
    solutionDetails:
      "Ingested 5M+ historical climate data points. Built ensemble ML model (XGBoost + LSTM). Real-time inference via FastAPI. Mobile push notifications via Firebase.",
    results: [
      "92% accuracy on disease risk predictions",
      "Farmers average 4-day warning window",
      "28% reduction in crop losses for early adopters",
      "$2.8M annual revenue attributed to feature",
      "Product became top feature driver for net new customers",
    ],
    techStack: ["Python", "FastAPI", "XGBoost", "TensorFlow", "PostgreSQL", "GCP", "React"],
    testimonialQuote:
      "This wasn't just engineering — it was deeply strategic work. Shashank's team understood farmers' needs and built for reliability over bells and whistles. The product has changed our trajectory.",
    testimonialAuthor: "Founder",
    testimonialRole: "Series A Climate Tech",
    approach: {
      strategy: {
        title: "Discovery & Strategy (Weeks 1–2)",
        body: "Ingested and cleaned 5M+ historical climate data points from NOAA and proprietary sensors. Defined prediction window (7 days) and accuracy threshold (90%+). Chose ensemble approach for robustness.",
      },
      build: {
        title: "Rapid Prototyping (Weeks 3–6)",
        body: "Trained XGBoost baseline at 88% accuracy. Added LSTM layer for temporal patterns (+4% accuracy). Built FastAPI inference layer with sub-2s response. Integrated Firebase for real-time mobile alerts. Weekly testing with farmers.",
      },
      launch: {
        title: "Launch to Production (Weeks 7–8)",
        body: "Deployed to GCP with auto-scaling. Set up model drift detection and alert. Integrated with existing mobile app via REST API. Farmer onboarding flow tested with 50 beta users. 99.5% uptime SLA.",
      },
      postLaunch: {
        title: "Post-Launch (Week 9+)",
        body: "Expanded prediction coverage to 3 new crop types. Alert thresholds fine-tuned based on false-positive feedback. Feature became the #1 driver in quarterly user surveys.",
      },
    },
    stats: [
      { value: "92%", label: "Prediction Accuracy" },
      { value: "4 days", label: "Avg Warning Window" },
      { value: "28%", label: "Crop Loss Reduction" },
    ],
    lessons: [
      {
        title: "Ensemble Beats Single Model",
        body: "Adding the LSTM layer on top of XGBoost added 4% accuracy. In life-or-death agricultural decisions, that 4% matters enormously to farmer trust.",
      },
      {
        title: "Alert Fatigue is Real",
        body: "Too many alerts equals ignored alerts. We tuned the false positive rate aggressively before launch. Farmers need to trust every alert they receive.",
      },
      {
        title: "Data Quality Beats Model Complexity",
        body: "We spent 40% of build time on data cleaning. A clean dataset with a simple model beats a complex model trained on noisy data every time.",
      },
    ],
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: ServiceTier[] = [
  {
    id: "strategy-audit",
    title: "AI Strategy Audit",
    icon: "📊",
    price: "$15,000",
    duration: "2 weeks",
    description: "Perfect for founders who need clarity before committing.",
    includes: [
      "Full technical audit of your infrastructure",
      "AI opportunity assessment (3–5 high-potential use cases)",
      "Competitive AI landscape analysis",
      "8-week shipping roadmap",
      "Resource & budget recommendations",
      "Live presentation to your leadership team",
    ],
    notIncluded: ["Build / implementation", "Code or technical artifacts"],
    bestFor: "Evaluating AI before investing $50K+",
    ctaText: "Schedule Audit →",
  },
  {
    id: "ai-mvp",
    title: "AI MVP Development",
    icon: "🏗️",
    price: "$45K – $80K",
    duration: "8 weeks",
    description: "Full product shipped. Ready to raise on, launch to users.",
    includes: [
      "Custom AI model integration (LLMs, fine-tuned models, etc.)",
      "Full-stack development (backend + frontend)",
      "Production deployment (AWS / GCP)",
      "Load testing & optimization",
      "Team handoff training & documentation",
      "30 days of post-launch support",
    ],
    exampleScope: [
      "AI-powered search / recommendation engine",
      "LLM-based content generation tool",
      "Real-time prediction API",
      "RAG (Retrieval-Augmented Generation) system",
    ],
    bestFor: "Founders ready to launch MVP in 2 months",
    ctaText: "Let's Build →",
    featured: true,
  },
  {
    id: "feature-integration",
    title: "AI Feature Integration",
    icon: "🔌",
    price: "$25,000 / month",
    duration: "3-month minimum",
    description: "Embed AI into your existing product. Monthly sprints.",
    includes: [
      "40 hours/month of engineering",
      "Weekly syncs with your team",
      "Prioritized feature queue",
      "Production support",
      "Performance monitoring & optimization",
    ],
    exampleScope: [
      "Add LLM capabilities to existing SaaS",
      "Real-time personalization engine",
      "Automated workflow AI",
      "Continuous model improvement",
    ],
    bestFor: "Post-launch teams scaling AI capabilities",
    ctaText: "Discuss Retainer →",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    duration: "Weeks 1–2",
    body: "We audit your technical landscape, define AI opportunities, architect the solution, and create a shipping roadmap.",
    deliverables: ["AI Opportunity Brief", "Technical Architecture Doc", "8-week Shipping Timeline"],
    icon: "📋",
  },
  {
    number: "02",
    title: "Rapid Prototyping",
    duration: "Weeks 3–6",
    body: "Build the core AI engine. Integrate LLMs. Create the user interface. All in parallel. No waterfall, full velocity.",
    deliverables: ["Working AI MVP", "Integrated UI/UX", "Production-Ready Code"],
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Launch to Production",
    duration: "Weeks 7–8",
    body: "Deploy to AWS/GCP. Set up monitoring. Run load tests. Your team takes over with full documentation.",
    deliverables: ["Deployed Application", "Ops Runbook", "Team Handoff Training"],
    icon: "🚀",
  },
  {
    number: "04",
    title: "Growth & Iteration",
    duration: "Ongoing (Optional)",
    body: "Monitor production metrics. Iterate based on user feedback. Scale the model. Retrain on new data.",
    deliverables: ["Performance Reports", "Optimization Recommendations", "Ongoing Support"],
    icon: "📈",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Shashank shipped our AI tool in 3 weeks flat. We went from 'we need AI' to live product in a month. His team understood our constraints and delivered without cutting corners.",
    author: "Founder & CEO",
    role: "Series A SaaS, 20-person team",
    companyType: "AgriTech",
  },
  {
    id: "t2",
    quote:
      "A rare combination of sharp design sense and deep technical capability. Most engineers are either builders or architects. Shashank is both. He made our technical direction better while delivering flawless code.",
    author: "Founder",
    role: "YC W24, Seed Stage",
    companyType: "AI/ML Startup",
  },
  {
    id: "t3",
    quote:
      "We had competing visions for our AI feature — speed vs. robustness. His team helped us make the right trade-off. The advice alone was worth the project cost. We're now a returning customer for our Series B roadmap.",
    author: "VP Product",
    role: "Series A SaaS, 50-person team",
    companyType: "SaaS / B2B",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "How We Shipped an AI MVP in 8 Weeks",
    excerpt:
      "A step-by-step breakdown of our methodology, timelines, and the three decisions that made it work.",
    category: "AI Engineering",
    categoryColor: "#2563eb",
    date: "May 5, 2025",
    readTime: "8 min read",
    mediumUrl: "https://medium.com/@shas21ad303",
  },
  {
    id: "blog-2",
    title: "Shipping LLM Products: Lessons from Three AI Startups",
    excerpt:
      "Production LLMs are different from demo LLMs. Here's what we learned from shipping three in a year.",
    category: "Product Strategy",
    categoryColor: "#10b981",
    date: "Apr 18, 2025",
    readTime: "6 min read",
    mediumUrl: "https://medium.com/@shas21ad303",
  },
  {
    id: "blog-3",
    title: "The Founder's Guide to Building AI Without an ML Team",
    excerpt:
      "You don't need 5 ML engineers. You need a clear scope, the right tools, and a partner who's shipped before.",
    category: "Founder Lessons",
    categoryColor: "#f59e0b",
    date: "Mar 29, 2025",
    readTime: "5 min read",
    mediumUrl: "https://medium.com/@shas21ad303",
  },
];

// ─── Exported legacy data (Notion sync compat) ────────────────────────────────

const fallbackWorks: Work[] = [
  {
    id: "agritech-ai-platform",
    title: "Crop Health AI Platform",
    description: "Custom ML model for crop disease detection. Shipped in 10 weeks.",
    image: "https://framerusercontent.com/images/WEdUzezFqC4J9tdglBttno1HIE.png?width=1376&height=768",
    tech: ["Python", "PyTorch", "AWS", "React Native"],
    featured: true,
    category: "AI TOOL",
    outcome: "5,000 farmers in 30 days · $2M Series A",
  },
  {
    id: "content-generation-at-scale",
    title: "AI Content Generation at Scale",
    description: "LLM-powered content pipeline generating 10K+ recipes/month.",
    image: "https://framerusercontent.com/images/MJbZW81lC3ekTVgYP7V6GReLd3A.png?width=1408&height=768",
    tech: ["OpenAI API", "LangChain", "Next.js"],
    featured: true,
    category: "PRODUCT",
    outcome: "Saved $80K/year · 50% faster workflow",
  },
  {
    id: "climate-prediction-api",
    title: "Real-Time Climate Prediction API",
    description: "Ensemble ML model predicting crop disease risk 7 days out.",
    image: "https://framerusercontent.com/images/veuEX7EWKH8st7lAt2LmNetkvFU.png?width=1376&height=768",
    tech: ["Python", "XGBoost", "TensorFlow", "GCP"],
    featured: false,
    category: "API",
    outcome: "$2.8M revenue attributed",
  },
];

const notionWorks = ((notionData as unknown as { projects?: Work[] }).projects ?? []);
const hasRealProjects = notionWorks.some((w) => w.title && w.title !== "Untitled");
export const works: Work[] = hasRealProjects ? notionWorks : fallbackWorks;

const notionContent = ((notionData as unknown as { siteContent?: Record<string, string> }).siteContent ?? {});
export const siteContent: SiteContent = { ...defaultContent, ...notionContent };

export const lastUpdated: string = (notionData as unknown as { lastUpdated?: string }).lastUpdated ?? "";
