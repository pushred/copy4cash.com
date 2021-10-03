<script context="module">
  import groq from 'groq'
  import imageUrlBuilder from '@sanity/image-url'

  import { getSanityClient } from '../sanity'

  export async function load() {
    const sanity = getSanityClient(page.host)
    const urlBuilder = imageUrlBuilder(sanity)

    const metadata = await sanity.fetch(groq`
      *[_id == 'metadata'][0] {
        description,
        image
      }
    `)

    const stylizedText = await sanity.fetch(groq`
      *[_id == 'stylized-text'][0] {
        exclusions[]
      }
    `)

    return {
      props: {
        metadata: {
          description: metadata.description,
          imageUrl: metadata.image
            ? urlBuilder.image(metadata.image).format('png').url()
            : undefined,
        },
        stylizedTextExclusions: stylizedText?.exclusions,
      },
    }
  }
</script>

<script>
  import smoothscroll from 'smoothscroll-polyfill'
  import { onDestroy, onMount, setContext } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  import {
    Flex,
    Grid,
    GridItem,
    LoadingOverlay,
    Navbar,
    NavLink,
  } from '../components'

  import * as stores from '../stores'
  import { loadFonts } from '../fonts.js'
  import { getMediaQueryStrings, onBreakpointChange } from '../theme.js'

  export let metadata = {}
  export let stylizedTextExclusions = []

  setContext('site', {
    metadata,
    stores,
    stylizedTextExclusions,
  })

  const mediaQueries = []
  const { isLoading } = stores

  $: isHome = $page.path === '/'
  $: isHire = $page.path === '/hire'

  let lg = false
  let xl = false

  onBreakpointChange((breakpoint) => {
    lg = breakpoint?.key === 'lg'
    xl = breakpoint?.key === 'xl'
  })

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

    loadFonts()
    smoothscroll.polyfill()
  })

  onDestroy(() => {
    mediaQueries.forEach(({ mediaQueryList, listener }) => {
      mediaQueryList.removeEventListener('change', listener)
    })
  })
</script>

{#if isHome}
  {#if $isLoading}<LoadingOverlay />{/if}
  <slot />
{:else}
  <div class="layout" class:lg class:xl>
    {#if $isLoading}<LoadingOverlay />{/if}
    <Grid cols={[6, 6, 12, 12]} minHeight="full">
      <GridItem
        colStart={[1, 1, 1, 1]}
        colSpan={[6, 6, 2, 2]}
        rowStart={[2, 2, 1, 1]}
        alignSelf={['end', 'end']}
      >
        <Navbar gotoHome={() => goto('/')}>
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
        </Navbar>
      </GridItem>
      <GridItem
        justifySelf={[
          undefined,
          undefined,
          isHire && 'center',
          isHire && 'center',
        ]}
        colStart={[1, 1, 5, 5]}
        colSpan={6}
        textAlign="center"
      >
        <div class="wrapper">
          <slot />
        </div>
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
    padding-top: var(--space-margin-y);
    padding-bottom: var(--space-margin-y);
  }

  .layout.lg,
  .layout.xl {
    padding-right: var(--space-margin-x);
    padding-left: var(--space-margin-x);
  }

  .wrapper {
    /* this element avoids issue with double-rendering */
    display: contents;
  }
</style>
