export const profile = {
  name: "Saroosh Javed",
  firstName: "Saroosh",
  lastName: "Javed",
  monogram: "SJ",
  role: "Full Stack Developer & Mobile Application Developer",
  headline:
    "Websites, Android apps, and AI tools, designed and built so people can use them.",
  location: "Lahore, Pakistan",
  email: "saroosh2005@gmail.com",
  phone: "+92 3120044419",
  phoneHref: "tel:+923120044419",
  linkedin: "https://www.linkedin.com/in/saroosh-javed-670414298",
  github: "https://github.com/Saroosh05",
  cv: "/Saroosh-Javed-CV.pdf",
  cvFileName: "Saroosh-Javed-CV.pdf",
  languages: ["English", "Urdu"],
  availability: "Available for new projects",
  summary:
    "I build web products, native Android apps, and applied AI. At EBiz Logics I worked on a web project until it was finished, then the role ended. I later assisted on Database Management at UET Lahore. I take a brief through to a working product: structure, interface, and the systems underneath.",
}

export const nav = [
  { id: "about", label: "About", no: "01" },
  { id: "work", label: "Work", no: "02" },
  { id: "research", label: "Research", no: "03" },
  { id: "experience", label: "Experience", no: "04" },
  { id: "skills", label: "Skills", no: "05" },
  { id: "education", label: "Education", no: "06" },
  { id: "contact", label: "Contact", no: "07" },
] as const

export const stats = [
  { value: "5", label: "Credentials" },
  { value: "3", label: "Professional roles" },
  { value: "2", label: "Research papers" },
  { value: "3+", label: "Years building" },
]

export const services = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    tag: "01",
    copy: "A complete web product: database, API, auth, and interface in React, Next.js, or .NET.",
    points: ["React / Next.js / Tailwind", "ASP.NET Core & Node", "Auth, CRUD, role systems"],
  },
  {
    id: "ai",
    title: "Applied AI & RAG",
    tag: "02",
    copy: "Chat, search, and automation trained on your documents. You can explain what it does and where the answers come from.",
    points: ["RAG & pgvector", "OpenAI / Gemini", "Chatbots & widgets"],
  },
  {
    id: "cv",
    title: "Computer Vision",
    tag: "03",
    copy: "Detection, segmentation, and custom CNNs for real diagnosis, with accuracy you can measure.",
    points: ["TensorFlow / Keras", "OpenCV & U-Net", "Custom multi-crop CNN"],
  },
  {
    id: "mobile",
    title: "Native Android",
    tag: "04",
    copy: "Kotlin apps with accounts, groups, calendars, and reminders that fire on time, built for daily use.",
    points: ["Kotlin & Android SDK", "Workers & reminders", "Firebase / local persistence"],
  },
  {
    id: "enterprise",
    title: "Business Web Portals",
    tag: "05",
    copy: "Staff portals and internal tools with sign-in, roles, and SQL-backed records.",
    points: [".NET portals", "Role-based access", "SQL-backed operations"],
  },
  {
    id: "systems",
    title: "Systems & Databases",
    tag: "06",
    copy: "Storage, query layers, and parallel retrieval when the product needs a serious data layer.",
    points: ["Custom GDBMS", "Pthreads / OpenMP / MPI", "ACID-style transactions"],
  },
]

export const experience = [
  {
    id: "ta",
    role: "Teaching Assistant, Database Management",
    org: "University of Engineering and Technology, Lahore",
    period: "Jan 2025 to Jun 2025",
    location: "Lahore, Pakistan",
    summary:
      "Assisted on Database Management at UET Lahore, supporting students with schema design, SQL, and course work.",
    highlights: [
      "Helped with relational modeling, query design, and practical DBMS exercises.",
      "The same approach later used in from-scratch database products.",
    ],
    tags: ["SQL", "DBMS", "Teaching Assistant", "UET Lahore"],
  },
  {
    id: "odoo",
    role: "Trainee, Odoo Web Development",
    org: "Ustadam, University of Engineering and Technology, Lahore",
    period: "May 2024 to Aug 2024",
    location: "Lahore, Pakistan",
    summary:
      "A learning stretch with Odoo at Ustadam on UET’s main campus, inside an existing ERP.",
    highlights: [
      "Followed how models, views, and business logic sit together in a live Odoo setup.",
      "Gained familiarity with the framework while supporting the Ustadam team.",
    ],
    tags: ["Odoo", "Python", "Learning", "Web"],
  },
  {
    id: "ebiz",
    role: "Web Developer",
    org: "EBiz Logics",
    period: "May 2023 to May 2024",
    location: "Lahore, Pakistan",
    summary:
      "Project-based web development. I built production websites for a defined project. When that project ended, so did the role.",
    highlights: [
      "Production sites across HTML, CSS, JavaScript, and related stacks.",
      "Worked to project completion rather than an ongoing retainer.",
    ],
    tags: ["Web", "JavaScript", "PHP", "Project work"],
  },
]

