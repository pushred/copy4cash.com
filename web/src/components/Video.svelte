<script>
  import { getContext, onMount } from 'svelte'
  import { nanoid } from 'nanoid'
  import VimeoPlayer from '@vimeo/player'

  import Placeholder from './Placeholder.svelte'

  import { currentPlayerId } from '../stores.js'

  export let caption = ''
  export let vimeoId
  export let originalWidth
  export let originalHeight

  export let width = originalWidth
  export let height = originalHeight

  const context = getContext('page')

  let captionId = caption ? nanoid() : undefined
  let container
  let hasIntersected = false
  let isPlaying
  let player
  let playerEl

  $: if (playerEl && !player) {
    player = new VimeoPlayer(playerEl, {
      width,
      height,
      autoplay: false,
      id: vimeoId,
      responsive: true,
    })

    player.on('pause', () => (isPlaying = false))

    player.on('play', () => {
      currentPlayerId.set(vimeoId)
      isPlaying = true
    })
  }

  $: if (isPlaying && $currentPlayerId !== vimeoId) {
    isPlaying = false
    player.pause()
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
        root: context?.getCarouselEl(),
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
    <div bind:this={playerEl} aria-describedby={captionId} />
  {:else}
    <Placeholder width={originalWidth} height={originalHeight} />
  {/if}
</div>

<style>
  .video {
    width: 100%;
    position: relative;
    margin-bottom: var(--space-bottom);
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
