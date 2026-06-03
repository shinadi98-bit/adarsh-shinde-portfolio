export const profile = {
  name: "Adarsh Shinde",
  tagline: "Finance Professional Building AI-Enabled Research, Automation and Digital Workflows",
  subTagline: "MBA Finance · Equity Research · SAP FICO · AI Workflow Automation",
  location: "Navi Mumbai, India",
  email: "shinadi98@gmail.com",
  phone: "(+91) 8976480056",
  linkedin: "https://www.linkedin.com/in/adarsh-shinde-26993b228",
  github: "https://github.com/shinadi98-bit",
  resumeUrl: "/resume.pdf",
  about: `Finance professional with an MBA Finance background (FLAME University), CA Inter Group I qualification, and hands-on experience across buy-side equity research, SAP FICO consulting, and tax and accounts practice.

I have covered Indian IT equities for a Rs.350+ crore AUM advisory firm, resolved 200+ SAP FI incidents across enterprise ERP implementations, and managed compliance and accounts finalization for 150+ clients.

Beyond core finance, I work comfortably with financial modelling, valuation, ERP systems, Bloomberg, Python, and AI-assisted workflow automation tools, including building and deploying a live algorithmic trading system, authoring a quantitative sentiment analysis research study, and launching a web product using Claude Code-assisted development.

My goal is to bring rigorous financial domain knowledge together with practical automation and analytical execution, for roles in fintech, investment research, financial analysis, business analysis, or AI-adjacent finance operations.`,
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
      "Covered 6 Indian IT companies for a Rs.350+ crore AUM equity advisory firm",
      "Built financial models and ran DCF and comparable company analysis across coverage universe",
      "Analyzed financial statements, macro indicators, sector trends, sell-side reports, and consensus estimates",
      "Presented investment findings using Excel and Tableau to support portfolio decision-making",
    ],
  },
  {
    id: "hcl",
    title: "Associate Consultant, SAP FICO",
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
    title: "Senior Tax and Accounts Assistant",
    company: "SK Lahoti and Co",
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
    type: "AI Finance Research",
    tags: ["AI + Finance", "Quantitative Research"],
    description:
      "Designed a quantitative AI-finance research study using 148,000+ stock-day observations to evaluate LLM-driven sentiment signals across Indian and US equity markets.",
    highlights: [
      "Combined FinBERT, Bloomberg News Sentiment, Google Trends, Fear/Greed Index, and PSY_14",
      "Compared signals across BSE Sensex 30 and Dow Jones 30 constituents (2015 to 2024)",
      "Produced research output for investment and academic audiences",
    ],
    skills: ["Python", "FinBERT", "Bloomberg Terminal", "Sentiment Analysis", "Quantitative Research", "Data Analysis"],
    color: "cyan",
  },
  {
    id: "algo-trading",
    title: "Algorithmic Trading System",
    subtitle: "NSE F&O and Delta Exchange Crypto Futures",
    type: "Trading Automation",
    tags: ["Automation", "Backtesting"],
    description:
      "Built and iterated an algorithmic trading workflow across NSE F&O and Delta Exchange crypto futures, focused on signal testing, risk logic, and deployment readiness.",
    highlights: [
      "Iterated from VWAP crossover to BOS/CHoCH signal logic with volatility-adjusted trailing stop",
      "Integrated exchange APIs for live order management and position monitoring",
      "Deployed workflow components on Railway.app for live monitoring and testing",
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
      "Launched ExamPack from prototype to live website using a Claude Code-assisted workflow, translating product requirements into a functional web experience.",
    highlights: [
      "Translated product requirements into a functional deployed web experience",
      "Configured Supabase authentication, callback routing, and password reset",
      "Resolved redirect URL and deployment configuration issues for production launch",
    ],
    skills: ["Claude Code", "Next.js", "Supabase Auth", "AI-Assisted Development", "Deployment Configuration"],
    color: "violet",
  },
];

export const skillGroups = [
  {
    label: "Finance and Research",
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
    label: "Finance Systems and Compliance",
    icon: "Database",
    skills: [
      "SAP FICO",
      "SAP ERP 6.0",
      "Tax and Compliance",
      "Accounts Finalization",
      "GST / TDS / ROC Filings",
      "ERP Systems",
    ],
  },
  {
    label: "AI and Workflow Automation",
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
    label: "Tools and Technology",
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
    label: "Collaboration",
    icon: "Users",
    skills: ["Zoom", "Slack", "Microsoft Teams", "Notion", "Remote Collaboration"],
  },
];

