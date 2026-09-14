export const SITE_CONFIG = {
  name: "Farhad Rashid",
  title: "GoHighLevel Specialist",
  secondaryTitle: "Funnels • Automations • CRM • AI",
  description: "I build and optimize GoHighLevel systems that help businesses capture leads, automate follow-ups, manage opportunities, and improve their client journey.",
  ogTitle: "Farhad Rashid | GoHighLevel Specialist",
  ogDescription: "GoHighLevel funnels, automation, CRM, AI systems, integrations and client onboarding.",
  email: "farhadrashid829@gmail.com",
  phone: "+923252466554",
  socials: {
    linkedin: "https://linkedin.com/in/#", // Pending real URL
    github: "https://github.com/#" // Pending real URL
  }
};

export const STATS = [
  { value: "1+", label: "Year Experience", pending: true },
  { value: "30+", label: "Projects Completed", pending: true },
  { value: "20+", label: "Automations Built", pending: true },
  { value: "10+", label: "GHL Systems", pending: true },
];

export const SERVICES = [
  {
    title: "Funnel Building",
    description: "Lead generation funnels, sales funnels, booking funnels, application funnels, checkout flows, landing pages, forms and surveys.",
    icon: "funnel"
  },
  {
    title: "Workflow Automation",
    description: "Lead follow-up, email automation, SMS automation, appointment reminders, internal notifications, pipeline updates, tagging, conditional logic and nurture sequences.",
    icon: "workflow"
  },
  {
    title: "CRM & Opportunities",
    description: "Pipeline creation, opportunity stages, lead management, tags, custom fields, assignment logic, opportunity automation and CRM organization.",
    icon: "database"
  },
  {
    title: "A2P & Phone Setup",
    description: "GoHighLevel phone setup, A2P registration support, messaging compliance setup and SMS configuration.",
    icon: "phone"
  },
  {
    title: "Client Onboarding",
    description: "New client onboarding systems, forms, surveys, pipeline setup, automated welcome sequences, task notifications and onboarding workflows.",
    icon: "user-plus"
  },
  {
    title: "Reviews & Reputation",
    description: "Review request systems, review follow-ups, customer feedback workflows and reputation management automation.",
    icon: "star"
  },
  {
    title: "Referral Systems",
    description: "Referral partner pipelines, referral tracking, partner follow-ups, tagging, notifications and automated referral workflows.",
    icon: "share-2"
  },
  {
    title: "AI Bots & Voice Agents",
    description: "GoHighLevel Conversation AI, AI lead qualification, website chatbots, AI follow-up and voice AI agent implementations.",
    icon: "bot"
  },
  {
    title: "Migration & Integration",
    description: "Moving systems into GoHighLevel, importing contacts, rebuilding funnels and workflows, and connecting third-party tools with GHL.",
    icon: "arrow-right-left"
  }
];

export const SKILLS = {
  "Funnels": [
    "Landing Pages", "Lead Generation Funnels", "Sales Funnels", "Booking Funnels", "Checkout Funnels", "Forms", "Surveys"
  ],
  "Automation": [
    "Workflows", "Email Automation", "SMS Automation", "Triggers", "Conditions", "If/Else Logic", "Tags", "Custom Fields", "Follow-Up Sequences"
  ],
  "CRM": [
    "Contacts", "Opportunities", "Pipelines", "Pipeline Stages", "Lead Assignment", "Custom Fields", "Tags", "Smart Lists"
  ],
  "Communication": [
    "Email", "SMS", "Phone", "Calendars", "Appointment Reminders", "Internal Notifications"
  ],
  "AI": [
    "Conversation AI", "AI Lead Qualification", "AI Chatbots", "Voice AI Agents", "AI Follow-Up"
  ],
  "Systems": [
    "A2P Registration", "Client Onboarding", "GHL Migration", "Third-Party Integrations", "Review Systems", "Referral Systems"
  ]
};

export const PROJECTS = [
  {
    id: "dental-lead-gen",
    title: "Dental Lead Generation Systems",
    industry: "Healthcare / Dental",
    description: "GoHighLevel funnels and automation systems for dental businesses.",
    features: ["Lead qualification", "Forms", "Surveys", "CRM pipelines", "Opportunity management", "Appointment workflows", "Email/SMS follow-up", "AI chat widget integrations"],
    outcome: "Streamlined patient booking and follow-up.",
    link: "#" // Pending real link
  },
  {
    id: "private-mentorship",
    title: "Private Mentorship Funnel",
    industry: "Coaching / Consulting",
    description: "GoHighLevel funnel and automation system for a private mentorship offer.",
    features: ["Checkout", "Lead capture", "Appointment booking", "Email/SMS confirmation", "Appointment reminders", "Abandoned checkout automation", "Post-appointment follow-up", "Pipeline management"],
    outcome: "Automated onboarding for high-ticket clients.",
    link: "#"
  },
  {
    id: "reclaim-your-health",
    title: "Reclaim Your Health",
    industry: "Health & Wellness",
    description: "GoHighLevel funnel and AI automation implementation.",
    features: ["Funnel setup", "Conversation AI", "Knowledge base configuration", "Lead interaction", "Client-requested AI behavior", "Funnel and automation updates"],
    outcome: "Improved lead engagement via AI.",
    link: "#"
  },
  {
    id: "service-business",
    title: "Service Business Automation",
    industry: "Local Services",
    description: "Showcase a general service-business GHL implementation mapping the complete customer journey.",
    features: ["Lead capture", "Qualification", "Pipeline", "Follow-up", "Appointment", "Review Request"],
    outcome: "End-to-end automated customer journey.",
    link: "#"
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding System",
    industry: "Agency / B2B",
    description: "Showcase a GHL onboarding implementation.",
    features: ["Form/Survey", "Contact creation", "Pipeline", "Internal notification", "Welcome sequence", "Follow-up"],
    outcome: "Frictionless new client experience.",
    link: "#"
  }
];

