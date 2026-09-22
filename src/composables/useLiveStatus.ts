import { pingProjectHealth } from '@/lib/health'
import type { Project } from '@/data/projects'
import { onMounted, reactive } from 'vue'

export type LiveState = 'checking' | 'live' | 'asleep' | 'unknown'

/** Pings each health-checkable, deployed project on mount and tracks its live state. */
export function useLiveStatus(projects: Project[]) {
  const status = reactive<Record<string, LiveState>>({})

  for (const project of projects) {
    status[project.title] = project.healthCheck && project.liveUrl ? 'checking' : 'unknown'
  }

  onMounted(() => {
    for (const project of projects) {
      if (!project.healthCheck || !project.liveUrl) continue
      pingProjectHealth(project.liveUrl).then((ok) => {
        status[project.title] = ok ? 'live' : 'asleep'
      })
    }
  })

  return status
}
