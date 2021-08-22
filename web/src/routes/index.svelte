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

  import {
    ArrowLogo,
    FeaturedProjects,
    FullScreenVideo,
    LoadingOverlay,
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
    <div class="info">
      <strong>Diana Casthart</strong>
      <em>Professional Smartass</em>
      <span>ACD Copywriter</span>
    </div>
  </footer>
</div>

<style>
  :global(header > *) {
    height: 250px;
  }

  footer strong {
    color: var(--neon-green);
    margin-right: 1em;
  }

  footer em {
    color: var(--gold);
    margin-right: 1em;
  }

  footer span {
    color: var(--purple);
  }

  .sm,
  .md {
    padding: var(--space-page-margin-y) var(--space-page-margin-x);
  }

  .sm header,
  .md header {
    margin-bottom: var(--space-10);
  }

  .sm footer .info,
  .md footer .info {
    display: flex;
    flex-direction: column;
    margin-top: var(--space-8);
    gap: var(--space-2);
    text-align: center;
  }

  .lg {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .lg header {
    height: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }

  .lg main {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lg footer {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: var(--white);
    padding-bottom: var(--space-10);
  }

  .lg footer .info {
    display: flex;
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
  }
</style>
