<script>
  import { afterUpdate, getContext, onDestroy } from 'svelte'
  import { nanoid } from 'nanoid'
  import VimeoPlayer from '@vimeo/player'

  import Placeholder from './Placeholder.svelte'

  import { currentPlayerId } from '../stores.js'

  export let caption = ''
  export let context = 'standalone'
  export let vimeoId
  export let originalWidth
  export let originalHeight

  export let width = originalWidth
  export let height = originalHeight

  const pageContext = getContext('page')

  let aspectRatio = '16:9'

  if (originalHeight / originalWidth === 1.775) {
    aspectRatio = '9:16'
  }

  if (originalHeight / originalWidth === 1) {
    aspectRatio = '1:1'
  }

  let captionId = caption ? nanoid() : undefined
  let container
  let hasIntersected = false
  let isPlaying
  let observer
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

  afterUpdate(async () => {
    if (!container) return

    if (player) {
      const playerId = await player.getVideoId()
      if (playerId.toString() !== vimeoId.toString()) {
        player.loadVideo(vimeoId)
        return
      }
    }

    if (typeof IntersectionObserver === 'undefined') {
      hasIntersected = true
      return
    }

    let root = undefined

    if (typeof pageContext?.getCarouselEl === 'function') {
      root = pageContext?.getCarouselEl()
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          hasIntersected = true
          observer.unobserve(container)
        }
      },
      {
        root,
        rootMargin: '0px 0px 0px 0px',
      }
    )

    observer.observe(container)
  })

  onDestroy(() => {
    if (player) player.destroy()
    observer?.unobserve(container)
  })
</script>

<div bind:this={container} class="video {context} ratio-{aspectRatio}">
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

  .standalone.ratio-1\:1,
  .standalone.ratio-9\:16 {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
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
