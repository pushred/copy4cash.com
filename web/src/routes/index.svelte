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
  import { ArrowLogo, FeaturedProjects, FullScreenVideo } from '../components'
  export let projects
</script>

<div class="layout">
  <header>
    <ArrowLogo />
  </header>
  <main>
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
  .layout {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  header {
    height: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }

  :global(header > *) {
    height: 250px;
  }

  main {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: var(--white);
    padding-bottom: var(--space-10);
  }

  footer .info {
    display: flex;
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
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
</style>
