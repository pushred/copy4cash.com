<script>
  import { onMount, setContext } from 'svelte'
  import { goto } from '$app/navigation'
  import unorphan from 'unorphan'

  import Project from './Project.svelte'
  import { hasSwiped, isLoading } from '../stores.js'

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

            hasSwiped.set(true)

            window.scroll({
              top: 0,
              behavior: 'smooth',
            })

            setTimeout(() => {
              goto(`/${newSlug}`, { noscroll: true })
            }, 500) // delay navigation until scroll snap occurs
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
      <Project data={project} />
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
