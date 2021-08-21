<script context="module">
  import groq from 'groq'

  import { overlayDrafts } from '../overlayDrafts'
  import sanity from '../sanity'

  export async function load({ page }) {
    const { project } = page.params

    const query = groq`
      *[_type == 'project'] {
        _id,
        slug,
        client,
        name,
        summary,
        page[] {
          _type,
          columns,
          heading,
          showHeading,
          gap,
          embed {
            embedHtml
          },
          images[] {
            _key,
            _type,
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
            },
          },
          slides[] {
            _key,
            _type,
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

    const data = await sanity.fetch(query)

    return {
      props: {
        slug: project,
        projects: overlayDrafts(data),
      },
    }
  }
</script>

<script>
  import { onMount, setContext } from 'svelte'
  import { goto } from '$app/navigation'
  import unorphan from 'unorphan'

  import {
    Button,
    Carousel,
    Gallery,
    Grid,
    GridItem,
    Heading2,
    Heading3,
    Heading4,
    Navbar,
    NavLink,
    Recognition,
    SocialMedia,
    Text,
    Video,
  } from '../components'

  import * as stores from '../stores'

  function getProjectIndex() {
    return projects.findIndex((project) => slug === project.slug?.current)
  }

  function gotoProject(direction) {
    const prevIndex = currentIndex - 1
    const nextIndex = currentIndex + 1
    const lastIndex = projects.length - 1

    let index

    if (direction === 'back') {
      index = projects[prevIndex] === undefined ? lastIndex : prevIndex
    } else if (direction === 'next') {
      index = projects[nextIndex] === undefined ? 0 : nextIndex
    }

    goto(`/${projects[index].slug.current}`)
  }

  function handleKeydown(event) {
    if (isModalOpen) return

    if (event.key === 'ArrowLeft') {
      gotoProject('back')
    }

    if (event.key === 'ArrowRight') {
      gotoProject('next')
    }
  }

  function handleResize(event) {
    const target = carouselEl.children[currentIndex]
    carouselEl.scrollTo(target.offsetLeft, 0)
  }

  export let projects = []
  export let slug

  let carouselEl
  let currentIndex
  let project
  let isModalOpen

  $: if (slug && carouselEl) {
    currentIndex = getProjectIndex()
    project = projects[currentIndex]

    const target = carouselEl.children[currentIndex]
    document.scrollingElement.scrollTop = 0
    carouselEl.scrollTo(target.offsetLeft, 0)
  }

  setContext('page', {
    stores,
    getCarouselEl: () => carouselEl,
  })

  stores.isModalOpen.subscribe((value) => {
    isModalOpen = value
  })

  console.log(projects)

  onMount(() => {
    unorphan('p, h1, h2, h3, h4')
  })
</script>

<svelte:head>
  <title>
    {project ? `${project.client}: ${project.name} · ` : ''}Copy4Ca$h
  </title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} on:resize={handleResize} />

<div class="layout">
  <Grid>
    <GridItem colStart={1} colSpan={2}>
      <Navbar gotoHome={() => goto('/')}>
        <svelte:fragment slot="sub-nav">
          <Button icon="back" on:click={() => gotoProject('back')} />
          <Button icon="menu" on:click={() => goto('/')} />
          <Button icon="next" on:click={() => gotoProject('next')} />
        </svelte:fragment>
        <svelte:fragment slot="site-nav">
          <NavLink icon="hire" label="Hire" />
          <NavLink icon="work" label="Work" {goto} url="/" />
        </svelte:fragment>
      </Navbar>
    </GridItem>

    <GridItem center colStart={5} colSpan={6}>
      <div bind:this={carouselEl} class="carousel">
        {#each projects as project, index}
          <section class:active={index === currentIndex}>
            <Heading2>{project.name}</Heading2>

            {#if project.client}
              <Heading4>{project.client}</Heading4>
            {/if}

            {#if project.summary}
              <Text blocks={project.summary} />
            {/if}

            {#each project.page || [] as block}
              {#if block.heading && block.showHeading !== false}
                <Heading3>{block.heading}</Heading3>
              {/if}

              {#if block._type === 'carousel'}
                <Carousel data={block.slides} />
              {/if}

              {#if block._type === 'gallery'}
                <Gallery
                  columns={block.columns}
                  gap={block.gap}
                  data={block.images}
                />
              {/if}

              {#if block._type === 'recognition'}
                <Heading3>Recognition</Heading3>
                <Recognition data={block.sources} />
              {/if}

              {#if block._type === 'social-media'}
                <Heading3>What People Are Saying</Heading3>
                <SocialMedia data={block.posts} />
              {/if}

              {#if block._type === 'video'}
                <Video
                  vimeoId={block.video.vimeoId}
                  width="100%"
                  originalWidth={block.video.width}
                  originalHeight={block.video.height}
                />
              {/if}

              {#if block._type === 'video-carousel'}
                <Carousel data={block.videos} />
              {/if}

              {#if block._type === 'video-gallery'}
                <Gallery
                  columns={block.columns}
                  gap={block.gap}
                  data={block.videos}
                />
              {/if}
            {/each}
          </section>
        {/each}
      </div>
    </GridItem>
  </Grid>
</div>

<style>
  .layout {
    max-width: var(--max-page-width);
    padding: var(--space-page-margin-y) var(--space-page-margin-x);
    background-color: var(--purple-black);
  }

  .carousel {
    position: relative; /* required by offsetLeft */
    display: flex;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
  }

  section {
    --space-Heading2: var(--space-4);
    --space-Heading3: var(--space-4);
    --space-Heading4: var(--space-4);

    --space-Gallery: var(--space-10);
    --space-Recognition: var(--space-10);
    --space-SocialMedia: var(--space-10);
    --space-Text: var(--space-10);
    --space-Video: var(--space-10);

    width: 100%;
    height: 1px;
    flex-shrink: 0;
    overflow-y: hidden;
  }

  section.active {
    overflow-y: auto;
    height: auto;
  }
</style>
