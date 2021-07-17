<script>
  import groq from 'groq'

  import sanity from '../sanity'
  import { ArrowLogo, FeaturedProjects, FullScreenVideo } from '../components'

  const query = groq`
    *[_type == 'project'] | order(order) {
      name,
      client,
    }
  `

  async function fetch() {
    const data = await sanity.fetch(query)
    return data
  }
</script>

{#await fetch()}
  Loading
{:then data}
  <div class="layout">
    <header>
      <ArrowLogo />
    </header>
    <main>
      <FeaturedProjects {data} />
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
{:catch error}
  Boom
{/await}

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