export const research = [
  {
    id: "crop",
    title: "AI-Based Crop Disease Prediction for Farmers",
    authors: ["Saroosh Javed", "Muhammad Waseem", "Muhammad Kamran"],
    year: "2025",
    status: "Manuscript · unpublished",
    metric: "85.28% test accuracy",
    summary:
      "A custom CNN for crop disease across wheat, rice, and maize. Mixed datasets were cleaned, augmented, and regularized to reach 85.28% test accuracy.",
    tags: ["CNN", "Agriculture", "Deep Learning"],
    pdf: "/papers/AI-Based-Crop-Disease-Prediction-for-Farmers.pdf",
    fileName: "AI-Based-Crop-Disease-Prediction-for-Farmers.pdf",
  },
  {
    id: "parallel",
    title: "Load-Balanced Parallel Information Retrieval Using Pthreads, OpenMP, and MPI",
    authors: ["Saroosh Javed", "Waqas Ali"],
    year: "2026",
    status: "Manuscript · unpublished",
    metric: "21.50× speedup",
    summary:
      "Parallel information-retrieval pipelines with Pthreads, OpenMP, MPI, and hybrids. Better scheduling cut imbalance, up to 21.50× speedup with Pthreads.",
    tags: ["HPC", "MPI", "OpenMP", "Pthreads"],
    pdf: "/papers/Load-Balanced-Parallel-Information-Retrieval.pdf",
    fileName: "Load-Balanced-Parallel-Information-Retrieval.pdf",
  },
]

export type ProjectCategory = "All" | "AI" | "Web" | "Mobile" | "Systems" | "Security"

export const projectFilters: ProjectCategory[] = [
  "All",
  "AI",
  "Web",
  "Mobile",
  "Systems",
  "Security",
]

