<script>
  import { onDestroy, onMount, setContext } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  import {
    Grid,
    GridItem,
    LoadingOverlay,
    Navbar,
    NavLink,
  } from '../components'

  import * as stores from '../stores'
  import { getMediaQueryStrings, theme } from '../theme.js'

  setContext('site', {
    stores,
  })

  const mediaQueries = []

  let isLoading = true
  $: isHome = $page.path === '/'

  stores.isLoading.subscribe((value) => (isLoading = value))

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

<svelte:head>
  <title>Copy4Ca$h</title>
</svelte:head>

{#if isHome}
  {#if isLoading}<LoadingOverlay />{/if}
  <slot />
{:else}
  <div class="layout">
    {#if isLoading}<LoadingOverlay />{/if}
    <Grid cols={[6, 6, 12]}>
      <GridItem colStart={[1, 1, 1]} colSpan={[6, 6, 2]} rowStart={[2, 2, 1]}>
        <Navbar gotoHome={() => goto('/')}>
          <svelte:fragment slot="site-nav">
            <NavLink icon="work" label="Work" {goto} url="/" />
            <NavLink icon="hire" label="Hire" {goto} url="/hire" />
            <NavLink
              icon="instagram"
              label="Insta"
              url="https://www.instagram.com/whitefridaynight/"
            />
            <NavLink
              icon="twitter"
              label="Follow"
              url="https://twitter.com/whitefridaynite"
            />
          </svelte:fragment>
        </Navbar>
      </GridItem>

      <GridItem center colStart={[1, 1, 5]} colSpan={6}>
        <slot />
      </GridItem>
    </Grid>
  </div>
{/if}

<style>
  :global(body) {
    background-color: var(--dark-purple);
  }

  .layout {
    max-width: var(--max-page-width);
    padding: var(--space-page-margin-y) var(--space-page-margin-x);
  }
</style>
