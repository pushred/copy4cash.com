<script>
  import { onDestroy, onMount, setContext } from 'svelte'
  import { goto } from '$app/navigation'
  import unorphan from 'unorphan'

  import Project from './Project.svelte'
  import { scrollToTop } from '../scroll.js'

  import {
    currentPlayerId,
    hasSwiped,
    isLoading,
    isPaginationVisible,
  } from '../stores.js'

  export let data = []
  export let currentIndex = undefined
  export let currentSlug = undefined

  function handleResize(event) {
    const target = carouselEl.children[currentIndex]
    carouselEl.scrollTo(target.offsetLeft, 0)
  }

  isLoading.set(true)

  let carouselEl = undefined
  let initialLoad = true
  let initialProjectEl
  let observers

  const projectEls = [...Array(data.length)]

  setContext('page', {
    getCarouselEl: () => carouselEl,
  })

  onMount(() => {
    unorphan('p, h1, h2, h3, h4')

    initialProjectEl = carouselEl.children[currentIndex]

    observers = projectEls.map((projectEl) => {
      const observer = new IntersectionObserver(
        async (entries) => {
          if (entries[0].isIntersecting) {
            const newSlug = projectEl.id
            if (!newSlug || newSlug === currentSlug) return

            hasSwiped.set(true)
            currentPlayerId.set(null) // pause any active players

            await scrollToTop(projectEl)

            goto(`/${newSlug}`, { noscroll: true })
          }
        },
        {
          root: carouselEl,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0.9,
        }
      )

      observer.observe(projectEl)

      return {
        observer,
        projectEl,
      }
    })
  })

  function handleStart() {
    document.scrollingElement.scrollTop = 0
    carouselEl.scrollLeft = initialProjectEl.offsetLeft
  }

  function handleNavigationEnd() {
    if (!projectEls.filter(Boolean).length || currentIndex === undefined) return

    // correct scroll position to counter router update behavior
    // TODO: investigate further, maybe file an issue
    carouselEl.scrollLeft = projectEls[currentIndex].offsetLeft
  }

  function handleInitialScroll() {
    // workaround issue where $isPaginationVisible is not correctly initialized
    initialLoad = false
  }

  onDestroy(() => {
    observers.forEach(({ observer, projectEl }) =>
      observer.unobserve(projectEl)
    )
  })
</script>

<svelte:window
  on:resize={handleResize}
  on:scroll|once={handleInitialScroll}
  on:sveltekit:start={handleStart}
  on:sveltekit:navigation-end={handleNavigationEnd}
/>

{#if Array.isArray(data)}
  <div
    bind:this={carouselEl}
    class="carousel"
    class:can-scroll={$isPaginationVisible || initialLoad}
  >
    {#each data as project, index}
      <section
        bind:this={projectEls[index]}
        id={project.slug?.current}
        class="project"
        class:active={index === currentIndex}
      >
        <Project data={project} />
      </section>
    {/each}
  </div>
{/if}

<style>
  ::-webkit-scrollbar {
    display: none;
  }

  .carousel {
    position: relative; /* required by offsetLeft */
    display: flex;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: auto; /* disable momentum, skips projects */
  }

  .can-scroll {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .project {
    width: 100%;
    max-height: 100vh;
    flex-shrink: 0;
    margin: 0 var(--space-10);
    overflow-x: hidden;
    overflow-y: hidden;
    scroll-snap-align: end;
    padding-top: var(--space-10);
  }

  .project.active {
    overflow-y: auto;
    height: auto;
    max-height: 100%;
  }
</style>
