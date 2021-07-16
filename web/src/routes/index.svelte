<script>
  import groq from 'groq'
  import sanity from '../sanity'
  import FeaturedProjects from '../components/FeaturedProjects.svelte'

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
  <main>
    <FeaturedProjects {data} />
  </main>
{:catch error}
  Boom
{/await}

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
