import { readable, writable } from 'svelte/store'

export const isLoading = writable(false)
export const isModalOpen = writable(false)
export const breakpoint = writable(null)

export const isTouch = readable(null, function start(set) {
  set(window.matchMedia('(pointer: coarse)').matches)
})
