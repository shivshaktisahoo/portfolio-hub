export type ProjectStatus = 'live' | 'in-development' | 'planned'

export interface Project {
  title: string
  blurb: string
  tech: string[]
  liveUrl: string | null
  repoUrl: string | null
  status: ProjectStatus
  /** If set, the hub pings `${liveUrl}/api/health/` to show a live/asleep badge. */
  healthCheck: boolean
}

export const projects: Project[] = [
  {
    title: 'SaaS Starter Kit',
    blurb:
      'A multi-tenant auth/RBAC foundation: JWT auth, server-enforced role-based access control, and async invite processing with Celery/Redis. Try it live as any of four roles.',
    tech: ['Django REST Framework', 'JWT', 'PostgreSQL', 'Celery/Redis', 'Vue 3', 'Tailwind'],
    liveUrl: null,
    repoUrl: null,
    status: 'in-development',
    healthCheck: true,
  },
  {
    title: 'Logistics Shipment Tracker',
    blurb:
      'Async shipment tracking and bulk document operations, mirroring real CargoWise-integration and notification-pipeline work.',
    tech: ['Django REST Framework', 'Celery/Redis', 'PostgreSQL', 'Vue 3'],
    liveUrl: null,
    repoUrl: null,
    status: 'planned',
    healthCheck: false,
  },
  {
    title: 'AI Medical Chatbot',
    blurb: 'An LLM-powered assistant that reasons over patient-described symptoms and responds with voice.',
    tech: ['Python', 'LLM APIs', 'Prompt engineering'],
    liveUrl: null,
    repoUrl: null,
    status: 'planned',
    healthCheck: false,
  },
  {
    title: 'Bidding & Reporting Dashboard',
    blurb: 'Analytics and KPI dashboards for operational decision-making, mirroring real bidding-app and reporting-API work.',
    tech: ['Django REST Framework', 'PostgreSQL', 'Vue 3', 'Charts'],
    liveUrl: null,
    repoUrl: null,
    status: 'planned',
    healthCheck: false,
  },
]
