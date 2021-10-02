<script context="module">
  import groq from 'groq'
  import { getReasonPhrase } from 'http-status-codes'
  import { onMount } from 'svelte'

  import { getSanityClient } from '../sanity'
  import { isLoading } from '../stores.js'

  export async function load({ page, status }) {
    isLoading.set(true)

    const reasonPhrase = getReasonPhrase(status)

    const pathParts = page.path.split('/').filter(Boolean)
    const isPreviewHost = page.host.split('.').shift() === 'preview'
    const isProjectPath = pathParts.length === 1

    const reason = {
      props: {
        reasonPhrase,
      },
    }

    if (!isProjectPath || !isPreviewHost) return reason

    const sanity = getSanityClient(page.host)

    const data = await sanity.fetch(
      groq`
        *[_type == 'project'] {
          slug
        }
      `
    )

    const isValidSlug = data.some(
      (project) => project.slug.current === pathParts[0]
    )

    if (!isValidSlug) return reason

    return {
      // don't return an actual redirect, it uses location.href and will 404 again
      props: {
        redirectPath: `/${pathParts[0]}`,
      },
    }
  }
</script>

<script>
  import { goto } from '$app/navigation'

  import Heading2 from '../components/text/Heading2.svelte'

  export let reasonPhrase = 'Error'
  export let redirectPath = undefined

  onMount(() => {
    if (redirectPath) return goto(redirectPath)
    isLoading.set(false)
  })
</script>

<Heading2>{reasonPhrase}</Heading2>