export const WORKFLOWS = [
  {
    id: "new-lead",
    title: "New Lead Follow-Up",
    nodes: ["Form Submission", "Contact Created", "Tag Applied", "Opportunity Created", "Email/SMS Follow-Up", "Appointment CTA"]
  },
  {
    id: "appointment",
    title: "Appointment Automation",
    nodes: ["Appointment Booked", "Confirmation", "Reminder", "Internal Notification", "Appointment", "Follow-Up"]
  },
  {
    id: "abandoned-checkout",
    title: "Abandoned Checkout",
    nodes: ["Checkout Started", "No Purchase", "Wait", "Email", "SMS", "Follow-Up", "Purchase"]
  },
  {
    id: "lead-routing",
    title: "Lead Routing",
    nodes: ["New Lead", "Qualification", "Tagging", "Opportunity Created", "Pipeline Assignment", "Team Notification"]
  },
  {
    id: "review-request",
    title: "Review Request",
    nodes: ["Appointment Completed", "Wait", "Review Request", "Customer Feedback", "Review Link"]
  },
  {
    id: "referral-partner",
    title: "Referral Partner System",
    nodes: ["New Referral Lead", "Partner Tag", "Pipeline", "Qualification", "Partner Notification", "Referral Follow-Up"]
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding",
    nodes: ["New Client", "Onboarding Form", "Contact Update", "Pipeline Stage", "Internal Tasks", "Welcome Message", "Onboarding Follow-Up"]
  }
];

export const EXPERIENCE = [
  {
    role: "GoHighLevel Specialist",
    company: "Vezzur Agency",
    duration: "1+ Year",
    description: "Working on GoHighLevel client implementations involving funnels, workflow automation, CRM systems, pipelines, onboarding, integrations, AI systems, messaging setup, and ongoing troubleshooting.",
    responsibilities: [
      "Built and updated GoHighLevel funnels",
      "Created workflow automations",
      "Configured CRM pipelines and opportunities",
      "Set up forms, surveys and custom fields",
      "Built email and SMS automation",
      "Configured appointment systems",
      "Worked on A2P registration processes",
      "Built review and referral systems",
      "Implemented AI bots and AI integrations",
      "Worked with voice AI agent implementations",
      "Assisted with GoHighLevel migrations",
      "Connected and troubleshot third-party integrations",
      "Tested and optimized client workflows",
      "Implemented client-requested GHL updates"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Imran Malik",
    image: `${import.meta.env.BASE_URL}images/testimonials/c1-BZ59bRP5.jpg`,
    role: "Founder, Medicare Clinics",
    location: "London, UK",
    content: "He explains everything in plain language and never disappears mid-project.",
    rating: 5,
    isDemo: true
  },
  {
    id: 2,
    name: "Rachel Bennett",
    image: `${import.meta.env.BASE_URL}images/testimonials/c2-B3UlrVBw.jpg`,
    role: "Marketing Director",
    location: "Austin, TX",
    content: "Leads finally land in the right pipeline stage automatically. Honestly the smoothest handover I've had with a freelancer.",
    rating: 5,
    isDemo: true
  },
  {
    id: 3,
    name: "Marcus Bell",
    image: `${import.meta.env.BASE_URL}images/testimonials/c3-Cmd55gc1.jpg`,
    role: "Owner, Bell Property Group",
    location: "Atlanta, GA",
    content: "Communication was fast even across time zones.",
    rating: 5,
    isDemo: true
  },
  {
    id: 4,
    name: "Layla Haddad",
    image: `${import.meta.env.BASE_URL}images/testimonials/c4-DUn6OOgA.jpg`,
    role: "Co-founder, Glow Aesthetics",
    location: "Dubai, UAE",
    content: "He tuned the script with us until it sounded exactly like our brand.",
    rating: 5,
    isDemo: true
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Automation First",
    description: "I focus on reducing repetitive manual work through practical GoHighLevel workflows."
  },
  {
    title: "Organized Systems",
    description: "Funnels, pipelines, workflows and CRM systems should be structured and easy to manage."
  },
  {
    title: "Client-Focused Implementation",
    description: "I build according to the client's actual business process instead of forcing a generic automation setup."
  },
  {
    title: "Troubleshooting Mindset",
    description: "I test workflows, identify issues and work through problems until the system behaves as expected."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the business, offer, lead journey and requirements."
  },
  {
    step: "02",
    title: "Plan",
    description: "Map the funnel, CRM structure and automation logic."
  },
  {
    step: "03",
    title: "Build",
    description: "Build the funnel, workflows, pipelines, forms and integrations inside GoHighLevel."
  },
  {
    step: "04",
    title: "Test",
    description: "Test triggers, conditions, messages, opportunities and edge cases."
  },
  {
    step: "05",
    title: "Launch",
    description: "Deploy the system and make sure the client understands how it works."
  }
];
