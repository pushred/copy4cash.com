import { readable, writable } from 'svelte/store'

export const hasSwiped = writable(false)

export const isLoading = writable(false)
export const isModalOpen = writable(false)

export const breakpoint = writable(null)
export const currentPlayerId = writable(null)

export const isTouch = readable(null, function start(set) {
  if (globalThis.matchMedia === undefined) return set(false)
  set(globalThis.matchMedia('(pointer: coarse)').matches)
})
