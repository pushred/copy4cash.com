import { writable } from 'svelte/store'

export const isLoading = writable(false)
export const isModalOpen = writable(false)

export const breakpoint = writable(null)
