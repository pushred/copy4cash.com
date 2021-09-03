<script context="module">
  import groq from 'groq'
  import { onMount } from 'svelte'

  import { overlayDrafts } from '../overlayDrafts'
  import sanity from '../sanity'
  import { isLoading } from '../stores.js'

  export async function load() {
    const query = groq`
      *[_type == 'hire'] {
        status,
        details,
        intro,
        obsessions,
        resume {
          asset -> {
            url
          }
        }
      }
    `

    return {
      props: {
        data: overlayDrafts(await sanity.fetch(query))[0],
      },
    }
  }
</script>

<script>
  export let data

  //isLoading.set(true)

  onMount(() => {
    isLoading.set(false)
  })
</script>
