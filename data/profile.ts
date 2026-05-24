export const profile = {
  name: "Adarsh Shinde",
  tagline: "Finance Professional Building AI-Enabled Research, Automation & Digital Workflows",
  subTagline:
    "MBA Finance · Equity Research · SAP FICO · AI Workflow Automation",
  location: "Navi Mumbai, India",
  email: "shinadi98@gmail.com",
  phone: "(+91) 8976480056",
  linkedin: "https://www.linkedin.com/in/adarsh-shinde-26993b228",
  github: "https://github.com/shinadi98-bit", // Add your GitHub URL here
  resumeUrl: "/resume.pdf", // Place resume PDF in /public/resume.pdf
  about: `Finance professional with an MBA Finance background (FLAME University), CA Inter Group I qualification, and hands-on experience across buy-side equity research, SAP FICO consulting, and tax & accounts practice.

I have covered Indian IT equities for a ₹350+ crore AUM advisory firm, resolved 200+ SAP FI incidents across enterprise ERP implementations, and managed compliance and accounts finalization for 150+ clients.

Beyond core finance, I work comfortably with financial modelling, valuation, ERP systems, Bloomberg, Python, and AI-assisted workflow automation tools — including building and deploying a live algorithmic trading system, authoring a quantitative sentiment analysis research study, and launching a web product using Claude Code-assisted development.

My goal is to bring rigorous financial domain knowledge together with practical automation and analytical execution — for roles in fintech, investment research, financial analysis, business analysis, or AI-adjacent finance operations.`,
};

export const experiences = [
  {
    id: "omega",
    title: "Equity Research Analyst Intern (Buy Side)",
    company: "Omega Portfolio Advisors by MoneyWorks4Me",
    period: "May 2025 – Jun 2025",
    location: "Pune",
    type: "Internship",
    bullets: [
      "Covered 6 Indian IT companies for a ₹350+ crore AUM equity advisory firm",
      "Built financial models and ran DCF and comparable company analysis across coverage universe",
      "Analyzed financial statements, macro indicators, sector trends, sell-side reports, and consensus estimates",
      "Presented investment findings using Excel and Tableau to support portfolio decision-making",
    ],
  },
  {
    id: "hcl",
    title: "Associate Consultant — SAP FICO",
    company: "HCL Technologies Ltd.",
    period: "Feb 2022 – Dec 2023",
    location: "Hyderabad",
    type: "Full-time",
    bullets: [
      "Resolved 200+ SAP FI incidents and configuration requests across GL, Taxation, PCA, Cost Objects, Cost Centers, and Project Systems",
      "Led the FI functional team through full-cycle SAP implementation: development, UAT, cutover, and go-live",
      "Delivered 10+ custom enhancements in collaboration with cross-functional teams",
      "Authored SOPs and KT documentation to standardize processes and support knowledge transfer",
    ],
  },
  {
    id: "lahoti",
    title: "Senior Tax & Accounts Assistant",
    company: "SK Lahoti & Co",
    period: "Jul 2019 – Jan 2022",
    location: "Navi Mumbai",
    type: "Full-time",
    bullets: [
      "Finalized accounts and prepared financial statements for a multi-client portfolio of 150+ clients",
      "Managed tax planning, reporting, GST, TDS, and ROC filings across client base",
      "Represented clients before tax authorities and handled audit proceedings",
      "Conducted statutory audits, reconciliations, and expense analysis engagements",
    ],
  },
];

