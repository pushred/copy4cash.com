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
  import { getContext, onMount, setContext } from 'svelte'
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
    Pagination,
    Recognition,
    SocialMedia,
    Text,
    Video,
  } from '../components'

  import { onBreakpointChange } from '../theme.js'

  function getProjectIndex() {
    return projects.findIndex((project) => slug === project.slug?.current)
  }

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
    if (isModalOpen) return

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

  function handleResize(event) {
    const target = carouselEl.children[currentIndex]
    carouselEl.scrollTo(target.offsetLeft, 0)
  }

  export let projects = []
  export let slug = undefined

  let carouselEl = undefined
  let currentIndex = undefined
  let project = undefined
  let isModalOpen = false

  let sm = false
  let md = false
  let lg = false

  const projectEls = [...Array(projects.length)]

  $: if (slug && carouselEl) {
    currentIndex = getProjectIndex()
    project = projects[currentIndex]

    const target = carouselEl.children[currentIndex]

    if (target) {
      document.scrollingElement.scrollTop = 0
      carouselEl.scrollLeft = target.offsetLeft
    }
  }

  const siteContext = getContext('site')

  setContext('page', {
    getCarouselEl: () => carouselEl,
  })

  siteContext.stores.isModalOpen.subscribe((value) => {
    isModalOpen = value
  })

  onBreakpointChange((breakpoint) => {
    sm = breakpoint?.key === 'sm'
    md = breakpoint?.key === 'md'
    lg = breakpoint?.key === 'lg'
  })

  onMount(() => {
    unorphan('p, h1, h2, h3, h4')

    const observers = projectEls.map((projectEl) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const slug = projectEl.id
            if (!slug) return
            goto(`/${slug}`)
          }
        },
        {
          root: carouselEl,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0.5,
        }
      )

      observer.observe(projectEl)

      return {
        observer,
        projectEl,
      }
    })

    return () =>
      observers.forEach(({ observer, projectEl }) =>
        observer.unobserve(projectEl)
      )
  })
</script>

<svelte:head>
  <title>
    {project ? `${project.client}: ${project.name} · ` : ''}Copy4Ca$h
  </title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} on:resize={handleResize} />

<div class="layout">
  <Grid cols={[6, 6, 12]}>
    <GridItem colStart={[2, 3, 1]} colSpan={[4, 2, 2]} rowStart={[2, 2, 1]}>
      <Navbar gotoHome={() => goto('/')}>
        <svelte:fragment slot="sub-nav">
          <Button
            variant="raised"
            icon="back"
            on:click={() => gotoProject('back')}
          />
          <Button variant="raised" icon="menu" on:click={() => goto('/')} />
          <Button
            variant="raised"
            icon="next"
            on:click={() => gotoProject('next')}
          />
        </svelte:fragment>
        <svelte:fragment slot="site-nav">
          <NavLink icon="hire" label="Hire" />
          <NavLink icon="work" label="Work" {goto} url="/" />
        </svelte:fragment>
      </Navbar>
    </GridItem>

    <GridItem center colStart={[1, 1, 5]} colSpan={6}>
      {#if !lg}
        <Pagination
          totalPages={projects.length}
          {currentIndex}
          on:change={handlePagination}
          --space-bottom="var(--space-8)"
        />
      {/if}
      <div bind:this={carouselEl} class="carousel">
        {#each projects as project, index}
          <section
            bind:this={projectEls[index]}
            id={project.slug?.current}
            class="project"
            class:active={index === currentIndex}
          >
            {#if index === currentIndex}
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
            {/if}
            <div class="shim" aria-hidden>.</div>
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
  }

  .carousel {
    position: relative; /* required by offsetLeft */
    display: flex;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .project {
    width: 100%;
    height: 1px; /* limit height for observer threshold */
    flex-shrink: 0;
    overflow-y: hidden;
    scroll-snap-align: start;
  }

  .project.active {
    overflow-y: auto;
    height: auto;
  }

  .shim {
    /* carousel does not scroll to empty project shells */
    height: 1px;
    overflow: hidden;
    visibility: hidden;
  }
</style>
