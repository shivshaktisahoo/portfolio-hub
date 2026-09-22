<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'
import { badgeVariants } from './variants'

type BadgeVariants = VariantProps<typeof badgeVariants>

const props = defineProps<{
  variant?: BadgeVariants['variant']
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn(badgeVariants({ variant: props.variant }), props.class)">
    <slot />
  </span>
</template>