export const projects = [
  {
    id: "drivers",
    title: "DRIVERS",
    subtitle: "LLM-Based Investor Sentiment Analysis",
    type: "MBA Research Project",
    tags: ["AI + Finance", "Quantitative Research"],
    description:
      "Designed a quantitative research study analyzing 148,000+ stock-day observations across BSE Sensex 30 and Dow Jones 30 constituents (2015–2024) to evaluate whether LLM-driven sentiment signals could predict equity returns.",
    highlights: [
      "148,000+ stock-day observations across two global indices",
      "FinBERT sentiment scoring on Bloomberg news data",
      "Integrated Google Trends, Fear/Greed Index, and PSY_14 technical indicator",
      "Cross-market predictive performance analysis (India vs. US)",
    ],
    skills: ["Python", "FinBERT", "Bloomberg Terminal", "Sentiment Analysis", "Quantitative Research", "Data Analysis"],
    color: "blue",
  },
  {
    id: "algo-trading",
    title: "Algorithmic Trading System",
    subtitle: "NSE F&O and Delta Exchange Crypto Futures",
    type: "Quant / Trading Automation",
    tags: ["Automation", "Backtesting"],
    description:
      "Designed, backtested, and deployed an algorithmic trading system for NSE F&O and Delta Exchange crypto futures, incorporating volatility-adjusted trailing stop logic and asset-specific parameter calibration.",
    highlights: [
      "VWAP crossover baseline strategy with BOS/CHoCH entry signals",
      "Multiple backtesting iterations with volatility-adjusted stop logic",
      "Exchange API integration for live order management",
      "Deployed on Railway.app with live position monitoring",
    ],
    skills: ["Python", "Algorithmic Trading", "Backtesting", "Exchange API", "Cloud Deployment"],
    color: "teal",
    disclaimer:
      "System built for research and automation learning purposes. Past performance of backtests does not guarantee future results.",
  },
  {
    id: "exampack",
    title: "ExamPack",
    subtitle: "AI-Assisted Web Product",
    type: "AI-Assisted Product Build",
    tags: ["Web Product", "Claude Code"],
    url: "https://exampack.in",
    description:
      "Launched ExamPack from prototype to production at exampack.in using a Claude Code-assisted development workflow, translating product requirements into a functional, deployed web experience.",
    highlights: [
      "Supabase authentication with callback and password-reset routing",
      "Redirect URL management across local and production environments",
      "Deployment configuration and environment-specific debugging",
      "End-to-end product delivery from requirements to live website",
    ],
    skills: ["Claude Code", "Next.js", "Supabase Auth", "AI-Assisted Development", "Deployment Configuration"],
    color: "violet",
  },
];

export const skillGroups = [
  {
    label: "Finance & Research",
    icon: "TrendingUp",
    skills: [
      "Financial Modelling",
      "Equity Valuation",
      "DCF Analysis",
      "Comparable Company Analysis",
      "Variance Analysis",
      "Investment Research",
      "Quantitative Research",
      "Sentiment Analysis",
      "MIS Reporting",
    ],
  },
  {
    label: "Finance Systems & Compliance",
    icon: "Database",
    skills: [
      "SAP FICO",
      "SAP ERP 6.0",
      "Tax & Compliance",
      "Accounts Finalization",
      "GST / TDS / ROC Filings",
      "ERP Systems",
    ],
  },
  {
    label: "Tools & Technology",
    icon: "Wrench",
    skills: [
      "Bloomberg",
      "Python",
      "Excel",
      "Tableau",
      "MS Office",
      "Tally ERP 9.0",
      "Next.js",
      "Supabase",
    ],
  },
  {
    label: "AI & Workflow Automation",
    icon: "Cpu",
    skills: [
      "Claude Code",
      "Relevance AI",
      "n8n",
      "AI-Assisted Development",
      "Workflow Automation",
      "Digital Productivity Systems",
    ],
  },
  {
    label: "Collaboration",
    icon: "Users",
    skills: ["Zoom", "Slack", "Microsoft Teams", "Notion", "Remote Collaboration"],
  },
];

export const education = [
  {
    degree: "MBA — Finance",
    institution: "FLAME University",
    location: "Pune",
    period: "2024 – 2026",
    current: false,
  },
  {
    degree: "Bachelor of Commerce",
    institution: "University of Mumbai",
    location: "Mumbai",
    period: "2016 – 2019",
    current: false,
  },
  {
    degree: "CA Inter — Group I",
    institution: "ICAI",
    location: "",
    period: "Nov 2018",
    current: false,
  },
  {
    degree: "CA CPT",
    institution: "ICAI",
    location: "",
    period: "Jun 2016",
    current: false,
  },
];

export const certifications = [
  {
    name: "Bloomberg Market Concepts",
    issuer: "Bloomberg",
    year: "2025",
  },
  {
    name: "Bloomberg Finance Fundamentals",
    issuer: "Bloomberg",
    year: "2025",
  },
  {
    name: "The Complete Investment Banking Course 2025",
    issuer: "Udemy",
    year: "2025",
  },
  {
    name: "NISM Research Analyst Series XV",
    issuer: "NISM",
    year: "Feb 2025",
  },
  {
    name: "SAP Certified Application Associate",
    issuer: "SAP",
    year: "Nov 2021",
  },
];
