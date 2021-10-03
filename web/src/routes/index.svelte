<script context="module">
  import groq from 'groq'

  import { overlayDrafts } from '../overlayDrafts'
  import { getSanityClient } from '../sanity'

  export async function load({ page }) {
    const sanity = getSanityClient(page.host)

    const homeQuery = await sanity.fetch(groq`
      *[_type == 'home'] {
        _id,
        reel {
          vimeoId
        }
      }
    `)

    const projectsQuery = await sanity.fetch(groq`
      *[_type == 'project' && hidden == false] | order(order) {
        _id,
        slug {
          current
        },
        client,
        name
      }

    `)

    return {
      props: {
        home: overlayDrafts(homeQuery)[0],
        projects: overlayDrafts(projectsQuery),
      },
    }
  }
</script>

<script>
  import { getContext, onMount } from 'svelte'
  import { goto } from '$app/navigation'

  import {
    ArrowLogo,
    FeaturedProjects,
    Flex,
    FullScreenVideo,
    LoadingOverlay,
    NameFooter,
    NavLink,
  } from '../components'

  import { onBreakpointChange } from '../theme.js'

  export let home = undefined
  export let projects = []

  const context = getContext('site')

  let sm = false
  let md = false
  let lg = false
  let xl = false

  let isLoading = true

  onBreakpointChange((breakpoint) => {
    sm = breakpoint?.key === 'sm'
    md = breakpoint?.key === 'md'
    lg = breakpoint?.key === 'lg'
    xl = breakpoint?.key === 'xl'
  })

  onMount(() => {
    isLoading = false
  })
</script>

<svelte:head>
  <title>Copy4Ca$h</title>
  <meta name="description" content={context.metadata.description} />
  <meta property="og:image" content={context.metadata.imageUrl} />
</svelte:head>

<div class="layout" class:sm class:md class:lg class:xl>
  <header>
    <ArrowLogo />
  </header>
  <main>
    {#if isLoading}<LoadingOverlay />{/if}
    <FeaturedProjects data={projects} />
    <FullScreenVideo vimeoId={home.reel?.vimeoId} />
  </main>
  <footer>
    <Flex
      alignItems={['center', 'center', undefined, undefined]}
      flexDirection={['column', 'column', undefined, undefined]}
      gap={['5', '5', undefined, undefined]}
      justifyContent={[undefined, undefined, 'space-between', 'space-between']}
    >
      <div class="shim" />
      <NameFooter />
      <NavLink icon="hire" label="Hire" {goto} url="/hire" />
    </Flex>
  </footer>
</div>

<style>
  :global(header > *) {
    height: 250px;
  }

  .shim {
    width: 4rem;
  }

  footer {
    margin: var(--space-10);
  }

  .sm,
  .md {
    padding: var(--space-margin-y) var(--space-margin-x);
  }

  .lg,
  .xl {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: space-between;
  }

  .lg header,
  .xl header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-grow: 1;
    padding-bottom: var(--space-10);
  }

  .lg main,
  .xl main {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
</style>