export const projects = [
  {
    id: "conversa",
    title: "Conversa",
    subtitle: "AI Chatbot Builder",
    kind: "Full-Stack SaaS",
    category: ["AI", "Web"] as ProjectCategory[],
    featured: true,
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "pgvector",
      "Payload CMS",
      "Python",
      "OpenAI",
      "RAG",
      "Vercel",
    ],
    summary:
      "Train a chatbot on your own documents, review what it learns, then embed it on any site.",
    details: [
      "Auth, Postgres, and vector search on Supabase.",
      "Chunk review before knowledge is published.",
      "Embeddable widget so a trained assistant can sit on any site.",
    ],
    cta: "Launching soon",
  },
  {
    id: "autoslides",
    title: "AutoSlides",
    subtitle: "AI Presentation Generator",
    kind: "Full-Stack Web App",
    category: ["AI", "Web"] as ProjectCategory[],
    featured: true,
    stack: ["React.js", "Flask", "PyPDF2", "Axios", "OpenAI", "Google Gemini Pro"],
    summary:
      "Turns research PDFs into presentation slides, keeping the sections that matter.",
    details: [
      "Built for research documents rather than generic slide decks.",
      "AI completion of missing proposal sections with Gemini.",
      "Built under Agile Scrum at IDEAL Labs.",
    ],
    href: "https://www.linkedin.com/posts/saroosh-javed-670414298_ideallabs-softwareprojectmanagement-openhouseevaluation-activity-7415374224502022145-fUoU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf237QBQQfJn-OUKlGeZLLLQ9i8ecgkKJA",
    cta: "View the project",
  },
  {
    id: "crop-app",
    title: "Crop Disease Prediction",
    subtitle: "Leaf Diagnosis for Farmers",
    kind: "Computer Vision",
    category: ["AI"] as ProjectCategory[],
    featured: true,
    stack: ["Python", "TensorFlow/Keras", "U-Net", "CNN", "OpenCV", "Flask"],
    summary:
      "Leaf diagnosis for farmers: detect, segment, classify, then upload a photo in a simple Flask app.",
    details: [
      "Three-stage pipeline: detect, segment, classify.",
      "Severity estimation from U-Net masks (mild / moderate / severe).",
      "20,000+ training images merged from multiple crop datasets.",
    ],
    href: "https://www.linkedin.com/posts/saroosh-javed-670414298_project-poster-activity-7477924432389365760-xL5B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf237QBQQfJn-OUKlGeZLLLQ9i8ecgkKJA",
    cta: "View the project",
  },
  {
    id: "gdbms",
    title: "Custom Graph Database",
    subtitle: "GDBMS from scratch",
    kind: "Databases",
    category: ["Systems"] as ProjectCategory[],
    featured: true,
    stack: ["Python", "Binary files", "B+ trees", "Cypher-like parser", "Tkinter", "NetworkX"],
    summary:
      "A graph database written from scratch: binary storage, B+ trees, Cypher-style queries, and a visual explorer.",
    details: [
      "Storage engine written against binary files rather than an existing DBMS.",
      "B+ tree indexes for query performance.",
      "Cypher-inspired language and NetworkX visualization.",
    ],
    href: "https://github.com/Saroosh05/Custom-GDMS",
    cta: "Open on GitHub",
  },
  {
    id: "chores",
    title: "Home Chores Automation",
    subtitle: "Family Task Manager",
    kind: "Android App",
    category: ["Mobile"] as ProjectCategory[],
    featured: false,
    stack: ["Kotlin", "Android", "Notifications", "Background workers"],
    summary:
      "A family chore app with groups, a calendar, points, and reminders that fire on time.",
    details: [
      "Households join with an invite code.",
      "Assignable tasks with points.",
      "Reminders via notifications and background workers.",
    ],
    href: "https://github.com/Saroosh05/11-CS-23-B-MAD/tree/master/Home_Chores_Automation_App",
    cta: "Open on GitHub",
    downloadHref: "/apps/Home-Chores-Automation.apk",
    downloadName: "Home-Chores-Automation.apk",
    downloadLabel: "Download",
  },
  {
    id: "eduguardian",
    title: "EduGuardian",
    subtitle: "Anti-Cheating Exam System",
    kind: "Browser Security",
    category: ["Security", "Web"] as ProjectCategory[],
    featured: false,
    stack: ["HTML", "CSS", "JavaScript", "Chrome Extension APIs", "Python native messaging"],
    summary:
      "Keeps a Colab exam honest: locks tabs, blocks copy-paste, and logs activity for invigilators.",
    details: [
      "Chrome extension plus a native Python host.",
      "Locks the exam surface: tabs, clipboard, stray windows.",
      "Activity log for invigilators after the session.",
    ],
    href: "https://github.com/Saroosh05/EduGuardian",
    cta: "Open on GitHub",
  },
  {
    id: "google-replica",
    title: "Google Replica",
    subtitle: "Offline Search Platform",
    kind: "Desktop Database App",
    category: ["Systems"] as ProjectCategory[],
    featured: false,
    stack: ["C#", "WinForms", "SQL Server", "Layered BL/DL", "OOP"],
    summary:
      "A desktop search client with accounts, history, favorites, downloads, and simple mail.",
    details: [
      "Layered business and data layers over SQL Server.",
      "Search corpus built from user-authored sites.",
      "Mail module with inbox, sent, and drafts.",
    ],
    href: "https://www.linkedin.com/posts/saroosh-javed-670414298_oop-googleinspiredproject-csharp-activity-7258401728390184960-g3vf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf237QBQQfJn-OUKlGeZLLLQ9i8ecgkKJA",
    cta: "View the project",
  },
  {
    id: "minimind",
    title: "MiniMind OS",
    subtitle: "Child-Friendly OS Prototype",
    kind: "Systems Simulation",
    category: ["Systems"] as ProjectCategory[],
    featured: false,
    stack: ["Python", "Tkinter"],
    summary:
      "An educational OS for young children, with processes and memory made visible, plus drawing, stories, and puzzles.",
    details: [
      "OS ideas made visible: processes, memory, scheduling.",
      "Sandboxed files and parental time limits.",
      "Play layer: drawing, stories, music, puzzles.",
    ],
    href: "https://github.com/Saroosh05/MiniMindOS",
    cta: "Open on GitHub",
  },
  {
    id: "ems",
    title: "Employee Management System",
    subtitle: "Role-Based Web Portal",
    kind: "ASP.NET Web App",
    category: ["Web"] as ProjectCategory[],
    featured: false,
    stack: ["ASP.NET Core Razor Pages", "C#", "SQL Server", "Layered BL/DL"],
    summary:
      "A staff portal with sign-in, roles, and record-keeping over SQL Server.",
    details: [
      "Session authentication with role-aware access.",
      "CRUD scoped to what each role is allowed to touch.",
      "Layered architecture over SQL Server.",
    ],
  },
  {
    id: "trichat",
    title: "TriChat",
    subtitle: "WhatsApp-like Messenger",
    kind: "Front-End + DSA",
    category: ["Web", "Systems"] as ProjectCategory[],
    featured: false,
    stack: ["HTML", "CSS", "JavaScript", "localStorage", "Graph", "Queue", "Tree", "Trie", "Hash table"],
    summary:
      "An offline messenger for one-to-one and group chat, with search, that runs without a server.",
    details: [
      "Graphs, queues, trees, tries, and hash tables as the product core.",
      "Persists in localStorage, with no backend database.",
      "1:1 and group chat with reply trees and trie search.",
    ],
    href: "https://www.linkedin.com/posts/saroosh-javed-670414298_dsa-uetlahore-trichat-activity-7276605107322896385-wq6E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf237QBQQfJn-OUKlGeZLLLQ9i8ecgkKJA",
    cta: "View the project",
  },
]