export const education = [
  {
    degree: "MBA Finance",
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
    degree: "CA Inter Group I",
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
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg", year: "2025" },
  { name: "Bloomberg Finance Fundamentals", issuer: "Bloomberg", year: "2025" },
  { name: "The Complete Investment Banking Course 2025", issuer: "Udemy", year: "2025" },
  { name: "NISM Research Analyst Series XV", issuer: "NISM", year: "Feb 2025" },
  { name: "SAP Certified Application Associate", issuer: "SAP", year: "Nov 2021" },
];

export const resumeVersions = [
  {
    id: "investment-research",
    title: "Investment and Equity Research",
    roles: ["Equity Research Analyst", "Investment Analyst", "Valuation Analyst", "Research Associate", "Financial Research Analyst"],
    summary: "Finance-focused resume for roles that need valuation, stock research, market analysis, and AI-enabled research exposure.",
    strengths: [
      "Buy-side equity research for a Rs.350+ crore AUM advisory firm",
      "DCF, comparable company analysis, sector research, and Bloomberg exposure",
      "LLM-based investor sentiment research across Indian and US markets",
    ],
    pdf: "/resumes/Adarsh_Shinde_Resume_Investment_Equity_Research_final.pdf",
    color: "cyan",
    icon: "TrendingUp",
  },
  {
    id: "sap-fico",
    title: "SAP FICO and Finance Systems",
    roles: ["SAP FI Consultant", "SAP FICO Consultant", "ERP Finance Consultant", "Finance Systems Analyst", "SAP Business Analyst"],
    summary: "Systems-focused resume for roles that need SAP FI knowledge, finance process understanding, UAT, go-live support, and ERP problem-solving.",
    strengths: [
      "200+ SAP FI incidents and configuration requests resolved",
      "GL, Taxation, PCA, Cost Objects, Cost Center, and Project Systems exposure",
      "UAT, cutover, go-live, SOPs, KT, and cross-functional delivery experience",
    ],
    pdf: "/resumes/Adarsh_Shinde_Resume_SAP_FICO_Consulting_final.pdf",
    color: "teal",
    icon: "Database",
  },
  {
    id: "core-finance",
    title: "Core Finance and Compliance",
    roles: ["Finance Analyst", "FP&A Analyst", "Accounts", "MIS", "Tax", "Compliance", "Finance Operations"],
    summary: "Traditional finance resume for roles that need accounting, compliance, reporting, reconciliation, and finance operations experience.",
    strengths: [
      "Financial statements, accounts finalization, and audit support",
      "GST, TDS, ROC filings, tax audit reports, and statutory compliance",
      "150+ clients handled across accounts, tax, reconciliation, and reporting",
    ],
    pdf: "/resumes/Adarsh_Shinde_Resume_Core_Finance_final.pdf",
    color: "gold",
    icon: "BookOpen",
  },
  {
    id: "finance-ai",
    title: "Finance x AI and Automation",
    roles: ["Fintech Analyst", "AI Finance Analyst", "Finance Automation Analyst", "Product Analyst", "Business Analyst"],
    summary: "Hybrid resume for roles that need finance domain knowledge with AI-assisted workflows, automation, data analysis, and digital execution.",
    strengths: [
      "LLM-based investor sentiment analysis using 148,000+ stock-day observations",
      "Algorithmic trading workflow across NSE F&O and Delta Exchange crypto futures",
      "AI-assisted web product launch using Claude Code, Next.js, and Supabase",
    ],
    pdf: "/resumes/Adarsh_Shinde_Resume_Finance_AI_Automation_final.pdf",
    color: "violet",
    icon: "Cpu",
  },
];

export const profileTracks = [
  {
    id: "investment-research",
    title: "Investment Research",
    icon: "TrendingUp",
    brings: "Equity coverage, DCF and comps modelling, Bloomberg, and AI-powered sentiment research.",
    roles: ["Equity Research Analyst", "Investment Analyst", "Valuation Analyst", "Research Associate"],
    resumeId: "investment-research",
    color: "cyan",
  },
  {
    id: "sap-finance",
    title: "SAP Finance Systems",
    icon: "Database",
    brings: "SAP FICO configuration, ERP finance consulting, UAT, go-live, and process documentation.",
    roles: ["SAP FI Consultant", "SAP FICO Consultant", "ERP Finance Consultant", "Finance Systems Analyst"],
    resumeId: "sap-fico",
    color: "teal",
  },
  {
    id: "core-finance",
    title: "Core Finance",
    icon: "BookOpen",
    brings: "Accounts finalization, tax compliance, statutory audit, GST/TDS/ROC, and 150+ client experience.",
    roles: ["Finance Analyst", "FP&A Analyst", "Tax and Compliance", "Finance Operations"],
    resumeId: "core-finance",
    color: "gold",
  },
  {
    id: "finance-ai",
    title: "Finance x AI Automation",
    icon: "Cpu",
    brings: "AI-enabled research workflows, algorithmic systems, Claude Code-assisted product delivery, and automation.",
    roles: ["Fintech Analyst", "AI Finance Analyst", "Business Analyst", "Product Analyst"],
    resumeId: "finance-ai",
    color: "violet",
  },
];
