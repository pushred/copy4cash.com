<script>
  import { onDestroy, onMount, setContext } from 'svelte'

  import * as stores from '../stores'
  import { getMediaQueryStrings, theme } from '../theme.js'

  setContext('site', {
    stores,
  })

  const mediaQueries = []

  onMount(() => {
    const mediaQueryStrings = getMediaQueryStrings()

    Object.entries(mediaQueryStrings).forEach(
      ([index, { key, mediaQuery }]) => {
        mediaQueries.push({
          key,
          mediaQueryList: window.matchMedia(mediaQuery),
          listener: (event) => {
            if (event.matches) stores.breakpoint.set({ key, index, mediaQuery })
          },
        })
      }
    )

    mediaQueries.forEach(({ key, mediaQueryList, listener }, index) => {
      if (mediaQueryList.matches) {
        stores.breakpoint.set({ key, index, mediaQuery: mediaQueryList.media })
      }
      mediaQueryList.addEventListener('change', listener)
    })
  })

  onDestroy(() => {
    mediaQueries.forEach(({ mediaQueryList, listener }) => {
      mediaQueryList.removeEventListener('change', listener)
    })
  })
</script>

<div>
  <slot />
</div>

<svelte:head>
  <title>Copy4Ca$h</title>
</svelte:head>

<style>
  :global(body) {
    background-color: var(--dark-purple);
  }
</style>
