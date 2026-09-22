<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useLiveStatus } from '@/composables/useLiveStatus'
import { projects, type ProjectStatus } from '@/data/projects'
import { Circle, ExternalLink, Github, Loader2 } from 'lucide-vue-next'

const liveStatus = useLiveStatus(projects)

const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  'in-development': 'In development',
  planned: 'Planned',
}

const statusVariant: Record<ProjectStatus, 'success' | 'warning' | 'outline'> = {
  live: 'success',
  'in-development': 'warning',
  planned: 'outline',
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="border-b border-border">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <div class="flex items-center gap-2 text-sm font-semibold">
          <div class="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            S
          </div>
          Shiv Shakti Sahoo
        </div>
        <a href="https://github.com/shivshaktisahoo" target="_blank" rel="noreferrer">
          <Button variant="outline" size="sm">
            <Github class="size-4" />
            GitHub
          </Button>
        </a>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <section class="space-y-4 text-center">
        <Badge variant="secondary">Project Portfolio</Badge>
        <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">
          Backend-focused engineer, <span class="text-primary">full-stack showcase.</span>
        </h1>
        <p class="mx-auto max-w-2xl text-lg text-muted-foreground">
          Four production-shaped projects — each live and clickable, none of them a mockup. Built
          with Django REST Framework, Celery/Redis, Vue 3, and LLM integrations.
        </p>
      </section>

      <Separator class="my-12" />

      <section class="grid gap-6 sm:grid-cols-2">
        <Card v-for="project in projects" :key="project.title" class="flex flex-col">
          <CardHeader>
            <div class="flex items-start justify-between gap-2">
              <CardTitle>{{ project.title }}</CardTitle>
              <Badge :variant="statusVariant[project.status]" class="shrink-0">
                {{ statusLabel[project.status] }}
              </Badge>
            </div>
            <CardDescription>{{ project.blurb }}</CardDescription>
          </CardHeader>
          <CardContent class="flex-1">
            <div class="flex flex-wrap gap-1.5">
              <Badge v-for="tech in project.tech" :key="tech" variant="outline">{{ tech }}</Badge>
            </div>
          </CardContent>
          <CardFooter class="flex items-center gap-2">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noreferrer" class="flex-1">
              <Button class="w-full">
                <ExternalLink class="size-4" />
                View live demo
              </Button>
            </a>
            <Button v-else class="flex-1" disabled>Coming soon</Button>

            <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon" title="View source">
                <Github class="size-4" />
              </Button>
            </a>

            <span
              v-if="project.healthCheck && project.liveUrl"
              class="flex items-center gap-1 text-xs text-muted-foreground"
              :title="liveStatus[project.title]"
            >
              <Loader2 v-if="liveStatus[project.title] === 'checking'" class="size-3 animate-spin" />
              <Circle
                v-else
                class="size-2.5"
                :class="liveStatus[project.title] === 'live' ? 'fill-success text-success' : 'fill-warning text-warning'"
              />
            </span>
          </CardFooter>
        </Card>
      </section>
    </main>
  </div>
</template>