export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    items: ["C", "C++", "C#", "Python", "JavaScript", "TypeScript", "SQL", "Kotlin", "PHP", "HTML", "CSS"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js", "Redux", "Bootstrap", "WinForms"],
  },
  {
    id: "backend",
    title: "Backend",
    items: [".NET Core", "ASP.NET", "Node.js", "Express.js", "RESTful APIs", "Firebase"],
  },
  {
    id: "data",
    title: "Databases",
    items: ["SQL", "MongoDB", "PostgreSQL", "SharedPreferences", "Firebase", "Supabase"],
  },
  {
    id: "ai",
    title: "AI & Automation",
    items: [
      "Computer Vision",
      "CNNs",
      "Image Classification",
      "Image Segmentation",
      "OpenCV",
      "U-Net",
      "TensorFlow/Keras",
      "LLMs",
      "Generative AI",
      "Prompt Engineering",
      "AI API Integration",
      "RAG",
      "Chatbot Development",
      "AI Automation",
      "Model Training & Evaluation",
    ],
  },
  {
    id: "concepts",
    title: "Concepts",
    items: ["Data Structures and Algorithms", "Object-Oriented Programming", "Debugging", "Problem Solving"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    items: ["Git & GitHub", "GitLab", "Visual Studio", "VS Code", "Android Studio", "Jira", "Vercel"],
  },
]

export const education = [
  {
    id: "bs",
    degree: "Bachelor of Computer Science",
    school: "University of Engineering and Technology, Lahore",
    period: "2023 to 2027",
    note: "Current · Main Campus",
    current: true,
  },
  {
    id: "ics",
    degree: "Intermediate in Computer Science",
    school: "Kinnaird College For Women, Lahore",
    period: "2021 to 2023",
    note: "College",
    current: false,
  },
]

export const achievements = [
  {
    title: "Odoo Web Development",
    org: "Ustadam, UET Main Campus",
    kind: "Certification",
  },
  {
    title: "Database & SQL",
    org: "Great Learning",
    kind: "Certification",
  },
  {
    title: "MongoDB Certification",
    org: "Great Learning",
    kind: "Certification",
  },
  {
    title: "ITEC 2024",
    org: "Quiz Competition Participant",
    kind: "Achievement",
  },
  {
    title: "Codex Competition",
    org: "Problem Solving Competition",
    kind: "Achievement",
  },
]

export const inquiryTypes = [
  "New website or web app",
  "Android app",
  "AI, chatbot, or computer vision",
  "Internal tools or a staff portal",
  "Something else",
]

export const marquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Kotlin",
  ".NET Core",
  "Python",
  "RAG",
  "TensorFlow",
  "Supabase",
  "PostgreSQL",
  "OpenCV",
  "U-Net",
  "ASP.NET",
  "Android",
  "MPI",
  "OpenMP",
]
