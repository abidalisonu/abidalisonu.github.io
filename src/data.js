// All site content lives here. Edit this file to update the portfolio;
// the components only handle layout.

export const profile = {
  name: 'Abid Ali',
  role: 'Senior Full-Stack Engineer',
  stack: 'Laravel, Symfony and Vue.js',
  statement:
    'I build web platforms that keep working when parts of them fail: carrier-grade Wi-Fi access, SaaS products and real-time dashboards, across 10 years of shipping PHP and Vue.js in production.',
  location: 'Dubai, UAE (UTC+4)',
  availability: 'Open to remote roles worldwide',
  email: 'abidalixonu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abid-ali-650940152',
  github: 'https://github.com/abidalisonu',
  cv: '/Abid_Ali_Resume.pdf',
}

export const highlights = [
  { value: '10 yrs', label: 'shipping PHP and Vue.js in production' },
  { value: '10+', label: 'SaaS products delivered for international clients' },
  { value: '5,000+', label: 'active users on an EdTech platform I led' },
]

// Case studies. Keep client names generic and never include internal
// code, documents or real customer data.
export const work = [
  {
    id: 'piap',
    title: 'Geo-redundant public Wi-Fi platform',
    context: 'Ezelink, for a national telecom operator',
    period: '2025 – now',
    tech: ['Laravel', 'Symfony', 'Vue.js', 'MySQL', 'Redis', 'SMPP', 'REST'],
    problem:
      'The platform behind public Wi-Fi login ran from a single site. If that site went down, every hotspot sensor lost its connection to the core and users could not sign in.',
    approach: [
      'Moved to an active-active, multi-site design where every site serves sensor traffic on its own, with no stretched database cluster and no global load balancer.',
      'Sensors send keepalives to all known sites in parallel and pick the healthiest one, so failover happens without manual steps.',
      'Cross-site consistency comes from an application-level sync layer with versioned config, so a sensor never accepts an older config from a site that has not caught up.',
      'Config writes go through a single active admin site; others redirect clients there, which keeps sensor identities conflict-free.',
      'SMS one-time-password login retries the same request ID on the next site, so a site outage does not interrupt sign-in.',
    ],
    outcome:
      'Adding a site becomes a configuration step, not a redesign, and a site-level failure no longer stops user logins.',
    diagram: true,
  },
  {
    id: 'nms',
    title: 'Network monitoring dashboard',
    context: 'Ezelink',
    period: '2025 – now',
    tech: ['Vue.js', 'REST', 'Java APIs', 'Charts'],
    problem:
      'Operations teams needed one place to see device health, metrics and alerts across the network, served by an existing Java backend.',
    approach: [
      'Built the full Vue.js frontend and integrated it with the Java backend REST APIs.',
      'Designed views for device health, live metrics and alerting that hold up with many devices on screen.',
      'Delivered UI improvements across several other Ezelink products along the way.',
    ],
    outcome: 'A single web console for monitoring the network, built frontend-first on top of existing services.',
  },
  {
    id: 'edtech',
    title: 'School platform with AI automation',
    context: 'Pace International School',
    period: '2022 – 2024',
    tech: ['Laravel', 'Vue.js', 'WebSockets', 'OpenAI API', 'MySQL'],
    problem:
      'A growing school platform was slowing down, and staff spent hours writing routine administrative content by hand.',
    approach: [
      'Led development and profiled the slowest paths, then fixed queries and caching.',
      'Added real-time collaboration over WebSockets and analytics dashboards.',
      'Built OpenAI-powered automation for repetitive admin writing.',
      'Mentored developers and introduced code reviews and shared engineering practices.',
    ],
    outcome: '25% faster application for 5,000+ active users, and 40% less time spent generating admin content.',
  },
  {
    id: 'saas',
    title: 'SaaS delivery team lead',
    context: 'Interactive Tech Solutions',
    period: '2021 – 2022',
    tech: ['Laravel', 'REST', 'Git', 'CI/CD'],
    problem: 'A six-person team was delivering many client SaaS apps, each with its own way of branching, testing and deploying.',
    approach: [
      'Standardized Git workflows, CI/CD pipelines and deployment practice across every project.',
      'Designed reusable Laravel architecture and backend components the team could share between apps.',
    ],
    outcome: '10+ SaaS applications shipped for international clients across several time zones.',
  },
]

export const experience = [
  { role: 'Senior Full-Stack Engineer', company: 'Ezelink', place: 'Dubai, UAE', period: 'Jan 2025 – Present' },
  { role: 'Lead Full-Stack Developer', company: 'Pace International School', place: 'Sharjah, UAE', period: 'Oct 2022 – Nov 2024' },
  { role: 'Lead Laravel Developer', company: 'Interactive Tech Solutions', place: 'Lahore, Pakistan', period: 'Apr 2021 – Sep 2022' },
  { role: 'PHP Laravel Developer', company: 'Jobesk', place: 'Lahore, Pakistan', period: 'Jun 2020 – Apr 2021' },
  { role: 'Laravel Developer', company: 'Histone Solutions', place: 'Rawalpindi, Pakistan', period: 'Nov 2018 – Apr 2020' },
  { role: 'PHP Web Developer', company: 'Karigar Web Solutions', place: 'Sialkot, Pakistan', period: 'Nov 2016 – Jun 2018' },
]

export const skills = [
  { group: 'Backend', items: ['PHP', 'Laravel', 'Symfony', 'Node.js', 'Express.js', 'Python'] },
  { group: 'Frontend', items: ['Vue.js', 'React.js', 'JavaScript (ES6+)', 'Tailwind CSS'] },
  { group: 'Data', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'Infrastructure', items: ['AWS', 'Docker', 'Nginx', 'GitHub Actions', 'Jenkins'] },
  { group: 'Design', items: ['REST APIs', 'WebSockets', 'Microservices', 'System design'] },
  { group: 'Quality and AI', items: ['PHPUnit', 'Pest', 'Claude Code', 'GitHub Copilot', 'Cursor', 'OpenAI API'] },
]
