<script>
  import { getContext, onMount } from 'svelte'
  import { nanoid } from 'nanoid'

  import Placeholder from './Placeholder.svelte'

  export let caption = ''
  export let title = 'Video'
  export let vimeoId
  export let originalWidth
  export let originalHeight

  export let width = originalWidth
  export let height = originalHeight

  const context = getContext('page')

  let captionId = caption ? nanoid() : undefined
  let container
  let hasIntersected = false

  function proportionalHeight(node) {
    if (width === originalWidth) return

    function setHeight() {
      const offsetWidth = node.offsetWidth
      const scaleFactor = offsetWidth / originalWidth
      node.setAttribute('height', originalHeight * scaleFactor)
    }

    setHeight()
    window.addEventListener('resize', setHeight)

    return {
      destroy() {
        window.removeEventListener('resize', setHeight)
      },
    }
  }

  onMount(() => {
    if (typeof IntersectionObserver === 'undefined') {
      hasIntersected = true
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          hasIntersected = true
          observer.unobserve(container)
        }
      },
      {
        root: context?.getCarouselEl() || window,
        rootMargin: '0px 0px 0px 0px',
      }
    )

    observer.observe(container)

    return () => observer.unobserve(container)
  })
</script>

<div bind:this={container} class="video">
  {#if caption}
    <span class="caption" id={captionId}>{caption}</span>
  {/if}

  {#if vimeoId && hasIntersected}
    <iframe
      use:proportionalHeight
      {width}
      {height}
      aria-describedby={captionId}
      allow="autoplay; fullscreen; picture-in-picture"
      frameBorder="0"
      src={`https://player.vimeo.com/video/${vimeoId}`}
      {title}
    />
  {:else}
    <Placeholder width={originalWidth} height={originalHeight} />
  {/if}
</div>

<style>
  .video {
    width: 100%;
    position: relative;
    margin-bottom: var(--space-Video);
  }

  .caption {
    position: absolute;
    top: var(--space-6);
    right: var(--space-6);
    font-weight: bold;
    line-height: 1;
    color: var(--white);
  }
</style>
