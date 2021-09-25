<script context="module">
  import groq from 'groq'

  import { overlayDrafts } from '../overlayDrafts'
  import { getSanityClient } from '../sanity'

  export async function load({ page }) {
    const query = groq`
      *[_type == 'project'] | order(order) {
        _id,
        slug,
        client,
        name,
        summary,
        page[] {
          _type,
          caption,
          columns,
          heading,
          showHeading,
          gap,
          embed {
            embedHtml
          },
          file {
            asset -> {
              url
            }
          },
          images[] {
            _type,
            description,
            image {
              asset -> {
                metadata {
                  dimensions {
                    aspectRatio,
                    height,
                    width
                  }
                },
                mimeType,
                url
              },
            }
          },
          slides[] {
            _type,
            description,
            image {
              asset -> {
                metadata {
                  dimensions {
                    aspectRatio,
                    height,
                    width
                  },
                  mimeType
                },
                url
              }
            }
          },
          posts[],
          sources[],
          video,
          videos[] {
            _type,
            caption,
            heading,
            video
          }
        }
      }
    `

    const sanity = getSanityClient(page.host)
    const data = await sanity.fetch(query)
    const projects = overlayDrafts(data)

    const currentIndex = projects.findIndex(
      (project) => page.params.project === project.slug?.current
    )

    return {
      props: {
        currentIndex,
        projects,
        currentProject: projects[currentIndex],
        currentSlug: page.params.project,
      },
    }
  }
</script>

<script>
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import unorphan from 'unorphan'

  import { Pagination, Project, ProjectCarousel } from '../components'
  import { isLoading, isModalOpen, isTouch } from '../stores.js'
  import { onBreakpointChange } from '../theme.js'

  export let projects = []
  export let currentIndex = undefined
  export let currentProject = undefined
  export let currentSlug = undefined

  function gotoProject(directionOrIndex) {
    const prevIndex = currentIndex - 1
    const nextIndex = currentIndex + 1
    const lastIndex = projects.length - 1

    let index

    if (directionOrIndex === 'back') {
      index = projects[prevIndex] === undefined ? lastIndex : prevIndex
    } else if (directionOrIndex === 'next') {
      index = projects[nextIndex] === undefined ? 0 : nextIndex
    } else if (typeof directionOrIndex === 'number') {
      index = directionOrIndex
    }

    goto(`/${projects[index].slug.current}`)
  }

  function handleKeydown(event) {
    if ($isModalOpen) return

    if (event.key === 'ArrowLeft') {
      gotoProject('back')
    }

    if (event.key === 'ArrowRight') {
      gotoProject('next')
    }
  }

  function handlePagination(event) {
    gotoProject(event.detail)
  }

  isLoading.set(true)

  let lg = false

  onBreakpointChange((breakpoint) => {
    lg = breakpoint?.key === 'lg'
  })

  onMount(() => {
    unorphan('p, h1, h2, h3, h4')
    isLoading.set(false)
  })
</script>

<svelte:head>
  <title>
    {currentProject
      ? `${currentProject.client}: ${currentProject.name} · `
      : ''}Copy4Ca$h
  </title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

{#if !lg}
  <Pagination
    totalPages={projects.length}
    {currentIndex}
    on:change={handlePagination}
    --space-bottom="var(--space-8)"
  />
{/if}

{#if $isTouch}
  <ProjectCarousel {currentIndex} {currentSlug} data={projects} />
{:else}
  <Project data={currentProject} />
{/if}

{#if lg}
  <Pagination
    totalPages={projects.length}
    {currentIndex}
    on:change={handlePagination}
    --space-bottom="var(--space-6)"
  />
{/if}
