<script context="module">
  import groq from 'groq'

  import { overlayDrafts } from '../overlayDrafts'
  import sanity from '../sanity'

  export async function load() {
    const query = groq`
      *[_type == 'project'] | order(order) {
        _id,
        slug {
          current
        },
        client,
        name
      }
    `

    return {
      props: {
        projects: overlayDrafts(await sanity.fetch(query)),
      },
    }
  }
</script>

<script>
  import { onMount } from 'svelte'
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

  export let projects

  let sm = false
  let md = false
  let lg = false

  let isLoading = true

  onBreakpointChange((breakpoint) => {
    sm = breakpoint?.key === 'sm'
    md = breakpoint?.key === 'md'
    lg = breakpoint?.key === 'lg'
  })

  onMount(() => {
    isLoading = false
  })
</script>

<div class="layout" class:sm class:md class:lg>
  <header>
    <ArrowLogo />
  </header>
  <main>
    {#if isLoading}<LoadingOverlay />{/if}
    <FeaturedProjects data={projects} />
    <FullScreenVideo vimeoId="334283806" />
  </main>
  <footer>
    <Flex justifyContent="space-between">
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
    padding: var(--space-page-margin-y) var(--space-page-margin-x);
  }

  .sm header,
  .md header {
    margin-bottom: var(--space-10);
  }

  .lg {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: space-between;
  }

  .lg header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-grow: 1;
    padding-bottom: var(--space-10);
  }

  .lg main {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
</style>
