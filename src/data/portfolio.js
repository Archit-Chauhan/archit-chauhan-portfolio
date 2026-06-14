// Single source of truth for all portfolio content.
// Edit values here — every section reads from this file, so the UI stays in sync.

export const profile = {
  name: 'Archit Chauhan',
  alias: 'arc',
  role: 'Full-stack engineer',
  tagline: 'Full-stack engineer — built end to end.',
  email: 'hey@arc.builds',
  location: 'India',
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Full-stack engineer',
  // headline rendered as [plain, accent, plain] — the middle part gets the indigo highlight
  headline: ['Web, mobile and cloud products, shipped ', 'end to end', '.'],
  sub: 'MERN · Flutter · .NET 10 · Azure. One year shipping plus three internships — I design, build and ship products that feel fast.',
  primaryCta: { label: 'View my work', href: '#work' },
  secondaryCta: { label: 'Book a call', href: '#contact' },
  stats: [
    { value: '15+', label: 'Projects' },
    { value: '4', label: 'Internships' },
    { value: '6', label: 'Stacks' },
  ],
  tech: ['React', 'Node', 'Flutter', '.NET 10', 'Solidity', 'Azure'],
  // Floating chip badges that hover over the hero mockup.
  chips: ['AWS Cloud', 'React Native', '.NET 10'],
}

export const about = {
  eyebrow: 'About',
  heading: "I'm Archit — I build products end to end.",
  paragraphs: [
    "I'm a full-stack engineer with one year of professional experience and three internships behind me. I work across the stack — MERN on the web, Flutter on mobile, .NET 10 and Azure on the backend — and I'm exploring Web3.",
    'I care about products that feel fast, look clean, and actually ship. Hand me a problem and I’ll take it from first commit to production.',
  ],
  stats: [
    { value: '15+', label: 'Projects' },
    { value: '4', label: 'Internships' },
    { value: '6', label: 'Stacks' },
  ],
  // Drives the navy "career dashboard" product-shot in the About section.
  metrics: {
    windowTitle: 'arc — career.metrics',
    kicker: 'Shipping velocity',
    value: '1yr + 3 internships',
    trend: 'compounding since 2023',
    stack: ['MERN', 'Flutter', '.NET 10', 'Azure', 'Web3'],
  },
  features: [
    { icon: 'web', geometry: 'aurora', title: 'Web', body: 'Responsive, accessible web apps.', tags: ['React', 'Next.js', 'Node'] },
    { icon: 'mobile', geometry: 'ember', title: 'Mobile', body: 'Cross-platform apps that feel native.', tags: ['Flutter', 'Dart'] },
    { icon: 'cloud', geometry: 'azure', title: 'Cloud', body: 'Shipped and scaled on Azure.', tags: ['Azure', 'Docker', 'CI/CD'] },
  ],
}

export const skills = {
  eyebrow: 'Toolkit',
  heading: 'A full-stack toolkit.',
  sub: 'Everything I reach for to design, build, ship and run products.',
  groups: [
    { icon: 'frontend', title: 'Frontend', tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Redux'] },
    { icon: 'backend', title: 'Backend', tags: ['Node.js', 'Express', '.NET 10', 'C#', 'REST', 'GraphQL'] },
    { icon: 'mobile', title: 'Mobile', tags: ['Flutter', 'React Native', 'Dart', 'Firebase'] },
    { icon: 'cloud', title: 'Cloud & DevOps', tags: ['Azure', 'AWS', 'Functions', 'Cosmos DB', 'Docker', 'CI/CD'] },
    { icon: 'data', title: 'Data', tags: ['MongoDB', 'PostgreSQL', 'Redis'] },
    { icon: 'web3', title: 'Web3', tags: ['Solidity', 'Ethers.js', 'Hardhat'] },
  ],
}

export const projects = {
  eyebrow: 'Selected work',
  heading: "Things I've shipped.",
  sub: 'Six projects across web, mobile, cloud and Web3.',
  items: [
    { name: 'NebulaCommerce', variant: 'commerce', description: 'Headless MERN e-commerce with Stripe payments and an admin dashboard.', tags: ['React', 'Node', 'MongoDB', 'Stripe'], href: '#' },
    { name: 'FlowBoard', variant: 'kanban', description: 'Real-time team kanban with WebSockets on Azure SignalR.', tags: ['MERN', 'Azure', 'WebSocket'], href: '#' },
    { name: 'PulseFit', variant: 'mobile', description: 'Cross-platform fitness app with offline sync.', tags: ['Flutter', 'Dart', 'Firebase'], href: '#' },
    { name: 'ChainVault', variant: 'web3', description: 'On-chain document notarization dApp.', tags: ['Solidity', 'Ethers.js', 'React'], href: '#' },
    { name: 'LedgerPay', variant: 'microservices', description: 'Invoicing & payments microservices on .NET 10 + Azure.', tags: ['.NET 10', 'C#', 'Azure'], href: '#' },
    { name: 'AuraUI', variant: 'library', description: 'Open-source React component library.', tags: ['React', 'TypeScript', 'OSS'], href: '#' },
  ],
}

export const experience = {
  eyebrow: 'The path',
  heading: "Where I've worked.",
  // Drives the "Currently shipping" spotlight card beside the timeline.
  spotlight: {
    status: 'Currently',
    role: 'Software Engineer',
    company: 'Velsof',
    meta: '2025 — Present · Remote, India',
    listHeading: "What I'm shipping",
    items: [
      'Full-stack MERN + .NET 10 features, first commit to production.',
      'Azure services & CI/CD pipelines keeping deploys boring.',
      'Exploring Web3 — on-chain notarization on the side.',
    ],
    stack: ['React', 'Node', '.NET 10', 'Azure', 'MongoDB'],
  },
  items: [
    { period: '2025 — Present', role: 'Software Engineer', company: 'Velsof', blurb: 'Full-stack MERN + .NET 10 on Azure; shipping features end to end.', current: true },
    { period: '2024', role: 'Flutter Developer Intern', company: 'Nimbus Apps', blurb: 'Built and shipped a cross-platform mobile app with offline sync.' },
    { period: '2024', role: 'Backend Intern · .NET / Azure', company: 'CloudForge', blurb: 'Designed REST microservices and CI/CD pipelines on Azure.' },
    { period: '2023', role: 'Web Developer Intern · MERN', company: 'PixelWorks', blurb: 'Built responsive React dashboards and Node APIs.' },
  ],
}

export const contact = {
  eyebrow: 'Say hello',
  heading: "Let's build something.",
  sub: "Open to freelance projects and full-time roles. Tell me what you're building.",
  fields: [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'What are you building?' },
  ],
  submitLabel: 'Send message',
}

export const socials = [
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:hey@arc.builds' },
]

export const footer = {
  legal: '© 2026 Archit Chauhan. Built with precision.',
}
