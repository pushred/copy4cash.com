<script>
  import { onMount, setContext } from 'svelte'
  import { goto } from '$app/navigation'
  import unorphan from 'unorphan'

  import Project from './Project.svelte'
  import { isLoading } from '../stores.js'

  export let data = []
  export let currentIndex = undefined
  export let currentSlug = undefined

  function handleResize(event) {
    const target = carouselEl.children[currentIndex]
    carouselEl.scrollTo(target.offsetLeft, 0)
  }

  isLoading.set(true)

  let carouselEl = undefined

  const projectEls = [...Array(data.length)]

  $: if (currentIndex !== undefined && carouselEl) {
    const target = carouselEl.children[currentIndex]

    if (target) {
      document.scrollingElement.scrollTop = 0
      carouselEl.scrollLeft = target.offsetLeft
    }
  }

  setContext('page', {
    getCarouselEl: () => carouselEl,
  })

  onMount(() => {
    unorphan('p, h1, h2, h3, h4')

    const observers = projectEls.map((projectEl) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const newSlug = projectEl.id
            if (!newSlug || newSlug === currentSlug) return
            goto(`/${newSlug}`)
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

    isLoading.set(false)

    return () =>
      observers.forEach(({ observer, projectEl }) =>
        observer.unobserve(projectEl)
      )
  })
</script>

<svelte:window on:resize={handleResize} />

<div bind:this={carouselEl} class="carousel">
  {#each data as project, index}
    <section
      bind:this={projectEls[index]}
      id={project.slug?.current}
      class="project"
      class:active={index === currentIndex}
    >
      {#if index === currentIndex}
        <Project data={project} />
      {/if}
      <div class="shim" aria-hidden>.</div>
    </section>
  {/each}
</div>

<style>
  ::-webkit-scrollbar {
    display: none;
  }

  .carousel {
    position: relative; /* required by offsetLeft */
    display: flex;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: auto; /* disable momentum, skips projects */
  }

  .project {
    width: 100%;
    height: 1px; /* limit height for observer threshold */
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    scroll-snap-align: end;
    padding-top: var(--space-10);
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
